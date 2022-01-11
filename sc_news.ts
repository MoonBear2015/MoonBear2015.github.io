function set_news()
{
    set_header_menu(1);

    scrollTo(0,0);

    let html : string = '';
    html += '<div id="main_title">'
    html += '<h1>';
    html += 'NEWS';
    html += '<small>';
    html += ' N02.65';
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

    html += '<div id="news_pic_L">';
    html += '<figure>';
    html += '<img src="pics/@PIC_WHAT@" width="300px">';
    html += '</figure>';
    html += '</div>';
    
    html += '<p id="news_doc">';
    html += '　@NEWS_DOC@';
    for(let i = 0;i < rnd_minmax(2,3);i++)
    {
        html += '@CONECT@、';
        html += '@NEWS_DOC@';
    }
    html += '</p>';

    html += '<div id="news_pic_R">';
    html += '<figure>';
    html += '<img src="pics/@PIC_DO@" width="300px">';
    html += '</figure>';
    html += '</div>';

    html += '<p id="news_doc">';
    html += '　@NEWS_DOC@';
    for(let i = 0;i < rnd_minmax(3,5);i++)
    {
        html += '@CONECT@、';
        html += '@NEWS_DOC@';
    }
    html += '</p>';

    html += '<br>';
    
    html += '@WRITER@';

    html += '<br>';

    html += '</div>';

    let maker = new news_docs_maker();
    let cnt = 0;

    html = maker.gene_docs(html);
    return html;
}


class selector_random_date
    extends ItmArray<SctItm>
    implements ISctItm_Selector
{
    public itm_key : string;
    public itm_key2 : string;
    public pic_key : string;
    constructor()
    {
        super();
        this.itm_key = "@DATE@";
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
        let result = new selector_random_date();
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
        let result = new selector_random_date();
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
            new SctItm('@L_WHAT@が@KEID@@L_DO@@END02C@')
            ,
            new SctItm('@L_WHAT@を@L_DO@@END02E@@TECH@')
            ,
            new SctItm('@KEI@@L_WHAT@の@L_DO@')
            ,
            new SctItm('@L_DO@@END02C@@L_WHAT@')
            ,
            new SctItm('@KEID@@L_DO@@END02C@@L_WHAT@')
            ,
            new SctItm('@L_DO@@END02C@@L_WHAT@の@THINK@')
            ,
            new SctItm('@L_DO@@END02C@@L_WHAT@の@TECH@')
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
        ];
    }
}

class selector_manypeople extends SctItm_Selector implements ISctItm_Selector {
    constructor(){
        super('@MANYPEOPLE@');
        this.itms = [
            new SctItm('@KEI@@THEY@')
            ,
            new SctItm('@MANY@@THEY@')
            ,
            new SctItm('@MANY@@KEI@@THEY@')
            ,
            new SctItm('@MANY@@CLASS@')
            ,
            new SctItm('@MANY@@KEI@@CLASS@')
            ,
            new SctItm('@MANY@@PART@')
            ,
            new SctItm('@MANY@@KEI@@PART@')
            ,
            new SctItm('@MANY@@PEOPLE@')
            ,
            new SctItm('@MANY@@KEI@@PEOPLE@')
        ];
    }
}

// News(WHO,DO)特化の呼称
class selector_call extends SctItm_Selector implements ISctItm_Selector {
    constructor(){
        super('@CALL@');
        this.itms = [
            new SctItm('@COMM1@@L_WHAT@')
            ,
            new SctItm('@L_WHAT@の@KEI@@PEOPLE@')
            ,
            new SctItm('@KEID@@L_DO@@END02C@@PEOPLE@')
            ,
            new SctItm('@KEI@@L_WHAT@の@PEOPLE@')
            ,
            new SctItm('@L_WHAT@の@NICK@')
            ,
            new SctItm('@L_DO@@END02C@@NICK@')
        ];
    }
}


