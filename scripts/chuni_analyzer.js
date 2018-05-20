javascript:
(function()
{
var chuni_dom='https://chunithm-net.com/mobile/';
var genre_number=[0, 2, 3, 6, 7, 8, 5];
var genre_name=["POPS & ANIME", "niconico", "東方Project", "VARIETY", "イロドリミドリ", "言ノ葉Project", "ORIGINAL"]
var name_init=["あ行", "か行", "さ行", "た行", "な行", "は行", "ま行", "や行", "ら行", "わ行", "A～G", "H～N", "O～U", "V～Z", "数字"];
var lv_name=['1','2','3','4','5','6','7','7+','8','8+','9','9+','10','10+','11','11+','12','12+','13','13+','14','14+'];

var your_id="", your_rating="", your_max_rating="";
var your_best_rating, your_best_ave, your_max_recent, your_reachable;
var ma_list=[], ex_list=[], adv_list=[], ba_list=[], mname_list=[], rate_array=[];
var w_ma_op=new Array(name_init.length).fill(0);
var w_ex_op=new Array(name_init.length).fill(0);
var w_adv_op=new Array(name_init.length).fill(0);
var w_ba_op=new Array(name_init.length).fill(0);
var g_ma_op=new Array(genre_number.length).fill(0);
var g_ex_op=new Array(genre_number.length).fill(0);
var g_adv_op=new Array(genre_number.length).fill(0);
var g_ba_op=new Array(genre_number.length).fill(0);
var l_op=new Array(lv_name.length).fill(0);

function list2data(x)
{
  var lamplist=[
	'common/images/icon_clear.png',
	'common/images/icon_fullcombo.png',
	'common/images/icon_alljustice.png',
	'common/images/icon_fullchain.png',
	'common/images/icon_fullchain2.png'
  ]
  var lamp_rslt=['Clr', 'FC', 'AJ', 'FCh', 'FCh-'];
  var name, score, clr="", fcaj="", fch="", tmp;
  name=$(x).find('.music_title')[0].innerText.trim();
  tmp=$(x).find('.text_b');
  score=(tmp.length!=0)?(Number(tmp[0].innerText.replace(/,/g, ""))):0;
  var lamp=Array.prototype.slice.call($(x).find('img')).map(function(x){return x.getAttribute('src')})
  
  for(var i=0; i<lamp.length; i++)
  {
  	var idx=lamplist.indexOf(lamp[i])
	switch(idx)
	{
		case -1: continue;
		default: break;
	}
	switch(lamp_rslt[idx])
	{
		case 'Clr':
			clr=lamp_rslt[idx]; break;
		case 'FC':
		case 'AJ':
			fcaj=lamp_rslt[idx]; break;
		case 'FCh':
		case 'FCh-':
			fch=lamp_rslt[idx]; break;
		default: break;
	}
  }
  return {score:score, lamp0:clr, lamp1:fcaj, lamp2:fch};
}

function get_your_id(addr)
{
	$.ajax({type:'GET', url:addr, async: false})
		.done(function(data)
		{
			your_id=$(data).find('.player_name')[0].innerText.replace(/ /g, "").replace(/Lv.[0-9]*/, "");
			var rating_str=$(data).find('.player_rating')[0].innerText.replace(/ /g, "");
			your_rating=rating_str.replace(/RATING:|\/.*/g, "");
			your_max_rating=rating_str.replace(/.*MAX|\)/g, "");
		}
	);
	return;
}

function get_scoredata(addr, diff, array)
{
	$.ajax({type:'POST', url:addr, data:'genre=99&level=' + diff + '&music_genre=music_genre', async: false})
		.done(function(data)
		{
			//成功時の処理本体
			Array.prototype.slice.call($(data).find('.w388')).map(list2data).map(function(x){array.push(x)});
		}
	);
	return;
}

function get_musicname(addr, diff, array)
{
	$.ajax({type:'POST', url:addr, data:'genre=99&music_genre=level_' + diff, async: false})
		.done(function(data)
		{
			//成功時の処理本体
			Array.prototype.slice.call($(data).find('.music_title'))
				.map(function(x){return x.innerText.trim().replace(/\n/, "");}).map(function(x){array.push(x)});
		}
	);
	return;
}

function lv2idx(lv)	//
{
	var i_part=0, d_part=0, d_part_c=lv.slice(-1);

	switch(d_part_c)
	{
		case '+':
			i_part=Number(lv.slice(0,-1)); d_part=1; break;
		case '-':
			i_part=Number(lv.slice(0,-1)); d_part=0; break;
		default:
			i_part=Number(lv.slice(0,2)); d_part=(Number(d_part_c)>6)?1:0; break;
	}
	if(Number(i_part < 7))
		return i_part-1;
	return 6 + (i_part-7)*2 + d_part;		
}
	
function soft_condition_sub_level(l)
{
	return (l.slice(-1)=='+')?Number(l.slice(0,-1) + '.7'):
		(l.slice(-1)=='-')?Number(l.slice(0,-1) + '.0'):
		Number(l);
}
	
function sort_condition(a,b)
{
	if(b.rate != a.rate)
	{
		return b.rate - a.rate;
	}
	var a_lv=soft_condition_sub_level(a.lv);
	var b_lv=soft_condition_sub_level(b.lv);
	if(b_lv != a_lv)
	{
		return b_lv - a_lv;
	}
	return b.score - a.score;
}

function rate_XtoY(basis, max, gap, n)
{
	return basis+(max-basis)*n/gap
}

function data2pdata(data)
{
	var score=data.score;
	var tmp;
	var tmp=(score>=1010000)?'SSS+0.8':
		(score>=1007500)?'SSS+' + rate_XtoY(0, 0.75, 2500, score-1007500).toFixed(4) :
		(score>=1005000)?'SS+' + rate_XtoY(0.5, 1, 2500, score-1005000).toFixed(4) :
		(score>=1000000)?'SS+' + rate_XtoY(0, 0.5, 5000, score-1000000).toFixed(4) :
		(score>= 975000)?'S+' + rate_XtoY(0, 1, 25000, score-975000).toFixed(5) :
		(score>= 950000)?'AAA+' + rate_XtoY(0, 1.5, 25000, score-950000).toFixed(5) :
		(score>= 925000)?'AA+' + rate_XtoY(0, 1.5, 25000, score-925000).toFixed(5):
		(score>= 900000)?'A+' + rate_XtoY(0, 2, 25000, score-900000).toFixed(5):
		'under A+' + (Math.floor(rate_XtoY(0,1, 900000, score)*1000000)/100).toFixed(4) + '%';
	return tmp;
}

function score2rate(l, d)
{
	var base = (l.slice(-1)=='+')?Number(l.slice(0,-1) + '70'):
		(l.slice(-1)=='-')?Number(l.slice(0,-1) + '00'):
		Number(l.slice(0,-2) + l.slice(-1) + '0');

	return (score>=1007500)?base+200:
		(score>=1005000)?rate_XtoY(base+150, base+200, 2500, score-1005000):
		(score>=1000000)?rate_XtoY(base+100, base+150, 5000, score-1000000):
		(score>= 975000)?rate_XtoY(base+  0, base+100, 25000, score- 975000):
		(score>= 925000)?rate_XtoY(Math.max(base-300, 0), base+  0, 50000, score- 925000):
		(score>= 900000)?rate_XtoY(Math.max(base-500, 0), Math.max(base-300, 0),  25000, score- 900000):
		(score>= 800000)?rate_XtoY(Math.max((base-500)/2, 0), Math.max(base-500, 0), 100000, score- 800000):
		(score>= 500000)?rate_XtoY(0,                     Math.max((base-500)/2, 0), 300000, score- 500000):
		0;
}

function data2op(l, d)
{
	var score=d.score;
	var op_tmp=0;
	var base = (l.slice(-1)=='+')?Number(l.slice(0,-1) + '70'):
		(l.slice(-1)=='-')?Number(l.slice(0,-1) + '00'):
		Number(l.slice(0,-2) + l.slice(-1) + '0');
	base *= 5;

	op_tmp =(score>=1010000)?base+1400:
		(score>=1007500)?rate_XtoY(base+1000, base+1375, 2500, score-1007500):
		(score>=1005000)?rate_XtoY(base+750, base+1000, 2500, score-1005000):
		(score>=1000000)?rate_XtoY(base+500, base+750, 5000, score-1000000):
		(score>= 975000)?rate_XtoY(base+  0, base+500, 25000, score- 975000):
		(score>= 925000)?rate_XtoY(Math.max(base-1500, 0), base+  0, 50000, score- 925000):
		(score>= 900000)?rate_XtoY(Math.max(base-2500, 0), Math.max(base-1500, 0),  25000, score- 900000):
		(score>= 800000)?rate_XtoY(Math.max((base-2500)/2, 0), Math.max(base-2500, 0), 100000, score- 800000):
		(score>= 500000)?rate_XtoY(0, Math.max((base-2500)/2, 0), 300000, score- 500000):
		0;

	switch(d.lamp1)
	{
		case 'FC':	op_tmp+=50; break;
		case 'AJ':	op_tmp+=100; break;
		default:	break;
	}
	return op_tmp;
}


function print_result_sub_print_header(title)
{
	var rslt_str ="";
	rslt_str += "<head>";
	rslt_str += "<title>" + title + " | 新・CYCLES FUNの寝言</title>";
    	rslt_str += "<link rel='stylesheet' media='all' type='text/css' href='https://sgimera.github.io/mai_RatingAnalyzer/css/mai_rating.css'>";
 	rslt_str += "<link rel='stylesheet' media='all' type='text/css' href='https://sgimera.github.io/mai_RatingAnalyzer/css/display.css'>";
 	rslt_str += "<link rel='stylesheet' media='all' type='text/css' href='https://sgimera.github.io/mai_RatingAnalyzer/css/result.css'>";
  	rslt_str += "</head>";
	
	return rslt_str;
}
	
function overpower_analyze()
{
	var w_idx, g_idx, ma_op, ex_op, adv_op, ba_op;

	for(var i=0; i<mname_list.length; i++)
	{
		//各難易度のOverPower算出
		ma_op = data2op(chuni_music_list[i].lv[3], ma_list[i]);	ex_op = data2op(chuni_music_list[i].lv[2], ex_list[i]);
		adv_op = data2op(chuni_music_list[i].lv[1], adv_list[i]); ba_op = data2op(chuni_music_list[i].lv[0], ba_list[i]);
		//レベル毎OverPowerに加算
		l_op[lv2idx(chuni_music_list[i].lv[3])] += ma_op; l_op[lv2idx(chuni_music_list[i].lv[2])] += ex_op;
		l_op[lv2idx(chuni_music_list[i].lv[1])] += adv_op; l_op[lv2idx(chuni_music_list[i].lv[0])] += ba_op;
		//ジャンル毎のOverPowerに加算
		g_idx=genre_number.indexOf(chuni_music_list[i].genre);
		g_ma_op[g_idx] += ma_op; g_ex_op[g_idx] += ex_op; g_adv_op[g_idx] += adv_op; g_ba_op[g_idx] += ba_op;
		//頭文字事のOverPowerに加算
		w_idx=chuni_music_list[i].word;
		w_ma_op[w_idx] += ma_op; w_ex_op[w_idx] += ex_op; w_adv_op[w_idx] += adv_op; w_ba_op[w_idx] += ba_op;
	}
	return;
}

function reachable_rating_analyze()
{
	var ma_rate, ex_rate, adv_rate, ba_rate, best30=0;

	for(var i=0; i<mname_list.length; i++)
	{
		//各難易度のレート値算出
		ma_rate = score2rate(chuni_music_list[i].lv[3], ma_list[i].score);
		rate_array.push({id:chuni_music_list[i].id, diff:'M', rate:ma_rate, lv:chuni_music_list[i].lv[3], str:score2pdata(ma_list[i])});
		ex_rate = score2rate(chuni_music_list[i].lv[2], ex_list[i].score);
		rate_array.push({id:chuni_music_list[i].id, diff:'E', rate:ex_rate, lv:chuni_music_list[i].lv[2], str:score2pdata(ex_list[i])});
		adv_rate = score2rate(chuni_music_list[i].lv[1], adv_list[i].score);
		rate_array.push({id:chuni_music_list[i].id, diff:'A', rate:adv_rate, lv:chuni_music_list[i].lv[1], str:score2pdata(adv_list[i])});
		ba_rate = score2rate(chuni_music_list[i].lv[0], ba_list[i].score);
		rate_array.push({id:chuni_music_list[i].id, diff:'B', rate:ba_rate, lv:chuni_music_list[i].lv[0], str:score2pdata(ba_list[i])});
	}
	rate_array.sort(sort_condition);	
	for(var i = 0; i < 30 ; i++)
	{
		best30 += rate_array[i].rate;
	}
	your_best_ave = Math.floor(best30 / 30);
	your_best_rating = Math.floor(best30 / 40);
	your_max_recent = Math.floor(rate_array[0].rate / 4);

	return;
}
	
	
function print_result()
{
	var str="";
	var today = new Date();
	var data_str = today.getFullYear() + "/" + (today.getMonth()+1) + "/" + today.getDate() + " ";
	data_str += (("0"+today.getHours()).slice(-2)) + ":" + (("0"+today.getMinutes()).slice(-2)) + ":" + (("0"+today.getSeconds()).slice(-2));
	
	str += "<html>";
	str += print_result_sub_print_header("あならいざもどき for chunithm")

	str += "<body>";
	str += "<p align=right><a href='" + chuni_dom + "Home.html'>chunithm-netに戻る</a></p>";
	str += "<h2 align=center>OverPower解析結果</h2>";
	str += "<table border=1 align=center class=datatable>";
	str += "<tr><th colspan=5 bgcolor='#000000'><font color='#ffffff'>" + your_id + "のOverPower<br>" + data_str + "現在</font></th></tr>";

	str += "<tr><th colspan=5>Level</th></tr>";
	for(var i=0; i<6; i++)
	{
		str += "<tr><th>Level" + lv_name[i] + "</th>";
		str += "<td align=right colspan=4>" + (l_op[i]/100).toFixed(2) + "</td>";
		str += "</tr>";
	}
	for(var i=6; i<lv_name.length; i++)
	{
		str += "<tr><th>Level" + lv_name[i] + "/" + lv_name[i+1] + "</th>";
		str += "<td align=right colspan=2>" + (l_op[i++]/100).toFixed(2) + "</td>";
		str += "<td align=right colspan=2>" + (l_op[i]/100).toFixed(2) + "</td>";
		str += "</tr>";
	}
	
	str += "<tr><th colspan=5>ジャンル</th></tr>";
	str += "<tr><th></th>";
	str += "<td align=center>MASTER</td>";
	str += "<td align=center>EXPERT</td>";
	str += "<td align=center>ADV.</td>";
	str += "<td align=center>BASIC</td>";
	str += "</tr>";	
	for(var i=0; i<genre_number.length; i++)
	{
		str += "<tr><th>" + genre_name[i] + "</th>";
		str += "<td align=right>" + (g_ma_op[i]/100).toFixed(2) + "</td>";
		str += "<td align=right>" + (g_ex_op[i]/100).toFixed(2) + "</td>";
		str += "<td align=right>" + (g_adv_op[i]/100).toFixed(2) + "</td>";
		str += "<td align=right>" + (g_ba_op[i]/100).toFixed(2) + "</td>";
		str += "</tr>";
	}

	str += "<tr><th colspan=5>頭文字</th></tr>";
	str += "<tr><th></th>";
	str += "<td align=center>MASTER</td>";
	str += "<td align=center>EXPERT</td>";
	str += "<td align=center>ADV.</td>";
	str += "<td align=center>BASIC</td>";
	str += "</tr>";	
	for(var i=0; i<name_init.length; i++)
	{
		str += "<tr><th>" + name_init[i] + "</th>";
		str += "<td align=right>" + (w_ma_op[i]/100).toFixed(2) + "</td>";
		str += "<td align=right>" + (w_ex_op[i]/100).toFixed(2) + "</td>";
		str += "<td align=right>" + (w_adv_op[i]/100).toFixed(2) + "</td>";
		str += "<td align=right>" + (w_ba_op[i]/100).toFixed(2) + "</td>";
		str += "</tr>";
	}
	
	str += "<tr><th colspan=5>参考値（合計）</th></tr>";
	str += "<tr><th></th>";
	str += "<td align=center>MASTER</td>";
	str += "<td align=center>EXPERT</td>";
	str += "<td align=center>ADV.</td>";
	str += "<td align=center>BASIC</td>";
	str += "</tr>";	
	str += "<tr><th>全曲合計</th>";
	str += "<td align=right>" + (g_ma_op.reduce(function(x,y){return x+y;})/100).toFixed(2) + "</td>";
	str += "<td align=right>" + (g_ex_op.reduce(function(x,y){return x+y;})/100).toFixed(2) + "</td>";
	str += "<td align=right>" + (g_adv_op.reduce(function(x,y){return x+y;})/100).toFixed(2) + "</td>";
	str += "<td align=right>" + (g_ba_op.reduce(function(x,y){return x+y;})/100).toFixed(2) + "</td>";
	str += "</tr>";
	
	str += "<h2 align=center>Rating解析結果</h2>";
	str += "<table border=1 align=center class=datatable>";
	str += "<tr><th colspan=3 bgcolor='#000000'><font color='#ffffff'>" + your_id + "のRating<br>" + data_str + "現在</font></th></tr>";
	str += "<tr><th>現在のRating</th><td>" + your_rating + "<br>(" + your_max_rating + ")</td>";
	str += "<td>chunithm-netでみられるデータ</td></tr>";
	str += "<tr><th>BEST30平均</th><td>" + (your_best_ave/100).toFixed(2) + "</td><td>上位30譜面のレート値平均</td></tr>";
	str += "<tr><th>到達可能</th><td>" + ((your_best_rating+your_max_recent)/100).toFixed(2) + "</td>";
	str += "<td>B:" + (your_best_rating/100).toFixed(2) + " + R:" + (your_max_recent/100).toFixed(2) "</td></tr>";
	str += "</table>";
	
	str += "</table>";
	str += "</body>";
	str += "</html>";


	document.open(); document.write(str); document.close();

}
//メインはここから
get_your_id(chuni_dom + 'Home.html');	//名前、Rating取得
get_musicname(chuni_dom + 'MusicRanking.html', 'master', mname_list);	//現在の楽曲取得
get_scoredata(chuni_dom + 'MusicGenre.html', 'master', ma_list);	//Masterのスコアデータ取得
get_scoredata(chuni_dom + 'MusicGenre.html', 'expert', ex_list);	//Expertのスコアデータ取得
get_scoredata(chuni_dom + 'MusicGenre.html', 'advanced', adv_list);	//Advancedのスコアデータ取得
get_scoredata(chuni_dom + 'MusicGenre.html', 'basic', ba_list);		//Basicのスコアデータ取得
	
overpower_analyze();
reachable_rating_analyze();

print_result();

})(); void(0);
