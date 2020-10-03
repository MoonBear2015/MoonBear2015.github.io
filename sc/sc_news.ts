const set_news = () =>
{
    set_index_header_menu(0);

    scrollTo(0,0);

    let html : string = "";
    html += "<div id='main_title'>"
    html += "<h2>";
    html += "NEWS";
    html += "<small>";
    html += " N0.25";
    html += "</small>";
    html += "</h2>";
    html += "</div>";
    html += "<br>";

    let base = new DictionaryBase();
    base.AddWrds(dic_news_title);
    base.AddWrds(dic_country);
    base.AddWrds(dic_city);
    base.AddWrds(dic_do);

    for(let i = 0; i < 20; i++){
        html += "<p>[" + i.toString() + "]</p>";

        html += "<div id='box'>";
        html += "<br>";
        html += "<h3>@NEWSTITLE@</h3>";
        html += "<br>";
        html += "<figure id='fig_left'>";
        html += "<img src='@P_WHAT@' alt='NEWS'>";
        html += "</figure>";
        html += "<p>　";
        for(let j = 0;j  < 30; j++) {
            html += "@COUNTRY@が@DO@しました。";
        }
        html += "</p>";

        html += "<figure id='fig_right'>";
        html += "<img src='@P_DO@' alt='NEWS'>";
        html += "</figure>";
        html += "<p>　";
        for(let j = 0;j  < 30; j++) {
            html += "@COUNTRY@が@DO@しました。";
        }
        html += "</p>";


        html += "</div>";
        html = base.tagReplace(html);
    }


    set_html("index_main",html);

}


