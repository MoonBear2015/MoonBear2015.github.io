function set_qa()
{
    set_header_menu(3);

    scrollTo(0,0);

    let html : string = '';
    html += '<div id="main_title">'
    html += '<h1>';
    html += 'Q&A';
    html += '<small>';
    html += ' Q01.35';
    html += '</small>';
    html += '</h1>';
    html += '</div>';

    for(let i = 0; i < 40; i++){
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
    html += 'border-radius:  10px;';
    html += '">';

    html += Make_Q();
    html += Make_A();

    //---- this Q&A END
    html += '</div>';

    let maker = new qa_docs_maker();
    html = maker.gene_docs(html);

    return html;
}

function Make_Q() : string {
    let html = '';
    html += '<div id="qa_box" ';
    html += 'style="';
    html += 'margin:     5px; ';
    html += 'padding:    10px; ';
    html += 'border:     0.5px solid #606060;';
    html += 'border-radius:  10px;';
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
    for(let i = 0;i < rnd_minmax(2,4);i++)
    {
        html += '@Q_SENT@';
    }
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
    html += 'border-radius:  10px;';
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
    for(let i = 0;i < rnd_minmax(2,4);i++)
    {
        html += '@A_SENT@';
    }
    html += '@A_END@';
    html += '</p>';


    html += '</div>';

    return html;
}


class qa_docs_maker extends news_docs_maker {
    constructor(){
        super();
        this.dic_push(new selector_q_title());
        this.dic_push(new selector_q_init());
        this.dic_push(new selector_q_sent());
        this.dic_push(new selector_q_msg());
        this.dic_push(new selector_q01_me());
        this.dic_push(new selector_q02());
        this.dic_push(new selector_q03_quest());
        this.dic_push(new selector_q04_result());

        this.dic_push(new selector_a_title());
        this.dic_push(new selector_a_init());
        this.dic_push(new selector_a_sent());
        this.dic_push(new selector_a_end());
        this.dic_push(new selector_a_msg());
        this.dic_push(new selector_a01_you());
        this.dic_push(new selector_a03_issue());
        this.dic_push(new selector_a02_quest());
        this.dic_push(new selector_a04_result());

        this.dic_push(new selector_pic_q());
        this.dic_push(new selector_pic_a());
        this.dic_push(new selector_quester());
        this.dic_push(new selector_advicer());
    }
}

// abstract class selector_NameLocker 
//     extends ItmArray<SctItm>
//     implements ISctItm_Selector 
// {
//     public nameCreater : INameCreater;
//     public itm_key : string;
//     public itm_key2 : string;
//     public pic_key : string;
//     public is_first : boolean;
//     public created_name : INmItm;

//     constructor(in_itm_key : string)
//     {
//         super();
//         this.itm_key = in_itm_key;
//         this.itm_key2 = "";
//         this.pic_key = "";
//         this.nameCreater = new NameCreaterAll();
//         this.is_first = true;
//         this.created_name = this.nameCreater.create();
//     }
    
//     abstract get first_itm() : SctItm;
//     get second_itm() : SctItm {
//         return new SctItm(this.created_name.FstNmStr,'');
//     }

//     get rnd_Itm() : SctItm {
//         if (this.is_first) {
//             this.is_first = false;
//             return this.first_itm;
//         }
//         return this.second_itm;
//     }
//     Copy() : ISctItm_Selector
//     {
//         let result = new selector_human();
//         return result;
//     }
//     public Gene_Docs(temp_doc : string) : string {
//         return replace_docs_A(temp_doc,this);
//     }

// }


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
            new SctItm('@DID00@みたいのですが')
            ,
            new SctItm('@DID@いる@L_PART@に@THINK@しています')
            ,
            new SctItm('@DID@いる@L_PART@を知りませんか')
            ,
            new SctItm('@DID@いる@L_PART@をなんとかして下さい')
            ,
            new SctItm('@L_PART@が@L_DID@いるので困っています')
            ,
            new SctItm('@L_PART@と@L_DID@みたいのです')
            ,
            new SctItm('@L_PART@と一緒に@L_DID@頂けませんか')
            ,
            new SctItm('@L_PART@に@THINK@しています')
            ,
            new SctItm('@L_PART@が@L_HABIT@ばかりしています')
            ,
            new SctItm('助けて！ @L_PART@がまるで@NICK@なんです')
            ,
            new SctItm('助けて！ @L_PART@が@L_DID@しまいました！')
            ,
            new SctItm('助けて！ @L_PART@に@L_DO@されそうなんです！')
            ,
            new SctItm('@L_PART@が@NICK@にしか見えません')
            ,
            new SctItm('@L_PART@を@CLASS@にしたいのですが')
            ,
            new SctItm('@L_PART@が@L_DID@いるので困っています')
            ,
            new SctItm('@L_PART@を@L_DO@できなくて困っています')
            ,
            new SctItm('@L_PART@が@KEIMN@で仕方がありません')
            ,
            new SctItm('@L_PART@の@L_HABIT@を止めさせたいんです')
            ,
            new SctItm('@L_PART@の@L_HABIT@が長続きしません')
            ,
            new SctItm('@L_PART@と@L_HABIT@をしたいのですが')
            ,
            new SctItm('@L_PART@が@L_HABIT@で捕まっています')
            ,
            new SctItm('私の@KEIN2@@L_PART@を知りませんか')
            ,
            new SctItm('私の@KEIN2@@L_PART@を探しています')
            ,
            new SctItm('@L_PART@を募集しています')
            ,
            new SctItm('どうして、@CLASS@は@KEIN2@のでしょうか')
            ,
            new SctItm('どうして、@L_PART@は@KEIN2@のでしょうか')
            ,
            new SctItm('どうすれば@CLASS@になれますか')
            ,
            new SctItm('どうすれば@KING@になれますか')
            ,
            new SctItm('@CLASS@になりたいんです')
            ,
            new SctItm('@KING@になりたいんです')
            ,
            new SctItm('@ANIMAL@に追われて困っています')
            ,
            new SctItm('@NICK@の様になりたいのですが')
            ,
            new SctItm('『@CALL2@』と呼ばれて@GRADE@@THINK@しています')
            // ,
            // new SctItm('@CLASS@になりたくて@GRADE@@THINK@しています')
            // ,
            // new SctItm('@KING@になりたくて@GRADE@@THINK@しています')
        ]
    }
}

