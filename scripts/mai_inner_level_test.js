javascript:
var mra_update_mlist = "2017.12.05";	/* 公式の楽曲リスト更新日 タイトルに表示*/
var mra_update_llist = "2017.12.08";	/* Lv.情報、名前変更日 */
var maimai_inner_lv = [
	{levels:["8-", "11.8", ""],	name:"前前前世", nick:""},
	{levels:["8-", "11.4", ""],	name:"未来(ソラ)の歌", nick:"未来の歌"},
	{levels:["9-", "11.0", ""],	name:"ホシトハナ", nick:""},
	{levels:["9-", "12.Z", ""],	name:"Paradisus-Paradoxum", nick:"Para-Para"},
	{levels:["7+", "10.9", ""],	name:"SAKURAスキップ", nick:""},
	{levels:["8+", "11.2", ""],	name:"Now Loading!!!!", nick:"Now Loading"},
	{levels:["8+", "12.O", ""],	name:"真・ハンサム体操でズンドコホイ", nick:"ハンサム体操"},
	{levels:["8-", "11.0", ""],	name:"GET!! 夢&DREAM", nick:"夢DREAM"},
	{levels:["9-", "11.7", ""],	name:"日本の米は世界一", nick:"日本米世界一"},
	{levels:["8-", "11.2", ""],	name:"PERFECT HUMAN", nick:""},
	{levels:["8+", "11.7", ""],	name:"SUSHI食べたい feat.ソイソース", nick:"SUSHI食べたい"},
	{levels:["8-", "11.9", ""],	name:"ポップミュージックは僕のもの", nick:"ポップミュージック"},
	{levels:["8+", "11.0", ""],	name:"きらっせ☆ウッド村ファーム", nick:"ウッド村"},
	{levels:["8-", "11.7", ""],	name:"シュガーソングとビターステップ", nick:"シュガビタ"},
	{levels:["9-", "11.1", ""],	name:"紅蓮の弓矢", nick:""},
	{levels:["7-", "8.7", ""],	name:"ようかい体操第一", nick:"ようかい体操"},
	{levels:["7-", "9.9", ""],	name:"ゲラゲラポーのうた", nick:"ゲラゲラポー"},
	{levels:["7-", "10.4", ""],	name:"夏祭り", nick:""},
	{levels:["10-", "11.6", ""],	name:"Scatman (Ski Ba Bop Ba Dop Bop)", nick:"Scatman"},
	{levels:["8+", "11.1", ""],	name:"fake!fake!", nick:"fakefake"},
	{levels:["8+", "11.5", ""],	name:"HIMITSUスパーク", nick:"ひみつスパーク"},
	{levels:["8-", "11.2", ""],	name:"でんでんぱっしょん", nick:""},
	{levels:["8-", "10.2", ""],	name:"Dragon Night", nick:""},
	{levels:["9-", "11.8", ""],	name:"Can Do", nick:""},
	{levels:["9-", "10.8", ""],	name:"The Other self", nick:""},
	{levels:["9-", "10.7", ""],	name:"カノン", nick:""},
	{levels:["9-", "10.4", ""],	name:"オルフェ", nick:""},
	{levels:["8-", "10.5", ""],	name:"ヘタリアン☆ジェット", nick:"ヘタリアン"},
	{levels:["7+", "10.4", ""],	name:"POP STAR", nick:""},
	{levels:["8-", "10.1", ""],	name:"Love or Lies", nick:""},
	{levels:["7+", "10.1", ""],	name:"jelly", nick:""},
	{levels:["7+", "9.7", ""],	name:"美しく燃える森", nick:""},
	{levels:["8-", "10.6", ""],	name:"Love You", nick:""},
	{levels:["8+", "10.1", ""],	name:"come again", nick:""},
	{levels:["7+", "9.5", "11.3"],	name:"Future", nick:""},
	{levels:["8-", "11.7", ""],	name:"ウッーウッーウマウマ(ﾟ∀ﾟ)", nick:"ウマウマ"},
	{levels:["8+", "10.1", ""],	name:"NIGHT OF FIRE", nick:""},
	{levels:["8-", "10.0", ""],	name:"YATTA!", nick:""},
	{levels:["8+", "10.9", ""],	name:"1/3の純情な感情", nick:""},
	{levels:["8-", "10.0", ""],	name:"バラライカ", nick:""},
	{levels:["8+", "11.5", ""],	name:"ココロオドル", nick:""},
	{levels:["8-", "11.1", "11.7"],	name:"若い力 -SEGA HARD GIRLS MIX-", nick:"若い力"},
	{levels:["9+", "12.O", ""],	name:"セハガガガンバッちゃう！！", nick:"セハガール"},
	{levels:["8+", "10.8", ""],	name:"ラブリー☆えんじぇる!!", nick:""},
	{levels:["8+", "10.5", ""],	name:"Stand Up!!!!", nick:"StandUp"},
	{levels:["9-", "11.8", ""],	name:"naraku within", nick:"naraku"},
	{levels:["8-", "10.7", ""],	name:"ほとんど違法行為", nick:"違法行為"},
	{levels:["8-", "10.4", ""],	name:"君の知らない物語", nick:"君知ら"},
	{levels:["8-", "10.6", ""],	name:"シリウス", nick:""},
	{levels:["7+", "10.8", ""],	name:"コネクト", nick:""},
	{levels:["9-", "12.A", ""],	name:"SAVIOR OF SONG", nick:"SAVIOR"},
	{levels:["8-", "9.8", ""],	name:"Luminize", nick:""},
	{levels:["8-", "11.0", ""],	name:"秘密の扉から会いにきて", nick:"秘密の扉"},
	{levels:["9-", "11.7", ""],	name:"青春はNon-Stop！", nick:"Non-Stop"},
	{levels:["9-", "12.E", ""],	name:"Falling Roses", nick:""},
	{levels:["8-", "10.7", ""],	name:"イチズレシピ", nick:""},
	{levels:["7+", "10.2", ""],	name:"Daydream café", nick:"ごちうさ"},
	{levels:["7-", "10.3", ""],	name:"ふ・れ・ん・ど・し・た・い", nick:"ふれんどしたい"},
	{levels:["7+", "10.5", ""],	name:"Touch Tap Baby", nick:"TouchTap"},
	{levels:["7-", "9.8", ""],	name:"極上スマイル", nick:""},
	{levels:["8+", "10.2", ""],	name:"7 Girls War", nick:""},
	{levels:["8-", "10.7", ""],	name:"Jumping!!", nick:""},
	{levels:["7-", "10.2", ""],	name:"ゆりゆららららゆるゆり大事件", nick:"ゆるゆり大事件"},
	{levels:["9-", "11.2", ""],	name:"いぇす！ゆゆゆ☆ゆるゆり♪♪", nick:"ゆゆゆゆるゆり"},
	{levels:["9-", "11.4", ""],	name:"ちょちょちょ！ゆるゆり☆かぷりっちょ！！！", nick:"かぷりっちょ"},
	{levels:["8-", "11.0", ""],	name:"かくしん的☆めたまるふぉ～ぜっ！", nick:"うまる"},
	{levels:["8+", "11.7", ""],	name:"ファッとして桃源郷", nick:"桃源郷"},
	{levels:["9-", "12.S", ""],	name:"回レ！雪月花", nick:""},
	{levels:["8+", "11.1", ""],	name:"エイリアンエイリアン", nick:"エイリアン"},
	{levels:["9+", "12.A", ""],	name:"リンカーネイション", nick:""},
	{levels:["9-", "12.S", ""],	name:"六兆年と一夜物語", nick:"六兆年"},
	{levels:["9+", "11.9", ""],	name:"白ゆき", nick:""},
	{levels:["10+", "12.q", ""],	name:"幸せになれる隠しコマンドがあるらしい", nick:"隠しコマンド"},
	{levels:["8-", "11.7", ""],	name:"フラジール", nick:""},
	{levels:["9-", "12.O", ""],	name:"ちがう!!!", nick:""},
	{levels:["9+", "11.4", ""],	name:"名探偵連続殺人事件", nick:"名探偵"},
	{levels:["9+", "11.8", ""],	name:"バッド・ダンス・ホール", nick:""},
	{levels:["8-", "10.5", ""],	name:"東京レトロ", nick:""},
	{levels:["10-", "12.E", ""],	name:"ARROW", nick:""},
	{levels:["9+", "11.7", ""],	name:"ヘルシーエンド", nick:""},
	{levels:["8-", "10.7", ""],	name:"ラブチーノ", nick:""},
	{levels:["9-", "12.Z", "12.q"],	name:"ロストワンの号哭", nick:"ロストワン"},
	{levels:["9-", "12.Z", ""],	name:"千本桜", nick:""},
	{levels:["9-", "11.8", ""],	name:"チュルリラ・チュルリラ・ダッダッダ！", nick:"チュルリラ"},
	{levels:["8-", "12.A", ""],	name:"ウミユリ海底譚", nick:"ウミユリ"},
	{levels:["10.0", "12.B", ""],	name:"初音ミクの消失", nick:"消失"},
	{levels:["9-", "11.6", ""],	name:"天ノ弱", nick:""},
	{levels:["9-", "12.E", ""],	name:"厨病激発ボーイ", nick:"厨病"},
	{levels:["10+", "12.L", ""],	name:"脳漿炸裂ガール", nick:"脳漿"},
	{levels:["9-", "12.O", ""],	name:"+♂", nick:""},
	{levels:["9-", "11.9", ""],	name:"おこちゃま戦争", nick:""},
	{levels:["8+", "10.9", ""],	name:"だんだん早くなる", nick:""},
	{levels:["8-", "10.0", ""],	name:"恋愛裁判", nick:""},
	{levels:["8+", "10.6", "11.8"],	name:"からくりピエロ", nick:""},
	{levels:["9-", "11.3", ""],	name:"ゴーストルール", nick:""},
	{levels:["8-", "10.9", ""],	name:"おじゃま虫", nick:""},
	{levels:["9-", "11.7", ""],	name:"ストリーミングハート", nick:""},
	{levels:["9-", "10.3", ""],	name:"妄想税", nick:""},
	{levels:["9-", "12.E", ""],	name:"毒占欲", nick:""},
	{levels:["8+", "10.4", ""],	name:"むかしむかしのきょうのぼく", nick:"むかしむかし"},
	{levels:["8+", "11.9", ""],	name:"二息歩行", nick:""},
	{levels:["9-", "10.9", ""],	name:"モザイクロール", nick:""},
	{levels:["9-", "11.2", ""],	name:"弱虫モンブラン", nick:"モンブラン"},
	{levels:["9+", "11.9", ""],	name:"39", nick:""},
	{levels:["7+", "11.0", ""],	name:"＊ハロー、プラネット。", nick:"ハロプラ"},
	{levels:["8+", "11.9", ""],	name:"Mr. Wonderland", nick:"Wonderland"},
	{levels:["10-", "12.E", ""],	name:"吉原ラメント", nick:"ラメント"},
	{levels:["8-", "11.0", ""],	name:"ココロ", nick:""},
	{levels:["9+", "11.8", ""],	name:"ゆっくりしていってね！！！", nick:"ゆっくり"},
	{levels:["9-", "11.8", ""],	name:"生きてるおばけは生きている", nick:"生きてるおばけ"},
	{levels:["8-", "10.7", ""],	name:"踊れオーケストラ", nick:""},
	{levels:["9-", "11.4", ""],	name:"クノイチでも恋がしたい", nick:"クノイチ"},
	{levels:["7-", "10.3", "11.8"],	name:"いーあるふぁんくらぶ", nick:"いーある"},
	{levels:["8-", "12.I", ""],	name:"赤心性：カマトト荒療治", nick:"カマトト"},
	{levels:["8-", "11.0", ""],	name:"イノコリ先生", nick:""},
	{levels:["9+", "12.S", ""],	name:"ECHO", nick:""},
	{levels:["9-", "11.4", ""],	name:"キミノヨゾラ哨戒班", nick:"キミノヨゾラ"},
	{levels:["8+", "11.1", ""],	name:"しんでしまうとはなさけない！", nick:"しんでしまうとは"},
	{levels:["8+", "11.4", ""],	name:"パーフェクト生命", nick:""},
	{levels:["8+", "11.4", ""],	name:"やめろ！聴くな！", nick:"やめろ聴くな"},
	{levels:["7+", "9.8", ""],	name:"東京リアルワールド", nick:"リアルワールド"},
	{levels:["8-", "11.0", ""],	name:"すろぉもぉしょん", nick:"すろも"},
	{levels:["9.7", "12.L", ""],	name:"頓珍漢の宴", nick:"頓珍漢"},
	{levels:["8-", "12.O", ""],	name:"ありふれたせかいせいふく", nick:"せかいせいふく"},
	{levels:["8-", "11.4", ""],	name:"絵の上手かった友達", nick:"絵の上手い"},
	{levels:["10-", "12.O", ""],	name:"腐れ外道とチョコレゐト", nick:"腐れ外道"},
	{levels:["8+", "11.8", ""],	name:"はじめまして地球人さん", nick:"地球人さん"},
	{levels:["8+", "10.3", ""],	name:"アゲアゲアゲイン", nick:""},
	{levels:["9-", "11.5", ""],	name:"M.S.S.Planet", nick:"M.S.S."},
	{levels:["8+", "10.8", ""],	name:"不毛！", nick:""},
	{levels:["9-", "11.8", ""],	name:"ネトゲ廃人シュプレヒコール", nick:"ネトゲ廃人"},
	{levels:["9+", "11.3", ""],	name:"炉心融解", nick:""},
	{levels:["9-", "11.0", ""],	name:"StargazeR", nick:""},
	{levels:["9-", "11.7", ""],	name:"Just Be Friends", nick:""},
	{levels:["8+", "10.8", ""],	name:"LOL -lots of laugh-", nick:"LOL"},
	{levels:["7+", "10.6", ""],	name:"みくみくにしてあげる♪【してやんよ】", nick:"みくみく"},
	{levels:["9+", "11.3", ""],	name:"Sweet Devil", nick:""},
	{levels:["8-", "11.6", ""],	name:"クローバー♣クラブ", nick:"クローバークラブ"},
	{levels:["8-", "11.7", ""],	name:"深海少女", nick:""},
	{levels:["8-", "11.3", ""],	name:"SPiCa", nick:""},
	{levels:["8-", "11.4", ""],	name:"ぽっぴっぽー", nick:""},
	{levels:["9+", "12.S", ""],	name:"Nyan Cat EX", nick:""},
	{levels:["9+", "11.9", ""],	name:"どういうことなの！？", nick:"どういうことなの"},
	{levels:["9+", "12.E", ""],	name:"どうしてこうなった", nick:"こなた"},
	{levels:["9-", "12.I", ""],	name:"ダブルラリアット", nick:"ダブラリ"},
	{levels:["10-", "12.b", ""],	name:"magician's operation", nick:"マジオペ"},
	{levels:["8-", "12.E", ""],	name:"トルコ行進曲 - オワタ＼(^o^)／", nick:"オワタ"},
	{levels:["8-", "9.9", ""],	name:"リリリリ★バーニングナイト", nick:"リリリリ"},
	{levels:["8-", "9.9", ""],	name:"イアイア★ナイトオブデザイア", nick:"イアイア"},
	{levels:["7+", "10.4", ""],	name:"ルカルカ★ナイトフィーバー", nick:"ルカルカ"},
	{levels:["7-", "9.9", ""],	name:"メグメグ☆ファイアーエンドレスナイト", nick:"メグメグ"},
	{levels:["8-", "9.2", ""],	name:"教えて!! 魔法のLyric", nick:"Lyric"},
	{levels:["7-", "10.8", ""],	name:"おちゃめ機能", nick:""},
	{levels:["9-", "11.0", ""],	name:"BAD∞END∞NIGHT", nick:"バドエン"},
	{levels:["7-", "10.8", ""],	name:"shake it!", nick:""},
	{levels:["8-", "10.3", ""],	name:"Heart Beats", nick:""},
	{levels:["7-", "9.9", ""],	name:"Sweetiex2", nick:""},
	{levels:["9-", "10.5", "12.I"],	name:"ロミオとシンデレラ", nick:"ロミシン"},
	{levels:["8-", "10.8", ""],	name:"ハッピーシンセサイザ", nick:"ハピシン"},
	{levels:["9-", "10.5", ""],	name:"ダンシング☆サムライ", nick:""},
	{levels:["8-", "10.7", ""],	name:"ハロ／ハワユ", nick:"ハロハワユ"},
	{levels:["8+", "9.7", "11.0"],	name:"Tell Your World", nick:""},
	{levels:["8+", "11.2", ""],	name:"Hand in Hand", nick:""},
	{levels:["10-", "11.6", ""],	name:"アンハッピーリフレイン", nick:"アンハッピー"},
	{levels:["9+", "12.b", ""],	name:"裏表ラバーズ", nick:"裏表"},
	{levels:["8-", "11.5", ""],	name:"ローリンガール", nick:"ローリン"},
	{levels:["7-", "10.6", "12.I"],	name:"ワールズエンド・ダンスホール", nick:"ワールズエンド"},
	{levels:["8-", "9.9", "11.7"],	name:"マトリョシカ", nick:""},
	{levels:["8-", "9.7", ""],	name:"パンダヒーロー", nick:""},
	{levels:["9+", "10.6", ""],	name:"ゴーゴー幽霊船", nick:"幽霊船"},
	{levels:["9-", "11.2", ""],	name:"セツナトリップ", nick:""},
	{levels:["9-", "11.5", ""],	name:"放課後ストライド", nick:"ストライド"},
	{levels:["9+", "11.0", ""],	name:"カゲロウデイズ", nick:""},
	{levels:["10-", "12.O", ""],	name:"夜咄ディセイブ", nick:"ディセイブ"},
	{levels:["7+", "10.1", ""],	name:"メランコリック", nick:""},
	{levels:["7+", "9.2", "11.3"],	name:"ZIGG-ZAGG", nick:""},
	{levels:["7+", "10.6", ""],	name:"I ♥", nick:""},
	{levels:["9-", "10.5", ""],	name:"スイートマジック", nick:""},
	{levels:["9-", "10.7", ""],	name:"林檎華憐歌", nick:""},
	{levels:["9-", "12.E", ""],	name:"木彫り鯰と右肩ゾンビ", nick:"鯰とゾンビ"},
	{levels:["9-", "12.A", ""],	name:"デッドレッドガールズ", nick:"デッドレッド"},
	{levels:["9-", "10.6", ""],	name:"One Step Ahead", nick:"One Step"},
	{levels:["7-", "10.5", ""],	name:"Link", nick:"Link(ni)"},
	{levels:["7+", "9.8", ""],	name:"ひみつをちょーだい", nick:""},
	{levels:["7+", "10.2", ""],	name:"夏にキスしていいですか？", nick:"夏にキスして"},
	{levels:["9-", "12.O", ""],	name:"すーぱーぬこになりたい", nick:"スーパーぬこ"},
	{levels:["9-", "11.2", ""],	name:"ないせんのうた", nick:"ないせん"},
	{levels:["9-", "12.Z", ""],	name:"チルノのパーフェクトさんすう教室　⑨周年バージョン", nick:"チルノ9周年"},
	{levels:["8-", "11.3", ""],	name:"華鳥風月", nick:""},
	{levels:["8-", "11.3", ""],	name:"色は匂へど散りぬるを", nick:"色は匂へど"},
	{levels:["8+", "11.7", ""],	name:"月に叢雲華に風", nick:"月に叢雲"},
	{levels:["9-", "11.9", ""],	name:"オーディエンスを沸かす程度の能力 feat.タイツォン", nick:"オーディエンス"},
	{levels:["9-", "11.7", ""],	name:"妖精村の月誕祭 ～Lunate Elf", nick:"妖精村"},
	{levels:["8+", "11.1", ""],	name:"Starlight Dance Floor", nick:""},
	{levels:["8+", "11.7", ""],	name:"宿題が終わらないっ！", nick:"宿題"},
	{levels:["9-", "11.4", ""],	name:"東方スイーツ！～鬼畜姉妹と受難メイド～", nick:"東方スイーツ"},
	{levels:["9-", "11.7", ""],	name:"taboo tears you up", nick:"taboo"},
	{levels:["9+", "11.4", ""],	name:"Starlight Vision", nick:""},
	{levels:["9-", "12.E", ""],	name:"幽闇に目醒めしは", nick:"幽闇"},
	{levels:["8-", "11.6", ""],	name:"物凄い勢いでけーねが物凄いうた", nick:"けーね"},
	{levels:["9+", "11.7", ""],	name:"Club Ibuki in Break All", nick:"いぶき"},
	{levels:["8+", "11.7", ""],	name:"チルノのパーフェクトさんすう教室", nick:"チルノ"},
	{levels:["7+", "11.7", ""],	name:"魔理沙は大変なものを盗んでいきました", nick:"魔理沙"},
	{levels:["9-", "12.b", "12.q"],	name:"患部で止まってすぐ溶ける～狂気の優曇華院", nick:"患部～優曇華"},
	{levels:["9-", "10.9", ""],	name:"究極焼肉レストラン！お燐の地獄亭！", nick:"焼肉レストラン"},
	{levels:["9-", "10.8", ""],	name:"お嫁にしなさいっ！", nick:""},
	{levels:["9+","11.9", ""],	name:"キャプテン・ムラサのケツアンカー", nick:"ケツアンカー"},
	{levels:["9-", "11.4", ""],	name:"ひれ伏せ愚民どもっ！", nick:"愚民"},
	{levels:["7-", "11.9", ""],	name:"Grip & Break down !!", nick:"Grip"},
	{levels:["9-", "12.S", ""],	name:"Cosmic Magic Shooter", nick:"Magic Shooter"},
	{levels:["8-", "10.7", ""],	name:"しゅわスパ大作戦☆", nick:"しゅわスパ"},
	{levels:["8+", "10.9", ""],	name:"全人類ノ非想天則", nick:"非想天則"},
	{levels:["9-", "11.7", ""],	name:"Endless, Sleepless Night", nick:"かにぱん"},
	{levels:["9-", "12.O", ""],	name:"No Routine", nick:""},
	{levels:["10+", "12.L", ""],	name:"Scream out! -maimai SONIC WASHER Edit-", nick:"Scream Out"},
	{levels:["9-", "12.q", ""],	name:"幻想のサテライト", nick:"サテライト"},
	{levels:["8-", "11.4", ""],	name:"待チ人ハ来ズ。", nick:"待チ人"},
	{levels:["8-", "11.4", ""],	name:"響縁", nick:""},
	{levels:["9-", "11.2", ""],	name:"囲い無き世は一期の月影", nick:"囲い無き世は"},
	{levels:["9-", "12.b", ""],	name:"儚きもの人間", nick:"儚きもの"},
	{levels:["9-", "11.2", ""],	name:"sweet little sister", nick:""},
	{levels:["9-", "11.0", ""],	name:"ケロ⑨destiny", nick:"ケロ⑨"},
	{levels:["9+", "12.O", ""],	name:"Phantasm Brigade", nick:"Brigade"},
	{levels:["9-", "12.O", ""],	name:"蒼空に舞え、墨染の桜", nick:"墨染"},
	{levels:["8-", "10.4", ""],	name:"フラグメンツ -T.V. maimai edit-", nick:"フラグメンツ"},
	{levels:["8-", "11.4", ""],	name:"橙の幻想郷音頭", nick:"幻想郷音頭"},
	{levels:["7+", "11.4", ""],	name:"神々の祈り", nick:""},
	{levels:["8+", "11.0", ""],	name:"願いを呼ぶ季節", nick:""},
	{levels:["8-", "10.7", "11.0"],	name:"明星ロケット", nick:"明星"},
	{levels:["9-", "11.9", "12.A"],	name:"緋色のDance", nick:"緋色"},
	{levels:["9-", "10.9", ""],	name:"YU-MU", nick:""},
	{levels:["9+", "12.O", ""],	name:"エテルニタス・ルドロジー", nick:"ルドロジー"},
	{levels:["8-", "10.6", "11.9"],	name:"エピクロスの虹はもう見えない", nick:"エピクロス"},
	{levels:["9-", "12.O", ""],	name:"四次元跳躍機関", nick:"四次元"},
	{levels:["9-", "12.E", ""],	name:"少女幻葬戦慄曲 ～ Necro Fantasia", nick:"Necro"},
	{levels:["8+", "11.5", ""],	name:"Jimang Shot", nick:"じまんぐ"},
	{levels:["8-", "10.7", "11.5"],	name:"ってゐ！ ～えいえんてゐVer～", nick:"ってゐ"},
	{levels:["8-", "11.3", ""],	name:"東方妖々夢 ～the maximum moving about～", nick:"妖々夢"},
	{levels:["8+", "11.1", ""],	name:"Yet Another ”drizzly rain”", nick:"drizzly rain"},
	{levels:["7-", "9.9", ""],	name:"シアワセうさぎ", nick:""},
	{levels:["9-", "11.1", ""],	name:"最速最高シャッターガール", nick:"シャッターガール"},
	{levels:["10-", "12.L", ""],	name:"最終鬼畜妹・一部声", nick:"最終鬼畜妹"},
	{levels:["9-", "12.L", ""],	name:"ウサテイ", nick:""},
	{levels:["9+", "10.4", ""],	name:"Help me, ERINNNNNN!!", nick:"えーりん"},
	{levels:["10-", "11.7", "13.Z"],	name:"ナイト・オブ・ナイツ", nick:"ナイツ"},
	{levels:["8+", "10.9", "12.E"],	name:"Bad Apple!! feat nomico", nick:"Bad Apple"},
	{levels:["11.0", "13.f", ""],	name:"Calamity Fortune", nick:"カラミティ"},
	{levels:["9-", "10.8", ""],	name:"CALL HEAVEN!!", nick:"CALL HEAVEN"},
	{levels:["8+", "11.0", ""],	name:"Sunshine world tour", nick:""},
	{levels:["9-", "11.5", ""],	name:"終わりなき物語", nick:""},
	{levels:["9-", "11.1", ""],	name:"Our Fighting", nick:""},
	{levels:["8+", "11.9", "11.9"],	name:"Save This World νMIX", nick:"Save This World"},
	{levels:["8+", "10.5", "11.4"],	name:"Living Universe", nick:""},
	{levels:["10-", "10.7", ""],	name:"Ignite Infinity", nick:"Infinity"},
	{levels:["10-", "11.6", ""],	name:"Garden Of The Dragon", nick:"龍宮の園"},
	{levels:["9-", "12.A", ""],	name:"Reach For The Stars", nick:"Reach"},
	{levels:["9-", "11.8", ""],	name:"Live & Learn", nick:"リブラン"},
	{levels:["9-", "12.S", ""],	name:"Back 2 Back", nick:"B2B"},
	{levels:["9-", "11.3", ""],	name:"Windy Hill -Zone 1", nick:"Windy Hill"},
	{levels:["8-", "11.2", "11.3"],	name:"City Escape: Act1", nick:"City Escape"},
	{levels:["9+", "10.1", "11.8"],	name:"Rooftop Run: Act1", nick:"Roottop"},
	{levels:["8+", "11.3", ""],	name:"時空を超えて久しぶり！", nick:"アルル"},
	{levels:["9-", "10.3", ""],	name:"Her Dream Is To Be A Fantastic Sorceress", nick:"アミティ"},
	{levels:["7-", "11.8", ""],	name:"キズナの物語", nick:""},
	{levels:["9+", "12.Z", ""],	name:"STAIRWAY TO GENERATION", nick:"STAIRWAY"},
	{levels:["10-", "12.S", ""],	name:"Last Brave ～ Go to zero", nick:"Last Brave"},
	{levels:["11.5", "11.5", ""],	name:"Urban Crusher [Remix]", nick:"アーバン"},
	{levels:["9-", "10.6", ""],	name:"Catch The Future", nick:""},
	{levels:["8-", "11.7", ""],	name:"awake", nick:""},
	{levels:["9+", "12.I", ""],	name:"Terminal Storm", nick:"タミスト"},
	{levels:["10-", "11.7", ""],	name:"After Burner", nick:""},
	{levels:["9+", "12.S", ""],	name:"Space Harrier Main Theme [Reborn]", nick:"スペハリ"},
	{levels:["10-", "11.6", ""],	name:"Quartet Theme [Reborn]", nick:"カルテット"},
	{levels:["9-", "11.2", ""],	name:"Sky High [Reborn]", nick:"Sky High"},
	{levels:["9+", "12.S", ""],	name:"Like the Wind [Reborn]", nick:"Like"},
	{levels:["11-", "11.7", ""],	name:"YA･DA･YO [Reborn]", nick:"ヤダヨ"},
	{levels:["10-", "10.1", ""],	name:"Natural Flow", nick:""},
	{levels:["8-", "9.9", "12.q"],	name:"Crush On You", nick:""},
	{levels:["7+", "9.1", "12.q"],	name:"Sun Dance", nick:""},
	{levels:["8-", "10.1", "13.c"],	name:"In Chaos", nick:""},
	{levels:["10-", "10.5", "13.E"],	name:"Beat Of Mind", nick:""},
	{levels:["9-", "12.I", ""],	name:"JACKY [Remix]", nick:"Jacky"},
	{levels:["10-", "12.Z", ""],	name:"Mysterious Destiny", nick:"ミステリアス"},
	{levels:["9+", "10.0", ""],	name:"Riders Of The Light", nick:""},
	{levels:["7-", "11.5", ""],	name:"コトバ・カラフル", nick:""},
	{levels:["8-", "11.9", ""],	name:"天国と地獄", nick:""},
	{levels:["8-", "10.6", ""],	name:"きみのためなら死ねる", nick:"きみ死ね"},
	{levels:["8+", "10.0", ""],	name:"The Great Journey", nick:""},
	{levels:["9-", "10.2", "12.S"],	name:"Burning Hearts ～炎のANGEL～", nick:"Burning Hearts"},
	{levels:["8-", "10.5", ""],	name:"かせげ！ジャリンコヒーロー", nick:"ジャリンコヒーロー"},
	{levels:["9-", "12.E", ""],	name:"ココロスキャンのうた", nick:"ココロスキャン"},
	{levels:["10-", "10.8", ""],	name:"超絶！Superlative", nick:"超絶"},
	{levels:["10-", "11.2", ""],	name:"采配の刻 Power of order", nick:"采配"},
	{levels:["11-", "12.O", ""],	name:"DO RORO DERODERO ON DO RORO", nick:"DO RORO"},
	{levels:["9-", "10.8", ""],	name:"源平大戦絵巻テーマソング", nick:"源平"},
	{levels:["8+", "11.3", ""],	name:"怪盗Rのテーマ", nick:"怪盗R"},
	{levels:["7-", "10.1", ""],	name:"マリアをはげませ", nick:"マリア"},
	{levels:["7+", "10.1", ""],	name:"SHOW TIME", nick:""},
	{levels:["9+", "11.7", ""],	name:"円舞曲、君に", nick:"円舞曲"},
	{levels:["10-", "11.0", ""],	name:"御旗のもとに", nick:"御旗"},
	{levels:["9-", "10.7", ""],	name:"地上の戦士", nick:""},
	{levels:["8-", "8.7", "11.0"],	name:"檄！帝国華撃団(改)", nick:"檄帝"},
	{levels:["9.1", "12.q", ""],	name:"Outlaw's Lullaby", nick:"Outlaw"},
	{levels:["9-", "11.8", ""],	name:"Brand-new Japanesque", nick:"Japanesque"},
	{levels:["9-", "12.b", ""],	name:"鼓動", nick:""},
	{levels:["10-", "11.1", ""],	name:"神室雪月花", nick:""},
	{levels:["7-", "12.I", ""],	name:"KONNANじゃないっ！", nick:"KONNAN"},
	{levels:["9-", "11.6", ""],	name:"セガサターン起動音[H.][Remix]", nick:"セガサターン"},
	{levels:["10-", "12.B", ""],	name:"GO BACK 2 YOUR RAVE", nick:"GO BACK"},
	{levels:["10-", "12.q", ""],	name:"B.B.K.K.B.K.K.", nick:"BBKK"},
	{levels:["11.0", "12.B", ""],	name:"人里に下ったアタイがいつの間にか社畜になっていた件", nick:"社畜"},
	{levels:["10+", "12.B", ""],	name:"Maxi", nick:""},
	{levels:["9+", "12.I", ""],	name:"KISS CANDY FLAVOR", nick:"KISS CANDY"},
	{levels:["8+", "11.7", ""],	name:"H-A-J-I-M-A-R-I-U-T-A-!!", nick:"HAJIMARIUTA"},
	{levels:["9-", "11.3", ""],	name:"Star☆Glitter", nick:"StarGlitter"},
	{levels:["10.9", "12.q", ""],	name:"conflict", nick:""},
	{levels:["10-", "12.S", ""],	name:"Party 4U ”holy nite mix”", nick:"Party 4U"},
	{levels:["9+", "11.8", ""],	name:"GOODMEN", nick:""},
	{levels:["10+", "12.b", ""],	name:"Sakura Fubuki", nick:"桜吹雪"},
	{levels:["10-", "12.B", ""],	name:"METATRON", nick:""},
	{levels:["9-", "11.5", ""],	name:"オモイヨシノ", nick:""},
	{levels:["9-", "12.S", ""],	name:"L9", nick:""},
	{levels:["10-", "12.q", ""],	name:"Jack-the-Ripper◆", nick:"Ripper"},
	{levels:["11.4", "12.B", ""],	name:"DRAGONLADY", nick:"ドラレ"},
	{levels:["9+", "11.4", ""],	name:"Pursuing My True Self", nick:"Pursuing"},
	{levels:["9+", "11.7", ""],	name:"Signs Of Love (“Never More” ver.)", nick:"Signs Of Love"},
	{levels:["9-", "11.4", ""],	name:"specialist (“Never More” ver.)", nick:"specialist"},
	{levels:["9-", "12.E", ""],	name:"Time To Make History (AKIRA YAMAOKA Remix)", nick:"Time To Make"},
	{levels:["8-", "11.7", ""],	name:"レッツゴー!陰陽師", nick:"陰陽師"},
	{levels:["9-", "11.8", ""],	name:"オパ! オパ! RACER -GMT mashup-", nick:"オパRACER"},
	{levels:["10-", "12.b", ""],	name:"電車で電車でOPA!OPA!OPA! -GMT mashup-", nick:"電OPA"},
	{levels:["10-", "11.7", ""],	name:"リッジでリッジでGO!GO!GO! -GMT mashup-", nick:"リッジでGO"},
	{levels:["7+", "11.3", ""],	name:"電車で電車でGO!GO!GO!GC! -GMT remix-", nick:"電車でGO"},
	{levels:["10-", "11.7", ""],	name:"RIDGE RACER STEPS -GMT remix-", nick:"リッジレーサー"},
	{levels:["9-", "11.5", ""],	name:"ファンタジーゾーン OPA-OPA! -GMT remix-", nick:"OPAOPA"},
	{levels:["10-", "12.S", ""],	name:"DADDY MULK -Groove remix-", nick:"ダディ"},
	{levels:["10.2", "13.I", ""],	name:"FUJIN Rumble", nick:"FUJIN"},
	{levels:["10+", "12.L", ""],	name:"Got more raves？", nick:"ゴモア"},
	{levels:["11.0", "12.q", ""],	name:"夜明けまであと３秒", nick:"夜明けまで"},
	{levels:["10+", "12.q", ""],	name:"Ignis Danse", nick:"Ignis"},
	{levels:["11-", "12.B", ""],	name:"きたさいたま2000", nick:"きたさいたま"},
	{levels:["9-", "12.L", ""],	name:"Scars of FAUNA", nick:"FAUNA"},
	{levels:["10-", "12.b", ""],	name:"FLOWER", nick:""},
	{levels:["10.5", "12.B", ""],	name:"デスパレイト", nick:""},
	{levels:["11.2", "13.E", ""],	name:"Moon of Noon", nick:"Moon Noon"},
	{levels:["11-", "12.q", ""],	name:"Ultranova", nick:""},
	{levels:["10.4", "12.B", ""],	name:"KING is BACK!!", nick:"KING is BACK"},
	{levels:["10-", "12.O", ""],	name:"曖昧mind", nick:""},
	{levels:["9+", "11.9", ""],	name:"Limit Break", nick:""},
	{levels:["10.0", "12.O", ""],	name:"ユビキリ", nick:""},
	{levels:["9+", "11.7", ""],	name:"オトヒメモリー☆ウタゲーション", nick:"乙姫"},
	{levels:["9+", "12.L", ""],	name:"夢花火", nick:""},
	{levels:["9+", "11.9", ""],	name:"いっしそう電☆舞舞神拳！", nick:"舞舞神拳"},
	{levels:["11.5", "13.Z", ""],	name:"Panopticon", nick:"パノプ"},
	{levels:["10.9", "12.q", ""],	name:"四月の雨", nick:""},
	{levels:["11.5", "13.I", ""],	name:"ねぇ、壊れタ人形ハ何処へ棄テらレるノ？", nick:"壊れタ人形"},
	{levels:["10-", "12.A", ""],	name:"Imitation:Loud Lounge", nick:"Imitation"},
	{levels:["10+", "12.q", ""],	name:"HERA", nick:""},
	{levels:["10-", "12.b", ""],	name:"Selector", nick:""},
	{levels:["11.7", "13.E", ""],	name:"AMAZING MIGHTYYYY!!!!", nick:"MIGHTYYYY"},
	{levels:["10.8", "13.Z", ""],	name:"CITRUS MONSTER", nick:"シトラス"},
	{levels:["11.0", "12.B", ""],	name:"Hyper Active", nick:""},
	{levels:["10+", "12.B", ""],	name:"Jumble Rumble", nick:"Jumble"},
	{levels:["10-", "12.q", ""],	name:"Nitrous Fury", nick:"ナイトラス"},
	{levels:["10-", "12.A", ""],	name:"Revive The Rave", nick:"Revive"},
	{levels:["10-", "12.L", ""],	name:"GEMINI -M-", nick:"GEMINI"},
	{levels:["9-", "12.A", ""],	name:"スリップフリップ", nick:""},
	{levels:["11.3", "12.q", ""],	name:"天火明命", nick:""},
	{levels:["10-", "12.B", ""],	name:"7thSense", nick:""},
	{levels:["10+", "12.q", ""],	name:"Lividi", nick:""},
	{levels:["10+", "13.E", ""],	name:"Axeria", nick:""},
	{levels:["10-", "12.L", ""],	name:"閃鋼のブリューナク", nick:"ブリューナク"},
	{levels:["10+", "13.E", ""],	name:"ガラテアの螺旋", nick:"ガラテア"},
	{levels:["11.0", "13.O", ""],	name:"Caliburne ～Story of the Legendary sword～", nick:"Caliburne"},
	{levels:["11.5", "13.A", ""],	name:"Our Wrenally", nick:"あわれなり"},
	{levels:["11-", "13.Z", ""],	name:"Contrapasso -paradiso-", nick:"コントラ"},
	{levels:["10.0", "13.O", ""],	name:"Oshama Scramble!", nick:"Oshama"},
	{levels:["11.0", "12.B", ""],	name:"Garakuta Doll Play", nick:"ガラクタ"},
	{levels:["10-", "11.9", "11.7"],	name:"Blew Moon", nick:"ぶるむん"},
	{levels:["11-", "12.Z", ""],	name:"We Gonna Party", nick:"We Gonna"},
	{levels:["10.4", "12.q", ""],	name:"MYTHOS", nick:""},
	{levels:["10+", "12.A", ""],	name:"Life Feels Good", nick:""},
	{levels:["11.3", "13.I", ""],	name:"Glorious Crown", nick:"グロクラ"},
	{levels:["10.6", "12.q", ""],	name:"Aiolos", nick:""},
	{levels:["9+", "12.b", ""],	name:"LANCE", nick:""},
	{levels:["9-", "12.O", ""],	name:"Dragoon", nick:""},
	{levels:["10-", "12.A", ""],	name:"Death Scythe", nick:"デスサ"},
	{levels:["10-", "11.1", ""],	name:"LUCIA", nick:""},
	{levels:["10-", "12.L", ""],	name:"DON’T  STOP  ROCKIN’", nick:"ドンスト"},
	{levels:["10-", "12.S", ""],	name:"oboro", nick:""},
	{levels:["9.2", "12.b", ""],	name:"CYCLES", nick:""},
	{levels:["9+", "12.E", ""],	name:"Lionheart", nick:""},
	{levels:["10-", "11.3", ""],	name:"Heartbeats", nick:""},
	{levels:["10-", "11.9", ""],	name:"Acceleration", nick:"アクセラ"},
	{levels:["10-", "11.3", ""],	name:"End of Twilight", nick:"Twilight"},
	{levels:["9-", "11.3", ""],	name:"JUMPIN' JUMPIN'", nick:"JUMPIN"},
	{levels:["9+", "12.A", ""],	name:"L'épilogue", nick:"レピローグ"},
	{levels:["10-", "12.b", ""],	name:"FEEL ALIVE", nick:"フィルアラ"},
	{levels:["9+", "12.Z", ""],	name:"FEEL the BEATS", nick:"フィルビー"},
	{levels:["9-", "11.7", ""],	name:"BREAK YOU!!", nick:""},
	{levels:["10+", "12.Z", ""],	name:"Streak", nick:""},
	{levels:["10+", "12.Z", ""],	name:"Spin me harder", nick:"スピンミー"},
	{levels:["11-", "12.Z", ""],	name:"Turn around", nick:"タンアラ"},
	{levels:["10+", "10.9", ""],	name:"Link", nick:"Link(org)"},
	{levels:["11.6", "11.6", ""],	name:"Black Out", nick:""},
	{levels:["11.6", "13.I", ""],	name:"Fragrance", nick:"フレグラ"},
	{levels:["10-", "12.B", ""],	name:"Nerverakes", nick:"ナーブ"},
	{levels:["9-", "11.2", ""],	name:"Sprintrances", nick:"スプリン"},
	{levels:["9+", "12.Z", ""],	name:"air's gravity", nick:"エアグラ"},
	{levels:["9+", "11.5", ""],	name:"Night Fly", nick:""},
	{levels:["9+", "11.8", ""],	name:"Feel My Fire", nick:""},
	{levels:["10-", "10.6", "11.6"],	name:"Starlight Disco", nick:"ディスコ"},
	{levels:["9-", "11.9", ""],	name:"記憶、記録", nick:"記憶記録"},
	{levels:["9-", "11.1", ""],	name:"connecting with you", nick:"connecting"},
	{levels:["9-", "11.1", ""],	name:"アージェントシンメトリー", nick:"アージェント"},
	{levels:["9+", "11.2", ""],	name:"Dreampainter", nick:""},
	{levels:["9-", "11.0", ""],	name:"Monochrome Rainbow", nick:"Monochrome"},
	{levels:["10-", "12.I", ""],	name:"Beat of getting entangled", nick:"ビトゲ"},
	{levels:["9-", "11.3", ""],	name:"MIRROR of MAGIC", nick:""},
	{levels:["9-", "10.9", ""],	name:"Cosmic Train", nick:""},
	{levels:["9+", "11.7", ""],	name:"高気圧ねこロック", nick:"ねこロック"},
	{levels:["10-", "13.E", ""],	name:"Prophesy One", nick:"Prophesy"},
	{levels:["9-", "10.7", ""],	name:"BETTER CHOICE", nick:""},
	{levels:["10+", "12.Z", ""],	name:"Get Happy", nick:""},
	{levels:["11.6", "13.O", ""],	name:"System “Z”", nick:"System"},
	{levels:["10-", "13.Z", ""],	name:"VERTeX", nick:""},
	{levels:["9.5", "13.I", ""],	name:"ジングルベル", nick:"ジングル"},
	{levels:["10-", "12.E", ""],	name:"火炎地獄", nick:""},
	{levels:["9-", "11.8", ""],	name:"Danza zandA", nick:"Danza"},
	{levels:["9+", "11.9", ""],	name:"planet dancer", nick:""},
	{levels:["9-", "10.6", ""],	name:"ナミダと流星", nick:""},
	{levels:["9+", "12.Z", ""],	name:"ピーマンたべたら", nick:"ピーマン"},
	{levels:["8-", "9.9", ""],	name:"maimaiちゃんのテーマ", nick:"maimaiちゃん"},
	{levels:["8-", "10.9", ""],	name:"Pixel Voyage", nick:"Pixel"},
	{levels:["8-", "9.7", ""],	name:"Sweets×Sweets", nick:""},
	{levels:["9-", "10.8", ""],	name:"虹と太陽", nick:""},
	{levels:["8-", "10.1", ""],	name:"Color My World", nick:""},
	{levels:["8+", "9.8", ""],	name:"True Love Song", nick:""},
	{levels:["7+", "9.3", ""],	name:"デコボコ体操第二", nick:"デコボコ体操"},
	{levels:["9+", "11.7", ""],	name:"ソーラン☆節", nick:"ソーラン節"},
	{levels:["8+", "11.8", ""],	name:"おても☆Yan", nick:"おてもYan"},
	{levels:["8-", "11.7", ""],	name:"炭★坑★節", nick:"炭坑節"},
	{levels:["7-", "10.6", ""],	name:"ネコ日和。", nick:""},
	{levels:["8+", "10.1", ""],	name:"犬日和。", nick:""},
	{levels:["9+", "10.7", ""],	name:"Endless World", nick:""},
	{levels:["10-", "11.0", ""],	name:"Backyun! －悪い女－", nick:"Backyun"},
	{levels:["10-", "10.1", ""],	name:"BaBan!! －甘い罠－", nick:"BaBan"},
	{levels:["8+", "10.3", ""],	name:"オレンジの夏", nick:""},
	{levels:["9-", "10.8", ""],	name:"ぴぴぱぷぅ！", nick:""},
	{levels:["10-", "12.E", ""],	name:"炎歌 -ほむらうた-", nick:"炎歌"},
	{levels:["9-", "10.6", ""],	name:"泣き虫O'clock", nick:""},
	{levels:["9+", "11.3", ""],	name:"maiム・maiム feat.週刊少年マガジン", nick:"maiムmaiム"},
	{levels:["8-", "11.5", ""],	name:"タカハせ！名人マン", nick:"名人マン"},
	{levels:["9-", "11.5", ""],	name:"みんなのマイマイマー", nick:"マイマイマー"},
	{levels:["8-", "11.2", ""],	name:"welcome to maimai!! with マイマイマー", nick:"welcome maimai"},
	{levels:["8-", "10.7", ""],	name:"ぐるぐるWASH！コインランドリー・ディスコ", nick:"コインランドリー"},
	{levels:["9-", "12.O", ""],	name:"Infantoon Fantasy", nick:"Infantoon"},
	{levels:["9-", "11.7", ""],	name:"幾四音-Ixion-", nick:"幾四音"},
	{levels:["9-", "10.7", ""],	name:"Counselor", nick:""},
	{levels:["8-", "11.5", ""],	name:"Invitation", nick:""},
	{levels:["9-", "11.4", ""],	name:"その群青が愛しかったようだった", nick:"群青"},
	{levels:["11-", "13.O", ""],	name:"The wheel to the right", nick:"The wheel"},
	{levels:["9+", "12.O", ""],	name:"光線チューニング", nick:""},
	{levels:["9-", "12.A", ""],	name:"心象蜃気楼", nick:""},
	{levels:["9-", "11.7", ""],	name:"ハート・ビート", nick:"せりな"},
	{levels:["9+", "11.5", ""],	name:"brilliant better", nick:"あーりん"},
	{levels:["7+", "11.2", ""],	name:"フォルテシモBELL", nick:"なずな"},
	{levels:["9-", "12.Z", ""],	name:"DETARAME ROCK&ROLL THEORY", nick:"なる"},
	{levels:["8-", "11.7", ""],	name:"私の中の幻想的世界観及びその顕現を想起させたある現実での出来事に関する一考察", nick:"ちゃんなぎ"},
	{levels:["10+", "12.A", ""],	name:"猛進ソリストライフ！", nick:"なっち"},
	{levels:["10-", "12.S", ""],	name:"My Dearest Song", nick:"しろな"},
	{levels:["8+", "12.O", ""],	name:"無敵We are one!!", nick:"We are one"},
	{levels:["9-", "11.7", ""],	name:"Change Our MIRAI！", nick:"MIRAI"},
	{levels:["9+", "11.5", ""],	name:"ドキドキDREAM!!!", nick:"ドキドキDREAM"},
	{levels:["9-", "11.9", ""],	name:"言ノ葉カルマ", nick:""},
	{levels:["8+", "11.3", ""],	name:"悪戯", nick:""},
	{levels:["9-", "11.4", ""],	name:"言ノ葉遊戯", nick:""},
	{levels:["8-", "10.4", ""],	name:"りばーぶ", nick:""},
	{levels:["9-", "10.3", "10.7"],	name:"洗脳", nick:""},
	{levels:["9-", "11.3", ""],	name:"Barbed Eye", nick:""},
	{levels:["9-", "12.O", ""],	name:"空威張りビヘイビア", nick:"ビヘイビア"},
	{levels:["9+", "12.B", ""],	name:"分からない", nick:""},
	{levels:["9+", "11.8", ""],	name:"天国と地獄 -言ノ葉リンネ-", nick:"言ノ葉リンネ"},
	{levels:["9+", "12.Z", ""],	name:"相思創愛", nick:""}
];

