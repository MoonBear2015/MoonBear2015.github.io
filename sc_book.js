"use strict";
function set_book() {
    set_header_menu(6);
    scrollTo(0, 0);
    let html = '';
    html += '<div id="main_title">';
    html += '<h1>';
    html += 'Book';
    html += '<small>';
    html += ' B01.02';
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
    switch (rnd_max(3)) {
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
function make_booktype0() {
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
    html += '　@B_INFO@';
    html += '</div>';
    return html;
}
function make_booktype1() {
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
function make_booktype2() {
    let html = '';
    html += '<div id="book_writerpicture">';
    html += '<span class="l">@L_BOY@ と @L_GIRL@</span><br>';
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
    html += '@GIRL_NEXT@<br>';
    html += '@BOY_NEXT@<br>';
    html += '@GIRL_NEXT@<br>';
    html += '@BOY_NEXT@<br>';
    html += '@GIRL_NEXT@<br>';
    html += '@BOY_NEXT@<br>';
    html += '<p style="text-align: right">(つづく)</p>';
    html += '</div>';
    return html;
}
class selector_bookinfo extends SctItm_Selector {
    constructor() {
        super('@B_INFO@');
        this.itms = [
            new SctItm('@B_INFO01@。@B_INFO02@？ @B_INFO02@――@B_INFOEND@。'),
            new SctItm('@B_INFO01@。@B_INFO02@？ @B_INFO02@――@B_INFO03@。'),
            new SctItm('@B_INFO02@？ @B_INFO02@？ @B_INFOEND@。'),
            new SctItm('@B_INFO02@？ @B_INFO02@？ @B_INFO01@。'),
            new SctItm('@B_INFO02@？ @B_INFO02@？ @B_INFO03@。'),
            new SctItm('@B_INFO02@――@B_INFO03@。'),
            new SctItm('@B_INFO02@――@B_INFOEND@。'),
            new SctItm('@B_INFO02@――@B_INFOEND@。@COMMENT2@――')
        ];
    }
}
// 01:例文から
class selector_bookinfo01 extends SctItm_Selector {
    constructor() {
        super('@B_INFO01@');
        this.itms = [
            new SctItm('@COMMENT2@――'),
            new SctItm('「@COMMENT2@」――この@KEI@@B_SENTENCE@に@L_WHAT@が震撼した'),
            new SctItm('「@COMMENT2@」――この@KEI@@B_SENTENCE@に、@L_WHAT@の@MANYPEOPLE@が泣いた'),
            new SctItm('「@COMMENT2@」――この@KEI@@B_SENTENCE@が、@L_WHAT@の@COURSE@を変えた'),
            new SctItm('「@COMMENT2@」――この@KEI@@B_SENTENCE@が、あなたを@SUPERITEM@@L_WHAT@へと誘う'),
            new SctItm('「@COMMENT2@」――この@KEI@@B_SENTENCE@が、@L_WHAT@を震え上がらせた'),
            new SctItm('「@COMMENT2@」――この@KEI@@B_SENTENCE@が、あなたの@COURSE@を変える'),
            new SctItm('「@COMMENT2@」――この@KEI@@B_SENTENCE@が、@L_WHAT@の@COURSE@を決定づけた'),
            new SctItm('「@COMMENT2@」――そう、これぞ正しく@L_BOOKWRITER@の世界だ'),
            new SctItm('「@COMMENT2@」――この@KEI@@B_SENTENCE@こそ、@L_BOOKWRITER@の真骨頂')
        ];
    }
}
class selector_booksentence extends SctItm_Selector {
    constructor() {
        super('@B_SENTENCE@');
        this.itms = [
            new SctItm('冒頭'),
            new SctItm('一文'),
            new SctItm('一言'),
            new SctItm('告発'),
            new SctItm('狂言回し'),
            new SctItm('名調子')
        ];
    }
}
// 02:疑問
class selector_bookinfo02 extends SctItm_Selector {
    constructor() {
        super('@B_INFO02@');
        this.itms = [
            new SctItm('何故、@L_WHAT@では@DOING@いるのか'),
            new SctItm('何故、@L_WHAT@の@L_CLASS@は@DOING@いるのか'),
            new SctItm('@L_CLASS@だけが知る@L_ITEM@の真実とは'),
            new SctItm('@PEOPLE@が@DOING@いた理由とは'),
            new SctItm('@L_DO@した@L_WHAT@の@COURSE@は')
        ];
    }
}
// 03:評価
class selector_bookinfo03 extends SctItm_Selector {
    constructor() {
        super('@B_INFO03@');
        this.itms = [
            new SctItm('@COUNTRY@文学賞に輝く@L_BOOKWRITER@の@B_TYPE@'),
            new SctItm('@COUNTRY@を代表する@L_BOOKWRITER@の@B_TYPE@'),
            new SctItm('@COUNTRY@を含む@NUM10TO99@ヶ国で発売禁止となった@L_BOOKWRITER@の@B_TYPE@'),
            new SctItm('かつて@COUNTRY@で禁書に指定された@L_BOOKWRITER@の@B_TYPE@'),
            new SctItm('@NUM2TO9@度に渡り映画化された@L_BOOKWRITER@の@B_TYPE@'),
            new SctItm('映画化不可能と云われた@L_BOOKWRITER@の@B_TYPE@'),
            new SctItm('@PEOPLE@達にもっとも@ASSES@@L_BOOKWRITER@の@B_TYPE@')
        ];
    }
}
// END:筆者紹介
class selector_bookinfoend extends SctItm_Selector {
    constructor() {
        super('@B_INFOEND@');
        this.itms = [
            new SctItm('@B_WRITER_DECO@、@L_BOOKWRITER@が放つ@SUPERITEM@@B_TYPE@'),
            new SctItm('@B_WRITER_DECO@、@L_BOOKWRITER@が産んだ@SUPERITEM@@B_TYPE@'),
            new SctItm('@B_WRITER_DECO@、@L_BOOKWRITER@が書き綴る@SUPERITEM@@B_TYPE@'),
            new SctItm('@B_WRITER_DECO@、@L_BOOKWRITER@の@SUPERITEM@@B_TYPE@'),
            new SctItm('@B_WRITER_DECO@、@L_BOOKWRITER@の@SUPERITEM@@B_TYPE@'),
            new SctItm('@B_WRITER_DECO@、@L_BOOKWRITER@の再スタートを記念する@SUPERITEM@@B_TYPE@'),
            new SctItm('@B_WRITER_DECO@、@L_BOOKWRITER@の完全復活を飾る@SUPERITEM@@B_TYPE@'),
            new SctItm('@B_WRITER_DECO@、@L_BOOKWRITER@にとって事実上の遺作となった@SUPERITEM@@B_TYPE@'),
            new SctItm('@B_WRITER_DECO@、@L_BOOKWRITER@らしからぬ@SUPERITEM@@B_TYPE@'),
            new SctItm('@B_WRITER_DECO@、@L_BOOKWRITER@の稀に見る@SUPERITEM@@B_TYPE@')
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
            new SctItm('@L_ITEM@の@SPECIALIST@'),
            new SctItm('@L_ITEM@を知り尽くした@SPECIALIST@'),
            new SctItm('@L_DO@する@SPECIALIST@'),
            new SctItm('@L_ITEM@の@SPECIALIST@'),
            new SctItm('かつて@COUNTRY@から追放された元@L_CLASS@'),
            new SctItm('もっとも@COUNTRY@で@ASSES@元@L_CLASS@')
        ];
    }
}
class selector_booktype extends SctItm_Selector {
    constructor() {
        super('@B_TYPE@');
        this.itms = [
            new SctItm('一冊'),
            new SctItm('作品'),
            new SctItm('快作'),
            new SctItm('傑作'),
            new SctItm('新作'),
            new SctItm('意欲作'),
            new SctItm('異色作'),
            new SctItm('出世作'),
            new SctItm('ベストセラー'),
            new SctItm('代表作'),
            new SctItm('問題作'),
            new SctItm('名作'),
            new SctItm('文芸作品'),
            new SctItm('現代小説'),
            new SctItm('歴史小説'),
            new SctItm('推理小説'),
            new SctItm('サスペンス'),
            new SctItm('ホラー小説'),
            new SctItm('恋愛小説'),
            new SctItm('短編集'),
            new SctItm('実用書'),
            new SctItm('入門書'),
            new SctItm('参考書')
        ];
    }
}
// 00:住人登場
class selector_story00 extends SctItm_Selector {
    constructor() {
        super('@ST00@');
        this.itms = [
            new SctItm('　ここは@MANY@@KEIP@@L_CLASS@達が暮らす@KEIDP@@KEIP@@L_WHAT@。@STE00@'),
            new SctItm('　今日も@KEIP@@L_WHAT@で@DOING02@いるのは、@MANY@@KEIDP@@KEIP@@L_CLASS@達である。@STE00@'),
            new SctItm('　昔々、@KEIDP@@KEIP@@L_WHAT@で、今日も@KEIDP@@DOING02@いる@KEIP@@L_CLASS@達。@STE00@')
        ];
    }
}
// 00:魔人登場
class selector_storyE00 extends SctItm_Selector {
    constructor() {
        super('@STE00@');
        this.itms = [
            new SctItm('<br>　その@KEIP@@L_CLASS@達の元に、見るも@KEIDN@@KEIN@@RIDE@に乗った謎の@L_EVILTYPE@が姿を現した――。@STE01@'),
            new SctItm('<br>　そんな@KEIP@@L_WHAT@に、@KEIN@@NICKBAD@そっくりの@L_EVILTYPE@が@KEIDN@@KEIN@@RIDE@に乗って現れた――。@STE01@'),
            new SctItm('<br>　そこに@NICKBAD@のように@KEIDN@@KEIN@@L_EVILJOB@@L_EVILTYPE@が姿を現した――。@STE01@'),
            new SctItm('<br>　その@L_CLASS@達の元に現れたのは、まるで@NICKBAD@のような@KEIDN@@KEIN@@L_EVILJOB@@L_EVILTYPE@――。@STE01@')
        ];
    }
}
// 01:魔人挨拶
class selector_storyE01 extends SctItm_Selector {
    constructor() {
        super('@STE01@');
        this.itms = [
            new SctItm('<br>「我こそは@L_EVIL@！ この@KEIN@@TECH@パワーの餌食となるのだ！」@STE_C@'),
            new SctItm('<br>「我が名は@L_EVIL@！ @KEIN@@TECH@の恐ろしさを身をもって味わうのだ！」@STE_C@'),
            new SctItm('<br>「俺様は@L_EVIL@！ @KEIN@@TECH@の呪いを受けてみよ！」@STE_C@')
        ];
    }
}
// E_C:魔人⇒住人
class selector_storyE_C extends SctItm_Selector {
    constructor() {
        super('@STE_C@');
        this.itms = [
            new SctItm('<br>　@L_CLASS@達は大慌て。このまま@L_WHAT@は征服されてしまうのか。――と、その時！@STH00@'),
            new SctItm('<br>　逃げ惑う@L_CLASS@達。もはや@L_WHAT@は風前の灯火――と、その時！@STH00@'),
            new SctItm('<br>　為す術も無く狼狽える@L_CLASS@達――と、その時！@STH00@')
        ];
    }
}
// 00:ヒーロー登場
class selector_storyH00 extends SctItm_Selector {
    constructor() {
        super('@STH00@');
        this.itms = [
            new SctItm('<br>　@KEIDP@@KEIP@@ANIMAL@の背にまたがって、@KEIDP@も@KEIP@@L_HEROJOB@@L_HEROTYPE@が駆け付けた！<br>@STH01@'),
            new SctItm('<br>　@KEIP@@MUSIC@と共に現れたのは、@KEIDP@@KEIP@@L_HEROJOB@@L_HEROTYPE@！<br>@STH01@'),
            new SctItm('<br>　見るも@KEIP@@DRESS@をひるがえし、@KEIP@@L_HEROJOB@@L_HEROTYPE@が@KEIDP@@KEIDP@舞い降りた！<br>@STH01@'),
            new SctItm('<br>　@KEIP@@FLOWER@の花を口にくわえた正義の味方、@KEIP@@L_HEROJOB@@L_HEROTYPE@が降臨した！<br>@STH01@')
        ];
    }
}
// 01:ヒーロー挨拶
class selector_storyH01 extends SctItm_Selector {
    constructor() {
        super('@STH01@');
        this.itms = [
            new SctItm('「誰が呼んだか、@ITEM@の@NICKGOOD@！ @L_HEROFULLNAME@とは私のことだ！」<br><br>@SEL01@'),
            new SctItm('「待たせたな！ @ITEM@の@NICKGOOD@！ @L_HEROFULLNAME@が相手になろう！」<br><br>@SEL01@'),
            new SctItm('「そこまでだ！ @ITEM@の@NICKGOOD@！ @L_HEROFULLNAME@が容赦はしないぞ！」<br><br>@SEL01@'),
            new SctItm('「人呼んで、@ITEM@の@NICKGOOD@！ @L_HEROFULLNAME@、只今参上！」<br><br>@SEL01@')
        ];
    }
}
class selector_storySel01 extends SctItm_Selector {
    constructor() {
        super('@SEL01@');
        this.itms = [
            new SctItm('@STH_E@'),
            new SctItm('@STH_C@')
        ];
    }
}
// ヒーロー⇒魔人
class selector_storyH_E extends SctItm_Selector {
    constructor() {
        super('@STH_E@');
        this.itms = [
            new SctItm('「ぬぬ、@L_HEROJOB@@L_HEROTYPE@だと？」と驚く@L_EVILJOB@@L_EVILTYPE@、しかし、それも束の間。<br>@STE02@'),
            new SctItm('「来たな@L_HERONAME@！ 覚悟せよ！」と、@L_EVILJOB@@L_EVILTYPE@は勇み立つ。<br>@STE02@'),
            new SctItm('「ヌハハハ！ 此処であったが百年目！ 勝負だ@L_HERONAME@！ 」と、@L_EVILJOB@@L_EVILTYPE@は不敵に笑う。<br>@STE02@')
        ];
    }
}
class selector_storyE02 extends SctItm_Selector {
    constructor() {
        super('@STE02@');
        this.itms = [
            new SctItm('　そして、@NICKBAD@のような@KEIN@形相を浮かべて、@L_HEROFULLNAME@に襲いかかる！<br>「喰らえ！ @EVILATTACK@」<br>@SEL02@'),
            new SctItm('　次の瞬間、@KEIN@@ANIMAL@のような@KEIN@勢いで@L_HEROFULLNAME@に飛びかかった！<br>「死ね！ @EVILATTACK@」<br>@SEL02@'),
            new SctItm('　そして、@KEIN@@BIRD@の構えから、@KEIDN@@KEIN@技を繰り出した！<br>「くたばれ@L_HERONAME@！ @EVILATTACK@」<br>@SEL02@')
        ];
    }
}
class selector_storySel02 extends SctItm_Selector {
    constructor() {
        super('@SEL02@');
        this.itms = [
            new SctItm('@STH03@'),
            new SctItm('@STH04@')
        ];
    }
}
class selector_storyH02 extends SctItm_Selector {
    constructor() {
        super('@STH02@');
        this.itms = [
            new SctItm('　@KEIP@@L_HEROFULLNAME@は@KEIP@必殺の構え！ <br>「覚悟だ！ @HEROATTACK@」<br>@SEL03@'),
            new SctItm('　@KEIP@@L_HEROFULLNAME@は@KEIP@腕を振りかざし！ <br>「トドメだ！ @HEROATTACK@」<br>@SEL03@'),
            new SctItm('　@KEIP@@L_HEROFULLNAME@の@KEIP@大技が放たれた！ <br>「受けてみよ！ @HEROATTACK@」<br>@SEL03@')
        ];
    }
}
class selector_storySel03 extends SctItm_Selector {
    constructor() {
        super('@SEL03@');
        this.itms = [
            new SctItm('@STE03@'),
            new SctItm('@STE04@')
        ];
    }
}
// 03:ヒーロー受け
class selector_storyH03 extends SctItm_Selector {
    constructor() {
        super('@STH03@');
        this.itms = [
            new SctItm('「仕方ない、我が裁きを受けよ！」と@KEIDP@言いつつ、@KEIP@@L_HEROJOB@@L_HEROTYPE@はヒラリとかわす！<br>@STH02@'),
            new SctItm('　それを@KEIP@@L_HEROJOB@@L_HEROTYPE@は@KEIDP@弾き返す！「悪が栄える試しは無い！」<br>@STH02@'),
            new SctItm('「それで正義が揺らぐものか！」@KEIP@@L_HEROJOB@@L_HEROTYPE@はビクともしない！<br>@STH02@')
        ];
    }
}
// 04:怪人⇒ヒーロー負け
class selector_storyH04 extends SctItm_Selector {
    constructor() {
        super('@STH04@');
        this.itms = [
            new SctItm('「し、しまった！」 チュドーン！ @KEIP@@L_HERONAME@は吹き飛ばされた！<br><br>@STEEND@'),
            new SctItm('「あ・・・！」 ドカーン！！ @L_HERONAME@は大爆発！<br><br>@STEEND@'),
            new SctItm('「やられたっ！」 ズドドドーン！ @L_HERONAME@は倒された！<br><br>@STEEND@')
        ];
    }
}
// 04:ヒーロー⇒怪人負け
class selector_storyE04 extends SctItm_Selector {
    constructor() {
        super('@STE04@');
        this.itms = [
            new SctItm('　@L_EVILNAME@に見事的中！<br>「おのれ！ @L_HERONAME@め！」<br>　チュドーン！ @KEIN@@L_EVILJOB@@L_EVILTYPE@は星の彼方へ！<br><br>@STHEND@'),
            new SctItm('　@L_EVILNAME@は手も足も出ない！<br>「覚えてろ！ @L_HERONAME@め！」<br>　スタタタタ・・・ @KEIN@@L_EVILJOB@@L_EVILTYPE@は逃げていった！<br><br>@STHEND@'),
            new SctItm('　@L_EVILNAME@は絶体絶命！「・・・@L_EVILJOB@に栄光あれ！」<br>　ドッカーン！ @KEIN@@L_EVILNAME@は大爆発！<br><br>@STHEND@')
        ];
    }
}
// 04:住人⇒ヒーロー負け
class selector_storyH05 extends SctItm_Selector {
    constructor() {
        super('@STH05@');
        this.itms = [
            new SctItm('「ご、ごめんなさい！」 チュドーン！ @KEIP@@L_HERONAME@は謝罪会見！<br>@STE05@'),
            new SctItm('「は、反省してます！」 ドカーン！！ @L_HERONAME@は余罪で逮捕された！<br>@STE05@'),
            new SctItm('「も、もうしませんっ！」 ズドドドーン！ @L_HERONAME@はアカウント炎上削除！<br>@STE05@')
        ];
    }
}
// 04:住人⇒怪人負け
class selector_storyE05 extends SctItm_Selector {
    constructor() {
        super('@STE05@');
        this.itms = [
            new SctItm('「あれ？ 俺も？」 チュドーン！ ついでに@L_EVILJOB@@L_EVILTYPE@も冤罪逮捕！<br><br>@STCEND'),
            new SctItm('「い、いや、俺は違うぞ！」 ドカーン！ おまけで@L_EVILJOB@@L_EVILTYPE@も誤解炎上！<br><br>@STCEND'),
            new SctItm('「悪いのはアイツじゃないか」 ズドドドーン！ @L_EVILJOB@@L_EVILTYPE@も巻き込まれて引退発表！<br><br>@STCEND')
        ];
    }
}
// END:怪人勝利
class selector_storyEEND extends SctItm_Selector {
    constructor() {
        super('@STEEND@');
        this.itms = [
            new SctItm('　@L_EVILFULLNAME@の@KEIN@大勝利！<br>「これで@L_WHAT@は私のモノだ！ ガハハハッ！」<br><br>　@HEROCATCH@@L_HERONAME@！<br>　@HEROCATCH@@L_HERONAME@！<br>　このままでは済まされないぞ！<br><p style="text-align: right">(つづく)</p>'),
            new SctItm('「悪が栄える！ これがこの世の真実だ！」<br>　@L_WHAT@は@KEIN@@L_EVILJOB@@L_EVILTYPE@の魔の手に落ちた！<br><br>　@HEROCATCH@@L_HERONAME@！<br>　@HEROCATCH@@L_HERONAME@！<br>　@L_WHAT@があなたを待っている！<br><p style="text-align: right">(つづく)</p>'),
            new SctItm('「さあ、@L_CLASS@共よ！ 俺様に平伏すが良い！ ゲハハハ！」<br>　@L_EVILFULLNAME@の@KEIDN@@KEIN@大勝利！<br><br>　@HEROCATCH@@L_HERONAME@！<br>　@HEROCATCH@@L_HERONAME@！<br>　@L_CLASS@達を救えるのは君だけだ！<br><p style="text-align: right">(つづく)</p>')
        ];
    }
}
// END:住人勝利
class selector_storyCEND extends SctItm_Selector {
    constructor() {
        super('@STCEND');
        this.itms = [
            new SctItm('　これぞ数の暴力！ @L_CLASS@達の大勝利！<br>「住民パワーで世界平和だ！」<br><br>　@HEROCATCH@@L_HERONAME@！<br>　ついでに@HEROCATCH@@L_EVILNAME@！<br>　英雄達に未来は来るか？<br><p style="text-align: right">(つづく)</p>'),
            new SctItm('　正論には誰も勝てない！ @L_CLASS@達の大勝利！<br>「ペンは剣よりも強いのだ！」<br><br>　@HEROCATCH@@L_HERONAME@！<br>　そして@HEROCATCH@@L_EVILNAME@！<br>　ヒーロー達の明日はどっちだ？<br><p style="text-align: right">(つづく)</p>')
        ];
    }
}
// END:ヒーロー勝利？
class selector_storyHEND extends SctItm_Selector {
    constructor() {
        super('@STHEND@');
        this.itms = [
            new SctItm('「正義は勝つ！」　@L_HEROFULLNAME@の@KEIP@大勝利・・・と思っていたら、<br>@STH_C2@'),
            new SctItm('「悪が栄える道理は無い！」　@L_HEROFULLNAME@の@KEIP@大勝利・・・と思っていたら、<br>@STH_C2@')
        ];
    }
}
class selector_storyE03 extends SctItm_Selector {
    constructor() {
        super('@STE03@');
        this.itms = [
            new SctItm('　それを@L_EVILJOB@@L_EVILTYPE@はガッチリ受け止め、<br>「フン、この程度か！　@EVILATTACK@」<br>@STH04@'),
            new SctItm('　それを@L_EVILJOB@@L_EVILTYPE@は払いのけ、<br>「そんな@NICKBAD@みたいな技が効くものか！　@EVILATTACK@」<br>@STH04@'),
            new SctItm('　しかし、@L_EVILJOB@@L_EVILTYPE@には通じない！ <br>「フハハ、俺様の勝ちだ！　@EVILATTACK@」<br>@STH04@')
        ];
    }
}
// H_C:ヒーロー⇒住人
class selector_storyH_C extends SctItm_Selector {
    constructor() {
        super('@STH_C@');
        this.itms = [
            new SctItm('　しかし、正義の味方のその姿に、何故か騒ぎ出す@L_WHAT@の@L_CLASS@達。<br>「もしや、アイツはウチで@FOOD@を食い逃げした@L_HERONAME@ではないか？」<br>@STC01@'),
            new SctItm('　しかし、せっかく登場した正義の味方に、@L_WHAT@の@L_CLASS@達は不穏な様子。<br>「ちょっと待て！ お前はウチの@ANIMAL@を盗んだ@L_HERONAME@だろう！」<br>@STC01@'),
            new SctItm('　その時、助けに来た正義の味方を、@L_WHAT@の@L_CLASS@達は指さして、<br>「間違いない！ 貴様はウチで@FOOD@を盗み食いした@L_HERONAME@だな？」<br>@STC01@')
        ];
    }
}
// H_C2:ヒーロー⇒住人 2
class selector_storyH_C2 extends SctItm_Selector {
    constructor() {
        super('@STH_C2@');
        this.itms = [
            new SctItm('<br>　しかし、@L_WHAT@の@L_CLASS@達は認めない！<br>「なんてことするんだ！ 暴力反対！」<br>「貴様も同じ、@KEIN@乱暴者ではないか！」<br><br>@STHLOSE@'),
            new SctItm('<br>　何故か、@L_WHAT@の@L_CLASS@達は怒りだした！<br>「相手が悪人だからって乱暴は良くない！」<br>「それで平和になると思うのか！」<br><br>@STHLOSE@'),
            new SctItm('<br>　まだ、@L_WHAT@の@L_CLASS@達の恐怖は収まらない！<br>「正義の味方？ どちらも同じじゃ無いか！」<br>「近づくな！ @KEIN@乱暴者は出て行け！」<br><br>@STHLOSE@'),
            new SctItm('<br>　だが、@L_WHAT@の@L_CLASS@達は疑っている！<br>「今の戦い方は本気じゃないな？」<br>「お前ら、絶対にグルだろう！」<br>「そうやって、報酬を後で山分けする気だな！」<br><br>@STHLOSE@')
        ];
    }
}
// END:ヒーロー追放
class selector_storyHLose extends SctItm_Selector {
    constructor() {
        super('@STHLOSE@');
        this.itms = [
            new SctItm('　@L_HEROFULLNAME@は@L_WHAT@から追い出された！<br>「私は何のために戦っているんだ・・・」<br><br>　@HEROCATCH@@L_HERONAME@！<br>　@HEROCATCH@@L_HERONAME@！<br>　正義はいつか認められるさ！<br><p style="text-align: right">(つづく)</p>'),
            new SctItm('　@L_HEROFULLNAME@は@L_WHAT@を黙って後にした。<br>「これでいいんだ・・・もう戦いの時代は終わったんだ・・・」<br><br>　@HEROCATCH@@L_HERONAME@！<br>　@HEROCATCH@@L_HERONAME@！<br>　鍛えた体は裏切らないぞ！<br><p style="text-align: right">(つづく)</p>'),
            new SctItm('　――@L_HEROFULLNAME@は行き場を失った。<br>「次は@CLASS@に転職するかな・・・」<br><br>　@HEROCATCH@@L_HERONAME@！<br>　@HEROCATCH@@L_HERONAME@！<br>　@CLASS@も悪くないぞ！<br><p style="text-align: right">(つづく)</p>'),
            new SctItm('　@L_WHAT@から追われた@L_HEROFULLNAME@を待っていたのは、かつてのライバル、@L_EVILFULLNAME@であった。<br>「もう終わったんだ。俺達の時代は」「ああ、そうだな――」<br>　酒を酌み交わす英雄が二人・・・。<br><br>　@HEROCATCH@@L_HERONAME@！<br>　@HEROCATCH@@L_EVILNAME@！<br>　プロレス界が君達を待っている！<br><p style="text-align: right">(つづく)</p>'),
            new SctItm('　@L_CLASS@から追いやられた@L_HEROFULLNAME@の側に、もはや敵ではなくなった、@L_EVILFULLNAME@の姿があった。<br>「――判ったか？ 俺達のすべきことが」「ああ、そうだな――」<br>　勇者の手に、@KEIDP@@KEIN@武器が手渡されていた。<br><br>　@HEROCATCH@@L_HERONAME@！<br>　@HEROCATCH@@L_EVILNAME@！<br>　世論を敵に回して勝てるのか？<br><p style="text-align: right">(つづく)</p>'),
            new SctItm('　荷物をかかえて@L_WHAT@を後にする@L_HEROFULLNAME@を、ジッと見守る@L_EVILFULLNAME@の姿。<br>　これが二人の愛が始まる瞬間であった――。<br><br>　@HEROCATCH@@L_HERONAME@！<br>　@HEROCATCH@@L_EVILNAME@！<br>　プロポーズまで先は長いぞ！<br><p style="text-align: right">(つづく)</p>'),
            new SctItm('　やがて、火の海と化した@L_WHAT@を後にする@L_HEROFULLNAME@の姿があった。<br>いったい何があったのか？<br>（誰も、俺の気持ちを判ってくれない・・・）<br>　そんな彼を出迎えたのは、永遠のライバル、@L_EVILFULLNAME@<br>　二人は改めて向き直る。さあ、続きをしようじゃないか――。<br><br>　@HEROCATCH@@L_HERONAME@！<br>　@HEROCATCH@@L_EVILNAME@！<br>　所詮は、血塗られた道なのだ！<br><p style="text-align: right">(つづく)</p>')
        ];
    }
}
// 01:住人攻撃
class selector_storyC01 extends SctItm_Selector {
    constructor() {
        super('@STC01@');
        this.itms = [
            new SctItm('　狼狽える@L_HEROJOB@@L_HEROTYPE@、しかし@L_CLASS@達は容赦なく、<br>「思い知れ！ 必殺・@CLASSATTACK@」<br>@STH05@'),
            new SctItm('　@L_HERONAME@は言い訳するが、@L_CLASS@達は問答無用、<br>「謝罪しろ！ 秘技・@CLASSATTACK@」<br>@STH05@'),
            new SctItm('　思わず逃げ出そうとする@L_HERONAME@を、@L_CLASS@達は取り囲み、<br>「落ちぶれてしまえ！ 奥義・@CLASSATTACK@」<br>@STH05@')
        ];
    }
}
class selector_evilattack extends SctItm_Selector {
    constructor() {
        super('@EVILATTACK@');
        this.itms = [
            new SctItm('@L_EVILJOB@ガス噴射！'),
            new SctItm('@L_EVILJOB@爆弾投下！'),
            new SctItm('@L_EVILJOB@魔法発動！'),
            new SctItm('@L_EVILJOB@ハリケーン！'),
            new SctItm('@L_EVILJOB@バズーカー！'),
            new SctItm('@L_EVILJOB@ダイナマイト！'),
            new SctItm('@L_EVILJOB@大砲！')
        ];
    }
}
class selector_heroattack extends SctItm_Selector {
    constructor() {
        super('@HEROATTACK@');
        this.itms = [
            new SctItm('@L_HEROJOB@パンチ！'),
            new SctItm('@L_HEROJOB@キック！'),
            new SctItm('@L_HEROJOB@チョップ！'),
            new SctItm('@L_HEROJOB@光線！'),
            new SctItm('@L_HEROJOB@レーザー！'),
            new SctItm('@L_HEROJOB@ビーム！'),
            new SctItm('@L_HEROJOB@ミサイル！'),
            new SctItm('@L_HEROJOB@トマホーク！'),
            new SctItm('@L_HEROJOB@カッター！'),
            new SctItm('@L_HEROJOB@ブーメラン！')
        ];
    }
}
class selector_classattack extends SctItm_Selector {
    constructor() {
        super('@CLASSATTACK@');
        this.itms = [
            new SctItm('@L_CLASS@シュプレヒコール！'),
            new SctItm('@L_CLASS@集団訴訟！'),
            new SctItm('@L_CLASS@リツイート！'),
            new SctItm('@L_CLASS@デモ行進！'),
            new SctItm('@L_CLASS@不買運動！')
        ];
    }
}
class locker_boy extends SctItm_SelectLocker {
    constructor() {
        super('@L_BOY@');
        this.Add(itms_boyName);
    }
}
class locker_girl extends SctItm_SelectLocker {
    constructor() {
        super('@L_GIRL@');
        this.Add(itms_girlName);
    }
}
class onetime_doing extends SctItm_OneTimeLocker {
    constructor() {
        super('@O_DOING@');
        this.Add(itms_doing_o);
    }
}
class selector_boyfirst extends SctItm_Selector {
    constructor() {
        super('@BOY_FIRST@');
        this.itms = [
            new SctItm('「やあ、@L_GIRL@。今日は@O_DOING@いるんだね？」'),
            new SctItm('「おや、@L_GIRL@。どうして@O_DOING@るんだい？」'),
            new SctItm('「だめだよ、@L_GIRL@。@O_DOING@はいけないと言っただろう」'),
            new SctItm('「ああ、@L_GIRL@。キミも一緒に@O_DOING@はどうだい？」')
        ];
    }
}
class selector_girlnext extends SctItm_Selector {
    constructor() {
        super('@GIRL_NEXT@');
        this.itms = [
            new SctItm('「あら、@L_BOY@。私は@O_DOING@なんかいないわ。@O_DOING@いるだけよ」'),
            new SctItm('「@L_BOY@ったらおかしな人。私は@O_DOING@いるんじゃなくて、@O_DOING@いるのよ」'),
            new SctItm('「そうね、@L_BOY@。でも、私が@O_DOING@いないと、あなたが@O_DOING@しまうから」'),
            new SctItm('「@L_BOY@？ 私は@O_DOING@いないと、@O_DOING@しまうと前に言ったわよね？」'),
            new SctItm('「それなら、@L_BOY@も一緒に@O_DOING@いる筈だったのに、どうして@O_DOING@いるの？ 」'),
            new SctItm('「@L_BOY@は知ってる？ 以前、@O_DOING@いた私の@PART@が、今は@O_DOING@いるんですって」')
        ];
    }
}
class selector_boynext extends SctItm_Selector {
    constructor() {
        super('@BOY_NEXT@');
        this.itms = [
            new SctItm('「でも、@L_GIRL@が@O_DOING@いると、僕は@O_DOING@しまうんだ」'),
            new SctItm('「@L_GIRL@、僕が@O_DOING@いるのは、君も一緒に@O_DOING@欲しいからなんだ」'),
            new SctItm('「僕は、@L_GIRL@が@O_DOING@いると、自分が@O_DOING@いた頃を思い出してしまうんだ」'),
            new SctItm('「確か、@L_GIRL@が@O_DOING@いたのは、僕が@O_DOING@いた頃だったよね」'),
            new SctItm('「でも、僕は@O_DOING@いるより、@O_DOING@いる@L_GIRL@の方が好きなんだ」'),
            new SctItm('「そういえば、僕が@O_DOING@いると、いつも@L_GIRL@は@O_DOING@いたね」'),
            new SctItm('「それなら、僕が@O_DOING@、@L_GIRL@は@O_DOING@みるのはどうだい？」')
        ];
    }
}
class book_docs_maker extends news_docs_maker {
    constructor() {
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
        this.dic_push(new onetime_doing());
        this.dic_push(new selector_boyfirst());
        this.dic_push(new selector_boynext());
        this.dic_push(new selector_girlnext());
    }
}
