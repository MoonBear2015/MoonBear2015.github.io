"use strict";
function set_quiz() {
    set_header_menu(3);
    scrollTo(0, 0);
    let html = '';
    html += '<div id="main_title">';
    html += '<h1>';
    html += 'Quiz';
    html += '<small>';
    html += ' Z00.00';
    html += '</small>';
    html += '</h1>';
    html += '</div>';
    for (let i = 0; i < 40; i++) {
        html += '<p>[' + i.toString() + ']</p>' + make_qa();
    }
    let elem = document.getElementById('site_main');
    if (elem == null) {
        alert('not found "site_main"');
        return;
    }
    elem.innerHTML = ruby_change(html);
}
function make_quiz() {
    let html = '';
    html += '<div id="quiz_box" ';
    html += 'style="';
    html += 'margin:     5px; ';
    html += 'padding:    10px; ';
    html += 'border:     0.5px solid #606060;';
    html += 'border-radius:  10px;';
    html += '">';
    html += Make_Q();
    html += Make_A();
    //---- this Q&A END
    html += '</div>';
    let maker = new quiz_docs_maker();
    html = maker.gene_docs(html);
    return html;
}
function Make_Chair() {
    let html = '';
    html += '<div id="quiz_box" ';
    html += 'style="';
    html += 'margin:     5px; ';
    html += 'padding:    10px; ';
    html += 'border:     0.5px solid #606060;';
    html += 'border-radius:  10px;';
    html += 'background: ';
    html += 'linear-gradient(0deg,rgba(0,0,80,0.3),rgba(0,0,30,0.8)),';
    html += 'url(./pics/QA/@PIC_Z@);';
    html += 'background-position: center center;';
    html += 'background-size: cover;';
    html += '">';
    html += '@CHAIRPERSON@';
    html += '<br>';
    html += '<p id="quiz_doc">';
    html += '@Z_SENT@';
    html += '</p>';
    html += '</div>';
    return html;
}
function Make_Play() {
    let html = '';
    html += '<div id="quiz_box" ';
    html += 'style="';
    html += 'margin:     5px; ';
    html += 'padding:    10px; ';
    html += 'border:     0.5px solid #606060;';
    html += 'border-radius:  10px;';
    html += 'background: ';
    html += 'linear-gradient(0deg,rgba(30,30,30,0.8),rgba(80,80,30,0.8)),';
    html += 'url(./pics/QA/@PIC_C@);';
    html += 'background-position: center center;';
    html += 'background-size: cover;';
    html += '">';
    html += '@PLAYER@';
    html += '<br>';
    html += '<p id="qa_doc">';
    html += '@P_SENT@';
    html += '</p>';
    html += '</div>';
    return html;
}
class quiz_docs_maker extends news_docs_maker {
    constructor() {
        super();
        this.dic_push(new selector_z_sent());
        this.dic_push(new selector_p_sent());
        this.dic_push(new selector_pic_z());
        this.dic_push(new selector_pic_p());
    }
}
class selector_chairperson extends selector_NameLocker {
    constructor() {
        super("@CHAIRPERSON@");
    }
    get first_itm() {
        return new SctItm(this.created_name.html_QUESTER(100), '');
    }
}
class selector_player extends selector_NameLocker {
    constructor() {
        super("@PLAYER@");
    }
    get first_itm() {
        return new SctItm(this.created_name.html_ADVICER(100), '');
    }
}
class selector_pic_z extends SctItm_Selector {
    constructor() {
        super('@PIC_Z@');
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
class selector_pic_p extends SctItm_Selector {
    constructor() {
        super('@PIC_P@');
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
class selector_z_sent extends SctItm_Selector {
    constructor() {
        super('@Z_SENT@');
        this.itms = [
            new SctItm('@TIMEFRONT2@@Q_MSG@。'),
            new SctItm('@TIMEFRONT2@@CONECT2@、@Q_MSG@。'),
            // new SctItm('@TIMEFRONT2@@Q_MSG@が、@Q_SENT@')
            // ,
            // new SctItm('@TIMEFRONT2@@Q_MSG@けど、@Q_SENT@')
            // ,
            new SctItm('@TIMEFRONT2@@Q_MSG@けど、@Q_MSG@が、どうすれば良いのでしょう？ '),
            new SctItm('@TIMEFRONT2@@Q_MSG@けど、@Q_MSG@が、なんとかして貰えませんか？ '),
            new SctItm('@TIMEFRONT2@@Q_MSG@けど、@Q_MSG@が、お願いできませんか？ '),
            new SctItm('@TIMEFRONT2@@Q_MSG@けど、@Q_MSG@ので、お願いしても構いませんか？ '),
            new SctItm('@TIMEFRONT2@@Q_MSG@けど、@Q_MSG@ので、手を貸して頂けませんか？ '),
            new SctItm('@TIMEFRONT2@@Q_MSG@けど、@Q_MSG@ので、手伝って貰えませんか？ '),
            new SctItm('@TIMEFRONT2@@Q_MSG@けど、@Q_MSG@ので、どなたかお願い出来ないでしょうか？ '),
            new SctItm('@TIMEFRONT2@@Q_MSG@けど、@Q_MSG@が、どうすれば良いのか教えてください。'),
            new SctItm('@TIMEFRONT2@@Q_MSG@けど、@Q_MSG@が、誰か何とかしてください。'),
            new SctItm('@TIMEFRONT2@@Q_MSG@けど、@Q_MSG@が、私と一緒に@DID@貰えないでしょうか？ '),
            new SctItm('@TIMEFRONT2@@Q_MSG@けど、@Q_MSG@が、@L_PART@の付き添いで@DID@貰えないでしょうか？ '),
            new SctItm('@TIMEFRONT2@@Q_MSG@けど、@Q_MSG@が、どなたか私の@L_PART@と一緒に@DID@頂けませんか？ '),
            new SctItm('@TIMEFRONT2@@Q_MSG@けど、@Q_MSG@が、どなたか私の代わりに@DID@下さいませんか？ '),
            new SctItm('@TIMEFRONT2@@Q_MSG@けど、@Q_MSG@が、どなたか私の@L_PART@に代わって@DID@頂けませんか？ ')
            // ,
            // new SctItm('私の@KEI@@L_PART@をご存じでしょうか。')
        ];
    }
}
class selector_p_sent extends SctItm_Selector {
    constructor() {
        super('@A_SENT@');
        this.itms = [
            new SctItm('@A_MSG@。'),
            new SctItm('@CONECT2@、@A_MSG@。'),
            new SctItm('@A_MSG@が、@QUESTER@さんはご存じですよね？ '),
            new SctItm('@A_MSG@が、知らないのは@QUESTER@さんだけです。'),
            new SctItm('@A_MSG@が、@QUESTER@さんならお判りでしょう。'),
            new SctItm('@A_MSG@が、@QUESTER@さんとは無関係です。'),
            new SctItm('@A_MSG@が、@QUESTER@さんには無理ですね。'),
            new SctItm('@A_MSG@が、@QUESTER@さんにしか出来ませんよ。'),
            new SctItm('@A_MSG@が、確か@QUESTER@さんもそうでしたよね？ '),
            new SctItm('@A_MSG@が、@QUESTER@さんは知らなかったのですか？ '),
            new SctItm('@A_MSG@が、その@L_PART@さんなら知っている筈ですよね？ '),
            new SctItm('@A_MSG@が、その@L_PART@さんなら@DID@いる筈です。'),
            new SctItm('@A_MSG@が、その@L_PART@さんなら@DID@いましたよ？ '),
            new SctItm('@A_MSG@が、その@L_PART@さんなら@DID@いましたね。'),
            new SctItm('@A_MSG@が、@DID@いる@L_PART@さんを見かけましたよ。'),
            new SctItm('@A_MSG@が、@TOWN@の@PLACE@で@DID@いたのは@QUESTER@さんですよね？ '),
            new SctItm('@A_MSG@が、@KEI@@L_PART@に連れられて@DID@いたのは@QUESTER@さんですよね？ '),
            new SctItm('@A_MSG@が、@CHAR@と一緒に@DID@いたのは@QUESTER@さんですよね？ '),
            new SctItm('@A_MSG@が、@MANYCHAR@に紛れて@DID@いたのは@QUESTER@さんですよね？ '),
            new SctItm('@A_MSG@が、@A_SENT@'),
            new SctItm('@A_MSG@し、@A_SENT@'),
            new SctItm('@A_MSG@けど、@A_SENT@')
        ];
    }
}