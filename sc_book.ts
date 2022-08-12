function set_book()
{
    set_header_menu(6);

    scrollTo(0,0);

    let html : string = '';
    html += '<div id="main_title">'
    html += '<h1>';
    html += 'Book';
    html += '<small>';
    html += ' B00.15';
    html += '</small>';
    html += '</h1>';
    html += '</div>';

    for(let i = 0; i < 30; i++){
        html += '<p>[' + i.toString() + ']</p>' + make_book();
    }

    let elem = document.getElementById('site_main');
    if (elem == null)
    {
        alert('not found "site_main"');
        return;
    }
    elem.innerHTML = ruby_change(html);
}

function make_book()
{
    let html : string = '';

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

function make_b() : string {
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
    html += '@B_INFO02@？ @B_INFO02@――';

    html += '@B_INFOEND@。';

    
    html += '</div>';

    return html;
}

// 01:例文から
class selector_bookinfo01 extends SctItm_Selector implements ISctItm_Selector {
    constructor(){
        super('@B_INFO01@');
        this.itms = [
            new SctItm('@COMMENT2@――')
            ,
            new SctItm('「@COMMENT2@」――この@KEI@冒頭に世界が震撼した')
            ,
            new SctItm('「@COMMENT2@」――この@KEI@冒頭に、@MANYPEOPLE@が泣いた')
            ,
            new SctItm('「@COMMENT2@」――この@KEI@一文が、@L_WHAT@の全てを変えた')
            ,
            new SctItm('「@COMMENT2@」――この@KEI@名調子が、あなたを@superitem@@L_WHAT@へと誘う')
            ,
            new SctItm('「@COMMENT2@」――この@KEI@一言が、世界を震え上がらせた')
            ,
            new SctItm('「@COMMENT2@」――この@KEI@一言が、あなたを変える')
            ,
            new SctItm('「@COMMENT2@」――この@KEI@一文が、世界の命運を別ける')
            ,
            new SctItm('「@COMMENT2@」――そう、正にこれが@L_BOOKWRITER@の世界だ')
        ]
    }
}

// 02:疑問
class selector_bookinfo02 extends SctItm_Selector implements ISctItm_Selector {
    constructor(){
        super('@B_INFO02@');
        this.itms = [
            new SctItm('何故、@L_WHAT@では@DOING@いるのか')
            ,
            new SctItm('何故、@L_WHAT@の@L_CLASS@は@DOING@いるのか')
            ,
            new SctItm('@L_CLASS@だけが知る@L_WHAT@の真実とは')
            ,
            new SctItm('@PEOPLE@が@DOING@いた理由とは')
        ]
    }
}

// END:筆者紹介
class selector_bookinfoend extends SctItm_Selector implements ISctItm_Selector {
    constructor(){
        super('@B_INFOEND@');
        this.itms = [
            new SctItm('@B_WRITER_DECO@、@L_BOOKWRITER@が放つ@superitem@@B_TYPE@')
            ,
            new SctItm('@B_WRITER_DECO@、@L_BOOKWRITER@が産んだ@superitem@@B_TYPE@')
            ,
            new SctItm('@B_WRITER_DECO@、@L_BOOKWRITER@が書き綴る@superitem@@B_TYPE@')
            ,
            new SctItm('@B_WRITER_DECO@、@L_BOOKWRITER@の@superitem@@B_TYPE@')
            ,
            new SctItm('@B_WRITER_DECO@、@L_BOOKWRITER@の@superitem@@B_TYPE@')
            ,
            new SctItm('@B_WRITER_DECO@、@L_BOOKWRITER@の再スタートを記念する@superitem@@B_TYPE@')
            ,
            new SctItm('@B_WRITER_DECO@、@L_BOOKWRITER@の完全復活を飾る@superitem@@B_TYPE@')
            ,
            new SctItm('@B_WRITER_DECO@、@L_BOOKWRITER@にとって事実上の遺作となった@superitem@@B_TYPE@')
            ,
            new SctItm('@B_WRITER_DECO@、@L_BOOKWRITER@らしからぬ@superitem@@B_TYPE@')
            ,
            new SctItm('@B_WRITER_DECO@、@L_BOOKWRITER@の稀に見る@superitem@@B_TYPE@')
        ]
    }
}

// 02:筆者形容
class selector_bookwriter_deco extends SctItm_Selector implements ISctItm_Selector {
    constructor(){
        super('@B_WRITER_DECO@');
        this.itms = [
            new SctItm('@L_WHAT@の@SPECIALIST@')
            ,
            new SctItm('@L_WHAT@が産んだ@SPECIALIST@')
            ,
            new SctItm('@L_CLASS@の@SPECIALIST@')
            ,
            new SctItm('@L_DO@の@SPECIALIST@')
            ,
            new SctItm('@L_TECH@の@SPECIALIST@')
        ]
    }
}

class selector_booktype extends SctItm_Selector implements ISctItm_Selector {
    constructor(){
        super('@B_TYPE@');
        this.itms = [
            new SctItm('一冊')
            ,
            new SctItm('作品')
            ,
            new SctItm('快作')
            ,
            new SctItm('傑作')
            ,
            new SctItm('新作')
            ,
            new SctItm('意欲作')
            ,
            new SctItm('異色作')
            ,
            new SctItm('出世作')
            ,
            new SctItm('代表作')
            ,
            new SctItm('名作')
            ,
            new SctItm('改訂版')
            ,
            new SctItm('文芸作品')
            ,
            new SctItm('現代小説')
            ,
            new SctItm('歴史小説')
            ,
            new SctItm('推理小説')
            ,
            new SctItm('入門書')
        ]
    }
}


class book_docs_maker extends news_docs_maker {
    constructor(){
        super();
        this.dic_push(new selector_bookinfo01());
        this.dic_push(new selector_bookinfo02());
        this.dic_push(new selector_bookinfoend());
        this.dic_push(new selector_bookwriter_deco());
        this.dic_push(new selector_booktype());
    }
}






