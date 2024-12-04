function set_news()
{
    set_header_menu(1);

    scrollTo(0,0);

    let html : string = '';
    html += '<div id="main_title">'
    html += '<h1>';
    html += 'NEWS';
    html += '<small>';
    html += ' N03.60';
    html += '</small>';
    html += '</h1>';
    html += '</div>';

    for(let i = 0; i < 20; i++){
        html += '<p>[' + i.toString() + ']</p>' + make_news();
    }

    let elem = document.getElementById('site_main');
    if (elem == null)
    {
        alert('not found "site_main"');
        return;
    }
    elem.innerHTML = ruby_change(html);
}

function make_news()
{
    let html : string = '';

    html += '<div id="news_box" ';
    html += 'style="';
    html += 'margin:     5px; ';
    html += 'padding:    10px; ';
    html += 'border:     0.5px solid #606060;';
    html += 'border-radius:  10px;';
    html += 'background: ';
    html += 'linear-gradient(0deg,rgba(0,0,0,0.6),rgba(0,0,0,0.8)),';
    html += 'url(./pics/@PIC_DO@);';
    html += 'background-position: center center;';
    html += 'background-size: cover;';
    html += '">';

    html += '<h2 id="news_title">';
    html += '<span style="border-bottom: solid 2px #FFFFFF;">';
    html += '@NEWS_TITLE@';
    html += '</span>';
    html += '</h2>';

    html += '<div id="news_pic_Title">';
    // html += '<div id="news_pic_L">';
    // html += '<figure>';
    html += '<img src="pics/@PIC_WHAT@" width="100%">';
    // html += '</figure>';
    html += '<p>@NEWS_SUBTITLE01@</p>';
    html += '</div>';
    
    html += '<p id="news_doc">';
    html += '　@NEWS_FIRST@';
    // html += '　@NEWS_DOC@';
    for(let i = 0;i < rnd_minmax(4,6);i++)
    {
        html += '@CONECT@、';
        html += '@NEWS_DOC@';
    }
    html += '</p>';

    html += '<div id="news_pic_R">';
    html += '<figure>';
    html += '<img src="pics/@PIC_DO@" width="200px">';
    html += '</figure>';
    html += '<p>@NEWS_SUBTITLE02@</p>';
    html += '</div>';

    html += '<p id="news_doc">';
    html += '　@NEWS_DOC@';
    for(let i = 0;i < rnd_minmax(1,2);i++)
    {
        html += '@CONECT@、';
        html += '@IT@@NEWS_DOC@';
    }
    html += '</p>';

    html += '<div id="news_pic_L">';
    html += '<figure>';
    html += '<img src="pics/@ICON_TECH@" width="200px">';
    html += '</figure>';
    html += '<p>@NEWS_SUBTITLE03@</p>';
    html += '</div>';


    html += '<p id="news_doc">';
    html += '　@NEWS_DOC@';
    for(let i = 0;i < rnd_minmax(1,2);i++)
    {
        html += '@CONECT@、';
        html += '@NEWS_DOC@';
    }
    html += '</p>';
    
    html += '<br>';
    
    html += '<p id="news_book">';
    html += '著書『@BOOK@』より抜粋';
    html += '</p>';
    html += '<br><br>';
    
    html += '@WRITER@';

    html += '<br>';

    html += '</div>';

    let maker = new news_docs_maker();
    let cnt = 0;

    html = maker.gene_docs(html);
    return html;
}


class selector_random_date01
    extends ItmArray<SctItm>
    implements ISctItm_Selector
{
    public itm_key : string;
    public itm_key2 : string;
    public pic_key : string;
    constructor()
    {
        super();
        this.itm_key = "@DATE01@";
        this.itm_key2 = "";
        this.pic_key = "";
    }
    get rnd_Itm() : SctItm {
        switch(rnd_max(2))
        {
            case 0:
                return new SctItm(random_MD_string(),"");
            case 1:
                return new SctItm(random_YM_string(),"");
            default:
                return new SctItm(random_MD_string(),"");
        }
    }
    Copy() : ISctItm_Selector
    {
        let result = new selector_random_date01();
        result.Paste(this.itms);
        return result;
    }

    public Gene_Docs(temp_doc : string) : string {
        return replace_docs_A(temp_doc,this);
    }

 
}
class selector_random_year
    extends ItmArray<SctItm>
    implements ISctItm_Selector
{
    public itm_key : string;
    public itm_key2 : string;
    public pic_key : string;
    constructor()
    {
        super();
        this.itm_key = "@YEAR@";
        this.itm_key2 = "";
        this.pic_key = "";
    }
    get rnd_Itm() : SctItm {
        return new SctItm(random_Y_string(),"");
    }
    Copy() : ISctItm_Selector
    {
        let result = new selector_random_date01();
        result.Paste(this.itms);
        return result;
    }

    public Gene_Docs(temp_doc : string) : string {
        return replace_docs_A(temp_doc,this);
    }
}
class selector_random_NUM10
    extends ItmArray<SctItm>
    implements ISctItm_Selector
{
    public itm_key : string;
    public itm_key2 : string;
    public pic_key : string;
    constructor()
    {
        super();
        this.itm_key = "@NUM10@";
        this.itm_key2 = "";
        this.pic_key = "";
    }
    get rnd_Itm() : SctItm {
        return new SctItm(rnd_minmax(1,9).toString(),"");
    }
    Copy() : ISctItm_Selector
    {
        let result = new selector_random_NUM10();
        result.Paste(this.itms);
        return result;
    }

    public Gene_Docs(temp_doc : string) : string {
        return replace_docs_A(temp_doc,this);
    }
 
}
class selector_random_NUM2TO9
    extends ItmArray<SctItm>
    implements ISctItm_Selector
{
    public itm_key : string;
    public itm_key2 : string;
    public pic_key : string;
    constructor()
    {
        super();
        this.itm_key = "@NUM2TO9@";
        this.itm_key2 = "";
        this.pic_key = "";
    }
    get rnd_Itm() : SctItm {
        return new SctItm(rnd_minmax(2,9).toString(),"");
    }
    Copy() : ISctItm_Selector
    {
        let result = new selector_random_NUM10();
        result.Paste(this.itms);
        return result;
    }

    public Gene_Docs(temp_doc : string) : string {
        return replace_docs_A(temp_doc,this);
    }
 
}

class selector_random_NUM1TO100
    extends ItmArray<SctItm>
    implements ISctItm_Selector
{
    public itm_key : string;
    public itm_key2 : string;
    public pic_key : string;
    constructor()
    {
        super();
        this.itm_key = "@NUM1TO100@";
        this.itm_key2 = "";
        this.pic_key = "";
    }
    get rnd_Itm() : SctItm {
        return new SctItm(rnd_minmax(1,100).toString(),"");
    }
    Copy() : ISctItm_Selector
    {
        let result = new selector_random_NUM10();
        result.Paste(this.itms);
        return result;
    }

    public Gene_Docs(temp_doc : string) : string {
        return replace_docs_A(temp_doc,this);
    }
 
}

class selector_random_NUM2TO100
    extends ItmArray<SctItm>
    implements ISctItm_Selector
{
    public itm_key : string;
    public itm_key2 : string;
    public pic_key : string;
    constructor()
    {
        super();
        this.itm_key = "@NUM2TO100@";
        this.itm_key2 = "";
        this.pic_key = "";
    }
    get rnd_Itm() : SctItm {
        return new SctItm(rnd_minmax(2,100).toString(),"");
    }
    Copy() : ISctItm_Selector
    {
        let result = new selector_random_NUM10();
        result.Paste(this.itms);
        return result;
    }

    public Gene_Docs(temp_doc : string) : string {
        return replace_docs_A(temp_doc,this);
    }
 
}


class selector_random_NUM10TO99
    extends ItmArray<SctItm>
    implements ISctItm_Selector
{
    public itm_key : string;
    public itm_key2 : string;
    public pic_key : string;
    constructor()
    {
        super();
        this.itm_key = "@NUM10TO99@";
        this.itm_key2 = "";
        this.pic_key = "";
    }
    get rnd_Itm() : SctItm {
        return new SctItm(rnd_minmax(10,99).toString(),"");
    }
    Copy() : ISctItm_Selector
    {
        let result = new selector_random_NUM10();
        result.Paste(this.itms);
        return result;
    }

    public Gene_Docs(temp_doc : string) : string {
        return replace_docs_A(temp_doc,this);
    }
 
}


class selector_random_NUM10000
    extends ItmArray<SctItm>
    implements ISctItm_Selector
{
    public itm_key : string;
    public itm_key2 : string;
    public pic_key : string;
    constructor()
    {
        super();
        this.itm_key = "@NUM10000@";
        this.itm_key2 = "";
        this.pic_key = "";
    }
    get rnd_Itm() : SctItm {
        return new SctItm(rnd_max(10000).toString(),"");
    }
    Copy() : ISctItm_Selector
    {
        let result = new selector_random_NUM10000();
        result.Paste(this.itms);
        return result;
    }

    public Gene_Docs(temp_doc : string) : string {
        return replace_docs_A(temp_doc,this);
    }
 
}

class selector_human 
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
        this.itm_key = "@HUMAN@";
        this.itm_key2 = "";
        this.pic_key = "";
        this.nameCreater = new NameCreaterAll();
    }
    get rnd_Itm() : SctItm {
        let name = this.nameCreater.create();
        return new SctItm(name.NmStr,'');
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


abstract class selector_NameLocker 
    extends ItmArray<SctItm>
    implements ISctItm_Selector 
{
    public nameCreater : INameCreater;
    public itm_key : string;
    public itm_key2 : string;
    public pic_key : string;
    public is_first : boolean;
    public created_name : INmItm;

    constructor(in_itm_key : string)
    {
        super();
        this.itm_key = in_itm_key;
        this.itm_key2 = "";
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
    public Gene_Docs(temp_doc : string) : string {
        return replace_docs_A(temp_doc,this);
    }
}
class locker_bookwriter 
    extends selector_NameLocker
    implements ISctItm_Selector 
{
    constructor()
    {
        super("@L_BOOKWRITER@");
    }
    get second_itm() : SctItm {
        return new SctItm(this.created_name.NmStr,'');
    }

    get first_itm() : SctItm {
        return new SctItm(this.created_name.html_BOOKWRITER(100),'');
    }
}


class selector_writer 
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
        this.itm_key = "@WRITER@";
        this.itm_key2 = "";
        this.pic_key = "";
        this.nameCreater = new NameCreaterAll();
    }
    get rnd_Itm() : SctItm {
        let name = this.nameCreater.create();
        return new SctItm(name.html_WRITER(50),'');
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

class selector_writer2 
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
        this.itm_key = "@WRITER2@";
        this.itm_key2 = "";
        this.pic_key = "";
        this.nameCreater = new NameCreaterAll();
    }
    get rnd_Itm() : SctItm {
        let name = this.nameCreater.create();
        return new SctItm(name.html_WRITER2(50),'');
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
class selector_writer3 
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
        this.itm_key = "@WRITER3@";
        this.itm_key2 = "";
        this.pic_key = "";
        this.nameCreater = new NameCreaterAll();
    }
    get rnd_Itm() : SctItm {
        let name = this.nameCreater.create();
        return new SctItm(name.html_WRITER3(70),'');
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


class selector_age
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
        this.itm_key = "@AGE@";
        this.itm_key2 = "";
        this.pic_key = "";
        this.nameCreater = new NameCreaterAll();
    }
    get rnd_Itm() : SctItm {
        let age : string = "";
        age = "(" + rnd_minmax(10,60).toString() + ")";
        return new SctItm(age,'');
    }
    Copy() : ISctItm_Selector
    {
        let result = new selector_age();
        return result;
    }
    public Gene_Docs(temp_doc : string) : string {
        return replace_docs_A(temp_doc,this);
    }

}

class selector_age2
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
        this.itm_key = "@AGE2@";
        this.itm_key2 = "";
        this.pic_key = "";
        this.nameCreater = new NameCreaterAll();
    }
    get rnd_Itm() : SctItm {
        let age : string = "";
        age = rnd_minmax(10,60).toString() + "歳";
        return new SctItm(age,'');
    }
    Copy() : ISctItm_Selector
    {
        let result = new selector_age();
        return result;
    }
    public Gene_Docs(temp_doc : string) : string {
        return replace_docs_A(temp_doc,this);
    }

}

class selector_keiSelector
    extends ItmArray<SctItm>
    implements ISctItm_Selector 
{
    // public nameCreater : INameCreater;
    public itm_key : string;
    public itm_key2 : string;
    public pic_key : string;
    public mode : number;
    constructor()
    {
        super();
        this.itm_key = "";
        this.itm_key2 = "";
        this.pic_key = "";
        this.mode = -1;
    }
    Copy() : ISctItm_Selector
    {
        let result = new selector_age();
        return result;
    }
    get rnd_Itm() : SctItm {
        return new SctItm('','');
    }

    public Gene_Docs(temp_doc : string) : string {
        let result : string = temp_doc;
        if (this.mode == -1)
        {
            this.mode = rnd_max(2);
        }
        if(this.mode == 0)
        {
            result = result.replace("@KEI_A","@KEIP");
            result = result.replace("@KEI_B","@KEIN");
            result = result.replace("@KEID_A","@KEIDP");
            result = result.replace("@KEID_B","@KEIDN");
        }
        else
        {
            result = result.replace("@KEI_A","@KEIN");
            result = result.replace("@KEI_B","@KEIP");
            result = result.replace("@KEID_A","@KEIDN");
            result = result.replace("@KEID_B","@KEIDP");
        }
        return result;
    }

}


class selector_title extends SctItm_Selector implements ISctItm_Selector {
    constructor(){
        super('@NEWS_TITLE@');
        this.itms = [
            new SctItm('@L_WHAT@が@KEID@@L_DO@')
            // ,
            // new SctItm('@L_WHAT@を@KEID@@L_DO@@END02C@@L_CHAR@')
            // ,
            // new SctItm('@L_WHAT@が@KEID@@L_DO@@END02C@@L_CHAR@')
            // ,
            // new SctItm('@L_WHAT@の@L_CHAR@が@KEID@@L_DO@')
            ,
            new SctItm('@L_WHAT@が@KEID@@L_DO@@END02C@')
            // ,
            // new SctItm('@L_WHAT@の@L_CHAR@が@KEID@@L_DO@@END02C@')
            ,
            new SctItm('@L_WHAT@を@L_DO@@END02E@@L_TECH@')
            ,
            new SctItm('@KEI@@L_WHAT@の@L_DO@')
            ,
            new SctItm('@L_DO@@END02C@@L_WHAT@')
            ,
            new SctItm('@KEID@@L_DO@@END02C@@L_WHAT@')
            ,
            new SctItm('@L_DO@@END02C@@L_WHAT@の@THINK@')
            ,
            new SctItm('@L_DO@@END02C@@L_WHAT@の@L_TECH@')
        ];
    }
}

class selector_subtitle01 extends SctItm_Selector implements ISctItm_Selector {
    constructor(){
        super('@NEWS_SUBTITLE01@');
        this.itms = [
            new SctItm('@KEI@@L_CHAR@の@L_WHAT@')
            ,
            new SctItm('@KEI@@L_WHAT@')
            ,
            new SctItm('@KEI@@L_WHAT@の@L_TECH@')
            ,
            new SctItm('@KEI@@L_WHAT@の@L_CHAR@')
            ,
            new SctItm('@L_CHAR@が@DID@@DIDEND@@L_WHAT@')
            ,
            new SctItm('@L_CHAR@だけが@DID@@DIDEND@@L_WHAT@')
            ,
            new SctItm('@KEI@@L_WHAT@の@L_TECH@')
            ,
            new SctItm('@KEI@@L_WHAT@の@L_CHAR@')
            ,
            new SctItm('@KEI@@L_WHAT@の@THINK@')
        ];
    }
}

class selector_subtitle02 extends SctItm_Selector implements ISctItm_Selector {
    constructor(){
        super('@NEWS_SUBTITLE02@');
        this.itms = [
            new SctItm('@L_DO@@END02B@@L_CHAR@')
            ,
            new SctItm('@L_DO@@END02B@@L_CHAR@の@THINK@')
            ,
            new SctItm('@L_DO@@END02B@@L_CHAR@')
            ,
            new SctItm('@L_DO@@END02B@@L_TECH@')
            ,
            new SctItm('@SIZE@@END02B@@L_DO@')
            ,
            new SctItm('@SIZE@@END02B@@L_CHAR@の@L_DO@')
            ,
            new SctItm('@SIZE@@END02B@@L_TECH@の@L_DO@')
            ,
            new SctItm('@L_DO@@SIZE2@@PLACE@')
        ];
    }
}
class selector_subtitle03 extends SctItm_Selector implements ISctItm_Selector {
    constructor(){
        super('@NEWS_SUBTITLE03@');
        this.itms = [
            new SctItm('@L_DO@@END02B@@L_TECH@')
            ,
            new SctItm('@L_DO@@END02B@@KEI@@L_TECH@')
            ,
            new SctItm('@L_WHAT@の@KEI@@L_TECH@')
            ,
            new SctItm('@KEI@@L_WHAT@の@L_TECH@')
            ,
            new SctItm('@KEI@@L_CHAR@の@L_TECH@')
            ,
            new SctItm('@L_CHAR@の@KEI@@L_TECH@')
            ,
            new SctItm('@KEI@@L_TECH@が@L_DO@@END02C@')
            ,
            new SctItm('@L_TECH@が@KEID@@L_DO@@END02C@')
            ,
            new SctItm('@L_WHAT@の@L_TECH@が@L_DO@@END02C@')
        ];
    }
}

class selector_newsFirst extends SctItm_Selector implements ISctItm_Selector {
    constructor(){
        super('@NEWS_FIRST@');
        this.itms = [
            new SctItm('@L_WHAT@が@L_DO@@END02B@。')
            ,
            new SctItm('@KEI@@L_WHAT@の@L_CHAR@が@KEID@@L_DO@@END02B@。')
            ,
            new SctItm('@DATE@に、@KEI@@L_WHAT@の@L_CHAR@が@KEID@@L_DO@@END02B@。')
            ,
            new SctItm('@DATE@に、@ORDER@@KEI@@L_WHAT@の@L_CHAR@が@KEID@@L_DO@@END02B@と思われる。')
            ,
            new SctItm('@DATE@に、@ORDER@@KEI@@L_WHAT@の@L_CHAR@が@KEID@@L_DO@@END02B@などという@ANSWER@が流れている。')
            ,
            new SctItm('@DATE@には、@ORDER@@KEI@@L_WHAT@の@L_CHAR@が@KEID@@L_DO@すると予測されていた。')
            ,
            new SctItm('@DATE@には、@ORDER@@KEI@@L_WHAT@の@L_CHAR@が@KEID@@L_DO@する筈であった。')
            ,
            new SctItm('@KEI@@L_WHAT@の@L_CHAR@が@KEID@@L_DO@@END02B@のは、@DATE@の頃である。')
            ,
            new SctItm('@NEWS_Q01@？ ')
            ,
            new SctItm('@DATE@の@WHERE@での出来事である。')
            ,
            new SctItm('@DATE@に@WHERE@で、私が@DID@@DIDEND@時のことである。')
            ,
            new SctItm('@DATE@に@WHERE@に訪れ、@DID@@DIDEND@時と記憶している。')
            // ,
            // new SctItm('@DATE@、@KEI@@L_WHAT@の@L_CHAR@は、次の様に@SAY03@@END02C@。「@COMMENT@」――')
            // ,
            // new SctItm('これは、@KEI@@L_WHAT@の@L_CHAR@からの@SAY03@である――「@COMMENT@」<br>　')
        ];
    }
}


class selector_people extends SctItm_Selector implements ISctItm_Selector {
    constructor(){
        super('@PEOPLE@');
        this.itms = [
            new SctItm('@CLASS@')
            ,
            new SctItm('@PART@')
            ,
            new SctItm('@COUNTRY@人')
            ,
            new SctItm('@SEXAGE@')
            ,
            new SctItm('@KING@')
        ];
    }
}

class selector_manypeople extends SctItm_Selector implements ISctItm_Selector {
    constructor(){
        super('@MANYPEOPLE@');
        this.itms = [
            new SctItm('@KEI@@THEY@')
            ,
            new SctItm('@MANYMAN@@THEY@')
            ,
            new SctItm('@MANYMAN@@KEI@@THEY@')
            ,
            new SctItm('@MANYMAN@@CLASS@')
            ,
            new SctItm('@MANYMAN@@KEI@@CLASS@')
            ,
            new SctItm('@MANYMAN@@PART@')
            ,
            new SctItm('@MANYMAN@@KEI@@PART@')
            ,
            new SctItm('@MANYMAN@@PEOPLE@')
            ,
            new SctItm('@MANYMAN@@KEI@@PEOPLE@')
        ];
    }
}

class selector_char extends SctItm_Selector implements ISctItm_Selector {
    constructor(){
        super('@CHAR@');
        this.itms = [
            new SctItm('@CLASS@')
            // ,
            // new SctItm('@PART@')
            ,
            new SctItm('@COUNTRY@人')
            ,
            new SctItm('@KING@')
            ,
            new SctItm('@KING@の@PART@')
            ,
            new SctItm('『@KEI@@NICK@』と呼ばれた@SEXAGE@')
        ];
    }
}
class locker_char extends SctItm_SelectLocker implements ISctItm_Selector{
    constructor(){
        super('@L_CHAR@');
        this.itms = [
            new SctItm('@L_CLASS@')
            // ,
            // new SctItm('@L_PART@')
            ,
            new SctItm('@L_COUNTRY@人')
            ,
            new SctItm('@L_COUNTRY@@KING01@')
            ,
            new SctItm('@L_COUNTRY@@KING02@')
            ,
            new SctItm('@L_CITY@@KING03@')
            ,
            new SctItm('@L_KING@')
            ,
            new SctItm('@L_KING@の@PART@')
            ,
            new SctItm('@KING@の@L_PART@')
            ,
            new SctItm('『@KEI@@L_NICK@』と呼ばれた@SEXAGE@')
        ];
    }
}

