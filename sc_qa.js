"use strict";
function set_qa() {
    set_header_menu(3);
    scrollTo(0, 0);
    let html = '';
    html += '<div id="main_title">';
    html += '<h1>';
    html += 'Q&A';
    html += '<small>';
    html += ' Q00.03 test';
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
    elem.innerHTML = html;
}
function make_qa() {
    let html = '';
    html += '<div id="qa_box" ';
    html += 'style="';
    html += 'margin:     5px; ';
    html += 'padding:    10px; ';
    html += 'border:     0.5px solid #606060;';
    html += 'border-radius:  1%;';
    // html += 'background: ';
    // html += 'linear-gradient(0deg,rgba(0,0,0,0.6),rgba(0,0,0,0.8)),';
    // html += 'url(./pics/@PIC_DO@);';
    // html += 'background-position: center center;';
    // html += 'background-size: cover;';
    html += '">';
    html += Make_Q();
    html += Make_A();
    // html += '<h2 id="qa_title">';
    // html += '<span style="border-bottom: solid 2px #FFFFFF;">';
    // html += '@QA_TITLE@';
    // html += '</span>';
    // html += '</h2>';
    // html += '<div id="news_pic_L">';
    // html += '<figure>';
    // html += '<img src="pics/@PIC_WHAT@" width="300px">';
    // html += '</figure>';
    // html += '</div>';
    // html += '<p id="news_doc">';
    // html += '　@NEWS_DOC@';
    // for(let i = 0;i < rnd_minmax(2,3);i++)
    // {
    //     html += '@CONECT@、';
    //     html += '@NEWS_DOC@';
    // }
    // html += '</p>';
    // html += '<div id="news_pic_R">';
    // html += '<figure>';
    // html += '<img src="pics/@PIC_DO@" width="300px">';
    // html += '</figure>';
    // html += '</div>';
    // html += '<p id="news_doc">';
    // html += '　@NEWS_DOC@';
    // for(let i = 0;i < rnd_minmax(3,5);i++)
    // {
    //     html += '@CONECT@、';
    //     html += '@NEWS_DOC@';
    // }
    // html += '</p>';
    // html += '<br>';
    // html += '@WRITER@';
    // html += '<br>';
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
    html += '<div id="q_box" ';
    html += 'style="';
    html += 'margin:     5px; ';
    html += 'padding:    10px; ';
    html += 'border:     0.5px solid #606060;';
    html += 'border-radius:  1%;';
    html += 'background: ';
    html += 'linear-gradient(0deg,rgba(10,0,30,0.6),rgba(10,0,30,0.8)),';
    html += 'url(./pics/QA/@PIC_Q@);';
    html += 'background-position: center center;';
    html += 'background-size: cover;';
    html += '">';
    html += '@QUESTER@';
    html += '<br>';
    html += '<p id="q_title">';
    html += '私の@L_PART@が、@KEY@ばかりして@THINK@しています。';
    html += '</p>';
    html += '<p id="q_doc">';
    html += '私の@L_PART@が、@KEY@ばかりして@THINK@しています。';
    html += '私の@L_PART@が、@KEY@ばかりして@THINK@しています。';
    html += '私の@L_PART@が、@KEY@ばかりして@THINK@しています。';
    html += '私の@L_PART@が、@KEY@ばかりして@THINK@しています。';
    html += '</p>';
    html += '</div>';
    return html;
}
function Make_A() {
    let html = '';
    html += '<div id="q_box" ';
    html += 'style="';
    html += 'margin:     5px; ';
    html += 'padding:    10px; ';
    html += 'border:     0.5px solid #606060;';
    html += 'border-radius:  1%;';
    html += 'background: ';
    html += 'linear-gradient(0deg,rgba(80,80,50,0.6),rgba(80,80,50,0.8)),';
    html += 'url(./pics/QA/@PIC_A@);';
    html += 'background-position: center center;';
    html += 'background-size: cover;';
    html += '">';
    html += '@ADVICER@';
    html += '<br>';
    html += '<p id="q_title">';
    html += '私の@L_PART@が、@KEY@ばかりして@THINK@しています。';
    html += '</p>';
    html += '<p id="q_doc">';
    html += '私の@L_PART@が、@KEY@ばかりして@THINK@しています。';
    html += '私の@L_PART@が、@KEY@ばかりして@THINK@しています。';
    html += '私の@L_PART@が、@KEY@ばかりして@THINK@しています。';
    html += '私の@L_PART@が、@KEY@ばかりして@THINK@しています。';
    html += '私の@L_PART@が、@KEY@ばかりして@THINK@しています。';
    html += '私の@L_PART@が、@KEY@ばかりして@THINK@しています。';
    html += '私の@L_PART@が、@KEY@ばかりして@THINK@しています。';
    html += '私の@L_PART@が、@KEY@ばかりして@THINK@しています。';
    html += '</p>';
    html += '</div>';
    return html;
}
class qa_docs_maker extends news_docs_maker {
    constructor() {
        super();
        this.dic_push(new selector_pic_q());
        this.dic_push(new selector_pic_a());
        this.dic_push(new selector_quester());
        this.dic_push(new selector_advicer());
        this.dic_push(new locker_part());
    }
}
class selector_quester extends ItmArray {
    constructor() {
        super();
        this.itm_key = "@QUESTER@";
        this.pic_key = "";
        this.nameCreater = new NameCreaterAll();
    }
    get rnd_Itm() {
        let name = this.nameCreater.create();
        return new SctItm(name.html_QUESTER(100), '');
    }
    Copy() {
        let result = new selector_human();
        return result;
    }
}
class selector_advicer extends ItmArray {
    constructor() {
        super();
        this.itm_key = "@ADVICER@";
        this.pic_key = "";
        this.nameCreater = new NameCreaterAll();
    }
    get rnd_Itm() {
        let name = this.nameCreater.create();
        return new SctItm(name.html_ADVICER(100), '');
    }
    Copy() {
        let result = new selector_human();
        return result;
    }
}
class selector_pic_q extends SctItm_Selector {
    constructor() {
        super('@PIC_Q@');
        this.itms = [
            new SctItm('Q01.jpg'),
            new SctItm('Q02.jpg'),
            new SctItm('Q03.jpg'),
            new SctItm('Q04.jpg')
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
            new SctItm('A04.jpg')
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
