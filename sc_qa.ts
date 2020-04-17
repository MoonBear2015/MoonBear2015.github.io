function set_qa()
{
    set_header_menu(3);

    scrollTo(0,0);

    let html : string = '';
    html += '<div id="main_title">'
    html += '<h1>';
    html += 'Q&A';
    html += '<small>';
    html += ' Q00.06 test';
    html += '</small>';
    html += '</h1>';
    html += '</div>';

    for(let i = 0; i < 20; i++){
        html += '<p>[' + i.toString() + ']</p>' + make_qa();
    }

    let elem = document.getElementById('site_main');
    if (elem == null)
    {
        alert('not found "site_main"');
        return;
    }
    elem.innerHTML = ruby_change(html);
}

function make_qa()
{
    let html : string = '';

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
    while(true)
    {
        html = maker.gene_docs(html);
        cnt++;
        let chk = html.indexOf('@');
        if (chk < 0) break;
        if (cnt > 10)
        {
            alert('over work : ' + chk.toString());
            break;
        }
    }
    return html;
}

function Make_Q() : string {
    let html = '';
    html += '<div id="qa_box" ';
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

    html += '<p id="qa_title">';
    html += '@Q_TITLE@';
    html += '</p>';

    html += '<p id="qa_doc">';
    html += '　@Q_INIT@。';
    html += '私の@L_PART@が、@KEY@ばかりして@THINK@しています。';
    html += '私の@L_PART@が、@KEY@ばかりして@THINK@しています。';
    html += '私の@L_PART@が、@KEY@ばかりして@THINK@しています。';
    html += '</p>';


    html += '</div>';

    return html;
}

function Make_A() : string {
    let html = '';
    html += '<div id="qa_box" ';
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

    html += '<p id="qa_title">';
    html += '@QUESTER@さん、それは大変ですね。';
    html += '</p>';

    html += '<p id="qa_doc">';
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
    constructor(){
        super();
        this.dic_push(new selector_q_title());
        this.dic_push(new selector_q_init());

        this.dic_push(new selector_pic_q());
        this.dic_push(new selector_pic_a());
        this.dic_push(new selector_quester());
        this.dic_push(new selector_advicer());
        this.dic_push(new locker_part());
        this.dic_push(new locker_KEY());
    }
}

abstract class selector_NameLocker 
    extends ItmArray<SctItm>
    implements ISctItm_Selector 
{
    public nameCreater : INameCreater;
    public itm_key : string;
    public pic_key : string;
    public is_first : boolean;
    public created_name : INmItm;

    constructor(in_itm_key : string)
    {
        super();
        this.itm_key = in_itm_key;
        this.pic_key = "";
        this.nameCreater = new NameCreaterAll();
        this.is_first = true;
        this.created_name = this.nameCreater.create();
    }
    
    abstract get first_itm() : SctItm;
    get second_itm() : SctItm {
        return new SctItm(this.created_name.FstNmStr,'');
    }

    get rnd_Itm() : SctItm {
        if (this.is_first) {
            this.is_first = false;
            return this.first_itm;
        }
        return this.second_itm;
    }
    Copy() : ISctItm_Selector
    {
        let result = new selector_human();
        return result;
    }
}


class selector_quester 
    extends selector_NameLocker
    implements ISctItm_Selector 
{
    constructor()
    {
        super("@QUESTER@");
    }
    get first_itm() : SctItm {
        return new SctItm(this.created_name.html_QUESTER(100),'');
    }
}

class selector_advicer
    extends selector_NameLocker
    implements ISctItm_Selector 
{
    constructor()
    {
        super("@ADVICER@");
    }
    get first_itm() : SctItm {
        return new SctItm(this.created_name.html_ADVICER(100),'');
    }
}

class selector_pic_q extends SctItm_Selector implements ISctItm_Selector {
    constructor(){
        super('@PIC_Q@');
        this.itms = [
            new SctItm('Q01.jpg')
            ,
            new SctItm('Q02.jpg')
            ,
            new SctItm('Q03.jpg')
            ,
            new SctItm('Q04.jpg')
            ,
            new SctItm('Q05.jpg')
            ,
            new SctItm('Q06.jpg')
        ]
    }
}
class selector_pic_a extends SctItm_Selector implements ISctItm_Selector {
    constructor(){
        super('@PIC_A@');
        this.itms = [
            new SctItm('A01.jpg')
            ,
            new SctItm('A02.jpg')
            ,
            new SctItm('A03.jpg')
            ,
            new SctItm('A04.jpg')
            ,
            new SctItm('A05.jpg')
            ,
            new SctItm('A06.jpg')
        ]
    }
}

class selector_q_title extends SctItm_Selector implements ISctItm_Selector {
    constructor(){
        super('@Q_TITLE@');
        this.itms = [
            new SctItm('私の@L_PART@に@THINK@しています')
            ,
            new SctItm('私の@L_PART@が@L_KEY@ばかりしています')
            ,
            new SctItm('助けて！ @L_PART@がまるで@NICK@なんです')
            ,
            new SctItm('私の@L_PART@が@NICK@にしか見えません')
            ,
            new SctItm('私の@L_PART@が@KEI2@で仕方がありません')
            ,
            new SctItm('@L_PART@の@L_KEY@を止めさせたいんです')
            ,
            new SctItm('@L_PART@の@L_KEY@が長続きしません')
            ,
            new SctItm('@L_PART@と@L_KEY@をしたいのですが')
        ]
    }
}

class selector_q_init extends SctItm_Selector implements ISctItm_Selector {
    constructor(){
        super('@Q_INIT@');
        this.itms = [
            new SctItm('私の@L_PART@に@THINK@しています')
            ,
            new SctItm('私の@KEI@@L_PART@に@THINK@しています')
            ,
            new SctItm('私には@AGE2@になる@L_PART@がいます')
            ,
            new SctItm('私には@L_KEY@ばかりしている@L_PART@がいます')
            ,
            new SctItm('私が@AGE2@の頃の話です')
            ,
            new SctItm('私が@AGE2@の頃の話です')
        ]
    }
}

// 問題の相手
class locker_part extends SctItm_SelectLocker implements ISctItm_Selector{
    constructor(){
        super('@L_PART@');
        this.Add(itms_partner);
    }
}

// 問題
class locker_KEY extends SctItm_SelectLocker implements ISctItm_Selector{
    constructor(){
        super('@L_KEY@');
        this.Add(itms_accident);
    }
}







