function set_book()
{
    set_header_menu(6);

    scrollTo(0,0);

    let html : string = '';
    html += '<div id="main_title">'
    html += '<h1>';
    html += 'Book';
    html += '<small>';
    html += ' B00.37';
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

    if (rnd_max(3) == 0) {
        html += make_booktype0();
    } else {
        html += make_booktype1();
    }

    //---- this Q&A END
    html += '</div>';

    let maker = new book_docs_maker();
    html = maker.gene_docs(html);

    return html;
}

function make_booktype0() : string {
    let html = '';


    html += '<div id="book_writerpicture">';
    html += '<span class="xl">@L_BOOK@</span><br>';
    html += '著者：<br>';
    html += '@L_BOOKWRITER@';
    html += '<br>';
    html += '<p id="book_maker">';
    html += '出版元：@BOOKMAKER@';
    html += '</p>';
    html += '<br>';

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

    html += '<div id="@BOOKFACE0@">';

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
    html += '@B_INFO@';
    html += '</div>';

    return html;
}


function make_booktype1() : string {
    let html = '';


    html += '<div id="book_writerpicture">';
    html += '<span class="l">@L_HEROCATCH@@L_HEROFULLNAME@！</span><br>';
    html += '著者：<br>';
    html += '@L_BOOKWRITER@';
    html += '<br>';
    html += '<p id="book_maker">';
    html += '出版元：@BOOKMAKER@';
    html += '</p>';
    html += '<br>';

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

    html += '<div id="@BOOKFACE1@">';

    html += '<p id="book_title">';
    html += '@L_HEROCATCH@<br>@L_HEROJOB@@L_HEROTYPE@<br>★<br>@L_HERONAME@！';
    html += '</p>';
    html += '<br><br>';
    html += '<p id="book_writerinfo">';
    html += '@L_BOOKWRITER@';
    html += '</p>';
    html += '<br>';
    html += '</div>';

    html += '</div>';
    
    html += '<div id="book_comment">';
    html += '@B_INFO@';
    html += '</div>';

    return html;
}


class selector_bookinfo extends SctItm_Selector implements ISctItm_Selector {
    constructor(){
        super('@B_INFO@');
        this.itms = [
            new SctItm('@B_INFO01@。@B_INFO02@？ @B_INFO02@――@B_INFOEND@。')
            ,
            new SctItm('@B_INFO01@。@B_INFO02@？ @B_INFO02@――@B_INFO03@。')
            ,
            new SctItm('@B_INFO02@？ @B_INFO02@？ @B_INFOEND@。')
            ,
            new SctItm('@B_INFO02@？ @B_INFO02@？ @B_INFO01@。')
            ,
            new SctItm('@B_INFO02@？ @B_INFO02@？ @B_INFO03@。')
            ,
            new SctItm('@B_INFO02@――@B_INFO03@。')
            ,
            new SctItm('@B_INFO02@――@B_INFOEND@。')
            ,
            new SctItm('@B_INFO02@――@B_INFOEND@。@COMMENT2@――')
        ]
    }
}


// 01:例文から
class selector_bookinfo01 extends SctItm_Selector implements ISctItm_Selector {
    constructor(){
        super('@B_INFO01@');
        this.itms = [
            new SctItm('@COMMENT2@――')
            ,
            new SctItm('「@COMMENT2@」――この@KEI@@B_SENTENCE@に@L_WHAT@が震撼した')
            ,
            new SctItm('「@COMMENT2@」――この@KEI@@B_SENTENCE@に、@L_WHAT@の@MANYPEOPLE@が泣いた')
            ,
            new SctItm('「@COMMENT2@」――この@KEI@@B_SENTENCE@が、@L_WHAT@の@COURSE@を変えた')
            ,
            new SctItm('「@COMMENT2@」――この@KEI@@B_SENTENCE@が、あなたを@SUPERITEM@@L_WHAT@へと誘う')
            ,
            new SctItm('「@COMMENT2@」――この@KEI@@B_SENTENCE@が、@L_WHAT@を震え上がらせた')
            ,
            new SctItm('「@COMMENT2@」――この@KEI@@B_SENTENCE@が、あなたの@COURSE@を変える')
            ,
            new SctItm('「@COMMENT2@」――この@KEI@@B_SENTENCE@が、@L_WHAT@の@COURSE@を決定づけた')
            ,
            new SctItm('「@COMMENT2@」――そう、これぞ正しく@L_BOOKWRITER@の世界だ')
            ,
            new SctItm('「@COMMENT2@」――この@KEI@@B_SENTENCE@こそ、@L_BOOKWRITER@の真骨頂')
        ]
    }
}

