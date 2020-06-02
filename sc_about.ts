function set_about()
{
    set_header_menu(4);

    scrollTo(0,0);

    let html : string = '';
    html += '<div id="main_title">'
    html += '<h1>';
    html += 'ABOUT';
    html += '<small>';
    html += ' A00.02';
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



    for(let i = 0; i < rnd_minmax(10,30); i++){
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
        html += 'NICKNAME:@CALL@<br>'
        html += 'JOB:@CLASS@<br>'
        html += 'COUNTRY:@COUNTRY@出身<br>';
        html += 'ADDRESS:@COUNTRY@在住<br>';
        html += 'HOBBY:<bir>@HABIT@<br>';
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
        this.dic_push(new selector_habit());
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
            new SctItm('Programer')
        ];
    }
}


