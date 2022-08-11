"use strict";
function set_book() {
    set_header_menu(3);
    scrollTo(0, 0);
    let html = '';
    html += '<div id="main_title">';
    html += '<h1>';
    html += 'Book';
    html += '<small>';
    html += ' B00.10';
    html += '</small>';
    html += '</h1>';
    html += '</div>';
    for (let i = 0; i < 30; i++) {
        html += '<p>[' + i.toString() + ']</p>' + make_book();
    }
    let elem = document.getElementById('site_main');
    if (elem == null) {
        alert('not found "site_main"');
        return;
    }
    elem.innerHTML = ruby_change(html);
}
function make_book() {
    let html = '';
    html += '<div id="book_box" ';
    html += 'style="';
    html += 'margin:     5px; ';
    html += 'padding:    10px; ';
    html += 'border:     0.5px solid #606060;';
    html += 'border-radius:  10px;';
    html += '">';
    html += make_b();
    //---- this Q&A END
    html += '</div>';
    let maker = new news_docs_maker();
    html = maker.gene_docs(html);
    return html;
}
function make_b() {
    let html = '';
    html += '<div id="book_writerpicture">';
    html += '著者：<br>';
    html += '@L_BOOKWRITER@';
    html += '</div>';
    html += '<div id="book_face" ';
    html += 'style="';
    html += 'background: ';
    html += 'linear-gradient(0deg,rgba(0,0,0,0.6),rgba(0,0,0,0.6)),';
    html += 'url(./pics/@PIC_WHAT@);';
    html += 'background-position: left top;';
    html += 'background-size:   cover;';
    html += 'background-repeat: no-repeat;';
    html += 'border:     2px solid #ffffff;';
    html += '">';
    html += '<br>';
    html += '<div id="@BOOKFACE@">';
    html += '<p id="book_title">';
    html += '@L_BOOK@';
    html += '</p>';
    html += '<br><br>';
    html += '<p id="book_writerinfo">';
    html += '@L_BOOKWRITER@';
    html += '</p>';
    html += '<br>';
    html += '</div>';
    html += '</div>';
    html += '<div id="book_comment">';
    // html += '<p id="qa_doc">';
    for (let i = 0; i < rnd_minmax(2, 4); i++) {
        html += '@L_BOOK@<br>';
        html += '@L_BOOKWRITER@<br>';
    }
    // html += '</p>';
    html += '</div>';
    return html;
}
