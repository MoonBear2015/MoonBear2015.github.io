"use strict";
function set_qa() {
    set_header_menu(3);
    scrollTo(0, 0);
    let html = '';
    html += '<div id="main_title">';
    html += '<h1>';
    html += 'Q&A';
    html += '<small>';
    html += ' Q00.14 test';
    html += '</small>';
    html += '</h1>';
    html += '</div>';
    for (let i = 0; i < 20; i++) {
        html += '<p>[' + i.toString() + ']</p>' + make_qa();
    }
    let elem = document.getElementById('site_main');
    if (elem == null) {
        alert('not found "site_main"');
        return;
    }
    elem.innerHTML = ruby_change(html);
}
function make_qa() {
    let html = '';
    html += '<div id="qa_box" ';
    html += 'style="';
    html += 'margin:     5px; ';
    html += 'padding:    10px; ';
    html += 'border:     0.5px solid #606060;';
    html += 'border-radius:  1%;';
    html += '">';
    html += Make_Q();
    html += Make_A();
    //---- this Q&A END
    html += '</div>';
    let maker = new qa_docs_maker();
    let cnt = 0;
    while (true) {
        html = maker.gene_docs(html);
        cnt++;
        let chk = html.indexOf('@');
        if (chk < 0)
            break;
        if (cnt > 10) {
            alert('over work : ' + chk.toString());
            break;
        }
    }
    return html;
}
function Make_Q() {
    let html = '';
    html += '<div id="qa_box" ';
    html += 'style="';
    html += 'margin:     5px; ';
    html += 'padding:    10px; ';
    html += 'border:     0.5px solid #606060;';
    html += 'border-radius:  1%;';
    html += 'background: ';
    html += 'linear-gradient(0deg,rgba(0,0,80,0.3),rgba(0,0,30,0.8)),';
    html += 'url(./pics/QA/@PIC_Q@);';
    html += 'background-position: center center;';
    html += 'background-size: cover;';
    html += '">';
    html += '@QUESTER@';
    html += '<br>';
    html += '<p id="qa_title">';
    html += '@Q_TITLE@';
    html += '</p>';
    html += '<p id="qa_doc">';
    html += '@Q_INIT@';
    for (let i = 0; i < rnd_minmax(10, 5); i++) {
        html += '@Q_SENT@';
    }
    html += '</p>';
    html += '</div>';
    return html;
}
function Make_A() {
    let html = '';
    html += '<div id="qa_box" ';
    html += 'style="';
    html += 'margin:     5px; ';
    html += 'padding:    10px; ';
    html += 'border:     0.5px solid #606060;';
    html += 'border-radius:  1%;';
    html += 'background: ';
    html += 'linear-gradient(0deg,rgba(30,30,30,0.8),rgba(80,80,30,0.8)),';
    html += 'url(./pics/QA/@PIC_A@);';
    html += 'background-position: center center;';
    html += 'background-size: cover;';
    html += '">';
    html += '@ADVICER@';
    html += '<br>';
    html += '<p id="qa_title">';
    html += '@A_TITLE@';
    html += '</p>';
    html += '<p id="qa_doc">';
    html += '@A_INIT@';
    for (let i = 0; i < rnd_minmax(10, 5); i++) {
        html += '@A_SENT@';
    }
    html += '</p>';
    html += '</div>';
    return html;
}
class qa_docs_maker extends news_docs_maker {
    constructor() {
        super();
        this.dic_push(new selector_q_title());
        this.dic_push(new selector_q_init());
        this.dic_push(new selector_q_sent());
        this.dic_push(new selector_q_msg());
        this.dic_push(new selector_q01_me());
        this.dic_push(new selector_q03_issue());
        this.dic_push(new selector_q02_quest());
        this.dic_push(new selector_q04_result());
        this.dic_push(new selector_a_title());
        this.dic_push(new selector_a_init());
        this.dic_push(new selector_a_sent());
        this.dic_push(new selector_a_msg());
        this.dic_push(new selector_a01_you());
        this.dic_push(new selector_a03_issue());
        this.dic_push(new selector_a02_quest());
        this.dic_push(new selector_a04_result());
        this.dic_push(new selector_pic_q());
        this.dic_push(new selector_pic_a());
        this.dic_push(new selector_quester());
        this.dic_push(new selector_advicer());
        this.dic_push(new locker_part());
        this.dic_push(new locker_KEY());
    }
}
class selector_NameLocker extends ItmArray {
    constructor(in_itm_key) {
        super();
        this.itm_key = in_itm_key;
        this.pic_key = "";
        this.nameCreater = new NameCreaterAll();
        this.is_first = true;
        this.created_name = this.nameCreater.create();
    }
    get second_itm() {
        return new SctItm(this.created_name.FstNmStr, '');
    }
    get rnd_Itm() {
        if (this.is_first) {
            this.is_first = false;
            return this.first_itm;
        }
        return this.second_itm;
    }
    Copy() {
        let result = new selector_human();
        return result;
    }
}
class selector_quester extends selector_NameLocker {
    constructor() {
        super("@QUESTER@");
    }
    get first_itm() {
        return new SctItm(this.created_name.html_QUESTER(100), '');
    }
}
class selector_advicer extends selector_NameLocker {
    constructor() {
        super("@ADVICER@");
    }
    get first_itm() {
        return new SctItm(this.created_name.html_ADVICER(100), '');
    }
}
class selector_pic_q extends SctItm_Selector {
    constructor() {
        super('@PIC_Q@');
        this.itms = [
            new SctItm('Q01.jpg'),
            new SctItm('Q02.jpg'),
            new SctItm('Q03.jpg'),
            new SctItm('Q04.jpg'),
            new SctItm('Q05.jpg'),
            new SctItm('Q06.jpg')
        ];
    }
}
class selector_pic_a extends SctItm_Selector {
    constructor() {
        super('@PIC_A@');
        this.itms = [
            new SctItm('A01.jpg'),
            new SctItm('A02.jpg'),
            new SctItm('A03.jpg'),
            new SctItm('A04.jpg'),
            new SctItm('A05.jpg'),
            new SctItm('A06.jpg')
        ];
    }
}
class selector_q_title extends SctItm_Selector {
    constructor() {
        super('@Q_TITLE@');
        this.itms = [
            new SctItm('@L_PART@に@THINK@しています'),
            new SctItm('@L_PART@が@L_KEY@ばかりしています'),
            new SctItm('助けて！ @L_PART@がまるで@NICK@なんです'),
            new SctItm('@L_PART@が@NICK@にしか見えません'),
            new SctItm('@L_PART@が@KEI2@で仕方がありません'),
            new SctItm('@L_PART@の@L_KEY@を止めさせたいんです'),
            new SctItm('@L_PART@の@L_KEY@が長続きしません'),
            new SctItm('@L_PART@と@L_KEY@をしたいのですが'),
            new SctItm('@L_PART@が@L_KEY@で捕まっています'),
            new SctItm('@L_PART@が@L_KEY@で疑われています'),
            new SctItm('どうして、@CLASS@は@KEI1@のでしょうか'),
            new SctItm('どうして、@L_PART@は@KEI1@のでしょうか')
        ];
    }
}
class selector_q_init extends SctItm_Selector {
    constructor() {
        super('@Q_INIT@');
        this.itms = [
            new SctItm('おはよう御座います、@Q_INIT@'),
            new SctItm('こんにちは、@Q_INIT@'),
            new SctItm('ご無沙汰しております、@Q_INIT@'),
            new SctItm('いつもお世話になっております、@Q_INIT@'),
            new SctItm('@Q_MSG@'),
            new SctItm('私は@COUNTRY@で@CLASS@をしているのですが、'),
            new SctItm('私は@CLASS@をしている@QUESTER@と云います。'),
            new SctItm('私が@AGE2@の頃、'),
            new SctItm('私が@CLASS@をしていた頃、'),
            new SctItm('私が@COUNTRY@にいた頃、'),
            new SctItm('私には@KEI@@L_PART@がいるのですが、'),
            new SctItm('私には@CLASS@をしている@AGE2@の@L_PART@がいるのですが、'),
            new SctItm('つい昨日の話なのですが、'),
            new SctItm('おとといの話なのですが、')
        ];
    }
}
class selector_q_sent extends SctItm_Selector {
    constructor() {
        super('@Q_SENT@');
        this.itms = [
            new SctItm('@CONECT2@、@Q_MSG@'),
            new SctItm('@CONECT2@、@Q_MSG@')
        ];
    }
}
class selector_q_msg extends SctItm_Selector {
    constructor() {
        super('@Q_MSG@');
        this.itms = [
            new SctItm('@Q_MSG01@@Q_MSG04@。'),
            new SctItm('@Q_MSG02@@Q_MSG04@。'),
            new SctItm('@Q_MSG01@@Q_MSG02@、@Q_MSG03@@Q_MSG04@。'),
            new SctItm('@Q_MSG01@@Q_MSG02@、@Q_MSG03@@Q_MSG04@。')
        ];
    }
}
// 自己紹介・誰が
class selector_q01_me extends SctItm_Selector {
    constructor() {
        super('@Q_MSG01@');
        this.itms = [
            new SctItm('私は'),
            new SctItm('私の@KEI@@L_PART@は、'),
            new SctItm('私の@KEI@@L_PART@の話なのですが、'),
            new SctItm('私は@KEY@がしたいのですが、'),
            new SctItm('今、私は@CLASS@をしているのですが、'),
            new SctItm('以前、私は@CLASS@をしていたのですが、'),
            new SctItm('これから、私は@CLASS@になろうと思うのですが、'),
            new SctItm('現在、私は@COUNTRY@に住んでいるのですが、'),
            new SctItm('以前、私は@COUNTRY@に住んでいたのですが、'),
            new SctItm('私は@COUNTRY@に移住するつもりですが、'),
            new SctItm('私は@COUNTRY@から帰ってきたのですが、')
        ];
    }
}
// 理由
class selector_q02_quest extends SctItm_Selector {
    constructor() {
        super('@Q_MSG02@');
        this.itms = [
            new SctItm('実は私には@PART@が居て'),
            new SctItm('@PART@に反対され'),
            new SctItm('@KEY@ばかりしてしまい'),
            new SctItm('@MANY@@THEY@に反対され'),
            new SctItm('@PART@が邪魔で'),
            new SctItm('@PART@が@KEI1@ので')
        ];
    }
}
// 問題
class selector_q03_issue extends SctItm_Selector {
    constructor() {
        super('@Q_MSG03@');
        this.itms = [
            new SctItm('@L_KEY@が止められず'),
            new SctItm('@L_KEY@が出来なくて'),
            new SctItm('@L_KEY@がしたいのですが'),
            new SctItm('@L_KEY@が禁止されていて')
        ];
    }
}
// 結果
class selector_q04_result extends SctItm_Selector {
    constructor() {
        super('@Q_MSG04@');
        this.itms = [
            new SctItm('とても困っているのです'),
            new SctItm('悔しくて仕方がありません'),
            new SctItm('悲しくて仕方がありません'),
            new SctItm('嬉しくて仕方がありません'),
            new SctItm('涙が止まらないのです'),
            new SctItm('笑いが止まりません'),
            new SctItm('とても堪えきれません'),
            new SctItm('とても我慢が出来ません'),
            new SctItm('途方に暮れています'),
            new SctItm('取り付く島もありません'),
            new SctItm('どうしようもありません')
        ];
    }
}
// 問題の相手
class locker_part extends SctItm_SelectLocker {
    constructor() {
        super('@L_PART@');
        this.Add(itms_partner);
    }
}
// 問題
class locker_KEY extends SctItm_SelectLocker {
    constructor() {
        super('@L_KEY@');
        this.Add(itms_accident);
    }
}
class selector_a_title extends SctItm_Selector {
    constructor() {
        super('@A_TITLE@');
        this.itms = [
            new SctItm('初めまして、@QUESTER@さん'),
            new SctItm('こんにちは、@QUESTER@さん'),
            new SctItm('@QUESTER@さん、それは大変ですね'),
            new SctItm('それは@QUESTER@さん自身の問題では？'),
            new SctItm('それは@QUESTER@さんの思い過ごしですよ'),
            new SctItm('それは@QUESTER@さんの責任です'),
            new SctItm('いいえ、@QUESTER@さんは悪くありません')
        ];
    }
}
class selector_a_init extends SctItm_Selector {
    constructor() {
        super('@A_INIT@');
        this.itms = [
            new SctItm('おはよう御座います、@A_INIT@'),
            new SctItm('こんにちは、@A_INIT@'),
            new SctItm('ご無沙汰しております、@A_INIT@'),
            new SctItm('@A_MSG@'),
            new SctItm('私は@CLASS@をしている@ADVICER@と云います。')
        ];
    }
}
class selector_a_sent extends SctItm_Selector {
    constructor() {
        super('@A_SENT@');
        this.itms = [
            new SctItm('@CONECT2@、@A_MSG@'),
            new SctItm('@CONECT2@、@A_MSG@')
        ];
    }
}
class selector_a_msg extends SctItm_Selector {
    constructor() {
        super('@A_MSG@');
        this.itms = [
            new SctItm('@A_MSG01@@A_MSG04@。'),
            new SctItm('@A_MSG02@@A_MSG04@。'),
            new SctItm('@A_MSG01@@A_MSG02@、@A_MSG03@@A_MSG04@。'),
            new SctItm('@A_MSG01@@A_MSG02@、@A_MSG03@@A_MSG04@。')
        ];
    }
}
// 誰が・あなたが
class selector_a01_you extends SctItm_Selector {
    constructor() {
        super('@A_MSG01@');
        this.itms = [
            new SctItm('あなたが'),
            new SctItm('@QUESTER@さんが'),
            new SctItm('あなたの@KEI@@L_PART@さんが'),
            new SctItm('@QUESTER@さんの@KEI@@L_PART@さんが')
        ];
    }
}
// 理由
class selector_a02_quest extends SctItm_Selector {
    constructor() {
        super('@A_MSG02@');
        this.itms = [
            new SctItm('@CLASS@をしているなら'),
            new SctItm('@CLASS@でないなら'),
            new SctItm('とても@KEI@ので'),
            new SctItm('@COUNTRY@にいるなら')
        ];
    }
}
// 問題
class selector_a03_issue extends SctItm_Selector {
    constructor() {
        super('@A_MSG03@');
        this.itms = [
            new SctItm('@L_KEY@が止められないのは'),
            new SctItm('@L_KEY@が出来ないのは'),
            new SctItm('@L_KEY@がしたいのは'),
            new SctItm('@L_KEY@が禁止されているのは')
        ];
    }
}
// 結果
class selector_a04_result extends SctItm_Selector {
    constructor() {
        super('@A_MSG04@');
        this.itms = [
            new SctItm('とても困った話ですね'),
            new SctItm('悔しいのは判ります'),
            new SctItm('悲しいのは仕方がありません'),
            new SctItm('嬉しいのはよく判ります'),
            new SctItm('泣いても仕方がありません'),
            new SctItm('笑っている場合ではありませんよ'),
            new SctItm('我慢するしか有りませんよ'),
            new SctItm('どうしようもありませんね')
        ];
    }
}