class selector_manychar extends SctItm_Selector implements ISctItm_Selector {
    constructor(){
        super('@MANYCHAR@');
        this.itms = [
            new SctItm('@MANYMAN@@THEY@')
            ,
            new SctItm('@MANYMAN@@KEI@@THEY@')
            ,
            new SctItm('@MANYMAN@@CLASS@')
            ,
            new SctItm('@MANYMAN@@KEI@@CLASS@')
            ,
            new SctItm('@MANYMAN@@PART@')
            ,
            new SctItm('@MANYMAN@@KEI@@PART@')
            ,
            new SctItm('@MANYMAN@@COUNTRY@人')
            ,
            new SctItm('@MANYMAN@@KEI@@COUNTRY@人')
            ,
            new SctItm('@MANYMAN@@SEXAGE@')
            ,
            new SctItm('@MANYMAN@@KEI@@SEXAGE@')
            ,
            new SctItm('@MANYMAN@@KING@')
            ,
            new SctItm('@MANYMAN@@KEI@@KING@')
            ,
            new SctItm('@MANY@@ANIMAL@')
            ,
            new SctItm('@MANY@@KEI@@ANIMAL@')
            ,
            new SctItm('@MANY@@NICK@')
            ,
            new SctItm('@MANY@@KEI@@NICK@')
        ];
    }
}

class locker_manychar extends SctItm_SelectLocker implements ISctItm_Selector{
    constructor(){
        super('@L_MANYCHAR@');
        this.itms = [
            new SctItm('@MANYMAN@@L_CHAR@')
            ,
            new SctItm('@MANYMAN@@KEI@@L_CHAR@')
        ];
    }
}

// ☆☆
// 書籍のタイトル
class selector_book extends SctItm_Selector implements ISctItm_Selector {
    constructor(){
        super('@BOOK@');
        this.Add(itms_book);
    }
}

class locker_book extends SctItm_SelectLocker implements ISctItm_Selector{
    constructor(){
        super('@L_BOOK@');
        this.Add(itms_book);
    }
}



// News(WHO,DO)特化の呼称
class selector_call extends SctItm_Selector implements ISctItm_Selector {
    constructor(){
        super('@CALL@');
        this.itms = [
            new SctItm('@COMM1@@L_WHAT@')
            ,
            new SctItm('@L_WHAT@の@KEI@@L_CLASS@')
            ,
            new SctItm('@L_WHAT@の@SPECIALIST@')
            ,
            new SctItm('@KEID@@L_DO@@END02C@@L_CHAR@')
            ,
            new SctItm('@KEI@@L_WHAT@の@L_CHAR@')
            ,
            new SctItm('@L_WHAT@の@NICK@')
            ,
            new SctItm('@L_WHAT@が産んだ@NICK@')
            ,
            new SctItm('@L_WHAT@の@L_TECH@')
            ,
            new SctItm('@L_TECH@の@NICK@')
            ,
            new SctItm('@L_TECH@の@SPECIALIST@')
            ,
            new SctItm('@L_WHAT@が@THINK@@END02C@@L_TECH@')
            ,
            new SctItm('@L_DO@@END02C@@L_TECH@')
            ,
            new SctItm('@SIZE@@END02C@@L_TECH@')
            ,
            new SctItm('@L_DO@@END02C@@NICK@')
            ,
            new SctItm('@SIZE@@END02C@@NICK@')
            ,
            new SctItm('@SIZE@@END02C@@L_CLASS@')
            ,
            new SctItm('@DID@@DIDEND@@NICK@')
            ,
            new SctItm('@L_ITEM@の@L_PART@')
            ,
            new SctItm('@L_CHAR@に捧げる@L_ITEM@')
            ,
            new SctItm('@GROUP@の@L_ITEM@')
            ,
            new SctItm('@L_FLOWERCALL@')
            ,
            new SctItm('@L_FLOWERCALL@と呼ばれた@L_CHAR@')
        ];
    }
}


class selector_call2 extends SctItm_Selector implements ISctItm_Selector {
    constructor(){
        super('@CALL2@');
        this.itms = [
            new SctItm('@L_DO@する@L_WHAT@')
            ,
            new SctItm('@KEI1@@ITEM@')
            ,
            new SctItm('@TOWN@の@KEI@@ITEM@')
            ,
            new SctItm('@KEI@@ITEM@')
            ,
            new SctItm('@HABIT@の@NICK@')
            ,
            new SctItm('@DID@@DIDEND@@NICK@')
            ,
            new SctItm('@L_ITEM@の@L_PART@')
            ,
            new SctItm('@GROUP@の@L_ITEM@')
        ];
    }
}

class selector_pop1 extends SctItm_Selector implements ISctItm_Selector {
    constructor(){
        super('@POP1@');
        this.itms = [
            new SctItm('@KEI1@@ITEM@')
            ,
            new SctItm('@TOWN@の@KEI@@ITEM@')
            ,
            new SctItm('@MOVE@@ITEM@')
            ,
            new SctItm('@KEI@@ITEM@')
        ];
    }
}

class selector_date extends SctItm_Selector implements ISctItm_Selector {
    constructor(){
        super('@DATE@');
        this.itms = [
            new SctItm('@PINT@@DATE01@')
            ,
            new SctItm('@PINT@@DATE02@')
            ,
            new SctItm('@PINT@@DATE02@')
            ,
            new SctItm('@PINT@@DATEBEFORE@')
            ,
            new SctItm('@PINT@@DATEAFTER@')
            ,
            new SctItm('およそ@DATEBEFORE@')
            ,
            new SctItm('およそ@DATEAFTER@')
        ];
    }
}

class selector_date02 extends SctItm_Selector implements ISctItm_Selector {
    constructor(){
        super('@DATE02@');
        this.itms = [
            new SctItm('@YEAR@年')
            ,
            new SctItm('@YEAR@年の@SEASON@')
            ,
            new SctItm('今年の@SEASON@')
            ,
            new SctItm('昨年の@SEASON@')
            ,
            new SctItm('翌年の@SEASON@')
        ];
    }
}

class selector_dateBefore extends SctItm_Selector implements ISctItm_Selector {
    constructor(){
        super('@DATEBEFORE@');
        this.itms = [
            new SctItm('@NUM2TO9@日前')
            ,
            new SctItm('@NUM2TO9@年前')
            ,
            new SctItm('@NUM2TO9@ヶ月前')
        ];
    }
}
class selector_dateAfter extends SctItm_Selector implements ISctItm_Selector {
    constructor(){
        super('@DATEAFTER@');
        this.itms = [
            new SctItm('@NUM2TO9@日後')
            ,
            new SctItm('@NUM2TO9@年後')
            ,
            new SctItm('@NUM2TO9@ヶ月後')
        ];
    }
}

class selector_doc extends SctItm_Selector implements ISctItm_Selector {
    constructor(){
        super('@NEWS_DOC@');
        this.itms = [
            new SctItm('@NEWS_C01@、@NEWS_C02@。')
            ,
            new SctItm('@NEWS_C01@、@DATE@に、@NEWS_C02@。')
            ,
            new SctItm('@DATE@に、@WHERE@で、@NEWS_C01@、@NEWS_C02@。')
            ,
            new SctItm('@DATE@に、@WHO@は「@COMMENT@」と@SAY@@END02B@。')
            ,
            new SctItm('@WHO@は@WHERE@で、「@COMMENT@」との@ANSWER@を@SAY@@END02B@。')
            ,
            new SctItm('@WHO@は@DATE@に、@WHERE@で、「@COMMENT@」と@ANSWER@@END02B@。')
            ,
            new SctItm('@WHERE@で、「@COMMENT@」と@SAY@したのは、@WHO@@END02A@。')
            ,
            new SctItm('@WHO@は@WHERE@で、「@COMMENT@」と@SAY@し、@AWARD@を@AWARDGET@@END02B@。')
            ,
            new SctItm('@WHO@が@WHERE@で、@DID@@DIDEND@のは、@DATE@のことであった。')
            ,
            new SctItm('@NEWS_Q01@？ ')
            ,
            new SctItm('@NEWS_Q01@？ @CONECT@、@NEWS_Q01@？ ')
        ];
    }
}

class selector_who extends SctItm_Selector implements ISctItm_Selector {
    constructor(){
        super('@WHO@');
        this.itms = [
            // new SctItm('@DONE@@HUMAN@@AGE@')
            // ,
            new SctItm('@WHO3@@L_CHAR@の@HUMAN@@AGE@')
            // ,
            // new SctItm('『@CALL@』と@KEID@@ASSES@@L_CLASS@の@HUMAN@@AGE@')
            // ,
            // new SctItm('@GROUP@より『@CALL@』と@ASSES@@L_CLASS@の@HUMAN@@AGE@')
            // ,
            // new SctItm('@GROUP@とは@FRIENDSHIP@であった@HUMAN@@AGE@')
            // ,
            // new SctItm('@GROUP@とは@FRIENDSHIP@だと噂された@HUMAN@@AGE@')
            // ,
            // new SctItm('@AWARD@を@AWARDGET@した@HUMAN@@AGE@')
            // ,
            // new SctItm('@AWARD@の受賞者、@HUMAN@@AGE@')
            // ,
            // new SctItm('@GROUP@から密命を受けた@HUMAN@@AGE@')
            // ,
            // new SctItm('@GROUP@から派遣された@HUMAN@@AGE@')
            // ,
            // new SctItm('@GROUP@から推薦された@HUMAN@@AGE@')
            // ,
            // new SctItm('@GROUP@から買収された@HUMAN@@AGE@')
            // ,
            // new SctItm('@GROUP@からスカウトされた@HUMAN@@AGE@')
            // ,
            // new SctItm('@GROUP@から追放された@HUMAN@@AGE@')
            // ,
            // new SctItm('@GROUP@に抹殺された@HUMAN@@AGE@')
            // ,
            // new SctItm('@GROUP@に訴えられた@HUMAN@@AGE@')
            // // ,
            // // new SctItm('@GROUP@を壊滅させた@HUMAN@@AGE@')
            // // ,
            // // new SctItm('@GROUP@を設立した@HUMAN@@AGE@')
            // ,
            // new SctItm('@GROUP@に買収された@HUMAN@@AGE@')
            // ,
            // new SctItm('@GROUP@と契約した@HUMAN@@AGE@')
            // ,
            // new SctItm('@GROUP@に洗脳された@HUMAN@@AGE@')
            // ,
            // new SctItm('@GROUP@に改造された@HUMAN@@AGE@')
            // ,
            // new SctItm('@GROUP@から@AWARD@を贈呈された@HUMAN@@AGE@')
            // ,
            // new SctItm('@GROUP@から@AWARD@を授与した@HUMAN@@AGE@')
            // ,
            // new SctItm('@GROUP@から@AWARD@を剥奪された@HUMAN@@AGE@')
            // ,
            // new SctItm('@KING@の@HUMAN@@AGE@')
        ];
    }
}

class selector_who2 extends SctItm_Selector implements ISctItm_Selector {
    constructor(){
        super('@WHO2@');
        this.itms = [
            new SctItm('『@CALL@』')
            ,
            new SctItm('『@L_INSCRIPTION@』')
            ,
            new SctItm('『@L_TOWN_INSCRIPTION@』')
            ,
            new SctItm('『@CALL@』と@KEID@@ASSES@@L_CHAR@')
            ,
            new SctItm('@MANYPEOPLE@より『@CALL@』と@KEID@@ASSES@@L_CHAR@')
            ,
            new SctItm('@GET01@')
            ,
            new SctItm('@L_COMPANYNAME@(@L_COMPANYCLASS@)')
        ];
    }
}

// 自己紹介 ～（名前） ～@PART@
class selector_who3 extends SctItm_Selector implements ISctItm_Selector {
    constructor(){
        super('@WHO3@');
        this.itms = [
            new SctItm('@L_DO@する')
            ,
            new SctItm('@TOWN@で産まれた')
            ,
            new SctItm('@TOWN@から来た')
            ,
            new SctItm('@TOWN@出身の')
            ,
            new SctItm('@TOWN@在住の')
            ,
            new SctItm('@TOWN@唯一の')
            ,
            new SctItm('『@CALL@』と@KEID@@ASSES@')
            ,
            new SctItm('『@CALL@』と@KEID@@ASSES@')
            ,
            new SctItm('@GROUP@より『@CALL@』と@ASSES@')
            ,
            new SctItm('@GROUP@とは@FRIENDSHIP@であった')
            ,
            new SctItm('@GROUP@とは@FRIENDSHIP@だと噂された')
            ,
            new SctItm('@AWARD@を@AWARDGET@した')
            ,
            new SctItm('@AWARD@の受賞者、')
            ,
            new SctItm('@GROUP@から派遣された')
            ,
            new SctItm('@GROUP@から密命を受けた')
            ,
            new SctItm('@GROUP@から推薦された')
            ,
            new SctItm('@GROUP@から@DIDFRONT@追放された')
            ,
            new SctItm('@GROUP@から批難された')
            ,
            new SctItm('@GROUP@が誇る')
            ,
            new SctItm('@GROUP@にスカウトされた')
            ,
            new SctItm('@GROUP@に買収された')
            ,
            new SctItm('@GROUP@に@DIDFRONT@雇われた')
            ,
            new SctItm('@GROUP@に訴えられた')
            ,
            new SctItm('@GROUP@から追われている')
            ,
            new SctItm('@GROUP@からいつも追われている')
            ,
            new SctItm('@GROUP@から付け狙われている')
            ,
            new SctItm('@GROUP@から何故か付け狙われている')
            ,
            new SctItm('@GROUP@に@DIDFRONT@抹殺された')
            ,
            new SctItm('@GROUP@を@DIDFRONT@壊滅させた')
            ,
            new SctItm('@GROUP@を組織@END02B@')
            ,
            new SctItm('@GROUP@を@DIDFRONT@設立した')
            ,
            new SctItm('@GROUP@に@DIDFRONT@洗脳された')
            ,
            new SctItm('@GROUP@と@DIDFRONT@契約@END02B@')
            ,
            new SctItm('@GROUP@に@DIDFRONT@改造された')
            ,
            new SctItm('@GROUP@に丸め込まれた')
            ,
            new SctItm('@GROUP@に|騙|だま|されている')
            ,
            new SctItm('@GROUP@に利用されているだけの')
            ,
            new SctItm('@GROUP@から@DIDFRONT@@AWARD@を贈呈された')
            ,
            new SctItm('@GROUP@から@AWARD@を授与した')
            ,
            new SctItm('@GROUP@から@AWARD@を剥奪された')
            ,
            new SctItm('@GROUP@に加入した')
            ,
            new SctItm('@GROUP@を@DIDFRONT@退職した')
            ,
            new SctItm('@GROUP@を@DIDFRONT@クビになった')
            ,
            new SctItm('@GROUP@から@DIDFRONT@追放された')
            ,
            new SctItm('@SCHOOL@出身の')
            ,
            new SctItm('@SCHOOL@に通う')
            ,
            new SctItm('@SCHOOL@在学中の')
            ,
            new SctItm('@SCHOOL@筆頭の')
            ,
            new SctItm('@SCHOOL@を中退@END02B@')
            ,
            new SctItm('『@CALL2@』と呼ばれている')
            ,
            new SctItm('@MANYPEOPLE@より『@CALL@』と@ASSES@')
            ,
            new SctItm('@NICK@そっくりな')
            ,
            new SctItm('@NICK@のような@BODY@をした')
            ,
            new SctItm('@ANIMAL@の@BODY@を持つ')
            ,
            new SctItm('@FLOWER@の香りが漂う')
            ,
            new SctItm('@FRUIT@の香りが漂う')
            ,
            new SctItm('@FOOD@の匂いがする')
            ,
            new SctItm('@ANIMAL@の匂いがする')
            ,
            new SctItm('@DRESS@を着た')
            ,
            new SctItm('@UNDER@をはいた')
            ,
            new SctItm('@DID@ばかり@DIDEND@')
            ,
            new SctItm('@DID@@DIDEND@')
            ,
            new SctItm('@DID@@DIDEND@筈であった')
            ,
            new SctItm('@AWARD@を@AWARDGET@@END02B@')
            ,
            new SctItm('@DONE@')
            ,
            new SctItm('@CERTIFICATE@に@KEID@@ASSES03@')
            ,
            new SctItm('@GROUP@から@CERTIFICATE@に@KEID@@ASSES03@')
            ,
            new SctItm('多くの@MANYPEOPLE@から@CERTIFICATE@に@KEID@@ASSES03@')
            ,
            new SctItm('@L_COMPANYNAME@に採用された')
            ,
            new SctItm('@L_COMPANYNAME@に就職した')
            ,
            new SctItm('@L_COMPANYNAME@より派遣された')
            ,
            new SctItm('@L_COMPANYNAME@に転職された')
            ,
            new SctItm('@L_COMPANYNAME@から退職した')
            ,
            new SctItm('@L_COMPANYNAME@からクビになった')
        ];
    }
}

class selector_who4 extends SctItm_Selector implements ISctItm_Selector {
    constructor(){
        super('@WHO4@');
        this.itms = [
            new SctItm('@L_CHAR@')
            ,
            new SctItm('@L_CLASS@')
            ,
            new SctItm('@TOWN@出身')
            ,
            new SctItm('@TOWN@在住')
            ,
            new SctItm('『@CALL2@』')
            ,
            new SctItm('『@CALL2@』と@KEID@@ASSES@@L_CHAR@')
            ,
            new SctItm('@MANYPEOPLE@より『@CALL2@』と@KEID@@ASSES@@L_CHAR@')
            ,
            new SctItm('座右の銘『@INSCRIPTION@』')
            ,
            new SctItm('@SONGTYPE@『@SONGTITLE@』')
            ,
            new SctItm('@GET01@')
            ,
            new SctItm('@L_COMPANYNAME@(@L_COMPANYCLASS@)')
       ];
    }
}


class selector_co extends SctItm_Selector implements ISctItm_Selector {
    constructor(){
        super('@CO@');
        this.itms = [
            new SctItm('Co.,Ltd.')
            ,
            new SctItm('Ltd.')
            ,
            new SctItm('Corp.')
            ,
            new SctItm('Inc.')
            ,
            new SctItm('KK.')
        ];
    }
}


class selector_newsC01 extends SctItm_Selector implements ISctItm_Selector {
    constructor(){
        super('@NEWS_C01@');
        this.itms = [
            new SctItm('@KEI@@L_WHAT@の@L_CHAR@が@KEID@@L_DO@@END01B@')
            ,
            new SctItm('@KEI@@L_WHAT@の@L_CHAR@による@KEI@@KEY@@END01A@')
            ,
            new SctItm('@KEI@@L_WHAT@で@KEI@@KEY@が@SIZE@@END01B@')
            ,
            new SctItm('@KEI@@L_WHAT@では@KEI@@KEY@や@KEY@が@SIZE@@END01B@')
            ,
            new SctItm('@KEY@が@SIZE@@END02B@@L_WHAT@@END01A@')
            ,
            new SctItm('@KEI@@KEY@や@KEY@が@SIZE@@END02B@@L_WHAT@@END01A@')
            ,
            new SctItm('@L_MANYCHAR@が@KEID@@L_DO@@END01B@')
            ,
            new SctItm('@L_MANYCHAR@による@KEI@@KEY@が@SIZE@@END01B@')
            ,
            new SctItm('@L_MANYCHAR@の@THINK@や@THINK@@SIZE2@@L_WHAT@@END01A@')
            ,
            new SctItm('@L_MANYCHAR@が@DID@@DIDEND@@L_WHAT@@END01A@')
            ,
            new SctItm('@WHO@が@DID@@DIDEND@@L_WHAT@@END01A@')
        ];
    }
}

class selector_end01a extends SctItm_Selector implements ISctItm_Selector {
    constructor(){
        super('@END01A@');
        this.itms = [
            new SctItm('により')
            ,
            new SctItm('のため')
            ,
            new SctItm('では')
            ,
            // new SctItm('には')
            // ,
            new SctItm('で')
        ];
    }
}

class selector_end01b extends SctItm_Selector implements ISctItm_Selector {
    constructor(){
        super('@END01B@');
        this.itms = [
            new SctItm('し')
            ,
            new SctItm('したが')
            ,
            new SctItm('する中')
            ,
            new SctItm('したため')
            ,
            new SctItm('するため')
            ,
            new SctItm('してしまったため')
        ];
    }
}


class selector_newsC02 extends SctItm_Selector implements ISctItm_Selector {
    constructor(){
        super('@NEWS_C02@');
        this.itms = [
            new SctItm('@MANYPEOPLE@が@DID@@DIDEND@')
            ,
            new SctItm('@MANYPEOPLE@が@KEID@@L_DO@@END02B@')
            ,
            new SctItm('@MANYPEOPLE@が@KEI@@NICK@@END02A@')
            ,
            new SctItm('@MANYPEOPLE@による@KEI@@KEY@が@SIZE@@END02B@')
            ,
            new SctItm('@MANYPEOPLE@による@KEI@@KEY@や@KEY@が@SIZE@@END02B@')
            ,
            new SctItm('@MANYPEOPLE@の@THINK@@SIZE2@')
            ,
            new SctItm('@MANYPEOPLE@の@THINK@と@THINK@@SIZE2@')
            ,
            new SctItm('@WHO@は@DID@@DIDEND@')
        ];
    }
}

class selector_newsQ01 extends SctItm_Selector implements ISctItm_Selector {
    constructor(){
        super('@NEWS_Q01@');
        this.itms = [
            new SctItm('@WHY@、@L_WHAT@の@L_CHAR@は@L_DO@したのか')
            ,
            new SctItm('@WHY@、@KEI@@L_WHAT@の@L_CHAR@は@KEID@@L_DO@@END02B@のだろうか')
            ,
            new SctItm('@WHY@、@KEI@@WHAT@の@L_CHAR@もまた@L_DO@@END02B@のか')
            ,
            new SctItm('@WHY@、@KEI@@L_WHAT@の@L_CHAR@は@DID@しまうのか')
            ,
            new SctItm('@WHY@、@GROUP@は@WHERE@で、@KEI@@L_WHAT@を@KEID@@L_DO@してしまったのか')
            ,
            new SctItm('@WHY@、@L_WHAT@の@KEI@@GROUP@は、@WHERE@で、@KEID@@L_DO@してしまうのか')
        ];
    }
}

class selector_why extends SctItm_Selector implements ISctItm_Selector {
    constructor(){
        super('@WHY@');
        this.itms = [
            new SctItm('何故')
            ,
            new SctItm('どうして')
            ,
            new SctItm('いかに')
            ,
            new SctItm('いかにして')
            ,
            new SctItm('何があって')
            ,
            new SctItm('どういう訳で')
            ,
            new SctItm('どんな理由で')
            ,
            new SctItm('如何なる理由で')
        ];
    }
}

