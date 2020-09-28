const set_news = () =>
{
    set_index_header_menu(0);

    scrollTo(0,0);

    let html : string = "";
    html += "<div id='main_title'>"
    html += "<h2>";
    html += "NEWS";
    html += "<small>";
    html += " N0.20";
    html += "</small>";
    html += "</h2>";
    html += "</div>";
    html += "<br>";

    html += "---------------<br>";

    let tag01 = "@S_TAG@";
    html += "Tag = " + tag01 + "<br>";
    let tag = new Tag(tag01);
    html += "key = " + tag.key + "<br>";
    html += "sel = " + tag.sel + "<br>";
    html += "str = " + tag.str + "<br>";
    html += "tag = " + tag.tag + "<br>";
    html += "<br>";
    
    html += "---------------<br>";
    
    let dictionary = new ItmDictionarySt<Wrd>("ASIA",dic_country);
    alert(dictionary.tagKey);
    let selector = new ItmSelectorSt<Wrd>(dictionary,"R");
    for(let i = 0; i < 20; i++) {
        html += i.toString() + " >> " + selector.next() + "<br>";
    }
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
    new WrdSt("日本","COUNTRY,ASIA")
    ,
    new WrdSt("中国","COUNTRY,ASIA")
    ,
    new WrdSt("アメリカ","COUNTRY")
]

const dic_place = [
    "日本"
    ,
    "アメリカ"
]