class selector_q_init extends SctItm_Selector implements ISctItm_Selector {
    constructor(){
        super('@Q_INIT@');
        this.itms = [
            new SctItm('お早うございます。@Q_INIT@')
            ,
            new SctItm('こんにちは。@Q_INIT@')
            ,
            new SctItm('ご無沙汰しております。@Q_INIT@')
            ,
            new SctItm('いつもお世話になっております。@Q_INIT@')
            ,
            new SctItm('私は@COUNTRY@で@CLASS@をしています。')
            ,
            new SctItm('私は@COUNTRY@で@CLASS@をしている@QUESTER@と云います。')
            ,
            new SctItm('私が@AGE2@の頃、@Q_SENT@')
            ,
            new SctItm('私が@COUNTRY@で@CLASS@をしていた頃、@Q_SENT@')
            ,
            new SctItm('私が@COUNTRY@にいた頃、@Q_SENT@')
            ,
            new SctItm('私には@KEIN2@@L_PART@がいるのですが、@Q_SENT@')
            ,
            new SctItm('私には@FRIENDSHIP@だった@L_PART@がいるのですが、@Q_SENT@')
            ,
            new SctItm('私には@CLASS@をしている@AGE2@の@L_PART@がいるのですが、@Q_SENT@')
        ]
    }
}
class selector_q_sent extends SctItm_Selector implements ISctItm_Selector {
    constructor(){
        super('@Q_SENT@');
        this.itms = [
            new SctItm('@TIMEFRONT2@@Q_MSG@。')
            ,
            new SctItm('@TIMEFRONT2@@CONECT2@、@Q_MSG@。')
            ,
            // new SctItm('@TIMEFRONT2@@Q_MSG@が、@Q_SENT@')
            // ,
            // new SctItm('@TIMEFRONT2@@Q_MSG@けど、@Q_SENT@')
            // ,
            new SctItm('@TIMEFRONT2@@Q_MSG@けど、@Q_MSG@が、どうすれば良いのでしょう？ ')
            ,
            new SctItm('@TIMEFRONT2@@Q_MSG@けど、@Q_MSG@が、なんとかして貰えませんか？ ')
            ,
            new SctItm('@TIMEFRONT2@@Q_MSG@けど、@Q_MSG@が、お願いできませんか？ ')
            ,
            new SctItm('@TIMEFRONT2@@Q_MSG@けど、@Q_MSG@ので、お願いしても構いませんか？ ')
            ,
            new SctItm('@TIMEFRONT2@@Q_MSG@けど、@Q_MSG@ので、手を貸して頂けませんか？ ')
            ,
            new SctItm('@TIMEFRONT2@@Q_MSG@けど、@Q_MSG@ので、手伝って貰えませんか？ ')
            ,
            new SctItm('@TIMEFRONT2@@Q_MSG@けど、@Q_MSG@ので、どなたかお願い出来ないでしょうか？ ')
            ,
            new SctItm('@TIMEFRONT2@@Q_MSG@けど、@Q_MSG@が、どうすれば良いのか教えてください。')
            ,
            new SctItm('@TIMEFRONT2@@Q_MSG@けど、@Q_MSG@が、誰か何とかしてください。')
            ,
            new SctItm('@TIMEFRONT2@@Q_MSG@けど、@Q_MSG@が、私と一緒に@DID@貰えないでしょうか？ ')
            ,
            new SctItm('@TIMEFRONT2@@Q_MSG@けど、@Q_MSG@が、@L_PART@の付き添いで@DID@貰えないでしょうか？ ')
            ,
            new SctItm('@TIMEFRONT2@@Q_MSG@けど、@Q_MSG@が、どなたか私の@L_PART@と一緒に@DID@頂けませんか？ ')
            ,
            new SctItm('@TIMEFRONT2@@Q_MSG@けど、@Q_MSG@が、どなたか私の代わりに@DID@下さいませんか？ ')
            ,
            new SctItm('@TIMEFRONT2@@Q_MSG@けど、@Q_MSG@が、どなたか私の@L_PART@に代わって@DID@頂けませんか？ ')
            // ,
            // new SctItm('私の@KEI@@L_PART@をご存じでしょうか。')
        ]
    }
}

