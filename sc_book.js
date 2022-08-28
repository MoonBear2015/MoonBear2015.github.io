"use strict";
function set_book() {
    set_header_menu(6);
    scrollTo(0, 0);
    let html = '';
    html += '<div id="main_title">';
    html += '<h1>';
    html += 'Book';
    html += '<small>';
    html += ' B00.67';
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
    if (rnd_max(3) == 0) {
        html += make_booktype0();
    }
    else {
        html += make_booktype1();
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
    html += '　@ST00@';
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
            new SctItm('ここは@MANY@@L_CLASS@達が暮らす@KEIP@@L_WHAT@。@STE00@'),
            new SctItm('今日も@KEIP@@L_WHAT@で@DOING02@いるのは、@KEIDP@@KEIP@@L_CLASS@達。@STE00@'),
            new SctItm('昔々、@KEIDP@@KEIP@@L_WHAT@で、@KEIP@@L_CLASS@達が今日も@KEIDP@@DOING02@いると、@STE00@')
        ];
    }
}
// 00:魔人登場
class selector_storyE00 extends SctItm_Selector {
    constructor() {
        super('@STE00@');
        this.itms = [
            new SctItm('その@KEIP@@L_CLASS@達の元に、見るも@KEIN@@RIDE@に乗った謎の@L_EVILTYPE@が姿を現した――。@STE01@'),
            new SctItm('そんな@KEIP@@L_WHAT@に、@NICKBAD@そっくりの@L_EVILTYPE@が@RIDE@に乗って現れた――。@STE01@'),
            new SctItm('そこに@NICKBAD@のように@KEIN@@L_EVILJOB@@L_EVILTYPE@が姿を現した――。@STE01@'),
            new SctItm('その@L_CLASS@達の元に現れたのは、まるで@NICKBAD@のような@L_EVILJOB@@L_EVILTYPE@――。@STE01@')
        ];
    }
}
// 01:魔人挨拶
class selector_storyE01 extends SctItm_Selector {
    constructor() {
        super('@STE01@');
        this.itms = [
            new SctItm('<br>「我こそは@L_EVIL@！ この@KEIN@@L_EVILJOB@パワーの餌食となるのだ！」<br>@STE_C@'),
            new SctItm('<br>「我が名は@L_EVIL@！ @KEIN@@L_EVILJOB@の恐ろしさを身をもって味わうのだ！」<br>@STE_C@'),
            new SctItm('<br>「俺様は@L_EVIL@！ @KEIN@@L_EVILJOB@の呪いを受けてみよ！」<br>@STE_C@')
        ];
    }
}
// E_C:魔人⇒住人
class selector_storyE_C extends SctItm_Selector {
    constructor() {
        super('@STE_C@');
        this.itms = [
            new SctItm('@L_CLASS@達は大慌て。このまま@L_WHAT@は征服されてしまうのか。――と、その時、@STH00@'),
            new SctItm('逃げ惑う@L_CLASS@達。もはや@L_WHAT@は風前の灯火――と、その時、@STH00@'),
            new SctItm('為す術も無く狼狽える@L_CLASS@達――と、その時、@STH00@')
        ];
    }
}
// 00:ヒーロー登場
class selector_storyH00 extends SctItm_Selector {
    constructor() {
        super('@STH00@');
        this.itms = [
            new SctItm('そんな@KEIN@騒ぎを聞きつけ、やってきたのは@KEIP@@L_HEROJOB@@L_HEROTYPE@！<br>@STH01@'),
            new SctItm('鳴り響く@KEIP@@MUSIC@と共に、@L_HEROJOB@@L_HEROTYPE@、只今参上！<br>@STH01@'),
            new SctItm('見るも@KEIP@@DRESS@をひるがえし、舞い降りたのは@L_HEROJOB@@L_HEROTYPE@！<br>@STH01@')
        ];
    }
}
// 01:ヒーロー挨拶
class selector_storyH01 extends SctItm_Selector {
    constructor() {
        super('@STH01@');
        this.itms = [
            new SctItm('「人呼んで@ITEM@の@NICKGOOD@！ @L_HEROFULLNAME@とは私のことだ！」<br>@STH_E@'),
            new SctItm('「待たせたな！ この@L_HERO@が相手になろう！」<br>@STH_E@'),
            new SctItm('「そこまでだ！ @L_HERO@が容赦はしないぞ！」<br>@STH_E@')
        ];
    }
}
// ヒーロー⇒魔人
class selector_storyH_E extends SctItm_Selector {
    constructor() {
        super('@STH_E@');
        this.itms = [
            new SctItm('　驚いた@L_EVILTYPE@@L_EM@@L_EVILNAME@、「ぬぬ！ @L_HERONAME@め！ 邪魔立てするな！」<br>@STE02@'),
            new SctItm('　@L_EVILJOB@@L_EVILTYPE@はいきり立つ。「来たな@L_HERONAME@！ 覚悟せよ！」<br>@STE02@'),
            new SctItm('　@L_EVILTYPE@@L_EM@@L_EVILNAME@は慌てず高笑い。「ヌハハハ！ 此処であったが百年目！ 勝負だ@L_HERONAME@！ 」<br>@STE02@')
        ];
    }
}
class selector_storyE02 extends SctItm_Selector {
    constructor() {
        super('@STE02@');
        this.itms = [
            new SctItm('　襲いかかる@L_EVILJOB@@L_EVILTYPE@！「喰らえ！ @EVILATTACK@」<br>@STH03@'),
            new SctItm('　@L_EVILJOB@@L_EVILTYPE@の攻撃！ 「死ね！ @EVILATTACK@」<br>@STH03@'),
            new SctItm('　襲い掛かる@L_EVILJOB@@L_EVILTYPE@！ 「くたばれ！ @EVILATTACK@」<br>@STH04@')
        ];
    }
}
class selector_storyH02 extends SctItm_Selector {
    constructor() {
        super('@STH02@');
        this.itms = [
            new SctItm('　@L_HEROFULLNAME@は必殺の構え！ 「覚悟だ！ @HEROATTACK@」<br>@STE03@'),
            new SctItm('　@L_HEROFULLNAME@は攻撃する！ 「トドメだ！ @HEROATTACK@」<br>@STE03@'),
            new SctItm('　@L_HEROFULLNAME@の技が放たれた！ 「受けてみよ！ @HEROATTACK@」<br>@STE03@')
        ];
    }
}
// 03:ヒーロー受け
class selector_storyH03 extends SctItm_Selector {
    constructor() {
        super('@STH03@');
        this.itms = [
            new SctItm('「仕方ない、我が裁きを受けよ！」と言いつつ、@KEIP@@L_HEROJOB@@L_HEROTYPE@はヒラリとかわす！<br>@STH02@'),
            new SctItm('　それを@KEIP@@L_HEROJOB@@L_HEROTYPE@は弾き返す！ 「悪が栄える試しは無い！」<br>@STH02@'),
            new SctItm('「それで正義が揺らぐものか！」@KEIP@@L_HEROJOB@@L_HEROTYPE@はビクともしない！<br>@STH02@')
        ];
    }
}
// 04:ヒーロー負け
class selector_storyH04 extends SctItm_Selector {
    constructor() {
        super('@STH04@');
        this.itms = [
            new SctItm('「し、しまった！」 チュドーン！ @KEIP@@L_HERONAME@は吹き飛ばされた！<br><br>@STEEND'),
            new SctItm('「あ・・・！」 ドカーン！！ @L_HERONAME@は大爆発！<br><br>@STEEND'),
            new SctItm('「やられたっ！」 ズドドドーン！ @L_HERONAME@は倒された！<br><br>@STEEND')
        ];
    }
}
// END:怪人勝利
class selector_storyEEND extends SctItm_Selector {
    constructor() {
        super('@STEEND');
        this.itms = [
            new SctItm('　@L_EVILFULLNAME@の大勝利！<br>「これで@L_WHAT@は私のモノだ！ ガハハハッ！」<br>　@HEROCATCH@@L_HERONAME@！ @HEROCATCH@@L_HERONAME@！<br>　このままでは済まされないぞ！<br>(続く)'),
            new SctItm('「悪が栄える！ これがこの世の真実だ！」<br>　@L_WHAT@は@L_EVILJOB@@L_EVILTYPE@の魔の手に落ちた！<br>　@HEROCATCH@@L_HERONAME@！　@HEROCATCH@@L_HERONAME@！ @L_WHAT@があなたを待っている！<br>(続く)'),
            new SctItm('「さあ、@L_CLASS@共よ！ 俺様に平伏すが良い！ ゲハハハ！」<br>　@L_EVILFULLNAME@の大勝利！<br>　@HEROCATCH@@L_HERONAME@！　@HEROCATCH@@L_HERONAME@！ @L_CLASS@達を救えるのは君だけだ！<br>(続く)')
        ];
    }
}
class selector_storyE03 extends SctItm_Selector {
    constructor() {
        super('@STE03@');
        this.itms = [
            new SctItm('　それを@L_EVILTYPE@@L_EM@@L_EVILNAME@はガッチリ受け止め、「フン、この程度か！　@EVILATTACK@」<br>@STH04@'),
            new SctItm('　それを@L_EVILTYPE@@L_EM@@L_EVILNAME@は払いのけ、「そんな@NICKBAD@みたいな技が効くものか！　@EVILATTACK@」<br>@STH04@'),
            new SctItm('　しかし、@L_EVILTYPE@@L_EM@@L_EVILNAME@通じない！ 「フハハ、俺様の勝ちだ！　@EVILATTACK@」<br>@STH04@')
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
        this.dic_push(new selector_storyE_C());
        this.dic_push(new selector_storyEEND());
        this.dic_push(new selector_storyH00());
        this.dic_push(new selector_storyH01());
        this.dic_push(new selector_storyH02());
        this.dic_push(new selector_storyH03());
        this.dic_push(new selector_storyH04());
        this.dic_push(new selector_storyH_E());
        this.dic_push(new selector_evilattack());
        this.dic_push(new selector_heroattack());
    }
}
