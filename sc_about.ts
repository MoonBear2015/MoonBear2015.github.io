function set_about()
{
    set_header_menu(5);

    scrollTo(0,0);

    let html : string = '';
    html += '<div id="main_title">'
    html += '<h1>';
    html += 'ABOUT';
    html += '<small>';
    html += ' A01.03';
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
        html += 'border-radius:  1%;';
        html += '">';

        html += '<h2 id="about_title">';
        html += '<span style="border-bottom: solid 1px #FFFFFF;">';
        html += '@ABOUT_TITLE@';
        html += '</span>';
        html += '</h2>';

        html += '<br>';

        html += '@ABOUTER@';
        html += '<div id="about_doc">';
        html += 'あだ名:@CALL2@<br>'
        html += '国籍:@COUNTRY@出身<br>';
        html += '住所:@COUNTRY@在住<br>';
        html += '仕事:@CLASS@<br>'
        html += '趣味:<bir>@HABIT@<br>';
        html += '座右の銘:<bir>@INSCRIPTION@<br>';
        html += '<br>';
        html += '</div>';

        html += '</div>';
        html += '<br><br>';
    }

    html += '</div>';

    let maker_about = new about_docs_maker();
    let maker = new news_docs_maker();
    let cnt = 0;
    while(true)
    {
        html = maker_about.gene_docs(html);
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
    public pic_key : string;
    constructor()
    {
        super();
        this.itm_key = "@ABOUTER@";
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
        return replace_docs(temp_doc,this);
    }

}

// スタッフ
class about_title extends SctItm_Counter implements ISctItm_Selector{
    constructor(){
        super('@ABOUT_TITLE@');
        this.itms = [
            new SctItm('Producer')
            ,
            new SctItm('"News" Editor')
            ,
            new SctItm('"Poem" Editor')
            ,
            new SctItm('"Q&A" Editor')
            ,
            new SctItm('Web Designer')
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

// 座右の銘：体言
class selector_item extends SctItm_Selector implements ISctItm_Selector {
    constructor(){
        super('@ITEM@');
        this.itms = [
            new SctItm('@CLASS@')
            ,
            new SctItm('@PART@')
            ,
            new SctItm('@NICK@')
            ,
            new SctItm('@WHAT@')
            ,
            new SctItm('@THINK@')
            ,
            new SctItm('@DO@')
            ,
            new SctItm('@HABIT@')
            ,
            new SctItm('@ANSWER@')
            ,
            new SctItm('@KEI@@ITEM@')
            ,
            new SctItm('@COMM@@ITEM@')
        ];
    }
}

// 座右の銘：用言・形容詞 「～する」「～な」「～をする」
class selector_command extends SctItm_Selector implements ISctItm_Selector {
    constructor(){
        super('@COMM@');
        this.itms = [
            new SctItm('@KEID@@MOVE@')
            ,
            new SctItm('@DO@@END02B@')
            ,
            new SctItm('@THINK@@END02B@')
            ,
            new SctItm('@HABIT@を@END02B@')
            ,
            new SctItm('@HABIT@を@END02B@')
        ];
    }
}

const   itms_inscription = [
    new SctItm('@ITEM@は@ITEM@である')
    ,
    new SctItm('@ITEM@は第二の@ITEM@なり')
    ,
    new SctItm('@ITEM@は@ITEM@の|基|もと|')
    ,
    new SctItm('@ITEM@が@ITEM@を@ITEM@にする')
    ,
    new SctItm('@ITEM@は@ITEM@の近道')
    ,
    new SctItm('@ITEM@が@ITEM@を産む')
    ,
    new SctItm('@ITEM@は@ITEM@の始まり')
    ,
    new SctItm('@ITEM@と@ITEM@は使いよう')
    ,
    new SctItm('@ITEM@から出た@ITEM@')
    ,
    new SctItm('@ITEM@は@ITEM@である')
];



