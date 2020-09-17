"use strict";
function set_news() {
    set_index_header_menu(0);
    scrollTo(0, 0);
    let html = "";
    html += "<div id='main_title'>";
    html += "<h2>";
    html += "NEWS";
    html += "<small>";
    html += " N0.03";
    html += "</small>";
    html += "</h2>";
    html += "</div>";
    html += "<br>";
    for (let i = 0; i < 20; i++) {
        html += "<p>[" + i.toString() + "]</p>";
        html += "<div id='box'>";
        html += "<br>";
        html += "<h3>日本沈没</h3>";
        html += "<br>";
        html += "<figure id='fig_left'>";
        // html += "<img src='./img/place/Japan.jpg' width='300px' alt='NEWS'>";
        html += "<img src='./img/place/Japan.jpg' alt='NEWS'>";
        html += "</figure>";
        html += "<p>　";
        for (let j = 0; j < 100; j++) {
            html += "日本が沈没しました。";
        }
        html += "</p>";
        html += "</div>";
    }
    set_html("index_main", html);
}
