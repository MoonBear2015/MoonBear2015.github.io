function set_about()
{
    set_header_menu(8);

    scrollTo(0,0);

    let html : string = '';
    html += '<div id="main_title">'
    html += '<h1>';
    html += 'ABOUT';
    html += '<small>';
    html += ' A01.22';
    html += '</small>';
    html += '</h1>';
    html += '</div>';
    html += make_about();

    let elem = document.getElementById('site_main');
    if (elem == null)
    {
        alert('not found "site_main"');
        return;
    }
    elem.innerHTML = ruby_change(html);
}

function make_about()
{
    let html : string = '';

    for(let i = 0; i < rnd_minmax(30,50); i++){
        html += '<div id="about_box" ';
        html += 'style="';
        html += 'margin:     5px; ';
        html += 'padding:    10px; ';
        html += 'border:     0.5px solid #606060;';
        html += 'border-radius:  10px;';
        html += '">';

        html += '<h2 id="about_title">';
        html += '<span style="border-bottom: solid 1px #FFFFFF;">';
        html += '@ABOUT_TITLE@';
        html += '</span>';
        html += '</h2>';
        html += '<br>';
        html += '@ABOUTER@';

        let shtml : string = "";
        shtml += '<div id="about_doc">';
        shtml += '通り名:@CALL2@<br>'
        shtml += '国籍:@COUNTRY@出身<br>';
        shtml += '住所:@L_COUNTRY@在住<br>';
        shtml += '学歴:@SCHOOL01@ @SCHOOLAS@<br>'
        shtml += '専攻:@SCIENCE@<br>'
        shtml += '部活:@SCHOOL01@ @CLUB01@<br>'
        shtml += '受賞歴:@GET01@<br>'
        shtml += '勤務先:@L_COMPANYNAME@(@L_COMPANYCLASS@)<br>'
        shtml += '仕事:@L_CLASS@<br>'
        shtml += '収入:@PAY@<br>'
        shtml += '趣味:@L_HABIT@<br>';
        shtml += '好物:@L_FOOD@<br>';
        shtml += '座右の銘:@L_INSCRIPTION@<br>';
        shtml += '正体：@L_HEROEVIL@<br>';
        shtml += '著作：『@L_BOOK@』<br>';
        shtml += '@SONGTYPE@：『@SONGTITLE@』<br>';
        shtml += '一言：@MESSAGE@<br>';
        shtml += '<br>';
        shtml += '</div>';

        let maker = new news_docs_maker();
        let scnt = 0;
        while(true)
        {
            shtml = maker.gene_docs(shtml,true);
            scnt++;
            let schk = shtml.indexOf('@');
            if (schk < 0) break;
            if (scnt > 10)
            {
                alert('over work : ' + schk.toString());
                break;
            }
        }
        html += shtml;
        html += '</div>';

    }

    html += '<br><br>';
    html += '</div>';

    let maker_about = new about_docs_maker();
    let cnt = 0;
    while(true)
    {
        html = maker_about.gene_docs(html,true);
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

class about_docs_maker extends news_docs_maker {
    constructor(){
        super();
        this.dic_push(new about_title());
        this.dic_push(new selector_abouter());
    }
}

class selector_abouter 
    extends ItmArray<SctItm>
    implements ISctItm_Selector 
{
    public nameCreater : INameCreater;
    public itm_key : string;
    public itm_key2 : string;
    public pic_key : string;
    constructor()
    {
        super();
        this.itm_key = "@ABOUTER@";
        this.itm_key2 = "";
        this.pic_key = "";
        this.nameCreater = new NameCreaterAll();
    }
    get rnd_Itm() : SctItm {
        let name = this.nameCreater.create();
        return new SctItm(name.html_ABOUTER(150),'');
    }
    Copy() : ISctItm_Selector
    {
        let result = new selector_human();
        return result;
    }

    public Gene_Docs(temp_doc : string) : string {
        return replace_docs_A(temp_doc,this);
    }

}

// スタッフ
class about_title extends SctItm_Counter implements ISctItm_Selector{
    constructor(){
        super('@ABOUT_TITLE@');
        this.itms = [
            new SctItm('Main Producer')
            ,
            new SctItm('"News" Producer')
            ,
            new SctItm('"Poem" Producer')
            ,
            new SctItm('"Q&A" Producer')
            ,
            new SctItm('"Shop" Producer')
            ,
            new SctItm('"Horoscope" Producer')
            ,
            new SctItm('"Book" Producer')
            ,
            new SctItm('"Quize" Producer')
            ,
            new SctItm('Web Designer')
            ,
            new SctItm('Web Designer')
            ,
            new SctItm('Web Designer')
            ,
            new SctItm('Programer')
            ,
            new SctItm('Programer')
            ,
            new SctItm('Programer')
            ,
            new SctItm('Programer')
            ,
            new SctItm('Programer')
            ,
            new SctItm('Programer')
            ,
            new SctItm('Programer')
            ,
            new SctItm('Programer')
            ,
            new SctItm('Programer')
            ,
            new SctItm('Programer')
            ,
            new SctItm('Debugger')
        ];
    }
}

// 座右の銘
class selector_inscription extends SctItm_Selector implements ISctItm_Selector {
    constructor(){
        super('@INSCRIPTION@');
        this.Add(itms_inscription);
    }
}
// 座右の銘(L_WHAT使用)
class selector_Lock_inscription extends SctItm_Selector implements ISctItm_Selector {
    constructor(){
        super('@L_INSCRIPTION@');
        this.Add(itms_Lock_inscription);
    }
}
class selector_Lock_TownInscription extends SctItm_Selector implements ISctItm_Selector {
    constructor(){
        super('@L_TOWN_INSCRIPTION@');
        this.Add(itms_Lock_TownInscription);
    }
}

// // 座右の銘：体言
// class selector_item extends SctItm_Selector implements ISctItm_Selector {
//     constructor(){
//         super('@ITEM@');
//         this.itms = [
//             // new SctItm('@CLASS@')
//             // ,
//             // new SctItm('@THEY@')
//             // ,
//             // new SctItm('@PART@')
//             // ,
//             // new SctItm('@NICK@')
//             // ,
//             // new SctItm('@WHAT@')
//             // ,
//             // new SctItm('@STAR@')
//             // ,
//             // new SctItm('@COUNTRY@')
//             // ,
//             // new SctItm('@COUNTRY@人')
//             // ,
//             // new SctItm('@GROUP@')
//             // ,
//             // new SctItm('@GROUP@')
//             // ,

//             new SctItm('@CLASS@')
//             ,
//             new SctItm('@ANIMAL@')
//             ,
//             new SctItm('@FLOWERCALL01@')
//             ,
//             new SctItm('@FRUIT@')
//             ,
//             new SctItm('@FOOD@')
//             ,
//             new SctItm('@RIDE@')
//             ,
//             new SctItm('@DRESS@')
//             ,
//             new SctItm('@MUSIC@')
//             ,
//             new SctItm('@SEXAGE@')
//             ,
//             new SctItm('@PART@')
//             ,
//             new SctItm('@HABIT@')
//             ,
//             new SctItm('@MUSIC@')
//             ,
//             new SctItm('@STAR@')
//             ,
//             new SctItm('@SPORTS@')
//             ,
//             new SctItm('@CAT@')
//             ,
//             new SctItm('@DOG@')
//             ,
//             new SctItm('@BUG@')
//             ,
//             new SctItm('@BUTTERFLY@')
//             ,
//             new SctItm('@TOY@')
//             ,
//             new SctItm('@PEN@')
//             ,
//             new SctItm('@WEAPON@')

//         ];
//     }
// }

// 座右の銘：形容詞  名詞の前に置く「○○する～」「○○な～」「○○をする～」
class selector_command extends SctItm_Selector implements ISctItm_Selector {
    constructor(){
        super('@COMM@');
        this.itms = [
            new SctItm('')
            ,
            new SctItm('@COMM1@')
        ];
    }
}
class selector_command1 extends SctItm_Selector implements ISctItm_Selector {
    constructor(){
        super('@COMM1@');
        this.itms = [
            new SctItm('@DID00@@DIDEND@')
            ,
            new SctItm('@L_DID@@DIDEND@')
            ,
            new SctItm('@SIZE@@END02C@')
            ,
            new SctItm('@KEI1@')
            ,
            new SctItm('@MANY@')
        ];
    }
}

const   itms_inscription = [
    // new SctItm('@COMM@@ITEM@の@ITEM@')
    // ,
    new SctItm('@COMM@@ITEM@は@COMM@@ITEM@@END02A@')
    ,
    new SctItm('@COMM@@ITEM@は第二の@COMM@@ITEM@@END02A@')
    ,
    new SctItm('@COMM@@ITEM@は@ITEM@の|基|もと|')
    ,
    new SctItm('@ITEM@が@ITEM@を@ITEM@にする')
    ,
    new SctItm('@COMM@@ITEM@は@ITEM@への近道')
    ,
    new SctItm('@COMM@@ITEM@が@ITEM@を産む')
    ,
    new SctItm('@COMM@@ITEM@は@ITEM@の始まり')
    ,
    new SctItm('@ITEM@と@ITEM@は使いよう')
    ,
    new SctItm('@MOVE@@ITEM@、@MOVE@@ITEM@')
    ,
    new SctItm('@ITEM@から出た@ITEM@')
    // ,
    // new SctItm('@COMM1@@ITEM@')
    ,
    new SctItm('@COMM1@@ITEM@と@ITEM@')
    ,
    new SctItm('@ITEM@！ @ITEM@！ @ITEM@ッ！')
];
const   itms_Lock_inscription = [
    // new SctItm('@COMM@@L_WHAT@の@ITEM@')
    // ,
    new SctItm('@COMM@@L_ITEM@は@COMM@@L_WHAT@@END02A@')
    ,
    new SctItm('@COMM@@L_WHAT@は第二の@COMM@@ITEM@@END02A@')
    ,
    new SctItm('@COMM@@L_WHAT@は@L_ITEM@の|基|もと|')
    ,
    new SctItm('@ITEM@が@L_WHAT@を@L_ITEM@にする')
    ,
    new SctItm('@COMM@@L_WHAT@は@L_ITEM@への近道')
    ,
    new SctItm('@COMM@@L_WHAT@が@L_ITEM@を産む')
    ,
    new SctItm('@COMM@@L_ITEM@は@L_WHAT@の始まり')
    ,
    new SctItm('@L_WHAT@と@L_ITEM@は使いよう')
    ,
    new SctItm('@MOVE@@L_ITEM@、@MOVE@@L_WHAT@')
    ,
    new SctItm('@L_ITEM@から出た@L_WHAT@')
    // ,
    // new SctItm('@COMM1@@L_WHAT@')
    // ,
    // new SctItm('@COMM1@@L_WHAT@と@ITEM@')
    ,
    new SctItm('@L_WHAT@！ @L_WHAT@！ @L_WHAT@ッ！')
    ,
    new SctItm('@L_ITEM@！ @L_ITEM@！ @L_ITEM@ッ！')
];

const   itms_Lock_TownInscription = [
    // new SctItm('@COMM@@L_WHAT@の@ITEM@')
    // ,
    new SctItm('@COMM@@L_ITEM@は@COMM@@L_TOWN@@END02A@')
    ,
    new SctItm('@COMM@@L_TOWN@は第二の@COMM@@ITEM@@END02A@')
    ,
    new SctItm('@COMM@@L_TOWN@は@L_ITEM@の|基|もと|')
    ,
    new SctItm('@ITEM@が@L_TOWN@を@L_ITEM@にする')
    ,
    new SctItm('@COMM@@L_TOWN@は@L_ITEM@への近道')
    ,
    new SctItm('@COMM@@L_TOWN@が@L_ITEM@を産む')
    ,
    new SctItm('@COMM@@L_ITEM@は@L_TOWN@の始まり')
    ,
    new SctItm('@L_TOWN@と@L_ITEM@は使いよう')
    ,
    new SctItm('@L_ITEM@から出た@L_TOWN@')
    // ,
    // new SctItm('@COMM1@@L_WHAT@')
    // ,
    // new SctItm('@COMM1@@L_WHAT@と@ITEM@')
    ,
    new SctItm('@L_TOWN@！ @L_TOWN@！ @L_TOWN@ッ！')
];
