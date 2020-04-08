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
    new SctCod_It('|霜|しも|'),
    new SctCod_It('|雪化粧|ゆきげしょう|')
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
const cods_family = [
    new SctCod_It('|家族|かぞく|', 'family.jpg'),
    new SctCod_It('|父|ちち|'),
    new SctCod_It('|兄|あに|'),
    new SctCod_It('|姉|あね|'),
    new SctCod_It('|弟|おとうと|'),
    new SctCod_It('|妹|いもうと|'),
    new SctCod_It('|息子|むすこ|'),
    new SctCod_It('|娘|むすめ|'),
    new SctCod_It('|夫|おっと|'),
    new SctCod_It('|嫁|よめ|'),
    new SctCod_It('|妻|つま|'),
    new SctCod_It('|女房|にょうぼう|'),
    new SctCod_It('|恋女房|こいにょうぼう|'),
    new SctCod_It('|鬼嫁|おによめ|'),
    new SctCod_It('|亭主|ていしゅ|'),
    new SctCod_It('|祖父|そふ|'),
    new SctCod_It('|祖母|そぼ|'),
    new SctCod_It('|叔父|おじ|'),
    new SctCod_It('|叔母|おば|'),
    new SctCod_It('|従兄弟|いとこ|'),
    new SctCod_It('|従姉妹|いとこ|'),
    new SctCod_It('|孫|まご|'),
    new SctCod_It('|玄孫|やしゃご|'),
    new SctCod_It('|舅|しゅうと|'),
    new SctCod_It('|小姑|こじゅうと|')
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
const cods_make = [
    new SctCod_It('|化粧|けしょう|', 'make.jpg'),
    new SctCod_It('|衣装|いしょう|'),
    new SctCod_It('|衣|ころも|'),
    new SctCod_It('|飾|かざ|り')
];
const cods_load = [
    new SctCod_It('|道|みち|', 'load.jpg'),
    new SctCod_It('|小径|こみち|'),
    new SctCod_It('|枝道|えだみち|'),
    new SctCod_It('|別|わか|れ|道|みち|'),
    new SctCod_It('|通|とお|り|道|みち|'),
    new SctCod_It('|獣道|けものみち|')
    // ,
    // new SctCod_It('|進路|しんろ|')
    // ,
    // new SctCod_It('|道路|どうろ|')
    ,
    new SctCod_It('|十字路|じゅうじろ|'),
    new SctCod_It('|街道|かいどう|'),
    new SctCod_It('|軌道|きどう|')
    // ,
    // new SctCod_It('|路線|ろせん|')
    // ,
    // new SctCod_It('|道順|みちじゅん|')
];
const cods_country = [
    new SctCod_It('|国々|くにぐに|', 'worldcountry.jpg'),
    new SctCod_It('|氷島|アイスランド|'),
    new SctCod_It('愛蘭、|愛蘭土|アイルランド|'),
    new SctCod_It('|阿塞拜疆|アゼルバイジャン|'),
    new SctCod_It('|阿富汗斯坦|アフガニスタン|'),
    new SctCod_It('|亜米利加|アメリカ|'),
    new SctCod_It('阿爾及、|阿留世里屋|アルジェリア|'),
    new SctCod_It('|亜爾然丁|アルゼンチン|'),
    new SctCod_It('|阿爾巴尼亜|アルバニア|'),
    new SctCod_It('|亜美尼亜|アルメニア|'),
    new SctCod_It('|諳喀剌|アンゴラ|'),
    new SctCod_It('|安道爾|アンドラ|'),
    new SctCod_It('|也門|イエメン|'),
    new SctCod_It('|英吉利|イギリス|'),
    new SctCod_It('|伊色剌|イスラエル|'),
    new SctCod_It('|伊太利亜|イタリア|'),
    new SctCod_It('|伊拉久|イラク|'),
    new SctCod_It('|伊蘭|イラン|'),
    new SctCod_It('|印度|インド|'),
    new SctCod_It('|印度尼西亜|インドネシア|'),
    new SctCod_It('|宇岸陀|ウガンダ|'),
    new SctCod_It('|烏克蘭|ウクライナ|'),
    new SctCod_It('|月即別|ウズベキスタン|'),
    new SctCod_It('|宇柳具|ウルグアイ|'),
    new SctCod_It('|厄瓜多|エクアドル|'),
    new SctCod_It('|埃及|エジプト|'),
    new SctCod_It('|愛沙尼亜|エストニア|'),
    new SctCod_It('|哀提伯|エチオピア|'),
    new SctCod_It('|厄立特里亜|エリトリア|'),
    new SctCod_It('|救世主国|エルサルバドル|'),
    new SctCod_It('|濠太剌利|オーストラリア|'),
    new SctCod_It('|墺太利|オーストリア|'),
    new SctCod_It('|阿曼|オマーン|'),
    new SctCod_It('|和蘭|オランダ|'),
    new SctCod_It('|加納|ガーナ|'),
    new SctCod_It('|辺瑠出角|カーボベルデ|'),
    new SctCod_It('|圭亜那|ガイアナ|'),
    new SctCod_It('|香佐富斯坦|カザフスタン|'),
    new SctCod_It('|華太瑠|カタール|'),
    new SctCod_It('|加奈陀|カナダ|'),
    new SctCod_It('|加蓬|ガボン|'),
    new SctCod_It('|夏麦論|カメルーン|'),
    new SctCod_It('|岡比亜|ガンビア|'),
    new SctCod_It('|柬埔寨|カンボジア|'),
    new SctCod_It('|幾内亜|ギニア|'),
    new SctCod_It('|幾内亜美須|ギニアビサウ|'),
    new SctCod_It('|塞浦路斯|キプロス|'),
    new SctCod_It('|玖馬|キューバ|'),
    new SctCod_It('|希臘|ギリシャ|'),
    new SctCod_It('|基里巴斯|キリバス|'),
    new SctCod_It('|黠戞斯|キルギス|'),
    new SctCod_It('|危地馬拉|グアテマラ|'),
    new SctCod_It('|科威都|クウェート|'),
    new SctCod_It('|具琉耳|グルジア|'),
    new SctCod_It('|格林納達|グレナダ|'),
    new SctCod_It('|克羅地亜|クロアチア|'),
    new SctCod_It('|肯尼亜|ケニア|'),
    new SctCod_It('|象牙海岸|コートジボワール|'),
    new SctCod_It('|哥斯達利加|コスタリカ|'),
    new SctCod_It('|科摩羅|コモロ|'),
    new SctCod_It('|哥倫比亜|コロンビア|'),
    new SctCod_It('|沙地亜剌比亜|サウジアラビア|'),
    new SctCod_It('|薩摩亜|サモア|'),
    new SctCod_It('|賛比亜|ザンビア|'),
    new SctCod_It('|聖馬力諾|サンマリノ|'),
    new SctCod_It('|獅子山|シエラレオネ|'),
    new SctCod_It('|吉武地|ジブチ|'),
    new SctCod_It('|牙買加|ジャマイカ|'),
    new SctCod_It('|叙利亜|シリア|'),
    new SctCod_It('|新嘉坡|シンガポール|'),
    new SctCod_It('|津巴布韋|ジンバブエ|'),
    new SctCod_It('|瑞西|スイス|'),
    new SctCod_It('|瑞典|スウェーデン|'),
    new SctCod_It('|蘇丹|スーダン|'),
    new SctCod_It('|西班牙|スペイン|'),
    new SctCod_It('|蘇里南|スリナム|'),
    new SctCod_It('|錫蘭|スリランカ|'),
    new SctCod_It('|斯洛伐克|スロバキア|'),
    new SctCod_It('|斯洛文尼亜|スロベニア|'),
    new SctCod_It('|斯威士蘭|スワジランド|'),
    new SctCod_It('|塞舌爾|セーシェル|'),
    new SctCod_It('|塞内牙|セネガル|'),
    new SctCod_It('|聖盧西亜|セントルシア|'),
    new SctCod_It('|蘇摩利亜|ソマリア|'),
    new SctCod_It('|泰|タイ|'),
    new SctCod_It('|汰爾奇斯坦|タジキスタン|'),
    new SctCod_It('|坦桑尼亜|タンザニア|'),
    new SctCod_It('|捷克|チェコ|'),
    new SctCod_It('|茶都|チャド|'),
    new SctCod_It('|突尼斯|チュニジア|'),
    new SctCod_It('|智利|チリ|'),
    new SctCod_It('|津張|ツバル|'),
    new SctCod_It('|丁抹|デンマーク|'),
    new SctCod_It('|独逸|ドイツ|'),
    new SctCod_It('|多哥|トーゴ|'),
    new SctCod_It('|土弥尼加|ドミニカ|'),
    new SctCod_It('|特多|トバゴ|'),
    new SctCod_It('|土耳古斯坦|トルクメニスタン|'),
    new SctCod_It('|土耳古|トルコ|'),
    new SctCod_It('|湯加|トンガ|'),
    new SctCod_It('|尼日利亜|ナイジェリア|'),
    new SctCod_It('|瑙魯|ナウル|'),
    new SctCod_It('|納米比亜|ナミビア|'),
    new SctCod_It('|尼加拉瓦|ニカラグア|'),
    new SctCod_It('|尼日爾|ニジェール|'),
    new SctCod_It('|新西伊蘭土|ニュージーランド|'),
    new SctCod_It('|泥婆羅|ネパール|'),
    new SctCod_It('|諾威|ノルウェー|'),
    new SctCod_It('|巴林|バーレーン|'),
    new SctCod_It('|海地|ハイチ|'),
    new SctCod_It('|巴基斯坦|パキスタン|'),
    new SctCod_It('|和地関|バチカン|'),
    new SctCod_It('|巴奈馬|パナマ|'),
    new SctCod_It('|瓦努阿図|バヌアツ|'),
    new SctCod_It('|巴哈馬|バハマ|'),
    new SctCod_It('|巴布亜新几内亜|パプアニューギニア|'),
    new SctCod_It('|帛琉|パラオ|'),
    new SctCod_It('|巴拉圭|パラグアイ|'),
    new SctCod_It('|巴巴多斯|バルバドス|'),
    new SctCod_It('|洪牙利|ハンガリー|'),
    new SctCod_It('|孟加拉国|バングラデシュ|'),
    new SctCod_It('|斐済|フィジー|'),
    new SctCod_It('|比律賓|フィリピン|'),
    new SctCod_It('|芬蘭|フィンランド|'),
    new SctCod_It('|不丹|ブータン|'),
    new SctCod_It('|伯剌西爾|ブラジル|'),
    new SctCod_It('|仏蘭西|フランス|'),
    new SctCod_It('|勃牙利|ブルガリア|'),
    new SctCod_It('|布基納法索|ブルキナファソ|'),
    new SctCod_It('|文莱|ブルネイ|'),
    new SctCod_It('|布隆迪|ブルンジ|'),
    new SctCod_It('|越南|ベトナム|'),
    new SctCod_It('|貝甯|ベナン|'),
    new SctCod_It('|委内瑞拉|ベネズエラ|'),
    new SctCod_It('|白露西亜|ベラルーシ|'),
    new SctCod_It('|秘露|ペルー|'),
    new SctCod_It('|白耳義|ベルギー|'),
    new SctCod_It('|波蘭|ポーランド|'),
    new SctCod_It('|博茨瓦納|ボツワナ|'),
    new SctCod_It('|暮利比亜|ボリビア|'),
    new SctCod_It('|葡萄牙|ポルトガル|'),
    new SctCod_It('|洪都拉斯|ホンジュラス|'),
    new SctCod_It('|馬歇爾諸島|マーシャしょとう|'),
    new SctCod_It('|馬其頓|マケドニア|'),
    new SctCod_It('|馬達加斯加|マダガスカル|'),
    new SctCod_It('|馬拉維|マラウイ|'),
    new SctCod_It('|馬耳他|マルタ|'),
    new SctCod_It('|馬来西亜|マレーシア|'),
    new SctCod_It('|密克羅尼西亜|ミクロネシア|'),
    new SctCod_It('|南阿弗利加|アフリカ|'),
    new SctCod_It('|緬甸|ミャンマー|'),
    new SctCod_It('|墨西哥|メキシコ|'),
    new SctCod_It('|毛利西亜|モーリシャス|'),
    new SctCod_It('|毛里塔尼亜|モーリタニア|'),
    new SctCod_It('|莫三鼻給|モザンビーク|'),
    new SctCod_It('|摩納哥|モナコ|'),
    new SctCod_It('|馬爾代夫|モルディブ|'),
    new SctCod_It('|摩爾多瓦|モルドバ|'),
    new SctCod_It('|摩洛哥|モロッコ|'),
    new SctCod_It('|蒙古|モンゴル|'),
    new SctCod_It('|約旦|ヨルダン|'),
    new SctCod_It('|羅宇|ラオス|'),
    new SctCod_It('|拉脱維亜|ラトビア|'),
    new SctCod_It('|立陶宛|リトアニア|'),
    new SctCod_It('|利比亜|リビア|'),
    new SctCod_It('|列支敦士登|リヒテンシュタイン|'),
    new SctCod_It('|利比里亜|リベリア|'),
    new SctCod_It('|羅馬尼亜|ルーマニア|'),
    new SctCod_It('|盧森堡|ルクセンブルク|'),
    new SctCod_It('|路安達|ルワンダ|'),
    new SctCod_It('|莱索托|レソト|'),
    new SctCod_It('|黎巴嫩|レバノン|'),
    new SctCod_It('|露西亜|ロシア|')
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
    new SctCod_Mv('|滑|すべ|る'),
    new SctCod_Mv('|転|ころ|がる'),
    new SctCod_Mv('|立|た|つ'),
    new SctCod_Mv('|立|た|ち|上|あ|がる'),
    new SctCod_Mv('|座|すわ|る')
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
    new SctCod_Mv('|飛|と|び|出|だ|す'),
    new SctCod_Mv('|羽|は|ばたく'),
    new SctCod_Mv('|浮|う|き|上|あ|がる')
];
const cods_move_walk = [
    new SctCod_Mv('|歩|ある|く', 'walk.jpg'),
    new SctCod_Mv('|歩|あゆ|む'),
    new SctCod_Mv('|往|ゆ|く')
    // ,
    // new SctCod_Mv('|行|い|く')
    ,
    new SctCod_Mv('|進|すす|む'),
    new SctCod_Mv('|戻|もど|る'),
    new SctCod_Mv('|帰|かえ|る'),
    new SctCod_Mv('|去|さ|る'),
    new SctCod_Mv('|立|た|ち|去|さ|る'),
    new SctCod_Mv('|目指|めざ|す')
];
const cods_move_stop = [
    new SctCod_Mv('|止|と|まる', 'stop.jpg'),
    new SctCod_Mv('|留|とど|まる'),
    new SctCod_Mv('|立|た|ち|止|ど|まる'),
    new SctCod_Mv('|佇|たたず|む')
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
    new SctCod_Mv('|始|はじ|まる'),
    new SctCod_Mv('|目覚|めざ|める'),
    new SctCod_Mv('|眠|ねむ|る'),
    new SctCod_Mv('|起|お|きる')
];
const cods_move_death = [
    // new SctCod_Mv('|死|し|ぬ','death.jpg')
    // ,
    // new SctCod_Mv('|死|し|す')
    // ,
    // new SctCod_Mv('|死|し|ね')
    // ,
    new SctCod_Mv('|倒|たお|れる'),
    new SctCod_Mv('|倒|たお|れし'),
    new SctCod_Mv('|枯|か|れる'),
    new SctCod_Mv('|枯|か|れた'),
    new SctCod_Mv('|散|ち|る'),
    new SctCod_Mv('|散|ち|りゆく'),
    new SctCod_Mv('|朽|く|ち|果|は|てる'),
    new SctCod_Mv('|尽|つ|きる'),
    new SctCod_Mv('|尽|つ|きた'),
    new SctCod_Mv('|終|お|わる'),
    new SctCod_Mv('|終|お|える'),
    new SctCod_Mv('|終|お|えた'),
    new SctCod_Mv('|失|うしな|う'),
    new SctCod_Mv('|失|うしな|われる'),
    new SctCod_Mv('|見失|みうしな|う'),
    new SctCod_Mv('|損|そこ|なう'),
    new SctCod_Mv('|消|き|える')
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
    new SctCod_Mv('|思|おも|い|返|かえ|す'),
    new SctCod_Mv('|思|おも|い|出|だ|す'),
    new SctCod_Mv('|思|おも|い|起|お|こす')
];
const cods_move_sense = [
    new SctCod_Mv('|感|かん|じる', 'sense.jpg'),
    new SctCod_Mv('|見|み|る'),
    new SctCod_Mv('|見|み|える'),
    new SctCod_Mv('|聞|き|く'),
    new SctCod_Mv('|聞|き|こえる'),
    new SctCod_Mv('|聞|き|こえし'),
    new SctCod_Mv('|匂|にお|う'),
    new SctCod_Mv('|嗅|か|ぐわしい'),
    new SctCod_Mv('|甘|あま|い'),
    new SctCod_Mv('|辛|から|い'),
    new SctCod_Mv('|苦|にが|い'),
    new SctCod_Mv('|響|ひび|く')
];
const cods_move_make = [
    new SctCod_Mv('|着飾|きかざ|る', 'make.jpg'),
    new SctCod_Mv('|纏|まと|う'),
    new SctCod_Mv('|着|き|る'),
    new SctCod_Mv('|化|ば|ける'),
    new SctCod_Mv('|脱|ぬ|ぐ')
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
