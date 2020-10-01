const set_news = () =>
{
    set_index_header_menu(0);

    scrollTo(0,0);

    let html : string = "";
    html += "<div id='main_title'>"
    html += "<h2>";
    html += "NEWS";
    html += "<small>";
    html += " N0.24";
    html += "</small>";
    html += "</h2>";
    html += "</div>";
    html += "<br>";
    

    html += "<br>";
    html += "---------------<br>";
    let base = new DictionaryBase();
    base.AddWrds(dic_country);
    base.AddWrds(dic_do);
    html += cr_br(base.toString());


    html += "<br>";
    html += "---------------<br>";
    for (let key in base.selectors) {
        html += "****** " + key + "<br>";
        for(let i = 0; i < 10; i++) {  
            let wrd = base.selectors[key].next();
            if (wrd) {
                html += "***> " + wrd.toString() + "<br>";
            }
        }  
    }


    html += "<br>";
    html += "---------------<br>";


    for(let i = 0; i < 20; i++){
        html += "<p>[" + i.toString() + "]</p>";

        html += "<div id='box'>";
        html += "<br>";
        html += "<h3>@COUNTRY@@DO@</h3>";
        html += "<br>";
        html += "<figure id='fig_left'>";
        html += "<img src='./img/place/Japan.jpg' alt='NEWS'>";
        html += "</figure>";
        html += "<p>　";
        for(let j = 0;j  < 100; j++) {
            html += "@COUNTRY@が@DO@しました。";
        }
        html += "</p>";
        html += "</div>";
    }

    html = base.tagReplace(html);

    set_html("index_main",html);

}

const dic_country = [
    new WrdSt("日本","COUNTRY,ASIA")
    ,
    new WrdSt("中国","COUNTRY,ASIA")
    ,
    new WrdSt("アメリカ","COUNTRY")
]

const dic_do = [
    new WrdSt("破滅","DO")
    ,
    new WrdSt("壊滅","DO")
    ,
    new WrdSt("自滅","DO")
    ,
    new WrdSt("絶滅","DO")
    ,
    new WrdSt("死滅","DO")
    ,
    new WrdSt("全滅","DO")

]

const dic_place = [
    "日本"
    ,
    "アメリカ"
]

