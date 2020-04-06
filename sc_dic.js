"use strict";
const cods_spring = [
    new SctCod_It('|春|はる|', 'spring.jpg'),
    new SctCod_It('|立春|りっしゅん|'),
    new SctCod_It('|土筆|つくし|'),
    new SctCod_It('|蛙|かえる|'),
    new SctCod_It('|蛙|かわず|'),
    new SctCod_It('お|玉杓子|たまじゃくし|'),
    new SctCod_It('|蛤|はまぐり|'),
    new SctCod_It('|浅蜊|あさり|'),
    new SctCod_It('|雛祭|ひなまつり|'),
    new SctCod_It('|花見|はなみ|'),
    new SctCod_It('|春雨|はるさめ|')
];
const cods_flower_spring = [
    new SctCod_It('|春|はる|の|花|はな|', 'flower_spring.jpg'),
    new SctCod_It('|梅|うめ|'),
    new SctCod_It('|桜|さくら|'),
    new SctCod_It('|椿|つばき|'),
    new SctCod_It('|菜|な|の|花|はな|'),
    new SctCod_It('チューリップ'),
    new SctCod_It('|蒲公英|たんぽぽ|'),
    new SctCod_It('ハナミズキ'),
    new SctCod_It('|撫子|なでしこ|'),
    new SctCod_It('|牡丹|ぼたん|')
];
const cods_summer = [
    new SctCod_It('|夏|なつ|', 'summer.jpg'),
    new SctCod_It('|初夏|しょか|'),
    new SctCod_It('|猛暑|もうしょ|'),
    new SctCod_It('|酷暑|こくしょ|'),
    new SctCod_It('|残暑|ざんしょ|'),
    new SctCod_It('|梅雨|つゆ|'),
    new SctCod_It('|夕立|ゆうだち|'),
    new SctCod_It('|虹|にじ|'),
    new SctCod_It('|浴衣|ゆかた|'),
    new SctCod_It('|祭|まつり|'),
    new SctCod_It('|花火|はなび|'),
    new SctCod_It('|浜辺|はまべ|'),
    new SctCod_It('|蛍|ほたる|'),
    new SctCod_It('|蝉|せみ|'),
    new SctCod_It('|風鈴|ふうりん|')
];
const cods_flower_summer = [
    new SctCod_It('|夏|なつ|の|花|はな|', 'flower_summer.jpg'),
    new SctCod_It('|紫陽花|あじさい|'),
    new SctCod_It('|梔子|くちなし|'),
    new SctCod_It('ハイビスカス'),
    new SctCod_It('ブーゲンビリア'),
    new SctCod_It('|向日葵|ひまわり|'),
    new SctCod_It('|花菖蒲|はなしょうぶ|'),
    new SctCod_It('|水芭蕉|みずばしょう|'),
    new SctCod_It('|朝顔|あさがお|'),
    new SctCod_It('ダリア'),
    new SctCod_It('|桔梗|ききょう|')
];
const cods_autumn = [
    new SctCod_It('|秋|あき|', 'autumn.jpg'),
    new SctCod_It('|仲秋|ちゅうしゅう|'),
    new SctCod_It('|夜長|よなが|'),
    new SctCod_It('|月|つき|'),
    new SctCod_It('|紅葉|もみじ|'),
    new SctCod_It('|栗|くり|'),
    new SctCod_It('|柿|かき|'),
    new SctCod_It('|芋|いも|'),
    new SctCod_It('|梨|なし|'),
    new SctCod_It('|鈴虫|すずむし|')
];
const cods_flower_autumn = [
    new SctCod_It('|秋|あき|の|花|はな|', 'flower_autumn.jpg'),
    new SctCod_It('|萩|はぎ|'),
    new SctCod_It('|尾花|おばな|'),
    new SctCod_It('|葛|くず|'),
    new SctCod_It('|撫子|なでしこ|'),
    new SctCod_It('|桔梗|ききょう|'),
    new SctCod_It('|竜胆|りんどう|'),
    new SctCod_It('|秋桜|こすもす|'),
    new SctCod_It('|彼岸花|ひがんばな|'),
    new SctCod_It('|金木犀|きんもくせい|'),
    new SctCod_It('サフラン'),
    new SctCod_It('|葉牡丹|はぼたん|'),
    new SctCod_It('|杜鵑草|ほととぎす|'),
    new SctCod_It('サルビア'),
    new SctCod_It('パンジー')
];
const cods_winter = [
    new SctCod_It('|冬|ふゆ|', 'winter.jpg'),
    new SctCod_It('|雪|ゆき|'),
    new SctCod_It('|豪雪|ごうせつ|'),
    new SctCod_It('|氷|こおり|'),
    new SctCod_It('|霜|しも|')
];
const cods_flower_winter = [
    new SctCod_It('|冬|ふゆ|の|花|はな|', 'flower_winter.jpg'),
    new SctCod_It('スノードロップ'),
    new SctCod_It('クリスマスローズ'),
    new SctCod_It('|水仙|すいせん|'),
    new SctCod_It('マーガレット'),
    new SctCod_It('|柊|ひいらぎ|'),
    new SctCod_It('|福寿草|ふくじゅそう|'),
    new SctCod_It('アネモネ'),
    new SctCod_It('|黄梅|おうばい|'),
    new SctCod_It('カトレア'),
    new SctCod_It('|山茶花|さざんか|'),
    new SctCod_It('シクラメン')
];
const cods_flower = [
    new SctCod_It('|花|はな|', 'flower.jpg'),
    new SctCod_It('|花見|はなみ|'),
    new SctCod_It('|花屋|はなや|'),
    new SctCod_It('|花束|はなたば|'),
    new SctCod_It('|花売|はなう|り|娘|むすめ|'),
    new SctCod_It('|花道|はなみち|'),
    new SctCod_It('|花畑|はなばたけ|')
];
const cods_moon = [
    new SctCod_It('|月|つき|', 'moon.jpg'),
    new SctCod_It('|満月|まんげつ|'),
    new SctCod_It('|三日月|みかづき|'),
    new SctCod_It('|半月|はんげつ|'),
    new SctCod_It('|新月|しんげつ|'),
    new SctCod_It('|上弦|じょうげん|の|月|つき|'),
    new SctCod_It('|十五夜|じゅうごや|'),
    new SctCod_It('|十六夜|いざよい|'),
    new SctCod_It('|下弦|かげん|の|月|つき|')
    // ,
    // new SctCod_It('|月食|げっしょく|')
    ,
    new SctCod_It('|月夜|つきよ|'),
    new SctCod_It('|朧月|おぼろづき|'),
    new SctCod_It('|名月|めいげつ|')
];
const cods_sun = [
    new SctCod_It('|太陽|たいよう|', 'sun.jpg')
    // ,
    // new SctCod_It('|陽|ひ|')
    ,
    new SctCod_It('|朝日|あさひ|'),
    new SctCod_It('|夕陽|ゆうひ|'),
    new SctCod_It('|夕焼|ゆうや|け')
    // ,
    // new SctCod_It('|日食|にっしょく|')
    // ,
    // new SctCod_It('|皆既日食|かいきにっしょく|')
    ,
    new SctCod_It('|日|ひ|の|出|で|'),
    new SctCod_It('|初日|はつひ|の|出|で|'),
    new SctCod_It('|落日|らくじつ|')
];
const cods_star = [
    new SctCod_It('|星|ほし|', 'star.jpg'),
    new SctCod_It('|水星|すいせい|'),
    new SctCod_It('|金星|きんせい|'),
    new SctCod_It('|地球|ちきゅう|'),
    new SctCod_It('|火星|かせい|'),
    new SctCod_It('|木星|もくせい|'),
    new SctCod_It('|土星|どせい|'),
    new SctCod_It('|天王星|てんのうせい|'),
    new SctCod_It('|海王星|かいおうせい|'),
    new SctCod_It('|冥王星|めいおうせい|'),
    new SctCod_It('|彗星|すいせい|'),
    new SctCod_It('|星雲|せいうん|'),
    new SctCod_It('|天|あま|の|川|がわ|'),
    new SctCod_It('|銀河|ぎんが|'),
    new SctCod_It('|流|なが|れ|星|ぼし|'),
    new SctCod_It('|星座|せいざ|'),
    new SctCod_It('|北極星|ほっきょくせい|'),
    new SctCod_It('|北斗七星|ほくとしちせい|'),
    new SctCod_It('カシオペア'),
    new SctCod_It('|牡羊座|おひつじざ|'),
    new SctCod_It('|牡牛座|おうしざ|'),
    new SctCod_It('|双子座|ふたござ|'),
    new SctCod_It('|蟹座|かにざ|'),
    new SctCod_It('|獅子座|ししざ|'),
    new SctCod_It('|乙女座|おとめざ|'),
    new SctCod_It('|天秤座|てんびんざ|'),
    new SctCod_It('|蠍座|さそりざ|'),
    new SctCod_It('|射手座|いてざ|'),
    new SctCod_It('|山羊座|やぎざ|'),
    new SctCod_It('|水瓶座|みずがめざ|'),
    new SctCod_It('|魚座|うおざ|')
];
const cods_sky = [
    new SctCod_It('|空|そら|', 'sky.jpg'),
    new SctCod_It('|天|てん|'),
    new SctCod_It('|満天|まんてん|'),
    new SctCod_It('|虹|にじ|'),
    new SctCod_It('|青空|あおぞら|'),
    new SctCod_It('|夜空|よぞら|'),
    new SctCod_It('|星空|ほしぞら|')
];
const cods_weather = [
    new SctCod_It('|空模様|そらもよう|', 'weather.jpg'),
    new SctCod_It('|晴|は|れ'),
    new SctCod_It('|晴天|せいてん|'),
    new SctCod_It('|日本晴|にほんば|れ'),
    new SctCod_It('|雨|あめ|'),
    new SctCod_It('|小雨|こさめ|'),
    new SctCod_It('|雷雨|らいう|'),
    new SctCod_It('|豪雨|ごうう|'),
    new SctCod_It('|曇|くも|り'),
    new SctCod_It('|雷|かみなり|'),
    new SctCod_It('|霧|きり|'),
    new SctCod_It('|靄|もや|'),
    new SctCod_It('|風|かぜ|'),
    new SctCod_It('|嵐|あらし|'),
    new SctCod_It('|砂嵐|すなあらし|'),
    new SctCod_It('|砂塵|さじん|'),
    new SctCod_It('|竜巻|たつまき|')
    // ,
    // new SctCod_It('|台風|たいふう|')
];
const cods_bird = [
    new SctCod_It('|鳥|とり|', 'bird.jpg'),
    new SctCod_It('|鶏|にわとり|'),
    new SctCod_It('|雛|ひよこ|'),
    new SctCod_It('|雛|ひな|'),
    new SctCod_It('|烏|からす|'),
    new SctCod_It('|雀|すずめ|'),
    new SctCod_It('|鳩|はと|'),
    new SctCod_It('|鷹|たか|'),
    new SctCod_It('|鷲|わし|'),
    new SctCod_It('|鳶|とんび|'),
    new SctCod_It('|梟|ふくろう|'),
    new SctCod_It('|鴎|かもめ|'),
    new SctCod_It('|辺銀|ぺんぎん|'),
    new SctCod_It('|家鴨|あひる|'),
    new SctCod_It('|孔雀|くじゃく|'),
    new SctCod_It('|鳳凰|ほうおう|'),
    new SctCod_It('|朱雀|すじゃく|')
];
const cods_bird_spring = [
    new SctCod_It('|春|はる|の|鳥|とり|', 'bird_spring.jpg'),
    new SctCod_It('|鶯|うぐいす|'),
    new SctCod_It('|雉|きじ|'),
    new SctCod_It('|雲雀|ひばり|'),
    new SctCod_It('|燕|つばめ|'),
    new SctCod_It('|岩燕|いわつばめ|')
];
const cods_bird_summer = [
    new SctCod_It('|夏|なつ|の|鳥|とり|', 'bird_summer.jpg'),
    new SctCod_It('|日雀|ひがら|'),
    new SctCod_It('|眼白|めじろ|'),
    new SctCod_It('|五十雀|ごじゅうから|'),
    new SctCod_It('|駒鳥|こまどり|'),
    new SctCod_It('|山雀|やまがら|'),
    new SctCod_It('|四十雀|しじゅうから|'),
    new SctCod_It('|翡翠|かわせみ|'),
    new SctCod_It('|杜鵑草|ほととぎす|'),
    new SctCod_It('|雷鳥|らいちょう|'),
    new SctCod_It('|水鶏|くいな|'),
    new SctCod_It('|海猫|うみねこ|'),
    new SctCod_It('|白鷺|しらさぎ|'),
    new SctCod_It('|青鷺|あおさぎ|')
];
const cods_bird_autumn = [
    new SctCod_It('|秋|あき|の|鳥|とり|', 'bird_autumn.jpg'),
    new SctCod_It('|渡|わた|り|鳥|どり|'),
    new SctCod_It('|百舌鳥|もず|'),
    new SctCod_It('|鶫|つぐみ|'),
    new SctCod_It('|鵯|ひよどり|'),
    new SctCod_It('|椋鳥|むくどり|'),
    new SctCod_It('|鶉|うずら|'),
    new SctCod_It('|啄木鳥|きつつき|'),
    new SctCod_It('|雁|かり|')
];
const cods_bird_winter = [
    new SctCod_It('|冬|ふゆ|の|鳥|とり|', 'bird_winter.jpg'),
    new SctCod_It('|水鳥|みずとり|'),
    new SctCod_It('|寒雁|かんがん|'),
    new SctCod_It('|鴨|かも|'),
    new SctCod_It('|鴛鴦|おしどり|'),
    new SctCod_It('|鶴|つる|'),
    new SctCod_It('|白鳥|はくちょう|')
];
const cods_animal = [
    new SctCod_It('|獣|けもの|', 'animal.jpg'),
    new SctCod_It('|鼠|ねずみ|'),
    new SctCod_It('|牛|うし|'),
    new SctCod_It('|虎|とら|'),
    new SctCod_It('|兎|うさぎ|'),
    new SctCod_It('|龍|りゅう|'),
    new SctCod_It('|竜|りゅう|'),
    new SctCod_It('|蛇|へび|'),
    new SctCod_It('|馬|うま|'),
    new SctCod_It('|羊|ひつじ|'),
    new SctCod_It('|猿|さる|'),
    new SctCod_It('|犬|いぬ|'),
    new SctCod_It('|猪|いのしし|'),
    new SctCod_It('|鼬|いたち|'),
    new SctCod_It('|熊|くま|'),
    new SctCod_It('|猫|ねこ|'),
    new SctCod_It('|狸|たぬき|'),
    new SctCod_It('|狐|きつね|'),
    new SctCod_It('|鹿|しか|')
];
const cods_nature = [
    new SctCod_It('|野山|のやま|', 'nature.jpg'),
    new SctCod_It('|山|やま|'),
    new SctCod_It('|谷|たに|'),
    new SctCod_It('|崖|がけ|'),
    new SctCod_It('|川|かわ|'),
    new SctCod_It('|河|かわ|'),
    new SctCod_It('|滝|たき|'),
    new SctCod_It('|森|もり|'),
    new SctCod_It('|林|はやし|'),
    // new SctCod_It('|野|の|')
    // ,
    new SctCod_It('|野原|のはら|'),
    new SctCod_It('|池|いけ|'),
    new SctCod_It('|古池|ふるいけ|'),
    new SctCod_It('|湖|みずうみ|'),
    new SctCod_It('|海|うみ|'),
    new SctCod_It('|水辺|みずべ|'),
    new SctCod_It('|木|こ|の|葉|は|'),
    new SctCod_It('|木|き|の|実|み|'),
    new SctCod_It('|切|き|り|株|かぶ|'),
    new SctCod_It('|松|まつ|'),
    new SctCod_It('|杉|すぎ|'),
    new SctCod_It('|竹|たけ|'),
    new SctCod_It('|柳|やなぎ|')
];
const cods_home = [
    new SctCod_It('|家|いえ|', 'home.jpg'),
    new SctCod_It('|建物|たてもの|'),
    new SctCod_It('|住|す|まい'),
    new SctCod_It('|佇|たたず|まい'),
    new SctCod_It('|扉|とびら|'),
    new SctCod_It('|壁|かべ|'),
    new SctCod_It('|柱|はしら|'),
    new SctCod_It('|大黒柱|だいこくばしら|'),
    new SctCod_It('|窓|まど|'),
    new SctCod_It('|天井|てんじょう|'),
    new SctCod_It('|屋根|やね|'),
    new SctCod_It('|瓦|かわら|'),
    new SctCod_It('|門|もん|'),
    new SctCod_It('|台所|だいどころ|'),
    new SctCod_It('|風呂|ふろ|'),
    new SctCod_It('|湯船|ゆぶね|'),
    new SctCod_It('|寝床|ねどこ|'),
    new SctCod_It('|井戸|いど|')
];
const cods_town = [
    new SctCod_It('|街|まち|', 'town.jpg'),
    new SctCod_It('|町|まち|'),
    new SctCod_It('|町並|まちな|み'),
    new SctCod_It('|街並|まちな|み'),
    new SctCod_It('|村|むら|'),
    new SctCod_It('|家々|いえいえ|'),
    new SctCod_It('|市場|いちば|')
];
const cods_load = [
    new SctCod_It('|道|みち|', 'load.jpg'),
    new SctCod_It('|小径|こみち|'),
    new SctCod_It('|枝道|えだみち|'),
    new SctCod_It('|別|わか|れ|道|みち|'),
    new SctCod_It('|通|とお|り|道|みち|'),
    new SctCod_It('|獣道|けものみち|'),
    new SctCod_It('|進路|しんろ|'),
    new SctCod_It('|道路|どうろ|'),
    new SctCod_It('|十字路|じゅうじろ|'),
    new SctCod_It('|街道|かいどう|'),
    new SctCod_It('|軌道|きどう|'),
    new SctCod_It('|路線|ろせん|'),
    new SctCod_It('|道順|みちじゅん|')
];
const cods_move = [
    new SctCod_Mv('|動|うご|く', 'active.jpg'),
    new SctCod_Mv('|動|うご|け'),
    new SctCod_Mv('|動|うご|かない'),
    new SctCod_Mv('|動|うご|けない'),
    new SctCod_Mv('|進|すす|む'),
    new SctCod_Mv('|進|すす|め'),
    new SctCod_Mv('|戻|もど|る'),
    new SctCod_Mv('|戻|もど|れ'),
    new SctCod_Mv('|上|あ|がる'),
    new SctCod_Mv('|上|あ|がれ'),
    new SctCod_Mv('|下|さ|がる'),
    new SctCod_Mv('|下|さ|がれ'),
    new SctCod_Mv('|昇|のぼ|る'),
    new SctCod_Mv('|昇|のぼ|れ'),
    new SctCod_Mv('|降|くだ|る'),
    new SctCod_Mv('|降|くだ|れ'),
    new SctCod_Mv('|降|お|りる'),
    new SctCod_Mv('|降|お|りろ'),
    new SctCod_Mv('|落|お|ちる'),
    new SctCod_Mv('|落|お|ちよ')
];
const cods_move_dance = [
    new SctCod_Mv('|舞|ま|う', 'dance.jpg'),
    new SctCod_Mv('|舞|ま|え', 'dance.jpg'),
    new SctCod_Mv('|舞|ま|い|上|あ|がる'),
    new SctCod_Mv('|舞|ま|い|上|あ|がれ'),
    new SctCod_Mv('|舞|ま|い|降|お|りる'),
    new SctCod_Mv('|舞|ま|い|降|お|りた'),
    new SctCod_Mv('|舞|ま|い|戻|もど|る'),
    new SctCod_Mv('|舞|ま|い|戻|もど|れ'),
    new SctCod_Mv('|舞|ま|い|散|ち|る'),
    new SctCod_Mv('|踊|おど|る'),
    new SctCod_Mv('|踊|おど|れ'),
    new SctCod_Mv('|踊|おど|り|狂|くる|う'),
    new SctCod_Mv('|舞|ま|い|踊|おど|る'),
    new SctCod_Mv('|舞|ま|い|踊|おど|れ')
];
const cods_move_run = [
    new SctCod_Mv('|走|はし|る', 'run.jpg'),
    new SctCod_Mv('|走|はし|れ'),
    new SctCod_Mv('|駆|か|ける'),
    new SctCod_Mv('|駆|か|けよ'),
    new SctCod_Mv('|駆|か|け|抜|ぬ|ける'),
    new SctCod_Mv('|駆|か|け|抜|ぬ|けろ'),
    new SctCod_Mv('|突|つ|っ|走|ぱし|る'),
    new SctCod_Mv('|突|つ|っ|走|ぱし|れ'),
    new SctCod_Mv('|風|かぜ|を|切|き|る'),
    new SctCod_Mv('|風|かぜ|を|切|き|り'),
    new SctCod_Mv('|風|かぜ|を|切|き|れ')
];
const cods_move_fly = [
    new SctCod_Mv('|飛|と|ぶ', 'fly.jpg'),
    new SctCod_Mv('|飛|と|び|上|あ|がる'),
    new SctCod_Mv('|飛|と|び|越|こ|える'),
    new SctCod_Mv('|飛|と|び|込|こ|む'),
    new SctCod_Mv('|羽|は|ばたく'),
    new SctCod_Mv('|浮|う|き|上|あ|がる')
];
const cods_move_walk = [
    new SctCod_Mv('|歩|ある|く', 'walk.jpg'),
    new SctCod_Mv('|歩|あゆ|む')
];
const cods_move_stop = [
    new SctCod_Mv('|止|と|まる', 'stop.jpg'),
    new SctCod_Mv('|留|とど|まる'),
    new SctCod_Mv('|立|た|ち|止|ど|まる'),
    new SctCod_Mv('|佇|たたず|む'),
    new SctCod_Mv('|終|お|わる')
];
const cods_move_open = [
    new SctCod_Mv('|開|ひら|く', 'open.jpg'),
    new SctCod_Mv('|開|あ|ける'),
    new SctCod_Mv('|開|ひら|ける'),
    new SctCod_Mv('|広|ひろ|がる'),
    new SctCod_Mv('|広|ひろ|げる')
];
const cods_move_life = [
    new SctCod_Mv('|生|い|きる', 'life.jpg'),
    new SctCod_Mv('|咲|さ|く'),
    new SctCod_Mv('|活|い|きる'),
    new SctCod_Mv('|実|みの|る'),
    new SctCod_Mv('|産|う|まれる'),
    new SctCod_Mv('|始|はじ|まる')
];
const cods_move_death = [
    new SctCod_Mv('|死|し|ぬ', 'death.jpg'),
    new SctCod_Mv('|死|し|す'),
    new SctCod_Mv('|死|し|ね'),
    new SctCod_Mv('|倒|たお|れる'),
    new SctCod_Mv('|倒|たお|れし'),
    new SctCod_Mv('|枯|か|れる'),
    new SctCod_Mv('|枯|か|れた'),
    new SctCod_Mv('|散|ち|る'),
    new SctCod_Mv('|散|ち|りゆく'),
    new SctCod_Mv('|朽|く|ち|果|は|てる'),
    new SctCod_Mv('|尽|つ|きる'),
    new SctCod_Mv('|尽|つ|きた'),
    new SctCod_Mv('|終|お|える'),
    new SctCod_Mv('|終|お|えた'),
    new SctCod_Mv('|失|うしな|う'),
    new SctCod_Mv('|失|うしな|われる')
];
const cods_move_light = [
    new SctCod_Mv('|光|ひか|る', 'light.jpg'),
    new SctCod_Mv('|輝|かがや|く'),
    new SctCod_Mv('|輝|かがや|け'),
    new SctCod_Mv('|輝|かがや|かしい'),
    new SctCod_Mv('|目映|まばゆ|い'),
    new SctCod_Mv('|眩|まぶ|しい'),
    new SctCod_Mv('|光|ひか|り|輝|かがや|く'),
    new SctCod_Mv('|光|ひか|り|輝|かがや|け'),
    new SctCod_Mv('|照|て|らす'),
    new SctCod_Mv('|照|て|らせ')
];
const cods_move_dark = [
    new SctCod_Mv('|陰|かげ|る', 'dark.jpg'),
    new SctCod_Mv('|暗|くら|い'),
    new SctCod_Mv('|暗|くら|く'),
    new SctCod_Mv('|暗|くら|き'),
    new SctCod_Mv('|影射|かげさ|す'),
    new SctCod_Mv('|影|かげ|が|射|さ|す')
];
const cods_move_think = [
    new SctCod_Mv('|想|おも|う', 'think.jpg'),
    new SctCod_Mv('|想|おも|い'),
    new SctCod_Mv('|考|かんが|える'),
    new SctCod_Mv('|祈|いの|る'),
    new SctCod_Mv('|願|ねが|う'),
    new SctCod_Mv('|忍|しの|ぶ'),
    new SctCod_Mv('|恋|こ|い|慕|した|う'),
    new SctCod_Mv('|愛|あい|する'),
    new SctCod_Mv('|愛|いと|おしむ'),
    new SctCod_Mv('|感|かん|じる'),
    new SctCod_Mv('|思|おも|い|返|かえ|す'),
    new SctCod_Mv('|思|おも|い|出|だ|す'),
    new SctCod_Mv('|思|おも|い|起|お|こす')
];
const cods_adject_color = [
    // new SctCod_Mv('|色|いろ|','color.png')
    // ,
    new SctCod_Mv('|赤|あか|い'),
    new SctCod_Mv('|青|あお|い'),
    new SctCod_Mv('|緑|みどり|の'),
    new SctCod_Mv('|黄色|きいろ|い'),
    new SctCod_Mv('|白|しろ|い'),
    new SctCod_Mv('|黒|くろ|い'),
    new SctCod_Mv('|淡|あわ|い'),
    new SctCod_Mv('|薄|うす|い')
    // ,
    // new SctCod_Mv('|濃|こ|い')
];
const cods_item_color = [
    // new SctCod_It('|赤|あか|')
    // ,
    // new SctCod_It('|青|あお|')
    // ,
    // new SctCod_It('|緑|みどり|')
    // ,
    // new SctCod_It('|黄色|きいろ|')
    // ,
    // new SctCod_It('|白|しろ|')
    // ,
    // new SctCod_It('|黒|くろ|')
    // ,
    // new SctCod_It('|紫|むらさき|')
    // ,
    new SctCod_It('|赤|あか|く'),
    new SctCod_It('|青|あお|く'),
    new SctCod_It('|緑|みどり|に'),
    new SctCod_It('|黄色|きいろ|く'),
    new SctCod_It('|白|しろ|く'),
    new SctCod_It('|黒|くろ|く'),
    new SctCod_It('|淡|あわ|く'),
    new SctCod_It('|薄|うす|く')
    // ,
    // new SctCod_It('|濃|こ|い')
];
const cods_adject_beauty = [
    new SctCod_Mv('|美|うつく|しい', 'beauty.png'),
    new SctCod_Mv('|美|うつく|しき'),
    new SctCod_Mv('|美々|びび|しい'),
    new SctCod_Mv('|神々|こうごう|しい'),
    new SctCod_Mv('|愛|あい|らしい'),
    new SctCod_Mv('|愛|あい|らしき'),
    new SctCod_Mv('|可憐|かれん|な'),
    new SctCod_Mv('|愛|あい|くるしい'),
    new SctCod_Mv('|愛|いと|おしい'),
    new SctCod_Mv('|綺麗|きれい|な'),
    new SctCod_Mv('|華麗|かれい|に'),
    new SctCod_Mv('|優雅|ゆうが|に')
    // ,
    // new SctCod_Mv('|醜|みにく|い')
    // ,
    // new SctCod_Mv('|見苦|みぐる|しい')
    // ,
    // new SctCod_Mv('|不味|まず|い')
    // ,
    // new SctCod_Mv('|汚|きたな|い')
    // ,
    // new SctCod_Mv('|汚|きたな|い')
    // ,
    // new SctCod_Mv('|卑|いや|しい')
];
const cods_body = [
    new SctCod_It('|体|からだ|', 'body.jpg'),
    new SctCod_It('|肉体|にくたい|'),
    new SctCod_It('|頭|あたま|'),
    new SctCod_It('|眼|まなこ|'),
    new SctCod_It('|耳|みみ|'),
    new SctCod_It('|鼻|はな|'),
    new SctCod_It('|口|くち|'),
    new SctCod_It('|首|くび|'),
    new SctCod_It('|肩|かた|'),
    new SctCod_It('|腕|うで|'),
    new SctCod_It('|手足|てあし|'),
    new SctCod_It('|足腰|あしこし|'),
    new SctCod_It('|指|ゆび|'),
    new SctCod_It('|拳|こぶし|'),
    new SctCod_It('|胸|むね|'),
    new SctCod_It('|腰|こし|'),
    new SctCod_It('|尻|しり|'),
    new SctCod_It('|足|あし|')
];
const cods_move_which = [
    new SctCod_Mv('この'),
    new SctCod_Mv('その'),
    new SctCod_Mv('あの'),
    new SctCod_Mv('どの')
];
const cods_what = [
    new SctCod_It('これ'),
    new SctCod_It('それ'),
    new SctCod_It('あれ'),
    new SctCod_It('どれ')
];
const cods_where = [
    new SctCod_It('ここ'),
    new SctCod_It('そこ'),
    new SctCod_It('あそこ'),
    new SctCod_It('どこ')
];
const cods_when = [
    new SctCod_It('|時|とき|', 'time.jpg'),
    new SctCod_It('|今|いま|'),
    // new SctCod_It('|後|あと|で')
    // ,
    // new SctCod_It('|後|のち|に')
    // ,
    new SctCod_It('|今日|きょう|'),
    new SctCod_It('|明日|あす|'),
    new SctCod_It('|明日|あした|'),
    new SctCod_It('|明後日|あさって|'),
    new SctCod_It('|明明後日|しあさって|'),
    new SctCod_It('|昨日|きのう|'),
    new SctCod_It('|一昨日|おととい|'),
    new SctCod_It('|一昨昨日|さきおととい|')
    // ,
    // new SctCod_It('|何時|いつ|')
];
const cods_conect = [
    new SctCod('は'),
    new SctCod('で'),
    new SctCod('に'),
    new SctCod('を'),
    new SctCod('と'),
    new SctCod('や'),
    new SctCod('も')
];
const cods_gundam = [
    new SctCod_It('ガンダム', 'gundam.jpg'),
    new SctCod_It('ホワイトベース'),
    new SctCod_It('|木馬|もくば|'),
    new SctCod_It('ガンキャノン'),
    new SctCod_It('ガンタンク'),
    new SctCod_It('ハロ'),
    new SctCod_It('|白|しろ|い|悪魔|あくま|'),
    new SctCod_It('|弾幕|だんまく|')
];
const cods_zeon = [
    new SctCod_It('ジオン', 'zeon.jpg'),
    new SctCod_It('ジーク・ジオン'),
    new SctCod_It('ザク'),
    new SctCod_It('グフ'),
    new SctCod_It('ドム'),
    new SctCod_It('リック・ドム'),
    new SctCod_It('ゴッグ'),
    new SctCod_It('ズゴック'),
    new SctCod_It('アッガイ'),
    new SctCod_It('ゾック'),
    new SctCod_It('ギャン'),
    new SctCod_It('ゲルググ'),
    new SctCod_It('ジオング'),
    new SctCod_It('シャア|専用|せんよう|'),
    new SctCod_It('コロニー|落|お|とし')
];