class selector_call2 extends SctItm_Selector implements ISctItm_Selector {
    constructor(){
        super('@CALL2@');
        this.itms = [
            new SctItm('@L_DO@する@L_WHAT@')
            ,
            new SctItm('@COMM1@@WHAT@')
            ,
            new SctItm('@KEI1@@ITEM@')
            ,
            new SctItm('@COUNTRY@の@KEI@@ITEM@')
            ,
            new SctItm('@MOVE@@ITEM@')
            ,
            new SctItm('@KEI@@ITEM@')
            ,
            new SctItm('@HABIT@の@NICK@')
            ,
            new SctItm('@DOING@いる@NICK@')
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
            new SctItm('「@CALL@」と@KEID@@ASSES@@CLASS@の@HUMAN@@AGE@')
            ,
            new SctItm('@MANYPEOPLE@より「@CALL@」と@ASSES@@CLASS@の@HUMAN@@AGE@')
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
            new SctItm('@CLASS@の')
            ,
            new SctItm('@COUNTRY@で産まれた')
            ,
            new SctItm('@COUNTRY@出身の')
            ,
            new SctItm('@COUNTRY@在住の')
            ,
            new SctItm('@COUNTRY@唯一の')
            ,
            new SctItm('@SCOOL@出身の')
            ,
            new SctItm('@SCOOL@を中退した')
            ,
            new SctItm('@COUNTRY@政府から派遣された')
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
            new SctItm('@FRUIT@の香りが漂う')
            ,
            new SctItm('@FOOD@の匂いがする')
            ,
            new SctItm('@DOING@ばかりいる')
            ,
            new SctItm('@DOING@いる')
            ,
            new SctItm('@DOING@いた筈の')
        ];
    }
}

