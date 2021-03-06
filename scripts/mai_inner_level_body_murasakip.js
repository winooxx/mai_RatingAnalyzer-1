javascript:

var mra_not_evaluated="", mra_evaluated="", mra_max_rating="";

(function()
{

var sss_rating=0, ss_rating=0, s_rating=0;

var best_ave=0, best_limit=0, hist_limit=0;
var expect_max=0, best_rating=0, recent_rating=0, hist_rating=0, best_left=0, hist_left=0;
function calc_rating(rate_array, make_text)
{
	var tmp=0, str="", best30=0, history434=0;
	for(var i=0; i<30; i++)
	{
		best30 += rate_array[i];
	}	
	history434=best30;
	for(var i=30 ;i<mra_history;i++)
	{
		history434 += rate_array[i];
	}

	best_ave = Math.floor(best30/30)/100;
	best_limit = Math.floor(rate_array[29])/100;
	hist_limit = Math.floor(rate_array[mra_history-1])/100;
	if(Number(hist_limit)<=0)
	{
		var count=0;
		for(count=0; rate_array[count] > 0; count++);
		hist_limit= (mra_history-count) + "曲不足";
	}
	
	best_rating = Math.floor(best30/44);	//best30はすでにRating*100
	recent_rating = Math.floor(rate_array[0]*10/44);
	hist_rating = Math.floor(history434/(mra_history*11));	// multiply 4/(473*44)
	
	best_left = (44 - Math.ceil(best30%44))/100;
	hist_left = (mra_history*11 - Math.ceil(history434%(mra_history*11)))/100;

	expect_max = (Math.floor(best_rating + recent_rating + hist_rating)/100);

	best_rating /= 100;
	recent_rating /= 100;
	hist_rating /= 100;
	
	return expect_max;
}

function print_result_sub(title, value, explain)
{
	var tmp = "";
	tmp += "<tr>";
	tmp += "<th>" + title + "<\/th>";
	tmp += "<td align=center>" + value + "<\/td>"
	tmp += "<td>" + explain + "<\/td>";
	tmp += "<\/tr>";
	
	return tmp;
}

		
var lv136="", lv135="", lv134="", lv133="", lv132="", lv131="", lv130="", lv13_="";
var lv129="", lv128="", lv127="", lv12p="";
var lv126="", lv125="", lv124="", lv123="", lv122="", lv121="", lv120="", lv12_="";
var lv119="", lv118="", lv117="", lv11p="";
var lv116="", lv115="", lv114="", lv113="", lv112="", lv111="", lv110="", lv11_="";
var lv109="", lv108="", lv107="", lv10p="";
var lv106="", lv105="", lv104="", lv103="", lv102="", lv101="", lv100="", lv10_="";
var lv099="", lv098="", lv097="", lv09p="";
var lv096="", lv095="", lv094="", lv093="", lv092="", lv091="", lv090="", lv09_="";
var lv099="", lv098="", lv097="", lv09p="";
var lv096="", lv095="", lv094="", lv093="", lv092="", lv091="", lv090="", lv09_="";
var lv089="", lv088="", lv087="", lv08p="";
var lv086="", lv085="", lv084="", lv083="", lv082="", lv081="", lv080="", lv08_="";
var lv079="", lv078="", lv077="", lv07p="";
var lv076="", lv075="", lv074="", lv073="", lv072="", lv071="", lv070="", lv07_="";

var mlist_length=maimai_inner_lv.length;
var rating_table=[];
for(var i=0; i<mlist_length; i++)
{
	//max Rating計算用
	rating_table.push(Math.max.apply(null, maimai_inner_lv[i].levels.map(mra_diff2tmp)));
	
	
	// 内部lv出力用
	for(var lv=0; lv<3; lv++)
	{
		var tmpstr="";
		tmpstr += (maimai_inner_lv[i].nick != "")?maimai_inner_lv[i].nick:maimai_inner_lv[i].name;
		tmpstr += (lv==0)?"(赤)":(lv==2)?"(白)":"";
		tmpstr += "、";

		switch(maimai_inner_lv[i].levels[lv])
		{
			case "13.6":	lv136 += tmpstr; continue;
			case "13.5":	lv135 += tmpstr; continue;
			case "13.4":	lv134 += tmpstr; continue;
			case "13.3":	lv133 += tmpstr; continue;
			case "13.2":	lv132 += tmpstr; continue;
			case "13.1":	lv131 += tmpstr; continue;
			case "13.0":	lv130 += tmpstr; continue;
			case "12.9":	lv129 += tmpstr; continue;
			case "12.8":	lv128 += tmpstr; continue;
			case "12.7":	lv127 += tmpstr; continue;
			case "12.6":	lv126 += tmpstr; continue;
			case "12.5":	lv125 += tmpstr; continue;
			case "12.4":	lv124 += tmpstr; continue;
			case "12.3":	lv123 += tmpstr; continue;
			case "12.2":	lv122 += tmpstr; continue;
			case "12.1":	lv121 += tmpstr; continue;
			case "12.0":	lv120 += tmpstr; continue;
			case "11.9":	lv119 += tmpstr; continue;
			case "11.8":	lv118 += tmpstr; continue;
			case "11.7":	lv117 += tmpstr; continue;
			case "11.6":	lv116 += tmpstr; continue;
			case "11.5":	lv115 += tmpstr; continue;
			case "11.4":	lv114 += tmpstr; continue;
			case "11.3":	lv113 += tmpstr; continue;
			case "11.2":	lv112 += tmpstr; continue;
			case "11.1":	lv111 += tmpstr; continue;
			case "11.0":	lv110 += tmpstr; continue;
			case "10.9":	lv109 += tmpstr; continue;
			case "10.8":	lv108 += tmpstr; continue;
			case "10.7":	lv107 += tmpstr; continue;
			case "10.6":	lv106 += tmpstr; continue;
			case "10.5":	lv105 += tmpstr; continue;
			case "10.4":	lv104 += tmpstr; continue;
			case "10.3":	lv103 += tmpstr; continue;
			case "10.2":	lv102 += tmpstr; continue;
			case "10.1":	lv101 += tmpstr; continue;
			case "10.0":	lv100 += tmpstr; continue;
			case "9.9":	lv099 += tmpstr; continue;
			case "9.8":	lv098 += tmpstr; continue;
			case "9.7":	lv097 += tmpstr; continue;
			case "9.6":	lv096 += tmpstr; continue;
			case "9.5":	lv095 += tmpstr; continue;
			case "9.4":	lv094 += tmpstr; continue;
			case "9.3":	lv093 += tmpstr; continue;
			case "9.2":	lv092 += tmpstr; continue;
			case "9.1":	lv091 += tmpstr; continue;
			case "9.0":	lv090 += tmpstr; continue;
			case "8.9":	lv089 += tmpstr; continue;
			case "8.8":	lv088 += tmpstr; continue;
			case "8.7":	lv087 += tmpstr; continue;
			default:	continue;
		}
	}
}

function mra_add_musiclevel_list(lv_list, m_list)
{
	var liststr="";
	for(var i=0; i<lv_list.length; i++)
	{
		liststr += "<tr><th>" + mra_diff2waku(lv_list[i]) + "<\/th> <td>" + m_list[i] + "<\/td><\/tr>";
	}
	
	return liststr;
}

function mra_level_lavel(lv_str)
{
	var str="";
	str += "<tr><th colspan=2><font color=\"#ff5252\">転載禁止<\/font> ";
	str += lv_str;
	str += " <font color=\"#ff5252\">転載禁止<\/font><\/th><\/tr>";
	return str;
}
		

rating_table = rating_table.sort(function(a,b){return b-a;}).map(String);
s_rating=calc_rating(rating_table.map(function(x){return mra_arch2rate_100(0.97,x);}), false);
ss_rating=calc_rating(rating_table.map(function(x){return mra_arch2rate_100(0.995,x);}), false);
sss_rating=calc_rating(rating_table.map(function(x){return mra_arch2rate_100(1,x);}), true);

mra_evaluated += "<table border=1>";
mra_evaluated += mra_level_lavel("Level 13");
mra_evaluated += mra_add_musiclevel_list(["13.6", "13.5", "13.4", "13.3", "13.2", "13.1", "13.0"],
			[lv136, lv135, lv134, lv133, lv132, lv131, lv130]);
mra_evaluated += mra_level_lavel("Level 12+");
mra_evaluated += mra_add_musiclevel_list(["12.9", "12.8", "12.7"], [lv129, lv128, lv127]);
mra_evaluated += mra_level_lavel("Level 12");
mra_evaluated += mra_add_musiclevel_list(["12.6", "12.5", "12.4", "12.3", "12.2", "12.1", "12.0"],
			[lv126, lv125, lv124, lv123, lv122, lv121, lv120]);
mra_evaluated += mra_level_lavel("Level 11+");
mra_evaluated += mra_add_musiclevel_list(["11.9", "11.8", "11.7"], [lv119, lv118, lv117]);
mra_evaluated += mra_level_lavel("Level 11");
mra_evaluated += mra_add_musiclevel_list(["11.6", "11.5", "11.4", "11.3", "11.2", "11.1", "11.0"],
			[lv116, lv115, lv114, lv113, lv112, lv111, lv110]);
mra_evaluated += mra_level_lavel("Level 10+");
mra_evaluated += mra_add_musiclevel_list(["10.9", "10.8", "10.7"], [lv109, lv108, lv107]);
mra_evaluated += mra_level_lavel("Level 10");
mra_evaluated += mra_add_musiclevel_list(["10.6", "10.5", "10.4", "10.3", "10.2", "10.1", "10.0"],
			[lv106, lv105, lv104, lv103, lv102, lv101, lv100]);
mra_evaluated += mra_level_lavel("Level 9+");
mra_evaluated += mra_add_musiclevel_list(["9.9", "9.8", "9.7"], [lv099, lv098, lv097]);
mra_evaluated += mra_level_lavel("Level 9");
mra_evaluated += mra_add_musiclevel_list(["9.6", "9.5", "9.4", "9.3", "9.2", "9.1", "9.0"],
			[lv096, lv095, lv094, lv093, lv092, lv091, lv090]);
mra_evaluated += mra_level_lavel("Level 8+");
mra_evaluated += mra_add_musiclevel_list(["8.9", "8.8", "8.7"], [lv089, lv088, lv087]);
mra_evaluated += "<\/table>"
	

mra_max_rating += "<table border=1>";
mra_max_rating += "<tr>";
mra_max_rating += "<th colspan=3 bgcolor=\"\#000000\"><font color=\"\#ffffff\">基本データ<\/font><\/th>";
mra_max_rating += "<\/tr>";

mra_max_rating += "<tr>";
mra_max_rating += "<th>現在の曲数<\/th><td align=center>" + maimai_inner_lv.length + "<\/td>";
mra_max_rating += "<td>紫+ver.最終収録曲数<\/td>";
mra_max_rating += "<\/tr>";

mra_max_rating += "<tr>"
mra_max_rating += "<th>現在のRating<\/th>";
mra_max_rating += "<td align=center>" + (s_rating.toFixed(2)) + "<br>(" + (ss_rating.toFixed(2)) + ")<\/td>"
mra_max_rating += "<td>全S達成時<br>(全部99.5%超え) <\/td>";
mra_max_rating += "<\/tr>";

mra_max_rating += print_result_sub("BEST平均", (best_ave.toFixed(2)), "上位30曲の平均レート値");
mra_max_rating += print_result_sub("BEST下限", (best_limit.toFixed(2)), "30位のレート値");
mra_max_rating += print_result_sub("HIST下限", (hist_limit.toFixed(2)), "434位のレート値");

mra_max_rating += "<tr>";
mra_max_rating += "<th colspan=3 bgcolor=\"\#000000\"><font color=\"\#ffffff\">予想到達可能Rating<\/font><\/th>";
mra_max_rating += "<\/tr>";

mra_max_rating += print_result_sub("予想値", (expect_max.toFixed(2)), "BEST枠、RECENT枠、HISTORY枠の合計");
mra_max_rating +=
	print_result_sub("BEST枠", (best_rating.toFixed(2)) + "<br>(" + (best_left.toFixed(2)) + ")", "(上位30曲の合計)/44<br>()は+0.01する為の必要レート");
mra_max_rating += print_result_sub("RECENT枠", (recent_rating.toFixed(2)), "レート値1位を10回達成");
mra_max_rating +=
	print_result_sub("HISTORY枠", (hist_rating.toFixed(2)) + "<br>(" + (hist_left.toFixed(2)) + ")", "(上位434曲の合計)/(434*44/4)<br>()は+0.01する為の必要レート");

mra_max_rating += "<\/table>";

})()