// 濁点なし。～が、～けど
class selector_q_msg extends SctItm_Selector implements ISctItm_Selector {
    constructor(){
        super('@Q_MSG@');
        this.itms = [
            // new SctItm('私は@DID@いたのです')
            // ,
            // new SctItm('私は@DID@みたかったのです')
            // ,
            // new SctItm('私が@DID@いた時のことです')
            // ,
            // new SctItm('@L_PART@が@DID@いたのです')
            // ,
            new SctItm('@Q_MSG01@@Q_MSG04@')
            ,
            new SctItm('@Q_MSG01@@Q_MSG02@が、@Q_MSG04@')
            ,
            new SctItm('@Q_MSG01@@Q_MSG02@けど、@Q_MSG04@')
            ,
            new SctItm('@Q_MSG01@@Q_MSG03@@Q_MSG04@')
            ,
            new SctItm('@Q_MSG01@@Q_MSG02@が、@Q_MSG04@')
            ,
            new SctItm('@Q_MSG01@@Q_MSG02@けど、@Q_MSG04@')
            ,
            new SctItm('@Q_MSG02@が、@Q_MSG03@@Q_MSG04@')
            ,
            new SctItm('@Q_MSG02@けど、@Q_MSG03@@Q_MSG04@')
            ,
            new SctItm('@Q_MSG01@@Q_MSG02@が、@Q_MSG03@@Q_MSG04@')
            ,
            new SctItm('私の@WHO3@@L_PART@の話です')
            ,
            new SctItm('私の@L_PART@とは@FRIENDSHIP@なんです')
            ,
            new SctItm('私の『@CALL2@』と@GRADE@@ASSES@@L_PART@のことです')
            ,
            new SctItm('何を隠そう、私の正体は@L_EVIL2@だったのです')
            ,
            new SctItm('@ORDER@@L_HERO2@の居場所を探しているのです')
            ,
            new SctItm('@ORDER@@L_HERO2@の行方を追っているのです')
            ,
            new SctItm('@ORDER@@L_HERO2@の抹殺を命じられたのです')
        ]
    }
}

