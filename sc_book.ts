function set_book()
{
    set_header_menu(6);

    scrollTo(0,0);

    let html : string = '';
    html += '<div id="main_title">'
    html += '<h1>';
    html += 'Book';
    html += '<small>';
    html += ' B01.64';
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

    switch(rnd_max(4))
    {
        case 0:
            {
                html += make_booktype1();
                break;
            }
        case 1:
            {
                html += make_booktype2();
                break;
            }
        case 2:
            {
                html += make_booktype3();
                break;
            }
        default:
            {
                html += make_booktype0();
                break;
            }
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
    // html += '<span class="xl">@L_BOOK@</span><br>';
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
    html += '　@B_INFO@';
    html += '</div>';

    return html;
}


function make_booktype1() : string {
    let html = '';


    html += '<div id="book_writerpicture">';
    // html += '<span class="l">@L_HEROCATCH@@L_HEROFULLNAME@！</span><br>';
    html += '著者：<br>';
    html += '@L_BOOKWRITER@';
    html += '<br>';
    html += '<p id="book_maker">';
    html += '出版元：@HEROMAKER@';
    html += '</p>';
    html += '<br>';

    html += '</div>';

    html += '<div id="book_face" ';
    html += 'style="';
    html += 'background: ';
    html += 'linear-gradient(0deg,rgba(0,0,0,0.6),rgba(0,0,0,0.6)),';
    html += 'url(./pics/@PIC_HERO@);';

    html += 'background-position: left top;';
    html += 'background-size:   cover;';
    html += 'background-repeat: no-repeat;';
    html += 'border:     2px solid #ffffff;';
    html += '">';

    html += '<br>';

    html += '<div id="@BOOKFACE1@">';

    html += '<p id="book_title">';
    html += '@L_HEROCATCH@<br><br>@L_HEROJOB@@L_HEROTYPE@<br>@L_HM@<br>@L_HERONAME@！';
    html += '</p>';
    html += '<br><br>';
    html += '<p id="book_writerinfo">';
    html += '@L_BOOKWRITER@';
    html += '</p>';
    html += '<br>';
    html += '</div>';

    html += '</div>';
    
    html += '<div id="book_comment">';
    html += '@ST00@';
    html += '</div>';

    return html;
}

function make_booktype2() : string {
    let html = '';


    html += '<div id="book_writerpicture">';
    // html += '<span class="l">@L_BOY@ と @L_GIRL@</span><br>';
    html += '著者：<br>';
    html += '@L_BOOKWRITER@';
    html += '<br>';
    html += '<p id="book_maker">';
    html += '出版元：@LOVEMAKER@';
    html += '</p>';
    html += '<br>';

    html += '</div>';

    html += '<div id="book_face" ';
    html += 'style="';
    html += 'background: ';
    html += 'linear-gradient(0deg,rgba(0,0,0,0.6),rgba(0,0,0,0.6)),';
    html += 'url(./pics/@PIC_LOVE@);';

    html += 'background-position: left top;';
    html += 'background-size:   cover;';
    html += 'background-repeat: no-repeat;';
    html += 'border:     2px solid #ffffff;';
    html += '">';

    html += '<br>';

    html += '<div id="@BOOKFACE2@">';

    html += '<p id="book_title">';
    html += '@L_BOY@ と @L_GIRL@';
    html += '</p>';
    html += '<br><br>';
    html += '<p id="book_writerinfo">';
    html += '@L_BOOKWRITER@';
    html += '</p>';
    html += '<br>';
    html += '</div>';

    html += '</div>';
    
    html += '<div id="book_lovestory">';
    html += '@BOY_FIRST@<br>';
    html += '@GIRL_NEXT@<br>';
    html += '@BOY_NEXT@<br>';
    html += '@GIRL_NEXT@<br>';
    html += '@BOY_NEXT@<br>';
    html += '@GIRL_NEXT@<br>';
    html += '@BOY_NEXT@<br>';
    html += '@GIRL_NEXT@<br>';
    html += '@BOY_NEXT@<br>';
    html += '@GIRL_NEXT@<br>';
    html += '@BOY_NEXT@<br>';
    html += '@GIRL_NEXT@<br>';
    html += '@BOY_NEXT@<br>';
    html += '<p style="text-align: right">(つづく)</p>'
    html += '</div>';

    return html;
}


function make_booktype3() : string {
    let html = '';

    html += '<div id="book_writerpicture">';
    // html += '<span class="l">@L_MYSTTITLE@</span><br>';
    html += '著者：<br>';
    html += '@L_BOOKWRITER@';
    html += '<br>';
    html += '<p id="book_maker">';
    html += '出版元：@MYSTMAKER@';
    html += '</p>';
    html += '<br>';

    html += '</div>';

    html += '<div id="book_face" ';
    html += 'style="';
    html += 'background: ';
    html += 'linear-gradient(0deg,rgba(0,0,0,0.6),rgba(0,0,0,0.6)),';
    html += 'url(./pics/@PIC_MYST@);';

    html += 'background-position: left top;';
    html += 'background-size:   cover;';
    html += 'background-repeat: no-repeat;';
    html += 'border:     2px solid #ffffff;';
    html += '">';

    html += '<br>';

    html += '<div id="@BOOKFACE3@">';

    html += '<p id="book_title">';
    html += '@L_MYSTTITLE@';
    html += '</p>';
    html += '<br><br>';
    html += '<p id="book_writerinfo">';
    html += '@L_BOOKWRITER@';
    html += '</p>';
    html += '<br>';
    html += '</div>';

    html += '</div>';
    
    html += '<div id="book_myststory">';

    html += '@MYST01@<br><br>@MYST_ACT@<br><br>@MYST_REACT@<br><br>@MYST_SPOT@<br><br>';
    
    let b1 = rnd_max(5);
    let b2 = 4 - b1;
    
    if (b1 > 0)
    {
        for(let i = 0;i < b1; i++) {
            html += '@MYST_HEAR_B@<br><br>';
        }
        
        html += '@MYST_HEAR_A@<br><br>';
    }
    
    if (b2 > 0)
    {
        for(let i = 0;i < b2; i++) {
            html += '@MYST_HEAR_B@<br><br>';
        }
    }
    
    html += '@MYST_END01@<br><br>';
    html += '@MYST_END02@<br><br>';
    
    html += '<p style="text-align: right">(つづく)</p>'
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

// 00:住人登場
class selector_story00 extends SctItm_Selector implements ISctItm_Selector {
    constructor(){
        super('@ST00@');
        this.itms = [
            new SctItm('　ここは@MANY@@KEIP2@@L_CLASS@達が@KEIDP2@暮らす@KEIP2@@L_WHAT@。@STE00@')
            ,
            new SctItm('　今日も@KEIP2@@L_WHAT@で@DOING02@いるのは、@MANY@@KEIP2@@L_CLASS@達である。@STE00@')
            ,
            new SctItm('　昔々、@KEIP2@@L_WHAT@で、今日も@KEIDP2@@DOING02@いる@KEIP2@@L_CLASS@達。@STE00@')
        ]
    }
}

// 00:魔人登場
class selector_storyE00 extends SctItm_Selector implements ISctItm_Selector {
    constructor(){
        super('@STE00@');
        this.itms = [
            new SctItm('<br>　その@KEIP2@@L_CLASS@達の元に、見るも@KEIN2@@RIDE@に乗った謎の@L_EVILTYPE@が姿を現した――。@STE01@')
            ,
            new SctItm('<br>　そんな@KEIP2@@L_WHAT@に、@KEIN2@@NICKBAD@そっくりの@L_EVILTYPE@が@KEIN2@@RIDE@に乗って現れた――。@STE01@')
            ,
            new SctItm('<br>　そこに@NICKBAD@のように@KEIN2@@L_EVILJOB@@L_EVILTYPE@が姿を現した――。@STE01@')
            ,
            new SctItm('<br>　その@L_CLASS@達の元に@KEIDN2@現れたのは、まるで@NICKBAD@のような@KEIN2@@L_EVILJOB@@L_EVILTYPE@――。@STE01@')
        ]
    }
}

// 01:魔人挨拶
class selector_storyE01 extends SctItm_Selector implements ISctItm_Selector {
    constructor(){
        super('@STE01@');
        this.itms = [
            new SctItm('<br>「我こそは@L_EVIL@！ この@KEIN2@@TECH@パワーの餌食となるのだ！」@STE_C@')
            ,
            new SctItm('<br>「我が名は@L_EVIL@！ @KEIN2@@TECH@の恐ろしさを身をもって味わうのだ！」@STE_C@')
            ,
            new SctItm('<br>「俺様は@L_EVIL@！ @KEIN2@@TECH@の@KEIN2@呪いを受けてみよ！」@STE_C@')
        ]
    }
}

// E_C:魔人⇒住人
class selector_storyE_C extends SctItm_Selector implements ISctItm_Selector {
    constructor(){
        super('@STE_C@');
        this.itms = [
            new SctItm('<br>　@L_CLASS@達は大慌て。このまま@L_WHAT@は征服されてしまうのか。――と、その時！@STH00@')
            ,
            new SctItm('<br>　逃げ惑う@L_CLASS@達。もはや@L_WHAT@は風前の灯火――と、その時！@STH00@')
            ,
            new SctItm('<br>　為す術も無く狼狽える@L_CLASS@達――と、その時！@STH00@')
        ]
    }
}


// 00:ヒーロー登場

class selector_storyH00 extends SctItm_Selector implements ISctItm_Selector {
    constructor(){
        super('@STH00@');
        this.itms = [
            new SctItm('<br>　@KEIP2@@ANIMAL@の背にまたがって、@KEIP2@@L_HEROJOB@@L_HEROTYPE@が駆け付けた！<br>@STH01@')
            ,
            new SctItm('<br>　@KEIP2@@MUSIC@と共に@KEIDP2@現れたのは、@KEIP2@@L_HEROJOB@@L_HEROTYPE@！<br>@STH01@')
            ,
            new SctItm('<br>　見るも@KEIP2@@DRESS@を@KEIDP2@ひるがえし、@KEIP2@@L_HEROJOB@@L_HEROTYPE@が@KEIDP2@舞い降りた！<br>@STH01@')
            ,
            new SctItm('<br>　@KEIP2@@FLOWER@の花を口にくわえた正義の味方、@KEIP2@@L_HEROJOB@@L_HEROTYPE@が@KEIDP2@降臨した！<br>@STH01@')
        ]
    }
}

// 01:ヒーロー挨拶
class selector_storyH01 extends SctItm_Selector implements ISctItm_Selector {
    constructor(){
        super('@STH01@');
        this.itms = [
            new SctItm('「誰が呼んだか、@ITEM@の@NICKGOOD@！ @L_HEROFULLNAME@とは私のことだ！」<br><br>@SEL01@')
            ,
            new SctItm('「待たせたな！ @ITEM@の@NICKGOOD@！ @L_HEROFULLNAME@が相手になろう！」<br><br>@SEL01@')
            ,
            new SctItm('「そこまでだ！ @ITEM@の@NICKGOOD@！ @L_HEROFULLNAME@が容赦はしないぞ！」<br><br>@SEL01@')
            ,
            new SctItm('「我こそは@ITEM@の@NICKGOOD@！ @L_HEROFULLNAME@、只今参上！」<br><br>@SEL01@')
        ]
    }
}

class selector_storySel01 extends SctItm_Selector implements ISctItm_Selector {
    constructor(){
        super('@SEL01@');
        this.itms = [
            new SctItm('@STH_E@')
            ,
            new SctItm('@STH_C@')
        ]
    }
}


// ヒーロー⇒魔人
class selector_storyH_E extends SctItm_Selector implements ISctItm_Selector {
    constructor(){
        super('@STH_E@');
        this.itms = [
            new SctItm('「ぬぬ、@L_HEROJOB@@L_HEROTYPE@だと？」と驚く@L_EVILJOB@@L_EVILTYPE@、しかし、それも束の間。<br>@STE02@')
            ,
            new SctItm('「来たな@L_HERONAME@！ 覚悟せよ！」と、@L_EVILJOB@@L_EVILTYPE@は@KEIDN2@勇み立つ。<br>@STE02@')
            ,
            new SctItm('「ヌハハハ！ 此処であったが百年目！ 勝負だ@L_HERONAME@！ 」と、@L_EVILJOB@@L_EVILTYPE@は@KEIDN2@笑う。<br>@STE02@')
        ]
    }
}

class selector_storyE02 extends SctItm_Selector implements ISctItm_Selector {
    constructor(){
        super('@STE02@');
        this.itms = [
            new SctItm('　怪人@L_EVILNAME@は余裕綽々、@NICKBAD@のような@KEIN2@形相を浮かべて、@L_HEROFULLNAME@に襲いかかった！<br>「喰らえ！ @EVILATTACK@」<br>@SEL02@')
            ,
            new SctItm('　怪人@L_EVILNAME@は次の瞬間、@KEIN2@@ANIMAL@のような@KEIN2@勢いで@L_HEROFULLNAME@に飛びかかった！<br>「死ね！ @EVILATTACK@」<br>@SEL02@')
            ,
            new SctItm('　怪人@L_EVILNAME@は威勢を改め、@KEIN2@@BIRD@の構えから、@KEIN2@技を繰り出した！<br>「くたばれ@L_HERONAME@！ @EVILATTACK@」<br>@SEL02@')
        ]
    }
}

class selector_storySel02 extends SctItm_Selector implements ISctItm_Selector {
    constructor(){
        super('@SEL02@');
        this.itms = [
            new SctItm('@STH03@')
            ,
            new SctItm('@STH04@')
        ]
    }
}


class selector_storyH02 extends SctItm_Selector implements ISctItm_Selector {
    constructor(){
        super('@STH02@');
        this.itms = [
            new SctItm('　@KEIP2@@L_HEROFULLNAME@は@KEIP2@必殺の構え！ <br>「覚悟だ！ @HEROATTACK@」<br>@SEL03@')
            ,
            new SctItm('　@KEIP2@@L_HEROFULLNAME@は@KEIP2@腕を@KEIDP2@振りかざし！ <br>「トドメだ！ @HEROATTACK@」<br>@SEL03@')
            ,
            new SctItm('　@KEIP2@@L_HEROFULLNAME@の@KEIP2@大技が放たれた！ <br>「受けてみよ！ @HEROATTACK@」<br>@SEL03@')
        ]
    }
}

class selector_storySel03 extends SctItm_Selector implements ISctItm_Selector {
    constructor(){
        super('@SEL03@');
        this.itms = [
            new SctItm('@STE03@')
            ,
            new SctItm('@STE04@')
        ]
    }
}


// 03:ヒーロー受け
class selector_storyH03 extends SctItm_Selector implements ISctItm_Selector {
    constructor(){
        super('@STH03@');
        this.itms = [
            new SctItm('「仕方ない、我が裁きを受けよ！」と@KEIDP2@言いつつ、@KEIP2@@L_HEROJOB@@L_HEROTYPE@はヒラリとかわす！<br>@STH02@')
            ,
            new SctItm('　それを@KEIP2@@L_HEROJOB@@L_HEROTYPE@は@KEIDP2@弾き返す！「悪が栄える試しは無い！」<br>@STH02@')
            ,
            new SctItm('「それで正義が揺らぐものか！」@KEIP2@@L_HEROJOB@@L_HEROTYPE@はビクともしない！<br>@STH02@')
        ]
    }
}

// 04:怪人⇒ヒーロー負け
class selector_storyH04 extends SctItm_Selector implements ISctItm_Selector {
    constructor(){
        super('@STH04@');
        this.itms = [
            new SctItm('「し、しまった！」 チュドーン！ @KEIP2@@L_HERONAME@は吹き飛ばされた！<br><br>@STEEND@')
            ,
            new SctItm('「あ・・・！」 ドカーン！！ @L_HERONAME@は大爆発！<br><br>@STEEND@')
            ,
            new SctItm('「やられたっ！」 ズドドドーン！ @L_HERONAME@は倒された！<br><br>@STEEND@')
        ]
    }
}
// 04:ヒーロー⇒怪人負け
class selector_storyE04 extends SctItm_Selector implements ISctItm_Selector {
    constructor(){
        super('@STE04@');
        this.itms = [
            new SctItm('　@L_EVILNAME@に見事的中！<br>「おのれ！ @L_HERONAME@め！」<br>　チュドーン！ @KEIN2@@L_EVILJOB@@L_EVILTYPE@は星の彼方へ！<br><br>@STHEND@')
            ,
            new SctItm('　@L_EVILNAME@は手も足も出ない！<br>「覚えてろ！ @L_HERONAME@め！」<br>　スタタタタ・・・ @KEIN2@@L_EVILJOB@@L_EVILTYPE@は逃げていった！<br><br>@STHEND@')
            ,
            new SctItm('　@L_EVILNAME@は絶体絶命！「・・・@L_EVILJOB@に栄光あれ！」<br>　ドッカーン！ @KEIN2@@L_EVILNAME@は大爆発！<br><br>@STHEND@')
        ]
    }
}
// 04:住人⇒ヒーロー負け
class selector_storyH05 extends SctItm_Selector implements ISctItm_Selector {
    constructor(){
        super('@STH05@');
        this.itms = [
            new SctItm('「ご、ごめんなさい！」 チュドーン！ @KEIP2@@L_HERONAME@は謝罪会見！<br>@STE05@')
            ,
            new SctItm('「は、反省してます！」 ドカーン！！ @L_HERONAME@は余罪で逮捕された！<br>@STE05@')
            ,
            new SctItm('「も、もうしませんっ！」 ズドドドーン！ @L_HERONAME@はアカウント炎上削除！<br>@STE05@')
        ]
    }
}

// 04:住人⇒怪人負け
class selector_storyE05 extends SctItm_Selector implements ISctItm_Selector {
    constructor(){
        super('@STE05@');
        this.itms = [
            new SctItm('「あれ？ 俺も？」 チュドーン！ ついでに@L_EVILJOB@@L_EVILTYPE@も冤罪逮捕！<br><br>@STCEND')
            ,
            new SctItm('「い、いや、俺は違うぞ！」 ドカーン！ おまけで@L_EVILJOB@@L_EVILTYPE@も誤解炎上！<br><br>@STCEND')
            ,
            new SctItm('「悪いのはアイツじゃないか」 ズドドドーン！ @L_EVILJOB@@L_EVILTYPE@も巻き込まれて引退発表！<br><br>@STCEND')
        ]
    }
}

// END:怪人勝利
class selector_storyEEND extends SctItm_Selector implements ISctItm_Selector {
    constructor(){
        super('@STEEND@');
        this.itms = [
            new SctItm('　@L_EVILFULLNAME@の@KEIN2@大勝利！<br>「これで@L_WHAT@は私のモノだ！ ガハハハッ！」<br><br>　@HEROCATCH@@L_HERONAME@！<br>　@HEROCATCH@@L_HERONAME@！<br>　このままでは済まされないぞ！<br><p style="text-align: right">(つづく)</p>')
            ,
            new SctItm('「悪が栄える！ これがこの世の真実だ！」<br>　@L_WHAT@は@KEIN2@@L_EVILJOB@@L_EVILTYPE@の魔の手に落ちた！<br><br>　@HEROCATCH@@L_HERONAME@！<br>　@HEROCATCH@@L_HERONAME@！<br>　@L_WHAT@があなたを待っている！<br><p style="text-align: right">(つづく)</p>')
            ,
            new SctItm('「さあ、@L_CLASS@共よ！ 俺様に平伏すが良い！ ゲハハハ！」<br>　@L_EVILFULLNAME@の@KEIN2@大勝利！<br><br>　@HEROCATCH@@L_HERONAME@！<br>　@HEROCATCH@@L_HERONAME@！<br>　@L_CLASS@達を救えるのは君だけだ！<br><p style="text-align: right">(つづく)</p>')
        ]
    }
}
// END:住人勝利
class selector_storyCEND extends SctItm_Selector implements ISctItm_Selector {
    constructor(){
        super('@STCEND');
        this.itms = [
            new SctItm('　これぞ数の暴力！ @L_CLASS@達の大勝利！<br>「住民パワーで世界平和だ！」<br><br>　@HEROCATCH@@L_HERONAME@！<br>　ついでに@HEROCATCH@@L_EVILNAME@！<br>　英雄達に未来は来るか？<br><p style="text-align: right">(つづく)</p>')
            ,
            new SctItm('　正論には誰も勝てない！ @L_CLASS@達の大勝利！<br>「ペンは剣よりも強いのだ！」<br><br>　@HEROCATCH@@L_HERONAME@！<br>　そして@HEROCATCH@@L_EVILNAME@！<br>　ヒーロー達の明日はどっちだ？<br><p style="text-align: right">(つづく)</p>')
        ]
    }
}

// END:ヒーロー勝利？
class selector_storyHEND extends SctItm_Selector implements ISctItm_Selector {
    constructor(){
        super('@STHEND@');
        this.itms = [
            new SctItm('「正義は勝つ！」　@L_HEROFULLNAME@の@KEIP2@大勝利・・・と思っていたら、<br>@STH_C2@')
            ,
            new SctItm('「悪が栄える道理は無い！」　@L_HEROFULLNAME@の@KEIP2@大勝利・・・と思っていたら、<br>@STH_C2@')
        ]
    }
}


class selector_storyE03 extends SctItm_Selector implements ISctItm_Selector {
    constructor(){
        super('@STE03@');
        this.itms = [
            new SctItm('　それを@L_EVILJOB@@L_EVILTYPE@はガッチリ受け止め、<br>「フン、この程度か！　@EVILATTACK@」<br>@STH04@')
            ,
            new SctItm('　それを@L_EVILJOB@@L_EVILTYPE@は払いのけ、<br>「そんな@NICKBAD@みたいな技が効くものか！　@EVILATTACK@」<br>@STH04@')
            ,
            new SctItm('　しかし、@L_EVILJOB@@L_EVILTYPE@には通じない！ <br>「フハハ、俺様の勝ちだ！　@EVILATTACK@」<br>@STH04@')
        ]
    }
}


// H_C:ヒーロー⇒住人
class selector_storyH_C extends SctItm_Selector implements ISctItm_Selector {
    constructor(){
        super('@STH_C@');
        this.itms = [
            new SctItm('　しかし、正義の味方のその姿に、何故か騒ぎ出す@L_WHAT@の@L_CLASS@達。<br>「もしや、アイツはウチで@FOOD@を食い逃げした@L_HERONAME@ではないか？」<br>@STC01@')
            ,
            new SctItm('　しかし、せっかく登場した正義の味方に、@L_WHAT@の@L_CLASS@達は不穏な様子。<br>「ちょっと待て！ お前はウチの@ANIMAL@を盗んだ@L_HERONAME@だろう！」<br>@STC01@')
            ,
            new SctItm('　その時、助けに来た正義の味方を、@L_WHAT@の@L_CLASS@達は指さして、<br>「間違いない！ 貴様はウチで@FOOD@を盗み食いした@L_HERONAME@だな？」<br>@STC01@')
        ]
    }
}
// H_C2:ヒーロー⇒住人 2
class selector_storyH_C2 extends SctItm_Selector implements ISctItm_Selector {
    constructor(){
        super('@STH_C2@');
        this.itms = [
            new SctItm('<br>　しかし、@L_WHAT@の@L_CLASS@達は認めない！<br>「なんてことするんだ！ 暴力反対！」<br>「貴様も同じ、@KEIN2@乱暴者ではないか！」<br><br>@STHLOSE@')
            ,
            new SctItm('<br>　何故か、@L_WHAT@の@L_CLASS@達は怒りだした！<br>「相手が悪人だからって乱暴は良くない！」<br>「それで平和になると思うのか！」<br><br>@STHLOSE@')
            ,
            new SctItm('<br>　まだ、@L_WHAT@の@L_CLASS@達の恐怖は収まらない！<br>「正義の味方？ どちらも同じじゃ無いか！」<br>「近づくな！ @KEIN2@乱暴者は出て行け！」<br><br>@STHLOSE@')
            ,
            new SctItm('<br>　だが、@L_WHAT@の@L_CLASS@達は疑っている！<br>「今の戦い方は本気じゃないな？」<br>「お前ら、絶対にグルだろう！」<br>「そうやって、報酬を後で山分けする気だな！」<br><br>@STHLOSE@')
        ]
    }
}


// END:ヒーロー追放
class selector_storyHLose extends SctItm_Selector implements ISctItm_Selector {
    constructor(){
        super('@STHLOSE@');
        this.itms = [
            new SctItm('　@L_HEROFULLNAME@は@L_WHAT@から追い出された！<br>「私は何のために戦っているんだ・・・」<br><br>　@HEROCATCH@@L_HERONAME@！<br>　@HEROCATCH@@L_HERONAME@！<br>　正義はいつか認められるさ！<br><p style="text-align: right">(つづく)</p>')
            ,
            new SctItm('　@L_HEROFULLNAME@は@L_WHAT@を黙って後にした。<br>「これでいいんだ・・・もう戦いの時代は終わったんだ・・・」<br><br>　@HEROCATCH@@L_HERONAME@！<br>　@HEROCATCH@@L_HERONAME@！<br>　鍛えた体は裏切らないぞ！<br><p style="text-align: right">(つづく)</p>')
            ,
            new SctItm('　――@L_HEROFULLNAME@は行き場を失った。<br>「次は@CLASS@に転職するかな・・・」<br><br>　@HEROCATCH@@L_HERONAME@！<br>　@HEROCATCH@@L_HERONAME@！<br>　@CLASS@も悪くないぞ！<br><p style="text-align: right">(つづく)</p>')
            ,
            new SctItm('　@L_WHAT@から追われた@L_HEROFULLNAME@を待っていたのは、かつてのライバル、@L_EVILFULLNAME@であった。<br>「もう終わったんだ。俺達の時代は」「ああ、そうだな――」<br>　酒を酌み交わす英雄が二人・・・。<br><br>　@HEROCATCH@@L_HERONAME@！<br>　@HEROCATCH@@L_EVILNAME@！<br>　プロレス界が君達を待っている！<br><p style="text-align: right">(つづく)</p>')
            ,
            new SctItm('　@L_CLASS@から追いやられた@L_HEROFULLNAME@の側に、もはや敵ではなくなった、@L_EVILFULLNAME@の姿があった。<br>「――判ったか？ 俺達のすべきことが」「ああ、そうだな――」<br>　勇者の手に、@KEIDP@も@KEIN2@武器が手渡されていた。<br><br>　@HEROCATCH@@L_HERONAME@！<br>　@HEROCATCH@@L_EVILNAME@！<br>　世論を敵に回して勝てるのか？<br><p style="text-align: right">(つづく)</p>')
            ,
            new SctItm('　荷物をかかえて@L_WHAT@を後にする@L_HEROFULLNAME@を、ジッと見守る@L_EVILFULLNAME@の姿。<br>　これが二人の愛が始まる瞬間であった――。<br><br>　@HEROCATCH@@L_HERONAME@！<br>　@HEROCATCH@@L_EVILNAME@！<br>　プロポーズまで先は長いぞ！<br><p style="text-align: right">(つづく)</p>')
            ,
            new SctItm('　やがて、火の海と化した@L_WHAT@を後にする@L_HEROFULLNAME@の姿があった。<br>いったい何があったのか？<br>（誰も、俺の気持ちを判ってくれない・・・）<br>　そんな彼を出迎えたのは、永遠のライバル、@L_EVILFULLNAME@<br>　二人は改めて向き直る。さあ、続きをしようじゃないか――。<br><br>　@HEROCATCH@@L_HERONAME@！<br>　@HEROCATCH@@L_EVILNAME@！<br>　所詮は、血塗られた道なのだ！<br><p style="text-align: right">(つづく)</p>')
        ]
    }
}




// 01:住人攻撃
class selector_storyC01 extends SctItm_Selector implements ISctItm_Selector {
    constructor(){
        super('@STC01@');
        this.itms = [
            new SctItm('　狼狽える@L_HEROJOB@@L_HEROTYPE@、しかし@L_CLASS@達は容赦なく、<br>「思い知れ！ 必殺・@CLASSATTACK@」<br>@STH05@')
            ,
            new SctItm('　@L_HERONAME@は言い訳するが、@L_CLASS@達は問答無用、<br>「謝罪しろ！ 秘技・@CLASSATTACK@」<br>@STH05@')
            ,
            new SctItm('　思わず逃げ出そうとする@L_HERONAME@を、@L_CLASS@達は取り囲み、<br>「落ちぶれてしまえ！ 奥義・@CLASSATTACK@」<br>@STH05@')
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
        ]
    }
}

class selector_heroattack extends SctItm_Selector implements ISctItm_Selector {
    constructor(){
        super('@HEROATTACK@');
        this.itms = [
            new SctItm('@L_HEROJOB@パンチ！')
            ,
            new SctItm('@L_HEROJOB@キック！')
            ,
            new SctItm('@L_HEROJOB@チョップ！')
            ,
            new SctItm('@L_HEROJOB@光線！')
            ,
            new SctItm('@L_HEROJOB@レーザー！')
            ,
            new SctItm('@L_HEROJOB@ビーム！')
            ,
            new SctItm('@L_HEROJOB@ミサイル！')
            ,
            new SctItm('@L_HEROJOB@トマホーク！')
            ,
            new SctItm('@L_HEROJOB@カッター！')
            ,
            new SctItm('@L_HEROJOB@ブーメラン！')
        ]
    }
}

class selector_classattack extends SctItm_Selector implements ISctItm_Selector {
    constructor(){
        super('@CLASSATTACK@');
        this.itms = [
            new SctItm('@L_CLASS@シュプレヒコール！')
            ,
            new SctItm('@L_CLASS@集団訴訟！')
            ,
            new SctItm('@L_CLASS@リツイート！')
            ,
            new SctItm('@L_CLASS@デモ行進！')
            ,
            new SctItm('@L_CLASS@不買運動！')
        ]
    }
}

class locker_boy extends SctItm_SelectLocker implements ISctItm_Selector{
    constructor(){
        super('@L_BOY@');
        this.Add(itms_boyName);
    }
}
class locker_girl extends SctItm_SelectLocker implements ISctItm_Selector{
    constructor(){
        super('@L_GIRL@');
        this.Add(itms_girlName);
    }
}

class Onetime_doing extends SctItm_OneTimeLocker implements ISctItm_Selector{
    constructor(){
        super('@O_DOING@');
        this.Add(itms_doing_o);
    }
}

class selector_boyfirst extends SctItm_Selector implements ISctItm_Selector {
    constructor(){
        super('@BOY_FIRST@');
        this.itms = [
            new SctItm('「やあ、@KEIP2@@L_GIRL@。今日は@KEIP2@@O_DOING@いるんだね？」')
            ,
            new SctItm('「おやおや、@KEIP2@@L_GIRL@。どうして@KEIP2@@O_DOING@るんだい？」')
            ,
            new SctItm('「だめだよ、@KEIP2@@L_GIRL@。そんな@KEIP2@@O_DOING@はいけないと言っただろう」')
            ,
            new SctItm('「ああ、@KEIP2@@L_GIRL@。キミはいつも@KEIP2@@O_DOING@いるんだね」')
            ,
            new SctItm('「今日も@KEIP2@@L_GIRL@は@KEIP2@のに、どうして@KEIP2@@O_DOING@いるのかい？」')
        ]
    }
}

class selector_girlnext extends SctItm_Selector implements ISctItm_Selector {
    constructor(){
        super('@GIRL_NEXT@');
        this.itms = [
            new SctItm('「あら、@KEIN2@@L_BOY@。私はそんな@KEIN2@@O_DOING@なんかいないわ。@KEIN2@@O_DOING@いるだけよ」')
            ,
            new SctItm('「@L_BOY@ったら@KEIN2@人ね。私は@KEIN2@@O_DOING@いるんじゃなくて、@KEIN2@@O_DOING@いるのよ」')
            ,
            new SctItm('「そうよ、@KEIN2@@L_BOY@。私が@KEIN2@@O_DOING@いないと、あなたが@KEIN2@@O_DOING@しまうから」')
            ,
            new SctItm('「@L_BOY@は@KEIN@わね。 私は@KEIN2@@O_DOING@いないと、@KEIN2@@O_DOING@しまうと前に言ったわよね？」')
            ,
            new SctItm('「私が@KEIN2@@O_DOING@いると、どうして@KEIN2@@L_BOY@は@KEIN2@@O_DOING@いるの？」')
            ,
            new SctItm('「@KEIN2@@L_BOY@が@KEIN2@@O_DOING@くれないからよ。私は@KEIN2@@O_DOING@みたいのに」')
            ,
            new SctItm('「こうして@KEIN2@@O_DOING@いると、@KEIN2@@O_DOING@いた@KEIN2@@L_BOY@の@KEIN2@@PART@を思い出すわね」')
            ,
            new SctItm('「@KEIN2@@L_BOY@？ 私が@KEIN2@@O_DOING@しまうまで、代わりに@KEIDN2@@O_DOING@くれないかしら」')
            ,
            new SctItm('「それなら、@KEIN2@@L_BOY@も一緒に@KEIN2@@O_DOING@いる筈だったのに、どうして@KEIN2@@O_DOING@いるの？ 」')
            ,
            new SctItm('「@KEIN2@@L_BOY@は知ってる？ 以前、@KEIN2@@O_DOING@いた私の@KEIN2@@PART@が、今は@KEIN2@@O_DOING@いるんですって」')
            ,
            new SctItm('「なら、@KEIN2@@L_BOY@が@KEIN2@@O_DOING@みればいいわ。私が@KEIN2@@O_DOING@もいいから」')
            ,
            new SctItm('「ねえ、@KEIN2@@L_BOY@も一緒に@KEIN2@@O_DOING@くれない？ そのかわり、私が@KEIN2@@O_DOING@もいいから」')
            ,
            new SctItm('「私が@KEIN2@@O_DOING@いても、@KEIN2@@L_BOY@は@KEIN2@@O_DOING@ばかりいるのね」')
            ,
            new SctItm('「@KEIN2@@L_BOY@は、私が@KEIN2@@O_DOING@いると、どうして@KEIN2@@O_DOING@いるの」')
            ,
            new SctItm('「じゃあ、@KEIN2@@L_BOY@も一緒に@KEIN2@@O_DOING@くれない？ @KEIN2@@O_DOING@ばかりいないで」')
            ,
            new SctItm('「でも、先に@KEIN2@@O_DOING@から、@KEIN2@@O_DOING@、それから――ねえ@KEIN2@@L_BOY@、聞いてるの？」')
            ,
            new SctItm('「だから、@KEIN2@@L_BOY@は@KEIN2@のよ。@KEIN2@@O_DOING@、次は@KEIN2@@O_DOING@しまわないと」')
            ,
            new SctItm('「それで@KEIN2@@L_BOY@は、昨日まで@KEIN2@@O_DOING@た筈なのに、今日は@KEIN2@@O_DOING@いるのね」')
        ]
    }
}

class selector_boynext extends SctItm_Selector implements ISctItm_Selector {
    constructor(){
        super('@BOY_NEXT@');
        this.itms = [
            new SctItm('「でも、@KEIP2@@L_GIRL@が@O_DOING@いると、僕は@KEIP2@@O_DOING@しまうんだ」')
            ,
            new SctItm('「ねえ、@KEIP2@@L_GIRL@。僕が@KEIP2@@O_DOING@いるのは、君も一緒に@KEIP2@@O_DOING@欲しいからなんだ」')
            ,
            new SctItm('「それじゃあ、@KEIP2@@L_GIRL@が@KEIP2@@O_DOING@、僕は@KEIP2@@O_DOING@いればいいと言うのかい？」')
            ,
            new SctItm('「@KEIP2@@L_GIRL@、@KEIP2@@O_DOING@ばかりいると、僕は@KEIP2@@O_DOING@しまいたくなる」')
            ,
            new SctItm('「僕は、@KEIP2@@L_GIRL@が@KEIP2@@O_DOING@いると、自分が@KEIP2@@O_DOING@いた頃を思い出してしまうんだ」')
            ,
            new SctItm('「確か、@KEIP2@@L_GIRL@が@KEIP2@@O_DOING@いたのは、僕が@KEIP2@@O_DOING@いた頃だったよね」')
            ,
            new SctItm('「でも、僕は@KEIP2@@O_DOING@いるより、@KEIP2@@O_DOING@いる@KEIP2@@L_GIRL@の方が好きなんだ」')
            ,
            new SctItm('「そういえば、僕が@KEIP2@@O_DOING@いると、いつも@KEIP2@@L_GIRL@は@KEIP2@@O_DOING@いたね」')
            ,
            new SctItm('「じゃあ、僕が@KEIP2@@O_DOING@、@KEIP2@@L_GIRL@は@KEIP2@@O_DOING@みるのはどうだい？」')
            ,
            new SctItm('「@KEIP2@@L_GIRL@は@KEIP2@@O_DOING@いるより、@KEIP2@@O_DOING@いた方が@KEIP3@な」')
            ,
            new SctItm('「@KEIP2@@O_DOING@も仕方ないよ。僕は@KEIP2@@L_GIRL@とこうして@KEIP2@@O_DOING@いたいんだ」')
            ,
            new SctItm('「僕は@KEIP2@@O_DOING@いるより、@KEIP2@@L_GIRL@と@KEIP2@@O_DOING@いる方が@KEIP3@な」')
            ,
            new SctItm('「@KEIP2@@O_DOING@いる@KEIP2@@L_GIRL@は、@KEIP2@@O_DOING@いた@KEIP2@@PART@にそっくりだよね」')
            ,
            new SctItm('「@KEIP2@@O_DOING@いる@KEIP2@@L_GIRL@は@GRADE@@KEIP3@けど、@KEIP2@@O_DOING@いる@KEIP2@@L_GIRL@も@KEIP3@よね」')
            ,
            new SctItm('「最近、@KEIP2@@L_GIRL@は@KEIP2@@O_DOING@ばかりいるから、たまには@KEIP2@@O_DOING@みたらどうかと思ってさ」')
        ]
    }
}


class selector_myst extends SctItm_Selector implements ISctItm_Selector {
    constructor(){
        super('@MYST@');
        this.itms = [
            new SctItm('@MYST01@<br><br>@MYST_ACT@<br><br>@MYST_REACT@<br><br>@MYST_SPOT@<br><br>')
        ]
    }
}
class selector_myst01 extends SctItm_Selector implements ISctItm_Selector {
    constructor(){
        super('@MYST01@');
        this.itms = [
            new SctItm('　今日も@MYST_STAGE@<br>@MYST_ST_AP@<br>@MYST_APP@')
            ,
            new SctItm('@MYST_APP@<br>@MYST_AP_ST@@MYST_STAGE@')
        ]
    }
}


class selector_mystStage extends SctItm_Selector implements ISctItm_Selector {
    constructor(){
        super('@MYST_STAGE@');
        this.itms = [
            new SctItm('@L_WHAT@の@KEI_B2@@L_LANDMARK@では、@KEI_B2@@L_CLASS@達が、@ALSODAY@@KEID_B@@KEID_B@@DOING@暮らしている。')
            ,
            new SctItm('@KEI_B2@@L_WHAT@が誇る@L_LANDMARK@では、@KEI_B2@@L_CLASS@達が、@ALSODAY@@KEID_B@@KEID_B@@DOING@いる。')
            ,
            new SctItm('@KEI_B2@@L_WHAT@の@L_LANDMARK@には、@ALSODAY@@L_DOING@いる@KEI_B2@@L_CLASS@達の@KEI_B2@姿があった。')
            ,
            new SctItm('@KEI_B2@@L_WHAT@の@L_LANDMARK@では、@KEI_B2@@L_CLASS@達が、@ALSODAY@@DOING@@KEID_B@過ごしていた。')
            ,
            new SctItm('@L_WHAT@の@L_LANDMARK@は@GRADE@@KEID_B@@KEID_B@、@KEI_B2@@L_CLASS@達が集う@KEI_B2@空間が広がっている。')
            ,
            new SctItm('@L_LANDMARK@では@KEI_B2@@KEY@が開催され、@KEI_B2@@L_CLASS@達が@GRADE@賑わっていた。')
        ]
    }
}
class selector_mystSt_AP extends SctItm_Selector implements ISctItm_Selector {
    constructor(){
        super('@MYST_ST_AP@');
        this.itms = [
            new SctItm('そこに、場違いにも@KEI_A2@二人組が現れた。')
            ,
            new SctItm('そこに、不思議と@KEI_A2@会話が聞こえてくる。')
            ,
            new SctItm('そこに訪れたのは、何故か@KEI_A2@二人組。')
            ,
            new SctItm('そんな@KEI_B2@@L_LANDMARK@に、@GRADE@@KEI_A2@二人が訪れた。')
            ,
            new SctItm('そんな@KEI_B2@@L_LANDMARK@に導かれたのは、@ALSODAY@@KEI_A2@この二人。')
            ,
            new SctItm('そんな@KEI_B2@@L_CLASS@達をかきわけ、@ALSODAY@@KEI_A2@二人の登場である。')
        ]
    }
}
class selector_mystApp extends SctItm_Selector implements ISctItm_Selector {
    constructor(){
        super('@MYST_APP@');
        this.itms = [
            new SctItm('「ここは@GRADE@@KEI_B2@ところですねぇ@L_BOSSNAME@@L_BOSS@？」<br>「そうだね@L_ASS@の@L_GIRL@君、@GRADE@@KEI_B2@ところだね」')
            ,
            new SctItm('「あの@KEI_B2@ものはなんですか@L_BOSSNAME@@L_BOSS@？」<br>「いやあ、@GRADE@@KEID_B@て判らないよ@L_ASS@の@L_GIRL@君」')
            ,
            new SctItm('「おやおや、@GRADE@@KEI_B2@ところに来ちゃいましたよ@L_BOSSNAME@@L_BOSS@？」<br>「こりゃまた@GRADE@@KEID_B@て@KEI_B2@ところだね、@L_ASS@の@L_GIRL@君」')
            ,
            new SctItm('「あの人、@GRADE@@KEI_B@ですねぇ@L_BOSSNAME@@L_BOSS@？」<br>「おいおい、そんな@KEI_B2@こと言っちゃダメだよ@L_ASS@の@L_GIRL@君」')
            ,
            new SctItm('「うわぁ、なんて@KEI_B2@んでしょう。見てくださいよ、@L_BOSSNAME@@L_BOSS@？」<br>「そうだね、@L_ASS@の@L_GIRL@君。やはり@L_WHAT@は@KEI_B3@ねぇ」')
            ,
            new SctItm('「ほら、あの@KEI_B2@@L_CLASS@達を見て下さいよ@L_BOSSNAME@@L_BOSS@」<br>「そうだね、さすが@L_WHAT@の@L_CLASS@達は@KEI_B3@ねぇ@L_ASS@の@L_GIRL@君」')
            ,
            new SctItm('「ちょっとぉ！ そんなに@DOING02@ちゃだめですよ@L_BOSSNAME@@L_BOSS@！」<br>「いやいや@L_ASS@の@L_GIRL@君、@L_WHAT@の@L_LANDMARK@は@KEI_B3@から、つい――」')
            ,
            new SctItm('「いやあ、@L_WHAT@は相変わらず@KEI_B3@ね、@L_ASS@の@L_GIRL@君」<br>「そうですね、@L_WHAT@の人は@KEI_B@ですからね、@L_BOSSNAME@@L_BOSS@」')
            ,
            new SctItm('「@L_WHAT@の@LANDMARK@って、@GRADE@@KEI_B3@ね、@L_ASS@の@L_GIRL@君」<br>「だから、ここは@L_LANDMARK@ですってば、@L_BOSSNAME@@L_BOSS@」')
            ,
            new SctItm('「@L_WHAT@の@L_CLASS@達は、@KEI_B2@人ばかりだね、@L_ASS@の@L_GIRL@君」<br>「いつも@DOING02@ますからね、@L_BOSSNAME@@L_BOSS@」')
            ,
            new SctItm('「@L_ASS@の@L_GIRL@君、この@KEI_B2@@L_LANDMARK@がそうなのかい？」<br>「はい。間違いありません、@L_BOSSNAME@@L_BOSS@」')
            ,
            new SctItm('「油断するな、@L_ASS@の@L_GIRL@君。つけられているぞ」<br>「それは気のせいです、@L_BOSSNAME@@L_BOSS@」')
        ]
    }
}

class selector_mystAP_ST extends SctItm_Selector implements ISctItm_Selector {
    constructor(){
        super('@MYST_AP_ST@');
        this.itms = [
            new SctItm('――そんな@KEI_A2@二人組が訪れた')
            ,
            new SctItm('――そんな場違いにも@KEI_A2@会話が聞こえてくる')
            ,
            new SctItm('――そんな@KEI_A2@二人がやってきた')
            ,
            new SctItm('――そんな@KEI_A2@二人のことはさておいて、')
            ,
            new SctItm('――そんな@KEI_A2@二人組に構うことなく、')
            ,
            new SctItm('――相も変わらず@KEI_A2@二人が参上した')
        ]
    }
}
class selector_mystAccident extends SctItm_Selector implements ISctItm_Selector {
    constructor(){
        super('@MYST_ACT@');
        this.itms = [
            new SctItm('　そんな@KEI_B2@@L_LANDMARK@を切り裂くような、@KEI_A2@悲鳴が響き渡った！<br>「ぎゃああああっ！」')
            ,
            new SctItm('　そんな@KEI_B2@@L_LANDMARK@を揺るがす、@KEID_A@@KEI_A2@事件が巻き起こった！<br>「ひぃぃぃぃっ！！」')
            ,
            new SctItm('　そんなある時、引き裂くような@KEI_A2@悲鳴に、@KEI_B2@@L_CLASS@達は一斉に振り返った！<br>「きゃあああああっ！！」')
            ,
            new SctItm('　そんな@KEI_A2@二人を尻目に、耳を貫くほどの@KEI_A2@悲鳴が響き渡った！<br>「うわぁぁぁぁぁっ！！」')
            ,
            new SctItm('　次の瞬間、全てを揺るがす@KEI_A2@悲鳴が！<br>「あああああっ！！」')
            ,
            new SctItm('　その時！ いったい何をしくじったのか、世界を揺るがす絶望感！<br>「しまったあああっ！！」')
            ,
            new SctItm('　その時、そこの居る全ての@KEI_B2@@L_CLASS@達は凍り付く。この@KEI_B2@世界の全てを拒絶する拒否反応！<br>「嫌だあああああああっ！！」')
        ]
    }
}

class selector_mystReaction extends SctItm_Selector implements ISctItm_Selector {
    constructor(){
        super('@MYST_REACT@');
        this.itms = [
            new SctItm('「@L_BOSSNAME@@L_BOSS@！ あの悲鳴は！」<br>「よし、行ってみるぞ@L_GIRL@君！」')
            ,
            new SctItm('「いったい何事だ？ @L_GIRL@君！」<br>「行きましょう@L_BOSSNAME@@L_BOSS@！」')
            ,
            new SctItm('「――どうやら我々の出番のようだね、@L_GIRL@君」<br>「はい、@L_BOSS@」')
            ,
            new SctItm('「もしや@L_BOSS@、今のが？」<br>「ああ、予告通りだね、@L_GIRL@君」')
            ,
            new SctItm('「@L_BOSS@、もしや！？」<br>「しまった！ 間に合わなかったか！」')
            ,
            new SctItm('「@L_BOSS@、今のが・・・・・」<br>「うむ。伝承の通りだ、@L_GIRL@君」')
            ,
            new SctItm('「事件だぞ@L_GIRL@君！ ――って、こらこら！ @DOING02@いる場合じゃないぞ！」<br>「えっ！？ は、はい、@L_BOSS@！」')
            ,
            new SctItm('「ちょ、ちょっと@L_BOSSNAME@@L_BOSS@！ 事件みたいですよ@L_BOSS@！！」<br>「待ってくれ@L_GIRL@君、この@DOING02@から――」<br>「@L_BOSS@！ そんなの後にして下さい！」<br>「わ、判った判った――」')
            ,
            new SctItm('「行ってみましょう！ ――って、@L_BOSS@？ どこ行ったんですか@L_BOSS@！」<br>「――ああ、ここだよ@L_GIRL@君」<br>「もう！ 早くして下さい@L_BOSS@！」<br>「わ、判ったよ@L_GIRL@君」')
            ,
            new SctItm('「よし、行ってみよう！ ――おや、何処だね@L_GIRL@君？」<br>「――は、はい！ここです@L_BOSS@！ 」<br>「なにやってるんだ。ほら、行くよ@L_GIRL@君！」<br>「ま、待って下さい@L_BOSS@！」')

        ]
    }
}

// SPOT -> Res01 / Res02
class selector_mystSpot extends SctItm_Selector implements ISctItm_Selector {
    constructor(){
        super('@MYST_SPOT@');
        this.itms = [
            new SctItm('　@KEI_B2@@L_LANDMARK@の@GRADE@@KEI_A2@現場では、いまだ@KEID_A@@KEI_A2@遺体を中心に、尚も@KEI_B2@@L_CLASS@達の怒号に近い@KEI_B2@悲鳴が飛び交っていた。<br>@MYST_RES01@')
            ,
            new SctItm('　@KEI_B2@@L_LANDMARK@の事故現場には、@MANY@@L_CLASS@達が野次馬となって集まり、その中心に殺された@KEI_A2@@L_CLASS@が倒れていた。<br>@MYST_RES01@')
            ,
            new SctItm('　@KEI_B2@@L_LANDMARK@の事故現場には、今正に殺された@KEI_A2@@L_CLASS@の遺体。辺りには、そしらぬ@KEI_B2@顔で行き交い、@L_DOING@いる@KEI_B2@@L_CLASS@達の姿。<br>@MYST_RES01@')
            ,
            new SctItm('　駆けつけた@KEI_B2@現場には、一人の@KEI_A2@@L_CLASS@の遺体が、今正に悲鳴を上げて殺されたままの姿で残されていた。それを見守る@MANY@@KEI_B2@@L_CLASS@達。<br>@MYST_RES01@')
            ,
            new SctItm('　駆けつけると現場には被害者らしき姿は無く、ただし、まだ新しい血痕と、なんとも@KEI_A2@気配。周囲には何があったのかと@KEI_B2@顔を見合わせる@MANY@@KEI_B2@@L_CLASS@達。<br>@MYST_RES02@')
            ,
            new SctItm('　駆けつけた二人は困惑する。確かに@KEI_A2@悲鳴が上がった現場には何も見当たらない。ただ、何故だか@KEI_A2@空気と、@KEI_B2@顔つきをした@MANY@@L_CLASS@達が残されていた。<br>@MYST_RES02@')
        ]
    }
}

class selector_mystRes01 extends SctItm_Selector implements ISctItm_Selector {
    constructor(){
        super('@MYST_RES01@');
        this.itms = [
            new SctItm('「@L_BOSSNAME@@L_BOSS@、これは@GRADE@@KEI_A2@遺体ですね」<br>「――成る程。では聞き込みをしよう、@L_GIRL@君」<br>「了解です、@L_BOSS@」')
            ,
            new SctItm('「@L_BOSSNAME@@L_BOSS@。遺体だけで証拠が見当たりません」<br>「これは、どうも@GRADE@@KEI_A2@事件だな、@L_GIRL@君」<br>「では聞き取り調査をしてみましょう、@L_BOSS@」')
            ,
            new SctItm('「@L_BOSSNAME@@L_BOSS@。@KEI_A2@遺体だけで証拠が――って、@L_BOSS@？ 聞いてます？」<br>「あ、ああ、そうだね。では容疑者を絞るか、@L_GIRL@君」<br>「――はい、@L_BOSS@」')
            ,
            new SctItm('「証拠らしい証拠も出てこないね、@L_GIRL@君」<br>「@L_BOSS@――なんというか@GRADE@@KEI_A2@感じがしませんか」<br>「ふむ、では目撃者はいないか聞いて見よう@L_GIRL@君」<br>「判りました、@L_BOSS@」')
            ,
            new SctItm('「@L_GIRL@君、この@GRADE@@KEI_A2@遺体の他は証拠も何もなさそうだね」<br>「・・・・・・」<br>「――@L_GIRL@君？」<br>「あ、は、はい、@L_BOSS@」<br>「聞き込みをするよ、@L_ASS@の@L_GIRL@君」<br>「はい、@L_BOSSNAME@@L_BOSS@」')
        ]
    }
}
class selector_mystRes02 extends SctItm_Selector implements ISctItm_Selector {
    constructor(){
        super('@MYST_RES02@');
        this.itms = [
            new SctItm('「@L_BOSS@、ここが現場・・・・・・だと思うのですけど」<br>「うーむ、その辺にいる@KEI_B2@人達にきいてみよう、@L_GIRL@君」<br>「ちょ、ちょっと聞こえますよ、@L_BOSS@」')
            ,
            new SctItm('「さっきの悲鳴はこの辺りですよね、@L_BOSS@」<br>「おかしい。ここから逃げ去った様子も無いな」<br>「@L_BOSS@、あの@KEI_B2@人達に聞いて見ます？」<br>「@L_GIRL@君、本人の前では言わないでね・・・」')
            ,
            new SctItm('「@L_ASS@の@L_GIRL@君、ここが本当に現場なのか？」<br>「はい、@L_BOSS@。確かにこの辺りから悲鳴が――」<br>「仕方ない。その辺の人に聞いて見てくれ、@L_GIRL@君」<br>「あの@KEI_B2@人達ですか？ 嫌だなあ・・・」')
            ,
            new SctItm('「@L_GIRL@君、取り逃がしたか？」<br>「見失いましたね、@L_BOSS@」<br>「この@KEI_B2@界隈じゃ追うのは大変だぞ、@L_GIRL@君」<br>「とりあえず地道に尋ね歩いてみましょう、@L_BOSS@」')
            ,
            new SctItm('「あれ？ もう現場を片付けちゃったのかな、@L_GIRL@君」<br>「もう！ @L_BOSS@がボヤボヤしてるからですよ！」<br>「こんな@KEI_B2@@L_LANDMARK@じゃ不案内だし、どうしようか@L_GIRL@君」<br>「聞いて見るしかないでしょう、@L_BOSS@」')
        ]
    }
}

class selector_mystHealingB extends SctItm_Selector implements ISctItm_Selector {
    constructor(){
        super('@MYST_HEAR_B@');
        this.itms = [
            new SctItm('――@KEI_B2@@L_CLASS@の@NAME@@AGE@は一言、<br>「さあ？」')
            ,
            new SctItm('――@KEI_B2@@L_CLASS@の@NAME@@AGE@曰く、<br>「いやあ、@DOING02@て気付かなかったっすよ」')
            ,
            new SctItm('――@KEI_B2@@L_CLASS@の@NAME@@AGE@が言うには、<br>「そういや、昨日も@NUM10@人ぐらいヤられてましたね」')
            ,
            new SctItm('――@KEI_B2@@L_CLASS@の@NAME@@AGE@は退屈そうに、<br>「@L_WHAT@じゃよくあることだから」')
            ,
            new SctItm('――@KEI_B2@@L_CLASS@の@NAME@@AGE@の談、<br>「ああ、@LANDMARK@ならあっちですよ」')
            ,
            new SctItm('――@KEI_B2@@L_CLASS@の@NAME@@AGE@はすっとぼけて、<br>「そこにいる@L_CLASS@に聞いて下さい」')
            ,
            new SctItm('――@KEI_B2@@L_CLASS@の@NAME@@AGE@は@RIDE@に飛び乗り、<br>「それじゃ急ぐんで」')
            ,
            new SctItm('――@KEI_B2@@L_CLASS@の@NAME@@AGE@は目も合わさず、<br>「ほら、邪魔だから、どいてどいて」')
        ]
    }
}
class selector_mystHealingA extends SctItm_Selector implements ISctItm_Selector {
    constructor(){
        super('@MYST_HEAR_A@');
        this.itms = [
            new SctItm('――@KEI_A2@@L_CLASS@の@NAME@@AGE@の答えは、<br>「さっきまで@L_DOING@いた人でしょう？ どうかしたんですかね」')
            ,
            new SctItm('――@KEI_A2@@L_CLASS@の@NAME@@AGE@は質問で返す。<br>「さあ――あんたなら、どう思います？」')
            ,
            new SctItm('――@KEI_A2@@L_CLASS@の@NAME@@AGE@は遠い目で、<br>「ああ、あの@KEI_B2@人ですよね。可哀相に・・・」')
            ,
            new SctItm('――@KEI_A2@@L_CLASS@の@NAME@@AGE@は溜息交じりに、<br>「怖いですよね。@KEI_B2@人って――」')
            ,
            new SctItm('――@KEI_A2@@L_CLASS@の@NAME@@AGE@は空を仰いで、<br>「いや、@DOING02@いましたから。私は」')
        ]
    }
}

class selector_mystEnd01 extends SctItm_Selector implements ISctItm_Selector {
    constructor(){
        super('@MYST_END01@');
        this.itms = [
            new SctItm('　彼ら@L_CLASS@達の証言から何も掴めず、困り果てる@KEI_A2@二人。')
            ,
            new SctItm('　溜息をつく@L_BOSS@を、@L_ASS@の@L_GIRL@は黙って見守る。どうやら結論は見出せないようだ。')
            ,
            new SctItm('　淡々と証言を聞き流した@L_BOSS@の@KEI_A2@顔つきを、いぶかしんで見つめる@L_ASS@の@L_GIRL@。果たして、真相に近づくつもりはあるのか、と。')
            ,
            new SctItm('　@L_ASS@の@L_GIRL@は@KEI_A2@顔つきで肩をすくめる。ああ、その通りだと、@L_BOSSNAME@@L_BOSS@は@KEI_A2@顔つきで頷いた。')
            ,
            new SctItm('　何故か顔を背ける@L_ASS@の@L_GIRL@を、@L_BOSSNAME@@L_BOSS@はチラリと見た。判って居るぞ、と言いたげに。')
        ]
    }
}
class selector_mystEnd02 extends SctItm_Selector implements ISctItm_Selector {
    constructor(){
        super('@MYST_END02@');
        this.itms = [
            new SctItm('「行くか、@L_GIRL@君。そもそも証拠が無ければ、どうしようもない」<br>「はい、@L_BOSS@――」')
            ,
            new SctItm('「こんな@KEI_B2@証言だけじゃどうしようもないね、@L_GIRL@君」<br>「では、退散しますか、@L_BOSS@」<br>「ああ、@L_WHAT@の警察に任せよう――」')
            ,
            new SctItm('「これだけ@KEI_A2@事件が起こったというのに、ここの@KEI_B2@連中ときたら――どう思うかね、@L_GIRL@君」<br>「ここは本当に@KEI_B2@ところですねぇ@L_BOSS@」<br>「では、退散だ。メシはここを出てからにしよう」<br>「そうですね」')
            ,
            new SctItm('「@L_GIRL@君はどう思う？」<br>「いえ@L_BOSS@、@KEI_B2@証言ばかりで、なんとも」<br>「そうかね？ もう答えは出ているぞ、@L_GIRL@君」<br>「――ええ！？」')
            ,
            new SctItm('「やはり何も出てこないか、@L_GIRL@君」<br>「@L_BOSS@、それでは」<br>「ああ、間違いない。奴が――」')
            ,
            new SctItm('「どうだ、@L_GIRL@君」<br>「それでは・・・5分お待ちください@L_BOSS@」<br>「頼むぞ、@L_GIRL@君」')
            ,
            new SctItm('「@L_BOSS@、取り調べはこのくらいで？」<br>「ああ、現地の警察に伝えておきたまえ、@L_GIRL@君」<br>「了解です。@L_BOSS@」<br>「では、次のターゲットを・・・」')
            ,
            new SctItm('「@L_BOSS@、これで証言は終わりですが」<br>「いや、最後の一人が残って居るぞ、@L_GIRL@君」<br>「え？」<br>「@L_GIRL@君、そこにかけたまえ」')
            ,
            new SctItm('「何か判りましたか、@L_BOSS@」<br>「いやあ、これじゃお手上げだよ、@L_GIRL@君」<br>「そうですか。では@L_BOSS@にお聴きしたいことが」<br>「@L_GIRL@君・・・なんだ、その@KEI_A2@目つきは」')
            ,
            new SctItm('「@L_BOSS@、それでは？」<br>「ああ、@L_GIRL@君。恐らく犯人は――ぐふっ！」<br>「@L_BOSS@？ @L_BOSS@ッ！！」')
        ]
    }
}


class locker_lovepic extends SctItm_SelectLocker implements ISctItm_Selector{
    constructor(){
        super('@L_LOVEPIC@','','@PIC_LOVE@');
        this.Add(itms_lovepic);
    }
}
class locker_heropic extends SctItm_SelectLocker implements ISctItm_Selector{
    constructor(){
        super('@L_HEROPIC@');
        this.Add(itms_heropic);
    }
}
class locker_mystpic extends SctItm_SelectLocker implements ISctItm_Selector{
    constructor(){
        super('@L_MYSTPIC@','','@PIC_MYST@');
        this.Add(itms_mystpic);
    }
}

// 出版元（画像未設定の解消のため）
class selector_bookmaker extends SctItm_Selector implements ISctItm_Selector {
    constructor(){
        super('@BOOKMAKER@');
        this.itms = [
            new SctItm('㈱@L_WHAT@出版')
            ,
            new SctItm('㈱@L_WHAT@文庫')
            ,
            new SctItm('㈱@L_WHAT@印刷')
            ,
            new SctItm('@L_WHAT@書房')
            ,
            new SctItm('@L_WHAT@書院')
            ,
            new SctItm('㈱@L_WHAT@文芸')
            ,
            new SctItm('@L_WHAT@学院')
            ,
            new SctItm('@L_WHAT@株式会社')
            ,
            new SctItm('@L_WHAT@財団')
        ];
    }
}

class selector_lovemaker extends SctItm_Selector implements ISctItm_Selector {
    constructor(){
        super('@LOVEMAKER@');
        this.itms = [
            new SctItm('㈱@L_LOVEPIC@出版')
            ,
            new SctItm('㈱@L_LOVEPIC@文庫')
            ,
            new SctItm('㈱@L_LOVEPIC@印刷')
            ,
            new SctItm('@L_LOVEPIC@書房')
            ,
            new SctItm('@L_LOVEPIC@書院')
            ,
            new SctItm('㈱@L_LOVEPIC@文芸')
            ,
            new SctItm('@L_LOVEPIC@学院')
            ,
            new SctItm('@L_LOVEPIC@株式会社')
            ,
            new SctItm('@L_LOVEPIC@財団')
        ];
    }
}


class selector_mystmaker extends SctItm_Selector implements ISctItm_Selector {
    constructor(){
        super('@MYSTMAKER@');
        this.itms = [
            new SctItm('㈱@L_MYSTPIC@出版')
            ,
            new SctItm('㈱@L_MYSTPIC@文庫')
            ,
            new SctItm('㈱@L_MYSTPIC@印刷')
            ,
            new SctItm('@L_MYSTPIC@書房')
            ,
            new SctItm('@L_MYSTPIC@書院')
            ,
            new SctItm('㈱@L_MYSTPIC@文芸')
            ,
            new SctItm('@L_MYSTPIC@学院')
            ,
            new SctItm('@L_MYSTPIC@株式会社')
            ,
            new SctItm('@L_MYSTPIC@財団')
        ];
    }
}

class selector_heromaker extends SctItm_Selector implements ISctItm_Selector {
    constructor(){
        super('@HEROMAKER@');
        this.itms = [
            new SctItm('㈱@L_HEROPIC@出版')
            ,
            new SctItm('㈱@L_HEROPIC@文庫')
            ,
            new SctItm('㈱@L_HEROPIC@印刷')
            ,
            new SctItm('@L_HEROPIC@書房')
            ,
            new SctItm('@L_HEROPIC@書院')
            ,
            new SctItm('㈱@L_HEROPIC@文芸')
            ,
            new SctItm('@L_HEROPIC@学院')
            ,
            new SctItm('@L_HEROPIC@株式会社')
            ,
            new SctItm('@L_HEROPIC@財団')
        ];
    }
}

class locker_boss extends SctItm_SelectLocker implements ISctItm_Selector{
    constructor(){
        super('@L_BOSS@');
        this.Add(itms_boss);
    }
}
class locker_bossName extends SctItm_SelectLocker implements ISctItm_Selector{
    constructor(){
        super('@L_BOSSNAME@');
        this.Add(itms_bossName);
    }
}
class locker_ass extends SctItm_SelectLocker implements ISctItm_Selector{
    constructor(){
        super('@L_ASS@');
        this.Add(itms_ass);
    }
}

class locker_mystTitle extends SctItm_SelectLocker implements ISctItm_Selector{
    constructor(){
        super('@L_MYSTTITLE@');
        this.Add(itms_mystTitle);
    }
}
class locker_mystActName extends SctItm_SelectLocker implements ISctItm_Selector{
    constructor(){
        super('@MYST_ACTNAME@');
        this.Add(itms_mystActName);
    }
}
class locker_mystActPaper extends SctItm_SelectLocker implements ISctItm_Selector{
    constructor(){
        super('@MYST_ACTPAPER@');
        this.Add(itms_mystActPaper);
    }
}

class selector_mystNames extends SctItm_Selector implements ISctItm_Selector {
    constructor(){
        super('@NAME@');
        this.Add(itms_boyName);
        this.Add(itms_girlName);
    }
}



class selector_bookface0 extends SctItm_Selector implements ISctItm_Selector {
    constructor(){
        super('@BOOKFACE0@');
        this.itms = [
            new SctItm('book01')
            ,
            new SctItm('book02')
            ,
            new SctItm('book03')
        ]
    }
}
class selector_bookface1 extends SctItm_Selector implements ISctItm_Selector {
    constructor(){
        super('@BOOKFACE1@');
        this.itms = [
            new SctItm('book04')
            ,
            new SctItm('book05')
            ,
            new SctItm('book06')
        ]
    }
}
class selector_bookface2 extends SctItm_Selector implements ISctItm_Selector {
    constructor(){
        super('@BOOKFACE2@');
        this.itms = [
            new SctItm('book07')
            ,
            new SctItm('book08')
            ,
            new SctItm('book09')
        ]
    }
}

class selector_bookface3 extends SctItm_Selector implements ISctItm_Selector {
    constructor(){
        super('@BOOKFACE3@');
        this.itms = [
            new SctItm('book10')
            ,
            new SctItm('book11')
            ,
            new SctItm('book12')
        ]
    }
}


class book_docs_maker extends news_docs_maker {
    constructor(){
        super();

        this.dic_push(new selector_keiSelector());

        this.dic_push(new selector_bookface0());
        this.dic_push(new selector_bookface1());
        this.dic_push(new selector_bookface2());
        this.dic_push(new selector_bookface3());

        this.dic_push(new selector_bookmaker());
        this.dic_push(new selector_heromaker());
        this.dic_push(new selector_lovemaker());
        this.dic_push(new selector_mystmaker());

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
        this.dic_push(new selector_storyE02());
        this.dic_push(new selector_storyE03());
        this.dic_push(new selector_storyE04());
        this.dic_push(new selector_storyE05());
        this.dic_push(new selector_storyE_C());
        this.dic_push(new selector_storyEEND());
        this.dic_push(new selector_storyH00());
        this.dic_push(new selector_storyH01());
        this.dic_push(new selector_storyH02());
        this.dic_push(new selector_storyH03());
        this.dic_push(new selector_storyH04());
        this.dic_push(new selector_storyH05());
        this.dic_push(new selector_storyHEND());
        this.dic_push(new selector_storyHLose());
        this.dic_push(new selector_storyH_E());
        this.dic_push(new selector_storyH_C());
        this.dic_push(new selector_storyH_C2());
        this.dic_push(new selector_storyC01());
        this.dic_push(new selector_storyCEND());
        this.dic_push(new selector_storySel01());
        this.dic_push(new selector_storySel02());
        this.dic_push(new selector_storySel03());
        this.dic_push(new selector_evilattack());
        this.dic_push(new selector_heroattack());
        this.dic_push(new selector_classattack());
        this.dic_push(new locker_boy());
        this.dic_push(new locker_girl());

        this.dic_push(new locker_heropic());
        this.dic_push(new locker_lovepic());
        this.dic_push(new locker_mystpic());

        this.dic_push(new OneTime_food());
        this.dic_push(new OneTime_livestock());
        this.dic_push(new OneTime_fish());
        this.dic_push(new Onetime_doing());

        this.dic_push(new selector_boyfirst());
        this.dic_push(new selector_boynext());
        this.dic_push(new selector_girlnext());

        this.dic_push(new locker_boss());
        this.dic_push(new locker_bossName());
        this.dic_push(new locker_ass());
        this.dic_push(new locker_mystTitle());
        this.dic_push(new locker_mystActName());
        this.dic_push(new locker_mystActPaper());

        this.dic_push(new selector_myst01());
        this.dic_push(new selector_mystSt_AP());
        this.dic_push(new selector_mystStage());
        this.dic_push(new selector_mystApp());
        this.dic_push(new selector_mystAP_ST());
        this.dic_push(new selector_mystAccident());
        this.dic_push(new selector_mystReaction());
        this.dic_push(new selector_mystSpot());
        this.dic_push(new selector_mystRes01());
        this.dic_push(new selector_mystRes02());
        this.dic_push(new selector_mystNames());
        this.dic_push(new selector_mystHealingB());
        this.dic_push(new selector_mystHealingA());
        this.dic_push(new selector_mystEnd01());
        this.dic_push(new selector_mystEnd02());
    }
}