class selector_booksentence extends SctItm_Selector implements ISctItm_Selector {
    constructor(){
        super('@B_SENTENCE@');
        this.itms = [
            new SctItm('冒頭')
            ,
            new SctItm('一文')
            ,
            new SctItm('一言')
            ,
            new SctItm('告発')
            ,
            new SctItm('狂言回し')
            ,
            new SctItm('名調子')
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
            new SctItm('@L_CLASS@だけが知る@L_ITEM@の真実とは')
            ,
            new SctItm('@PEOPLE@が@DOING@いた理由とは')
            ,
            new SctItm('@L_DO@した@L_WHAT@の@COURSE@は')
        ]
    }
}

// 03:評価
class selector_bookinfo03 extends SctItm_Selector implements ISctItm_Selector {
    constructor(){
        super('@B_INFO03@');
        this.itms = [
            new SctItm('@COUNTRY@文学賞に輝く@L_BOOKWRITER@の@B_TYPE@')
            ,
            new SctItm('@COUNTRY@を代表する@L_BOOKWRITER@の@B_TYPE@')
            ,
            new SctItm('@COUNTRY@を含む@NUM10TO99@ヶ国で発売禁止となった@L_BOOKWRITER@の@B_TYPE@')
            ,
            new SctItm('かつて@COUNTRY@で禁書に指定された@L_BOOKWRITER@の@B_TYPE@')
            ,
            new SctItm('@NUM2TO9@度に渡り映画化された@L_BOOKWRITER@の@B_TYPE@')
            ,
            new SctItm('映画化不可能と云われた@L_BOOKWRITER@の@B_TYPE@')
            ,
            new SctItm('@PEOPLE@達にもっとも@ASSES@@L_BOOKWRITER@の@B_TYPE@')
        ]
    }
}

// END:筆者紹介
class selector_bookinfoend extends SctItm_Selector implements ISctItm_Selector {
    constructor(){
        super('@B_INFOEND@');
        this.itms = [
            new SctItm('@B_WRITER_DECO@、@L_BOOKWRITER@が放つ@SUPERITEM@@B_TYPE@')
            ,
            new SctItm('@B_WRITER_DECO@、@L_BOOKWRITER@が産んだ@SUPERITEM@@B_TYPE@')
            ,
            new SctItm('@B_WRITER_DECO@、@L_BOOKWRITER@が書き綴る@SUPERITEM@@B_TYPE@')
            ,
            new SctItm('@B_WRITER_DECO@、@L_BOOKWRITER@の@SUPERITEM@@B_TYPE@')
            ,
            new SctItm('@B_WRITER_DECO@、@L_BOOKWRITER@の@SUPERITEM@@B_TYPE@')
            ,
            new SctItm('@B_WRITER_DECO@、@L_BOOKWRITER@の再スタートを記念する@SUPERITEM@@B_TYPE@')
            ,
            new SctItm('@B_WRITER_DECO@、@L_BOOKWRITER@の完全復活を飾る@SUPERITEM@@B_TYPE@')
            ,
            new SctItm('@B_WRITER_DECO@、@L_BOOKWRITER@にとって事実上の遺作となった@SUPERITEM@@B_TYPE@')
            ,
            new SctItm('@B_WRITER_DECO@、@L_BOOKWRITER@らしからぬ@SUPERITEM@@B_TYPE@')
            ,
            new SctItm('@B_WRITER_DECO@、@L_BOOKWRITER@の稀に見る@SUPERITEM@@B_TYPE@')
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
            new SctItm('@L_ITEM@の@SPECIALIST@')
            ,
            new SctItm('@L_ITEM@を知り尽くした@SPECIALIST@')
            ,
            new SctItm('@L_DO@する@SPECIALIST@')
            ,
            new SctItm('@L_ITEM@の@SPECIALIST@')
            ,
            new SctItm('かつて@COUNTRY@から追放された元@L_CLASS@')
            ,
            new SctItm('もっとも@COUNTRY@で@ASSES@元@L_CLASS@')
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
            new SctItm('ベストセラー')
            ,
            new SctItm('代表作')
            ,
            new SctItm('問題作')
            ,
            new SctItm('名作')
            ,
            new SctItm('文芸作品')
            ,
            new SctItm('現代小説')
            ,
            new SctItm('歴史小説')
            ,
            new SctItm('推理小説')
            ,
            new SctItm('サスペンス')
            ,
            new SctItm('ホラー小説')
            ,
            new SctItm('恋愛小説')
            ,
            new SctItm('短編集')
            ,
            new SctItm('実用書')
            ,
            new SctItm('入門書')
            ,
            new SctItm('参考書')
        ]
    }
}




class book_docs_maker extends news_docs_maker {
    constructor(){
        super();
        this.dic_push(new selector_bookinfo());
        this.dic_push(new selector_bookinfo01());
        this.dic_push(new selector_bookinfo02());
        this.dic_push(new selector_bookinfo03());
        this.dic_push(new selector_bookinfoend());
        this.dic_push(new selector_booksentence());
        this.dic_push(new selector_bookwriter_deco());
        this.dic_push(new selector_booktype());
    }
}