class selector_why2 extends SctItm_Selector implements ISctItm_Selector {
    constructor(){
        super('@WHY2@');
        this.itms = [
            new SctItm('何故か')
            ,
            new SctItm('何故だか')
            ,
            new SctItm('何があったのか')
            ,
            new SctItm('どういう訳か')
            ,
            new SctItm('不思議と')
            ,
            new SctItm('意外なことに')
            ,
            new SctItm('意外にも')
        ];
    }
}

// 最後に句読点をつけられると困る
class selector_comment extends SctItm_Selector implements ISctItm_Selector {
    constructor(){
        super('@COMMENT@');
        this.itms = [
            new SctItm('@TIMEFRONT@@COMMENT1@')
            ,
            new SctItm('@TIMEFRONT@@COMMENT1@')
            ,
            new SctItm('@TIMEFRONT@@COMMENT1@')
            ,
            new SctItm('@TIMEFRONT@@COMMENT1@')
            ,
            new SctItm('@TIMEFRONT@@COMMENT1@')
            ,
            new SctItm('@TIMEFRONT@@COMMENT1@')
            ,
            new SctItm('@TIMEFRONT@@COMMENT1@')
            ,
            new SctItm('@TIMEFRONT@@COMMENT1@')
            // ,
            // new SctItm('@TIMEFRONT@@COMMENT1@――')
            // ,
            // new SctItm('@TIMEFRONT@@COMMENT1@――')
            // ,
            // new SctItm('――@TIMEFRONT@@COMMENT1@')
            // ,
            // new SctItm('――@TIMEFRONT@@COMMENT1@')
            ,
            new SctItm('@TIMEFRONT@@COMMENT1@……')
            ,
            new SctItm('@TIMEFRONT@@COMMENT1@……')
            ,
            new SctItm('……@COMMENT1@')
            ,
            new SctItm('……@TIMEFRONT@@COMMENT1@')
            ,
            new SctItm('@KEI1@@NICK@、@KEI1@@NICK@、@KEI1@@NICK@、@KEI1@@NICK@……')
            ,
            new SctItm('@KEI1@@KEY@、@KEI1@@KEY@、@KEI1@@KEY@、@KEI1@@KEY@……')
            ,
            new SctItm('@YESNO@ッ！ @NEWS_C02@ッ！')
            ,
            new SctItm('@NICKBAD@ッ！ @NICKBAD@ッ！ @NICKBAD@ッ！')
            ,
            new SctItm('@L_WHAT@の@NICKBAD@！ @L_WHAT@の@NICKBAD@！ @L_WHAT@の@NICKBAD@！ @L_WHAT@の@NICKBAD@！ ')
            ,
            new SctItm('@L_INSCRIPTION@')
            ,
            new SctItm('@MESSAGE@')
        ];
    }
}


// 最初・最後に句読点などを付けても問題無し
class selector_comment1 extends SctItm_Selector implements ISctItm_Selector {
    constructor(){
        super('@COMMENT1@');
        this.itms = [
            new SctItm('@COMMENT2@')
            ,
            new SctItm('@YESNO@、@COMMENT2@')
            ,
            new SctItm('@YESNO@、@COMMENT2@')
            ,
            new SctItm('@CONECT@、@COMMENT2@')
            ,
            new SctItm('@CONECT@、@COMMENT2@')
            ,
            new SctItm('@COMMENT2@。@COMMENT2@')
            ,
            new SctItm('@COMMENT2@。@COMMENT2@')
            ,
            new SctItm('@COMMENT2@。@COMMENT2@')
            ,
            new SctItm('@COMMENT2@。@COMMENT2@。@COMMENT2@')
            ,
            new SctItm('@COMMENT2@。@COMMENT2@。@COMMENT2@')
            ,
            new SctItm('@COMMENT2@。@COMMENT2@。@COMMENT2@')
            ,
            new SctItm('@COMMENT2@。@CONECT@、@COMMENT2@')
            ,
            new SctItm('@COMMENT2@。@CONECT@、@COMMENT2@')
            ,
            new SctItm('@COMMENT2@。@YESNO@、@COMMENT2@')
            ,
            new SctItm('@COMMENT2@。@YESNO@、@COMMENT2@')
            // ,
            // new SctItm('@L_WHAT@は@NICK@？ @COMMENT@')
            // ,
            // new SctItm('@L_WHAT@が@L_DO@@END02B@？ @COMMENT@')
        ];
    }
}

// 発言・句読点をつけられても困らない
class selector_comment2 extends SctItm_Selector implements ISctItm_Selector {
    constructor(){
        super('@COMMENT2@');
        this.itms = [
            new SctItm('@NEWS_C01@、@NEWS_C02@')
            ,
            new SctItm('@COMMENT2@。@COMMENT2@')
            ,
            new SctItm('@CONECT@、@COMMENT2@')
            ,
            new SctItm('@YESNO@、@COMMENT2@')
            ,
            new SctItm('@CALL@が@SIZE@@END02B@')
            ,
            new SctItm('@L_WHAT@の@L_CHAR@は@KEID@@L_DO@@END02B@@KEI@@NICK@だと@ASSES@')
            ,
            new SctItm('@MANYPEOPLE@は@CALL@@END02A@')
            ,
            new SctItm('@CALL@@END02A@')
            ,
            new SctItm('@MANYPEOPLE@は、@CALL@@END02A@')
            ,
            new SctItm('@MANYPEOPLE@の@KEY@@END02A@')
            ,
            new SctItm('@L_WHAT@の@L_CHAR@は@L_DO@@END02B@')
            ,
            new SctItm('@L_WHAT@の@L_CHAR@は@KEI@@NICK@の@PART@だと@KEID@@ASSES@')
            ,
            new SctItm('@L_WHAT@の@L_CHAR@は@KEID@@L_DO@@END02B@@KEI@@THEY@@END02A@')
            // ,
            // new SctItm('『@CALL@』で、『@CALL@』@END02A@')
            ,
            new SctItm('@YESNO@、『@CALL@』だと@ASSES@')
            ,
            new SctItm('@YESNO@、@L_CHAR@の@KEY@@END02A@')
            ,
            new SctItm('@YESNO@、@L_WHAT@の@L_CHAR@が@KEI@@NICK@@END02A@')
            ,
            new SctItm('@YESNO@、@KEI2@な@PART@が@SAY@@END02B@')
            // ,
            // new SctItm('『@CALL@』、@YESNO@、それが@PART@の@PART@@END02A@')
            ,
            new SctItm('@KEID@@L_DO@@END02B@@KEI@@NICK@と@KEID@@ASSES@@THEY@、@YESNO@、それが@L_WHAT@の@L_CHAR@@END02A@')
            ,
            new SctItm('@KEID@@L_DO@@END02B@@THEY@、@YESNO@、それが@L_WHAT@@END02A@')
            ,
            new SctItm('@L_WHAT@の@L_CLASS@、それが@L_CHAR@@END02A@')
            ,
            new SctItm('@EMOFRONT@@EMO@@END02D@')
            ,
            new SctItm('@L_WHAT@で@DID@@DIDEND@')
            ,
            new SctItm('@L_CHAR@が@DID@@DIDEND@')
            ,
            new SctItm('@L_WHAT@で私は@DID@@DIDEND@@END02D1@')
            ,
            new SctItm('@L_WHAT@で私が@DID@いると、@L_MANYCHAR@が@DID@@DIDEND@@END02D1@')
            ,
            new SctItm('私が@DID@@DIDEND@とき、@L_WHAT@で@L_MANYCHAR@が@DID@@DIDEND@@END02D1@')
            ,
            new SctItm('私が@DID@いると、@L_WHAT@で@L_MANYCHAR@が@DID@@DIDEND@@END02D1@')
            ,
            new SctItm('私が@L_WHAT@で@DID@いると、@L_MANYCHAR@が@DID@@DIDEND@@END02D1@')
            ,
            new SctItm('私が@L_WHAT@に行くと、@L_MANYCHAR@が@DID@@DIDEND@@END02D1@')
            ,
            new SctItm('@DATE@に、私は@DID@@DIDEND@@END02D1@')
            ,
            new SctItm('@DATE@に、私は@L_WHAT@で@DID@@DIDEND@@END02D1@')
            ,
            new SctItm('@DATE@に私もまた、@L_WHAT@で@DID@@DIDEND@@END02D1@')
            ,
            new SctItm('@DATE@に私が@DID@@DIDEND@とき、@L_MANYCHAR@が@DID@@DIDEND@@END02D1@')
            ,
            new SctItm('@YESNO@、@L_WHAT@で@DID@みよう')
            ,
            new SctItm('@YESNO@、@L_WHAT@で@DID@みようではないか')
            ,
            new SctItm('@YESNO@、@L_WHAT@で@DID@みたかったんだ')
            ,
            new SctItm('@YESNO@、@L_WHAT@で@DID@みた@END02D@')
            ,
            new SctItm('@YESNO@、@L_WHAT@で@DID@はどうだろう')
            ,
            new SctItm('@YESNO@、@L_WHAT@で@DID@はいけない')
            ,
            new SctItm('@YESNO@、@L_WHAT@で@DID@はダメな@END02D1@')
            ,
            new SctItm('@YESNO@、@L_WHAT@で@DID@もよいのか')
            ,
            new SctItm('@YESNO@、@L_WHAT@で@DID@しまった')
            ,
            new SctItm('@WHY@、@L_MANYCHAR@は@DID@しまったのか')
            ,
            new SctItm('@WHY@、@L_MANYCHAR@は@DID@しまうのか')
            ,
            new SctItm('@WHY@、@L_MANYCHAR@は@DID@しまったんだ')
            ,
            new SctItm('@L_WHAT@は@KEIFRONT@@KEIM1@')
            ,
            new SctItm('@L_DO@する@L_WHAT@の@L_MANYCHAR@は、@WHY2@@KEIFRONT@@KEIM1@')
            ,
            new SctItm('@L_WHAT@の@L_MANYCHAR@は、@WHY2@@KEIFRONT@@KEIM1@')
            ,
            new SctItm('@L_WHAT@で@DID@いた@L_CHAR@は、@WHY2@@KEIFRONT@@KEIM1@')
            ,
            new SctItm('@L_CHAR@は、@WHY2@@KEIFRONT@@KEIM1@')
            ,
            new SctItm('@L_WHAT@は@WHY@@KEIFRONT@@KEI@のか')
            ,
            new SctItm('@L_DO@する@L_WHAT@の@L_CHAR@は、@WHY@@KEIFRONT@@KEI@のか')
            ,
            new SctItm('@L_WHAT@の@L_MANYCHAR@は、@WHY@@KEIFRONT@@KEI@のか')
            ,
            new SctItm('@L_WHAT@で@DID@いた@L_CHAR@は、@WHY@@KEIFRONT@@KEI@のか')
            ,
            new SctItm('@L_CHAR@は、@WHY@@KEIFRONT@@KEI@のか')
        ];
    }
}

// 肯定・否定 ・・・？　～、・・・
class selector_YESNO extends SctItm_Selector implements ISctItm_Selector {
    constructor(){
        super('@YESNO@');
        this.itms = [
            new SctItm('そうだ')
            ,
            new SctItm('しかし')
            ,
            new SctItm('だが')
            ,
            new SctItm('それでも')
            ,
            new SctItm('結局')
            ,
            new SctItm('確かに')
            ,
            new SctItm('その通り')
            ,
            new SctItm('すなわち')
            ,
            new SctItm('正に')
            ,
            new SctItm('正しく')
            ,
            new SctItm('間違いなく')
            ,
            new SctItm('確かに')
            ,
            new SctItm('紛れもなく')
            ,
            new SctItm('疑いようも無く')
            ,
            new SctItm('信じられないことだが')
            ,
            new SctItm('やはり')
            ,
            new SctItm('つまり')
            ,
            new SctItm('とにかく')
            ,
            new SctItm('だから')
            ,
            new SctItm('ならば')
            ,
            new SctItm('だとしたら')
            ,
            new SctItm('もしそうなら')
        ];
    }
}

class selector_TimeFront extends SctItm_Selector implements ISctItm_Selector {
    constructor(){
        super('@TIMEFRONT@');
        this.itms = [
            new SctItm('')
            ,
            new SctItm('')
            ,
            new SctItm('')
            ,
            new SctItm('')
            ,
            new SctItm('')
            ,
            new SctItm('')
            ,
            new SctItm('')
            ,
            new SctItm('')
            ,
            new SctItm('@DATE@に、')
            ,
            new SctItm('@DATE@には、')
            ,
            new SctItm('そういえば、')
            ,
            new SctItm('思い起こせば、')
            ,
            new SctItm('今更だが、')
            ,
            new SctItm('@AGE2@の頃、')
            ,
            new SctItm('あの時、')
            ,
            new SctItm('昨日のことだが、')
            ,
            new SctItm('今朝、')
            ,
            new SctItm('今夜にも、')
            ,
            new SctItm('明日になれば、')
        ];
    }
}

class selector_TimeFront2 extends SctItm_Selector implements ISctItm_Selector {
    constructor(){
        super('@TIMEFRONT2@');
        this.itms = [
            new SctItm('')
            ,
            new SctItm('')
            ,
            new SctItm('')
            ,
            new SctItm('')
            ,
            new SctItm('')
            ,
            new SctItm('')
            ,
            new SctItm('')
            ,
            new SctItm('')
            ,
            new SctItm('@DATE@に、')
            ,
            new SctItm('@DATE@には、')
            ,
            new SctItm('そういえば、')
            ,
            new SctItm('思い起こせば、')
            ,
            new SctItm('今更ですが、')
            ,
            new SctItm('今更なんですが、')
            ,
            new SctItm('@AGE2@の頃、')
            ,
            new SctItm('あの時、')
            ,
            new SctItm('昨日のことですが、')
            ,
            new SctItm('今朝、')
            ,
            new SctItm('今夜にも、')
            ,
            new SctItm('明日になれば、')
            ,
            new SctItm('@ANIMAL@の鳴く頃に、')
            ,
            new SctItm('@ANIMAL@が舞う時期に、')
        ];
    }
}

class selector_DIDFRONT extends SctItm_Selector implements ISctItm_Selector {
    constructor(){
        super('@DIDFRONT@');
        this.itms = [
            new SctItm('')
            ,
            new SctItm('')
            ,
            new SctItm('')
            ,
            new SctItm('|既|すで|に')
            ,
            new SctItm('もう')
            ,
            new SctItm('もはや')
            ,
            new SctItm('早くも')
            ,
            new SctItm('いつの間にか')
            ,
            new SctItm('理由も無く')
            ,
            new SctItm('意味も無く')
            ,
            new SctItm('訳も判らず')
        ];
    }
}

// コメント用・感情に対する前置き
class selector_emofront extends SctItm_Selector implements ISctItm_Selector {
    constructor(){
        super('@EMOFRONT@');
        this.itms = [
            new SctItm('正直、')
            ,
            new SctItm('なんというか、')
            ,
            new SctItm('とても')
            ,
            new SctItm('ああ、')
            ,
            new SctItm('いやはや、')
            // ,
            // new SctItm('こうなっては')
        ];
    }
}
class selector_keifront extends SctItm_Selector implements ISctItm_Selector {
    constructor(){
        super('@KEIFRONT@');
        this.itms = [
            new SctItm('少し')
            ,
            new SctItm('少々')
            ,
            new SctItm('ちょっと')
            ,
            new SctItm('とても')
            ,
            new SctItm('極めて')
            ,
            new SctItm('滅多に無いほど')
            ,
            new SctItm('非常に')
            ,
            new SctItm('@EMO@いくらい')
            ,
            new SctItm('@EMO@いほど')
            ,
            new SctItm('@EMO@いくらいに')
            ,
            new SctItm('涙が出るほど')
            ,
            new SctItm('血がにじむほどに')
        ];
    }
}


class selector_end02a extends SctItm_Selector implements ISctItm_Selector {
    constructor(){
        super('@END02A@');
        this.itms = [
            new SctItm('だ')
            ,
            new SctItm('である')
            ,
            new SctItm('であった')
            ,
            new SctItm('だった')
            ,
            new SctItm('なのだ')
            ,
            new SctItm('だったのだ')
        ];
    }
}

class selector_end02b extends SctItm_Selector implements ISctItm_Selector {
    constructor(){
        super('@END02B@');
        this.itms = [
            new SctItm('する')
            ,
            new SctItm('した')
            ,
            new SctItm('して@DIDEND@')
            ,
            new SctItm('してしまった')
            // ,
            // new SctItm('される')
            // ,
            // new SctItm('された')
            // ,
            // new SctItm('されている')
            // ,
            // new SctItm('されていた')
        ];
    }
}

class selector_end02c extends SctItm_Selector implements ISctItm_Selector {
    constructor(){
        super('@END02C@');
        this.itms = [
            new SctItm('する')
            ,
            new SctItm('した')
            // ,
            // new SctItm('される')
            // ,
            // new SctItm('された')
        ];
    }
}
class selector_end02d extends SctItm_Selector implements ISctItm_Selector {
    constructor(){
        super('@END02D@');
        this.itms = [
            new SctItm('@END02D2@@END02D1@')
        ];
    }
}

class selector_end02d1 extends SctItm_Selector implements ISctItm_Selector {
    constructor(){
        super('@END02D1@');
        this.itms = [
            new SctItm('のだ')
            ,
            new SctItm('んだ')
            ,
            new SctItm('のです')
            ,
            new SctItm('んです')
        ];
    }
}

class selector_end02d2 extends SctItm_Selector implements ISctItm_Selector {
    constructor(){
        super('@END02D2@');
        this.itms = [
            new SctItm('い')
            ,
            new SctItm('かった')
            ,
            new SctItm('くてどうしようもない')
            ,
            new SctItm('くて堪らない')
            ,
            new SctItm('くて仕方が無い')
        ];
    }
}

class selector_end02e extends SctItm_Selector implements ISctItm_Selector {
    constructor(){
        super('@END02E@');
        this.itms = [
            new SctItm('させる')
            ,
            new SctItm('させた')
        ];
    }
}

// 名詞・人物・組織　～は・～が・～の
class selector_what extends SctItm_Selector implements ISctItm_Selector{
    constructor(){
        super('@WHAT@');
        this.Add(itms_what);
        this.Add(itms_city);
    }
}


// （固定）名詞・人物・組織　～は・～が・～の
class locker_what extends SctItm_SelectLocker implements ISctItm_Selector{
    constructor(){
        super('@L_WHAT@','','@PIC_WHAT@');
        this.Add(itms_what);
        this.Add(itms_city);
    }
}

// 動名詞 の～
class selector_do extends SctItm_Selector implements ISctItm_Selector{
    constructor(){
        super('@DO@');
        this.Add(itms_do);
    }
}
// （固定）動名詞 の～
class locker_do extends SctItm_SelectLocker implements ISctItm_Selector{
    constructor(){
        super('@L_DO@','','@PIC_DO@');
        this.Add(itms_do);
    }
}

class selector_accident extends SctItm_Selector implements ISctItm_Selector {
    constructor(){
        super('@ACCIDENT@');
        this.Add(itms_accident);
    }
}

class locker_accident extends SctItm_SelectLocker implements ISctItm_Selector{
    constructor(){
        super('@L_ACCIDENT@');
        this.Add(itms_accident);
    }
}


// 事象・事件・事故・行事
class selector_key extends SctItm_Selector implements ISctItm_Selector {
    constructor(){
        super('@KEY@');
        this.Add(itms_accident);
        this.Add(itms_festival);
    }
}
class locker_key extends SctItm_SelectLocker implements ISctItm_Selector{
    constructor(){
        super('@L_KEY@');
        this.Add(itms_accident);
        this.Add(itms_festival);
    }
}
class selector_festival extends SctItm_Selector implements ISctItm_Selector {
    constructor(){
        super('@FESTIVAL@');
        this.Add(itms_festival);
    }
}
class locker_festival extends SctItm_SelectLocker implements ISctItm_Selector{
    constructor(){
        super('@L_FESTIVAL@');
        this.Add(itms_festival);
    }
}

// 出来事の増減・発生 が～する・が～した・が～し、
class selector_size1 extends SctItm_Selector implements ISctItm_Selector {
    constructor(){
        super('@SIZE@');
        this.itms = [
            new SctItm('勃発')
            ,
            new SctItm('蔓延')
            ,
            new SctItm('急増')
            ,
            new SctItm('暴発')
            ,
            new SctItm('多発')
            ,
            new SctItm('復活')
            ,
            new SctItm('衰退')
            ,
            new SctItm('解消')
            ,
            new SctItm('消失')
            ,
            new SctItm('流行')
            ,
            new SctItm('再発')
            ,
            new SctItm('浸透')
            ,
            new SctItm('影響')
            ,
            new SctItm('無力化')
            ,
            new SctItm('活性化')
            ,
            new SctItm('肥大化')
            ,
            new SctItm('無力化')
            ,
            new SctItm('大型化')
            ,
            new SctItm('巨大化')
            // ,
            // new SctItm('禁止')
            ,
            new SctItm('停止')
            ,
            new SctItm('中止')
            ,
            new SctItm('延期')
            ,
            new SctItm('停滞')
            ,
            new SctItm('回復')
            ,
            new SctItm('悪化')
        ];
    }
}

// 感情の増減（２） （感情）～。（悲しみが広がっている）
class selector_size2 extends SctItm_Selector implements ISctItm_Selector {
    constructor(){
        super('@SIZE2@');
        this.itms = [
            new SctItm('が広がって@DIDEND@')
            ,
            new SctItm('が巻き起こって@DIDEND@')
            ,
            new SctItm('が訴えられて@DIDEND@')
            ,
            new SctItm('が蔓延して@DIDEND@')
            ,
            new SctItm('に包まれて@DIDEND@')
            ,
            new SctItm('で混乱して@DIDEND@')
            ,
            new SctItm('で困惑して@DIDEND@')
            ,
            new SctItm('で言葉を失って@DIDEND@')
            ,
            new SctItm('で涙を流して@DIDEND@')
            ,
            new SctItm('で顔をしかめて@DIDEND@')
            ,
            new SctItm('に満ちあふれて@DIDEND@')
            ,
            new SctItm('に輝いて@DIDEND@')
            ,
            new SctItm('に囚われて@DIDEND@')
        ];
    }
}


