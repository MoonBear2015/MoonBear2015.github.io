"use strict";
const cods_spring = [
    new SctCod('|春|はる|', 2, 'spring.jpg'),
    new SctCod('|花|はな|', 2),
    new SctCod('|蝶|ちょう|', 2),
    new SctCod('|土筆|つくし|', 3),
    new SctCod('|蛙|かえる|', 3)
];
const cods_flower_spring = [
    new SctCod('|春|はる|の|花|はな|', 5, 'flower_spring.jpg'),
    new SctCod('|梅|うめ|', 2),
    new SctCod('|桜|さくら|', 3),
    new SctCod('|椿|つばき|', 3),
    new SctCod('|菜|な|の|花|はな|', 4),
    new SctCod('チューリップ', 5),
    new SctCod('|蒲公英|たんぽぽ|', 4),
    new SctCod('ハナミズキ', 5),
    new SctCod('|撫子|なでしこ|', 3),
    new SctCod('|牡丹|ぼたん|', 3)
];
const cods_summer = [
    new SctCod('|夏|なつ|', 2, 'summer.jpg'),
    new SctCod('|虹|にじ|', 2),
    new SctCod('|浴衣|ゆかた|', 3),
    new SctCod('|祭|まつり|', 3),
    new SctCod('|花火|はなび|', 3),
    new SctCod('|浜辺|はまべ|', 3),
    new SctCod('|風鈴|ふうりん|', 4)
];
const cods_flower_summer = [
    new SctCod('|夏|なつ|の|花|はな|', 5, 'flower_summer.jpg'),
    new SctCod('|紫陽花|あじさい|', 4),
    new SctCod('|梔子|くちなし|', 3),
    new SctCod('ハイビスカス', 6),
    new SctCod('ブーゲンビリア', 7),
    new SctCod('|向日葵|ひまわり|', 4),
    new SctCod('|花菖蒲|はなしょうぶ|', 5),
    new SctCod('|水芭蕉|みずばしょう|', 5),
    new SctCod('|朝顔|あさがお|', 4),
    new SctCod('ダリア', 3),
    new SctCod('|桔梗|ききょう|', 3)
];
const cods_autumn = [
    new SctCod('|秋|あき|', 2, 'autumn.jpg'),
    new SctCod('|月|つき|', 2),
    new SctCod('|紅葉|もみじ|', 3),
    new SctCod('|栗|くり|', 2),
    new SctCod('|柿|かき|', 2),
    new SctCod('|芋|いも|', 2)
];
const cods_flower_autumn = [
    new SctCod('|秋|あき|の|花|はな|', 5, 'flower_autumn.jpg'),
    new SctCod('|萩|はぎ|', 2),
    new SctCod('|尾花|おばな|', 3),
    new SctCod('|葛|くず|', 2),
    new SctCod('|撫子|なでしこ|', 4),
    new SctCod('|桔梗|ききょう|', 3),
    new SctCod('|竜胆|りんどう|', 4),
    new SctCod('|秋桜|こすもす|', 4),
    new SctCod('|彼岸花|ひがんばな|', 5),
    new SctCod('|金木犀|きんもくせい|', 5),
    new SctCod('サフラン', 4),
    new SctCod('|葉牡丹|はぼたん|', 5),
    new SctCod('|杜鵑草|ほととぎす|', 5),
    new SctCod('サルビア', 4),
    new SctCod('パンジー', 4)
];
const cods_winter = [
    new SctCod('|冬|ふゆ|', 2, 'winter.jpg'),
    new SctCod('|雪|ゆき|', 2),
    new SctCod('|氷|こおり|', 3),
    new SctCod('|霜|しも|', 2)
];
const cods_flower_winter = [
    new SctCod('|冬|ふゆ|の|花|はな|', 5, 'flower_winter.jpg'),
    new SctCod('スノードロップ', 7),
    new SctCod('クリスマスローズ', 8),
    new SctCod('|水仙|すいせん|', 4),
    new SctCod('マーガレット', 6),
    new SctCod('|柊|ひいらぎ|', 4),
    new SctCod('|福寿草|ふくじゅそう|', 5),
    new SctCod('アネモネ', 4),
    new SctCod('|黄梅|おうばい|', 4),
    new SctCod('カトレア', 4),
    new SctCod('|山茶花|さざんか|', 4),
    new SctCod('シクラメン', 5)
];
const cods_flower = [
    new SctCod('|花|はな|', 5, 'flower.jpg'),
    new SctCod('|花見|はなみ|', 3),
    new SctCod('|花屋|はなや|', 3),
    new SctCod('|花束|はなたば|', 4),
    new SctCod('|花売|はなう|り|娘|むすめ|', 7)
];
const cods_moon = [
    new SctCod('|月|つき|', 2, 'moon.jpg'),
    new SctCod('|満月|まんげつ|', 4),
    new SctCod('|三日月|みかづき|', 4),
    new SctCod('|半月|はんげつ|', 4),
    new SctCod('|新月|しんげつ|', 4),
    new SctCod('|上弦|じょうげん|の|月|つき|', 7),
    new SctCod('|十六夜|いざよい|', 4),
    new SctCod('|下弦|かげん|の|月|つき|', 6),
    new SctCod('|月食|げっしょく|', 4)
];
const cods_sun = [
    new SctCod('|太陽|たいよう|', 4, 'sun.jpg'),
    new SctCod('|陽|ひ|', 1),
    new SctCod('|朝日|あさひ|', 3),
    new SctCod('|夕陽|ゆうひ|', 3),
    new SctCod('|夕焼|ゆうや|け', 4),
    new SctCod('|日食|にっしょく|', 4),
    new SctCod('|皆既日食|かいきにっしょく|', 7)
];
const cods_star = [
    new SctCod('|星|ほし|', 2, 'star.jpg'),
    new SctCod('|水星|すいせい|', 4),
    new SctCod('|金星|きんせい|', 4),
    new SctCod('|地球|ちきゅう|', 4),
    new SctCod('|火星|かせい|', 3),
    new SctCod('|木星|もくせい|', 4),
    new SctCod('|土星|どせい|', 3),
    new SctCod('|天王星|てんのうせい|', 6),
    new SctCod('|海王星|かいおうせい|', 6),
    new SctCod('|冥王星|めいおうせい|', 6),
    new SctCod('|彗星|すいせい|', 6)
];
const cods_sky = [
    new SctCod('|空|そら|', 2, 'sky.jpg'),
    new SctCod('|天|てん|', 2),
    new SctCod('|満天|まんてん|', 4)
];
const cods_weather = [
    new SctCod('|天気|てんき|', 2, 'weather.jpg'),
    new SctCod('|晴|は|れ', 2),
    new SctCod('|晴天|せいてん|', 2),
    new SctCod('|雨|あめ|', 2),
    new SctCod('|小雨|こさめ|', 2),
    new SctCod('|春雨|はるさめ|', 2),
    new SctCod('|梅雨|つゆ|', 2),
    new SctCod('|雷雨|らいう|', 3),
    new SctCod('|豪雨|ごうう|', 3),
    new SctCod('|曇|くも|り', 3),
    new SctCod('|雪|ゆき|', 2),
    new SctCod('|豪雪|ごうせつ|', 4),
    new SctCod('|雷|かみなり|', 4),
    new SctCod('|霧|きり|', 2),
    new SctCod('|靄|もや|', 2)
];
const cods_bird = [
    new SctCod('|鳥|とり|', 2, 'sky.jpg'),
    new SctCod('|烏|からす|', 3),
    new SctCod('|雀|すずめ|', 3),
    new SctCod('|鳩|はと|', 2),
    new SctCod('|鷹|たか|', 2),
    new SctCod('|鷲|わし|', 2),
    new SctCod('|鳶|とんび|', 3),
    new SctCod('|梟|ふくろう|', 4),
    new SctCod('|鴎|かもめ|', 3),
    new SctCod('|辺銀|ぺんぎん|', 4)
];
const cods_bird_spring = [
    new SctCod('|春|なつ|の|鳥|とり|', 5, 'bird_spring.jpg'),
    new SctCod('|鶯|うぐいす|', 4),
    new SctCod('|雉|きじ|', 2),
    new SctCod('|雲雀|ひばり|', 3),
    new SctCod('|燕|つばめ|', 3),
    new SctCod('|岩燕|いわつばめ|', 3)
];
const cods_bird_summer = [
    new SctCod('|夏|なつ|の|鳥|とり|', 5, 'bird_summer.jpg'),
    new SctCod('|日雀|ひがら|', 3),
    new SctCod('|眼白|めじろ|', 3),
    new SctCod('|五十雀|ごじゅうから|', 5),
    new SctCod('|駒鳥|こまどり|', 4),
    new SctCod('|山雀|やまがら|', 4),
    new SctCod('|四十雀|しじゅうから|', 5),
    new SctCod('|翡翠|かわせみ|', 4),
    new SctCod('|杜鵑草|ほととぎす|', 4),
    new SctCod('|雷鳥|らいちょう|', 4),
    new SctCod('|水鶏|くいな|', 3),
    new SctCod('|海猫|うみねこ|', 3),
    new SctCod('|白鷺|しらさぎ|', 3),
    new SctCod('|青鷺|あおさぎ|', 3)
];
const cods_bird_autumn = [
    new SctCod('|秋|あき|の|鳥|とり|', 5, 'bird_autumn.jpg'),
    new SctCod('|渡|わた|り|鳥|どり|', 5),
    new SctCod('|百舌鳥|もず|', 2),
    new SctCod('|鶫|つぐみ|', 3),
    new SctCod('|鵯|ひよどり|', 4),
    new SctCod('|椋鳥|むくどり|', 4),
    new SctCod('|鶉|うずら|', 3),
    new SctCod('|啄木鳥|きつつき|', 4),
    new SctCod('|雁|かり|', 4)
];
const cods_bird_winter = [
    new SctCod('|冬|ふゆ|の|鳥|とり|', 5, 'bird_winter.jpg'),
    new SctCod('|水鳥|みずとり|', 4),
    new SctCod('|寒雁|かんがん|', 4),
    new SctCod('|鴨|かも|', 2),
    new SctCod('|鴛鴦|おしどり|', 4),
    new SctCod('|鶴|つる|', 2),
    new SctCod('|白鳥|はくちょう|', 4)
];