// 自己紹介・誰が
class selector_q01_me extends SctItm_Selector implements ISctItm_Selector {
    constructor(){
        super('@Q_MSG01@');
        this.itms = [
            // new SctItm('私は')
            // ,
            // new SctItm('私が')
            // ,
            // new SctItm('@WHO3@私は')
            // ,
            // new SctItm('私の@KEIN2@@L_PART@は')
            // ,
            // new SctItm('私の@KEIN2@@L_PART@が')
            // ,
            new SctItm('私は@WHERE@で、')
            ,
            new SctItm('私が@WHERE@で、')
            ,
            new SctItm('@WHO3@私は@WHERE@で')
            ,
            new SctItm('私の@KEIN2@@L_PART@は、@WHERE@で、')
            ,
            new SctItm('私の@KEIN2@@L_PART@が、@WHERE@で、')
        ]
    }
}


// 事情
class selector_q02 extends SctItm_Selector implements ISctItm_Selector {
    constructor(){
        super('@Q_MSG02@');
        this.itms = [
            // new SctItm('@L_HABIT@がしたいのですが')
            // ,
            // new SctItm('@HABIT@がしたいのですが')
            // ,
            // new SctItm('@CLASS@を止めたいのです')
            // ,
            new SctItm('@CLASS@になりたいのです')
            ,
            new SctItm('@CLASS@をしているのです')
            ,
            new SctItm('@CLASS@をしていたのです')
            ,
            // new SctItm('@CLASS@になろうと思うのですが')
            // ,
            new SctItm('@CLASS@になったばかりなのです')
            ,
            new SctItm('@COUNTRY@に住んでいるのです')
            ,
            // new SctItm('@COUNTRY@に移住するつもりですが')
            // ,
            new SctItm('@COUNTRY@から帰ってきたのです')
            ,
            new SctItm('初めて@COUNTRY@に来たのです')
            ,
            new SctItm('@L_HABIT@に夢中なのです')
            ,
            new SctItm('『@CALL2@』と評判なのです')
            ,
            new SctItm('@HABIT@を止めたいのです')
            ,
            new SctItm('@HABIT@が苦手なのです')
            ,
            new SctItm('@HABIT@の@NICK@だと評判なのです')
            ,
            new SctItm('@HABIT@の@NICK@だと呼ばれているのです')
            ,
            new SctItm('@DID@@DIDEND@のです')
            ,
            new SctItm('@DID@ばかりいるのです')
            ,
            new SctItm('@DID@@DIDEND@筈だったのです')
            ,
            new SctItm('@DID@いる時のことです')
        ]
    }
}

