const set_news = () =>
{
    set_index_header_menu(0);

    scrollTo(0,0);

    let html : string = "";
    html += "<div id='main_title'>"
    html += "<h2>";
    html += "NEWS";
    html += "<small>";
    html += " N0.09";
    html += "</small>";
    html += "</h2>";
    html += "</div>";
    html += "<br>";
    
    let ary = new ItmArraySt<Txt>(dic_country);
    html += cr_br(ary.toString());
    html += "<br>";
    
    html += "---------------<br>";
    let txtA = new TxtSt("111");
    let txtB = new TxtSt("112");
    // html += txtA.toString() + "<br>";
    // html += txtB.toString() + "<br>";
    // html += txtA.equal(new WrdSt("111","aa"));
    html += "<br>";
    html += "W::W =" + new WrdSt("aaa","aa").equal(new WrdSt("aaa","aa"));
    html += "<br>";
    html += "T::W =" + new TxtSt("aaa").equal(new WrdSt("aaa","aa"));
    html += "<br>";
    html += "W::T =" + new WrdSt("aaa","aa").equal(new TxtSt("aaa"));
    html += "<br>";
    html += "---------------<br>";



    for(let i = 0; i < 20; i++){
        html += "<p>[" + i.toString() + "]</p>";

        html += "<div id='box'>";
        html += "<br>";
        html += "<h3>@country@沈没</h3>";
        html += "<br>";
        html += "<figure id='fig_left'>";
        html += "<img src='./img/place/Japan.jpg' alt='NEWS'>";
        html += "</figure>";
        html += "<p>　";
        for(let j = 0;j  < 100; j++) {
            html += "@country@が沈没しました。";
        }
        html += "</p>";
        html += "</div>";
    }
    html = replace_string(html,"@country@",dic_place);
    set_html("index_main",html);

}

const replace_string = (inStr : string, inKey : string, inDic : string[])
 : string => 
{
    let result : string = inStr;
    let cnt : number = 0;
    while(true) {
        if (result.indexOf(inKey) == -1) break;
        let after = inDic[RanMax(inDic.length)];
        result = result.replace(inKey,after);
        cnt++;
        if (cnt > 1000) break;
    }
    return result;
}

const dic_country = [
    new TxtSt("日本")
    ,
    new TxtSt("アメリカ")
]

const dic_place = [
    "日本"
    ,
    "アメリカ"
]

