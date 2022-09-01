function set_news()
{
    set_header_menu(1);

    scrollTo(0,0);

    let html : string = '';
    html += '<div id="main_title">'
    html += '<h1>';
    html += 'NEWS';
    html += '<small>';
    html += ' N03.11';
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
    html += '　@NEWS_DOC@';
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
    html += '著書「@BOOK@」より抜粋';
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

class selector_bookface0 extends SctItm_Selector implements ISctItm_Selector {
    constructor(){
        super('@BOOKFACE0@');
        this.itms = [
            new SctItm('book01')
            ,
            new SctItm('book02')
            ,
            new SctItm('book03')
        ]
    }
}
class selector_bookface1 extends SctItm_Selector implements ISctItm_Selector {
    constructor(){
        super('@BOOKFACE1@');
        this.itms = [
            new SctItm('book04')
            ,
            new SctItm('book05')
            ,
            new SctItm('book06')
        ]
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


class selector_title extends SctItm_Selector implements ISctItm_Selector {
    constructor(){
        super('@NEWS_TITLE@');
        this.itms = [
            new SctItm('@L_WHAT@の@KEI@@L_DO@')
            ,
            new SctItm('@L_WHAT@が@KEID@@L_DO@')
            ,
            new SctItm('@L_WHAT@の@L_CLASS@が@KEID@@L_DO@')
            ,
            new SctItm('@L_WHAT@が@KEID@@L_DO@@END02C@')
            ,
            new SctItm('@L_WHAT@の@L_CLASS@が@KEID@@L_DO@@END02C@')
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
            new SctItm('@KEI@@L_CLASS@の@L_WHAT@')
            ,
            new SctItm('@KEI@@L_WHAT@')
            ,
            new SctItm('@KEI@@L_WHAT@の@L_TECH@')
            ,
            new SctItm('@KEI@@L_WHAT@の@L_CLASS@')
            ,
            new SctItm('@L_CLASS@が@DOING02@いる@L_WHAT@')
            ,
            new SctItm('@L_CLASS@だけが@DOING02@いた@L_WHAT@')
            ,
            new SctItm('@KEI@@L_WHAT@の@L_TECH@')
            ,
            new SctItm('@KEI@@L_WHAT@の@L_CLASS@')
            ,
            new SctItm('@KEI@@L_WHAT@の@THINK@')
        ];
    }
}

class selector_subtitle02 extends SctItm_Selector implements ISctItm_Selector {
    constructor(){
        super('@NEWS_SUBTITLE02@');
        this.itms = [
            new SctItm('@L_DO@@END02B@@PEOPLE@')
            ,
            new SctItm('@L_DO@@END02B@@PEOPLE@の@THINK@')
            ,
            new SctItm('@L_DO@@END02B@@L_CLASS@')
            ,
            new SctItm('@L_DO@@END02B@@L_TECH@')
            ,
            new SctItm('@SIZE@@END02B@@L_DO@')
            ,
            new SctItm('@SIZE@@END02B@@L_CLASS@の@L_DO@')
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
            new SctItm('@L_WHAT@の@KEI@@L_TECH@')
            ,
            new SctItm('@KEI@@L_CLASS@の@L_TECH@')
            ,
            new SctItm('@L_WHAT@の@L_TECH@が@L_DO@@END02C@')
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
            new SctItm('@KEID@@L_DO@@END02C@@PEOPLE@')
            ,
            new SctItm('@KEI@@L_WHAT@の@PEOPLE@')
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
            new SctItm('@DOING@@DOINGEND@@NICK@')
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
            new SctItm('@COUNTRY@の@KEI@@ITEM@')
            ,
            new SctItm('@KEI@@ITEM@')
            ,
            new SctItm('@HABIT@の@NICK@')
            ,
            new SctItm('@DOING@@DOINGEND@@NICK@')
        ];
    }
}

class selector_pop1 extends SctItm_Selector implements ISctItm_Selector {
    constructor(){
        super('@POP1@');
        this.itms = [
            new SctItm('@KEI1@@ITEM@')
            ,
            new SctItm('@COUNTRY@の@KEI@@ITEM@')
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
            new SctItm('およそ@DATE@')
            ,
            new SctItm('@DATE01@')
            ,
            new SctItm('@DATE01@')
            ,
            new SctItm('@DATE01@')
            ,
            new SctItm('@DATE01@')
            ,
            new SctItm('@DATE01@')
            ,
            new SctItm('@DATE01@')
            ,
            new SctItm('@DATE01@')
            ,
            new SctItm('@NUM2TO9@日後')
            ,
            new SctItm('@NUM2TO9@日前')
            ,
            new SctItm('@NUM2TO9@年後')
            ,
            new SctItm('@NUM2TO9@年前')
            ,
            new SctItm('@NUM2TO9@ヶ月前')
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
            new SctItm('@NEWS_C01@、@DATE@、@NEWS_C02@。')
            ,
            new SctItm('@DATE@、@NEWS_C01@、@NEWS_C02@。')
            ,
            new SctItm('@DATE@、@WHO@は「@COMMENT@」との@ANSWER@を@SAY@@END02B@。')
            ,
            new SctItm('@WHO@は「@COMMENT@」との@ANSWER@を@SAY@@END02B@。')
            ,
            new SctItm('@WHO@は@DATE@、「@COMMENT@」との@ANSWER@を@SAY@@END02B@。')
            ,
            new SctItm('「@COMMENT@」との@ANSWER@を@SAY@したのは、@WHO@@END02A@。')
        ];
    }
}

class selector_who extends SctItm_Selector implements ISctItm_Selector {
    constructor(){
        super('@WHO@');
        this.itms = [
            new SctItm('「@CALL@」と@KEID@@ASSES@@HUMAN@@AGE@')
            ,
            new SctItm('「@CALL@」と@KEID@@ASSES@@L_CLASS@の@HUMAN@@AGE@')
            ,
            new SctItm('@MANYPEOPLE@より「@CALL@」と@ASSES@@L_CLASS@の@HUMAN@@AGE@')
        ];
    }
}

class selector_who2 extends SctItm_Selector implements ISctItm_Selector {
    constructor(){
        super('@WHO2@');
        this.itms = [
            new SctItm('「@CALL@」')
            ,
            new SctItm('「@L_INSCRIPTION@」')
            ,
            new SctItm('「@CALL@」と@KEID@@ASSES@@PEOPLE@')
            ,
            new SctItm('@MANYPEOPLE@より「@CALL@」と@KEID@@ASSES@@PEOPLE@')
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
            new SctItm('@L_CLASS@の')
            ,
            new SctItm('@COUNTRY@で産まれた')
            ,
            new SctItm('@COUNTRY@から来た')
            ,
            new SctItm('@COUNTRY@出身の')
            ,
            new SctItm('@COUNTRY@在住の')
            ,
            new SctItm('@COUNTRY@唯一の')
            ,
            new SctItm('@COUNTRY@政府から派遣された')
            ,
            new SctItm('@SCHOOL@出身の')
            ,
            new SctItm('@SCHOOL@に通う')
            ,
            new SctItm('@SCHOOL@在学中の')
            ,
            new SctItm('@SCHOOL@筆頭の')
            ,
            new SctItm('@SCHOOL@を中退した')
            ,
            new SctItm('「@CALL2@」と呼ばれている')
            ,
            new SctItm('@MANYPEOPLE@より@ASSES@')
            ,
            new SctItm('@NICK@そっくりの')
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
            new SctItm('@DOING@ばかり@DOINGEND@')
            ,
            new SctItm('@DOING@@DOINGEND@')
            ,
            new SctItm('@DOING@@DOINGEND@筈の')
        ];
    }
}

class selector_who4 extends SctItm_Selector implements ISctItm_Selector {
    constructor(){
        super('@WHO4@');
        this.itms = [
            new SctItm('@L_CLASS@')
            ,
            new SctItm('@COUNTRY@出身')
            ,
            new SctItm('@COUNTRY@在住')
            ,
            new SctItm('「@CALL2@」')
            ,
            new SctItm('「@CALL2@」と@KEID@@ASSES@@PEOPLE@')
            ,
            new SctItm('@MANYPEOPLE@より「@CALL2@」と@KEID@@ASSES@@PEOPLE@')
            ,
            new SctItm('「@INSCRIPTION@」')
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


class selector_c01 extends SctItm_Selector implements ISctItm_Selector {
    constructor(){
        super('@NEWS_C01@');
        this.itms = [
            new SctItm('@KEI@@L_WHAT@が@KEID@@L_DO@@END01B@')
            ,
            new SctItm('@KEI@@L_WHAT@での@KEI@@KEY@@END01A@')
            ,
            new SctItm('@KEI@@L_WHAT@で@KEI@@KEY@が@SIZE@@END01B@')
            ,
            new SctItm('@KEI@@L_WHAT@では@KEI@@KEY@や@KEY@が@SIZE@@END01B@')
            ,
            new SctItm('@KEY@が@SIZE@する@L_WHAT@@END01A@')
            ,
            new SctItm('@KEI@@KEY@や@KEY@が@SIZE@する@L_WHAT@@END01A@')
            ,
            new SctItm('@KEI@@MANYPEOPLE@が@KEID@@L_DO@@END01B@')
            ,
            new SctItm('@KEI@@MANYPEOPLE@による@KEI@@KEY@が@SIZE@@END01B@')
            ,
            new SctItm('@MANYPEOPLE@の@THINK@や@THINK@@SIZE2@@L_WHAT@@END01A@')
            ,
            new SctItm('@MANYPEOPLE@が@DOING@@DOINGEND@@L_WHAT@@END01A@')
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


class selector_c02 extends SctItm_Selector implements ISctItm_Selector {
    constructor(){
        super('@NEWS_C02@');
        this.itms = [
            new SctItm('@MANYPEOPLE@が@DOING@@DOINGEND@')
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
        ];
    }
}


// 最後に句読点をつけられると困る
class selector_comment extends SctItm_Selector implements ISctItm_Selector {
    constructor(){
        super('@COMMENT@');
        this.itms = [
            new SctItm('@COMMENT1@')
            ,
            new SctItm('@COMMENT1@')
            ,
            new SctItm('@COMMENT1@')
            ,
            new SctItm('@COMMENT1@')
            ,
            new SctItm('@COMMENT1@')
            ,
            new SctItm('@COMMENT1@')
            ,
            new SctItm('@COMMENT1@')
            ,
            new SctItm('@COMMENT1@')
            ,
            new SctItm('@COMMENT1@――')
            ,
            new SctItm('@COMMENT1@――')
            ,
            new SctItm('――@COMMENT1@')
            ,
            new SctItm('――@COMMENT1@')
            ,
            new SctItm('@COMMENT1@……')
            ,
            new SctItm('@COMMENT1@……')
            ,
            new SctItm('……@COMMENT1@')
            ,
            new SctItm('……@COMMENT1@')
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
            ,
            new SctItm('@L_INSCRIPTION@')
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
            new SctItm('@L_WHAT@は@KEID@@L_DO@する@KEI@@NICK@だと@ASSES@')
            ,
            new SctItm('@MANYPEOPLE@は@CALL@@END02A@')
            ,
            new SctItm('@CALL@@END02A@')
            ,
            new SctItm('@MANYPEOPLE@は、@CALL@@END02A@')
            ,
            new SctItm('@MANYPEOPLE@の@KEY@@END02A@')
            ,
            new SctItm('@L_WHAT@は@L_DO@@END02B@')
            ,
            new SctItm('@L_WHAT@は@KEI@@NICK@の@PART@だと@KEID@@ASSES@')
            ,
            new SctItm('@L_WHAT@は@KEID@@L_DO@する@KEI@@THEY@@END02A@')
            ,
            new SctItm('@CALL@で、@CALL@@END02A@')
            ,
            new SctItm('@YESNO@、@CALL@だと@ASSES@')
            ,
            new SctItm('@YESNO@、@PEOPLE@の@KEY@@END02A@')
            ,
            new SctItm('@YESNO@、@L_WHAT@が@KEI@@NICK@@END02A@')
            ,
            new SctItm('@YESNO@、@KEI2@な@PART@が@SAY@@END02B@')
            ,
            new SctItm('@CALL@、@YESNO@、それが@PART@の@PART@@END02A@')
            ,
            new SctItm('@KEID@@L_DO@する@KEI@@NICK@と@KEID@@ASSES@@THEY@、@YESNO@、それが@L_WHAT@の@PEOPLE@@END02A@')
            ,
            new SctItm('@KEID@@L_DO@@END02B@@THEY@、@YESNO@、それが@L_WHAT@@END02A@')
            ,
            new SctItm('@L_WHAT@の@L_CLASS@、それが@PEOPLE@の@PEOPLE@@END02A@')
            ,
            new SctItm('@EMOFRONT@@EMO@@END02D@')
            ,
            new SctItm('@L_WHAT@で@DOING@@DOINGEND@')
            ,
            new SctItm('私の@PART@は@DOING@@DOINGEND@')
            ,
            new SctItm('私が@DOING@@DOINGEND@とき、@PART@が@DOING@@DOINGEND@のだ')

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
            new SctItm('やはり')
            ,
            new SctItm('つまり')
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
            new SctItm('とても')
            ,
            new SctItm('ああ、')
            ,
            new SctItm('いやはや、')
            ,
            new SctItm('こうなっては')
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
            // new SctItm('されている')
            // ,
            // new SctItm('されていた')
            // ,
            // new SctItm('させている')
            // ,
            // new SctItm('させていた')
            // ,
            new SctItm('している')
            ,
            new SctItm('していた')
            ,
            new SctItm('してしまった')
            // ,
            // new SctItm('したかった')
            // ,
            // new SctItm('させたかった')
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
        ];
    }
}
class selector_end02d extends SctItm_Selector implements ISctItm_Selector {
    constructor(){
        super('@END02D@');
        this.itms = [
            new SctItm('い')
            ,
            new SctItm('いのだ')
            ,
            new SctItm('いのです')
            ,
            new SctItm('いんだ')
            ,
            new SctItm('いんです')
            ,
            new SctItm('くてどうしようもない')
            ,
            new SctItm('くて堪らない')
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
            new SctItm('禁止')
            ,
            new SctItm('停止')
            ,
            new SctItm('中止')
            ,
            new SctItm('延期')
        ];
    }
}

// 感情の増減（２） （感情）～。（悲しみが広がっている）
class selector_size2 extends SctItm_Selector implements ISctItm_Selector {
    constructor(){
        super('@SIZE2@');
        this.itms = [
            new SctItm('が広がっている')
            ,
            new SctItm('が巻き起こっている')
            ,
            new SctItm('が訴えられている')
            ,
            new SctItm('が蔓延している')
            ,
            new SctItm('に包まれている')
            ,
            new SctItm('で混乱している')
            ,
            new SctItm('で困惑している')
            ,
            new SctItm('で言葉を失っている')
            ,
            new SctItm('に満ちあふれている')
            ,
            new SctItm('に輝いている')
            ,
            new SctItm('に囚われている')
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
            new SctItm('学生達')
            ,
            new SctItm('女子校生達')
            ,
            new SctItm('女子大生達')
            ,
            new SctItm('彼女達')
            ,
            new SctItm('ＯＬ達')
            ,
            new SctItm('彼ら')
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
            new SctItm('野次馬達')
            ,
            new SctItm('@SEXAGE@達')

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
            new SctItm('@COUNTRY@最大の')
            ,
            new SctItm('@COUNTRY@で唯一の')
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
            new SctItm('@COUNTRY@で唯一の')
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


class selector_action extends SctItm_Selector implements ISctItm_Selector {
    constructor(){
        super('@ACTION@');
        this.itms = [
            new SctItm('恋愛')
            ,
            new SctItm('仕事')
            ,
            new SctItm('学業')
            ,
            new SctItm('スポーツ')
            ,
            new SctItm('事故')
            ,
            new SctItm('天災')
        ];
    }
}

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
        this.Add(cods_to_itms(cods_km));
        this.Add(itms_km);
    }
}

class selector_k extends SctItm_Selector implements ISctItm_Selector {
    constructor(){
        super('@KEI3@');
        this.Add(cods_to_itms(cods_ad_beauty));
        this.Add(cods_to_itms(cods_ad_danger));
        this.Add(cods_to_itms(cods_ad_sense_n));
        this.Add(cods_to_itms(cods_ad_sense_p));
        // this.Add(cods_to_itms(cods_ad_color));
        this.Add(cods_to_itms(cods_ad_jougo));
        this.Add(cods_to_itms(cods_ad_etc));
        this.Add(itms_kmd);
    }
}

class selector_kd extends SctItm_Selector implements ISctItm_Selector {
    constructor(){
        super('@KEI4@');
        this.Add(cods_to_itms(cods_adv_beauty));
        this.Add(cods_to_itms(cods_adv_sense_n));
        this.Add(cods_to_itms(cods_adv_sense_p));
        this.Add(cods_to_itms(cods_adv_danger));
        this.Add(cods_to_itms(cods_adv_etc));
    }
}

class selector_kp extends SctItm_Selector implements ISctItm_Selector {
    constructor(){
        super('@KEIP@');
        this.Add(cods_to_itms(cods_ad_posi));
        this.Add(cods_to_itms(cods_ad_beauty));
        this.Add(cods_to_itms(cods_ad_sense_p));

    }
}
class selector_kdp extends SctItm_Selector implements ISctItm_Selector {
    constructor(){
        super('@KEIDP@');
        this.Add(cods_to_itms(cods_adv_posi));
        this.Add(cods_to_itms(cods_adv_beauty));
        this.Add(cods_to_itms(cods_adv_sense_p));
    }
}
class selector_kn extends SctItm_Selector implements ISctItm_Selector {
    constructor(){
        super('@KEIN@');
        this.Add(cods_to_itms(cods_ad_nega));
        this.Add(cods_to_itms(cods_ad_danger));
        this.Add(cods_to_itms(cods_ad_sense_n));
    }
}
class selector_kdn extends SctItm_Selector implements ISctItm_Selector {
    constructor(){
        super('@KEIDN@');
        this.Add(cods_to_itms(cods_adv_nega));
        this.Add(cods_to_itms(cods_adv_danger));
        this.Add(cods_to_itms(cods_adv_sense_n));
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

class selector_move extends SctItm_Selector implements ISctItm_Selector {
    constructor(){
        super('@MOVE@');
        this.Add(cods_to_itms(cods_move));
        this.Add(cods_to_itms(cods_move_dance));
        this.Add(cods_to_itms(cods_move_run));
        this.Add(cods_to_itms(cods_move_fly));
        this.Add(cods_to_itms(cods_move_walk));
        this.Add(cods_to_itms(cods_move_stop));
        this.Add(cods_to_itms(cods_move_open));
        this.Add(cods_to_itms(cods_move_life));
        this.Add(cods_to_itms(cods_move_death));
        this.Add(cods_to_itms(cods_move_light));
        this.Add(cods_to_itms(cods_move_think));
        this.Add(cods_to_itms(cods_move_sense));
        this.Add(cods_to_itms(cods_move_make));
    }
}

class selector_body extends SctItm_Selector implements ISctItm_Selector {
    constructor(){
        super('@BODY@');
        this.Add(cods_to_itms(cods_body));
    }
}
class selector_family extends SctItm_Selector implements ISctItm_Selector {
    constructor(){
        super('@FAMILY@');
        this.Add(cods_to_itms(cods_family));
    }
}



class selector_country extends SctItm_Selector implements ISctItm_Selector {
    constructor(){
        super('@COUNTRY@');
        this.Add(cods_ruby_to_itms(cods_country.slice(1)));
        this.Add(cods_to_itms(cods_country2));
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


class selector_sports extends SctItm_Selector implements ISctItm_Selector {
    constructor(){
        super('@SPORTS@');
        this.Add(itms_sports);
    }
}



class selector_future extends SctItm_Selector implements ISctItm_Selector {
    constructor(){
        super('@FUTURE@');
        this.Add(cods_to_itms(cods_future));
    }
}
class locker_future extends SctItm_SelectLocker implements ISctItm_Selector{
    constructor(){
        super('@L_FUTURE@');
        this.Add(cods_to_itms(cods_future));
    }
}
class selector_course extends SctItm_Selector implements ISctItm_Selector {
    constructor(){
        super('@COURSE@');
        this.Add(cods_to_itms(cods_course));
    }
}
class locker_course extends SctItm_SelectLocker implements ISctItm_Selector{
    constructor(){
        super('@L_COURSE@');
        this.Add(cods_to_itms(cods_course));
    }
}


class selector_place extends SctItm_Selector implements ISctItm_Selector {
    constructor(){
        super('@PLACE@');
        this.startNumber = 1;
        this.Add(cods_to_itms(cods_place));
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

class selector_scool extends SctItm_Selector implements ISctItm_Selector {
    constructor(){
        super('@SCHOOL@');
        this.itms = [
            new SctItm('@CITY@@SCOOL01@')
            ,
            new SctItm('@CITY@私立@SCOOL01@')
            ,
            new SctItm('@CITY@公立@SCOOL01@')
            ,
            new SctItm('@CITY@市立@SCOOL01@')
            ,
            new SctItm('@CITY@私立第@NUM10@@SCOOL01@')
            ,
            new SctItm('@CITY@公立第@NUM10@@SCOOL01@')
            ,
            new SctItm('@CITY@市立第@NUM10@@SCOOL01@')
            ,
            new SctItm('@CITY@第@NUM10@@SCOOL01@')
            ,
            new SctItm('@COUNTRY@@SCOOL01@')
            ,
            new SctItm('@COUNTRY@私立@SCOOL01@')
            ,
            new SctItm('@COUNTRY@公立@SCOOL01@')
            ,
            new SctItm('@COUNTRY@国立@SCOOL01@')
            ,
            new SctItm('@COUNTRY@私立第@NUM10@@SCOOL01@')
            ,
            new SctItm('@COUNTRY@公立第@NUM10@@SCOOL01@')
            ,
            new SctItm('@COUNTRY@国立第@NUM10@@SCOOL01@')
            ,
            new SctItm('@COUNTRY@第@NUM10@@SCOOL01@')
        ];
    }
}


class selector_scool01 extends SctItm_Selector implements ISctItm_Selector {
    constructor(){
        super('@SCOOL01@');
        this.Add(itms_scool);
    }
}
class selector_scoolas extends SctItm_Selector implements ISctItm_Selector {
    constructor(){
        super('@SCOOLAS@');
        this.Add(itms_scoolas);
    }
}

class selector_landmark extends SctItm_Selector implements ISctItm_Selector {
    constructor(){
        super('@LANDMARK@');
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
class selector_dress extends SctItm_Selector implements ISctItm_Selector {
    constructor(){
        super('@DRESS@');
        this.Add(itms_dress);
    }
}

class locker_dress extends SctItm_SelectLocker implements ISctItm_Selector {
    constructor(){
        super('@L_DRESS@');
        this.Add(itms_dress);
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
            new SctItm('@COUNTRY@産@FOOD01@')
            ,
            new SctItm('@COUNTRY@風@FOOD01@')
            ,
            new SctItm('@ITEM@っぽい@FOOD01@')
            ,
            new SctItm('@PART@が作った@FOOD01@')
            ,
            new SctItm('@CLASS@の手作り@FOOD01@')
            ,
            new SctItm('@CLASS@のお薦め@FOOD01@')
            ,
            new SctItm('@CLASS@で人気の@FOOD01@')
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
            new SctItm('@L_FOOD01@')
            ,
            new SctItm('@L_COUNTRY@産@L_FOOD01@')
            ,
            new SctItm('@L_COUNTRY@風@L_FOOD01@')
            ,
            new SctItm('@L_ITEM@っぽい@L_FOOD01@')
            ,
            new SctItm('@L_PART@が作った@L_FOOD01@')
            ,
            new SctItm('@L_CLASS@の手作り@L_FOOD01@')
            ,
            new SctItm('@L_CLASS@のお薦め@L_FOOD01@')
            ,
            new SctItm('@L_CLASS@で人気の@L_FOOD01@')
        ];
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
        this.Add(itms_meal);
        this.Add(itms_sweets);
        this.Add(cods_fruit.slice(1));
    }
}
// 敬称 の～
class selector_nickBad extends SctItm_Selector implements ISctItm_Selector {
    constructor(){
        super('@NICKBAD@');
        this.Add(itms_nickNega);
    }
}
// 敬称 の～
class selector_nickGood extends SctItm_Selector implements ISctItm_Selector {
    constructor(){
        super('@NICKGOOD@');
        this.Add(itms_nickPosi);
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
            new SctItm('興奮気味に@SAY@')
            ,
            new SctItm('声高らかに@SAY@')
            ,
            new SctItm('鼻息荒く@SAY@')
            ,
            new SctItm('落ち着いた様子で@SAY@')
            ,
            new SctItm('嬉々として@SAY@')
            ,
            new SctItm('笑いを堪えながら@SAY@')
            ,
            new SctItm('怒りと共に@SAY@')
            ,
            new SctItm('涙ながらに@SAY@')
            ,
            new SctItm('あっけらかんと@SAY@')
            ,
            new SctItm('大声で@SAY@')
            ,
            new SctItm('声を潜めて@SAY@')
            ,
            new SctItm('狼狽えながらも@SAY@')
            ,
            new SctItm('怯えた様子で@SAY@')
            ,
            new SctItm('主張')
            ,
            new SctItm('強調')
            ,
            new SctItm('公表')
            ,
            new SctItm('分析')
            ,
            new SctItm('発言')
            ,
            new SctItm('代弁')
            ,
            new SctItm('強弁')
            ,
            new SctItm('記録')
            ,
            new SctItm('解説')
            ,
            new SctItm('説明')
            ,
            new SctItm('提案')
            ,
            new SctItm('報告')
            ,
            new SctItm('メモ書き')
            ,
            new SctItm('コメント')
            ,
            new SctItm('@PART@にメール')
            ,
            new SctItm('@PART@に電話')
            ,
            new SctItm('@PART@に相談')
            ,
            new SctItm('@PART@に連絡')
            ,
            new SctItm('@PART@に説明')
            ,
            new SctItm('@PART@にFAX')
            ,
            new SctItm('@PART@に耳打ち')
            ,
            new SctItm('報告書を提出')
            ,
            new SctItm('記者会見で発表')
            ,
            new SctItm('演説')
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
            new SctItm('@SAY2@や@SAY2@')
            ,
            new SctItm('興奮気味な@SAY2@')
            ,
            new SctItm('声高らかに@SAY2@')
            ,
            new SctItm('鼻息の荒い@SAY2@')
            ,
            new SctItm('落ち着いた様子で@SAY2@')
            ,
            new SctItm('嬉々とした@SAY2@')
            ,
            new SctItm('笑いを堪えながらの@SAY2@')
            ,
            new SctItm('涙ながらの@SAY2@')
            ,
            new SctItm('あっけらかんとした@SAY2@')
            ,
            new SctItm('大声の@SAY2@')
            ,
            new SctItm('声を潜めた@SAY2@')
            ,
            new SctItm('狼狽えながらの@SAY2@')
            ,
            new SctItm('怯えた様子で@SAY2@')
            ,
            new SctItm('貴重な@SAY2@')
            ,
            new SctItm('分析')
            ,
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
    }
}

// 癖・悪癖・スポーツ
class selector_habit extends SctItm_Selector implements ISctItm_Selector {
    constructor(){
        super('@HABIT@');
        this.Add(itms_badhabit);
        this.Add(itms_goodhabit);
        this.Add(itms_sports);
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
            ,
            new SctItm('見解')
            ,
            new SctItm('推測')
            ,
            new SctItm('判断')
            ,
            new SctItm('戯れ言')
            ,
            new SctItm('疑問')
            ,
            new SctItm('悩み')
            ,
            new SctItm('事例')
            ,
            new SctItm('妄想')
            ,
            new SctItm('妄言')
            ,
            new SctItm('寝言')
            ,
            new SctItm('言い訳')
            ,
            new SctItm('世迷い言')
            ,
            new SctItm('迷信')
            ,
            new SctItm('予言')
            ,
            new SctItm('伝説')
            ,
            new SctItm('仮説')
            ,
            new SctItm('解説')
            ,
            new SctItm('推理')
            ,
            new SctItm('叫び')
            ,
            new SctItm('訴え')
            ,
            new SctItm('絶叫')
            ,
            new SctItm('哀願')
            ,
            new SctItm('熱唱')
            ,
            new SctItm('告白')
        ];
    }
}

class selector_day extends SctItm_Selector implements ISctItm_Selector {
    constructor(){
        super('@DAY@');
        this.itms = [
            new SctItm('今朝')
            ,
            new SctItm('今日')
            ,
            new SctItm('昨日')
            ,
            new SctItm('|一昨日|おととい|')
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
            new SctItm('@ASSES02@ている')
            ,
            new SctItm('評価が高い')
            ,
            new SctItm('名高い')
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
            ,
            new SctItm('呼ばれ')
            ,
            new SctItm('知られ')
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
            new SctItm('間違えら')
        ];
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
            new SctItm('仮に')
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

class selector_doingend extends SctItm_Selector implements ISctItm_Selector {
    constructor(){
        super('@DOINGEND@');
        this.itms = [
            new SctItm('いる')
            ,
            new SctItm('いた')
        ];
    }
}


class selector_doing extends SctItm_Selector implements ISctItm_Selector {
    constructor(){
        super('@DOING@');
        this.itms = [
            new SctItm('@DOING01@')
            ,
            new SctItm('@DOING01@')
            ,
            new SctItm('@DOING01@')
            ,
            new SctItm('@DOING02@')
            ,
            new SctItm('@DOING02@')
            ,
            new SctItm('@DOING02@')
            ,
            new SctItm('@DAY@も@DOING01@')
            ,
            new SctItm('@DOING01@喜んで')
            ,
            new SctItm('@DOING01@笑って')
            ,
            new SctItm('@DOING01@笑い転げて')
            ,
            new SctItm('@DOING01@悲しんで')
            ,
            new SctItm('@DOING01@泣いて')
            ,
            new SctItm('@DOING01@泣き叫んで')
            ,
            new SctItm('@DOING01@涙を流して')
            ,
            new SctItm('@DOING01@油を売って')
        ];
    }
}
class selector_doing01 extends SctItm_Selector implements ISctItm_Selector {
    constructor(){
        super('@DOING01@');
        this.itms = [
            new SctItm('@DOING02@')
            ,
            new SctItm('@L_DOING@')
            ,
            new SctItm('@PEOPLE@と一緒に@DOING02@')
            ,
            new SctItm('@PEOPLE@と@DOING02@')
            ,
            new SctItm('一人で@DOING02@')
            ,
            new SctItm('独りぼっちで@DOING02@')
            ,
            new SctItm('@ANIMAL@を連れて@DOING02@')
        ];
    }
}

// 行動 （食べて）いる　（食べて）いた
class selector_doing02 extends SctItm_Selector implements ISctItm_Selector {
    constructor(){
        super('@DOING02@');
        this.itms = [
            new SctItm('@FOOD@を食べて')
            ,
            new SctItm('@FOOD@に塩を振って食べて')
            ,
            new SctItm('@FOOD@に塩胡椒をかけて食べて')
            ,
            new SctItm('@FOOD@に醤油をかけて食べて')
            ,
            new SctItm('@FOOD@にソースをかけて食べて')
            ,
            new SctItm('@FOOD@にカラシをつけて食べて')
            ,
            new SctItm('@FOOD@にジャムを塗って食べて')
            ,
            new SctItm('@FOOD@にレモンを搾って食べて')
            ,
            new SctItm('@FOOD@をパンに挟んで食べて')
            ,
            new SctItm('@FOOD@をご飯にのせて食べて')
            ,
            new SctItm('@FOOD@を温め直して食べて')
            ,
            new SctItm('@FOOD@を焼き直して食べて')
            ,
            new SctItm('@LIVESTOCK@の肉を油で揚げて食べて')
            ,
            new SctItm('@LIVESTOCK@の肉を丸焼きにして食べて')
            ,
            new SctItm('@FISH@を塩焼きにして食べて')
            ,
            new SctItm('@FISH@を蒸し焼きにして食べて')
            ,
            new SctItm('@FOOD@を配達して')
            ,
            new SctItm('@FOOD@を注文して')
            ,
            new SctItm('@FOOD@を平らげて')
            ,
            new SctItm('@FOOD@を食い逃げして')
            ,
            new SctItm('@FOOD@の店を開いて')
            ,
            new SctItm('@CLASS@に憧れて')
            ,
            new SctItm('@CLASS@に恋をして')
            ,
            new SctItm('@CLASS@を目指して')
            ,
            new SctItm('@CLASS@を雇って')
            ,
            new SctItm('@CLASS@を召還して')
            ,
            new SctItm('@CLASS@を募集して')
            ,
            new SctItm('@CLASS@を呼び出して')
            ,
            new SctItm('@CLASS@に変身して')
            ,
            new SctItm('@PLACE@に住んで')
            ,
            new SctItm('@CITY@に家を建てて')
            ,
            new SctItm('@PLACE@で眠って')
            ,
            new SctItm('@PLACE@で遊んで')
            ,
            new SctItm('@DANCE@を踊って')
            ,
            new SctItm('@KEI@@DANCE@を踊って')
            ,
            new SctItm('@KEID@@DANCE@を踊って')
            ,
            new SctItm('@CITY@の@LANDMARK@を歩いて')
            ,
            new SctItm('@MANYPEOPLE@に追われて')
            ,
            new SctItm('@MANYPEOPLE@に囲まれて')
            ,
            new SctItm('@MANYPEOPLE@にいじめられて')
            ,
            new SctItm('@MANYPEOPLE@に閉じ込められて')
            ,
            new SctItm('@MANYPEOPLE@に襲われて')
            ,
            new SctItm('@MANYPEOPLE@に殺されかけて')
            ,
            new SctItm('@MANYPEOPLE@にもてはやされて')
            ,
            new SctItm('@MANYPEOPLE@に喝采されて')
            ,
            new SctItm('@MANYPEOPLE@を引き連れて')
            ,
            new SctItm('@MANYPEOPLE@を募集して')
            ,
            new SctItm('@PEOPLE@を集めて')
            ,
            new SctItm('@PEOPLE@を追いかけて')
            ,
            new SctItm('@PEOPLE@を探して')
            ,
            new SctItm('@PEOPLE@をとっちめて')
            ,
            new SctItm('@PEOPLE@から誘われて')
            ,
            new SctItm('@PEOPLE@の振りをして')
            ,
            new SctItm('「@CALL@」と署名して')
            ,
            new SctItm('「@CALL@」と呼ばれて')
            ,
            new SctItm('「@CALL@」と噂されて')
            ,
            new SctItm('「@CALL@」と馬鹿にされて')
            ,
            new SctItm('「@CALL@」と後ろ指を指されて')
            ,
            new SctItm('「@CALL@」と讃えられて')
            ,
            new SctItm('「@CALL@」と賞賛されて')
            ,
            new SctItm('「@CALL@」とおだてられて')
            ,
            new SctItm('@PART@を連れて')
            ,
            new SctItm('@PART@の手を引いて')
            ,
            new SctItm('@PART@を置き去りにして')
            ,
            new SctItm('@PART@を見捨てて')
            ,
            new SctItm('@PART@を押しのけて')
            ,
            new SctItm('デートして')
            ,
            new SctItm('@PART@をデートに誘って')
            ,
            new SctItm('@PART@に手紙を書いて')
            ,
            new SctItm('@PART@に電話して')
            ,
            new SctItm('@PART@にメールして')
            ,
            new SctItm('お散歩して')
            ,
            new SctItm('@PART@にプロポーズして')
            ,
            new SctItm('食事して')
            ,
            new SctItm('@PART@に別れ話をして')
            ,
            new SctItm('@PART@と喧嘩して')
            ,
            new SctItm('@PART@にお茶を出して')
            ,
            new SctItm('@PART@の靴を磨いて')
            ,
            new SctItm('@PART@の髪を乾かして')
            ,
            new SctItm('@PART@の背中を掻いて')
            ,
            new SctItm('@ANIMAL@を連れて')
            ,
            new SctItm('@ANIMAL@に乗って')
            ,
            new SctItm('@ANIMAL@の散歩をして')
            ,
            new SctItm('@ANIMAL@に餌をやって')
            ,
            new SctItm('@ANIMAL@の体を洗って')
            ,
            new SctItm('@ANIMAL@狩りをして')
            ,
            new SctItm('@ANIMAL@に襲われて')
            ,
            new SctItm('@ANIMAL@と戦って')
            ,
            new SctItm('@ANIMAL@を退治して')
            ,
            new SctItm('@ANIMAL@を檻に入れて')
            ,
            new SctItm('@ANIMAL@を追い出して')
            ,
            new SctItm('@ANIMAL@を追い払って')
            ,
            new SctItm('@ANIMAL@の絵を描いて')
            ,
            new SctItm('@DRESS@を着て')
            ,
            new SctItm('@DRESS@を脱いで')
            ,
            new SctItm('@DRESS@に着替えて')
            ,
            new SctItm('@DRESS@を洗濯して')
            ,
            new SctItm('@DRESS@を仮縫いして')
            ,
            new SctItm('@DRESS@を試着して')
            ,
            new SctItm('@DRESS@を仕立て直して')
            ,
            new SctItm('ドレスアップして')
            ,
            new SctItm('@SCHOOL@に通って')
            ,
            new SctItm('@SCHOOL@に入学して')
            ,
            new SctItm('@SCHOOL@に合格して')
            ,
            new SctItm('@SCHOOL@を卒業して')
            ,
            new SctItm('@SCHOOL@を中退して')
            ,
            new SctItm('@FLOWER@の花を|捧|ささ|げて')
            ,
            new SctItm('@FLOWER@の花を咲かせて')
            ,
            new SctItm('@FLOWER@の花を飾って')
            ,
            new SctItm('@FLOWER@の花の絵を描いて')
            ,
            new SctItm('@FLOWER@の花びらを散らして')
            ,
            new SctItm('@FLOWER@の花を|咥|くわ|えて')
            ,
            new SctItm('@FLOWER@の種を|蒔|ま|いて')
            ,
            new SctItm('@FRUIT@の皮を|剥|む|いて')
            ,
            new SctItm('@FRUIT@の木を植えて')
            ,
            new SctItm('@FRUIT@を収穫して')
            ,
            new SctItm('@FRUIT@を叩き売りして')
            ,
            new SctItm('@FRUIT@の種を捨てて')
            ,
            new SctItm('@MUSIC@を聴いて')
            ,
            new SctItm('@MUSIC@を歌って')
            ,
            new SctItm('@RIDE@に乗って')
        ];
    }
}

class locker_doing extends SctItm_SelectLocker implements ISctItm_Selector{
    constructor(){
        super('@L_DOING@');
        this.itms = [
            new SctItm('@L_FOOD@を食べて')
            ,
            new SctItm('@L_FOOD@に塩を振って食べて')
            ,
            new SctItm('@L_FOOD@に塩胡椒をかけて食べて')
            ,
            new SctItm('@L_FOOD@に醤油をかけて食べて')
            ,
            new SctItm('@L_FOOD@にソースをかけて食べて')
            ,
            new SctItm('@L_FOOD@にカラシをつけて食べて')
            ,
            new SctItm('@L_FOOD@にジャムを塗って食べて')
            ,
            new SctItm('@L_FOOD@にレモンを搾って食べて')
            ,
            new SctItm('@L_FOOD@をパンに挟んで食べて')
            ,
            new SctItm('@L_FOOD@をご飯にのせて食べて')
            ,
            new SctItm('@L_FOOD@を温め直して食べて')
            ,
            new SctItm('@L_FOOD@を焼き直して食べて')
            ,
            new SctItm('@L_LIVESTOCK@の肉を油で揚げて食べて')
            ,
            new SctItm('@L_LIVESTOCK@の肉を丸焼きにして食べて')
            ,
            new SctItm('@L_FISH@を塩焼きにして食べて')
            ,
            new SctItm('@L_FISH@を蒸し焼きにして食べて')
            ,
            new SctItm('@L_FOOD@を配達して')
            ,
            new SctItm('@L_FOOD@を注文して')
            ,
            new SctItm('@L_FOOD@を平らげて')
            ,
            new SctItm('@L_FOOD@を食い逃げして')
            ,
            new SctItm('@L_FOOD@の店を開いて')
            ,
            new SctItm('@L_CLASS@に憧れて')
            ,
            new SctItm('@L_CLASS@に恋をして')
            ,
            new SctItm('@L_CLASS@を目指して')
            ,
            new SctItm('@L_CLASS@を雇って')
            ,
            new SctItm('@L_CLASS@を召還して')
            ,
            new SctItm('@L_CLASS@を募集して')
            ,
            new SctItm('@L_CLASS@を呼び出して')
            ,
            new SctItm('@L_CLASS@に変身して')
            ,
            new SctItm('@L_CITY@に住んで')
            ,
            new SctItm('@L_CITY@に家を建てて')
            ,
            new SctItm('@L_PART@を連れて')
            ,
            new SctItm('@L_PART@の手を引いて')
            ,
            new SctItm('@L_PART@を置き去りにして')
            ,
            new SctItm('@L_PART@を見捨てて')
            ,
            new SctItm('@L_PART@を押しのけて')
            ,
            new SctItm('デートして')
            ,
            new SctItm('@L_PART@をデートに誘って')
            ,
            new SctItm('@L_PART@に手紙を書いて')
            ,
            new SctItm('@L_PART@に電話して')
            ,
            new SctItm('@L_PART@にメールして')
            ,
            new SctItm('@L_PART@にプロポーズして')
            ,
            new SctItm('食事して')
            ,
            new SctItm('@L_PART@に別れ話をして')
            ,
            new SctItm('@L_PART@と喧嘩して')
            ,
            new SctItm('@L_PART@にお茶を出して')
            ,
            new SctItm('@L_PART@の靴を磨いて')
            ,
            new SctItm('@L_PART@の髪を乾かして')
            ,
            new SctItm('@L_PART@の背中を掻いて')
            ,
            new SctItm('@L_ANIMAL@を連れて')
            ,
            new SctItm('@L_ANIMAL@に乗って')
            ,
            new SctItm('@L_ANIMAL@の散歩をして')
            ,
            new SctItm('@L_ANIMAL@に餌をやって')
            ,
            new SctItm('@L_ANIMAL@の体を洗って')
            ,
            new SctItm('@L_ANIMAL@狩りをして')
            ,
            new SctItm('@L_ANIMAL@に襲われて')
            ,
            new SctItm('@L_ANIMAL@と戦って')
            ,
            new SctItm('@L_ANIMAL@を退治して')
            ,
            new SctItm('@L_ANIMAL@を檻に入れて')
            ,
            new SctItm('@L_ANIMAL@を追い出して')
            ,
            new SctItm('@L_ANIMAL@を追い払って')
            ,
            new SctItm('@L_ANIMAL@の絵を描いて')
            ,
            new SctItm('@L_DRESS@を着て')
            ,
            new SctItm('@L_DRESS@を脱いで')
            ,
            new SctItm('@L_DRESS@に着替えて')
            ,
            new SctItm('@L_DRESS@を洗濯して')
            ,
            new SctItm('@L_DRESS@を仮縫いして')
            ,
            new SctItm('@L_FLOWER@の花を|捧|ささ|げて')
            ,
            new SctItm('@L_FLOWER@の花を咲かせて')
            ,
            new SctItm('@L_FLOWER@の花を飾って')
            ,
            new SctItm('@L_FLOWER@の花の絵を描いて')
            ,
            new SctItm('@L_FLOWER@の花びらを散らして')
            ,
            new SctItm('@L_FLOWER@の花を|咥|くわ|えて')
            ,
            new SctItm('@L_FLOWER@の種を|蒔|ま|いて')
            ,
            new SctItm('@L_MUSIC@を聴いて')
            ,
            new SctItm('@L_MUSIC@を歌って')
            ,
            new SctItm('@L_FRUIT@の皮を|剥|む|いて')
            ,
            new SctItm('@L_FRUIT@の木を植えて')
            ,
            new SctItm('@L_FRUIT@を収穫して')
            ,
            new SctItm('@L_FRUIT@を叩き売りして')
            ,
            new SctItm('@L_FRUIT@の種を捨てて')
            ,
            new SctItm('@L_RIDE@に乗って')
        ];
    }
}

class locker_item extends SctItm_SelectLocker implements ISctItm_Selector{
    constructor(){
        super('@L_ITEM@');
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
            new SctItm('@L_MUSIC@')
            ,
            new SctItm('@L_SEXAGE@')
            ,
            new SctItm('@L_PART@')
            ,
            new SctItm('@L_HABIT@')
            ,
            new SctItm('@L_MUSIC@')
        ];
    }
}

// 出版元（画像未設定の解消のため）
class selector_bookmaker extends SctItm_Selector implements ISctItm_Selector {
    constructor(){
        super('@BOOKMAKER@');
        this.itms = [
            new SctItm('㈱@L_WHAT@出版')
            ,
            new SctItm('㈱@L_WHAT@文庫')
            ,
            new SctItm('㈱@L_WHAT@印刷')
            ,
            new SctItm('@L_WHAT@書房')
            ,
            new SctItm('@L_WHAT@書院')
            ,
            new SctItm('㈱@L_WHAT@文芸')
            ,
            new SctItm('@L_WHAT@学院')
            ,
            new SctItm('@L_WHAT@株式会社')
            ,
            new SctItm('@L_WHAT@財団')
            ,
            new SctItm('@L_WHAT@委員会')
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
        super('@L_HEROTYPE@');
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
            new SctItm('@ITEM@の@NICKGOOD@ @L_HEROFULLNAME@')
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
            new SctItm('@WHAT@の@NICKBAD@ @L_EVILFULLNAME@')
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

        this.dic_push(new selector_bookface0());
        this.dic_push(new selector_bookface1());
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
        this.dic_push(new selector_doc());
        this.dic_push(new selector_c01());
        this.dic_push(new selector_c02());
        this.dic_push(new selector_end01a());
        this.dic_push(new selector_end01b());
        this.dic_push(new selector_end02a());
        this.dic_push(new selector_end02b());
        this.dic_push(new selector_end02c());
        this.dic_push(new selector_end02d());
        this.dic_push(new selector_end02e());
        this.dic_push(new selector_comment());
        this.dic_push(new selector_comment1());
        this.dic_push(new selector_comment2());
        this.dic_push(new selector_YESNO());
        
        this.dic_push(new selector_date());
        this.dic_push(new selector_random_date01());
        this.dic_push(new selector_random_year());
        this.dic_push(new selector_random_NUM10());
        this.dic_push(new selector_random_NUM2TO9());
        this.dic_push(new selector_random_NUM10TO99());
        this.dic_push(new selector_random_NUM10000());
        this.dic_push(new locker_what());
        this.dic_push(new locker_do());
        this.dic_push(new selector_what());
        this.dic_push(new selector_do());
        this.dic_push(new selector_key());
        this.dic_push(new locker_key());
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
        this.dic_push(new selector_history());
        this.dic_push(new selector_landmark());
        this.dic_push(new selector_fruit());
        this.dic_push(new locker_fruit());
        this.dic_push(new selector_fish());
        this.dic_push(new locker_fish());
        this.dic_push(new selector_sweets());
        this.dic_push(new locker_sweets());
        this.dic_push(new selector_meal());
        this.dic_push(new locker_meal());
        this.dic_push(new selector_dress());
        this.dic_push(new locker_dress());
        this.dic_push(new selector_food1());
        this.dic_push(new locker_food1());
        this.dic_push(new selector_food());
        this.dic_push(new locker_food());
        this.dic_push(new selector_scool());
        this.dic_push(new selector_scool01());
        this.dic_push(new selector_scoolas());
        
        this.dic_push(new selector_music());
        this.dic_push(new locker_music());
        this.dic_push(new selector_dance());
        this.dic_push(new selector_tech());
        this.dic_push(new locker_tech());
        this.dic_push(new selector_bird());
        this.dic_push(new locker_bird());
        this.dic_push(new selector_animal());
        this.dic_push(new locker_animal());
        this.dic_push(new selector_livestock());
        this.dic_push(new locker_livestock());
        this.dic_push(new selector_flower());
        this.dic_push(new locker_flower());
        this.dic_push(new selector_sports());
        this.dic_push(new selector_km());
        this.dic_push(new selector_k());
        this.dic_push(new selector_kd());
        this.dic_push(new selector_kp());
        this.dic_push(new selector_kdp());
        this.dic_push(new selector_kn());
        this.dic_push(new selector_kdn());
        this.dic_push(new selector_grade());
        this.dic_push(new selector_dir());
        this.dic_push(new selector_season());
        this.dic_push(new selector_move());

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
        this.dic_push(new selector_say2());
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
        this.dic_push(new selector_nickname());
        this.dic_push(new selector_nickBad());
        this.dic_push(new selector_nickGood());
        this.dic_push(new selector_assessment());
        this.dic_push(new selector_assessment02());
        this.dic_push(new selector_people());
        this.dic_push(new selector_specialist());
        this.dic_push(new locker_specialist());
        this.dic_push(new selector_manypeople());
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
        this.dic_push(new selector_habit());
        this.dic_push(new selector_emotion());
        this.dic_push(new selector_emotion01());
        this.dic_push(new selector_emofront());
        this.dic_push(new selector_doingend());
        this.dic_push(new selector_doing());
        this.dic_push(new selector_doing01());
        this.dic_push(new selector_doing02());
        this.dic_push(new locker_doing());
        this.dic_push(new selector_superitem());
        this.dic_push(new selector_bookmaker());
        this.dic_push(new locker_item());
        this.dic_push(new locker_chr_hero1());
        this.dic_push(new locker_chr_hero2());
        this.dic_push(new locker_heromark());
        this.dic_push(new locker_hero_type());
        this.dic_push(new locker_heroname());
        this.dic_push(new locker_herojob());
        this.dic_push(new locker_herofullname());
        this.dic_push(new locker_hero());

        this.dic_push(new locker_chr_evil1());
        this.dic_push(new locker_chr_evil2());
        this.dic_push(new locker_evilmark());
        this.dic_push(new locker_evil_type());
        this.dic_push(new locker_evilname());
        this.dic_push(new locker_eviljob());
        this.dic_push(new locker_evilfullname());
        this.dic_push(new locker_evil());

        this.dic_push(new locker_heroevil());
        
        this.dic_push(new selector_herocatch());
        this.dic_push(new locker_herocatch());

    }
}
