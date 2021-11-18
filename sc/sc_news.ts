const set_news = () =>
{
    set_index_header_menu(0);

    scrollTo(0,0);

    let html : string = "";
    html += "<div id='main_title'>"
    html += "<h2>";
    html += "NEWS";
    html += "<small>";
    html += " N0.30";
    html += "</small>";
    html += "</h2>";
    html += "</div>";
    html += "<br>";

    let base = new DictionaryBase();
    base.AddWrds(dic_news_title);
    base.AddWrds(dic_news_sent);
    base.AddWrds(dic_news_sent01);
    base.AddWrds(dic_news_sent02);
    base.AddWrds(dic_news_sent03);
    base.AddWrds(dic_country);
    base.AddWrds(dic_city);
    base.AddWrds(dic_do);
    base.AddWrds(dic_they);
    base.AddWrds(dic_volume);
    
    for(let i = 0; i < 20; i++){
        base.reset();

        html += "<p>[" + i.toString() + "]</p>";

        html += '<div id="box" ';
        html += 'style="';
        html += 'background: ';
        html += 'linear-gradient(0deg,rgba(20,20,20,0.4),rgba(0,0,0,0.8)),';
        html += 'url(@PL_DO@);';
        html += 'background-position: center center;';
        html += 'background-size: cover;';
        html += '">';
        html += "<br>";
        html += "<h3>@NEWSTITLE@</h3>";
        html += "<br>";
        html += "<figure id='fig_left'>";
        html += "<img src='@PL_WHAT@' alt='NEWS'>";
        html += "</figure>";
        html += "<p>　";
        for(let j = 0;j  < 30; j++) {
            html += "@SENT@";
        }
        html += "</p>";

        html += "<figure id='fig_right'>";
        html += "<img src='@PL_DO@' alt='NEWS'>";
        html += "</figure>";
        html += "<p>　";
        for(let j = 0;j  < 30; j++) {
            html += "@SENT@";
        }
        html += "</p>";


        html += "</div>";
        html = base.tagReplace(html);
    }


    set_html("index_main",html);

}


