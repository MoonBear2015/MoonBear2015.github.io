"use strict";
const set_news = () => {
    set_index_header_menu(0);
    scrollTo(0, 0);
    let html = "";
    html += "<div id='main_title'>";
    html += "<h2>";
    html += "NEWS";
    html += "<small>";
    html += " N0.16";
    html += "</small>";
    html += "</h2>";
    html += "</div>";
    html += "<br>";
    let dic = new DictionaryBase();
    dic_country.forEach(wrd => {
        dic.AddWrd(wrd);
    });
    html += cr_br(dic.toString());
    html += "<br>";
    html += "---------------<br>";
    let tagTxt = "a,b,c";
    let tagkeys = TagTxt_TagKeys(tagTxt);
    tagkeys.forEach(key => {
        html += ":= " + key + "<br>";
    });
    html += "<br>";
    html += "---------------<br>";
    let tag = "@TAG@";
    html += "Tag = " + tag + "<br>";
    html += "isTag = " + is_Tag(tag) + "<br>";
    html += "TagStr = " + to_TagStr(tag) + "<br>";
    html += "isSTagStr = " + is_STagStr(tag) + "<br>";
    html += "to_TagSel:" + to_TagSel(tag) + "<br>";
    html += "to_TagKey:" + to_TagKey(tag) + "<br>";
    html += "<br>";
    html += "---------------<br>";
    let lary;
    lary = { "A": new TxtSt("1"), "B": new TxtSt("2"), "C": new TxtSt("3") };
    for (let t in lary) {
        html += ">> " + t + ":" + lary[t].txt + "<br>";
    }
    html += "<br>";
    html += "---------------<br>";
    let ary = new ItmDictionarySt("@COUNTRY@", dic_country);
    html += cr_br(ary.toString());
    html += "<br>";
    dic_country.forEach(wrd => {
        html += "++> " + wrd.toString() + "//" + wrd.isTagCheck("ASIA") + "<br>";
    });
    html += "---------------<br>";
    let txtA = new TxtSt("111");
    let txtB = new TxtSt("112");
    // html += txtA.toString() + "<br>";
    // html += txtB.toString() + "<br>";
    // html += txtA.equal(new WrdSt("111","aa"));
    html += "<br>";
    html += "W::W =" + new WrdSt("aaa", "aa").equal(new WrdSt("aaa", "aa"));
    html += "<br>";
    html += "T::W =" + new TxtSt("aaa").equal(new WrdSt("aaa", "aa"));
    html += "<br>";
    html += "W::T =" + new WrdSt("aaa", "aa").equal(new TxtSt("aaa"));
    html += "<br>";
    html += "---------------<br>";
    for (let i = 0; i < 20; i++) {
        html += "<p>[" + i.toString() + "]</p>";
        html += "<div id='box'>";
        html += "<br>";
        html += "<h3>@country@沈没</h3>";
        html += "<br>";
        html += "<figure id='fig_left'>";
        html += "<img src='./img/place/Japan.jpg' alt='NEWS'>";
        html += "</figure>";
        html += "<p>　";
        for (let j = 0; j < 100; j++) {
            html += "@country@が沈没しました。";
        }
        html += "</p>";
        html += "</div>";
    }
    html = replace_string(html, "@country@", dic_place);
    set_html("index_main", html);
};
const replace_string = (inStr, inKey, inDic) => {
    let result = inStr;
    let cnt = 0;
    while (true) {
        if (result.indexOf(inKey) == -1)
            break;
        let after = inDic[RanMax(inDic.length)];
        result = result.replace(inKey, after);
        cnt++;
        if (cnt > 1000)
            break;
    }
    return result;
};
const dic_country = [
    new WrdSt("日本", "COUNTRY,ASIA"),
    new WrdSt("中国", "COUNTRY,ASIA"),
    new WrdSt("アメリカ", "COUNTRY")
];
const dic_place = [
    "日本",
    "アメリカ"
];
