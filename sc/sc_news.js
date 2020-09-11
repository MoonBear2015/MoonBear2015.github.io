"use strict";
function set_news() {
    set_index_header_menu(0);
    scrollTo(0, 0);
    let html = "";
    html += "<div id='main_title'>";
    html += "<h2>";
    html += "NEWS";
    html += "<small>";
    html += " N0.01";
    html += "</small>";
    html += "</h2>";
    html += "</div>";
    for (let i = 0; i < 20; i++) {
        html += "<p>[" + i.toString() + "]</p>";
    }
    set_html("index_main", html);
}