// 団体 ～の間に・～の間で
class selector_they extends SctItm_Selector implements ISctItm_Selector {
    constructor(){
        super('@THEY@');
        this.itms = [
            new SctItm('@CLASS@')
            ,
            // new SctItm('人々')
            // ,
            new SctItm('一般大衆')
            ,
            new SctItm('有識者達')
            ,
            new SctItm('子供達')
            ,
            new SctItm('生徒達')
            ,
            new SctItm('学生達')
            ,
            new SctItm('女子校生達')
            ,
            new SctItm('女子大生達')
            ,
            new SctItm('彼女達')
            ,
            new SctItm('ＯＬ達')
            // ,
            // new SctItm('彼ら')
            ,
            new SctItm('先人達')
            ,
            new SctItm('労働者達')
            ,
            new SctItm('兵士達')
            ,
            new SctItm('騎士団')
            ,
            new SctItm('若年層')
            ,
            new SctItm('主婦層')
            ,
            new SctItm('全乗組員')
            ,
            new SctItm('従業員達')
            ,
            new SctItm('売春婦達')
            ,
            new SctItm('暴走族')
            ,
            new SctItm('マフィア達')
            ,
            new SctItm('ヤクザ達')
            ,
            new SctItm('過激派')
            ,
            new SctItm('移住者達')
            ,
            new SctItm('旅行者達')
            ,
            new SctItm('旅芸人達')
            ,
            new SctItm('奴隷達')
            ,
            new SctItm('飼い猫達')
            ,
            new SctItm('首狩り族')
            ,
            new SctItm('僧侶達')
            ,
            new SctItm('盗賊達')
            ,
            new SctItm('海兵隊')
            ,
            new SctItm('囚人達')
            ,
            new SctItm('少年達')
            ,
            new SctItm('少女達')
            ,
            new SctItm('少年少女達')
            ,
            new SctItm('年長者達')
            ,
            new SctItm('エリート層')
            ,
            new SctItm('傭兵達')
            ,
            new SctItm('民衆')
            ,
            new SctItm('観客達')
            ,
            new SctItm('乗客達')
            ,
            new SctItm('通行人')
            ,
            new SctItm('視聴者達')
            ,
            new SctItm('ユーザー達')
            ,
            new SctItm('株主達')
            ,
            new SctItm('皇族')
            ,
            new SctItm('貴族')
            ,
            new SctItm('家族')
            ,
            new SctItm('親戚一同')
            ,
            new SctItm('親類縁者')
            // ,
            // new SctItm('先祖代々')
            ,
            new SctItm('犠牲者達')
            ,
            new SctItm('生徒一同')
            ,
            new SctItm('兄弟弟子')
            ,
            new SctItm('チームメイト達')
            ,
            new SctItm('@SPORTS@のチームメイト達')
            ,
            new SctItm('ルームメイト達')
            ,
            new SctItm('クラスメイト達')
            ,
            new SctItm('@SCHOOL@のクラスメイト達')
            ,
            new SctItm('野次馬')
            ,
            new SctItm('@SEXAGE@達')
            ,
            new SctItm('市民')
            ,
            new SctItm('@CITY@市民')
            ,
            new SctItm('国民')
            ,
            new SctItm('@COUNTRY@国民')
        ];
    }
}



// 団体の数 （一部の／多くの）人々
class selector_many extends SctItm_Selector implements ISctItm_Selector {
    constructor(){
        super('@MANY@');
        this.itms = [
            new SctItm('少数の')
            ,
            new SctItm('数多くの')
            ,
            new SctItm('多くの')
            ,
            new SctItm('一部の')
            ,
            new SctItm('大多数の')
            ,
            new SctItm('ごく僅かな')
            ,
            new SctItm('一握りの')
            ,
            new SctItm('ほとんどの')
            // ,
            // new SctItm('数名の')
            // ,
            // new SctItm('幾人もの')
            ,
            new SctItm('全ての')
            ,
            new SctItm('大半の')
            ,
            // new SctItm('大勢の')
            // ,
            new SctItm('数え切れない程の')
            ,
            new SctItm('掃いて捨てるほどの')
            ,
            new SctItm('膨大な')
            ,
            new SctItm('世界最高の')
            ,
            new SctItm('世界最大の')
            ,
            new SctItm('世界で唯一の')
            ,
            new SctItm('@TOWN@最大の')
            ,
            new SctItm('@TOWN@で唯一の')
        ];
    }
}

class selector_manyman extends SctItm_Selector implements ISctItm_Selector {
    constructor(){
        super('@MANYMAN@');
        this.itms = [
            new SctItm('@NUM2TO9@人の')
            ,
            new SctItm('@NUM2TO9@百人もの')
            ,
            new SctItm('@NUM2TO9@千人もの')
            ,
            new SctItm('数名の')
            ,
            new SctItm('幾人もの')
            ,
            new SctItm('多くの')
            ,
            new SctItm('一部の')
            ,
            new SctItm('大多数の')
            ,
            new SctItm('ごく僅かな')
            ,
            new SctItm('一握りの')
            ,
            new SctItm('ほとんどの')
            ,
            new SctItm('全ての')
            ,
            new SctItm('大半の')
            ,
            new SctItm('大勢の')
            ,
            new SctItm('数え切れない程の')
            ,
            new SctItm('掃いて捨てるほどの')
            ,
            new SctItm('膨大な')
            ,
            new SctItm('世界最高の')
            ,
            new SctItm('世界で唯一の')
            ,
            new SctItm('@TOWN@で唯一の')
        ];
    }
}

class selector_specialist extends SctItm_Selector implements ISctItm_Selector {
    constructor(){
        super('@SPECIALIST@');
        this.Add(itms_specialist);
    }
}

class locker_specialist extends SctItm_SelectLocker implements ISctItm_Selector{
    constructor(){
        super('@L_SPECIALIST@');
        this.Add(itms_specialist);
    }
}


class selector_class extends SctItm_Selector implements ISctItm_Selector {
    constructor(){
        super('@CLASS@');
        this.Add(itms_class);
    }
}

class locker_class extends SctItm_SelectLocker implements ISctItm_Selector{
    constructor(){
        super('@L_CLASS@');
        this.Add(itms_class);
    }
}




class selector_history extends SctItm_Selector implements ISctItm_Selector {
    constructor(){
        super('@HISTORY@');
        this.itms = [
            new SctItm('伝説')
            ,
            new SctItm('神話')
            ,
            new SctItm('伝記')
            ,
            new SctItm('民話')
            ,
            new SctItm('聖書')
            ,
            new SctItm('経典')
            ,
            new SctItm('怪談')
            ,
            new SctItm('全集')
            ,
            new SctItm('石碑')
            ,
            new SctItm('辞書')
            ,
            new SctItm('大百科')
            ,
            new SctItm('刑法')
        ];
    }
}

// 神 ～の@SUPERCLASS@と繋ぐ


// 名詞に対する単一形容
class selector_keiyo extends SctItm_Selector implements ISctItm_Selector {
    constructor(){
        super('@KEI@');
        this.itms = [
            new SctItm('@KEI2@な')
            ,
            // new SctItm('@KEI2@で@KEI2@な')
            // ,
            // new SctItm('@KEID@@KEI2@な')
            // ,
            // new SctItm('@KEI2@で@KEI2@、そして@KEI2@な')
            // ,
            new SctItm('@KEI3@')
            ,
            // new SctItm('@KEI2@で@KEI3@')
            // ,
            // new SctItm('@KEID@@KEI3@')
            // // ,
            // new SctItm('@KEIM1@と@ASSES@')
            // ,
            // new SctItm('@KEI2@で@KEI2@、そして@KEI3@')
            // new SctItm('@DID@@DIDEND@')
        ];
    }
}
class selector_keiyo1 extends SctItm_Selector implements ISctItm_Selector {
    constructor(){
        super('@KEI1@');
        this.itms = [
            new SctItm('@KEI2@な')
            ,
            new SctItm('@KEI4@@KEI2@な')
            ,
            new SctItm('@KEID2@@KEI2@な')
            ,
            new SctItm('@KEID2@@KEI3@')
            ,
            new SctItm('@KEI4@@KEI3@')
        ];
    }
}
class selector_keido extends SctItm_Selector implements ISctItm_Selector {
    constructor(){
        super('@KEID@');
        this.itms = [
            new SctItm('@KEI2@に')
            ,
            new SctItm('@KEI4@')
            // ,
            // new SctItm('@KEI2@、そして、@KEI2@に')
            // ,
            // new SctItm('@KEI2@、そして、@KEI4@')
            // ,
            // new SctItm('@KEI4@、そして、@KEI4@')
        ];
    }
}
class selector_keido2 extends SctItm_Selector implements ISctItm_Selector {
    constructor(){
        super('@KEID2@');
        this.itms = [
            new SctItm('@KEI2@で')
            ,
            new SctItm('@KEI4@て')
        ];
    }
}
class selector_keime1 extends SctItm_Selector implements ISctItm_Selector {
    constructor(){
        super('@KEIM1@');
        this.itms = [
            new SctItm('@KEI2@だ')
            ,
            new SctItm('@KEI3@')
            // ,
            // new SctItm('@KEID2@@KEI2@だ')
            // ,
            // new SctItm('@KEID2@@KEI3@')
            ,
        ];
    }
}
class selector_keime2 extends SctItm_Selector implements ISctItm_Selector {
    constructor(){
        super('@KEIM2@');
        this.itms = [
            new SctItm('@KEI2@')
            ,
            new SctItm('@KEI3@')
        ];
    }
}

class selector_km extends SctItm_Selector implements ISctItm_Selector {
    constructor(){
        super('@KEI2@');
        this.Add(cods_NoRubi_to_itms(cods_km));
        this.Add(itms_km);
    }
}

class selector_k extends SctItm_Selector implements ISctItm_Selector {
    constructor(){
        super('@KEI3@');
        this.Add(cods_NoRubi_to_itms(cods_ad_beauty));
        this.Add(cods_NoRubi_to_itms(cods_ad_danger));
        this.Add(cods_NoRubi_to_itms(cods_ad_sense_n));
        this.Add(cods_NoRubi_to_itms(cods_ad_sense_p));
        // this.Add(cods_to_itms(cods_ad_color));
        this.Add(cods_to_itms(cods_ad_jougo));
        this.Add(cods_NoRubi_to_itms(cods_ad_etc));
        this.Add(itms_kmd);
    }
}

class selector_kd extends SctItm_Selector implements ISctItm_Selector {
    constructor(){
        super('@KEI4@');
        this.Add(cods_NoRubi_to_itms(cods_adv_beauty));
        this.Add(cods_NoRubi_to_itms(cods_adv_sense_n));
        this.Add(cods_NoRubi_to_itms(cods_adv_sense_p));
        this.Add(cods_NoRubi_to_itms(cods_adv_danger));
        this.Add(cods_NoRubi_to_itms(cods_adv_etc));
    }
}


class selector_kp extends SctItm_Selector implements ISctItm_Selector {
    constructor(){
        super('@KEIP@');
        this.Add(cods_NoRubi_to_itms(cods_ad_posi));
        this.Add(cods_NoRubi_to_itms(cods_ad_beauty));
        this.Add(cods_NoRubi_to_itms(cods_ad_sense_p));

    }
}

class selector_kdp extends SctItm_Selector implements ISctItm_Selector {
    constructor(){
        super('@KEIDP@');
        this.Add(cods_NoRubi_to_itms(cods_adv_posi));
        this.Add(cods_NoRubi_to_itms(cods_adv_beauty));
        this.Add(cods_NoRubi_to_itms(cods_adv_sense_p));
    }
}

class selector_kmp extends SctItm_Selector implements ISctItm_Selector {
    constructor(){
        super('@KEIMP@');
        this.Add(cods_NoRubi_to_itms(cods_km_posi));
    }
}

class selector_kp2 extends SctItm_Selector implements ISctItm_Selector {
    constructor(){
        super('@KEIP2@');
        this.itms = [
            new SctItm('@KEIP@')
            ,
            new SctItm('@KEIMP@な')
            ,
            new SctItm('@NICKGOOD@のような')
        ];
    }
}

class selector_kp3 extends SctItm_Selector implements ISctItm_Selector {
    constructor(){
        super('@KEIP3@');
        this.itms = [
            new SctItm('@KEIP@')
            ,
            new SctItm('@KEIMP@だ')
            ,
            new SctItm('@NICKGOOD@のようだ')
        ];
    }
}
class selector_kdp2 extends SctItm_Selector implements ISctItm_Selector {
    constructor(){
        super('@KEIDP2@');
        this.itms = [
            new SctItm('@KEIDP@')
            ,
            new SctItm('@KEIMP@に')
            ,
            new SctItm('@NICKGOOD@のように')
        ];
    }
}


class selector_kn extends SctItm_Selector implements ISctItm_Selector {
    constructor(){
        super('@KEIN@');
        this.Add(cods_NoRubi_to_itms(cods_ad_nega));
        this.Add(cods_NoRubi_to_itms(cods_ad_danger));
        this.Add(cods_NoRubi_to_itms(cods_ad_dirty));
        this.Add(cods_NoRubi_to_itms(cods_ad_sense_n));
    }
}
class selector_kdn extends SctItm_Selector implements ISctItm_Selector {
    constructor(){
        super('@KEIDN@');
        this.Add(cods_NoRubi_to_itms(cods_adv_nega));
        this.Add(cods_NoRubi_to_itms(cods_adv_danger));
        this.Add(cods_NoRubi_to_itms(cods_adv_dirty));
        this.Add(cods_NoRubi_to_itms(cods_adv_sense_n));
    }
}

class selector_kmn extends SctItm_Selector implements ISctItm_Selector {
    constructor(){
        super('@KEIMN@');
        this.Add(cods_NoRubi_to_itms(cods_km_nega));
    }
}

class selector_kn2 extends SctItm_Selector implements ISctItm_Selector {
    constructor(){
        super('@KEIN2@');
        this.itms = [
            new SctItm('@KEIN@')
            ,
            new SctItm('@KEIMN@な')
            ,
            new SctItm('@NICKBAD@のような')
            ,
            new SctItm('@NICKBAD@みたいな')
            ,
            new SctItm('@NICKBAD@っぽい')
        ];
    }
}

class selector_kn3 extends SctItm_Selector implements ISctItm_Selector {
    constructor(){
        super('@KEIN3@');
        this.itms = [
            new SctItm('@KEIN@')
            ,
            new SctItm('@KEIMN@だ')
            ,
            new SctItm('@NICKBAD@のようだ')
            ,
            new SctItm('@NICKBAD@みたいだ')
            ,
            new SctItm('@NICKBAD@っぽい')
        ];
    }
}
class selector_kdn2 extends SctItm_Selector implements ISctItm_Selector {
    constructor(){
        super('@KEIDN2@');
        this.itms = [
            new SctItm('@KEIDN@')
            // ,
            // new SctItm('@KEIMN@に')
            ,
            new SctItm('@NICKBAD@のように')
            ,
            new SctItm('@NICKBAD@みたいに')
            ,
            new SctItm('@NICKBAD@っぽく')
        ];
    }
}


class selector_grade extends SctItm_Selector implements ISctItm_Selector {
    constructor(){
        super('@GRADE@');
        this.itms = [
            new SctItm('')
        ];
        this.Add(itms_grade);
    }
}
class selector_dir extends SctItm_Selector implements ISctItm_Selector {
    constructor(){
        super('@DIR@');
        this.Add(itms_dir);
    }
}
class selector_season extends SctItm_Selector implements ISctItm_Selector {
    constructor(){
        super('@SEASON@');
        this.Add(itms_season);
    }
}

class selector_today extends SctItm_Selector implements ISctItm_Selector {
    constructor(){
        super('@TODAY@');
        this.Add(cods_NoRubi_to_itms(cods_today));
    }
}

class selector_move extends SctItm_Selector implements ISctItm_Selector {
    constructor(){
        super('@MOVE@');
        this.Add(cods_NoRubi_to_itms(cods_move));
        this.Add(cods_NoRubi_to_itms(cods_move_dance));
        this.Add(cods_NoRubi_to_itms(cods_move_run));
        this.Add(cods_NoRubi_to_itms(cods_move_fly));
        this.Add(cods_NoRubi_to_itms(cods_move_walk));
        this.Add(cods_NoRubi_to_itms(cods_move_stop));
        this.Add(cods_NoRubi_to_itms(cods_move_open));
        this.Add(cods_NoRubi_to_itms(cods_move_life));
        this.Add(cods_NoRubi_to_itms(cods_move_death));
        this.Add(cods_NoRubi_to_itms(cods_move_light));
        this.Add(cods_NoRubi_to_itms(cods_move_think));
        this.Add(cods_NoRubi_to_itms(cods_move_sense));
        this.Add(cods_NoRubi_to_itms(cods_move_make));
    }
}

class selector_move2 extends SctItm_Selector implements ISctItm_Selector {
    constructor(){
        super('@MOVE2@');
        this.Add(cods_NoRubi_to_itms(cods_move_dance));
        this.Add(cods_NoRubi_to_itms(cods_move_run));
        this.Add(cods_NoRubi_to_itms(cods_move_fly));
        this.Add(cods_NoRubi_to_itms(cods_move_walk));
        this.Add(cods_NoRubi_to_itms(cods_move_stop));
        this.Add(cods_NoRubi_to_itms(cods_move_think));
    }
}


class selector_body extends SctItm_Selector implements ISctItm_Selector {
    constructor(){
        super('@BODY@');
        this.Add(cods_NoRubi_to_itms(cods_body));
    }
}
class selector_family extends SctItm_Selector implements ISctItm_Selector {
    constructor(){
        super('@FAMILY@');
        this.Add(cods_NoRubi_to_itms(cods_family));
    }
}

class selector_cat extends SctItm_Selector implements ISctItm_Selector {
    constructor(){
        super('@CAT@');
        this.Add(cods_cat.slice(1));
    }
}
class locker_cat extends SctItm_SelectLocker implements ISctItm_Selector{
    constructor(){
        super('@L_CAT@');
        this.Add(cods_cat.slice(1));
    }
}


class selector_dog extends SctItm_Selector implements ISctItm_Selector {
    constructor(){
        super('@DOG@');
        this.Add(cods_dog.slice(1));
    }
}
class locker_dog extends SctItm_SelectLocker implements ISctItm_Selector{
    constructor(){
        super('@L_DOG@');
        this.Add(cods_dog.slice(1));
    }
}


class selector_bug extends SctItm_Selector implements ISctItm_Selector {
    constructor(){
        super('@BUG@');
        this.Add(cods_bug.slice(1));
        this.Add(cods_butterfly.slice(1));
    }
}
class locker_bug extends SctItm_SelectLocker implements ISctItm_Selector{
    constructor(){
        super('@L_BUG@');
        this.Add(cods_bug.slice(1));
        this.Add(cods_butterfly.slice(1));
    }
}

class selector_butterfly extends SctItm_Selector implements ISctItm_Selector {
    constructor(){
        super('@BUTTERFLY@');
        this.Add(cods_butterfly.slice(1));
    }
}
class locker_butterfly extends SctItm_SelectLocker implements ISctItm_Selector{
    constructor(){
        super('@L_BUTTERFLY@');
        this.Add(cods_butterfly.slice(1));
    }
}


class selector_country extends SctItm_Selector implements ISctItm_Selector {
    constructor(){
        super('@COUNTRY@');
        this.Add(cods_ruby_to_itms(cods_country.slice(1)));
        this.Add(cods_NoRubi_to_itms(cods_country2));
    }
}
class locker_country extends SctItm_SelectLocker implements ISctItm_Selector{
    constructor(){
        super('@L_COUNTRY@');
        this.Add(cods_ruby_to_itms(cods_country.slice(1)));
        this.Add(cods_NoRubi_to_itms(cods_country2));
    }
}


class selector_town extends SctItm_Selector implements ISctItm_Selector {
    constructor(){
        super('@TOWN@');
        this.itms = [
            new SctItm('@COUNTRY@')
            ,
            new SctItm('@CITY@')
        ];
    }
}

class locker_town extends SctItm_SelectLocker implements ISctItm_Selector{
    constructor(){
        super('@L_TOWN@');
        this.itms = [
            new SctItm('@L_COUNTRY@')
            ,
            new SctItm('@L_CITY@')
        ];
    }
}

class selector_bird extends SctItm_Selector implements ISctItm_Selector {
    constructor(){
        super('@BIRD@');
        this.Add(cods_bird.slice(1));
        this.Add(cods_bird_spring.slice(1));
        this.Add(cods_bird_summer.slice(1));
        this.Add(cods_bird_autumn.slice(1));
        this.Add(cods_bird_winter.slice(1));
    }
}
class locker_bird extends SctItm_SelectLocker implements ISctItm_Selector{
    constructor(){
        super('@L_BIRD@');
        this.Add(cods_bird.slice(1));
        this.Add(cods_bird_spring.slice(1));
        this.Add(cods_bird_summer.slice(1));
        this.Add(cods_bird_autumn.slice(1));
        this.Add(cods_bird_winter.slice(1));
    }
}


class selector_animal extends SctItm_Selector implements ISctItm_Selector {
    constructor(){
        super('@ANIMAL@');
        this.Add(cods_animal.slice(1));
        this.Add(cods_bird.slice(1));
        this.Add(cods_bird_spring.slice(1));
        this.Add(cods_bird_summer.slice(1));
        this.Add(cods_bird_autumn.slice(1));
        this.Add(cods_bird_winter.slice(1));
        this.Add(cods_cat.slice(1));
        this.Add(cods_dog.slice(1));
        this.Add(cods_bug.slice(1));
        this.Add(cods_butterfly.slice(1));
    }
}

class locker_animal extends SctItm_SelectLocker implements ISctItm_Selector{
    constructor(){
        super('@L_ANIMAL@');
        this.Add(cods_animal.slice(1));
        this.Add(cods_bird.slice(1));
        this.Add(cods_bird_spring.slice(1));
        this.Add(cods_bird_summer.slice(1));
        this.Add(cods_bird_autumn.slice(1));
        this.Add(cods_bird_winter.slice(1));
        this.Add(cods_cat.slice(1));
        this.Add(cods_dog.slice(1));
        this.Add(cods_bug.slice(1));
        this.Add(cods_butterfly.slice(1));
    }
}

class selector_quizAnimal extends SctItm_Selector implements ISctItm_Selector {
    constructor(){
        super('@QUIZANIMAL@','','@ICON_ANIMAL@');
        this.Add(cods_to_itms(cods_animal.slice(1)));
    }
}

