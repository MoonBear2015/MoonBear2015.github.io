function set_news()
{
    set_index_header_menu(0);

    scrollTo(0,0);

    let html : string = "";
    html += "<div id='main_title'>"
    html += "<h2>";
    html += "NEWS";
    html += "<small>";
    html += " N0.02";
    html += "</small>";
    html += "</h2>";
    html += "</div>";
    html += "<br>";

    for(let i = 0; i < 20; i++){
        html += "<p>[" + i.toString() + "]</p>";
        html += "<br>";
        html += "<h3>日本沈没</h3>";

    }

    set_html("index_main",html);

}