// 理由
class selector_q03_quest extends SctItm_Selector implements ISctItm_Selector {
    constructor(){
        super('@Q_MSG03@');
        this.itms = [
            new SctItm('@L_HABIT@が止められず')
            ,
            new SctItm('@L_HABIT@が出来なくて')
            ,
            new SctItm('@L_HABIT@が禁止されていて')
            ,
            new SctItm('@MANYPEOPLE@が@ASSES@ので')
            ,
            new SctItm('@KEIN2@@PEOPLE@と@ASSES@ので')
            ,
            new SctItm('@PART@が@DID@しまい')
            ,
            new SctItm('@PART@が@DID@しまったので')
            ,
            new SctItm('@PART@が@DID@いたので')
            ,
            new SctItm('@PART@が@DID@いるので')
            ,
            new SctItm('@PART@が邪魔で')
            ,
            new SctItm('@PART@を押しつけられ')
            ,
            new SctItm('@PART@に反対され')
            ,
            new SctItm('@HABIT@ばかりしてしまい')
            ,
            new SctItm('@HABIT@三昧で')
            ,
            new SctItm('@HABIT@や@HABIT@に夢中で')
            ,
            new SctItm('@HABIT@が出来なくて')
            ,
            new SctItm('@KEY@に巻き込まれてしまい')
            ,
            new SctItm('@MANYPEOPLE@に反対され')
            ,
            new SctItm('@MANYPEOPLE@がやってきて')
            ,
            new SctItm('@MANYPEOPLE@がいなくなったので')
            ,
            new SctItm('@MANYPEOPLE@に取り囲まれ')
            ,
            new SctItm('@PART@が@KEIN2@ので')
            ,
            new SctItm('本当は@CLASS@になりたいので')
            ,
            new SctItm('@DID@ばかりいるので')
            ,
            new SctItm('@DID@しまうので')
            ,
            new SctItm('@DID@@DIDEND@ので')
        ]
    }
}


// 結果
class selector_q04_result extends SctItm_Selector implements ISctItm_Selector {
    constructor(){
        super('@Q_MSG04@');
        this.itms = [
            new SctItm('どうしたらいいのか判りません')
            ,
            new SctItm('@GRADE@困っているのです')
            ,
            new SctItm('@GRADE@大変なんです')
            ,
            new SctItm('@GRADE@大変なことになってしまいました')
            ,
            new SctItm('@GRADE@手が付けられません')
            ,
            new SctItm('生きた心地がしないのです')
            ,
            new SctItm('どうしようもありません')
            ,
            new SctItm('取り付く島もありません')
            ,
            new SctItm('仕方がありません')
            ,
            new SctItm('途方に暮れています')
            ,
            new SctItm('@GRADE@@EMO@くて@THINK@しているのです')
            ,
            new SctItm('@GRADE@@EMO@くて仕方がありません')
            ,
            new SctItm('@DID@いたのです')
            ,
            // new SctItm('@DID@いたいのです')
            // ,
            new SctItm('@DID@いるのです')
            ,
            new SctItm('@DID@ばかりいるのです')
            ,
            new SctItm('@DID@@DIDEND@のです')
        ]
    }
}