class selector_answerAnimal extends SctItm_Selector implements ISctItm_Selector {
    constructor(){
        super('@ANSWERANIMAL@','','@ICON_ANSWER@');
        this.Add(cods_to_itms(cods_animal.slice(1)));
    }
}


class locker_quizAnimal extends SctItm_SelectLocker implements ISctItm_Selector {
    constructor(){
        super('@L_QUIZANIMAL@','','@ICON_ANIMAL@');
        this.Add(cods_to_itms(cods_animal.slice(1)));
    }
}


class selector_livestock extends SctItm_Selector implements ISctItm_Selector {
    constructor(){
        super('@LIVESTOCK@');
        this.Add(itms_livestock);
    }
}
class locker_livestock extends SctItm_SelectLocker implements ISctItm_Selector{
    constructor(){
        super('@L_LIVESTOCK@');
        this.Add(itms_livestock);
    }
}
class OneTime_livestock extends SctItm_OneTimeLocker implements ISctItm_Selector{
    constructor(){
        super('@O_LIVESTOCK@');
        this.Add(itms_livestock);
    }
}
class selector_flower extends SctItm_Selector implements ISctItm_Selector {
    constructor(){
        super('@FLOWER@');
        this.Add(cods_flower_spring.slice(1));
        this.Add(cods_flower_summer.slice(1));
        this.Add(cods_flower_autumn.slice(1));
        this.Add(cods_flower_winter.slice(1));
    }
}

class locker_flower extends SctItm_SelectLocker implements ISctItm_Selector{
        constructor(){
        super('@L_FLOWER@');
        this.Add(cods_flower_spring.slice(1));
        this.Add(cods_flower_summer.slice(1));
        this.Add(cods_flower_autumn.slice(1));
        this.Add(cods_flower_winter.slice(1));
    }
}
class locker_flowerCall01 extends SctItm_SelectLocker implements ISctItm_Selector{
    constructor(){
        super('@L_FLOWERCALL01@');
        this.itms = [
            new SctItm('@L_FLOWER@の花')
            ,
            new SctItm('@L_FLOWER@の花束')
            ,
            new SctItm('@L_FLOWER@の花びら')
            ,
            new SctItm('@L_FLOWER@の花飾り')
            ,
            new SctItm('一輪の@L_FLOWER@')
            ,
            new SctItm('一輪挿しの@L_FLOWER@')
        ];
    }
}
class locker_flowerCall extends SctItm_SelectLocker implements ISctItm_Selector{
    constructor(){
        super('@L_FLOWERCALL@');
        this.itms = [
            new SctItm('@L_FLOWERCALL01@')
            ,
            new SctItm('@L_WHAT@に咲いた@L_FLOWERCALL01@')
            ,
            new SctItm('@L_CHAR@に捧げる@L_FLOWERCALL01@')
            ,
            new SctItm('@L_CITY@の@L_FLOWERCALL01@')
        ];
    }
}


class selector_star extends SctItm_Selector implements ISctItm_Selector {
    constructor(){
        super('@STAR@');
        this.Add(cods_NoRubi_to_itms(cods_star));
    }
}
class locker_star extends SctItm_SelectLocker implements ISctItm_Selector{
        constructor(){
        super('@L_STAR@');
        this.Add(cods_NoRubi_to_itms(cods_star));
    }
}
class selector_sports extends SctItm_Selector implements ISctItm_Selector {
    constructor(){
        super('@SPORTS@');
        this.Add(itms_sports);
    }
}
class locker_sports extends SctItm_SelectLocker implements ISctItm_Selector{
    constructor(){
        super('@L_SPORTS@');
        this.Add(itms_sports);
    }
}



class selector_future extends SctItm_Selector implements ISctItm_Selector {
    constructor(){
        super('@FUTURE@');
        this.Add(cods_NoRubi_to_itms(cods_future));
    }
}
class locker_future extends SctItm_SelectLocker implements ISctItm_Selector{
    constructor(){
        super('@L_FUTURE@');
        this.Add(cods_NoRubi_to_itms(cods_future));
    }
}
class selector_course extends SctItm_Selector implements ISctItm_Selector {
    constructor(){
        super('@COURSE@');
        this.Add(cods_NoRubi_to_itms(cods_course));
    }
}
class locker_course extends SctItm_SelectLocker implements ISctItm_Selector{
    constructor(){
        super('@L_COURSE@');
        this.Add(cods_NoRubi_to_itms(cods_course));
    }
}


class selector_place extends SctItm_Selector implements ISctItm_Selector {
    constructor(){
        super('@PLACE@');
        this.startNumber = 1;
        this.Add(cods_NoRubi_to_itms(cods_place));
    }
}

class selector_city extends SctItm_Selector implements ISctItm_Selector {
    constructor(){
        super('@CITY@');
        this.startNumber = 1;
        this.Add(itms_city);
    }
}
class locker_city extends SctItm_SelectLocker implements ISctItm_Selector {
    constructor(){
        super('@L_CITY@');
        this.startNumber = 1;
        this.Add(itms_city);
    }
}
class selector_ride extends SctItm_Selector implements ISctItm_Selector {
    constructor(){
        super('@RIDE@');
        this.startNumber = 1;
        this.Add(itms_ride);
    }
}
class locker_ride extends SctItm_SelectLocker implements ISctItm_Selector {
    constructor(){
        super('@L_RIDE@');
        this.startNumber = 1;
        this.Add(itms_ride);
    }
}

class selector_school extends SctItm_Selector implements ISctItm_Selector {
    constructor(){
        super('@SCHOOL@');
        this.itms = [
            new SctItm('@SCHOOL01@')
            ,
            new SctItm('@SCHOOL01@')
            ,
            new SctItm('@SCHOOL01@')
            ,
            new SctItm('@SCHOOL01@')
            ,
            new SctItm('@SCHOOL01@')
            ,
            new SctItm('@SCHOOL01@')
            ,
            new SctItm('@SCHOOL01@')
            ,
            new SctItm('@SCHOOL01@')
            ,
            new SctItm('@L_CHAR@が@SCHOOLAS@した@SCHOOL01@')
            ,
            new SctItm('@L_CHAR@を輩出した@SCHOOL01@')
            ,
            new SctItm('@L_CHAR@が在籍中の@SCHOOL01@')
            ,
            new SctItm('@L_CHAR@より『@CALL@』と@ASSES@@SCHOOL01@')
            ,
            new SctItm('@TOWN@で唯一の@SCHOOL02@')
            ,
            new SctItm('@TOWN@で有数の@SCHOOL02@')
        ];
    }
}
class selector_school01 extends SctItm_Selector implements ISctItm_Selector {
    constructor(){
        super('@SCHOOL01@');
        this.itms = [
            new SctItm('@TOWN@@SCHOOL02@')
            ,
            new SctItm('@TOWN@私立@SCHOOL02@')
            ,
            new SctItm('@TOWN@公立@SCHOOL02@')
            ,
            new SctItm('@TOWN@国立@SCHOOL02@')
            ,
            new SctItm('@TOWN@私立第@NUM10@@SCHOOL02@')
            ,
            new SctItm('@TOWN@公立第@NUM10@@SCHOOL02@')
            ,
            new SctItm('@TOWN@国立第@NUM10@@SCHOOL02@')
            ,
            new SctItm('@TOWN@第@NUM10@@SCHOOL02@')
        ];
    }
}

class selector_school02 extends SctItm_Selector implements ISctItm_Selector {
    constructor(){
        super('@SCHOOL02@');
        this.Add(itms_school);
    }
}
class selector_schoolas extends SctItm_Selector implements ISctItm_Selector {
    constructor(){
        super('@SCHOOLAS@');
        this.Add(itms_schoolas);
    }
}

class selector_order extends SctItm_Selector implements ISctItm_Selector {
    constructor(){
        super('@ORDER@');
        this.itms = [
            new SctItm('@GROUP@の指令によって')
            ,
            new SctItm('@GROUP@の密命を受けて')
            ,
            new SctItm('@GROUP@の指図で')
            ,
            new SctItm('@GROUP@の支援を受けて')
            ,
            new SctItm('@GROUP@の賛同を得て')
            ,
            new SctItm('@GROUP@の入れ知恵で')
            ,
            new SctItm('@GROUP@の差し金で')
            ,
            new SctItm('@GROUP@を代表して')
            ,
            new SctItm('@GROUP@に洗脳されて')
            ,
            new SctItm('@GROUP@の推薦で')
            ,
            new SctItm('@GROUP@の意志に逆らって')
            ,
            new SctItm('@GROUP@の期待を裏切って')
            ,
            new SctItm('@GROUP@の目を盗んで')
        ];
    }
}


class selector_group extends SctItm_Selector implements ISctItm_Selector {
    constructor(){
        super('@GROUP@');
        this.itms = [
            new SctItm('@COUNTRY@@GROUP01@')
            ,
            new SctItm('@TOWN@@GROUP02@')
            ,
            new SctItm('@SCHOOL@')
            ,
            new SctItm('@MANYPEOPLE@')
            ,
            new SctItm('@CLUB@')
            ,
            new SctItm('@L_COMPANYNAME@')
            // ,
            // new SctItm('@KING@')
        ];
    }
}


class selector_group01 extends SctItm_Selector implements ISctItm_Selector {
    constructor(){
        super('@GROUP01@');
        this.Add(itms_Group01);
    }
}
class selector_group02 extends SctItm_Selector implements ISctItm_Selector {
    constructor(){
        super('@GROUP02@');
        this.Add(itms_Group02);
    }
}

class selector_king extends SctItm_Selector implements ISctItm_Selector {
    constructor(){
        super('@KING@');
        this.itms = [
            new SctItm('@COUNTRY@@KING01@')
            ,
            new SctItm('@COUNTRY@@KING02@')
            ,
            new SctItm('@CITY@@KING03@')
        ];
    }
}

class locker_king extends SctItm_SelectLocker implements ISctItm_Selector {
    constructor(){
        super('@L_KING@');
        this.itms = [
            new SctItm('@L_COUNTRY@@L_KING01@')
            ,
            new SctItm('@L_COUNTRY@@L_KING02@')
            ,
            new SctItm('@L_CITY@@L_KING03@')
        ];
    }
}


class selector_king01 extends SctItm_Selector implements ISctItm_Selector {
    constructor(){
        super('@KING01@');
        this.Add(itms_King01);
    }
}
class locker_king01 extends SctItm_SelectLocker implements ISctItm_Selector {
    constructor(){
        super('@L_KING01@');
        this.Add(itms_King01);
    }
}
class selector_king02 extends SctItm_Selector implements ISctItm_Selector {
    constructor(){
        super('@KING02@');
        this.Add(itms_King02);
    }
}


class locker_king02 extends SctItm_SelectLocker implements ISctItm_Selector {
    constructor(){
        super('@L_KING02@');
        this.Add(itms_King02);
    }
}

class selector_king03 extends SctItm_Selector implements ISctItm_Selector {
    constructor(){
        super('@KING03@');
        this.Add(itms_King03);
    }
}


class locker_king03 extends SctItm_SelectLocker implements ISctItm_Selector {
    constructor(){
        super('@L_KING03@');
        this.Add(itms_King03);
    }
}

class selector_store extends SctItm_Selector implements ISctItm_Selector {
    constructor(){
        super('@STORE@');
        this.Add(itms_Store);
    }
}
class locker_store extends SctItm_SelectLocker implements ISctItm_Selector {
    constructor(){
        super('@L_STORE@');
        this.Add(itms_Store);
    }
}


class selector_landmark extends SctItm_Selector implements ISctItm_Selector {
    constructor(){
        super('@LANDMARK@');
        this.itms = [
            new SctItm('@TOWN@@LANDMARK01@')
        ];
    }
}
class selector_landmark01 extends SctItm_Selector implements ISctItm_Selector {
    constructor(){
        super('@LANDMARK01@');
        this.Add(itms_landmark);
    }
}


class locker_landmark extends SctItm_SelectLocker implements ISctItm_Selector {
    constructor(){
        super('@L_LANDMARK@');
        this.itms = [
            new SctItm('@L_TOWN@@L_LANDMARK01@')
        ];
    }
}
class locker_landmark01 extends SctItm_SelectLocker implements ISctItm_Selector {
    constructor(){
        super('@L_LANDMARK01@');
        this.Add(itms_landmark);
    }
}

class selector_fruit extends SctItm_Selector implements ISctItm_Selector {
    constructor(){
        super('@FRUIT@');
        this.Add(cods_fruit.slice(1));
        // this.Add(cods_rubyKana_to_itms(cods_fruit.slice(1)));
    }
}

class locker_fruit extends SctItm_SelectLocker implements ISctItm_Selector{
    constructor(){
        super('@L_FRUIT@');
        this.Add(cods_fruit.slice(1));
        // this.Add(cods_rubyKana_to_itms(cods_fruit.slice(1)));
    }
}

class selector_fish extends SctItm_Selector implements ISctItm_Selector {
    constructor(){
        super('@FISH@');
        this.Add(cods_fish.slice(1));
    }
}

class locker_fish extends SctItm_SelectLocker implements ISctItm_Selector{
    constructor(){
        super('@L_FISH@');
        this.Add(cods_fish.slice(1));
        // this.Add(cods_rubyKana_to_itms(cods_fruit.slice(1)));
    }
}
class OneTime_fish extends SctItm_OneTimeLocker implements ISctItm_Selector{
    constructor(){
        super('@O_FISH@');
        this.Add(cods_fish.slice(1));
        // this.Add(cods_rubyKana_to_itms(cods_fruit.slice(1)));
    }
}


class selector_sweets extends SctItm_Selector implements ISctItm_Selector {
    constructor(){
        super('@SWEETS@');
        this.Add(itms_sweets);
        this.Add(itms_sweets_p);
    }
}
class locker_sweets extends SctItm_SelectLocker implements ISctItm_Selector{
    constructor(){
        super('@L_SWEETS@');
        this.Add(itms_sweets);
        this.Add(itms_sweets_l);
    }
}
class selector_meal extends SctItm_Selector implements ISctItm_Selector {
    constructor(){
        super('@MEAL@');
        this.Add(itms_meal);
        this.Add(itms_meal_p);
    }
}

class locker_meal extends SctItm_SelectLocker implements ISctItm_Selector {
    constructor(){
        super('@L_MEAL@');
        this.Add(itms_meal);
        this.Add(itms_meal_l);
    }
}

class selector_drink extends SctItm_Selector implements ISctItm_Selector {
    constructor(){
        super('@DRINK@');
        this.Add(itms_drink);
    }
}

class locker_drink extends SctItm_SelectLocker implements ISctItm_Selector {
    constructor(){
        super('@L_DRINK@');
        this.Add(itms_drink);
    }
}

class OneTime_drink extends SctItm_OneTimeLocker implements ISctItm_Selector {
    constructor(){
        super('@O_DRINK@');
        this.Add(itms_drink);
    }
}


class selector_dress extends SctItm_Selector implements ISctItm_Selector {
    constructor(){
        super('@DRESS@');
        this.itms = [
            new SctItm('@KEI@@DRESS01@')
            ,
            new SctItm('しおれた@DRESS01@')
            ,
            new SctItm('似合わない@DRESS01@')
            ,
            new SctItm('体に合わない@DRESS01@')
            ,
            new SctItm('ツギハギだらけの@DRESS01@')
            ,
            new SctItm('色鮮やかな@DRESS01@')
            ,
            new SctItm('地味な@DRESS01@')
            ,
            new SctItm('ブランドものの@DRESS01@')
            ,
            new SctItm('@L_CHAR@が愛着している@DRESS01@')
            ,
            new SctItm('@SCHOOL@の制服')
            ,
            new SctItm('@SCHOOL@の制服に認定された@DRESS01@')
            ,
            new SctItm('@STORE@で買った@DRESS01@')
            ,
            new SctItm('@STORE@で見かけた@DRESS01@')
            ,
            new SctItm('@PART@が買ってくれた@DRESS01@')
            ,
            new SctItm('@PART@が送ってくれた@DRESS01@')
            ,
            new SctItm('@PART@が編んでくれた@DRESS01@')
            ,
            new SctItm('@PART@のお下がりの@DRESS01@')
            ,
            new SctItm('古着屋で見つけた@DRESS01@')
            ,
            new SctItm('@TOWN@伝統の@DRESS01@')
        ];
    }
}
class selector_dress01 extends SctItm_Selector implements ISctItm_Selector {
    constructor(){
        super('@DRESS01@');
        this.Add(itms_dress);
    }
}
class locker_dress extends SctItm_SelectLocker implements ISctItm_Selector {
    constructor(){
        super('@L_DRESS@');
        this.Add(itms_dress);
    }
}
class selector_under extends SctItm_Selector implements ISctItm_Selector {
    constructor(){
        super('@UNDER@');
        this.Add(itms_underWare);
        this.Add(itms_shoes);
    }
}
class locker_under extends SctItm_SelectLocker implements ISctItm_Selector {
    constructor(){
        super('@L_UNDER@');
        this.Add(itms_underWare);
        this.Add(itms_shoes);
    }
}

class selector_food1 extends SctItm_Selector implements ISctItm_Selector {
    constructor(){
        super('@FOOD01@');
        this.Add(itms_meal);
        this.Add(itms_meal_p);
        this.Add(itms_sweets);
        this.Add(itms_sweets_p);
        this.Add(cods_fruit.slice(1));
    }
}
class locker_food1 extends SctItm_SelectLocker implements ISctItm_Selector {
    constructor(){
        super('@L_FOOD01@');
        this.Add(itms_meal);
        this.Add(itms_meal_l);
        this.Add(itms_sweets);
        this.Add(itms_sweets_l);
        this.Add(cods_fruit.slice(1));
    }
}

class selector_food extends SctItm_Selector implements ISctItm_Selector {
    constructor(){
        super('@FOOD@');
        this.itms = [
            new SctItm('@FOOD01@')
            ,
            new SctItm('@FOOD01@')
            ,
            new SctItm('@FOOD01@')
            ,
            new SctItm('@FOOD01@')
            ,
            new SctItm('@FOOD01@')
            ,
            new SctItm('@TOWN@産@FOOD01@')
            ,
            new SctItm('@TOWN@風@FOOD01@')
            ,
            new SctItm('@ITEM@っぽい@FOOD01@')
            ,
            new SctItm('@PART@が作った@FOOD01@')
            ,
            new SctItm('@CLASS@の手作り@FOOD01@')
            ,
            new SctItm('@L_CHAR@のお薦め@FOOD01@')
            ,
            new SctItm('@L_CHAR@が愛した@FOOD01@')
            ,
            new SctItm('@STORE@で買った@FOOD01@')
            ,
            new SctItm('@STORE@のお薦め@FOOD01@')
            ,
            new SctItm('@STORE@のタイムセールで買った@FOOD01@')
            ,
            new SctItm('田舎から送ってきた@FOOD01@')
            ,
            new SctItm('学食の@FOOD01@')
            ,
            new SctItm('キャンプで作った@FOOD01@')
            ,
            new SctItm('出前で注文した@FOOD01@')
            ,
            new SctItm('ルームサービスの@FOOD01@')
            ,
            new SctItm('インスタントの@FOOD01@')
            ,
            new SctItm('レトルトの@FOOD01@')
            ,
            new SctItm('冷凍食品の@FOOD01@')
            ,
            new SctItm('出来たての@FOOD01@')
        ];
    }
}
class locker_food extends SctItm_SelectLocker implements ISctItm_Selector {
    constructor(){
        super('@L_FOOD@');
        this.itms = [
            new SctItm('@L_FOOD01@')
            ,
            new SctItm('@L_FOOD01@')
            ,
            new SctItm('@L_FOOD01@')
            ,
            new SctItm('@L_FOOD01@')
            ,
            new SctItm('@L_TOWN@産@L_FOOD01@')
            ,
            new SctItm('@L_TOWN@風@L_FOOD01@')
            ,
            new SctItm('@L_PART@が作った@L_FOOD01@')
            ,
            new SctItm('@L_CLASS@の手作り@L_FOOD01@')
            ,
            new SctItm('@L_CLASS@のお薦め@L_FOOD01@')
        ];
    }
}

class OneTime_food extends SctItm_OneTimeLocker implements ISctItm_Selector {
    constructor(){
        super('@O_FOOD@');
        this.Add(itms_meal);
        this.Add(itms_meal_l);
        this.Add(itms_sweets);
        this.Add(itms_sweets_l);
        this.Add(cods_fruit.slice(1));
    }
}


class selector_music extends SctItm_Selector implements ISctItm_Selector {
    constructor(){
        super('@MUSIC@');
        this.Add(itms_music);
    }
}

class locker_music extends SctItm_SelectLocker implements ISctItm_Selector {
    constructor(){
        super('@L_MUSIC@');
        this.Add(itms_music);
    }
}

class selector_dance extends SctItm_Selector implements ISctItm_Selector {
    constructor(){
        super('@DANCE@');
        this.Add(itms_dance);
    }
}

// テクノロジー
class selector_tech extends SctItm_Selector implements ISctItm_Selector {
    constructor(){
        super('@TECH@');
        this.Add(itms_tech);
    }
}
// （固定）テクノロジー
class locker_tech extends SctItm_SelectLocker implements ISctItm_Selector {
    constructor(){
        super('@L_TECH@','','@ICON_TECH@');
        this.Add(itms_tech);
    }
}

// 敬称 の～
class selector_nickname extends SctItm_Selector implements ISctItm_Selector {
    constructor(){
        super('@NICK@');
        this.Add(itms_nickNega);
        this.Add(itms_nickPosi);
        this.Add(itms_nickNomal);
        this.Add(cods_to_itms(cods_animal.slice(1)));
        this.Add(cods_flower_spring.slice(1));
        this.Add(cods_flower_summer.slice(1));
        this.Add(cods_flower_autumn.slice(1));
        this.Add(cods_flower_winter.slice(1));
        // this.Add(itms_meal);
        // this.Add(itms_sweets);
        // this.Add(cods_fruit.slice(1));
    }
}
class locker_nickname extends SctItm_SelectLocker implements ISctItm_Selector {
    constructor(){
        super('@L_NICK@');
        this.Add(itms_nickNega);
        this.Add(itms_nickPosi);
        this.Add(itms_nickNomal);
        this.Add(cods_to_itms(cods_animal.slice(1)));
        this.Add(cods_to_itms(cods_flower_spring.slice(1)));
        this.Add(cods_to_itms(cods_flower_summer.slice(1)));
        this.Add(cods_to_itms(cods_flower_autumn.slice(1)));
        this.Add(cods_to_itms(cods_flower_winter.slice(1)));
        // this.Add(itms_meal);
        // this.Add(itms_sweets);
        // this.Add(cods_fruit.slice(1));
    }
}
// 敬称 の～
class selector_nickBad extends SctItm_Selector implements ISctItm_Selector {
    constructor(){
        super('@NICKBAD@');
        this.Add(itms_nickNega);
        this.Add(cods_to_itms(cods_animal.slice(1)));
    }
}
// 敬称 の～
class selector_nickGood extends SctItm_Selector implements ISctItm_Selector {
    constructor(){
        super('@NICKGOOD@');
        this.Add(itms_nickPosi);
        this.Add(cods_to_itms(cods_flower_spring.slice(1)));
        this.Add(cods_to_itms(cods_flower_summer.slice(1)));
        this.Add(cods_to_itms(cods_flower_autumn.slice(1)));
        this.Add(cods_to_itms(cods_flower_winter.slice(1)));
    }
}


