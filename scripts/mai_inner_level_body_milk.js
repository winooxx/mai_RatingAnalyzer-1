javascript:

var mra_not_evaluated="", mra_evaluated="", mra_max_rating="";

(function()
{

var datalist=[], sss_rating=0, ss_rating=0, s_rating=0;

var best_ave=0, best_limit=0, hist_limit=0;
var expect_max=0, best_rating=0, recent_rating=0, hist_rating=0, best_left=0, hist_left=0;
function calc_rating(rate_array, make_text)
{
	var tmp=0, str="", best30=0, history473=0;
	for(var i=0; i<30; i++)
	{
		best30 += rate_array[i];
	}	
	history473=best30;
	for(var i=30 ;i<mra_history;i++)
	{
		history473 += rate_array[i];
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
	hist_rating = Math.floor(history473/(mra_history*11));	// multiply 4/(473*44)
	
	best_left = (44 - Math.ceil(best30%44))/100;
	hist_left = (mra_history*11 - Math.ceil(history473%(mra_history*11)))/100;

	expect_max = (Math.floor(best_rating + recent_rating + hist_rating)/100);

	best_rating /= 100;
	recent_rating /= 100;
	hist_rating /= 100;
	
	return expect_max;
}
	
function get_ratingrank(rating)
{
	return (rating>=15)?("mai_rainbow"):(rating>=14.5)?("mai_gold"):(rating>=14)?("mai_silver"):(rating>=13)?("mai_copper"):
	(rating>=12)?("mai_violet"):(rating>=10)?("mai_red"):(rating>=7)?("mai_yellow"):(rating>=4)?("mai_green"):
	(rating>=1)?("mai_blue"):("mai_white");
}
	
function print_result_sub(title, value, explain)
{
	var tmp = "";
	tmp += "<tr>";
	tmp += "<th>" + title + "<\/th>";
	tmp += "<th align=center class=tweet_info>" + value + "<\/th>"
	tmp += "<td>" + explain + "<\/td>";
	tmp += "<\/tr>";
	
	return tmp;
}

function print_result_rating(title, value, explain, dispbasevalue)
{
	var tmp = "";
	tmp += "<tr>";
	tmp += "<th>" + title + "<\/th>";
	tmp += "<th align=center class='tweet_info " + get_ratingrank(dispbasevalue) + "'>" + value + "<\/hd>"
	tmp += "<td>" + explain + "<\/td>";
	tmp += "<\/tr>";
	
	return tmp;
}

function mra_add_musiclevel_unknown_list(lv_list, m_list)
{
	var liststr="";
	for(var i=0; i<lv_list.length; i++)
	{
		liststr += "<tr><th>" + lv_list[i] + "<\/th>";
		liststr += "<td>" + ((m_list[i]=="")?("（全部検証済）"):(m_list[i])) + "<\/td><\/tr>";
	}
	
	return liststr;
}

function mra_add_musiclevel_list(lv_list, m_list)
{
	var liststr="";
	for(var i=0; i<lv_list.length; i++)
	{
		liststr += "<tr><th>" + mra_diff2waku(lv_list[i]) + "<\/th> <td>" + m_list[i].join('') + "<\/td><\/tr>";
	}
	
	return liststr;
}

function mra_level_lavel(lv_str)
{
	var str ="";
	str += "<tr><th colspan=2><font color=\"#ff5252\">転載禁止<\/font> ";
	str += lv_str;
	str += " <font color=\"#ff5252\">転載禁止<\/font><\/th><\/tr>";
	return str;
}

function tl(l, s)
{
	var ll=[], tmp=0;
	for(var n=0; n<3; n++)
	{
		tmp=mra_diff2tmp(l[n]);
		(Math.floor(tmp)<12||s[n]%500==0)?(ll.push(l[n])):
		(ll.push(Math.floor(tmp) + "." + [20,60,30,21,17,35,50,28,55,65].indexOf((s[n]/5)%100-2*Math.floor(tmp))));
	}
	
	return ll;
}


var lv13minus=[13.6, 13.5, 13.4, 13.3, 13.2, 13.1, 13.0];
var lv12puls=[12.9, 12.8, 12.7];
var lv12equal=[12.6, 12.5, 12.4, 12.3];
var lv12minus=[12.2, 12.1, 12.0];
var lv11plus=[11.9, 11.8, 11.7];
var lv11minus=[11.6, 11.5, 11.4, 11.3, 11.2, 11.1, 11.0];
var lv10plus=[10.9, 10.8, 10.7];
var lv10minus=[10.6, 10.5, 10.4, 10.3, 10.2, 10.1, 10.0];
var lv9plus=[9.9, 9.8, 9.7];
var lv9minus=[9.6, 9.5, 9.4, 9.3, 9.2, 9.1, 9.0];
var lv8plus=[8.9, 8.8, 8.7];


	
mra_not_evaluated += "<table border=1>";
mra_not_evaluated += "<tr><th colspan=2>" + mra_update_mlist + "時点での未検証譜面<\/th><\/tr>";
mra_not_evaluated += mra_add_musiclevel_unknown_list(["13", "12+", "12", "11+", "11", "10+", "10", "9+", "9"],
					     [lv13_, lv12p, lv12_, lv11p, lv11_, lv10p, lv10_, lv09p, lv09_]);
mra_not_evaluated += "<\/table>";


mra_evaluated += "<table border=1>";
mra_evaluated += "<tr><th colspan=2>" + mra_update_mlist + "時点での検証済譜面<\/th><\/tr>";
mra_evaluated += mra_level_lavel("Level 13");
mra_evaluated += "<tr><th>Lv.<br>13<\/th> <td>未検証譜面以外<\/td><\/tr>";
mra_evaluated += mra_level_lavel("Level 12+");
mra_evaluated += "<tr><th>3.94<br>3.89<br>3.85<\/th> <td>未検証譜面以外<\/td><\/tr>";
/*
mra_evaluated += mra_level_lavel("Level 12 上位");
mra_evaluated += "<tr><th>3.79<br>3.74<br>3.69<br>3.64<\/th> <td>" + lv12e_rslt.join('') + "<\/td><\/tr>";
mra_evaluated += mra_level_lavel("Level 12 下位");
mra_evaluated += "<tr><th>3.59<br>3.54<br>3.49<\/th> <td>" + lv12m_rslt.join('') + "<\/td><\/tr>";
mra_evaluated += mra_level_lavel("Level 11+");
mra_evaluated += mra_add_musiclevel_list(lv11plus.map(String), lv11p_rslt);
mra_evaluated += mra_level_lavel("Level 11");
mra_evaluated += mra_add_musiclevel_list(lv11minus.map(String), lv11m_rslt);
mra_evaluated += mra_level_lavel("Level 10+");
mra_evaluated += mra_add_musiclevel_list(lv10plus.map(String), lv10p_rslt);
mra_evaluated += mra_level_lavel("Level 10");
mra_evaluated += mra_add_musiclevel_list(lv10minus.map(String), lv10m_rslt);
mra_evaluated += mra_level_lavel("Level 9+");
mra_evaluated += mra_add_musiclevel_list(lv9plus.map(String), lv9p_rslt);
mra_evaluated += mra_level_lavel("Level 9");
mra_evaluated += mra_add_musiclevel_list(lv9minus.map(String), lv9m_rslt);
mra_evaluated += mra_level_lavel("Level 8+");
mra_evaluated += mra_add_musiclevel_list(lv8plus.map(String), lv8p_rslt);
mra_evaluated += "<\/table>"
*/
mra_max_rating += "<table border=1>";
mra_max_rating += "<tr>";
mra_max_rating += "<th colspan=3 bgcolor=\"\#000000\"><font color=\"\#ffffff\">基本データ<\/font><\/th>";
mra_max_rating += "<\/tr>";

mra_max_rating += "<tr><th>現在の曲数<\/th><td align=center>" + mlist_length + "<\/td>";
mra_max_rating += "<td>" + mra_update_mlist + "現在の収録曲数<\/td><\/tr>";

mra_max_rating += print_result_rating("現在のRating", (s_rating.toFixed(2)) + "<br>(" + (ss_rating.toFixed(2)) + ")",
				"全S達成時<br>(全部99.5%超え) ", s_rating);

mra_max_rating += print_result_rating("BEST平均", best_ave.toFixed(2), "上位30曲の平均レート値", best_ave);
mra_max_rating += print_result_rating("BEST下限", best_limit.toFixed(2), "30位のレート値", best_limit);
mra_max_rating += print_result_sub("HIST下限", hist_limit.toFixed(2), mra_history + "位のレート値");
	
mra_max_rating += "<tr>";
mra_max_rating += "<th colspan=3 bgcolor=\"\#000000\"><font color=\"\#ffffff\">予想到達可能Rating<\/font><\/th>";
mra_max_rating += "<\/tr>";

mra_max_rating += print_result_rating("予想値", expect_max.toFixed(2), "下の3つの値の合計", expect_max);

mra_max_rating +=
	print_result_rating("BEST枠", (best_rating.toFixed(2)) + "<br>(" + (best_left.toFixed(2)) + ")",
				    "(上位30曲の合計)/44<br>()は+0.01する為の必要レート", best_ave);

mra_max_rating +=
	print_result_rating("RECENT枠", (recent_rating.toFixed(2)) + "<br>(" + ((trv/100).toFixed(2)) + ")",
				    "レート値1位を10回達成<br>()は1位の単曲レート値", trv/100);
mra_max_rating +=
	print_result_sub("HISTORY枠", (hist_rating.toFixed(2)) + "<br>(" + (hist_left.toFixed(2)) + ")",
			 "(上位" + mra_history +"曲の合計)*(4/" + mra_history + ")/44<br>()は+0.01する為の必要レート");

mra_max_rating += "<\/table>";

})()
