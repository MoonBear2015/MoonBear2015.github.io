"use strict";
function set_quiz() {
    set_header_menu(3);
    scrollTo(0, 0);
    let html = '';
    html += '<div id="main_title">';
    html += '<h1>';
    html += 'Quiz';
    html += '<small>';
    html += ' Z00.02';
    html += '</small>';
    html += '</h1>';
    html += '</div>';
    for (let i = 0; i < 40; i++) {
        html += '<p>[' + i.toString() + ']</p>' + make_quiz();
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
    html += Make_Question();
    html += Make_Answer();
    //---- this Q&A END
    html += '</div>';
    let maker = new quiz_docs_maker();
    html = maker.gene_docs(html);
    return html;
}
function Make_Question() {
    let html = '';
    html += '<div id="quiz_box" ';
    html += 'style="';
    html += 'margin:     5px; ';
    html += 'padding:    10px; ';
    html += 'border:     0.5px solid #606060;';
    html += 'border-radius:  10px;';
    html += 'background: ';
    html += 'linear-gradient(0deg,rgba(0,0,80,0.3),rgba(0,0,30,0.8)),';
    // html += 'url(./pics/QA/@PIC_Z@);';
    html += 'background-position: center center;';
    html += 'background-size: cover;';
    html += '">';
    html += '@CHAIR@';
    html += '<br>';
    html += '<p id="quiz_doc">';
    html += '問題！<br>';
    // html += '<figure>';
    html += '<img src="pics/ANIMAL/@ICON_ANIMAL@" width="100px">';
    // html += '</figure>';
    html += '@Z_SENT@';
    html += '</p>';
    html += '</div>';
    return html;
}
function Make_Answer() {
    let html = '';
    html += '<div id="quiz_box" ';
    html += 'style="';
    html += 'margin:     5px; ';
    html += 'padding:    10px; ';
    html += 'border:     0.5px solid #606060;';
    html += 'border-radius:  10px;';
    html += 'background: ';
    html += 'linear-gradient(0deg,rgba(30,30,30,0.8),rgba(80,80,30,0.8)),';
    // html += 'url(./pics/QA/@PIC_C@);';
    html += 'background-position: center center;';
    html += 'background-size: cover;';
    html += '">';
    html += '<br>';
    html += '<p id="quiz_doc" align="right">';
    html += '@A_SENT@';
    html += '<img src="pics/ANIMAL/@ICON_ANIMAL@" width="100px">';
    html += '</p>';
    html += '</div>';
    return html;
}
class quiz_docs_maker extends news_docs_maker {
    constructor() {
        super();
        this.dic_push(new selector_chair());
        this.dic_push(new selector_quiz_sent());
        this.dic_push(new selector_answer_sent());
    }
}
class selector_chair extends selector_NameLocker {
    constructor() {
        super("@CHAIR@");
    }
    get first_itm() {
        return new SctItm(this.created_name.html_CHAIR(50), '');
    }
}
class selector_quiz_sent extends SctItm_Selector {
    constructor() {
        super('@Z_SENT@');
        this.itms = [
            new SctItm('どうして@QUIZANIMAL@は@PEOPLE@と@DID@いるの？'),
            new SctItm('なんで@QUIZANIMAL@は@WHERE@にいるのかな？')
        ];
    }
}
class selector_answer_sent extends SctItm_Selector {
    constructor() {
        super('@A_SENT@');
        this.itms = [
            new SctItm('@QUIZANIMAL@が@DID@いるから！'),
            new SctItm('@QUIZANIMAL@が@WHERE@にいるから！')
        ];
    }
}
