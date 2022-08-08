"use strict";
function set_book() {
    set_header_menu(3);
    scrollTo(0, 0);
    let html = '';
    html += '<div id="main_title">';
    html += '<h1>';
    html += 'Q&A';
    html += '<small>';
    html += ' B00.00';
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
    html += '<div id="book_box" ';
    html += 'style="';
    html += 'margin:     5px; ';
    html += 'padding:    10px; ';
    html += 'border:     0.5px solid #606060;';
    html += 'border-radius:  10px;';
    html += 'background: ';
    html += 'url(./pics/@PIC_WHAT@);';
    html += 'background-position: left;';
    html += 'background-repeat: no-repeat;';
    html += 'background-size: 30%;';
    html += '">';
    html += '<br>';
    html += '<p id="book_title">';
    html += '@BOOK@';
    html += '</p>';
    html += '<p id="qa_doc">';
    html += '@L_WHAT@';
    for (let i = 0; i < rnd_minmax(2, 4); i++) {
        html += '@L_WHAT@';
    }
    html += '</p>';
    html += '</div>';
    return html;
}