// 意識 ？？に～する
class selector_think extends SctItm_Selector implements ISctItm_Selector {
    constructor(){
        super('@THINK@');
        this.itms = [
            new SctItm('安心')
            ,
            new SctItm('感謝')
            ,
            new SctItm('期待')
            ,
            new SctItm('希望')
            ,
            new SctItm('驚愕')
            ,
            new SctItm('狂気')
            ,
            new SctItm('驚喜')
            ,
            new SctItm('驚嘆')
            ,
            new SctItm('恐怖')
            ,
            new SctItm('緊張')
            ,
            new SctItm('苦悶')
            ,
            new SctItm('警戒')
            ,
            new SctItm('激怒')
            ,
            new SctItm('軽蔑')
            ,
            new SctItm('嫌悪')
            ,
            new SctItm('幻滅')
            ,
            new SctItm('恋')
            ,
            new SctItm('興奮')
            ,
            new SctItm('後悔')
            ,
            new SctItm('興奮')
            ,
            new SctItm('嫉妬')
            // ,
            // new SctItm('失意')
            ,
            new SctItm('失望')
            ,
            new SctItm('心配')
            ,
            new SctItm('絶望')
            ,
            new SctItm('憎悪')
            ,
            new SctItm('尊敬')
            ,
            new SctItm('嘲笑')
            ,
            new SctItm('動揺')
            ,
            new SctItm('発情')
            ,
            new SctItm('発狂')
            ,
            new SctItm('服従')
            ,
            new SctItm('満足')
            ,
            new SctItm('迷走')
            ,
            new SctItm('夢想')
            ,
            new SctItm('妄想')
            ,
            new SctItm('欲情')
            ,
            new SctItm('落胆')
            ,
            new SctItm('楽観')
        ];
    }
}

// 発言・主張 ～している
class selector_say extends SctItm_Selector implements ISctItm_Selector {
    constructor(){
        super('@SAY@');
        this.itms = [
            new SctItm('@SAY01@')
            ,
            new SctItm('@SAY01@')
            ,
            new SctItm('@SAY01@')
            ,
            new SctItm('@SAY01@')
            ,
            new SctItm('@SAY01@')
            ,
            new SctItm('@SAY01@')
            ,
            new SctItm('興奮気味に@SAY01@')
            ,
            new SctItm('声高らかに@SAY01@')
            ,
            new SctItm('鼻息荒く@SAY01@')
            ,
            new SctItm('落ち着いた様子で@SAY01@')
            ,
            new SctItm('嬉々として@SAY01@')
            ,
            new SctItm('笑いを堪えながら@SAY01@')
            ,
            new SctItm('怒りと共に@SAY01@')
            ,
            new SctItm('涙ながらに@SAY01@')
            ,
            new SctItm('あっけらかんと@SAY01@')
            ,
            new SctItm('大声で@SAY01@')
            ,
            new SctItm('声を潜めて@SAY01@')
            ,
            new SctItm('震える声で@SAY01@')
            ,
            new SctItm('声を震わせて@SAY01@')
            ,
            new SctItm('狼狽えながらも@SAY01@')
            ,
            new SctItm('怯えた様子で@SAY01@')
            ,
            new SctItm('目を血走らせて@SAY01@')
            ,
            new SctItm('@MANYCHAR@の前で@SAY01@')
            ,
            new SctItm('@MANYCHAR@を集めて@SAY01@')
            ,
            new SctItm('@GROUP@の避難を浴びながら@SAY01@')
            ,
            new SctItm('@MANYCHAR@が喝采する中で@SAY01@')
            ,
            new SctItm('@GROUP@の賛同を得て@SAY01@')
            ,
            new SctItm('@MANYCHAR@の賛成多数で@SAY01@')
            ,
            new SctItm('@GROUP@の承認の元に@SAY01@')
            ,
            new SctItm('@MANYCHAR@の反対を押し切って@SAY01@')
        ];
    }
}

class selector_say01 extends SctItm_Selector implements ISctItm_Selector {
    constructor(){
        super('@SAY01@');
        this.itms = [
            new SctItm('@GROUP@に主張')
            ,
            new SctItm('@GROUP@に強調')
            ,
            new SctItm('@GROUP@に公表')
            ,
            // new SctItm('@GROUP@で分析')
            // ,
            new SctItm('@GROUP@に発言')
            ,
            new SctItm('@GROUP@に代弁')
            ,
            new SctItm('@GROUP@に強弁')
            ,
            // new SctItm('記録')
            // ,
            new SctItm('@GROUP@に解説')
            ,
            new SctItm('@GROUP@に説明')
            ,
            new SctItm('@GROUP@に提案')
            ,
            new SctItm('@GROUP@に報告')
            ,
            new SctItm('メモ書き')
            ,
            new SctItm('@GROUP@にコメント')
            ,
            new SctItm('@PART@に電話')
            ,
            new SctItm('@PART@に相談')
            ,
            new SctItm('@GROUP@に連絡')
            ,
            new SctItm('@GROUP@にFAX')
            ,
            new SctItm('@GROUP@に報告書を提出')
            ,
            new SctItm('@GROUP@に糾弾')
            ,
            new SctItm('@GROUP@に追求')
            ,
            new SctItm('@GROUP@に告げ口')
            ,
            new SctItm('@PART@にメール')
            ,
            new SctItm('@PART@に耳打ち')
            ,
            new SctItm('記者会見で発表')
            ,
            new SctItm('@LANDMARK@で演説')
            ,
            new SctItm('リツイート')
        ];
    }
}

// 発言・主張 ～を頂く
class selector_say2 extends SctItm_Selector implements ISctItm_Selector {
    constructor(){
        super('@SAY2@');
        this.itms = [
            new SctItm('@SAY201@')
            ,
            new SctItm('@SAY201@')
            ,
            new SctItm('@SAY201@')
            ,
            new SctItm('@SAY201@')
            ,
            new SctItm('@SAY201@')
            ,
            new SctItm('@SAY201@')
            ,
            new SctItm('@SAY201@や@SAY201@')
            ,
            new SctItm('興奮気味な@SAY201@')
            ,
            new SctItm('声高らかに@SAY201@')
            ,
            new SctItm('鼻息の荒い@SAY201@')
            ,
            new SctItm('落ち着いた様子で@SAY201@')
            ,
            new SctItm('嬉々とした@SAY201@')
            ,
            new SctItm('笑いを堪えながらの@SAY201@')
            ,
            new SctItm('涙ながらの@SAY201@')
            ,
            new SctItm('あっけらかんとした@SAY201@')
            ,
            new SctItm('大声の@SAY201@')
            ,
            new SctItm('声を潜めた@SAY201@')
            ,
            new SctItm('狼狽えながらの@SAY201@')
            ,
            new SctItm('怯えた様子で@SAY201@')
            ,
            new SctItm('貴重な@SAY201@')
        ];
    }
}
class selector_say201 extends SctItm_Selector implements ISctItm_Selector {
    constructor(){
        super('@SAY201@');
        this.itms = [
            // new SctItm('分析')
            // ,
            new SctItm('ご意見')
            ,
            new SctItm('ご要望')
            ,
            new SctItm('お電話')
            ,
            new SctItm('ご批判')
            ,
            new SctItm('ご理解')
            ,
            new SctItm('コメント')
            ,
            new SctItm('ツイート')
            ,
            new SctItm('リツイート')
        ];
    }
}

// ～からの報告、報告している
class selector_say03 extends SctItm_Selector implements ISctItm_Selector {
    constructor(){
        super('@SAY03@');
        this.itms = [
            new SctItm('報告')
            ,
            new SctItm('コメント')
            ,
            new SctItm('分析')
            ,
            new SctItm('論評')
            ,
            new SctItm('ツイート')
            ,
            new SctItm('リツイート')
        ];
    }
}

// 相手
class selector_sexage extends SctItm_Selector implements ISctItm_Selector {
    constructor(){
        super('@SEXAGE@');
        this.Add(itms_sexage);
    }
}
class locker_sexage extends SctItm_SelectLocker implements ISctItm_Selector{
    constructor(){
        super('@L_SEXAGE@');
        this.Add(itms_sexage);
    }
}
// 相手
class selector_partner extends SctItm_Selector implements ISctItm_Selector {
    constructor(){
        super('@PART@');
        this.Add(itms_partner);
    }
}

// 問題の相手
class locker_partner extends SctItm_SelectLocker implements ISctItm_Selector{
    constructor(){
        super('@L_PART@');
        this.Add(itms_partner);
    }
}


// 癖・悪癖・スポーツ
class locker_habit extends SctItm_SelectLocker implements ISctItm_Selector{
    constructor(){
        super('@L_HABIT@');
        this.Add(itms_badhabit);
        this.Add(itms_goodhabit);
        this.Add(itms_sports);
        this.Add(itms_culture);
    }
}

// 癖・悪癖・スポーツ
class selector_habit extends SctItm_Selector implements ISctItm_Selector {
    constructor(){
        super('@HABIT@');
        this.Add(itms_badhabit);
        this.Add(itms_goodhabit);
        this.Add(itms_sports);
        this.Add(itms_culture);
    }
}

// 学問
class selector_science extends SctItm_Selector implements ISctItm_Selector {
    constructor(){
        super('@SCIENCE@');
        this.Add(itms_Science);
    }
}
class locker_science extends SctItm_SelectLocker implements ISctItm_Selector{
    constructor(){
        super('@L_SCIENCE@');
        this.Add(itms_Science);
    }
}

// 賞
class selector_awardType extends SctItm_Selector implements ISctItm_Selector {
    constructor(){
        super('@AWARDTYPE@');
        this.Add(itms_AwardType);
    }
}
class selector_awardRank extends SctItm_Selector implements ISctItm_Selector {
    constructor(){
        super('@AWARDRANK@');
        this.Add(itms_AwardRank);
    }
}
class selector_awardGet extends SctItm_Selector implements ISctItm_Selector {
    constructor(){
        super('@AWARDGET@');
        this.Add(itms_AwardGet);
    }
}
// 受賞
class selector_award extends SctItm_Selector implements ISctItm_Selector {
    constructor(){
        super('@AWARD@');
        this.Add(itms_Award);
    }
}

class selector_ranking01 extends SctItm_Selector implements ISctItm_Selector {
    constructor(){
        super('@RANKING01@');
        this.Add(itms_Ranking01);
    }
}

class selector_ranking extends SctItm_Selector implements ISctItm_Selector {
    constructor(){
        super('@RANKING@');
        this.Add(itms_Ranking);
    }
}
class selector_party01 extends SctItm_Selector implements ISctItm_Selector {
    constructor(){
        super('@PARTY01@');
        this.Add(itms_party01);
    }
}

class selector_party extends SctItm_Selector implements ISctItm_Selector {
    constructor(){
        super('@PARTY@');
        this.Add(itms_party);
    }
}

class selector_get01 extends SctItm_Selector implements ISctItm_Selector {
    constructor(){
        super('@GET01@');
        this.itms = [
            new SctItm('@AWARD@ @AWARDGET@')
            ,
            new SctItm('@RANKING@ 首位')
            ,
            new SctItm('@RANKING@ 最下位')
            ,
            new SctItm('@RANKING@ 第@NUM1TO100@位')
            ,
            new SctItm('@RANKING@ @AWARDGET@')
        ];
    }
}


class selector_friendShip extends SctItm_Selector implements ISctItm_Selector {
    constructor(){
        super('@FRIENDSHIP@');
        this.Add(itms_FriendShip);
    }
}


class selector_emotion extends SctItm_Selector implements ISctItm_Selector {
    constructor(){
        super('@EMO@');
        this.itms = [
            new SctItm('@EMO1@くて生きていけな')
            ,
            new SctItm('@EMO1@くて明日をも知れな')
            ,
            new SctItm('@EMO1@くて訳が判らな')
            ,
            new SctItm('@EMO1@くて取り付く島もな')
            ,
            new SctItm('@EMO1@くていてもたってもいられな')
            ,
            new SctItm('@EMO1@くてどうしようもな')
            ,
            new SctItm('@EMO1@くて仕方が無')
            ,
            new SctItm('@EMO1@くてたまらな')
            ,
            new SctItm('@EMO1@くて申し訳な')
            ,
            new SctItm('@EMO1@くて涙が止まらな')
            ,
            new SctItm('@EMO1@くて笑いが止まらな')
            ,
            new SctItm('@EMO1@くて夜も眠れな')
            ,
            new SctItm('@EMO1@くて食事が喉を通らな')
            ,
            new SctItm('@EMO1@くて@PART@に顔向けできな')
            ,
            new SctItm('@EMO1@')
            ,
            new SctItm('@EMO1@')
            ,
            new SctItm('@EMO1@')
            ,
            new SctItm('@EMO1@')
            ,
            new SctItm('@EMO1@')
            ,
            new SctItm('@EMO1@')
            ,
            new SctItm('@EMO1@')
            ,
            new SctItm('@EMO1@')
        ]
    }            
}


// 感情 （嬉し）い　（嬉し）くて
class selector_emotion01 extends SctItm_Selector implements ISctItm_Selector {
    constructor(){
        super('@EMO1@');
        this.itms = [
            new SctItm('嬉し')
            ,
            new SctItm('楽し')
            ,
            new SctItm('面白')
            ,
            new SctItm('悲し')
            ,
            new SctItm('切な')
            ,
            new SctItm('苦し')
            ,
            new SctItm('恐ろし')
            ,
            new SctItm('寂し')
            ,
            new SctItm('悔し')
            ,
            new SctItm('恥ずかし')
            ,
            new SctItm('悔し')
            ,
            new SctItm('切な')
            ,
            new SctItm('腹立たし')
            ,
            new SctItm('煩わし')
            ,
            new SctItm('痛々し')
            ,
            new SctItm('うらやまし')
            ,
            new SctItm('うるさ')
            ,
            new SctItm('可笑し')
            ,
            new SctItm('うるさ')
            ,
            new SctItm('騒がし')
            ,
            new SctItm('図々し')
            ,
            new SctItm('素晴らし')
        ]
    }            
}

// 判断 ～を
class selector_answer extends SctItm_Selector implements ISctItm_Selector {
    constructor(){
        super('@ANSWER@');
        this.itms = [
            new SctItm('意見')
            // ,
            // new SctItm('見解')
            ,
            new SctItm('推測')
            ,
            new SctItm('判断')
            // ,
            // new SctItm('戯れ言')
            // ,
            // new SctItm('疑問')
            // ,
            // new SctItm('悩み')
            // ,
            // new SctItm('事例')
            ,
            new SctItm('|妄想|もうそう|')
            // ,
            // new SctItm('|妄言|もうげん|')
            // ,
            // new SctItm('寝言')
            ,
            new SctItm('言い訳')
            // ,
            // new SctItm('世迷い言')
            // ,
            // new SctItm('迷信')
            ,
            new SctItm('予言')
            // ,
            // new SctItm('伝説')
            // ,
            // new SctItm('仮説')
            ,
            new SctItm('解説')
            ,
            new SctItm('推理')
            // ,
            // new SctItm('叫び')
            // ,
            // new SctItm('訴え')
            // ,
            // new SctItm('絶叫')
            // ,
            // new SctItm('哀願')
            // ,
            // new SctItm('熱唱')
            ,
            new SctItm('告白')
        ];
    }
}

class selector_day extends SctItm_Selector implements ISctItm_Selector {
    constructor(){
        super('@ALSODAY@');
        this.itms = [
            new SctItm('いつも')
            ,
            new SctItm('今日も変わらず')
            ,
            new SctItm('|相|あい|も変わらず')
            ,
            new SctItm('今日も今日とて')
            ,
            new SctItm('朝から晩まで')
            ,
            new SctItm('日が暮れるまで')
            ,
            new SctItm('夜が明けるまで')
            ,
            new SctItm('伝統的な')
        ];
    }
}

// 評価 と～（る・た・い）。
class selector_assessment extends SctItm_Selector implements ISctItm_Selector {
    constructor(){
        super('@ASSES@');
        this.itms = [
            new SctItm('@ASSES02@た')
            ,
            new SctItm('@ASSES02@て@DIDEND@')
            // ,
            // new SctItm('評価が高い')
            // ,
            // new SctItm('名高い')
        ];
    }
}

class selector_assessment02 extends SctItm_Selector implements ISctItm_Selector {
    constructor(){
        super('@ASSES02@');
        this.itms = [
            new SctItm('言い伝えられ')
            ,
            new SctItm('後ろ指を指され')
            ,
            new SctItm('恐れられ')
            ,
            new SctItm('おだてられ')
            ,
            new SctItm('驚かせ')
            ,
            new SctItm('勘違いされ')
            ,
            new SctItm('感動され')
            ,
            new SctItm('誤解され')
            ,
            new SctItm('感謝され')
            ,
            new SctItm('決めつけられ')
            ,
            new SctItm('驚嘆され')
            ,
            new SctItm('ささやかれ')
            ,
            new SctItm('蔑まれ')
            ,
            new SctItm('親しまれ')
            ,
            new SctItm('賞賛され')
            ,
            new SctItm('愛され')
            ,
            new SctItm('罵倒され')
            // ,
            // new SctItm('呼ばれ')
            // ,
            // new SctItm('知られ')
            ,
            new SctItm('期待され')
            ,
            new SctItm('丸め込まれ')
            ,
            new SctItm('見放され')
            ,
            new SctItm('見限られ')
            ,
            new SctItm('見捨てられ')
            ,
            new SctItm('馬鹿にされ')
            ,
            new SctItm('笑われ')
            ,
            new SctItm('讃えられ')
            ,
            new SctItm('語り継がれ')
            ,
            new SctItm('推薦され')
            ,
            new SctItm('表彰され')
            ,
            new SctItm('認定され')
            ,
            new SctItm('認められ')
            ,
            new SctItm('太鼓判を押され')
            ,
            new SctItm('名付けられ')
            ,
            new SctItm('見守られ')
            ,
            new SctItm('訴えられ')
            ,
            new SctItm('見間違え')
            ,
            new SctItm('間違えられ')
        ];
    }
}

// に～された・されていた
class selector_assessment03 extends SctItm_Selector implements ISctItm_Selector {
    constructor(){
        super('@ASSES03@');
        this.itms = [
            new SctItm('@ASSES0301@た')
            ,
            new SctItm('@ASSES0301@て@DIDEND@')
            // ,
            // new SctItm('評価が高い')
            // ,
            // new SctItm('名高い')
        ];
    }
}

// 評価 に～
class selector_assessment0301 extends SctItm_Selector implements ISctItm_Selector {
    constructor(){
        super('@ASSES0301@');
        this.itms = [
            new SctItm('推薦され')
            ,
            new SctItm('認定され')
            ,
            new SctItm('登録され')
        ];
    }
}

class selector_message extends SctItm_Selector implements ISctItm_Selector {
    constructor(){
        super('@MESSAGE@');
        this.itms = [
            new SctItm('@MESSAGE01@')
            ,
            new SctItm('@ORDER@@MESSAGE01@')
            ,
            new SctItm('@DATEBEFORE@に@MESSAGE01@')
            ,
            new SctItm('@DATEBEFORE@から@MESSAGE02@')
            ,
            new SctItm('@PART@が@MESSAGE01@')
            ,
            new SctItm('@MESSAGE03@')
        ];
    }
}

class selector_message01 extends SctItm_Selector implements ISctItm_Selector {
    constructor(){
        super('@MESSAGE01@');
        this.Add(itms_Message01);
    }
}
class selector_message02 extends SctItm_Selector implements ISctItm_Selector {
    constructor(){
        super('@MESSAGE02@');
        this.Add(itms_Message02);
    }
}
class selector_message03 extends SctItm_Selector implements ISctItm_Selector {
    constructor(){
        super('@MESSAGE03@');
        this.Add(itms_Message03);
    }
}


// 作品に対する凄い形容
class selector_superitem extends SctItm_Selector implements ISctItm_Selector {
    constructor(){
        super('@SUPERITEM@');
        this.itms = [
            new SctItm('究極の')
            ,
            new SctItm('至高の')
            ,
            new SctItm('衝撃の')
            ,
            new SctItm('驚愕の')
            ,
            new SctItm('渾身の')
            ,
            new SctItm('不朽の')
            ,
            new SctItm('未完の')
            ,
            new SctItm('磨き抜かれた')
            ,
            new SctItm('洗練された')
            ,
            new SctItm('@KEI@')
            ,
            new SctItm('@KEI3@')
            ,
        ];
    }
}

class selector_it extends SctItm_Selector implements ISctItm_Selector {
    constructor(){
        super('@IT@');
        this.itms = [
            new SctItm('')
            ,
            new SctItm('')
            ,
            new SctItm('')
            ,
            new SctItm('その')
            ,
            new SctItm('この')
            ,
            new SctItm('あの')
        ];
    }
}


// 接続詞
class selector_conect extends SctItm_Selector implements ISctItm_Selector {
    constructor(){
        super('@CONECT@');
        this.itms = [
            new SctItm('そして')
            ,
            new SctItm('加えて')
            ,
            new SctItm('それに伴い')
            ,
            new SctItm('しかし')
            ,
            new SctItm('そのため')
            ,
            new SctItm('その後')
            ,
            new SctItm('それにより')
            ,
            new SctItm('その一方')
            ,
            new SctItm('一方')
            ,
            new SctItm('しかるに')
            ,
            new SctItm('そこで')
            ,
            new SctItm('やはり')
            ,
            new SctItm('つまり')
            ,
            new SctItm('それはさておき')
            ,
            new SctItm('それにしても')
            ,
            new SctItm('その時')
            ,
            new SctItm('かつて')
            ,
            new SctItm('以前')
            ,
            new SctItm('確かに')
            ,
            new SctItm('流石に')
            ,
            new SctItm('兎に角')
            ,
            new SctItm('恐らく')
            ,
            new SctItm('すなわち')
            ,
            new SctItm('ところが')
          ];
    }
}

