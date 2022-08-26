function set_book()
{
    set_header_menu(6);

    scrollTo(0,0);

    let html : string = '';
    html += '<div id="main_title">'
    html += '<h1>';
    html += 'Book';
    html += '<small>';
    html += ' B00.53';
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
    html += '@L_HEROCATCH@<br>@L_HEROJOB@@L_HEROTYPE@@L_HM@@L_HERONAME@！';
    html += '</p>';
    html += '<br><br>';
    html += '<p id="book_writerinfo">';
    html += '@L_BOOKWRITER@';
    html += '</p>';
    html += '<br>';
    html += '</div>';

    html += '</div>';
    
    html += '<div id="book_comment">';
    html += '　@ST00@@STE00@<br>@STE01@<br>　@STE_C@<br>　@STH00@<br>@STH01@';
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

// 背景
class selector_story00 extends SctItm_Selector implements ISctItm_Selector {
    constructor(){
        super('@ST00@');
        this.itms = [
            new SctItm('ここは@MANY@@L_CLASS@達が暮らす@KEIP@@L_WHAT@。')
            ,
            new SctItm('今日も@KEIP@@L_WHAT@では、@MANY@@L_CLASS@達が@KEIDP@@KEIDP@暮らしています。')
            ,
            new SctItm('昔々、とても@KEIP@@L_WHAT@では、@KEIDP@て@KEIP@@L_CLASS@達が@DOING02@暮らしていました。')
        ]
    }
}

// 登場
class selector_storyE00 extends SctItm_Selector implements ISctItm_Selector {
    constructor(){
        super('@STE00@');
        this.itms = [
            new SctItm('そこに@KEIN@姿の@L_EVILTYPE@がやってきました。')
            ,
            new SctItm('そこに突然、見るも@KEIN@@L_EVILTYPE@が現れたのです。')
            ,
            new SctItm('その@L_WHAT@に、@KEIN@@L_EVILTYPE@が訪れました。')
            ,
            new SctItm('そんな@KEIP@@L_WHAT@に、@KEIN@姿形の@L_EVILTYPE@がやってきました。')
        ]
    }
}
class selector_storyE01 extends SctItm_Selector implements ISctItm_Selector {
    constructor(){
        super('@STE01@');
        this.itms = [
            new SctItm('「私の名前は@L_EVIL@！ @TECH@の力を思い知れ！」')
            ,
            new SctItm('「我こそは@L_EVIL@！ 我が@L_TECH@パワーの餌食となるのだ！」')
            ,
            new SctItm('「我が名は@L_EVIL@！ @TECH@の恐ろしさを身をもって味わうのだ！」')
            ,
            new SctItm('「俺様は@L_EVIL@！ @L_TECH@の呪いを受けてみよ！」')
        ]
    }
}
class selector_storyE_C extends SctItm_Selector implements ISctItm_Selector {
    constructor(){
        super('@STE_C@');
        this.itms = [
            new SctItm('その@KEIN@姿に@L_CLASS@達は大慌て。このままでは大変なことに――と、その時！')
            ,
            new SctItm('逃げ惑う@L_CLASS@達。ああ、私達を助けてくれる神や仏はいないのか――と、その時！')
            ,
            new SctItm('絶望する@L_CLASS@達。どうしてこんなことに……？　と、その時！')
            ,
            new SctItm('為す術も無く狼狽える@L_CLASS@達。嗚呼、誰か、誰か助けて――と、その時！')
        ]
    }
}



class selector_storyH00 extends SctItm_Selector implements ISctItm_Selector {
    constructor(){
        super('@STH00@');
        this.itms = [
            new SctItm('そこに見るも@KEIP@@L_HEROTYPE@が現れたのです。')
            ,
            new SctItm('そんな@KEIDN@て@KEIN@@L_WHAT@に、@KEIP@@L_HEROTYPE@が姿を現しました。')
            ,
            new SctItm('そんな@KEIN@@L_WHAT@に、@KEIP@姿形の@L_HEROTYPE@がやってきました。')
            ,
            new SctItm('鳴り響く@KEIP@@MUSIC@と共に、@L_HEROJOB@@L_HEROTYPE@が参上しました。')
            ,
            new SctItm('見るも@KEIP@@DRESS@をひるがえし、@L_HEROJOB@@L_HEROTYPE@が登場しました。')
        ]
    }
}

class selector_storyH01 extends SctItm_Selector implements ISctItm_Selector {
    constructor(){
        super('@STH01@');
        this.itms = [
            new SctItm('「人呼んで@ITEM@の@NICKGOOD@！ @L_HEROFULLNAME@参上！」')
            ,
            new SctItm('「待たせたな！ @L_HERO@が相手だ！ 貴様の好きにはさせないぞ！」')
            ,
            new SctItm('「そこまでだ！ @L_HERO@が容赦はしないぞ！」')
        ]
    }
}

class selector_story05 extends SctItm_Selector implements ISctItm_Selector {
    constructor(){
        super('@STORYEA01@');
        this.itms = [
            new SctItm('今度は@L_EVILJOB@@L_EVILTYPE@が驚く番です。「ぬぬ！ @L_HERONAME@め！ 邪魔立てするな！」')
            ,
            new SctItm('@L_EVILJOB@@L_EVILTYPE@はいきり立ちます。「来たな@L_HERONAME@！ 覚悟せよ！」')
            ,
            new SctItm('@L_EVILJOB@@L_EVILTYPE@は慌てず高笑い。「ヌハハハ！ 此処であったが百年目！ 勝負だ@L_HERONAME@！ 」')
        ]
    }
}


class selector_evilattack extends SctItm_Selector implements ISctItm_Selector {
    constructor(){
        super('@EVILATTACK@');
        this.itms = [
            new SctItm('@L_EVILJOB@ガス噴射！')
            ,
            new SctItm('@L_EVILJOB@爆弾投下！')
            ,
            new SctItm('@L_EVILJOB@魔法発動！')
            ,
            new SctItm('@L_EVILJOB@ハリケーン！')
            ,
            new SctItm('@L_EVILJOB@バズーカー！')
            ,
            new SctItm('@L_EVILJOB@ダイナマイト！')
            ,
            new SctItm('@L_EVILJOB@大砲！')
            ,
            new SctItm('@L_EVILJOB@ミサイル！')
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
        this.dic_push(new selector_story00());
        this.dic_push(new selector_storyE00());
        this.dic_push(new selector_storyE01());
        this.dic_push(new selector_storyE_C());
        this.dic_push(new selector_storyH00());
        this.dic_push(new selector_storyH01());
        this.dic_push(new selector_story05());
        this.dic_push(new selector_evilattack());
    }
}






