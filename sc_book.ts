function set_book()
{
    set_header_menu(6);

    scrollTo(0,0);

    let html : string = '';
    html += '<div id="main_title">'
    html += '<h1>';
    html += 'Book';
    html += '<small>';
    html += ' B01.88';
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

    switch(rnd_max(5))
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
        case 3:
            {
                html += make_booktype4();
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

    html += '@MYST@';
    
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


function make_booktype4() : string {
    let html = '';


    html += '<div id="book_writerpicture">';
    // html += '<span class="l">@L_BOY@ と @L_GIRL@</span><br>';
    html += '著者：<br>';
    html += '@L_BOOKWRITER@';
    html += '<br>';
    html += '<p id="book_maker">';
    html += '出版元：@EROMAKER@';
    html += '</p>';
    html += '<br>';

    html += '</div>';

    html += '<div id="book_face" ';
    html += 'style="';
    html += 'background: ';
    html += 'linear-gradient(0deg,rgba(0,0,0,0.6),rgba(0,0,0,0.6)),';
    html += 'url(./pics/@PIC_ERO@);';

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
    
    html += '<div id="book_erostory">';
    html += '@EROBOY_FIRST@<br>';
    html += '@EROGIRL_NEXT@<br>';
    html += '@EROBOY_NEXT@<br>';
    html += '@EROGIRL_NEXT@<br>';
    html += '@EROBOY_NEXT@<br>';
    html += '@EROGIRL_NEXT@<br>';
    html += '@EROBOY_NEXT@<br>';
    html += '@EROGIRL_NEXT@<br>';
    html += '@EROBOY_NEXT@<br>';
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
            new SctItm('何故、@L_WHAT@では@DID@いるのか')
            ,
            new SctItm('何故、@L_WHAT@の@L_CLASS@は@DID@いるのか')
            ,
            new SctItm('@L_CLASS@だけが知る@L_ITEM@の真実とは')
            ,
            new SctItm('@PEOPLE@が@DID@いた理由とは')
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
            new SctItm('@AWARD@を獲得した@L_BOOKWRITER@の@B_TYPE@')
            ,
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
            new SctItm('@L_BOOKWRITER@が死力を尽くした@B_TYPE@')
            ,
            new SctItm('@L_BOOKWRITER@の悲願であった@B_TYPE@')
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
            new SctItm('　今日も@KEIP2@@L_WHAT@で@DID00@いるのは、@MANY@@KEIP2@@L_CLASS@達である。@STE00@')
            ,
            new SctItm('　昔々、@KEIP2@@L_WHAT@で、今日も@KEIDP2@@DID00@いる@KEIP2@@L_CLASS@達。@STE00@')
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
            new SctItm('<br>「ワーハッハッハッハ！ 神をも恐れぬ@WHAT@の@NICKBAD@！ @L_EVILFULLNAME@様のお出ましだ！ さあ、この@KEIN2@@TECH@パワーの餌食となるのだ！」@STE_C@')
            ,
            new SctItm('<br>「ウッシッシッシ！ 我こそは@WHAT@の@NICKBAD@！ @L_EVILFULLNAME@様だ！ 貴様らは@KEIN2@@TECH@の恐ろしさを身をもって味わうのだ！」@STE_C@')
            ,
            new SctItm('<br>「フハハハ！ かつて世界は@WHAT@の@NICKBAD@などと我を恐れた！ @L_EVILFULLNAME@様のご登場だ！ @KEIN2@@TECH@の@KEIN2@呪いを受けてみよ！」@STE_C@')
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
            new SctItm('「@ITEM@の@NICKGOOD@などと人は云う！ @L_HEROFULLNAME@とは私のことだ！」<br><br>@SEL01@')
            ,
            new SctItm('「待たせたな！ 誰が呼んだか@ITEM@の@NICKGOOD@！ この@L_HEROFULLNAME@が相手になろう！」<br><br>@SEL01@')
            ,
            new SctItm('「そこまでだ！ @ITEM@の@NICKGOOD@とは仮の姿！ この@L_HEROFULLNAME@が容赦はしないぞ！」<br><br>@SEL01@')
            ,
            new SctItm('「我こそは@ITEM@の@NICKGOOD@！ @L_HEROFULLNAME@、只今参上！」<br><br>@SEL01@')
            ,
            new SctItm('「人呼んで@ITEM@の@NICKGOOD@！ この@L_HEROFULLNAME@が、@ITEM@に代わってお仕置きだ！」<br><br>@SEL01@')
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
            new SctItm('　その@L_EVILTYPE@の@KEIN2@攻撃を、@KEIP2@@L_HEROJOB@@L_HEROTYPE@はヒラリとかわす！<br>「仕方ない、我が裁きを受けよ！」<br>@STH02@')
            ,
            new SctItm('　そんな@L_EVILTYPE@の@KEIN2@攻撃を、@KEIP2@@L_HEROJOB@@L_HEROTYPE@は@KEIDP2@弾き返す！<br>「悪が栄える試しは無い！」<br>@STH02@')
            ,
            new SctItm('　その@L_EVILTYPE@の@KEIN2@攻撃に「それで正義が揺らぐものか！」と一喝！<br>　@KEIP2@@L_HEROJOB@@L_HEROTYPE@はビクともしない！<br>@STH02@')
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
            new SctItm('「悪が栄える！ これが宇宙の真実だ！」<br>　@L_WHAT@は@KEIN2@@L_EVILJOB@@L_EVILTYPE@の魔の手に落ちた！<br><br>　@HEROCATCH@@L_HERONAME@！<br>　@HEROCATCH@@L_HERONAME@！<br>　@L_WHAT@があなたを待っている！<br><p style="text-align: right">(つづく)</p>')
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
            new SctItm('　しかし、その正義の味方を見て、何故か騒ぎ出す@L_WHAT@の@L_CLASS@達。<br>「もしや、アイツはウチで@FOOD@を食い逃げした@L_HERONAME@ではないか？」<br>@STC01@')
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

//---------------------------------------------------------------------------love

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


class selector_boyfirst extends SctItm_Selector implements ISctItm_Selector {
    constructor(){
        super('@BOY_FIRST@');
        this.itms = [
            new SctItm('「やあ、@KEIP2@@L_GIRL@。今日はずいぶん@KEIP2@@O_DID@いるんだね？」')
            ,
            new SctItm('「おやおや、@KEIP2@@L_GIRL@。どうしてそんな@KEIP2@@O_DID@るんだい？」')
            ,
            new SctItm('「だめだよ、@KEIP2@@L_GIRL@。そんな@KEIP2@@O_DID@はいけないと言っただろう」')
            ,
            new SctItm('「ああ、@KEIP2@@L_GIRL@。キミはいつも@KEIP2@@O_DID@いるんだね」')
            ,
            new SctItm('「今日も@KEIP2@@L_GIRL@は@KEIP2@のに、どうしてそんな@KEIP2@@O_DID@いるのかい？」')
        ]
    }
}

class selector_girlnext extends SctItm_Selector implements ISctItm_Selector {
    constructor(){
        super('@GIRL_NEXT@');
        this.itms = [
            new SctItm('「あら、@KEIN2@@L_BOY@。私はそんな@KEIN2@@O_DID@なんかいないわ。@KEIN2@@O_DID@いるだけよ」')
            ,
            new SctItm('「@L_BOY@ったら@KEIN2@人ね。私はそんな@KEIN2@@O_DID@いるんじゃなくて、@KEIN2@@O_DID@いるのよ」')
            ,
            new SctItm('「そうよ、@KEIN2@@L_BOY@。私がこんな@KEIN2@@O_DID@いないと、あなたが@KEIN2@@O_DID@しまうから」')
            ,
            new SctItm('「@L_BOY@は@KEIN@わね。 私がこんな@KEIN2@@O_DID@いないと、@KEIN2@@O_DID@しまうと前に言ったわよね？」')
            ,
            new SctItm('「私がこの@KEIN2@@O_DID@いると、どうして@KEIN2@@L_BOY@は@KEIN2@@O_DID@いるの？」')
            ,
            new SctItm('「@KEIN2@@L_BOY@がその@KEIN2@@O_DID@くれないからよ。私は@KEIN2@@O_DID@みたいのに」')
            ,
            new SctItm('「この@KEIN2@@O_DID@いると、@KEIN2@@O_DID@いた@KEIN2@@L_BOY@の@KEIN2@@PART@を思い出すわね」')
            ,
            new SctItm('「@KEIN2@@L_BOY@？ 私がその@KEIN2@@O_DID@しまうまで、代わりに@KEIDN2@@O_DID@くれないかしら」')
            ,
            new SctItm('「それなら、@KEIN2@@L_BOY@も一緒にその@KEIN2@@O_DID@いる筈だったのに、どうして@KEIN2@@O_DID@いるの？ 」')
            ,
            new SctItm('「@KEIN2@@L_BOY@は知ってる？ 以前、その@KEIN2@@O_DID@いた私の@KEIN2@@PART@が、今は@KEIN2@@O_DID@いるんですって」')
            ,
            new SctItm('「なら、@KEIN2@@L_BOY@がその@KEIN2@@O_DID@みればいいわ。私が@KEIN2@@O_DID@もいいから」')
            ,
            new SctItm('「ねえ、@KEIN2@@L_BOY@も一緒にその@KEIN2@@O_DID@くれない？ そのかわり、私が@KEIN2@@O_DID@もいいから」')
            ,
            new SctItm('「私がこの@KEIN2@@O_DID@いても、@KEIN2@@L_BOY@は@KEIN2@@O_DID@ばかりいるのね」')
            ,
            new SctItm('「@KEIN2@@L_BOY@は、私がこの@KEIN2@@O_DID@いると、どうして@KEIN2@@O_DID@いるの」')
            ,
            new SctItm('「じゃあ、@KEIN2@@L_BOY@も一緒にこの@KEIN2@@O_DID@くれない？ @KEIN2@@O_DID@ばかりいないで」')
            ,
            new SctItm('「だから、@KEIN2@@L_BOY@は@KEIN2@のよ。この@KEIN2@@O_DID@、次はその@KEIN2@@O_DID@しまわないと」')
            ,
            new SctItm('「それで@KEIN2@@L_BOY@は、昨日までこの@KEIN2@@O_DID@た筈なのに、今日は@KEIN2@@O_DID@いるのね」')
        ]
    }
}

class selector_boynext extends SctItm_Selector implements ISctItm_Selector {
    constructor(){
        super('@BOY_NEXT@');
        this.itms = [
            new SctItm('「でも、@KEIP2@@L_GIRL@がその@O_DID@いると、僕は@KEIP2@@O_DID@しまうんだ」')
            ,
            new SctItm('「ねえ、@KEIP2@@L_GIRL@。僕がこの@KEIP2@@O_DID@いるのは、君も一緒に@KEIP2@@O_DID@欲しいからなんだ」')
            ,
            new SctItm('「それじゃあ、@KEIP2@@L_GIRL@がその@KEIP2@@O_DID@、僕はこんな@KEIP2@@O_DID@いればいいと言うのかい？」')
            ,
            new SctItm('「@KEIP2@@L_GIRL@、そんな@KEIP2@@O_DID@ばかりいると、僕は@KEIP2@@O_DID@しまいたくなる」')
            ,
            new SctItm('「僕は、@KEIP2@@L_GIRL@が@KEIP2@@O_DID@いると、自分が@KEIP2@@O_DID@いた頃を思い出してしまうんだ」')
            ,
            new SctItm('「確か、@KEIP2@@L_GIRL@が@KEIP2@@O_DID@いたのは、僕が@KEIP2@@O_DID@いた頃だったよね」')
            ,
            new SctItm('「でも、僕はこの@KEIP2@@O_DID@いるより、@KEIP2@@O_DID@いる@KEIP2@@L_GIRL@の方が好きなんだ」')
            ,
            new SctItm('「そういえば、僕がこの@KEIP2@@O_DID@いると、いつも@KEIP2@@L_GIRL@は@KEIP2@@O_DID@いたね」')
            ,
            new SctItm('「じゃあ、僕がこの@KEIP2@@O_DID@、@KEIP2@@L_GIRL@は@KEIP2@@O_DID@みるのはどうだい？」')
            ,
            new SctItm('「@KEIP2@@L_GIRL@はそんな@KEIP2@@O_DID@いるより、@KEIP2@@O_DID@いた方が@KEIP3@な」')
            ,
            new SctItm('「そんな@KEIP2@@O_DID@も仕方ないよ。僕は@KEIP2@@L_GIRL@とこうして@KEIP2@@O_DID@いたいんだ」')
            ,
            new SctItm('「僕はそんな@KEIP2@@O_DID@いるより、@KEIP2@@L_GIRL@と@KEIP2@@O_DID@いる方が@KEIP3@な」')
            ,
            new SctItm('「その@KEIP2@@O_DID@いる@KEIP2@@L_GIRL@は、@KEIP2@@O_DID@いた@KEIP2@@PART@にそっくりだよね」')
            ,
            new SctItm('「その@KEIP2@@O_DID@いる@KEIP2@@L_GIRL@は@GRADE@@KEIP3@けど、@KEIP2@@O_DID@いる@KEIP2@@L_GIRL@も@KEIP3@よね」')
            ,
            new SctItm('「最近、@KEIP2@@L_GIRL@はそんな@KEIP2@@O_DID@ばかりいるから、たまには@KEIP2@@O_DID@みたらどうかと思ってさ」')
        ]
    }
}

//---------------------------------------------------------------------------Ero

class selector_eroBoyfirst extends SctItm_Selector implements ISctItm_Selector {
    constructor(){
        super('@EROBOY_FIRST@');
        this.itms = [
            new SctItm('「やあ、@KEIP2@@L_GIRL@。僕の@KEIW2@@POWERITEM@を見てくれ。どう思う？」')
            ,
            new SctItm('「なあ、@KEIP2@@L_GIRL@。この@KEIW2@@POWERITEM@をどうにかしてくれないか？」')
            ,
            new SctItm('「@KEIP2@@L_GIRL@。キミを見ていると僕の@KEIW2@@POWERITEM@が@DOPOWER@してしまうんだ」')
            ,
            new SctItm('「どうだい、@KEIP2@@L_GIRL@。僕の@POWERITEM@は@KEIW3@と思わないかい？」')
        ]
    }
}

class selector_eroGirlnext extends SctItm_Selector implements ISctItm_Selector {
    constructor(){
        super('@EROGIRL_NEXT@');
        this.itms = [
            new SctItm('「あら、@KEIN2@@L_BOY@。そんな@KEIS2@@PEN@でどうしようというのかしら」')
            ,
            new SctItm('「@L_BOY@ったら@KEIN2@人ね。私はそんな@KEIS2@@PEN@なんて欲しくないわ」')
            ,
            new SctItm('「だめよ、@KEIN2@@L_BOY@。そんな@KEIS2@@PEN@なんか捨ててしまえばいいわ」')
            ,
            new SctItm('「@L_BOY@は@KEIN@わね。 あなたの@KEIS2@@PEN@なんか見たくもないわ」')
            ,
            new SctItm('「@KEIN@@L_BOY@、そんな@KEIS2@@PEN@なんか自分でどうにかしたら？」')
            ,
            new SctItm('「ねえ、@KEIN@@L_BOY@？ その今にも@DOPOOR@しそうな@KEIS2@@PEN@のことを云ってるのかしら」')
            ,
            new SctItm('「そんな@KEIN@@L_BOY@の@KEIS2@@PEN@なんか、勝手に@DOPOWER@してればいいんだわ」')
        ]
    }
}

class selector_eroBoynext extends SctItm_Selector implements ISctItm_Selector {
    constructor(){
        super('@EROBOY_NEXT@');
        this.itms = [
            new SctItm('「そんなこと言わないでくれ、@KEIP2@@L_GIRL@。僕の@POWERITEM@はこんなに@KEIW2@のに」')
            ,
            new SctItm('「ああ、@KEIP2@@L_GIRL@。僕の@KEIW2@@POWERITEM@はキミじゃなきゃダメなんだ」')
            ,
            new SctItm('「頼むよ、@KEIP2@@L_GIRL@！ 僕の@KEIW2@@POWERITEM@が今にも@DOPOWER@しそうなんだ！」')
            ,
            new SctItm('「@KEIP2@@L_GIRL@。そうはいっても僕の@KEIW2@@POWERITEM@が@KEIW3@と思っているんだろう？」')
            ,
            new SctItm('「でも、@KEIP2@@L_GIRL@。この僕の@POWERITEM@をよく見てくれよ。@KEIMW@で@KEIMW@だろう？」')
            ,
            new SctItm('「それでも@KEIP2@@L_GIRL@でないと、僕の@KEIW2@@POWERITEM@が@DOPOOR@してしまうんだ」')
        ]
    }
}

//---------------------------------------------------------------------------Myst


class selector_myst extends SctItm_Selector implements ISctItm_Selector {
    constructor(){
        super('@MYST@');
        this.itms = [
            new SctItm('@MYST_COM@<br><br>@MYST01@<br>　そんなある時！<br><br>@MYST_ACT@<br><br>@MYST_REACT@<br><br>@MYST_SPOT@<br><br>')
            ,
            new SctItm('@MYST_COM@<br><br>@MYST01@<br>　次の瞬間！<br><br>@MYST_ACT@<br><br>@MYST_REACT@<br><br>@MYST_SPOT@<br><br>')
            ,
            new SctItm('@MYST_COM@<br><br>@MYST_ACT@<br><br>　その事件が起こった@MYST_STAGE@<br>　@MYST_ST_AP@<br><br>@MYST_REACT@<br><br>@MYST_SPOT@<br><br>')
            ,
            new SctItm('@MYST_COM@<br><br>@MYST_ACT@<br><br>　その騒動が起こるまで、@MYST_STAGE@<br>　@MYST_ST_AP@<br><br>@MYST_REACT@<br><br>@MYST_SPOT@<br><br>')
            ,
            new SctItm('@MYST_COM@<br><br>@MYST_ACT@<br><br>　@MYST_ST_AP@<br><br>@MYST_REACT@<br><br>@MYST_SPOT@<br><br>')
            ,
            new SctItm('@MYST_COM@<br><br>@MYST_ACT@<br><br>@MYST_REACT@<br><br>@MYST_SPOT@<br><br>')
        ]
    }
}

class selector_mystComment extends SctItm_Selector implements ISctItm_Selector {
    constructor(){
        super('@MYST_COM@');
        this.itms = [
            new SctItm('『@L_TOWN_INSCRIPTION@』　――　@L_CLASS@ @HUMAN@')
            ,
            new SctItm('　この事件は、私の数ある@MYST_ACTPAPER@の中でも、@KEIFRONT@@KEI_A2@記録となるだろう。　――　@L_BOSSNAME@@L_BOSS@')
            ,
            new SctItm('　@L_BOSSNAME@@L_BOSS@は後に、@KEIFRONT@@EMO@い事件であったと語っています。<br>　――　@L_GIRL@(@L_ASS@)の@MYST_ACTPAPER@より')
            ,
            new SctItm('―― @KEI_A2@我が@PART@に捧ぐ　@L_BOOKWRITER@ ――')
            ,
            new SctItm('―― @KEI_A2@我が@PART@のために　@L_BOOKWRITER@ ――')
        ]
    }
}


class selector_myst01 extends SctItm_Selector implements ISctItm_Selector {
    constructor(){
        super('@MYST01@');
        this.itms = [
            new SctItm('　今日も@MYST_STAGE@@MYST_ST_AP@<br><br>@MYST_APP@')
            ,
            new SctItm('@MYST_APP@<br><br>@MYST_AP_ST@@MYST_STAGE@')
        ]
    }
}


class selector_mystStage extends SctItm_Selector implements ISctItm_Selector {
    constructor(){
        super('@MYST_STAGE@');
        this.itms = [
            new SctItm('@L_TOWN@の@KEI_B2@@L_LANDMARK@では、@KEI_B2@@L_CLASS@達が、@ALSODAY@@KEID_B@@KEID_B@@DID@暮らしていた。')
            ,
            new SctItm('@KEI_B2@@L_TOWN@が誇る@L_LANDMARK@では、@KEI_B2@@L_CLASS@達が、@ALSODAY@@KEID_B@@KEID_B@@DID@いた。')
            ,
            new SctItm('@KEI_B2@@L_TOWN@の@L_LANDMARK@には、@ALSODAY@@L_DID@いる@KEI_B2@@L_CLASS@達の@KEI_B2@姿があった。')
            ,
            new SctItm('@KEI_B2@@L_TOWN@の@L_LANDMARK@では、@KEI_B2@@L_CLASS@達が、@ALSODAY@@DID@@KEID_B@過ごしていた。')
            ,
            new SctItm('@L_TOWN@の@L_LANDMARK@は@GRADE@@KEID_B@@KEID_B@、@KEI_B2@@L_CLASS@達が集う@KEI_B2@空間が広がっていた。')
            ,
            new SctItm('@L_TOWN@の@L_LANDMARK@では@KEI_B2@@KEY@が開催され、@KEI_B2@@L_CLASS@達が@GRADE@賑わっていた。')
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
            new SctItm('「うわぁ、なんて@KEI_B2@んでしょう。見てくださいよ、@L_BOSSNAME@@L_BOSS@？」<br>「そうだね、@L_ASS@の@L_GIRL@君。やはり@L_TOWN@は@KEI_B3@ねぇ」')
            ,
            new SctItm('「ほら、あの@KEI_B2@@L_CLASS@達を見て下さいよ@L_BOSSNAME@@L_BOSS@」<br>「そうだね、さすが@L_TOWN@の@L_CLASS@達は@KEI_B3@ねぇ@L_ASS@の@L_GIRL@君」')
            ,
            new SctItm('「ちょっとぉ！ そんなに@DID00@ちゃだめですよ@L_BOSSNAME@@L_BOSS@！」<br>「いやいや@L_ASS@の@L_GIRL@君、@L_TOWN@の@L_LANDMARK@は@KEI_B3@から、つい――」')
            ,
            new SctItm('「いやあ、@L_TOWN@は相変わらず@KEI_B3@ね、@L_ASS@の@L_GIRL@君」<br>「そうですね、@L_TOWN@の人は@KEI_B@ですからね、@L_BOSSNAME@@L_BOSS@」')
            ,
            new SctItm('「@L_TOWN@の@LANDMARK@って、@GRADE@@KEI_B3@ね、@L_ASS@の@L_GIRL@君」<br>「だから、ここは@L_LANDMARK@ですってば、@L_BOSSNAME@@L_BOSS@」')
            ,
            new SctItm('「@L_TOWN@の@L_CLASS@達は、@KEI_B2@人ばかりだね、@L_ASS@の@L_GIRL@君」<br>「いつも@DID00@ますからね、@L_BOSSNAME@@L_BOSS@」')
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
            new SctItm('「ぎゃああああっ！」<br>　まるで@KEI_B2@@L_LANDMARK@を切り裂くような、@KEI_A2@悲鳴が響き渡った！')
            ,
            new SctItm('「ひぃぃぃぃっ！！」<br>　正に@KEI_B2@@L_LANDMARK@を揺るがす、@KEID_A@@KEI_A2@事件が巻き起こった！')
            ,
            new SctItm('「きゃあああああっ！！」<br>　引き裂くような@KEI_A2@悲鳴に、@KEI_B2@@L_CLASS@達は一斉に振り返った！')
            ,
            new SctItm('「うわぁぁぁぁぁっ！！」<br>　耳を貫くほどの@KEI_A2@悲鳴！ いったい何が起こったか！')
            ,
            new SctItm('「あああああっ！！」<br>　@KEI_A2@叫びが、@KEI_B2@@L_TOWN@全てを揺るがした！')
            ,
            new SctItm('「しまったあああっ！！」<br>　いったい何をしくじったのか、世界を揺るがす絶望感！')
            ,
            new SctItm('「嫌だあああああああっ！！」<br>　@L_TOWN@全ての@KEI_B2@@L_CLASS@達を凍り付かせた、@KEI_B2@世界の全てを拒絶する拒否反応！<br>')
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
            new SctItm('「事件だぞ@L_GIRL@君！ ――って、こらこら！ @DID00@いる場合じゃないぞ！」<br>「えっ！？ は、はい、@L_BOSS@！」')
            ,
            new SctItm('「ちょ、ちょっと@L_BOSSNAME@@L_BOSS@！ 事件みたいですよ@L_BOSS@！！」<br>「待ってくれ@L_GIRL@君、この@DID00@から――」<br>「@L_BOSS@！ そんなの後にして下さい！」<br>「わ、判った判った――」')
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
            new SctItm('　@KEI_B2@@L_LANDMARK@の@GRADE@@KEI_A2@現場では、いまだ@KEID_A@@KEI_A2@遺体を中心に、尚も@KEI_B2@@L_CLASS@達の怒号に近い@KEI_B2@悲鳴が飛び交っていた。<br><br>@MYST_RES01@')
            ,
            new SctItm('　@KEI_B2@@L_LANDMARK@の事故現場には、@MANY@@L_CLASS@達が野次馬となって集まり、その中心に殺された@KEI_A2@@L_CLASS@が倒れていた。<br><br>@MYST_RES01@')
            ,
            new SctItm('　@KEI_B2@@L_LANDMARK@の事故現場には、今、正に殺された@KEI_A2@@L_CLASS@の遺体。辺りには、そしらぬ@KEI_B2@顔で行き交い、@L_DID@いる@KEI_B2@@L_CLASS@達の姿。<br><br>@MYST_RES01@')
            ,
            new SctItm('　駆けつけた@KEI_B2@現場には、一人の@KEI_A2@@L_CLASS@の遺体が、今、正に悲鳴を上げて殺されたままの姿で残されていた。その周囲でざわめく、@MANY@@KEI_B2@@L_CLASS@達。<br><br>@MYST_RES01@')
            ,
            new SctItm('　駆けつけると現場には被害者らしき姿は無く、ただし、まだ新しい血痕と、なんとも@KEI_A2@気配。周囲には何があったのかと@KEI_B2@顔を見合わせる@MANY@@KEI_B2@@L_CLASS@達。<br><br>@MYST_RES02@')
            ,
            new SctItm('　駆けつけた二人は困惑する。確かに@KEI_A2@悲鳴が上がった現場には何も見当たらない。ただ、何故だか@KEI_A2@空気と、@KEI_B2@顔つきをした@MANY@@L_CLASS@達が残されていた。<br><br>@MYST_RES02@')
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
            new SctItm('「@L_BOSSNAME@@L_BOSS@。それが証拠らしい証拠が見つからなくて――って、@L_BOSS@？ 聞いてます？」<br>「あ、ああ、そうだね。では容疑者を絞るか、@L_GIRL@君」<br>「・・・はい、@L_BOSS@」')
            ,
            new SctItm('「証拠らしい証拠も出てこないね、@L_GIRL@君」<br>「@L_BOSS@――なんというか@GRADE@@KEI_A2@感じがしませんか」<br>「ふむ、では目撃者はいないか聞いて見よう@L_GIRL@君」<br>「判りました、@L_BOSS@」')
            ,
            new SctItm('「@L_GIRL@君、この@GRADE@@KEI_A2@遺体の他は証拠も何もなさそうだね」<br>「・・・」<br>「――@L_GIRL@君？」<br>「あ、は、はい、@L_BOSS@」<br>「聞き込みをするよ、@L_ASS@の@L_GIRL@君」<br>「はい、@L_BOSSNAME@@L_BOSS@」')
        ]
    }
}
class selector_mystRes02 extends SctItm_Selector implements ISctItm_Selector {
    constructor(){
        super('@MYST_RES02@');
        this.itms = [
            new SctItm('「@L_BOSS@、ここが現場・・・だと思うのですけど」<br>「うーむ、その辺にいる@KEI_B2@人達にきいてみよう、@L_GIRL@君」<br>「ちょ、ちょっと聞こえますよ、@L_BOSS@」')
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
            new SctItm('――@KEI_B2@@L_CLASS@の@NAME@@AGE@曰く、<br>「いやあ、@DID00@て気付かなかったっすよ」')
            ,
            new SctItm('――@KEI_B2@@L_CLASS@の@NAME@@AGE@が言うには、<br>「そういや、昨日も@NUM10@人ぐらいヤられてましたね」')
            ,
            new SctItm('――@KEI_B2@@L_CLASS@の@NAME@@AGE@は退屈そうに、<br>「@L_TOWN@じゃよくあることだから」')
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
            new SctItm('――@KEI_A2@@L_CLASS@の@NAME@@AGE@の問い返す。<br>「ああ、@DID00@いた人ですね。どうしたんですか？」')
            ,
            new SctItm('――@KEI_A2@@L_CLASS@の@NAME@@AGE@の答えは、<br>「@KEIFRONT@@KEI_A2@事件ですよね。まったく」')
            ,
            new SctItm('――@KEI_A2@@L_CLASS@の@NAME@@AGE@は遠い目で、<br>「ああ、さっきの@KEI_B2@人ですよね。可哀相に」')
            ,
            new SctItm('――@KEI_A2@@L_CLASS@の@NAME@@AGE@は溜息交じりに、<br>「最近の@L_TOWN@は@KEI_B3@から・・・」')
            ,
            new SctItm('――@KEI_A2@@L_CLASS@の@NAME@@AGE@は空を仰いで、<br>「いや、@DID00@いましたから。私は」')
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
            new SctItm('「こんな@KEI_B2@証言だけじゃどうしようもないね、@L_GIRL@君」<br>「では、退散しますか、@L_BOSS@」<br>「ああ、@L_TOWN@の警察に任せよう――」')
            ,
            new SctItm('「これだけ@KEI_A2@事件が起こったというのに、ここの@KEI_B2@連中ときたら――どう思うかね、@L_GIRL@君」<br>「ここは本当に@KEI_B2@ところですねぇ@L_BOSS@」<br>「では、退散だ。メシはここを出てからにしよう」<br>「そうですね」')
            ,
            new SctItm('「@L_GIRL@君はどう思う？」<br>「いえ@L_BOSS@、@KEI_B2@証言ばかりで、なんとも」<br>「そうかね？ もう答えは出ているぞ、@L_GIRL@君」<br>「――ええ！？」')
            ,
            new SctItm('「やはり何も出てこないか、@L_GIRL@君」<br>「@L_BOSS@、それでは」<br>「ああ、間違いない。奴が――」')
            ,
            new SctItm('「どうだ、@L_GIRL@君」<br>「それでは・・・5分お待ちください@L_BOSS@」<br>「頼むぞ、@L_GIRL@君」')
            ,
            new SctItm('「@L_BOSS@、取り調べはこのくらいで？」<br>「ああ、現地の警察には、そう伝えておきたまえ、@L_GIRL@君」<br>「了解です。@L_BOSS@」<br>「では、次のターゲットを・・・」')
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
class locker_eropic extends SctItm_SelectLocker implements ISctItm_Selector{
    constructor(){
        super('@L_EROPIC@','','@PIC_ERO@');
        this.Add(itms_eropic);
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
class selector_eromaker extends SctItm_Selector implements ISctItm_Selector {
    constructor(){
        super('@EROMAKER@');
        this.itms = [
            new SctItm('㈱@L_EROPIC@出版')
            ,
            new SctItm('㈱@L_EROPIC@文庫')
            ,
            new SctItm('㈱@L_EROPIC@印刷')
            ,
            new SctItm('@L_EROPIC@書房')
            ,
            new SctItm('@L_EROPIC@書院')
            ,
            new SctItm('㈱@L_EROPIC@文芸')
            ,
            new SctItm('@L_EROPIC@学院')
            ,
            new SctItm('@L_EROPIC@株式会社')
            ,
            new SctItm('@L_EROPIC@財団')
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

class selector_bookface4 extends SctItm_Selector implements ISctItm_Selector {
    constructor(){
        super('@BOOKFACE2@');
        this.itms = [
            new SctItm('book13')
            ,
            new SctItm('book14')
            ,
            new SctItm('book15')
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
        this.dic_push(new selector_bookface4());

        this.dic_push(new selector_bookmaker());
        this.dic_push(new selector_heromaker());
        this.dic_push(new selector_lovemaker());
        this.dic_push(new selector_eromaker());
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
        this.dic_push(new locker_eropic());
        this.dic_push(new locker_mystpic());

        this.dic_push(new OneTime_food());
        this.dic_push(new OneTime_livestock());
        this.dic_push(new OneTime_fish());
        this.dic_push(new OneTime_drink());
        this.dic_push(new Onetime_did());

        this.dic_push(new selector_boyfirst());
        this.dic_push(new selector_boynext());
        this.dic_push(new selector_girlnext());

        this.dic_push(new selector_eroBoyfirst());
        this.dic_push(new selector_eroBoynext());
        this.dic_push(new selector_eroGirlnext());

        this.dic_push(new locker_boss());
        this.dic_push(new locker_bossName());
        this.dic_push(new locker_ass());
        this.dic_push(new locker_mystTitle());
        this.dic_push(new locker_mystActName());
        this.dic_push(new locker_mystActPaper());

        this.dic_push(new selector_myst());
        this.dic_push(new selector_mystComment());
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