class selector_who4 extends SctItm_Selector implements ISctItm_Selector {
    constructor(){
        super('@WHO4@');
        this.itms = [
            new SctItm('@CLASS@')
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
            new SctItm('には')
            ,
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

// 発言の・句読点をつけられると困る
class selector_comment extends SctItm_Selector implements ISctItm_Selector {
    constructor(){
        super('@COMMENT@');
        this.itms = [
            new SctItm('@COMMENT2@')
            ,
            new SctItm('@COMMENT2@')
            ,
            new SctItm('@COMMENT2@')
            ,
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
            ,
            new SctItm('@YESNO@ッ！ @L_WHAT@が@KEI@@NICK@@END02A@ッ！')
            ,
            new SctItm('@NICKBAD@ッ！ @NICKBAD@ッ！ @L_WHAT@の@NICKBAD@ッ！')
            ,
            new SctItm('@L_WHAT@の@NICKBAD@！ @L_WHAT@の@NICKBAD@！ @L_WHAT@の@NICKBAD@！ @L_WHAT@の@NICKBAD@！ ')
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
            new SctItm('@L_WHAT@は@KEID@@L_DO@する@KEI@@NICK@と@ASSES@')
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
            new SctItm('@L_WHAT@は@KEI@@NICK@の@PART@と@KEID@@ASSES@')
            ,
            new SctItm('@L_WHAT@は@KEID@@L_DO@する@KEI@@THEY@@END02A@')
            ,
            new SctItm('@CALL@で、@CALL@@END02A@')
            ,
            new SctItm('@YESNO@、@CALL@と@ASSES@')
            ,
            new SctItm('@YESNO@、@PEOPLE@の@KEY@@END02A@')
            ,
            new SctItm('@YESNO@、@L_WHAT@が@KEI@@NICK@@END02A@')
            ,
            new SctItm('@KEI1@@NICK@、@KEI1@@NICK@、@KEI1@@NICK@、@KEI1@@NICK@……')
            ,
            new SctItm('@KEI1@@KEY@、@KEI1@@KEY@、@KEI1@@KEY@、@KEI1@@KEY@……')
            ,
            new SctItm('@YESNO@、@KEI2@な@PART@が@SAY@@END02B@')
            ,
            new SctItm('@CALL@、@YESNO@、それが@PART@の@PART@@END02A@')
            ,
            new SctItm('@KEID@@L_DO@する@KEI@@NICK@と@KEID@@ASSES@@THEY@、@YESNO@、それが@L_WHAT@の@PEOPLE@@END02A@')
            ,
            new SctItm('@KEID@@L_DO@@END02B@@THEY@、@YESNO@、それが@L_WHAT@@END02A@')
            ,
            new SctItm('@L_WHAT@の@CLASS@、それが@PEOPLE@の@PEOPLE@@END02A@')
            ,
            new SctItm('@EMOFRONT@@EMO@@END02D@')
            ,
            new SctItm('@L_WHAT@の@DOING@いた')
            ,
            new SctItm('@PART@は@DOING@いた')
            ,
            new SctItm('私が@DOING@いるとき、@PART@が@DOING@いたのだ')

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
            new SctItm('されている')
            ,
            new SctItm('されていた')
            ,
            new SctItm('させている')
            ,
            new SctItm('させていた')
            ,
            new SctItm('している')
            ,
            new SctItm('していた')
            ,
            new SctItm('してしまった')
            ,
            new SctItm('したかった')
            ,
            new SctItm('させたかった')
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
            new SctItm('人々')
            ,
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
            new SctItm('メンバー達')
            ,
            new SctItm('チームメイト達')
            ,
            new SctItm('ルームメイト達')
            ,
            new SctItm('クラスメイト達')
            ,
            new SctItm('野次馬達')

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


// 肩書き ～の
class selector_class extends SctItm_Selector implements ISctItm_Selector {
    constructor(){
        super('@CLASS@');
        this.itms = [
            new SctItm('大学教授')
            ,
            new SctItm('高校教師')
            ,
            new SctItm('数学教師')
            ,
            new SctItm('物理学者')
            ,
            new SctItm('経済学者')
            ,
            new SctItm('政治評論家')
            ,
            new SctItm('映画評論家')
            ,
            new SctItm('映画監督')
            ,
            new SctItm('舞台監督')
            ,
            new SctItm('舞台作家')
            ,
            new SctItm('恋愛小説家')
            ,
            new SctItm('絵本作家')
            ,
            new SctItm('調理師')
            ,
            new SctItm('ケーキ職人')
            ,
            new SctItm('工場長')
            ,
            new SctItm('会社員')
            ,
            new SctItm('事務員')
            ,
            new SctItm('飼育員')
            ,
            new SctItm('店員')
            ,
            new SctItm('店主')
            ,
            new SctItm('アルバイター')
            ,
            new SctItm('釣り師')
            ,
            new SctItm('元警察官')
            ,
            new SctItm('陸軍少佐')
            ,
            new SctItm('元海兵隊')
            ,
            new SctItm('空軍少佐')
            ,
            new SctItm('海軍将校')
            ,
            new SctItm('陶芸家')
            ,
            new SctItm('タクシードライバー')
            ,
            new SctItm('トラックの運転手')
            ,
            new SctItm('バスの運転手')
            ,
            new SctItm('アニメーター')
            ,
            new SctItm('漫画家')
            ,
            new SctItm('少女漫画家')
            ,
            new SctItm('プロサーファー')
            ,
            new SctItm('ユーチューバー')
            ,
            new SctItm('プログラマー')
            ,
            new SctItm('システムエンジニア')
            ,
            new SctItm('助産婦')
            ,
            new SctItm('ケアマネージャー')
            ,
            new SctItm('外交官')
            ,
            new SctItm('警備員')
            ,
            new SctItm('警察官')
            ,
            new SctItm('保安官')
            ,
            new SctItm('ピアニスト')
            ,
            new SctItm('指揮者')
            ,
            new SctItm('ギターリスト')
            ,
            new SctItm('考古学者')
            ,
            new SctItm('ホテルマン')
            ,
            new SctItm('デザイナー')
            ,
            new SctItm('靴磨き')
            ,
            new SctItm('武士')
            ,
            new SctItm('野武士')
            ,
            new SctItm('伯爵')
            ,
            new SctItm('水呑百姓')
            ,
            new SctItm('農民')
            ,
            new SctItm('牧場主')
            ,
            new SctItm('ミイラ職人')
            ,
            new SctItm('花売り娘')
            ,
            new SctItm('大道芸人')
            ,
            new SctItm('吟遊詩人')
            ,
            new SctItm('連邦保安官')
            ,
            new SctItm('国家公務員')
            ,
            new SctItm('国選弁護人')
            ,
            new SctItm('メイド')
            ,
            new SctItm('執事')
            ,
            new SctItm('駅員')
            ,
            new SctItm('車掌')
            ,
            new SctItm('世界第三位')
            ,
            new SctItm('世界第一位')
            ,
            new SctItm('旅芸人')
            ,
            new SctItm('サーカス団員')
            ,
            new SctItm('幼稚園児')
            ,
            new SctItm('保育園児')
            ,
            new SctItm('小学生')
            ,
            new SctItm('中学生')
            ,
            new SctItm('高校生')
            ,
            new SctItm('大学生')
            ,
            new SctItm('ラーメン屋')
            ,
            new SctItm('落語家')
            ,
            new SctItm('漫才師')
            ,
            new SctItm('漫才師')
            ,
            new SctItm('コメディアン')
            ,
            new SctItm('ストリッパー')
            ,
            new SctItm('キャバクラ嬢')
            ,
            new SctItm('ホステス')
            ,
            new SctItm('飴細工師')
            ,
            new SctItm('マッチ売り')
            ,
            new SctItm('魔法使い')
            ,
            new SctItm('魔法少女')
            ,
            new SctItm('抜け忍')
            ,
            new SctItm('黒魔術師')
            ,
            new SctItm('祈祷師')
            ,
            new SctItm('インディアン')
            ,
            new SctItm('カウボーイ')
            ,
            new SctItm('看板娘')
            ,
            new SctItm('カメラ屋')
            ,
            new SctItm('税理士')
            ,
            new SctItm('銀行マン')
            ,
            new SctItm('変身ヒーロー')
            ,
            new SctItm('ショッカー')
            ,
            new SctItm('仮面ライダー')
            ,
            new SctItm('ウルトラマン')
            ,
            new SctItm('スーパーマン')
            ,
            new SctItm('学級委員')
            ,
            new SctItm('図書委員')
            ,
            new SctItm('生徒会長')
            ,
            new SctItm('ＰＴＡ会長')
            ,
            new SctItm('会社員')
            ,
            new SctItm('専業主婦')
            ,
            new SctItm('家政婦')
            ,
            new SctItm('アニメ声優')
            ,
            new SctItm('アナウンサー')
            ,
            new SctItm('新聞記者')
            ,
            new SctItm('牛乳配達員')
            ,
            new SctItm('郵便局員')
            ,
            new SctItm('公務員')
            ,
            new SctItm('機関士')
            ,
            new SctItm('野鳥の会')
            ,
            new SctItm('牧師')
            ,
            new SctItm('神主')
            ,
            new SctItm('村長')
            ,
            new SctItm('町長')
            ,
            new SctItm('庄長')
            ,
            new SctItm('市長')
            ,
            new SctItm('皇帝')
            ,
            new SctItm('国王')
            ,
            new SctItm('大統領')
            ,
            new SctItm('女王')
            ,
            new SctItm('総理大臣')
            ,
            new SctItm('独裁者')
            ,
            new SctItm('道化師')
            ,
            new SctItm('ピエロ')
            ,
            new SctItm('庭師')
            ,
            new SctItm('狩人')
            ,
            new SctItm('騎士')
            ,
            new SctItm('忍者')
            ,
            new SctItm('抜け忍')
            ,
            new SctItm('諜報員')
            ,
            new SctItm('狙撃兵')
            ,
            new SctItm('株主')
            ,
            new SctItm('筆頭株主')
            ,
            new SctItm('投資家')
            ,
            new SctItm('証券マン')
            ,
            new SctItm('セールスマン')
            ,
            new SctItm('庖丁人')
            ,
            new SctItm('用心棒')
            ,
            new SctItm('ハスラー')
            ,
            new SctItm('花火職人')
            ,
            new SctItm('皿洗い')
            ,
            new SctItm('薬剤師')
            ,
            new SctItm('ペンキ屋')
            ,
            new SctItm('パン屋')
            ,
            new SctItm('八百屋')
            ,
            new SctItm('肉屋')
            ,
            new SctItm('豆腐屋')
            ,
            new SctItm('魚屋')
            ,
            new SctItm('コック')
            ,
            new SctItm('ウェイトレス')
            ,
            new SctItm('バーテンダー')
            ,
            new SctItm('バニーガール')
            ,
            new SctItm('芸者')
            ,
            new SctItm('ショーガール')
            ,
            new SctItm('スチュワーデス')
            ,
            new SctItm('バスガイド')
            ,
            new SctItm('お茶汲み')
            ,
            new SctItm('コンビニ店員')
            ,
            new SctItm('店員')
            ,
            new SctItm('組員')
            ,
            new SctItm('組長')
            ,
            new SctItm('ボス')
            ,
            new SctItm('会長')
            ,
            new SctItm('酋長')
            ,
            new SctItm('課長')
            ,
            new SctItm('部長')
            ,
            new SctItm('本部長')
            ,
            new SctItm('取締役')
            ,
            new SctItm('社長')
            ,
            new SctItm('スパイ')
            ,
            new SctItm('テロリスト')
            ,
            new SctItm('ハッカー')
            ,
            new SctItm('宇宙人')
            ,
            new SctItm('火星人')
            ,
            new SctItm('秘密探偵')
        ];
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
        this.Add(cods_to_itms(cods_ad_sense));
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
        this.Add(cods_to_itms(cods_adv_sense));
        this.Add(cods_to_itms(cods_adv_danger));
        this.Add(cods_to_itms(cods_adv_etc));
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

class selector_animal extends SctItm_Selector implements ISctItm_Selector {
    constructor(){
        super('@ANIMAL@');
        this.Add(itms_animal);
    }
}
class selector_sports extends SctItm_Selector implements ISctItm_Selector {
    constructor(){
        super('@SPORTS@');
        this.Add(itms_sports);
    }
}


class selector_when extends SctItm_Selector implements ISctItm_Selector {
    constructor(){
        super('@WHEN@');
        this.Add(cods_to_itms(cods_when));
        this.Add(cods_to_itms(cods_future));
    }
}
class selector_future extends SctItm_Selector implements ISctItm_Selector {
    constructor(){
        super('@FUTURE@');
        this.Add(cods_to_itms(cods_future));
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

class selector_scool extends SctItm_Selector implements ISctItm_Selector {
    constructor(){
        super('@SCOOL@');
        this.itms = [
            new SctItm('@CITY@@SCOOL01@')
            ,
            new SctItm('@CITY@私立@SCOOL01@')
            ,
            new SctItm('@CITY@中央@SCOOL01@')
            ,
            new SctItm('@CITY@第@NUM10@@SCOOL01@')
            ,
            new SctItm('@COUNTRY@@SCOOL01@')
            ,
            new SctItm('@COUNTRY@国立@SCOOL01@')
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
class selector_fish extends SctItm_Selector implements ISctItm_Selector {
    constructor(){
        super('@FISH@');
        this.Add(cods_fish.slice(1));
    }
}
class selector_sweets extends SctItm_Selector implements ISctItm_Selector {
    constructor(){
        super('@SWEETS@');
        this.Add(itms_sweets);
    }
}
class selector_meal extends SctItm_Selector implements ISctItm_Selector {
    constructor(){
        super('@MEAL@');
        this.Add(itms_meal);
    }
}

class selector_food1 extends SctItm_Selector implements ISctItm_Selector {
    constructor(){
        super('@FOOD01@');
        this.Add(itms_meal);
        this.Add(itms_sweets);
        this.Add(cods_fruit.slice(1));
    }
}
class selector_food extends SctItm_Selector implements ISctItm_Selector {
    constructor(){
        super('@FOOD@');
        this.itms = [
            new SctItm('@FOOD01@')
            ,
            new SctItm('@COUNTRY@産@FOOD01@')
            ,
            new SctItm('@ITEM@っぽい@FOOD01@')
            ,
            new SctItm('@PART@が作った@FOOD01@')
        ];
    }
}

class selector_music extends SctItm_Selector implements ISctItm_Selector {
    constructor(){
        super('@MUSIC@');
        this.startNumber = 1;
        this.Add(itms_music);
    }
}

// テクノロジー
class selector_tech extends SctItm_Selector implements ISctItm_Selector {
    constructor(){
        super('@TECH@');
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
            new SctItm('発表')
            ,
            new SctItm('代弁')
            ,
            new SctItm('強弁')
            ,
            new SctItm('記録')
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
            new SctItm('声高らかな@SAY2@')
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
class selector_partner extends SctItm_Selector implements ISctItm_Selector {
    constructor(){
        super('@PART@');
        this.Add(itms_partner);
    }
}

class selector_emotion extends SctItm_Selector implements ISctItm_Selector {
    constructor(){
        super('@EMO@');
        this.itms = [
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
            new SctItm('辛')
            ,
            new SctItm('怖')
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
        ]
    }            
}

// 判断 ～を
class selector_answer extends SctItm_Selector implements ISctItm_Selector {
    constructor(){
        super('@ANSWER@');
        this.itms = [
            new SctItm('見方')
            ,
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


// 評価 と～（る・た・い）。
class selector_assessment extends SctItm_Selector implements ISctItm_Selector {
    constructor(){
        super('@ASSES@');
        this.itms = [
            new SctItm('@ASSES_S1@')
            ,
            new SctItm('@ASSES_S2@、@ASSES_S1@')
            ,
            new SctItm('@ASSES_S2@、@CONECT3@、@ASSES_S1@')
        ];
    }
}
// 評価 と～（れ）、
class selector_assessment1 extends SctItm_Selector implements ISctItm_Selector {
    constructor(){
        super('@ASSES1@');
        this.itms = [
            new SctItm('@ASSES_S2@')
            // ,
            // new SctItm('@ASSES_S2@、@ASSES_S2@')
            // ,
            // new SctItm('@ASSES_S2@、@CONECT3@、@ASSES_S2@')
        ];
    }
}
// 人々＋評価。○○から～（れ）、
class selector_people_asses extends SctItm_Selector implements ISctItm_Selector {
    constructor(){
        super('@PEOPLE_ASSES@');
        this.itms = [
            new SctItm('@PEOPLE@に@ASSES_S2@')
            ,
            new SctItm('@PEOPLE@には@ASSES_S2@')
            ,
            new SctItm('@PEOPLE@から@ASSES_S2@')
        ];
    }
}




// 評価 と～（る・た・い）。
class selector_asses1 extends SctItm_Selector implements ISctItm_Selector {
    constructor(){
        super('@ASSES_S1@');
        this.itms = [
            new SctItm('親しまれている')
            ,
            new SctItm('賞賛された')
            ,
            new SctItm('蔑まれている')
            ,
            new SctItm('罵倒されている')
            ,
            new SctItm('呼ばれている')
            ,
            new SctItm('評価が高い')
            ,
            new SctItm('名高い')
            ,
            new SctItm('知られている')
            ,
            new SctItm('期待されている')
            ,
            new SctItm('見放されている')
            ,
            new SctItm('見限られた')
            ,
            new SctItm('見捨てられた')
            ,
            new SctItm('恐れられた')
            ,
            new SctItm('おだてられている')
            ,
            new SctItm('馬鹿にされている')
            ,
            new SctItm('讃えられている')
            ,
            new SctItm('言い伝えられた')
            ,
            new SctItm('丸め込まれた')
            ,
            new SctItm('知れ渡っている')
            ,
            new SctItm('語り継がれている')
            ,
            new SctItm('後ろ指を指された')
            ,
            new SctItm('推薦された')
            ,
            new SctItm('表彰された')
            ,
            new SctItm('認定された')
            ,
            new SctItm('ささやかれている')
            ,
            new SctItm('驚嘆された')
            ,
            new SctItm('驚かせた')
            ,
            new SctItm('感動された')
            ,
            new SctItm('感謝されている')
            ,
            new SctItm('太鼓判を押された')
            ,
            new SctItm('名付けられた')
            ,
            new SctItm('見守られている')
            ,
            new SctItm('訴えられている')
            ,
            new SctItm('見間違えられた')
            ,
            new SctItm('間違えられた')
            ,
            new SctItm('誤解されている')
            ,
            new SctItm('勘違いされた')
            ,
            new SctItm('決めつけられた')
        ];
    }
}
// 評価 と～（る・た・い）。
class selector_asses2 extends SctItm_Selector implements ISctItm_Selector {
    constructor(){
        super('@ASSES_S2@');
        this.itms = [
            new SctItm('親しまれ')
            ,
            new SctItm('賞賛され')
            ,
            new SctItm('蔑まれ')
            ,
            new SctItm('罵倒され')
            ,
            new SctItm('呼ばれ')
            ,
            new SctItm('知られ')
            ,
            new SctItm('期待され')
            ,
            new SctItm('見放され')
            ,
            new SctItm('見限られ')
            ,
            new SctItm('見捨てられ')
            ,
            new SctItm('恐れられ')
            ,
            new SctItm('おだてられ')
            ,
            new SctItm('馬鹿にされ')
            ,
            new SctItm('讃えられ')
            ,
            new SctItm('言い伝えられ')
            ,
            new SctItm('丸め込まれ')
            ,
            new SctItm('語り継がれ')
            ,
            new SctItm('後ろ指を指され')
            ,
            new SctItm('推薦され')
            ,
            new SctItm('表彰され')
            ,
            new SctItm('認定され')
            ,
            new SctItm('ささやかれ')
            ,
            new SctItm('驚嘆され')
            ,
            new SctItm('驚かせ')
            ,
            new SctItm('感動され')
            ,
            new SctItm('感謝され')
            ,
            new SctItm('太鼓判を押され')
            ,
            new SctItm('名付けられ')
            ,
            new SctItm('見守られ')
            ,
            new SctItm('訴えられ')
            ,
            new SctItm('見間違えられ')
            ,
            new SctItm('間違えられ')
            ,
            new SctItm('誤解され')
            ,
            new SctItm('勘違いされ')
            ,
            new SctItm('決めつけられ')
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

// 行動 （食べて）いる　（食べて）いた
class selector_doing extends SctItm_Selector implements ISctItm_Selector {
    constructor(){
        super('@DOING@');
        this.itms = [
            new SctItm('@FOOD@を食べて')
            ,
            new SctItm('@PEOPLE@と遊んで')
            ,
            new SctItm('@PEOPLE@と話して')
            ,
            new SctItm('@PLACE@で眠って')
            ,
            new SctItm('@PLACE@で遊んで')
            ,
            new SctItm('@PEOPLE@と@LANDMARK@を歩いて')
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
            new SctItm('@PEOPLE@を追いかけて')
            ,
            new SctItm('@PEOPLE@を探して')
            ,
            new SctItm('@PEOPLE@をとっちめて')
            ,
            new SctItm('@PEOPLE@から誘われて')
            ,
            new SctItm('「@CALL@」と呼ばれて')
            ,
            new SctItm('@PART@を連れて')
            ,
            new SctItm('@PART@とデートして')
            ,
            new SctItm('@PART@をデートに誘って')
            ,
            new SctItm('@PART@に告白して')
            ,
            new SctItm('@PART@とお散歩して')
            ,
            new SctItm('@PART@にプロポーズして')
            ,
            new SctItm('@PART@と食事して')
            ,
            new SctItm('@PART@に別れ話をして')
            ,
            new SctItm('@PART@と喧嘩して')
            ,
            new SctItm('@PART@にお茶を出して')
            ,
            new SctItm('@ANIMAL@を連れて')
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
            new SctItm('@ANIMAL@の絵を描いて')
            ,
            new SctItm('@SCOOL@に通って')
            ,
            new SctItm('@SCOOL@に入学して')
            ,
            new SctItm('@SCOOL@に合格して')
            ,
            new SctItm('@SCOOL@を卒業して')
            ,
            new SctItm('@SCOOL@を中退して')
        ];
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

        this.dic_push(new selector_writer());
        this.dic_push(new selector_writer2());
        this.dic_push(new selector_writer3());
        this.dic_push(new selector_title());
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
        this.dic_push(new selector_comment2());
        this.dic_push(new selector_YESNO());
        
        this.dic_push(new selector_random_date());
        this.dic_push(new selector_random_year());
        this.dic_push(new selector_random_NUM10());
        this.dic_push(new selector_random_NUM10000());
        this.dic_push(new locker_what());
        this.dic_push(new locker_do());
        this.dic_push(new selector_what());
        this.dic_push(new selector_do());
        this.dic_push(new selector_key());
        this.dic_push(new selector_size1());
        this.dic_push(new selector_size2());
        this.dic_push(new selector_they());
        this.dic_push(new selector_many());
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
        this.dic_push(new selector_fish());
        this.dic_push(new selector_sweets());
        this.dic_push(new selector_meal());
        this.dic_push(new selector_food1());
        this.dic_push(new selector_food());
        this.dic_push(new selector_scool());
        this.dic_push(new selector_scool01());
        this.dic_push(new selector_scoolas());
        
        this.dic_push(new selector_music());
        this.dic_push(new selector_tech());
        this.dic_push(new selector_animal());
        this.dic_push(new selector_sports());
        this.dic_push(new selector_km());
        this.dic_push(new selector_k());
        this.dic_push(new selector_kd());
        this.dic_push(new selector_grade());
        this.dic_push(new selector_dir());
        this.dic_push(new selector_season());
        this.dic_push(new selector_move());

        this.dic_push(new selector_think());
        this.dic_push(new selector_who());
        this.dic_push(new selector_who2());
        this.dic_push(new selector_who3());
        this.dic_push(new selector_who4());
        this.dic_push(new selector_when());
        this.dic_push(new selector_future());
        this.dic_push(new selector_place());
        this.dic_push(new selector_city());
        this.dic_push(new selector_co());
        this.dic_push(new selector_human());
        this.dic_push(new selector_body());
        this.dic_push(new selector_family());
        this.dic_push(new selector_class());
        this.dic_push(new selector_call());
        this.dic_push(new selector_call2());
        this.dic_push(new selector_age());
        this.dic_push(new selector_age2());
        this.dic_push(new selector_say());
        this.dic_push(new selector_say2());
        this.dic_push(new selector_answer());
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
        this.dic_push(new selector_assessment1());
        this.dic_push(new selector_asses1());
        this.dic_push(new selector_asses2());
        this.dic_push(new selector_people_asses());
        this.dic_push(new selector_people());
        this.dic_push(new selector_manypeople());
        this.dic_push(new selector_partner());
        this.dic_push(new selector_item());
        this.dic_push(new selector_command());
        this.dic_push(new selector_command1());
        this.dic_push(new selector_inscription());
        this.dic_push(new selector_Lock_inscription());
        this.dic_push(new selector_habit());
        this.dic_push(new selector_emotion());
        this.dic_push(new selector_emotion01());
        this.dic_push(new selector_emofront());
        this.dic_push(new selector_doing());
    }
}
