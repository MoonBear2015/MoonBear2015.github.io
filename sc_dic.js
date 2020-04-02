"use strict";
const cods_spring = [
    new SctCod_It('|春|はる|', 2, 'spring.jpg'),
    new SctCod_It('|立春|りっしゅん|', 4),
    new SctCod_It('|土筆|つくし|', 3),
    new SctCod_It('|蛙|かえる|', 3),
    new SctCod_It('|蛙|かわず|', 3),
    new SctCod_It('お|玉杓子|たまじゃくし|', 6),
    new SctCod_It('|蛤|はまぐり|', 4),
    new SctCod_It('|浅蜊|あさり|', 3),
    new SctCod_It('|雛祭|ひなまつり|', 5),
    new SctCod_It('|花見|はなみ|', 3)
];
const cods_flower_spring = [
    new SctCod_It('|春|はる|の|花|はな|', 5, 'flower_spring.jpg'),
    new SctCod_It('|梅|うめ|', 2),
    new SctCod_It('|桜|さくら|', 3),
    new SctCod_It('|椿|つばき|', 3),
    new SctCod_It('|菜|な|の|花|はな|', 4),
    new SctCod_It('チューリップ', 5),
    new SctCod_It('|蒲公英|たんぽぽ|', 4),
    new SctCod_It('ハナミズキ', 5),
    new SctCod_It('|撫子|なでしこ|', 4),
    new SctCod_It('|牡丹|ぼたん|', 3)
];
const cods_summer = [
    new SctCod_It('|夏|なつ|', 2, 'summer.jpg'),
    new SctCod_It('|初夏|しょか|', 2),
    new SctCod_It('|猛暑|もうしょ|', 3),
    new SctCod_It('|酷暑|こくしょ|', 3),
    new SctCod_It('|残暑|ざんしょ|', 3),
    new SctCod_It('|虹|にじ|', 2),
    new SctCod_It('|浴衣|ゆかた|', 3),
    new SctCod_It('|祭|まつり|', 3),
    new SctCod_It('|花火|はなび|', 3),
    new SctCod_It('|浜辺|はまべ|', 3),
    new SctCod_It('|蛍|ほたる|', 3),
    new SctCod_It('|蝉|せみ|', 3),
    new SctCod_It('|風鈴|ふうりん|', 4)
];
const cods_flower_summer = [
    new SctCod_It('|夏|なつ|の|花|はな|', 5, 'flower_summer.jpg'),
    new SctCod_It('|紫陽花|あじさい|', 4),
    new SctCod_It('|梔子|くちなし|', 3),
    new SctCod_It('ハイビスカス', 6),
    new SctCod_It('ブーゲンビリア', 7),
    new SctCod_It('|向日葵|ひまわり|', 4),
    new SctCod_It('|花菖蒲|はなしょうぶ|', 5),
    new SctCod_It('|水芭蕉|みずばしょう|', 5),
    new SctCod_It('|朝顔|あさがお|', 4),
    new SctCod_It('ダリア', 3),
    new SctCod_It('|桔梗|ききょう|', 3)
];
const cods_autumn = [
    new SctCod_It('|秋|あき|', 2, 'autumn.jpg'),
    new SctCod_It('|夜長|よなが|', 3),
    new SctCod_It('|月|つき|', 2),
    new SctCod_It('|紅葉|もみじ|', 3),
    new SctCod_It('|栗|くり|', 2),
    new SctCod_It('|柿|かき|', 2),
    new SctCod_It('|芋|いも|', 2),
    new SctCod_It('|梨|なし|', 2),
    new SctCod_It('|鈴虫|すずむし|', 2)
];
const cods_flower_autumn = [
    new SctCod_It('|秋|あき|の|花|はな|', 5, 'flower_autumn.jpg'),
    new SctCod_It('|萩|はぎ|', 2),
    new SctCod_It('|尾花|おばな|', 3),
    new SctCod_It('|葛|くず|', 2),
    new SctCod_It('|撫子|なでしこ|', 4),
    new SctCod_It('|桔梗|ききょう|', 3),
    new SctCod_It('|竜胆|りんどう|', 4),
    new SctCod_It('|秋桜|こすもす|', 4),
    new SctCod_It('|彼岸花|ひがんばな|', 5),
    new SctCod_It('|金木犀|きんもくせい|', 5),
    new SctCod_It('サフラン', 4),
    new SctCod_It('|葉牡丹|はぼたん|', 4),
    new SctCod_It('|杜鵑草|ほととぎす|', 5),
    new SctCod_It('サルビア', 4),
    new SctCod_It('パンジー', 4)
];
const cods_winter = [
    new SctCod_It('|冬|ふゆ|', 2, 'winter.jpg'),
    new SctCod_It('|雪|ゆき|', 2),
    new SctCod_It('|氷|こおり|', 3),
    new SctCod_It('|霜|しも|', 2)
];
const cods_flower_winter = [
    new SctCod_It('|冬|ふゆ|の|花|はな|', 5, 'flower_winter.jpg'),
    new SctCod_It('スノードロップ', 7),
    new SctCod_It('クリスマスローズ', 8),
    new SctCod_It('|水仙|すいせん|', 4),
    new SctCod_It('マーガレット', 6),
    new SctCod_It('|柊|ひいらぎ|', 4),
    new SctCod_It('|福寿草|ふくじゅそう|', 5),
    new SctCod_It('アネモネ', 4),
    new SctCod_It('|黄梅|おうばい|', 4),
    new SctCod_It('カトレア', 4),
    new SctCod_It('|山茶花|さざんか|', 4),
    new SctCod_It('シクラメン', 5)
];
const cods_flower = [
    new SctCod_It('|花|はな|', 2, 'flower.jpg'),
    new SctCod_It('|花見|はなみ|', 3),
    new SctCod_It('|花屋|はなや|', 3),
    new SctCod_It('|花束|はなたば|', 4),
    new SctCod_It('|花売|はなう|り|娘|むすめ|', 7)
];
const cods_moon = [
    new SctCod_It('|月|つき|', 2, 'moon.jpg'),
    new SctCod_It('|満月|まんげつ|', 4),
    new SctCod_It('|三日月|みかづき|', 4),
    new SctCod_It('|半月|はんげつ|', 4),
    new SctCod_It('|新月|しんげつ|', 4),
    new SctCod_It('|上弦|じょうげん|の|月|つき|', 7),
    new SctCod_It('|十五夜|じゅうごや|', 4),
    new SctCod_It('|十六夜|いざよい|', 4),
    new SctCod_It('|下弦|かげん|の|月|つき|', 6)
    // ,
    // new SctCod_It('|月食|げっしょく|',4)
    ,
    new SctCod_It('|月夜|つきよ|', 3),
    new SctCod_It('|朧月|おぼろづき|', 5),
    new SctCod_It('|名月|めいげつ|', 4)
];
const cods_sun = [
    new SctCod_It('|太陽|たいよう|', 4, 'sun.jpg')
    // ,
    // new SctCod_It('|陽|ひ|',1)
    ,
    new SctCod_It('|朝日|あさひ|', 3),
    new SctCod_It('|夕陽|ゆうひ|', 3),
    new SctCod_It('|夕焼|ゆうや|け', 4)
    // ,
    // new SctCod_It('|日食|にっしょく|',4)
    // ,
    // new SctCod_It('|皆既日食|かいきにっしょく|',7)
    ,
    new SctCod_It('|日|ひ|の|出|で|', 3),
    new SctCod_It('|初日|はつひ|の|出|で|', 5),
    new SctCod_It('|落日|らくじつ|', 4)
];
const cods_star = [
    new SctCod_It('|星|ほし|', 2, 'star.jpg'),
    new SctCod_It('|水星|すいせい|', 4),
    new SctCod_It('|金星|きんせい|', 4),
    new SctCod_It('|地球|ちきゅう|', 3),
    new SctCod_It('|火星|かせい|', 3),
    new SctCod_It('|木星|もくせい|', 4),
    new SctCod_It('|土星|どせい|', 3),
    new SctCod_It('|天王星|てんのうせい|', 6),
    new SctCod_It('|海王星|かいおうせい|', 6),
    new SctCod_It('|冥王星|めいおうせい|', 6),
    new SctCod_It('|彗星|すいせい|', 6)
];
const cods_sky = [
    new SctCod_It('|空|そら|', 2, 'sky.jpg'),
    new SctCod_It('|天|てん|', 2),
    new SctCod_It('|満天|まんてん|', 4),
    new SctCod_It('|虹|にじ|', 2),
    new SctCod_It('|青空|あおぞら|', 4),
    new SctCod_It('|夜空|よぞら|', 3),
    new SctCod_It('|星空|ほしぞら|', 4)
];
const cods_weather = [
    new SctCod_It('|空模様|そらもよう|', 5, 'weather.jpg'),
    new SctCod_It('|晴|は|れ', 2),
    new SctCod_It('|晴天|せいてん|', 4),
    new SctCod_It('|日本晴|にほんば|れ', 5),
    new SctCod_It('|雨|あめ|', 2),
    new SctCod_It('|小雨|こさめ|', 3),
    new SctCod_It('|春雨|はるさめ|', 4),
    new SctCod_It('|梅雨|つゆ|', 2),
    new SctCod_It('|雷雨|らいう|', 3),
    new SctCod_It('|豪雨|ごうう|', 3),
    new SctCod_It('|曇|くも|り', 3),
    new SctCod_It('|雪|ゆき|', 2),
    new SctCod_It('|豪雪|ごうせつ|', 4),
    new SctCod_It('|雷|かみなり|', 4),
    new SctCod_It('|霧|きり|', 2),
    new SctCod_It('|靄|もや|', 2),
    new SctCod_It('|風|かぜ|', 2),
    new SctCod_It('|嵐|あらし|', 3),
    new SctCod_It('|砂嵐|すなあらし|', 5),
    new SctCod_It('|砂塵|さじん|', 3),
    new SctCod_It('|竜巻|たつまき|', 4)
    // ,
    // new SctCod_It('|台風|たいふう|',4)
];
const cods_bird = [
    new SctCod_It('|鳥|とり|', 2, 'sky.jpg'),
    new SctCod_It('|鶏|にわとり|', 4),
    new SctCod_It('|烏|からす|', 3),
    new SctCod_It('|雀|すずめ|', 3),
    new SctCod_It('|鳩|はと|', 2),
    new SctCod_It('|鷹|たか|', 2),
    new SctCod_It('|鷲|わし|', 2),
    new SctCod_It('|鳶|とんび|', 3),
    new SctCod_It('|梟|ふくろう|', 4),
    new SctCod_It('|鴎|かもめ|', 3),
    new SctCod_It('|辺銀|ぺんぎん|', 4)
];
const cods_bird_spring = [
    new SctCod_It('|春|はる|の|鳥|とり|', 5, 'bird_spring.jpg'),
    new SctCod_It('|鶯|うぐいす|', 4),
    new SctCod_It('|雉|きじ|', 2),
    new SctCod_It('|雲雀|ひばり|', 3),
    new SctCod_It('|燕|つばめ|', 3),
    new SctCod_It('|岩燕|いわつばめ|', 5)
];
const cods_bird_summer = [
    new SctCod_It('|夏|なつ|の|鳥|とり|', 5, 'bird_summer.jpg'),
    new SctCod_It('|日雀|ひがら|', 3),
    new SctCod_It('|眼白|めじろ|', 3),
    new SctCod_It('|五十雀|ごじゅうから|', 5),
    new SctCod_It('|駒鳥|こまどり|', 4),
    new SctCod_It('|山雀|やまがら|', 4),
    new SctCod_It('|四十雀|しじゅうから|', 5),
    new SctCod_It('|翡翠|かわせみ|', 4),
    new SctCod_It('|杜鵑草|ほととぎす|', 5),
    new SctCod_It('|雷鳥|らいちょう|', 4),
    new SctCod_It('|水鶏|くいな|', 3),
    new SctCod_It('|海猫|うみねこ|', 4),
    new SctCod_It('|白鷺|しらさぎ|', 4),
    new SctCod_It('|青鷺|あおさぎ|', 4)
];
const cods_bird_autumn = [
    new SctCod_It('|秋|あき|の|鳥|とり|', 5, 'bird_autumn.jpg'),
    new SctCod_It('|渡|わた|り|鳥|どり|', 5),
    new SctCod_It('|百舌鳥|もず|', 2),
    new SctCod_It('|鶫|つぐみ|', 3),
    new SctCod_It('|鵯|ひよどり|', 4),
    new SctCod_It('|椋鳥|むくどり|', 4),
    new SctCod_It('|鶉|うずら|', 3),
    new SctCod_It('|啄木鳥|きつつき|', 4),
    new SctCod_It('|雁|かり|', 2)
];
const cods_bird_winter = [
    new SctCod_It('|冬|ふゆ|の|鳥|とり|', 5, 'bird_winter.jpg'),
    new SctCod_It('|水鳥|みずとり|', 4),
    new SctCod_It('|寒雁|かんがん|', 4),
    new SctCod_It('|鴨|かも|', 2),
    new SctCod_It('|鴛鴦|おしどり|', 4),
    new SctCod_It('|鶴|つる|', 2),
    new SctCod_It('|白鳥|はくちょう|', 4)
];
const cods_animal = [
    new SctCod_It('|獣|けもの|', 3, 'animal.jpg'),
    new SctCod_It('|鼠|ねずみ|', 3),
    new SctCod_It('|牛|うし|', 2),
    new SctCod_It('|虎|とら|', 2),
    new SctCod_It('|兎|うさぎ|', 3),
    new SctCod_It('|龍|りゅう|', 2),
    new SctCod_It('|竜|りゅう|', 2),
    new SctCod_It('|蛇|へび|', 2),
    new SctCod_It('|馬|うま|', 2),
    new SctCod_It('|羊|ひつじ|', 3),
    new SctCod_It('|猿|さる|', 2),
    new SctCod_It('|犬|いぬ|', 2),
    new SctCod_It('|猪|いのしし|', 4),
    new SctCod_It('|鼬|いたち|', 3),
    new SctCod_It('|熊|くま|', 2),
    new SctCod_It('|猫|ねこ|', 2),
    new SctCod_It('|狸|たぬき|', 3),
    new SctCod_It('|狐|きつね|', 3),
    new SctCod_It('|鹿|しか|', 2)
];
const cods_nature = [
    new SctCod_It('|野山|のやま|', 3, 'nature.jpg'),
    new SctCod_It('|山|やま|', 2),
    new SctCod_It('|谷|たに|', 2),
    new SctCod_It('|崖|がけ|', 2),
    new SctCod_It('|川|かわ|', 2),
    new SctCod_It('|河|かわ|', 2),
    new SctCod_It('|滝|たき|', 2),
    new SctCod_It('|森|もり|', 2),
    new SctCod_It('|林|はやし|', 3),
    // new SctCod_It('|野|の|',1)
    // ,
    new SctCod_It('|野原|のはら|', 3),
    new SctCod_It('|池|いけ|', 2),
    new SctCod_It('|古池|ふるいけ|', 4),
    new SctCod_It('|湖|みずうみ|', 4),
    new SctCod_It('|海|うみ|', 2),
    new SctCod_It('|木|こ|の|葉|は|', 3),
    new SctCod_It('|木|き|の|実|み|', 3),
    new SctCod_It('|切|き|り|株|かぶ|', 4),
    new SctCod_It('|松|まつ|', 2),
    new SctCod_It('|杉|すぎ|', 2),
    new SctCod_It('|竹|たけ|', 2),
    new SctCod_It('|柳|やなぎ|', 3)
];
const cods_home = [
    new SctCod_It('|家|いえ|', 2, 'home.jpg'),
    new SctCod_It('|扉|とびら|', 3),
    new SctCod_It('|壁|かべ|', 2),
    new SctCod_It('|柱|はしら|', 3),
    new SctCod_It('|窓|まど|', 2),
    new SctCod_It('|天井|てんじょう|', 4),
    new SctCod_It('|屋根|やね|', 2),
    new SctCod_It('|瓦|かわら|', 3)
    // ,
    // new SctCod_It('|屏|へい|',2)
    ,
    new SctCod_It('|門|もん|', 2),
    new SctCod_It('|台所|だいどころ|', 5),
    new SctCod_It('|風呂|ふろ|', 2),
    new SctCod_It('|湯船|ゆぶね|', 3),
    new SctCod_It('|寝床|ねどこ|', 3),
    new SctCod_It('|井戸|いど|', 2)
];
const cods_move = [
    new SctCod_Mv('|動|うご|く', 3, 'active.jpg'),
    new SctCod_Mv('|進|すす|む', 3)
];
const cods_move_run = [
    new SctCod_Mv('|走|はし|る', 3, 'run.jpg'),
    new SctCod_Mv('|駆|か|ける', 3),
    new SctCod_Mv('|駆|か|け|抜|ぬ|ける', 5),
    new SctCod_Mv('|突|つ|っ|走|ぱし|る', 5),
    new SctCod_Mv('|風|かぜ|を|切|き|る', 5)
];
const cods_move_fly = [
    new SctCod_Mv('|飛|と|ぶ', 2, 'fly.jpg'),
    new SctCod_Mv('|飛|と|び|上|あ|がる', 5),
    new SctCod_Mv('|飛|と|び|越|こ|える', 5),
    new SctCod_Mv('|飛|と|び|込|こ|む', 4)
];
const cods_move_walk = [
    new SctCod_Mv('|歩|ある|く', 3, 'walk.jpg'),
    new SctCod_Mv('|歩|あゆ|む', 3)
];
const cods_move_stop = [
    new SctCod_Mv('|止|と|まる', 3, 'stop.jpg'),
    new SctCod_Mv('|留|とど|まる', 4),
    new SctCod_Mv('|立|た|ち|止|ど|まる', 5),
    new SctCod_Mv('|佇|たたず|む', 4),
    new SctCod_Mv('|終|お|わる', 3)
];
const cods_move_open = [
    new SctCod_Mv('|開|ひら|く', 3, 'open.jpg'),
    new SctCod_Mv('|開|あ|ける', 3),
    new SctCod_Mv('|開|ひら|ける', 4),
    new SctCod_Mv('|広|ひろ|がる', 4),
    new SctCod_Mv('|広|ひろ|げる', 4)
];
const cods_move_life = [
    new SctCod_Mv('|生|い|きる', 3, 'life.jpg'),
    new SctCod_Mv('|咲|さ|く', 2),
    new SctCod_Mv('|活|い|きる', 3),
    new SctCod_Mv('|実|みの|る', 3),
    new SctCod_Mv('|産|う|まれる', 4),
    new SctCod_Mv('|始|はじ|まる', 4)
];
const cods_move_death = [
    new SctCod_Mv('|死|し|ぬ', 2, 'death.jpg'),
    new SctCod_Mv('|倒|たお|れる', 4),
    new SctCod_Mv('|枯|か|れる', 3),
    new SctCod_Mv('|散|ち|る', 2),
    new SctCod_Mv('|朽|く|ち|果|は|てる', 5),
    new SctCod_Mv('|尽|つ|きる', 3),
    new SctCod_Mv('|終|お|える', 3),
    new SctCod_Mv('|失|うしな|う', 4)
];
const cods_move_light = [
    new SctCod_Mv('|光|ひか|る', 3, 'light.jpg'),
    new SctCod_Mv('|輝|かがや|く', 4),
    new SctCod_Mv('|目映|まばゆ|い', 4),
    new SctCod_Mv('|眩|まぶ|しい', 4),
    new SctCod_Mv('|光|ひか|り|輝|かがや|く', 7),
    new SctCod_Mv('|照|て|らす', 3)
];
const cods_move_dark = [
    new SctCod_Mv('|陰|かげ|る', 3, 'dark.jpg'),
    new SctCod_Mv('|暗|くら|い', 3),
    new SctCod_Mv('|暗|くら|く', 3),
    new SctCod_Mv('|影射|かげさ|す', 4)
];
const cods_adject_color = [
    // new SctCod_Mv('|色|いろ|',2,'color.png')
    // ,
    new SctCod_Mv('|赤|あか|い', 3),
    new SctCod_Mv('|青|あお|い', 3),
    new SctCod_Mv('|緑|みどり|の', 4),
    new SctCod_Mv('|黄色|きいろ|い', 4),
    new SctCod_Mv('|白|しろ|い', 3),
    new SctCod_Mv('|黒|くろ|い', 3),
    new SctCod_Mv('|淡|あわ|い', 3),
    new SctCod_Mv('|薄|うす|い', 3)
    // ,
    // new SctCod_Mv('|濃|こ|い',2)
];
const cods_item_color = [
    new SctCod_It('|赤|あか|', 2),
    new SctCod_It('|青|あお|', 2),
    new SctCod_It('|緑|みどり|', 3),
    new SctCod_It('|黄色|きいろ|', 3),
    new SctCod_It('|白|しろ|', 2),
    new SctCod_It('|黒|くろ|', 2),
    new SctCod_It('|紫|むらさき|', 4),
    new SctCod_It('|赤|あか|く', 3),
    new SctCod_It('|青|あお|く', 3),
    new SctCod_It('|緑|みどり|に', 4),
    new SctCod_It('|黄色|きいろ|く', 4),
    new SctCod_It('|白|しろ|く', 3),
    new SctCod_It('|黒|くろ|く', 3),
    new SctCod_It('|淡|あわ|く', 3),
    new SctCod_It('|薄|うす|く', 3)
    // ,
    // new SctCod_It('|濃|こ|い',2)
];
const cods_adject_beauty = [
    new SctCod_Mv('|美|うつく|しい', 5, 'beauty.png'),
    new SctCod_Mv('|美|うつく|しき', 5),
    new SctCod_Mv('|美々|びび|しい', 4),
    new SctCod_Mv('|神々|こうごう|しい', 6),
    new SctCod_Mv('|愛|あい|らしい', 5),
    new SctCod_Mv('|愛|あい|らしき', 5),
    new SctCod_Mv('|可憐|かれん|な', 4),
    new SctCod_Mv('|愛|あい|くるしい', 6),
    new SctCod_Mv('|愛|いと|おしい', 5),
    new SctCod_Mv('|綺麗|きれい|な', 4)
    // ,
    // new SctCod_Mv('|醜|みにく|い',4)
    // ,
    // new SctCod_Mv('|見苦|みぐる|しい',5)
    // ,
    // new SctCod_Mv('|不味|まず|い',3)
    // ,
    // new SctCod_Mv('|汚|きたな|い',4)
    // ,
    // new SctCod_Mv('|汚|きたな|い',4)
    // ,
    // new SctCod_Mv('|卑|いや|しい',4)
];
const cods_body = [
    new SctCod_It('|体|からだ|', 3, 'body.jpg'),
    new SctCod_It('|肉体|にくたい|', 4),
    new SctCod_It('|頭|あたま|', 3),
    new SctCod_It('|眼|まなこ|', 3),
    new SctCod_It('|耳|みみ|', 2),
    new SctCod_It('|鼻|はな|', 2),
    new SctCod_It('|口|くち|', 2),
    new SctCod_It('|首|くび|', 2),
    new SctCod_It('|肩|かた|', 2),
    new SctCod_It('|腕|うで|', 2),
    new SctCod_It('|手足|てあし|', 3),
    new SctCod_It('|足腰|あしこし|', 4),
    new SctCod_It('|指|ゆび|', 2),
    new SctCod_It('|拳|こぶし|', 3),
    new SctCod_It('|胸|むね|', 2),
    new SctCod_It('|腰|こし|', 2),
    new SctCod_It('|尻|しり|', 2),
    new SctCod_It('|足|あし|', 2)
];
const cods_move_which = [
    new SctCod_Mv('この', 2),
    new SctCod_Mv('その', 2),
    new SctCod_Mv('あの', 2),
    new SctCod_Mv('どの', 2)
];
const cods_what = [
    new SctCod_It('これ', 2),
    new SctCod_It('それ', 2),
    new SctCod_It('あれ', 2),
    new SctCod_It('どれ', 2)
];
const cods_where = [
    new SctCod_It('ここ', 2),
    new SctCod_It('そこ', 2),
    new SctCod_It('あそこ', 3),
    new SctCod_It('どこ', 2)
];
const cods_when = [
    new SctCod_It('|今|いま|', 2),
    new SctCod_It('|後|あと|で', 3),
    new SctCod_It('|後|のち|に', 3),
    new SctCod_It('|今日|きょう|', 2),
    new SctCod_It('|明日|あす|', 2),
    new SctCod_It('|明日|あした|', 3),
    new SctCod_It('|明後日|あさって|', 4),
    new SctCod_It('|明明後日|しあさって|', 5),
    new SctCod_It('|昨日|きのう|', 3),
    new SctCod_It('|一昨日|おととい|', 4),
    new SctCod_It('|一昨昨日|さきおととい|', 6),
    new SctCod_It('|何時|いつ|', 2)
];
const cods_conect = [
    new SctCod('は', 1),
    new SctCod('で', 1),
    new SctCod('に', 1),
    new SctCod('を', 1),
    new SctCod('と', 1),
    new SctCod('や', 1),
    new SctCod('も', 1)
];