class selector_a_title extends SctItm_Selector implements ISctItm_Selector {
    constructor(){
        super('@A_TITLE@');
        this.itms = [
            new SctItm('ようこそ、@QUESTER@さん')
            ,
            new SctItm('初めまして、@QUESTER@さん')
            ,
            new SctItm('こんにちは、@QUESTER@さん')
            ,
            new SctItm('お久しぶりですね、@QUESTER@さん')
            ,
            new SctItm('あなたが@QUESTER@さんでしたか')
            ,
            new SctItm('大変ですね、@QUESTER@さん')
            ,
            new SctItm('それは@QUESTER@さんの問題では？')
            ,
            new SctItm('それは@QUESTER@さんの思い過ごしですよ')
            ,
            new SctItm('それは@QUESTER@さんの責任です')
            ,
            new SctItm('@QUESTER@さんの仰るとおりです')
            ,
            new SctItm('それは@QUESTER@さんの勘違いでは？')
            ,
            new SctItm('@QUESTER@さんの思い込みですよ')
            ,
            new SctItm('@QUESTER@さんは悪くありません')
            ,
            new SctItm('@QUESTER@さんなら大丈夫ですよ')
            ,
            new SctItm('それは@QUESTER@さんだけですよ')
            ,
            new SctItm('@QUESTER@さん、もう諦めましょう')
            ,
            new SctItm('頑張りましょう、@QUESTER@さん')
            ,
            new SctItm('止めて下さい、@QUESTER@さん')
            ,
            new SctItm('残念でしたね、@QUESTER@さん')
            ,
            new SctItm('良かったですね、@QUESTER@さん')
            ,
            new SctItm('仕方が無いですよ、@QUESTER@さん')
            ,
            new SctItm('諦めましょう、@QUESTER@さん')
            // ,
            // new SctItm('@QUESTER@さん、お薬の時間ですよ')
            ,
            new SctItm('@QUESTER@さん、それは無理です')
            ,
            new SctItm('@QUESTER@さん、無茶を云わないで下さい')
            ,
            new SctItm('@QUESTER@さん、もういい加減にして下さい')
            ,
            new SctItm('@QUESTER@さん、もう来ないで下さい')
            ,
            new SctItm('@QUESTER@さん、もう来ないで下さいといったはずです')
            ,
            new SctItm('まだ居たんですか、@QUESTER@さん')
            ,
            new SctItm('お帰りください、@QUESTER@さん')
            ,
            new SctItm('だから@QUESTER@さんは@NICKBAD@なんです')
            ,
            new SctItm('@QUESTER@さんが@SAY@しても仕方がありません')
            ,
            new SctItm('@QUESTER@さんが@L_DID@いる場合ではありません')
            ,
            new SctItm('@QUESTER@さんが@L_DID@みては？')
            ,
            new SctItm('@QUESTER@さんが@DID@@DIDEND@せいだと思いますが？')
            ,
            new SctItm('@QUESTER@さんが@DID@@DIDEND@のが原因です')
            ,
            new SctItm('@DID@@DIDEND@@QUESTER@さんが悪いんです')
            ,
            new SctItm('@DID@@DIDEND@@QUESTER@さんの責任です')
            ,
            new SctItm('@DID@@DIDEND@のは@QUESTER@さんですよね？')
            ,
            new SctItm('@L_PART@さんと@L_DID@みては？')
            ,
            new SctItm('その@L_PART@さんなら大丈夫です')
            ,
            new SctItm('@CLASS@に相談しましょう')
            ,
            new SctItm('@QUESTER@さんが自分でしたらどうですか？')
        ]
    }
}


