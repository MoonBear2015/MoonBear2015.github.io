function set_quiz()
{
    set_header_menu(7);

    scrollTo(0,0);

    let html : string = '';
    html += '<div id="main_title">'
    html += '<h1>';
    html += 'Quiz';
    html += '<small>';
    html += ' Z00.05';
    html += '</small>';
    html += '</h1>';
    html += '</div>';

    for(let i = 0; i < 40; i++){
        html += '<p>[' + i.toString() + ']</p>' + make_quiz();
    }

    let elem = document.getElementById('site_main');
    if (elem == null)
    {
        alert('not found "site_main"');
        return;
    }
    elem.innerHTML = ruby_change(html);
}

function make_quiz()
{
    let html : string = '';

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

function Make_Question() : string {
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
    html += '<p id="quiz_title">';
    html += 'もんだい！<br>';
    // html += '<figure>';
    html += '</p>';
    html += '<p id="quiz_doc">';
    html += '<img src="pics/ANIMAL/@ICON_ANIMAL@" width="300px"><br>';
    // html += '</figure>';
    html += '@Z_SENT@';
    html += '</p>';

    html += '</div>';

    return html;
}

function Make_Answer() : string {
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

    html += '<p id="quiz_title" align="right">';
    html += 'こたえ！<br>';
    html += '</p>';
    html += '<p id="quiz_doc" align="right">';
    html += '@A_SENT@<br>';
    html += '<img src="pics/ANIMAL/@ICON_ANSWER@" width="300px">';
    html += '</p>';


    html += '</div>';

    return html;
}


class quiz_docs_maker extends news_docs_maker {
    constructor(){
        super();
        this.dic_push(new selector_chair());
        this.dic_push(new selector_quiz_sent());
        this.dic_push(new selector_answer_sent());
    }
}



class selector_chair 
    extends selector_NameLocker
    implements ISctItm_Selector 
{
    constructor()
    {
        super("@CHAIR@");
    }
    get first_itm() : SctItm {
        return new SctItm(this.created_name.html_CHAIR(50),'');
    }
}


class selector_quiz_sent extends SctItm_Selector implements ISctItm_Selector {
    constructor(){
        super('@Z_SENT@');
        this.itms = [
            new SctItm('どうして@QUIZANIMAL@は@DID00@いるの？')
            ,
            new SctItm('なんで@QUIZANIMAL@は@WHERE01@にいるのかな？')
            ,
            new SctItm('どうして@QUIZANIMAL@が@CLASS@をしているの？')
            ,
            new SctItm('どうして@QUIZANIMAL@は@KEI@の？')
        ]
    }
}

class selector_answer_sent extends SctItm_Selector implements ISctItm_Selector {
    constructor(){
        super('@A_SENT@');
        this.itms = [
            new SctItm('@ANSWERANIMAL@が@DID00@いるから！')
            ,
            new SctItm('@ANSWERANIMAL@が@WHERE@にいるから！')
            ,
            new SctItm('@ANSWERANIMAL@が@KEIFRONT@@KEIM1@から！')
        ]
    }
}