// 接続詞
class selector_conect2 extends SctItm_Selector implements ISctItm_Selector {
    constructor(){
        super('@CONECT2@');
        this.itms = [
            new SctItm('それはそうと')
            ,
            new SctItm('それはそれとして')
            ,
            new SctItm('正直いいますと')
            ,
            new SctItm('話は変わりますが')
            ,
            new SctItm('言いにくいことですが')
            ,
            new SctItm('ここだけの話ですが')
            ,
            new SctItm('大きな声では言えませんが')
            ,
            new SctItm('よく知らないのですが')
            ,
            new SctItm('そんなことより')
            ,
            new SctItm('つまり')
            ,
            new SctItm('そういう訳で')
            ,
            new SctItm('とりあえず')
            ,
            new SctItm('とにかく')
            ,
            new SctItm('ところで')
            ,
            new SctItm('そういうわけで')
            ,
            new SctItm('正直に言うと')
            ,
            new SctItm('例えば')
            ,
            new SctItm('そういえば')
            ,
            new SctItm('確か')
            ,
            new SctItm('実は')
          ];
    }
}

// 接続詞 小
class selector_conect3 extends SctItm_Selector implements ISctItm_Selector {
    constructor(){
        super('@CONECT3@');
        this.itms = [
            new SctItm('@AND00@')
            ,
            new SctItm('@BAT00@')
          ];
    }
}


// 否定接続
class selector_bat extends SctItm_Selector implements ISctItm_Selector {
    constructor(){
        super('@BAT@');
        this.itms = [
            new SctItm('が、')
            ,
            new SctItm('けど、')
            ,
            new SctItm('@END@@BAT01@、')
          ];
    }
}
// 否定接続 副
class selector_bat00 extends SctItm_Selector implements ISctItm_Selector {
    constructor(){
        super('@BAT00@');
        this.itms = [
            new SctItm('しかし')
            ,
            new SctItm('ただし')
            ,
            new SctItm('それでも')
            ,
            new SctItm('けれども')
          ];
    }
}
// 否定接続 副
class selector_bat01 extends SctItm_Selector implements ISctItm_Selector {
    constructor(){
        super('@BAT01@');
        this.itms = [
            new SctItm('でも')
            ,
            new SctItm('けど')
            ,
            new SctItm('しかし')
            ,
            new SctItm('ただし')
            ,
            new SctItm('それでも')
            ,
            new SctItm('けれども')
            ,
            new SctItm('そうはいっても')
          ];
    }
}


// 句読点・結び
class selector_end extends SctItm_Selector implements ISctItm_Selector {
    constructor(){
        super('@END@');
        this.itms = [
            new SctItm('。')
            ,
            new SctItm('ね。')
            ,
            new SctItm('よ。')
            ,
            new SctItm('よね。')
          ];
    }
}


// 追加接続
class selector_and extends SctItm_Selector implements ISctItm_Selector {
    constructor(){
        super('@AND@');
        this.itms = [
            new SctItm('し、')
            ,
            new SctItm('ので、')
            ,
            new SctItm('から、')
            ,
            new SctItm('@END@')
            ,
            new SctItm('@END@@AND01@、')
        ];
    }
}
// 追加接続 副
class selector_and00 extends SctItm_Selector implements ISctItm_Selector {
    constructor(){
        super('@AND00@');
        this.itms = [
            new SctItm('そして')
            ,
            new SctItm('加えて')
            ,
            new SctItm('それから')
            ,
            new SctItm('しかも')
        ];
    }
}
// 追加接続 副
class selector_and01 extends SctItm_Selector implements ISctItm_Selector {
    constructor(){
        super('@AND01@');
        this.itms = [
            new SctItm('そして')
            ,
            new SctItm('あと')
            ,
            new SctItm('加えて')
            ,
            new SctItm('だから')
            ,
            new SctItm('つまり')
            ,
            new SctItm('それから')
            ,
            new SctItm('確かに')
            ,
            new SctItm('しかも')
        ];
    }
}

class selector_pint extends SctItm_Selector implements ISctItm_Selector {
    constructor(){
        super('@PINT@');
        this.itms = [
            new SctItm('')
            ,
            new SctItm('')
            ,
            new SctItm('')
            ,
            new SctItm('恐らく')
            ,
            new SctItm('およそ')
            ,
            new SctItm('おおよそ')
            ,
            new SctItm('確か')
            ,
            new SctItm('あれは確か')
            // ,
            // new SctItm('大方')
            ,
            new SctItm('だいたい')
        ];
    }
}


class selector_didend extends SctItm_Selector implements ISctItm_Selector {
    constructor(){
        super('@DIDEND@');
        this.itms = [
            new SctItm('いた')
            ,
            new SctItm('いる')
        ];
    }
}


class selector_did extends SctItm_Selector implements ISctItm_Selector {
    constructor(){
        super('@DID@');
        this.itms = [
            new SctItm('@DID00@')
            ,
            new SctItm('@ORDER@@DID00@')
            ,
            new SctItm('@DID01@')
            ,
            new SctItm('@ORDER@@DID01@')
            ,
            new SctItm('@DID01@喜んで')
            ,
            new SctItm('@DID01@笑って')
            ,
            new SctItm('@DID01@笑い転げて')
            ,
            new SctItm('@DID01@悲しんで')
            ,
            new SctItm('@DID01@泣いて')
            ,
            new SctItm('@DID01@泣き叫んで')
            ,
            new SctItm('@DID01@涙を流して')
            ,
            new SctItm('@DID01@油を売って')
            ,
            new SctItm('@GITAI@して')
            ,
            new SctItm('@GITAI@と@DID01@')
        ];
    }
}
class selector_did01 extends SctItm_Selector implements ISctItm_Selector {
    constructor(){
        super('@DID01@');
        this.itms = [
            new SctItm('@DID00@')
            ,
            new SctItm('@DID00@')
            ,
            new SctItm('@DID00@')
            ,
            new SctItm('@L_CHAR@と一緒に@DID00@')
            ,
            new SctItm('@L_CHAR@と@DID00@')
            ,
            new SctItm('一人で@DID00@')
            ,
            new SctItm('独りぼっちで@DID00@')
            ,
            new SctItm('ペットの@ANIMAL@を連れて@DID00@')
            ,
            new SctItm('@GROUP@の@THEY@を率いて@DID00@')
            ,
            new SctItm('気が済むまで@DID00@')
            ,
            new SctItm('気が狂ったかのように@DID00@')
            ,
            new SctItm('とち狂ったかのように@DID00@')
            ,
            new SctItm('日が暮れるまで@DID00@')
            ,
            new SctItm('暗くなるまで@DID00@')
            ,
            new SctItm('夜が更けるまで@DID00@')
            ,
            new SctItm('夜が明けるまで@DID00@')
            ,
            new SctItm('日が昇るまで@DID00@')
            ,
            new SctItm('朝まで@DID00@')
            ,
            new SctItm('徹夜で@DID00@')
            ,
            new SctItm('一晩中@DID00@')
        ];
    }
}

// 行動 （食べ）ている　（食べ）た
class selector_did00 extends SctItm_Selector implements ISctItm_Selector {
    constructor(){
        super('@DID00@');
        this.Add(itms_did);
    }
}


// 行動 （食べて）いる　（食べて）いた
class selector_done extends SctItm_Selector implements ISctItm_Selector {
    constructor(){
        super('@DONE@');
        this.itms = [
            new SctItm('@DONE01@')
            ,
            new SctItm('@ORDER@@DONE01@')
            ,
            new SctItm('@DONE02@')
            ,
            new SctItm('@ORDER@@DONE02@')
            ,
            new SctItm('@DID01@喜んだ')
            ,
            new SctItm('@DID01@笑った')
            ,
            new SctItm('@DID01@笑い転げた')
            ,
            new SctItm('@DID01@悲しんだ')
            ,
            new SctItm('@DID01@泣いた')
            ,
            new SctItm('@DID01@泣き叫んた')
            ,
            new SctItm('@DID01@涙を流した')
            ,
            new SctItm('@DID01@油を売った')
        ];
    }
}


class selector_done01 extends SctItm_Selector implements ISctItm_Selector {
    constructor(){
        super('@DONE01@');
        this.itms = [
            new SctItm('@DONE02@')
            ,
            new SctItm('@DONE02@')
            ,
            new SctItm('@DONE02@')
            ,
            new SctItm('@L_CHAR@と一緒に@DONE02@')
            ,
            new SctItm('@L_CHAR@と@DONE02@')
            ,
            new SctItm('一人で@DONE02@')
            ,
            new SctItm('独りぼっちで@DONE02@')
            ,
            new SctItm('ペットの@ANIMAL@を連れて@DONE02@')
            ,
            new SctItm('@GROUP@を率いて@DONE02@')
        ];
    }
}

// 行動 （食べた）
class selector_done02 extends SctItm_Selector implements ISctItm_Selector {
    constructor(){
        super('@DONE02@');
        this.itms = [
            new SctItm('@DID@いた')
        ];
    }
}




class locker_did extends SctItm_SelectLocker implements ISctItm_Selector{
    constructor(){
        super('@L_DID@');
        this.Add(itms_did01_l);
        this.Add(itms_did02_l);
    }
}


class Onetime_did extends SctItm_OneTimeLocker implements ISctItm_Selector{
    constructor(){
        super('@O_DID@');
        this.Add(itms_did_o);
        this.Add(itms_did02_l);
    }
}



class locker_item extends SctItm_SelectLocker implements ISctItm_Selector{
    constructor(){
        super('@L_ITEM@');
        this.itms = [
            // new SctItm('@L_WHAT@')
            // ,
            new SctItm('@L_CLASS@')
            ,
            new SctItm('@L_ANIMAL@')
            ,
            new SctItm('@L_FLOWERCALL01@')
            ,
            new SctItm('@L_FRUIT@')
            ,
            new SctItm('@L_FOOD@')
            ,
            new SctItm('@L_RIDE@')
            ,
            new SctItm('@L_DRESS@')
            ,
            new SctItm('@L_MUSIC@')
            ,
            new SctItm('@L_SEXAGE@')
            ,
            new SctItm('@L_PART@')
            ,
            new SctItm('@L_HABIT@')
            ,
            new SctItm('@L_MUSIC@')
            ,
            new SctItm('@L_STAR@')
            ,
            new SctItm('@L_SPORTS@')
            ,
            new SctItm('@L_CAT@')
            ,
            new SctItm('@L_DOG@')
            ,
            new SctItm('@L_BUG@')
            ,
            new SctItm('@L_BUTTERFLY@')
        ];
    }
}


// class selector_chr_hero extends SctItm_Selector implements ISctItm_Selector {
//     constructor(){
//         super('@H@');
//         this.Add(itms_chr_hero);
//     }
// }



class locker_chr_hero1 extends SctItm_SelectLocker implements ISctItm_Selector{
    constructor(){
        super('@L_H1@');
        this.Add(itms_chr_hero1);
    }
}
class locker_chr_hero2 extends SctItm_SelectLocker implements ISctItm_Selector{
    constructor(){
        super('@L_H2@');
        this.Add(itms_chr_hero2);
    }
}
class locker_heromark extends SctItm_SelectLocker implements ISctItm_Selector{
    constructor(){
        super('@L_HM@');
        this.Add(itms_heromark);
    }
}


class locker_chr_evil1 extends SctItm_SelectLocker implements ISctItm_Selector{
    constructor(){
        super('@L_E1@');
        this.Add(itms_chr_evil1);
    }
}
class locker_chr_evil2 extends SctItm_SelectLocker implements ISctItm_Selector{
    constructor(){
        super('@L_E2@');
        this.Add(itms_chr_evil2);
    }
}
class locker_evilmark extends SctItm_SelectLocker implements ISctItm_Selector{
    constructor(){
        super('@L_EM@');
        this.Add(itms_evilmark);
    }
}


class locker_hero_type extends SctItm_SelectLocker implements ISctItm_Selector{
    constructor(){
        super('@L_HEROTYPE@','','@PIC_HERO@');
        this.Add(itms_hero_type);
    }
}
class locker_evil_type extends SctItm_SelectLocker implements ISctItm_Selector{
    constructor(){
        super('@L_EVILTYPE@');
        this.Add(itms_evil_type);
    }
}

class locker_heroname extends SctItm_SelectLocker implements ISctItm_Selector{
    constructor(){
        super('@L_HERONAME@');
        this.itms = [
            new SctItm('@L_H1@@L_H2@')
            ,
            new SctItm('@L_H1@@L_H2@@L_H2@')
            ,
            new SctItm('@L_H1@@L_H2@@L_H1@@L_H2@')
            ,
            new SctItm('@L_H1@@L_H2@ー')
            ,
            new SctItm('@L_H1@ー@L_H2@ー')
            ,
            new SctItm('@L_H1@@L_H2@ン')
            ,
            new SctItm('@L_H1@ッ@L_H2@')
            ,
            new SctItm('@L_H1@ッ@L_H2@ー')
            ,
            new SctItm('@L_H1@ッ@L_H2@ン')
            ,
            new SctItm('@L_H1@@L_H2@ン')
            ,
            new SctItm('@L_H1@ン@L_H2@')
            ,
            new SctItm('@L_H1@ン@L_H2@ー')
            ,
            new SctItm('@L_H1@ン@L_H2@ン')
        ];
    }
}
class locker_evilname extends SctItm_SelectLocker implements ISctItm_Selector{
    constructor(){
        super('@L_EVILNAME@');
        this.itms = [
            new SctItm('@L_E1@@L_E2@')
            ,
            new SctItm('@L_E1@@L_E2@@L_E2@')
            ,
            new SctItm('@L_E1@@L_E2@@L_E1@@L_E2@')
            ,
            new SctItm('@L_E1@ー@L_E2@ー')
            ,
            new SctItm('@L_E1@@L_E2@ー')
            ,
            new SctItm('@L_E1@@L_E2@ン')
            ,
            new SctItm('@L_E1@ッ@L_E2@')
            ,
            new SctItm('@L_E1@ッ@L_E2@ー')
            ,
            new SctItm('@L_E1@ッ@L_E2@ン')
            ,
            new SctItm('@L_E1@@L_E2@ン')
            ,
            new SctItm('@L_E1@ン@L_E2@')
            ,
            new SctItm('@L_E1@ン@L_E2@ー')
            ,
            new SctItm('@L_E1@@L_E2@@L_E2@ン')
        ];
    }
}
class locker_herojob extends SctItm_SelectLocker implements ISctItm_Selector{
    constructor(){
        super('@L_HEROJOB@');
        this.itms = [
            new SctItm('@L_WHAT@')
            ,
            new SctItm('@L_FLOWER@')
            ,
            new SctItm('@L_DRESS@')
            ,
            new SctItm('@L_FRUIT@')
            ,
            new SctItm('@L_SWEETS@')
        ];
    }
}
class locker_herofullname extends SctItm_SelectLocker implements ISctItm_Selector{
    constructor(){
        super('@L_HEROFULLNAME@');
        this.itms = [
            new SctItm('@L_HEROJOB@@L_HEROTYPE@@L_HM@@L_HERONAME@')
        ];
    }
}

class locker_hero extends SctItm_SelectLocker implements ISctItm_Selector{
    constructor(){
        super('@L_HERO@');
        this.itms = [
            new SctItm('『@L_HERONICK@』@L_HEROFULLNAME@')
        ];
    }
}
class locker_hero2 extends SctItm_SelectLocker implements ISctItm_Selector{
    constructor(){
        super('@L_HERO2@');
        this.itms = [
            new SctItm('『@L_HERONICK@』と@ASSES@@L_HEROFULLNAME@')
        ];
    }
}
class locker_heroNick extends SctItm_SelectLocker implements ISctItm_Selector{
    constructor(){
        super('@L_HERONICK@');
        this.itms = [
            new SctItm('@L_WHAT@の@NICKGOOD@')
            ,
            new SctItm('@L_DO@@END02B@@NICKGOOD@')
        ];
    }
}

class locker_eviljob extends SctItm_SelectLocker implements ISctItm_Selector{
    constructor(){
        super('@L_EVILJOB@');
        this.itms = [
            new SctItm('@L_ANIMAL@')
            ,
            new SctItm('@L_RIDE@')
            ,
            new SctItm('@L_MUSIC@')
            ,
            new SctItm('@L_HABIT@')
            ,
            new SctItm('@L_MUSIC@')
            ,
            new SctItm('@L_MEAL@')
            ,
            new SctItm('@L_KEY@')
        ];
    }
}
class locker_evilfullname extends SctItm_SelectLocker implements ISctItm_Selector{
    constructor(){
        super('@L_EVILFULLNAME@');
        this.itms = [
            new SctItm('@L_EVILJOB@@L_EVILTYPE@@L_EM@@L_EVILNAME@')
        ];
    }
}
class locker_evil extends SctItm_SelectLocker implements ISctItm_Selector{
    constructor(){
        super('@L_EVIL@');
        this.itms = [
            new SctItm('『@L_EVILNICK@』@L_EVILFULLNAME@')
        ];
    }
}
class locker_evil2 extends SctItm_SelectLocker implements ISctItm_Selector{
    constructor(){
        super('@L_EVIL2@');
        this.itms = [
            new SctItm('『@L_EVILNICK@』と@ASSES@@L_EVILFULLNAME@')
        ];
    }
}
class locker_evilNick extends SctItm_SelectLocker implements ISctItm_Selector{
    constructor(){
        super('@L_EVILNICK@');
        this.itms = [
            new SctItm('@L_WHAT@の@NICKBAD@')
            ,
            new SctItm('@L_DO@@END02B@@NICKBAD@')
        ];
    }
}

class locker_heroevil extends SctItm_SelectLocker implements ISctItm_Selector{
    constructor(){
        super('@L_HEROEVIL@');
        this.itms = [
            new SctItm('@L_HERO@')
            ,
            new SctItm('@L_EVIL@')
        ];
    }
}

class selector_herocatch extends SctItm_Selector implements ISctItm_Selector {
    constructor(){
        super('@HEROCATCH@');
        this.Add(itms_hero_catch);
    }
}

class locker_herocatch extends SctItm_SelectLocker implements ISctItm_Selector{
    constructor(){
        super('@L_HEROCATCH@');
        this.Add(itms_hero_catch);
    }
}

class selector_songColor extends SctItm_Selector implements ISctItm_Selector {
    constructor(){
        super('@SONGCOLOR@');
        this.Add(itms_songColor1);
    }
}
class selector_songColorName extends SctItm_Selector implements ISctItm_Selector {
    constructor(){
        super('@SONGCOLORNAME@');
        this.Add(itms_songColor2);
    }
}

class selector_songGenre extends SctItm_Selector implements ISctItm_Selector {
    constructor(){
        super('@SONGGENRE@');
        this.Add(itms_songGenre);
    }
}
class selector_songType extends SctItm_Selector implements ISctItm_Selector {
    constructor(){
        super('@SONGTYPE@');
        this.Add(itms_songType);
    }
}
class selector_songTema extends SctItm_Selector implements ISctItm_Selector {
    constructor(){
        super('@SONGTEMA@');
        this.Add(itms_songTema);
    }
}

class locker_songItem extends SctItm_SelectLocker implements ISctItm_Selector{
    constructor(){
        super('@SONGITEM@');
        this.itms = [
            new SctItm('@L_WHAT@')
            ,
            new SctItm('@L_ANIMAL@')
            ,
            new SctItm('@L_FLOWER@')
            ,
            new SctItm('@L_FRUIT@')
            ,
            new SctItm('@L_FOOD@')
            ,
            new SctItm('@L_RIDE@')
            ,
            new SctItm('@L_DRESS@')
            ,
            new SctItm('@L_SEXAGE@')
            ,
            new SctItm('@L_PART@')
            ,
            new SctItm('@L_HABIT@')
            ,
            new SctItm('@L_STAR@')
            ,
            new SctItm('@L_SPORTS@')
            ,
            new SctItm('@L_TECH@')
        ];
    }
}

class selector_songTitle extends SctItm_Selector implements ISctItm_Selector {
    constructor(){
        super('@SONGTITLE@');
        this.itms = [
            new SctItm('@SONGTEMA@の@SONGITEM@')
            ,
            new SctItm('@SONGCOLORNAME@の@SONGITEM@')
            ,
            new SctItm('@SONGCOLOR@@SONGITEM@')
            ,
            new SctItm('@SONGITEM@の@SONGTEMA@')
            ,
            new SctItm('@SONGITEM@は@SONGCOLORNAME@')
            ,
            new SctItm('@SONGITEM@に捧げる@SONGGENRE@')
            ,
            new SctItm('@SONGITEM@に送る@SONGGENRE@')
            ,
            new SctItm('@SONGITEM@よ @GREET@')
        ];
    }
}

class selector_songWhat extends SctItm_Selector implements ISctItm_Selector {
    constructor(){
        super('@SONG_WHAT@');
        this.itms = [
            new SctItm('@SONGTEMA@の@L_WHAT@')
            ,
            new SctItm('@SONGCOLORNAME@の@L_WHAT@')
            ,
            new SctItm('@SONGCOLOR@@L_WHAT@')
            ,
            new SctItm('@L_WHAT@の@SONGTEMA@')
            ,
            new SctItm('@L_WHAT@は@SONGCOLORNAME@')
            ,
            new SctItm('@L_WHAT@@SONGGENRE@')
        ];
    }
}
class selector_songPart extends SctItm_Selector implements ISctItm_Selector {
    constructor(){
        super('@SONG_PART@');
        this.itms = [
            new SctItm('@SONGTEMA@の@L_PART@')
            ,
            new SctItm('@SONGCOLORNAME@の@L_PART@')
            ,
            new SctItm('@SONGCOLOR@@L_PART@')
            ,
            new SctItm('@L_PART@の@SONGTEMA@')
            ,
            new SctItm('@L_PART@は@SONGCOLORNAME@')
            ,
            new SctItm('@L_PART@@SONGGENRE@')
            ,
            new SctItm('@L_PART@よ @GREET@')
            ,
            new SctItm('@COUNTRY@の@L_PART@')
        ];
    }
}