class selector_a_init extends SctItm_Selector implements ISctItm_Selector {
    constructor(){
        super('@A_INIT@');
        this.itms = [
            new SctItm('おはよう御座います。@A_INIT@')
            ,
            new SctItm('こんにちは。@A_INIT@')
            ,
            new SctItm('ご無沙汰しております。@A_INIT@')
            ,
            new SctItm('@A_SENT@')
            ,
            new SctItm('私は@COUNTRY@で@CLASS@をしている@ADVICER@と云います。')
            ,
            new SctItm('私は@CITY@で@CLASS@をしている@ADVICER@と云います。')
            ,
            new SctItm('私は@CITY@で@DID@いる@ADVICER@と云います。')
            ,
            new SctItm('私は@WHO3@@ADVICER@と云います。')
            ,
            new SctItm('私は@MANYPEOPLE@から『@CALL2@』と@ASSES@@ADVICER@と云います。')
            ,
            new SctItm('私は@DID@@DIDEND@@ADVICER@と云います。')
            ,
            new SctItm('私は@DID@@DIDEND@@CLASS@の@ADVICER@と云います。')

        ]
    }
}
class selector_a_sent extends SctItm_Selector implements ISctItm_Selector {
    constructor(){
        super('@A_SENT@');
        this.itms = [
            new SctItm('@A_MSG@。')
            ,
            new SctItm('@CONECT2@、@A_MSG@。')
            ,
            new SctItm('@A_MSG@が、@QUESTER@さんはご存じですよね？ ')
            ,
            new SctItm('@A_MSG@が、知らないのは@QUESTER@さんだけです。')
            ,
            new SctItm('@A_MSG@が、@QUESTER@さんならお判りでしょう。')
            ,
            new SctItm('@A_MSG@が、@QUESTER@さんとは無関係です。')
            ,
            new SctItm('@A_MSG@が、@QUESTER@さんには無理ですね。')
            ,
            new SctItm('@A_MSG@が、@QUESTER@さんにしか出来ませんよ。')
            ,
            new SctItm('@A_MSG@が、確か@QUESTER@さんもそうでしたよね？ ')
            ,
            new SctItm('@A_MSG@が、@QUESTER@さんは知らなかったのですか？ ')
            ,
            new SctItm('@A_MSG@が、その@L_PART@さんなら知っている筈ですよね？ ')
            ,
            new SctItm('@A_MSG@が、その@L_PART@さんなら@DID@いる筈です。')
            ,
            new SctItm('@A_MSG@が、その@L_PART@さんなら@DID@いましたよ？ ')
            ,
            new SctItm('@A_MSG@が、その@L_PART@さんなら@DID@いましたね。')
            ,
            new SctItm('@A_MSG@が、@DID@いる@L_PART@さんを見かけましたよ。')
            ,
            new SctItm('@A_MSG@が、@TOWN@の@PLACE@で@DID@いたのは@QUESTER@さんですよね？ ')
            ,
            new SctItm('@A_MSG@が、@KEI@@L_PART@に連れられて@DID@いたのは@QUESTER@さんですよね？ ')
            ,
            new SctItm('@A_MSG@が、@CHAR@と一緒に@DID@いたのは@QUESTER@さんですよね？ ')
            ,
            new SctItm('@A_MSG@が、@MANYCHAR@に紛れて@DID@いたのは@QUESTER@さんですよね？ ')
            ,
            new SctItm('@A_MSG@が、@A_SENT@')
            ,
            new SctItm('@A_MSG@し、@A_SENT@')
            ,
            new SctItm('@A_MSG@けど、@A_SENT@')
        ]
    }
}

class selector_a_end extends SctItm_Selector implements ISctItm_Selector {
    constructor(){
        super('@A_END@');
        this.itms = [
            new SctItm('@A_SENT@')
            ,
            new SctItm('@A_SENT@')
            ,
            new SctItm('@A_SENT@')
            ,
            new SctItm('@A_SENT@')
            ,
            new SctItm('さては、@QUESTER@さんの正体は@L_EVILFULLNAME@だったのですね？ ')
            ,
            new SctItm('何を隠そう、私の正体は@L_HEROFULLNAME@だったのです。 ')
            ,
            new SctItm('それでは私の@SONGTYPE@『@SONG_PART@』を聞いて下さい。')
            ,
            new SctItm('それでは最後に聞いて下さい。私の@SONGTYPE@『@SONG_PART@』――。')
        ]
    }
}


class selector_a_msg extends SctItm_Selector implements ISctItm_Selector {
    constructor(){
        super('@A_MSG@');
        this.itms = [
            new SctItm('@A_MSG01@@A_MSG04@')
            ,
            new SctItm('@A_MSG02@、@A_MSG04@')
            ,
            new SctItm('@A_MSG02@、@A_MSG03@@A_MSG04@')
            ,
            new SctItm('@A_MSG01@@A_MSG03@、@A_MSG04@')
            ,
            new SctItm('@A_MSG01@@A_MSG02@、@A_MSG03@@A_MSG04@')
            ,
            new SctItm('私は@MANYPEOPLE@から『@CALL2@』と@GRADE@@ASSES@のです')
            ,
            new SctItm('それは@KEIP2@@QUESTER@さんが『@CALL2@』と@GRADE@@ASSES@からです')
            ,
            new SctItm('それは@KEIP2@@L_PART@さんが@DID@いたからです')
            ,
            new SctItm('@QUESTER@さんの@L_PART@さんなら、@CITY@の@PLACE@で@L_DID@います')
            ,
            new SctItm('@CONECT2@、@L_PART@さんが@DID@います')
            ,
            new SctItm('@CONECT2@、私は@DID@います')
            ,
            new SctItm('@CONECT2@、私が@DID@いるからです')
            ,
            new SctItm('何を隠そう、私の正体は@L_HERO2@だったのです')
            ,
            new SctItm('その@L_HEROFULLNAME@なら私のことです')
            ,
            new SctItm('その@L_PART@さんとは@FRIENDSHIP@なのです')
            ,
            new SctItm('その@L_PART@さんとは@FRIENDSHIP@だったんです')
        ]
    }
}


