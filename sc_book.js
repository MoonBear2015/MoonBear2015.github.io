"use strict";
function set_book() {
    set_header_menu(3);
    scrollTo(0, 0);
    let html = '';
    html += '<div id="main_title">';
    html += '<h1>';
    html += 'Book';
    html += '<small>';
    html += ' B00.14';
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
    let maker = new book_docs_maker();
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
    html += '@B_INFO01@。';
    html += '@B_INFO02@。';
    // html += '<p id="qa_doc">';
    // for(let i = 0;i < rnd_minmax(2,4);i++)
    // {
    //     html += '「@COMMENT@」';
    // }
    // html += '</p>';
    html += '</div>';
    return html;
}
// 01:例文から
class selector_bookinfo01 extends SctItm_Selector {
    constructor() {
        super('@B_INFO01@');
        this.itms = [
            new SctItm('@COMMENT2@――'),
            new SctItm('「@COMMENT2@」――この@KEI@冒頭に世界が震撼した'),
            new SctItm('「@COMMENT2@」――この@KEI@冒頭に、@MANYPEOPLE@が泣いた'),
            new SctItm('「@COMMENT2@」――この@KEI@一文が、@L_WHAT@の全てを変えた'),
            new SctItm('「@COMMENT2@」――この@KEI@名調子が、あなたを@superitem@@L_WHAT@へと誘う'),
            new SctItm('「@COMMENT2@」――この@KEI@一言が、世界を震え上がらせた'),
            new SctItm('「@COMMENT2@」――この@KEI@一言が、あなたを変える'),
            new SctItm('「@COMMENT2@」――この@KEI@一文が、世界の命運を別ける'),
            new SctItm('「@COMMENT2@」――そう、正にこれが@L_BOOKWRITER@の世界だ')
        ];
    }
}
// 02:筆者紹介
class selector_bookinfo02 extends SctItm_Selector {
    constructor() {
        super('@B_INFO02@');
        this.itms = [
            new SctItm('@B_WRITER_DECO@、@L_BOOKWRITER@が放つ@superitem@一冊'),
            new SctItm('@B_WRITER_DECO@、@L_BOOKWRITER@が産んだ@superitem@作品'),
            new SctItm('@B_WRITER_DECO@、@L_BOOKWRITER@が書き綴る@superitem@傑作'),
            new SctItm('@B_WRITER_DECO@、@L_BOOKWRITER@の@superitem@代表作'),
            new SctItm('@B_WRITER_DECO@、@L_BOOKWRITER@の@superitem@出世作'),
            new SctItm('@B_WRITER_DECO@、@L_BOOKWRITER@の再スタートを記念する@superitem@傑作選'),
            new SctItm('完全復活、@B_WRITER_DECO@、@L_BOOKWRITER@の再スタートを記念する@superitem@傑作選'),
            new SctItm('@B_WRITER_DECO@、@L_BOOKWRITER@の遺作となった@superitem@会心作'),
            new SctItm('@B_WRITER_DECO@、@L_BOOKWRITER@らしからぬ@superitem@異色作'),
            new SctItm('@B_WRITER_DECO@、@L_BOOKWRITER@の稀に見る@superitem@意欲作')
        ];
    }
}
// 02:筆者形容
class selector_bookwriter_deco extends SctItm_Selector {
    constructor() {
        super('@B_WRITER_DECO@');
        this.itms = [
            new SctItm('@L_WHAT@の@SPECIALIST@'),
            new SctItm('@L_WHAT@が産んだ@SPECIALIST@'),
            new SctItm('@L_CLASS@の@SPECIALIST@'),
            new SctItm('@L_DO@の@SPECIALIST@'),
            new SctItm('@L_TECH@の@SPECIALIST@')
        ];
    }
}
class book_docs_maker extends news_docs_maker {
    constructor() {
        super();
        this.dic_push(new selector_bookinfo01());
        this.dic_push(new selector_bookinfo02());
        this.dic_push(new selector_bookwriter_deco());
    }
}