class selector_where extends SctItm_Selector implements ISctItm_Selector {
    constructor(){
        super('@WHERE@');
        this.Add(itms_where);
    }
}
class selector_where01 extends SctItm_Selector implements ISctItm_Selector {
    constructor(){
        super('@WHERE01@');
        this.Add(itms_where01);
    }
}
class selector_where02 extends SctItm_Selector implements ISctItm_Selector {
    constructor(){
        super('@WHERE02@');
        this.Add(itms_where02);
    }
}
class selector_whereCompany extends SctItm_Selector implements ISctItm_Selector {
    constructor(){
        super('@WHERECOMPANY@');
        this.itms = [
            new SctItm('@WHERECOMPANY01@')
            ,
            new SctItm('@WHERECOMPANY01@の@WHERECOMPANY02@')
            ,
            new SctItm('@WHERECOMPANY01@には無かった筈の@WHERECOMPANY02@')
            ,
            new SctItm('@WHERECOMPANY01@では@DIDFRONT@取り壊された@WHERECOMPANY02@')
            ,
            new SctItm('@WHERECOMPANY01@では@DIDFRONT@封鎖されていた@WHERECOMPANY02@')
            ,
            new SctItm('@WHERECOMPANY01@では@DIDFRONT@閉鎖されてしまった@WHERECOMPANY02@')
            ,
            new SctItm('@WHERECOMPANY01@では@DIDFRONT@封印された@WHERECOMPANY02@')
            ,
            new SctItm('@WHERECOMPANY01@に@DIDFRONT@新設されていた@WHERECOMPANY02@')
        ];
    }
}
class selector_whereCompany01 extends SctItm_Selector implements ISctItm_Selector {
    constructor(){
        super('@WHERECOMPANY01@');
        this.Add(itms_whereCompany01);
    }
}
class selector_whereCompany02 extends SctItm_Selector implements ISctItm_Selector {
    constructor(){
        super('@WHERECOMPANY02@');
        this.Add(itms_whereCompany02);
    }
}

class selector_present extends SctItm_Selector implements ISctItm_Selector {
    constructor(){
        super('@PRESENT@');
        this.Add(itms_present);
        this.Add(itms_present01);
        this.Add(itms_present_paper);
    }
}
class locker_present extends SctItm_SelectLocker implements ISctItm_Selector{
    constructor(){
        super('@L_PRESENT@');
        this.Add(itms_present);
        this.Add(itms_present01_l);
        this.Add(itms_present_paper);
    }
}
class selector_paper extends SctItm_Selector implements ISctItm_Selector {
    constructor(){
        super('@PAPER@');
        this.Add(itms_present_paper);
        // this.Add(itms_paper);
    }
}
class locker_paper extends SctItm_SelectLocker implements ISctItm_Selector{
    constructor(){
        super('@L_PAPER@');
        this.Add(itms_present_paper);
        // this.Add(itms_paper);
    }
}
class selector_reader extends SctItm_Selector implements ISctItm_Selector {
    constructor(){
        super('@READER@');
        this.Add(itms_reader);
        this.Add(itms_reader_paper);
    }
}
class locker_reader extends SctItm_SelectLocker implements ISctItm_Selector{
    constructor(){
        super('@L_READER@');
        this.Add(itms_reader);
        this.Add(itms_reader_paper);
    }
}

class selector_animalFrom extends SctItm_Selector implements ISctItm_Selector {
    constructor(){
        super('@ANIMALFROM@');
        this.Add(itms_animalFrom);
    }
}
class locker_animalFrom extends SctItm_SelectLocker implements ISctItm_Selector{
    constructor(){
        super('@L_ANIMALFROM@');
        this.Add(itms_animalFrom);
    }
}


class selector_gitai extends SctItm_Selector implements ISctItm_Selector {
    constructor(){
        super('@GITAI@');
        this.Add(itms_Gitai);
    }
}
class locker_gitai extends SctItm_SelectLocker implements ISctItm_Selector{
    constructor(){
        super('@L_GITAI@');
        this.Add(itms_Gitai);
    }
}

class selector_greet extends SctItm_Selector implements ISctItm_Selector {
    constructor(){
        super('@GREET@');
        this.Add(itms_Greet);
    }
}
class locker_greet extends SctItm_SelectLocker implements ISctItm_Selector{
    constructor(){
        super('@L_GREET@');
        this.Add(itms_Greet);
    }
}

class selector_certificate extends SctItm_Selector implements ISctItm_Selector {
    constructor(){
        super('@CERTIFICATE@');
        this.Add(itms_Certificate);
    }
}
class locker_certificate extends SctItm_SelectLocker implements ISctItm_Selector{
    constructor(){
        super('@L_CERTIFICATE@');
        this.Add(itms_Certificate);
    }
}

class selector_certificateget extends SctItm_Selector implements ISctItm_Selector {
    constructor(){
        super('@CERTIFICATEGET@');
        this.Add(itms_CertificateGet);
    }
}

// class selector_club_sports extends SctItm_Selector implements ISctItm_Selector {
//     constructor(){
//         super('@CLUB_SPORTS@');
//         this.Add(itms_club_sports);
//     }
// }


class selector_club02 extends SctItm_Selector implements ISctItm_Selector {
    constructor(){
        super('@CLUB02@');
        this.Add(itms_club);
    }
}

class locker_club02 extends SctItm_SelectLocker implements ISctItm_Selector {
    constructor(){
        super('@L_CLUB02@');
        this.Add(itms_club);
    }
}


class selector_club01 extends SctItm_Selector implements ISctItm_Selector {
    constructor(){
        super('@CLUB01@');
        this.itms = [
            new SctItm('@CLUB02@部')
            ,
            new SctItm('@CLUB02@研究会')
            ,
            new SctItm('@CLUB02@同好会')
            ,
            new SctItm('@CLUB02@愛好会')
            ,
            new SctItm('@CLUB02@クラブ')
            ,
            new SctItm('@CLUB02@サークル')
        ];
    }
}
class locker_club01 extends SctItm_SelectLocker implements ISctItm_Selector{
        constructor(){
        super('@L_CLUB01@');
        this.itms = [
            new SctItm('@L_CLUB02@部')
            ,
            new SctItm('@L_CLUB02@研究会')
            ,
            new SctItm('@L_CLUB02@同好会')
            ,
            new SctItm('@L_CLUB02@愛好会')
            ,
            new SctItm('@L_CLUB02@クラブ')
            ,
            new SctItm('@L_CLUB02@サークル')
        ];
    }
}


class selector_club extends SctItm_Selector implements ISctItm_Selector {
    constructor(){
        super('@CLUB@');
        this.itms = [
            new SctItm('@SCHOOL@の@CLUB01@')
            ,
            new SctItm('@SCHOOL01@@CLUB01@')
        ];
    }
}

class locker_club extends SctItm_SelectLocker implements ISctItm_Selector {
    constructor(){
        super('@L_CLUB@');
        this.itms = [
            new SctItm('@L_CLUB01@')
            ,
            new SctItm('@L_CLUB01@')
        ];
    }
}

class locker_companyname extends SctItm_SelectLocker implements ISctItm_Selector {
    constructor(){
        super('@L_COMPANYNAME@');
        this.Add(itms_companyname);
    }
}
class locker_companyname01 extends SctItm_SelectLocker implements ISctItm_Selector {
    constructor(){
        super('@L_COMPANYNAME01@');
        this.Add(itms_companyname01);
    }
}

class locker_famouscompany02 extends SctItm_SelectLocker implements ISctItm_Selector {
    constructor(){
        super('@L_FAMOUSCOMPANY02@');
        this.Add(wrd2_to_wrd(itms_famouscompany));
    }
}


class locker_companyname02 extends SctItm_SelectLocker implements ISctItm_Selector {
    constructor(){
        super('@L_COMPANYNAME02@');
        this.Add(itms_companyname02);
    }
}
class locker_companyname03 extends SctItm_SelectLocker implements ISctItm_Selector {
    constructor(){
        super('@L_COMPANYNAME03@');
        this.Add(itms_companyname03);
    }
}
class locker_companyname04 extends SctItm_SelectLocker implements ISctItm_Selector {
    constructor(){
        super('@L_COMPANYNAME04@');
        this.Add(itms_companyname04);
    }
}
class selector_companyclass extends SctItm_Selector implements ISctItm_Selector {
    constructor(){
        super('@COMPANYCLASS@');
        this.Add(itms_companyclass);
    }
}
class locker_companyclass extends SctItm_SelectLocker implements ISctItm_Selector {
    constructor(){
        super('@L_COMPANYCLASS@');
        this.Add(itms_companyclass);
    }
}


class news_doc {
    public pics : string[]
    constructor(
        public doc : string
    )
    {
        this.pics = new Array<string>();
    }
}


class news_docs_maker extends docs_maker {
    constructor(){
        super();

        this.dic_push(new locker_bookwriter());
        this.dic_push(new selector_writer());
        this.dic_push(new selector_writer2());
        this.dic_push(new selector_writer3());
        this.dic_push(new selector_book());
        this.dic_push(new locker_book());
        this.dic_push(new selector_title());
        this.dic_push(new selector_subtitle01());
        this.dic_push(new selector_subtitle02());
        this.dic_push(new selector_subtitle03());
        this.dic_push(new selector_newsFirst());

        this.dic_push(new selector_doc());
        this.dic_push(new selector_newsC01());
        this.dic_push(new selector_newsC02());
        this.dic_push(new selector_newsQ01());
        this.dic_push(new selector_why());
        this.dic_push(new selector_why2());
        this.dic_push(new selector_end01a());
        this.dic_push(new selector_end01b());
        this.dic_push(new selector_end02a());
        this.dic_push(new selector_end02b());
        this.dic_push(new selector_end02c());
        this.dic_push(new selector_end02d());
        this.dic_push(new selector_end02d1());
        this.dic_push(new selector_end02d2());
        this.dic_push(new selector_end02e());
        this.dic_push(new selector_comment());
        this.dic_push(new selector_comment1());
        this.dic_push(new selector_comment2());
        this.dic_push(new selector_YESNO());
        this.dic_push(new selector_TimeFront());
        this.dic_push(new selector_TimeFront2());
        this.dic_push(new selector_DIDFRONT());
        
        this.dic_push(new selector_date());
        this.dic_push(new selector_date02());
        this.dic_push(new selector_dateBefore());
        this.dic_push(new selector_dateAfter());

        this.dic_push(new selector_random_date01());
        this.dic_push(new selector_random_year());
        this.dic_push(new selector_random_NUM10());
        this.dic_push(new selector_random_NUM1TO100());
        this.dic_push(new selector_random_NUM2TO100());
        this.dic_push(new selector_random_NUM2TO9());
        this.dic_push(new selector_random_NUM10TO99());
        this.dic_push(new selector_random_NUM10000());
        this.dic_push(new locker_what());
        this.dic_push(new locker_do());
        this.dic_push(new selector_what());
        this.dic_push(new selector_do());

        this.dic_push(new selector_accident());
        this.dic_push(new locker_accident());


        this.dic_push(new selector_key());
        this.dic_push(new locker_key());
        this.dic_push(new selector_festival());
        this.dic_push(new locker_festival());
        this.dic_push(new selector_size1());
        this.dic_push(new selector_size2());
        this.dic_push(new selector_they());
        this.dic_push(new selector_many());
        this.dic_push(new selector_manyman());
        this.dic_push(new selector_keiyo());
        this.dic_push(new selector_keiyo1());
        this.dic_push(new selector_keido());
        this.dic_push(new selector_keido2());
        this.dic_push(new selector_keime1());
        this.dic_push(new selector_keime2());
        this.dic_push(new selector_country());
        this.dic_push(new locker_country());
        this.dic_push(new selector_town());
        this.dic_push(new locker_town());
        this.dic_push(new selector_history());
        this.dic_push(new selector_landmark());
        this.dic_push(new selector_landmark01());
        this.dic_push(new locker_landmark());
        this.dic_push(new locker_landmark01());
        this.dic_push(new selector_fruit());
        this.dic_push(new locker_fruit());
        this.dic_push(new selector_fish());
        this.dic_push(new locker_fish());
        this.dic_push(new selector_sweets());
        this.dic_push(new locker_sweets());
        this.dic_push(new selector_meal());
        this.dic_push(new locker_meal());
        this.dic_push(new selector_dress());
        this.dic_push(new selector_dress01());
        this.dic_push(new locker_dress());
        this.dic_push(new selector_under());
        this.dic_push(new locker_under());
        this.dic_push(new selector_food1());
        this.dic_push(new locker_food1());
        this.dic_push(new selector_food());
        this.dic_push(new locker_food());
        this.dic_push(new selector_drink());
        this.dic_push(new locker_drink());
        this.dic_push(new selector_school());
        this.dic_push(new selector_school01());
        this.dic_push(new selector_school02());
        this.dic_push(new selector_schoolas());
        this.dic_push(new selector_order());
        this.dic_push(new selector_group());
        this.dic_push(new selector_group01());
        this.dic_push(new selector_group02());

        this.dic_push(new selector_king());
        this.dic_push(new selector_king01());
        this.dic_push(new selector_king02());
        this.dic_push(new selector_king03());

        this.dic_push(new locker_king());
        this.dic_push(new locker_king01());
        this.dic_push(new locker_king02());
        this.dic_push(new locker_king03());

        this.dic_push(new selector_store());
        this.dic_push(new locker_store());
        
        this.dic_push(new selector_music());
        this.dic_push(new locker_music());
        this.dic_push(new selector_dance());
        this.dic_push(new selector_tech());
        this.dic_push(new locker_tech());
        this.dic_push(new selector_bird());
        this.dic_push(new locker_bird());

        this.dic_push(new selector_cat());
        this.dic_push(new locker_cat());

        this.dic_push(new selector_dog());
        this.dic_push(new locker_dog());

        this.dic_push(new selector_bug());
        this.dic_push(new locker_bug());

        this.dic_push(new selector_butterfly());
        this.dic_push(new locker_butterfly());


        this.dic_push(new selector_animal());
        this.dic_push(new locker_animal());
        this.dic_push(new selector_quizAnimal());
        this.dic_push(new selector_answerAnimal());
        this.dic_push(new locker_quizAnimal());
        this.dic_push(new selector_livestock());
        this.dic_push(new locker_livestock());
        this.dic_push(new selector_flower());
        this.dic_push(new locker_flower());
        this.dic_push(new locker_flowerCall01());
        this.dic_push(new locker_flowerCall());
        this.dic_push(new selector_star());
        this.dic_push(new locker_star());
        this.dic_push(new selector_sports());
        this.dic_push(new locker_sports());
        this.dic_push(new selector_km());
        this.dic_push(new selector_k());
        this.dic_push(new selector_kd());
        this.dic_push(new selector_kp());
        this.dic_push(new selector_kdp());
        this.dic_push(new selector_kdp2());
        this.dic_push(new selector_kmp());
        this.dic_push(new selector_kp2());
        this.dic_push(new selector_kp3());
        this.dic_push(new selector_kn());
        this.dic_push(new selector_kdn());
        this.dic_push(new selector_kdn2());
        this.dic_push(new selector_kmn());
        this.dic_push(new selector_kn2());
        this.dic_push(new selector_kn3());
        this.dic_push(new selector_grade());
        this.dic_push(new selector_dir());
        this.dic_push(new selector_season());
        this.dic_push(new selector_today());
        this.dic_push(new selector_move());
        this.dic_push(new selector_move2());

        this.dic_push(new selector_think());
        this.dic_push(new selector_who());
        this.dic_push(new selector_who2());
        this.dic_push(new selector_who3());
        this.dic_push(new selector_who4());
        this.dic_push(new selector_future());
        this.dic_push(new locker_future());
        this.dic_push(new selector_course());
        this.dic_push(new locker_course());
        this.dic_push(new selector_day());
        this.dic_push(new selector_place());
        this.dic_push(new selector_city());
        this.dic_push(new locker_city());
        this.dic_push(new selector_co());
        this.dic_push(new selector_human());
        this.dic_push(new selector_body());
        this.dic_push(new selector_family());
        this.dic_push(new selector_class());
        this.dic_push(new locker_class());
        this.dic_push(new selector_ride());
        this.dic_push(new locker_ride());
        this.dic_push(new selector_call());
        this.dic_push(new selector_call2());
        this.dic_push(new selector_age());
        this.dic_push(new selector_age2());
        this.dic_push(new selector_say());
        this.dic_push(new selector_say01());
        this.dic_push(new selector_say2());
        this.dic_push(new selector_say201());
        this.dic_push(new selector_say03());
        this.dic_push(new selector_answer());
        this.dic_push(new selector_it());
        this.dic_push(new selector_conect());
        this.dic_push(new selector_conect2());
        this.dic_push(new selector_conect3());
        this.dic_push(new selector_end());
        this.dic_push(new selector_bat());
        this.dic_push(new selector_bat00());
        this.dic_push(new selector_bat01());
        this.dic_push(new selector_and());
        this.dic_push(new selector_and00());
        this.dic_push(new selector_and01());
        this.dic_push(new selector_pint());
        this.dic_push(new selector_nickname());
        this.dic_push(new locker_nickname());
        this.dic_push(new selector_nickBad());
        this.dic_push(new selector_nickGood());
        this.dic_push(new selector_assessment());
        this.dic_push(new selector_assessment02());
        this.dic_push(new selector_assessment03());
        this.dic_push(new selector_assessment0301());
        this.dic_push(new selector_people());
        this.dic_push(new selector_specialist());
        this.dic_push(new locker_specialist());
        this.dic_push(new selector_manypeople());
        this.dic_push(new selector_char());
        this.dic_push(new locker_char());
        this.dic_push(new selector_manychar());
        this.dic_push(new locker_manychar());
        this.dic_push(new selector_sexage());
        this.dic_push(new locker_sexage());
        this.dic_push(new selector_partner());
        this.dic_push(new locker_partner());
        this.dic_push(new selector_habit());
        this.dic_push(new locker_habit());
        this.dic_push(new selector_item());
        this.dic_push(new selector_command());
        this.dic_push(new selector_command1());
        this.dic_push(new selector_inscription());
        this.dic_push(new selector_Lock_inscription());
        this.dic_push(new selector_Lock_TownInscription());
        this.dic_push(new selector_habit());
        this.dic_push(new selector_emotion());
        this.dic_push(new selector_emotion01());
        this.dic_push(new selector_emofront());
        this.dic_push(new selector_keifront());

        this.dic_push(new selector_didend());


        this.dic_push(new selector_did());
        this.dic_push(new selector_did01());
        this.dic_push(new selector_did00());

        this.dic_push(new selector_did());

        this.dic_push(new selector_done());
        this.dic_push(new selector_done01());
        this.dic_push(new selector_done02());

        this.dic_push(new locker_did());

        
        this.dic_push(new selector_superitem());
        this.dic_push(new locker_item());
        this.dic_push(new locker_chr_hero1());
        this.dic_push(new locker_chr_hero2());
        this.dic_push(new locker_heromark());
        this.dic_push(new locker_hero_type());
        this.dic_push(new locker_heroname());
        this.dic_push(new locker_herojob());
        this.dic_push(new locker_herofullname());
        this.dic_push(new locker_hero());
        this.dic_push(new locker_hero2());
        this.dic_push(new locker_heroNick());

        this.dic_push(new locker_chr_evil1());
        this.dic_push(new locker_chr_evil2());
        this.dic_push(new locker_evilmark());
        this.dic_push(new locker_evil_type());
        this.dic_push(new locker_evilname());
        this.dic_push(new locker_eviljob());
        this.dic_push(new locker_evilfullname());
        this.dic_push(new locker_evil());
        this.dic_push(new locker_evil2());
        this.dic_push(new locker_evilNick());

        this.dic_push(new locker_heroevil());
        
        this.dic_push(new selector_herocatch());
        this.dic_push(new locker_herocatch());

        this.dic_push(new selector_songColor());
        this.dic_push(new selector_songColorName());
        this.dic_push(new selector_songGenre());
        this.dic_push(new selector_songType());
        this.dic_push(new selector_songTema());
        this.dic_push(new locker_songItem());
        this.dic_push(new selector_songTitle());
        this.dic_push(new selector_songWhat());
        this.dic_push(new selector_songPart());

        this.dic_push(new selector_science());
        this.dic_push(new locker_science());
        this.dic_push(new selector_awardType());
        this.dic_push(new selector_awardRank());
        this.dic_push(new selector_awardGet());
        this.dic_push(new selector_award());

        this.dic_push(new selector_ranking01());
        this.dic_push(new selector_ranking());
        this.dic_push(new selector_party01());
        this.dic_push(new selector_party());

        this.dic_push(new selector_get01());

        this.dic_push(new selector_friendShip());

        this.dic_push(new selector_where());
        this.dic_push(new selector_where01());
        this.dic_push(new selector_where02());
        this.dic_push(new selector_whereCompany());
        this.dic_push(new selector_whereCompany01());
        this.dic_push(new selector_whereCompany02());
        
        this.dic_push(new selector_present());
        this.dic_push(new locker_present());
        
        this.dic_push(new selector_paper());
        this.dic_push(new locker_paper());
        this.dic_push(new selector_reader());
        this.dic_push(new locker_reader());

        this.dic_push(new selector_animalFrom());
        this.dic_push(new locker_animalFrom());

        this.dic_push(new selector_gitai());
        this.dic_push(new locker_gitai());

        this.dic_push(new selector_greet());
        this.dic_push(new locker_greet());

        this.dic_push(new selector_certificate());
        this.dic_push(new locker_certificate());
        this.dic_push(new selector_certificateget());

        this.dic_push(new selector_message());
        this.dic_push(new selector_message01());
        this.dic_push(new selector_message02());
        this.dic_push(new selector_message03());
        
        this.dic_push(new selector_club02());
        this.dic_push(new selector_club01());
        this.dic_push(new selector_club());

        this.dic_push(new locker_club02());
        this.dic_push(new locker_club01());
        this.dic_push(new locker_club());

        this.dic_push(new locker_companyname());
        this.dic_push(new locker_famouscompany02());
        this.dic_push(new locker_companyname01());
        this.dic_push(new locker_companyname02());
        this.dic_push(new locker_companyname03());
        this.dic_push(new locker_companyname04());
        this.dic_push(new selector_companyclass());
        this.dic_push(new locker_companyclass());

    }
}