function mra_diff2tmp(diff)
{
	var difftable =
		[["7-", 7.0], ["7+", 7.7], ["8-", 8.0], ["8+", 8.7], ["9-", 9.0], ["9+", 9.7],["10-", 10.0], 
 		 ["10+", 10.7], ["11-", 11.0], ["11+", 11.7], ["12-", 12.O], ["12+", 12.L], ["13-", 13.O],
		 ["12.O", 12.0], ["12.I", 12.1], ["12.Z", 12.2], ["12.E", 12.3], ["12.A", 12.4],
      		 ["12.S", 12.5], ["12.b", 12.6], ["12.L", 12.7], ["12.B", 12.8], ["12.q", 12.9],
		 ["13.O", 13.0], ["13.I", 13.1], ["13.Z", 13.2], ["13.E", 13.3], ["13.A", 13.4],
		 ["13.S", 13.5], ["13.b", 13.6], ["13.L", 13.7], ["13.B", 13.8], ["13.q", 13.9]];
      		 // 'O', 'I', 'Z', 'E', 'A', 'S', 'b', 'L', 'B', 'q'
      
	for(var i=0; i< difftable.length; i++)
	{
		if(0 == diff.indexOf(difftable[i][0]))
		{
			return 1*difftable[i][1];
		}
	}
	return 1*diff;
}