// 誰が・あなたが
class selector_a01_you extends SctItm_Selector implements ISctItm_Selector {
    constructor(){
        super('@A_MSG01@');
        this.itms = [
            // new SctItm('あなたが')
            // ,
            new SctItm('@QUESTER@さんが@WHERE@で、')
            ,
            new SctItm('あなたの@KEIP2@@L_PART@さんが、@WHERE@で、')
            ,
            new SctItm('@QUESTER@さんの@KEIP2@@L_PART@さんが、@WHERE@で、')
            ,
            new SctItm('私が@WHERE@で、')
            ,
            new SctItm('@MANYPEOPLE@が@WHERE@で、')
        ]
    }
}

// 理由
class selector_a02_quest extends SctItm_Selector implements ISctItm_Selector {
    constructor(){
        super('@A_MSG02@');
        this.itms = [
            new SctItm('@CLASS@をしているなら')
            ,
            new SctItm('@CLASS@になりたいなら')
            ,
            new SctItm('@MANYPEOPLE@のために')
            ,
            new SctItm('@MANYPEOPLE@のせいで')
            ,
            new SctItm('『@CALL2@』と@ASSES@なら')
            ,
            new SctItm('@COUNTRY@にいるなら')
            ,
            new SctItm('@MANYPEOPLE@に@ASSES@のなら')
            ,
            new SctItm('@KEIP2@@PEOPLE@と@ASSES@なら')
            ,
            new SctItm('@DID@いるなら')
            ,
            new SctItm('@DID@しまっては')
            ,
            new SctItm('@DID@いるのは')
        ]
    }
}

// 問題
class selector_a03_issue extends SctItm_Selector implements ISctItm_Selector {
    constructor(){
        super('@A_MSG03@');
        this.itms = [
            new SctItm('@L_HABIT@が止められなくて')
            ,
            new SctItm('@L_HABIT@が出来なくて')
            ,
            new SctItm('@L_HABIT@がしたくて')
            ,
            new SctItm('@L_HABIT@が禁止され')
            ,
            new SctItm('『@CALL2@』と呼ばれて')
        ]
    }
}

// 結果
class selector_a04_result extends SctItm_Selector implements ISctItm_Selector {
    constructor(){
        super('@A_MSG04@');
        this.itms = [
            new SctItm('@GRADE@@THINK@しているのは判ります')
            ,
            new SctItm('@GRADE@@THINK@してしまうのは仕方がありません')
            ,
            new SctItm('@GRADE@@THINK@しても仕方がありません')
            ,
            new SctItm('@GRADE@@THINK@しているとは実に@KEIP2@話です')
            ,
            new SctItm('@GRADE@@THINK@するとは@KEIP2@話です')
            ,
            new SctItm('@GRADE@@THINK@したってどうしようもありません')
            ,
            new SctItm('@GRADE@@THINK@するのは当然です')
            ,
            new SctItm('@KEIP2@@PEOPLE@と@ASSES@のは当たり前です')
            ,
            new SctItm('@DID@いてはどうしようもありません')
            ,
            new SctItm('@DID@いては仕方がありません')
            ,
            new SctItm('@DID@いる場合ではありません')
            ,
            new SctItm('@DID@いたとは信じられません')
            ,
            new SctItm('@DID@みるしかありません')
        ]
    }
}


