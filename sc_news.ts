function set_news()
{
    set_header_menu(1);

    scrollTo(0,0);

    let html : string = '';
    html += '<div id="main_title">'
    html += '<h1>';
    html += 'NEWS';
    html += '<small>';
    html += 'N01.88';
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
    elem.innerHTML = html;
}

function make_news()
{
    let html : string = '';

    html += '<div id="news_box" ';
    html += 'style="';
    html += 'margin:     5px; ';
    html += 'padding:    10px; ';
    html += 'border:     0.5px solid #606060;';
    html += 'border-radius:  1%;';
    html += 'background: ';
    html += 'linear-gradient(0deg,rgba(0,0,0,0.6),rgba(0,0,0,0.8)),';
    html += 'url(./pics/@PIC_DO@);';
    //html += 'width: 100%;';
    //html += 'height: 0;';
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
    for(let i = 0;i < rnd_minmax(3,5);i++)
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
    for(let i = 0;i < rnd_minmax(5,10);i++)
    {
        html += '@CONECT@、';
        html += '@NEWS_DOC@';
    }
    html += '</p>';
    html += '<br>';

    html += '<h4 id="news_writer" align="right">';
    html += 'Copyright (C) @WRITER@';
    html += '<br>@DATE@'
    html += '</h4>';

    html += '</div>';

    let maker = new news_docs_maker();
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


class selector_random_date
    extends ItmArray<SctItm>
    implements ISctItm_Selector
{
    public itm_key : string;
    public pic_key : string;
    constructor()
    {
        super();
        this.itm_key = "@DATE@";
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
 
}

class selector_human 
    extends ItmArray<SctItm>
    implements ISctItm_Selector 
{
    public nameMaker : INameMaker;
    public itm_key : string;
    public pic_key : string;
    constructor()
    {
        super();
        this.itm_key = "@HUMAN@";
        this.pic_key = "";
        this.nameMaker = new NameMakerAll();
    }
    get rnd_Itm() : SctItm {
        let name = this.nameMaker.create();
        return new SctItm(name,'');
    }
    Copy() : ISctItm_Selector
    {
        let result = new selector_human();
        return result;
    }

}


class selector_age
    extends ItmArray<SctItm>
    implements ISctItm_Selector 
{
    public nameMaker : INameMaker;
    public itm_key : string;
    public pic_key : string;
    constructor()
    {
        super();
        this.itm_key = "@AGE@";
        this.pic_key = "";
        this.nameMaker = new NameMakerAll();
    }
    get rnd_Itm() : SctItm {
        let age : string = "";
        age = "(" + rnd_minmax(16,90).toString() + ")";
        return new SctItm(age,'');
    }
    Copy() : ISctItm_Selector
    {
        let result = new selector_age();
        return result;
    }

}

class selector_writer extends SctWrd_Selector implements ISctItm_Selector{
    constructor(){
        super('@WRITER@');
        this.itms = [
            new SctWrd('@WH2@')
        ];
    }
}

class selector_title extends SctWrd_Selector implements ISctItm_Selector {
    constructor(){
        super('@NEWS_TITLE@');
        this.itms = [
            new SctWrd('@WHAT@の@DO@')
            ,
            new SctWrd('@WHAT@は@DO@@END02C@')
            ,
            new SctWrd('@WHAT@で@DO@@END02C@@NICK@')
            ,
            new SctWrd('@WHAT@の@NICK@が@DO@@END02C@')
            ,
            new SctWrd('@WHAT@の@PEOPLE@、@HUMAN@が@DO@@END02C@')
            ,
            new SctWrd('@DO@@END02C@@WHAT@')
            ,
            new SctWrd('@DO@@END02C@@WHAT@の@PEOPLE@')
            ,
            new SctWrd('@DO@@END02C@@WHAT@の@NICK@、@HUMAN@')
            ,
            new SctWrd('@WHAT@の@NICK@、@HUMAN@が@DO@')
            ,
            new SctWrd('@WHAT@の@NICK@、@HUMAN@が@DO@@END02C@')
            ,
            new SctWrd('@WHAT@の@NICK@、@DO@@END02C@')
            ,
            new SctWrd('@WHAT@で@DO@@END02C@@PEOPLE@、@HUMAN@')
            ,
            new SctWrd('@HUMAN@が@DO@@END02C@@WHAT@')
            ,
            new SctWrd('@PEOPLE@の@NICK@、@HUMAN@が@DO@@END02C@@WHAT@')
            ,
            new SctWrd('@HUMAN@、@WHAT@で@DO@@END02C@')
        ];
    }
}

class selector_people extends SctWrd_Selector implements ISctItm_Selector {
    constructor(){
        super('@PEOPLE@');
        this.itms = [
            new SctWrd('@NICK@')
            ,
            new SctWrd('@CLASS@')
        ];
    }
}

class selector_doc extends SctWrd_Selector implements ISctItm_Selector {
    constructor(){
        super('@NEWS_DOC@');
        this.itms = [
            new SctWrd('@NEWS_C01@、@NEWS_C02@。')
            ,
            new SctWrd('@NEWS_C01@、@DATE@、@NEWS_C02@。')
            ,
            new SctWrd('@DATE@、@NEWS_C01@、@NEWS_C02@。')
            ,
            new SctWrd('@DATE@、@WHO@は「@COMMENT@」との@ANSWER@を@SAY@@END02B@。')
            ,
            new SctWrd('@WHO@は「@COMMENT@」との@ANSWER@を@SAY@@END02B@。')
            ,
            new SctWrd('@WHO@は@DATE@、「@COMMENT@」との@ANSWER@を@SAY@@END02B@。')
            ,
            new SctWrd('「@COMMENT@」との@ANSWER@を@SAY@したのは、@WHO@@END02A@。')
        ];
    }
}

class selector_who extends SctWrd_Selector implements ISctItm_Selector {
    constructor(){
        super('@WHO@');
        this.itms = [
            new SctWrd('@CLASS@の@HUMAN@@AGE@')
            ,
            new SctWrd('「@WHAT@の@NICK@」と@ASSES@@CLASS@の@HUMAN@@AGE@')
            ,
            new SctWrd('「@DO@する@NICK@」と@ASSES@@CLASS@の@HUMAN@@AGE@')
            ,
            new SctWrd('「@STATUS@する@NICK@」と@ASSES@@CLASS@の@HUMAN@@AGE@')
            ,
            new SctWrd('「@CLASS@の@NICK@」と@ASSES@@CLASS@の@HUMAN@@AGE@')
            ,
            new SctWrd('@THEY@より「@WHAT@の@NICK@」と@ASSES@@CLASS@の@HUMAN@@AGE@')
            ,
            new SctWrd('@THEY@より「@DO@する@NICK@」と@ASSES@@CLASS@の@HUMAN@@AGE@')
            ,
            new SctWrd('@THEY@より「@STATUS@する@NICK@」と@ASSES@@CLASS@の@HUMAN@@AGE@')
            ,
            new SctWrd('@THEY@より「@CLASS@の@NICK@」と@ASSES@@CLASS@の@HUMAN@@AGE@')
        ];
    }
}

class selector_who2 extends SctWrd_Selector implements ISctItm_Selector {
    constructor(){
        super('@WH2@');
        this.itms = [
            new SctWrd('@CLASS@ @HUMAN@@AGE@')
            ,
            new SctWrd('「@STATUS@する@NICK@」と@ASSES@@CLASS@ @HUMAN@@AGE@')
            ,
            new SctWrd('「@CLASS@の@NICK@」と@ASSES@@CLASS@ @HUMAN@@AGE@')
            ,
            new SctWrd('@THEY@より「@STATUS@する@NICK@」と@ASSES@@CLASS@ @HUMAN@@AGE@')
            ,
            new SctWrd('@THEY@より「@CLASS@の@NICK@」と@ASSES@@CLASS@ @HUMAN@@AGE@')
        ];
    }
}


class selector_c01 extends SctWrd_Selector implements ISctItm_Selector {
    constructor(){
        super('@NEWS_C01@');
        this.itms = [
            new SctWrd('@WHAT@が@DO@@END01B@')
            ,
            new SctWrd('@WHAT@での@KEY@@END01A@')
            ,
            new SctWrd('@WHAT@で@KEY@が@STATUS@@END01B@')
            ,
            new SctWrd('@WHAT@では@KEY@や@KEY@が@STATUS@@END01B@')
            ,
            new SctWrd('@KEY@が@STATUS@する@WHAT@@END01A@')
            ,
            new SctWrd('@KEY@や@KEY@が@STATUS@する@WHAT@@END01A@')
            ,
            new SctWrd('@MANY@@THEY@が@DO@@END01B@')
            ,
            new SctWrd('@MANY@@THEY@による@KEY@が@STATUS@@END01B@')
            ,
            new SctWrd('@MANY@@THEY@の@THINK@が@STATUS@@END01B@')
            ,
            new SctWrd('@MANY@@THEY@の@THINK@や@THINK@が@STATUS@@END01B@')
            ,
            new SctWrd('@THINK@や@THINK@が@STATUS@する@WHAT@@END01A@')
        ];
    }
}

class selector_end01a extends SctWrd_Selector implements ISctItm_Selector {
    constructor(){
        super('@END01A@');
        this.itms = [
            new SctWrd('により')
            ,
            new SctWrd('のため')
            ,
            new SctWrd('では')
            ,
            new SctWrd('には')
            ,
            new SctWrd('で')
        ];
    }
}

class selector_end01b extends SctWrd_Selector implements ISctItm_Selector {
    constructor(){
        super('@END01B@');
        this.itms = [
            new SctWrd('し')
            ,
            new SctWrd('したが')
            ,
            new SctWrd('する中')
            ,
            new SctWrd('したため')
            ,
            new SctWrd('するため')
            ,
            new SctWrd('してしまったため')
        ];
    }
}


class selector_c02 extends SctWrd_Selector implements ISctItm_Selector {
    constructor(){
        super('@NEWS_C02@');
        this.itms = [
            new SctWrd('@WHAT@の@MANY@@PEOPLE@が@ASSES@')
            ,
            new SctWrd('@MANY@@THEY@が@DO@@END02B@')
            ,
            new SctWrd('@MANY@@THEY@が@NICK@@END02A@')
            ,
            new SctWrd('@MANY@@THEY@の@KEY@が@STATUS@@END02B@')
            ,
            new SctWrd('@MANY@@THEY@の@KEY@や@KEY@が@STATUS@@END02B@')
            ,
            new SctWrd('@MANY@@THEY@の@THINK@が@STATUS@@END02B@')
            ,
            new SctWrd('@MANY@@THEY@の@THINK@と@THINK@が@STATUS@@END02B@')
        ];
    }
}

class selector_comment extends SctWrd_Selector implements ISctItm_Selector {
    constructor(){
        super('@COMMENT@');
        this.itms = [
            new SctWrd('@NEWS_C01@、@NEWS_C02@')
            ,
            new SctWrd('@NEWS_C01@、@NEWS_C02@。@CONECT@、@NEWS_C01@、@NEWS_C02@')
            ,
            new SctWrd('@COMMENT@。@CONECT@、@COMMENT@')
            ,
            new SctWrd('@WHAT@の@NICK@が@STATUS@@END02B@')
            ,
            new SctWrd('@WHAT@は@NICK@と@ASSES@')
            ,
            new SctWrd('@WHAT@が@NICK@@END02A@')
            ,
            new SctWrd('@MANY@@THEY@は@NICK@@END02A@')
            ,
            new SctWrd('@THEY@は@NICK@@END02A@。@WHAT@の@NICK@@END02A@')
            ,
            new SctWrd('@THEY@は@WHAT@の@NICK@@END02A@。@WHAT@が@NICK@@END02A@')
            ,
            new SctWrd('@WHAT@は@DO@@END02B@。@THEY@の@KEY@@END02A@')
            ,
            new SctWrd('@WHAT@は@NICK@と@ASSES@@NICK@@END02A@')
            ,
            new SctWrd('@WHAT@は@NICK@@END02A@。@CONECT@、@NICK@@END02A@')
            ,
            new SctWrd('@WHAT@は@NICK@@END02A@。@NICK@で@NICK@@END02A@')
            ,
            new SctWrd('@WHAT@が@NICK@？ @YESNO@、@WHAT@は@NICK@@END02A@')
            ,
            new SctWrd('@WHAT@の@DO@？ @YESNO@、それは@PEOPLE@の@KEY@@END02A@')
            ,
            new SctWrd('@DO@@END02C@@NICK@、@YESNO@、それが@WHAT@@END02A@')
            ,
            new SctWrd('@NICK@、@NICK@、@NICK@、@NICK@・・・、@YESNO@、それは@WHAT@@END02A@')
        ];
    }
}

// 肯定・否定 ・・・？　～、・・・
class selector_YESNO extends SctWrd_Selector implements ISctItm_Selector {
    constructor(){
        super('@YESNO@');
        this.itms = [
            new SctWrd('しかし')
            ,
            new SctWrd('だが')
            ,
            new SctWrd('いえいえ')
            ,
            new SctWrd('いいえ')
            ,
            new SctWrd('いや')
            ,
            new SctWrd('いいや')
            ,
            new SctWrd('いやいや')
            ,
            new SctWrd('それでも')
            ,
            new SctWrd('確かに')
            ,
            new SctWrd('その通り')
            ,
            new SctWrd('すなわち')
            ,
            new SctWrd('正に')
            ,
            new SctWrd('正しく')
            ,
            new SctWrd('間違いなく')
            ,
            new SctWrd('確かに')
            ,
            new SctWrd('紛れもなく')
            ,
            new SctWrd('疑いようも無く')
        ];
    }
}



class selector_end02a extends SctWrd_Selector implements ISctItm_Selector {
    constructor(){
        super('@END02A@');
        this.itms = [
            new SctWrd('だ')
            ,
            new SctWrd('である')
            ,
            new SctWrd('であった')
            ,
            new SctWrd('だった')
            ,
            new SctWrd('なのだ')
            ,
            new SctWrd('なのだろう')
        ];
    }
}

class selector_end02b extends SctWrd_Selector implements ISctItm_Selector {
    constructor(){
        super('@END02B@');
        this.itms = [
            new SctWrd('している')
            ,
            new SctWrd('していた')
            ,
            new SctWrd('する')
            ,
            new SctWrd('した')
            ,
            new SctWrd('させている')
            ,
            new SctWrd('させていた')
            ,
            new SctWrd('しようとしている')
            ,
            new SctWrd('しようとしていた')
            ,
            new SctWrd('してしまった')
            ,
            new SctWrd('してしまう')
            ,
            new SctWrd('するべきであった')
            ,
            new SctWrd('するべきである')
            ,
            new SctWrd('させる')
            ,
            new SctWrd('させた')
            ,
            new SctWrd('させたかった')
            ,
            new SctWrd('したかった')
        ];
    }
}

class selector_end02c extends SctWrd_Selector implements ISctItm_Selector {
    constructor(){
        super('@END02C@');
        this.itms = [
            new SctWrd('する')
            ,
            new SctWrd('した')
            ,
            new SctWrd('していた')
            ,
            new SctWrd('している')
            ,
            new SctWrd('してしまった')
            ,
            new SctWrd('してしまう')
            ,
            new SctWrd('すべき')
            ,
            new SctWrd('すべきである')
            ,
            new SctWrd('すべきであった')
            ,
            new SctWrd('したかった')
            ,
            new SctWrd('させる')
            ,
            new SctWrd('させた')
            ,
            new SctWrd('させたかった')
        ];
    }
}


// 名詞・人物・組織　～は・～が・～の
class selector_whats extends SctItm_SelectLocker implements ISctItm_Selector {
    constructor(){
        super('@WHAT@','@PIC_WHAT@');
        this.itms = [
            new SctItm('日本' ,'WHAT/Japan.jpg')
            ,
            new SctItm('アメリカ','WHAT/America.jpg')
            ,
            new SctItm('米国','WHAT/America.jpg')
            ,
            new SctItm('中国','WHAT/China.jpg')
            ,
            new SctItm('イギリス','WHAT/England.jpg')
            ,
            new SctItm('英国','WHAT/England.jpg')
            ,
            new SctItm('大英帝国','WHAT/England.jpg')
            ,
            new SctItm('ロシア','WHAT/Russia.jpg')
            ,
            new SctItm('インド','WHAT/india.jpg')
            ,
            new SctItm('イタリア','WHAT/Italy.jpg')
            ,
            new SctItm('フランス','WHAT/France.jpg')
            ,
            new SctItm('ドイツ','WHAT/German.jpg')
            ,
            new SctItm('韓国','WHAT/koria.jpg')
            ,
            new SctItm('エジプト','WHAT/pyramid.jpg')
            ,
            new SctItm('ガミラス帝国','WHAT/gamilas.jpg')
            ,
            new SctItm('経済','WHAT/Economy.jpg')
            ,
            new SctItm('株価','WHAT/Economy.jpg')
            ,
            new SctItm('科学','WHAT/Science.jpg')
            ,
            new SctItm('現代科学','WHAT/Science.jpg')
            ,
            new SctItm('先進科学','WHAT/Science.jpg')
            ,
            new SctItm('医療','WHAT/Medical.jpg')
            ,
            new SctItm('医療現場','WHAT/Medical.jpg')
            ,
            new SctItm('医学','WHAT/Medical.jpg')
            ,
            new SctItm('現代医学','WHAT/Medical.jpg')
            ,
            new SctItm('農業','WHAT/Agri.jpg')
            ,
            new SctItm('農場','WHAT/Agri.jpg')
            ,
            new SctItm('工業','WHAT/Factory.jpg')
            ,
            new SctItm('工業地帯','WHAT/Factory.jpg')
            ,
            new SctItm('人工知能','WHAT/AI.jpg')
            ,
            new SctItm('学校教育','WHAT/stady.jpg')
            ,
            new SctItm('宇宙','WHAT/space.jpg')
            ,
            new SctItm('宇宙開発','WHAT/NASA.jpg')
            ,
            new SctItm('天文学','WHAT/space.jpg')
            ,
            new SctItm('NASA','WHAT/NASA.jpg')
            ,
            new SctItm('マスコミ','WHAT/MassMedia.jpg')
            ,
            new SctItm('ビジネス','WHAT/business.jpg')
            ,
            new SctItm('現代社会','WHAT/community.jpg')
            ,
            new SctItm('情報化社会','WHAT/info.jpg')
            ,
            new SctItm('音楽業界','WHAT/music.jpg')
            ,
            new SctItm('芸能界','WHAT/media.jpg')
            ,
            new SctItm('キリスト教','WHAT/christ.jpg')
            ,
            new SctItm('仏教','WHAT/buddha.jpg')
            ,
            new SctItm('イスラム教','WHAT/Islam.jpg')
            ,
            new SctItm('宗教','WHAT/buddha.jpg')
            ,
            new SctItm('歴史','WHAT/history.jpg')
            ,
            new SctItm('世界史','WHAT/history.jpg')
            ,
            new SctItm('人類','WHAT/human.jpg')
            ,
            new SctItm('女子校','WHAT/girlscoll.jpg')
            ,
            new SctItm('オリンピック','WHAT/Olympic.jpg')
            ,
            new SctItm('江戸幕府','WHAT/edo.jpg')
            ,
            new SctItm('ホワイトハウス','WHAT/whitehouse.jpg')
            ,
            new SctItm('紫禁城','WHAT/shikin.jpg')
            ,
            new SctItm('イギリス王家','WHAT/kingdom.jpg')
            ,
            new SctItm('ピラミッド','WHAT/pyramid.jpg')
            ,
            new SctItm('国連','WHAT/nation.jpg')
            ,
            new SctItm('東京','WHAT/tokyo.jpg')
            ,
            new SctItm('大阪','WHAT/osaka.jpg')
            ,
            new SctItm('ニューヨーク','WHAT/newyork.jpg')
            ,
            new SctItm('パリ','WHAT/Paris.jpg')
            ,
            new SctItm('地獄','WHAT/hell.jpg')
            ,
            new SctItm('天国','WHAT/heaven.jpg')
            ,
            new SctItm('極楽浄土','WHAT/heaven2.jpg')
            ,
            new SctItm('ディズニーランド','WHAT/disney.jpg')
            ,
            new SctItm('ディズニーランド','WHAT/disney2.jpg')
            ,
            new SctItm('ひらかたパーク','WHAT/hirapa-.jpg')
            ,
            new SctItm('ひらかたパーク','WHAT/hirapa-2.jpg')
            ,
            new SctItm('ひらかたパーク','WHAT/hirapa-3.jpg')
            ,
            new SctItm('ジオン公国','WHAT/jion.jpg')
            ,
            new SctItm('ナチス・ドイツ','WHAT/nachi.jpg')
            ,
            new SctItm('ホビット床','WHAT/Shire.jpg')
            ,
            new SctItm('銀河帝国','WHAT/GalaxyEmpire.jpg')
            ,
            new SctItm('暗黒面','WHAT/darkside.jpg')
            ,
            new SctItm('ローマ帝国','WHAT/Rome.jpg')
            ,
            new SctItm('未来','WHAT/future.jpg')
            ,
            new SctItm('縄文時代','WHAT/joumon.jpg')
            ,
            new SctItm('スラム街','WHAT/slum.jpg')
            ,
            new SctItm('九竜城','WHAT/coulomb.jpg')
            ,
            new SctItm('邪馬台国','WHAT/yama.jpg')
        ];
    }
}

// 動名詞 の～
class selector_do extends SctItm_SelectLocker implements ISctItm_Selector{
    constructor(){
        super('@DO@','@PIC_DO@');
        this.itms = [
            //
            // nega 
            //
            new SctItm('壊滅','DO/break.jpg')
            ,
            new SctItm('死滅','DO/dead.jpg')
            ,
            new SctItm('崩壊','DO/Collapse.jpg')
            ,
            new SctItm('捏造','DO/fakeTelop.jpg')
            ,
            new SctItm('絶望','DO/Lonly.jpg')
            ,
            new SctItm('孤立','DO/Lonly2.jpg')
            ,
            new SctItm('消滅','DO/Dis.jpg')
            ,
            new SctItm('感染','DO/infection.jpg')
            ,
            new SctItm('暴走','DO/Wild.jpg')
            ,
            new SctItm('発狂','DO/crazy.jpg')
            ,
            new SctItm('洗脳','DO/brainwash.jpg')
            ,
            new SctItm('終焉','DO/end.jpg')
            ,
            new SctItm('衰退','DO/decline.jpg')
            ,
            new SctItm('滅亡','DO/Destruction.jpg')
            ,
            new SctItm('自滅','DO/self.jpg')
            ,
            new SctItm('困惑','DO/panic.jpg')
            ,
            new SctItm('混乱','DO/panic.jpg')
            ,
            new SctItm('嘲笑','DO/laugh.jpg')
            ,
            new SctItm('哄笑','DO/laugh.jpg')
            ,
            new SctItm('罵倒','DO/taunt.jpg')
            ,
            new SctItm('堕落','DO/depra.jpg')
            ,
            new SctItm('失業','DO/lostjob.jpg')
            ,
            new SctItm('支配','DO/mad.jpg')
            ,
            new SctItm('追放','DO/getout.jpg')
            ,
            new SctItm('虐待','DO/depression.jpg')
            ,
            new SctItm('束縛','DO/sm.jpg')
            ,
            new SctItm('拘束','DO/sm.jpg')
            ,
            new SctItm('否定','DO/no.jpg')
            ,
            new SctItm('警告','DO/warning.jpg')
            ,
            new SctItm('漏洩','DO/infoleak.jpg')
            ,
            new SctItm('復讐','DO/revenge.jpg')
            //
            // posi 
            //
            ,
            new SctItm('誕生','DO/birth.jpg')
            ,
            new SctItm('復活','DO/rebirth.jpg')
            ,
            new SctItm('成長','DO/grow.jpg')
            ,
            new SctItm('成功','DO/success.jpg')
            ,
            new SctItm('承認','DO/yes.jpg')
            ,
            new SctItm('解放','DO/release.jpg')
            ,
            new SctItm('独立','DO/independence.jpg')
            ,
            new SctItm('賞賛','DO/praise.jpg')
            ,
            new SctItm('祝福','DO/bless.jpg')
            ,
            new SctItm('救助','DO/rescue.jpg')
            ,
            new SctItm('生還','DO/surviving.jpg')
            ,
            new SctItm('達成','DO/affir.jpg')
            ,
            new SctItm('勝利','DO/vict.jpg')
            ,
            new SctItm('優勝','DO/topwin.jpg')
            ,
            new SctItm('発明','DO/Edison.jpg')
            ,
            new SctItm('開発','DO/debelop.jpg')
            ,
            new SctItm('革命','DO/revolution.jpg')

        ];
    }
}

// 事象・事件・事故
class selector_key extends SctWrd_Selector implements ISctItm_Selector {
    constructor(){
        super('@KEY@');
        this.itms = [
            //
            // nega 
            //
            new SctWrd('虐待行為')
            ,
            new SctWrd('婦女暴行')
            ,
            new SctWrd('人種差別')
            ,
            new SctWrd('暗黒化')
            ,
            new SctWrd('無差別殺人')
            ,
            new SctWrd('殺戮行為')
            ,
            new SctWrd('犯罪行為')
            ,
            new SctWrd('殺戮行為')
            ,
            new SctWrd('迫害行為')
            ,
            new SctWrd('重大事件')
            ,
            new SctWrd('大災害')
            ,
            new SctWrd('傷害事件')
            ,
            new SctWrd('虐待事件')
            ,
            new SctWrd('虐殺行為')
            ,
            new SctWrd('大量虐殺')
            ,
            new SctWrd('暴走状態')
            ,
            new SctWrd('妨害工作')
            ,
            new SctWrd('人種差別')
            ,
            new SctWrd('無力化')
            ,
            new SctWrd('暴力行為')
            ,
            new SctWrd('乱痴気騒ぎ')
            ,
            new SctWrd('乱交パーティー')
            ,
            new SctWrd('乱闘騒ぎ')
            ,
            new SctWrd('葬儀')
            ,
            //
            // posi 
            //
            new SctWrd('新年会')
            ,
            new SctWrd('卒業式')
            ,
            new SctWrd('記念撮影')
            ,
            new SctWrd('入学式')
            ,
            new SctWrd('海水浴')
            ,
            new SctWrd('運動会')
            ,
            new SctWrd('フォークダンス')
            ,
            new SctWrd('文化祭')
            ,
            new SctWrd('祝賀会')
            ,
            new SctWrd('大掃除')
            ,
            new SctWrd('餅つき大会')
            ,
            new SctWrd('忘年会')
            ,
            new SctWrd('雪合戦')
            ,
            new SctWrd('結婚式')
            ,
            new SctWrd('送別会')
            ,
            new SctWrd('お誕生日会')
            ,
            new SctWrd('同窓会')
        ];
    }
}

// 物量・増減・拡縮 ～する・～した・～し、
class selector_status extends SctWrd_Selector implements ISctItm_Selector {
    constructor(){
        super('@STATUS@');
        this.itms = [
            new SctWrd('勃発')
            ,
            new SctWrd('蔓延')
            ,
            new SctWrd('増大')
            ,
            new SctWrd('倍増')
            ,
            new SctWrd('増殖')
            ,
            new SctWrd('肥大化')
            ,
            new SctWrd('急増')
            ,
            new SctWrd('迷走')
            ,
            new SctWrd('暴発')
            ,
            new SctWrd('拡散')
            ,
            new SctWrd('復活')
            ,
            new SctWrd('衰退')
            ,
            new SctWrd('消耗')
            ,
            new SctWrd('減少')
            ,
            new SctWrd('消失')
            ,
            new SctWrd('離散')
            ,
            new SctWrd('開催')
            ,
            new SctWrd('再開')
        ];
    }
}

// 団体 ～の間に・～の間で
class selector_they extends SctWrd_Selector implements ISctItm_Selector {
    constructor(){
        super('@THEY@');
        this.itms = [
            new SctWrd('@CLASS@')
            ,
            new SctWrd('人々')
            ,
            new SctWrd('一般大衆')
            ,
            new SctWrd('有識者')
            ,
            new SctWrd('子供達')
            ,
            new SctWrd('学生達')
            ,
            new SctWrd('女子校生')
            ,
            new SctWrd('女子大生')
            ,
            new SctWrd('彼女達')
            ,
            new SctWrd('ＯＬ達')
            ,
            new SctWrd('彼ら')
            ,
            new SctWrd('先人達')
            ,
            new SctWrd('労働者達')
            ,
            new SctWrd('兵士達')
            ,
            new SctWrd('若年層')
            ,
            new SctWrd('主婦層')
            ,
            new SctWrd('乗組員')
            ,
            new SctWrd('従業員')
            ,
            new SctWrd('売春婦')
            ,
            new SctWrd('暴走族')
            ,
            new SctWrd('マフィア')
            ,
            new SctWrd('ヤクザ')
            ,
            new SctWrd('過激派')
            ,
            new SctWrd('移住者')
            ,
            new SctWrd('旅行者')
            ,
            new SctWrd('スタントマン')
            ,
            new SctWrd('旅芸人')
            ,
            new SctWrd('パイロット')
            ,
            new SctWrd('奴隷')
            ,
            new SctWrd('飼い猫')
            ,
            new SctWrd('首狩り族')
            ,
            new SctWrd('僧侶達')
            ,
            new SctWrd('盗賊達')
            ,
            new SctWrd('海兵隊')
            ,
            new SctWrd('囚人達')
            ,
            new SctWrd('少年達')
            ,
            new SctWrd('少女達')
            ,
            new SctWrd('年長者')
            ,
            new SctWrd('エリート')
            ,
            new SctWrd('傭兵達')
            ,
            new SctWrd('民衆')
            ,
            new SctWrd('観客')
            ,
            new SctWrd('乗客')
            ,
            new SctWrd('通行人')
            ,
            new SctWrd('視聴者')
            ,
            new SctWrd('ユーザー')
            ,
            new SctWrd('株主')
            ,
            new SctWrd('株主')
            ,
            new SctWrd('皇族')
            ,
            new SctWrd('貴族')
            ,
            new SctWrd('家族')
            ,
            new SctWrd('親戚一同')
            ,
            new SctWrd('親類縁者')
            ,
            new SctWrd('先祖代々')
            ,
            new SctWrd('犠牲者')
            ,
            new SctWrd('生徒一同')
            ,
            new SctWrd('兄弟弟子')
            ,
            new SctWrd('メンバー')
            ,
            new SctWrd('チームメイト')
            ,
            new SctWrd('ルームメイト')
            ,
            new SctWrd('クラスメイト')

        ];
    }
}

// 団体の数 （一部の／多くの）人々
class selector_many extends SctWrd_Selector implements ISctItm_Selector {
    constructor(){
        super('@MANY@');
        this.itms = [
            new SctWrd('少数の')
            ,
            new SctWrd('数多くの')
            ,
            new SctWrd('多くの')
            ,
            new SctWrd('一部の')
            ,
            new SctWrd('大多数の')
            ,
            new SctWrd('ごく僅かな')
            ,
            new SctWrd('一握りの')
            ,
            new SctWrd('ほとんどの')
            ,
            new SctWrd('数名の')
            ,
            new SctWrd('幾人もの')
            ,
            new SctWrd('全ての')
            ,
            new SctWrd('大半の')
            ,
            new SctWrd('大勢の')
            ,
            new SctWrd('数え切れない程の')
            ,
            new SctWrd('掃いて捨てるほどの')
        ];
    }
}


// 肩書き ～の
class selector_class extends SctWrd_Selector implements ISctItm_Selector {
    constructor(){
        super('@CLASS@');
        this.itms = [
            new SctWrd('大学教授')
            ,
            new SctWrd('高校教師')
            ,
            new SctWrd('数学教師')
            ,
            new SctWrd('物理学者')
            ,
            new SctWrd('経済学者')
            ,
            new SctWrd('政治評論家')
            ,
            new SctWrd('映画評論家')
            ,
            new SctWrd('映画監督')
            ,
            new SctWrd('舞台監督')
            ,
            new SctWrd('舞台作家')
            ,
            new SctWrd('恋愛小説家')
            ,
            new SctWrd('調理師')
            ,
            new SctWrd('ケーキ職人')
            ,
            new SctWrd('工場長')
            ,
            new SctWrd('会社員')
            ,
            new SctWrd('事務員')
            ,
            new SctWrd('飼育員')
            ,
            new SctWrd('店員')
            ,
            new SctWrd('店主')
            ,
            new SctWrd('アルバイター')
            ,
            new SctWrd('釣り師')
            ,
            new SctWrd('元警察官')
            ,
            new SctWrd('陸軍少佐')
            ,
            new SctWrd('元海兵隊')
            ,
            new SctWrd('空軍少佐')
            ,
            new SctWrd('海軍将校')
            ,
            new SctWrd('陶芸家')
            ,
            new SctWrd('タクシードライバー')
            ,
            new SctWrd('トラックの運転手')
            ,
            new SctWrd('バスの運転手')
            ,
            new SctWrd('アニメーター')
            ,
            new SctWrd('漫画家')
            ,
            new SctWrd('少女漫画家')
            ,
            new SctWrd('プロサーファー')
            ,
            new SctWrd('ユーチューバー')
            ,
            new SctWrd('プログラマー')
            ,
            new SctWrd('システムエンジニア')
            ,
            new SctWrd('助産婦')
            ,
            new SctWrd('ケアマネージャー')
            ,
            new SctWrd('外交官')
            ,
            new SctWrd('警備員')
            ,
            new SctWrd('警察官')
            ,
            new SctWrd('保安官')
            ,
            new SctWrd('ピアニスト')
            ,
            new SctWrd('指揮者')
            ,
            new SctWrd('ギターリスト')
            ,
            new SctWrd('考古学者')
            ,
            new SctWrd('ホテルマン')
            ,
            new SctWrd('デザイナー')
            ,
            new SctWrd('靴磨き')
            ,
            new SctWrd('武士')
            ,
            new SctWrd('野武士')
            ,
            new SctWrd('伯爵')
            ,
            new SctWrd('水呑百姓')
            ,
            new SctWrd('ミイラ職人')
            ,
            new SctWrd('花売り娘')
            ,
            new SctWrd('大道芸人')
            ,
            new SctWrd('吟遊詩人')
            ,
            new SctWrd('連邦保安官')
            ,
            new SctWrd('国家公務員')
            ,
            new SctWrd('国選弁護人')
            ,
            new SctWrd('メイド')
            ,
            new SctWrd('執事')
            ,
            new SctWrd('幼稚園児')
            ,
            new SctWrd('駅員')
            ,
            new SctWrd('世界第三位')
            ,
            new SctWrd('世界第一位')
            ,
            new SctWrd('旅芸人')
            ,
            new SctWrd('サーカス団員')
            ,
            new SctWrd('保育園児')
            ,
            new SctWrd('ラーメン屋')
            ,
            new SctWrd('落語家')
            ,
            new SctWrd('漫才師')
            ,
            new SctWrd('漫才師')
            ,
            new SctWrd('コメディアン')
            ,
            new SctWrd('ストリッパー')
            ,
            new SctWrd('キャバクラ嬢')
            ,
            new SctWrd('飴細工師')
            ,
            new SctWrd('マッチ売り')
            ,
            new SctWrd('魔法使い')
            ,
            new SctWrd('抜け忍')
            ,
            new SctWrd('黒魔術師')
            ,
            new SctWrd('祈祷師')
            ,
            new SctWrd('インディアン')
            ,
            new SctWrd('カウボーイ')
            ,
            new SctWrd('看板娘')
            ,
            new SctWrd('カメラ屋')
            ,
            new SctWrd('税理士')
            ,
            new SctWrd('銀行マン')
            ,
            new SctWrd('変身ヒーロー')
            ,
            new SctWrd('ショッカー')
            ,
            new SctWrd('仮面ライダー')
            ,
            new SctWrd('学級委員')
            ,
            new SctWrd('図書委員')
            ,
            new SctWrd('ＰＴＡ会長')
            ,
            new SctWrd('会社員')
            ,
            new SctWrd('専業主婦')
            ,
            new SctWrd('家政婦')
            ,
            new SctWrd('アニメ声優')
            ,
            new SctWrd('アナウンサー')
            ,
            new SctWrd('新聞記者')
            ,
            new SctWrd('牛乳配達員')
            ,
            new SctWrd('郵便局員')
            ,
            new SctWrd('公務員')
            ,
            new SctWrd('機関士')
            ,
            new SctWrd('野鳥の会')
            ,
            new SctWrd('牧師')
            ,
            new SctWrd('神主')
            ,
            new SctWrd('村長')
            ,
            new SctWrd('町長')
            ,
            new SctWrd('市長')
            ,
            new SctWrd('皇帝')
            ,
            new SctWrd('国王')
            ,
            new SctWrd('大統領')
            ,
            new SctWrd('女王')
            ,
            new SctWrd('総理大臣')
            ,
            new SctWrd('道化師')
            ,
            new SctWrd('庭師')
            ,
            new SctWrd('狩人')
            ,
            new SctWrd('騎士')
            ,
            new SctWrd('忍者')
            ,
            new SctWrd('抜け忍')
            ,
            new SctWrd('諜報員')
            ,
            new SctWrd('狙撃兵')
        ];
    }
}

// 敬称 の～
class selector_nickname extends SctWrd_Selector implements ISctItm_Selector {
    constructor(){
        super('@NICK@');
        this.itms = [
            //
            // nega
            //
            new SctWrd('犬')
            ,
            new SctWrd('死神')
            ,
            new SctWrd('死霊')
            ,
            new SctWrd('病')
            ,
            new SctWrd('骸')
            ,
            new SctWrd('髑髏')
            ,
            new SctWrd('恥')
            ,
            new SctWrd('恥部')
            ,
            new SctWrd('悪魔')
            ,
            new SctWrd('小悪魔')
            ,
            new SctWrd('堕天使')
            ,
            new SctWrd('魔女')
            ,
            new SctWrd('魔王')
            ,
            new SctWrd('世紀末覇者')
            ,
            new SctWrd('罰当たり')
            ,
            new SctWrd('蜥蜴')
            ,
            new SctWrd('害虫')
            ,
            new SctWrd('亡霊')
            ,
            new SctWrd('ミイラ')
            ,
            new SctWrd('蛇')
            ,
            new SctWrd('奴隷')
            ,
            new SctWrd('疫病神')
            ,
            new SctWrd('梅毒')
            ,
            new SctWrd('淋病')
            ,
            new SctWrd('疫病')
            ,
            new SctWrd('粗大ゴミ')
            ,
            new SctWrd('ゴミ')
            ,
            new SctWrd('燃えないゴミ')
            ,
            new SctWrd('ゴミ箱')
            ,
            new SctWrd('ゴミの山')
            ,
            new SctWrd('猛毒')
            ,
            new SctWrd('公害')
            ,
            new SctWrd('腐敗')
            ,
            new SctWrd('腐敗臭')
            ,
            new SctWrd('死臭')
            ,
            new SctWrd('贅肉')
            ,
            new SctWrd('無駄骨')
            ,
            new SctWrd('穀潰し')
            ,
            new SctWrd('蝿')
            ,
            new SctWrd('コソ泥')
            ,
            new SctWrd('ガン細胞')
            ,
            new SctWrd('紙屑')
            ,
            new SctWrd('公衆便所')
            ,
            new SctWrd('病原菌')
            ,
            new SctWrd('火薬庫')
            ,
            new SctWrd('悪臭')
            ,
            new SctWrd('食中毒')
            ,
            new SctWrd('落とし穴')
            ,
            new SctWrd('残飯')
            ,
            new SctWrd('ヘドロ')
            ,
            new SctWrd('脇毛')
            ,
            new SctWrd('鼻毛')
            ,
            new SctWrd('吸い殻')
            ,
            new SctWrd('影')
            ,
            new SctWrd('闇')
            ,
            new SctWrd('悪意')
            ,
            new SctWrd('処刑人')
            ,
            new SctWrd('番人')
            ,
            new SctWrd('悪夢')
            ,
            new SctWrd('蚤')
            ,
            new SctWrd('蟻')
            ,
            new SctWrd('ネズミ')
            ,
            new SctWrd('ハゲタカ')
            ,
            new SctWrd('ポリバケツ')
            ,
            new SctWrd('ブラックホール')
            ,
            new SctWrd('サルガッソ')
            ,
            new SctWrd('罪人')
            ,
            new SctWrd('海賊')
            ,
            new SctWrd('盗賊')
            ,
            new SctWrd('山賊')
            ,
            new SctWrd('夜盗')
            ,
            new SctWrd('大泥棒')
            ,
            new SctWrd('覗き魔')
            ,
            new SctWrd('痴漢')
            ,
            new SctWrd('変態')
            ,
            new SctWrd('変質者')
            ,
            new SctWrd('物乞い')
            ,
            new SctWrd('乞食')
            ,
            new SctWrd('ペテン師')
            ,
            new SctWrd('ゲス野郎')
            ,
            new SctWrd('ホモ野郎')
            ,
            new SctWrd('ヒットラー')
            ,
            new SctWrd('独裁者')
            ,
            new SctWrd('おっさん')
            //
            // posi
            //
            ,
            new SctWrd('鷹')
            ,
            new SctWrd('鷲')
            ,
            new SctWrd('韋駄天')
            ,
            new SctWrd('勇者')
            ,
            new SctWrd('英雄')
            ,
            new SctWrd('勝利者')
            ,
            new SctWrd('ヒーロー')
            ,
            new SctWrd('天才')
            ,
            new SctWrd('秀才')
            ,
            new SctWrd('仙人')
            ,
            new SctWrd('切れ者')
            ,
            new SctWrd('麗人')
            ,
            new SctWrd('看板娘')
            ,
            new SctWrd('花')
            ,
            new SctWrd('希望')
            ,
            new SctWrd('夢')
            ,
            new SctWrd('赤い彗星')
            ,
            new SctWrd('白い悪魔')
            ,
            new SctWrd('星')
            ,
            new SctWrd('希望')
            ,
            new SctWrd('鉄人')
            ,
            new SctWrd('偉人')
            ,
            new SctWrd('魔法使い')
            ,
            new SctWrd('魔術師')
            ,
            new SctWrd('マジシャン')
            ,
            new SctWrd('テクニシャン')
            ,
            new SctWrd('達人')
            ,
            new SctWrd('種馬')
            ,
            new SctWrd('馬車馬')
            ,
            new SctWrd('重戦車')
            ,
            new SctWrd('航空母艦')
            ,
            new SctWrd('巨砲')
            ,
            new SctWrd('妖精')
            ,
            new SctWrd('天使')
            ,
            new SctWrd('神様')
            ,
            new SctWrd('鬼神')
            ,
            new SctWrd('魔神')
            ,
            new SctWrd('コンピューター')
            ,
            new SctWrd('薔薇')
            ,
            new SctWrd('百合の花')
            ,
            new SctWrd('野菊')
            ,
            new SctWrd('ダイヤモンド')
            ,
            new SctWrd('ルビー')
            ,
            new SctWrd('宝石')
            ,
            new SctWrd('宝石箱')
            ,
            new SctWrd('宝')
            ,
            new SctWrd('骨')
            ,
            new SctWrd('魂')
            ,
            new SctWrd('神髄')
            ,
            new SctWrd('真骨頂')
            ,
            new SctWrd('真の姿')
            ,
            new SctWrd('化身')
            ,
            new SctWrd('スター')
            ,
            new SctWrd('スーパースター')
            ,
            new SctWrd('紳士')
            ,
            new SctWrd('淑女')
            ,
            new SctWrd('レディ')
            ,
            new SctWrd('貴公子')
            ,
            new SctWrd('貴人')
            ,
            new SctWrd('貴婦人')
            ,
            new SctWrd('王様')
            ,
            new SctWrd('女王様')
            ,
            new SctWrd('お殿様')
            ,
            new SctWrd('大統領')
            ,
            new SctWrd('酋長')
            //
            // nomal
            //
            ,
            new SctWrd('人')
            ,
            new SctWrd('男')
            ,
            new SctWrd('女')
            ,
            new SctWrd('少年')
            ,
            new SctWrd('少女')
            ,
            new SctWrd('教師')
            ,
            new SctWrd('先生')
            ,
            new SctWrd('老師')
            ,
            new SctWrd('おじさん')
            ,
            new SctWrd('おばさん')
            ,
            new SctWrd('おじいちゃん')
            ,
            new SctWrd('おばあちゃん')
            ,
            new SctWrd('若者')
        ];
    }
}


// 意識 ～する
class selector_think extends SctWrd_Selector implements ISctItm_Selector {
    constructor(){
        super('@THINK@');
        this.itms = [
            new SctWrd('動揺')
            ,
            new SctWrd('警戒')
            ,
            new SctWrd('絶望')
            ,
            new SctWrd('失望')
            ,
            new SctWrd('苦悶')
            ,
            new SctWrd('失意')
            ,
            new SctWrd('迷走')
            ,
            new SctWrd('狂気')
            ,
            new SctWrd('発狂')
            ,
            new SctWrd('激怒')
            ,
            new SctWrd('嘲笑')
            ,
            new SctWrd('驚喜')
            ,
            new SctWrd('驚嘆')
            ,
            new SctWrd('号泣')
        ];
    }
}

// 発言・主張 ～している
class selector_say extends SctWrd_Selector implements ISctItm_Selector {
    constructor(){
        super('@SAY@');
        this.itms = [
            new SctWrd('主張')
            ,
            new SctWrd('強調')
            ,
            new SctWrd('公表')
            ,
            new SctWrd('分析')
            ,
            new SctWrd('発言')
            ,
            new SctWrd('発表')
            ,
            new SctWrd('代弁')
            ,
            new SctWrd('強弁')
            ,
            new SctWrd('記録')
            ,
            new SctWrd('メモ書き')
            ,
            new SctWrd('コメント')
            ,
            new SctWrd('@PART@にメール')
            ,
            new SctWrd('@PART@に電話')
            ,
            new SctWrd('@PART@に相談')
            ,
            new SctWrd('@PART@に連絡')
            ,
            new SctWrd('@PART@に説明')
            ,
            new SctWrd('@PART@にFAX')
            ,
            new SctWrd('リツイート')
        ];
    }
}

// 判断 ～を
class selector_partner extends SctWrd_Selector implements ISctItm_Selector {
    constructor(){
        super('@PART@');
        this.itms = [
            new SctWrd('知り合い')
            ,
            new SctWrd('友達')
            ,
            new SctWrd('彼女')
            ,
            new SctWrd('彼氏')
            ,
            new SctWrd('家族')
            ,
            new SctWrd('恋人')
            ,
            new SctWrd('婚約者')
            ,
            new SctWrd('嫁')
            ,
            new SctWrd('夫')
            ,
            new SctWrd('父')
            ,
            new SctWrd('母')
            ,
            new SctWrd('娘')
            ,
            new SctWrd('息子')
            ,
            new SctWrd('孫')
            ,
            new SctWrd('ひ孫')
            ,
            new SctWrd('妹')
            ,
            new SctWrd('弟')
            ,
            new SctWrd('姉')
            ,
            new SctWrd('兄')
            ,
            new SctWrd('師匠')
            ,
            new SctWrd('弟子')
            ,
            new SctWrd('恩師')
            ,
            new SctWrd('愛弟子')
            ,
            new SctWrd('雇い主')
            ,
            new SctWrd('上司')
            ,
            new SctWrd('部下')
            ,
            new SctWrd('お客様')
            ,
            new SctWrd('顧客')
            ,
            new SctWrd('取引先')
            ,
            new SctWrd('メイド')
            ,
            new SctWrd('執事')
            ,
            new SctWrd('秘書')
            ,
            new SctWrd('ボス')
            ,
            new SctWrd('愛人')
            ,
            new SctWrd('不倫相手')
            ,
            new SctWrd('相方')
            ,
            new SctWrd('ライバル')
            ,
            new SctWrd('親の仇')
            ,
            new SctWrd('マスコミ')
        ];
    }
}



// 判断 ～を
class selector_answer extends SctWrd_Selector implements ISctItm_Selector {
    constructor(){
        super('@ANSWER@');
        this.itms = [
            new SctWrd('見方')
            ,
            new SctWrd('意見')
            ,
            new SctWrd('見解')
            ,
            new SctWrd('推測')
            ,
            new SctWrd('判断')
            ,
            new SctWrd('戯れ言')
            ,
            new SctWrd('疑問')
            ,
            new SctWrd('悩み')
            ,
            new SctWrd('事例')
            ,
            new SctWrd('妄想')
            ,
            new SctWrd('妄言')
            ,
            new SctWrd('寝言')
            ,
            new SctWrd('言い訳')
            ,
            new SctWrd('世迷い言')
            ,
            new SctWrd('予言')
            ,
            new SctWrd('伝説')
            ,
            new SctWrd('仮説')
            ,
            new SctWrd('解説')
            ,
            new SctWrd('推理')
        ];
    }
}

// 評価 と～（る・た・い）。
class selector_assessment extends SctWrd_Selector implements ISctItm_Selector {
    constructor(){
        super('@ASSES@');
        this.itms = [
            new SctWrd('親しまれている')
            ,
            new SctWrd('賞賛された')
            ,
            new SctWrd('蔑まれている')
            ,
            new SctWrd('罵倒されている')
            ,
            new SctWrd('呼ばれている')
            ,
            new SctWrd('評価が高い')
            ,
            new SctWrd('名高い')
            ,
            new SctWrd('知られている')
            ,
            new SctWrd('期待されている')
            ,
            new SctWrd('見放されている')
            ,
            new SctWrd('見限られた')
            ,
            new SctWrd('見捨てられた')
            ,
            new SctWrd('恐れられた')
            ,
            new SctWrd('おだてられている')
            ,
            new SctWrd('馬鹿にされている')
            ,
            new SctWrd('讃えられている')
            ,
            new SctWrd('言い伝えられた')
            ,
            new SctWrd('丸め込まれた')
            ,
            new SctWrd('知れ渡っている')
            ,
            new SctWrd('語り継がれている')
            ,
            new SctWrd('後ろ指を指された')
            ,
            new SctWrd('表彰された')
            ,
            new SctWrd('ささやかれている')
            ,
            new SctWrd('驚嘆した')
            ,
            new SctWrd('驚かせた')
            ,
            new SctWrd('感動させた')
            ,
            new SctWrd('感謝されている')
            ,
            new SctWrd('太鼓判を押された')
            ,
            new SctWrd('名付けられた')
        ];
    }
}


// 接続詞
class selector_conect extends SctWrd_Selector implements ISctItm_Selector {
    constructor(){
        super('@CONECT@');
        this.itms = [
            new SctWrd('そして')
            ,
            new SctWrd('それに伴い')
            ,
            new SctWrd('しかし')
            ,
            new SctWrd('そのため')
            ,
            new SctWrd('その後')
            ,
            new SctWrd('それにより')
            ,
            new SctWrd('その一方')
            ,
            new SctWrd('一方')
            ,
            new SctWrd('しかるに')
            ,
            new SctWrd('そこで')
            ,
            new SctWrd('それを受けて')
            ,
            new SctWrd('やはり')
            ,
            new SctWrd('つまり')
            ,
            new SctWrd('それはさておき')
            ,
            new SctWrd('その時')
            ,
            new SctWrd('かつて')
            ,
            new SctWrd('以前は')
            ,
            new SctWrd('確かに')
            ,
            new SctWrd('流石に')
            ,
            new SctWrd('兎に角')
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

class news_docs_maker {
    protected selectors : ISctItm_Selector[];
    constructor(){
        this.selectors  = new Array<ISctItm_Selector>();

        this.selectors.push(new selector_writer());
        this.selectors.push(new selector_title());
        this.selectors.push(new selector_doc());
        this.selectors.push(new selector_c01());
        this.selectors.push(new selector_c02());
        this.selectors.push(new selector_end01a());
        this.selectors.push(new selector_end01b());
        this.selectors.push(new selector_end02a());
        this.selectors.push(new selector_end02b());
        this.selectors.push(new selector_end02c());
        this.selectors.push(new selector_comment());
        this.selectors.push(new selector_YESNO());
        
        this.selectors.push(new selector_random_date());
        this.selectors.push(new selector_whats());
        this.selectors.push(new selector_do());
        this.selectors.push(new selector_key());
        this.selectors.push(new selector_status());
        this.selectors.push(new selector_they());
        this.selectors.push(new selector_many());

        this.selectors.push(new selector_think());
        this.selectors.push(new selector_who());
        this.selectors.push(new selector_who2());
        this.selectors.push(new selector_human());
        this.selectors.push(new selector_class());
        this.selectors.push(new selector_age());
        this.selectors.push(new selector_say());
        this.selectors.push(new selector_answer());
        this.selectors.push(new selector_conect());
        this.selectors.push(new selector_nickname());
        this.selectors.push(new selector_assessment());
        this.selectors.push(new selector_people());
        this.selectors.push(new selector_partner());

    }

    public gene_docs(temp_doc : string) : string {
        let result = temp_doc;

        this.selectors.forEach(
            (value) => {
                if (value.itm_key != ''){
                    while(result.search(value.itm_key) != -1){
                        let itm = value.rnd_Itm;
                        result = result.replace(value.itm_key,itm.Wrd);
                        if (value.pic_key != ''){
                            while(result.search(value.pic_key) != -1){
                                result = result.replace(value.pic_key,itm.SctPic);
                            }
                        }
                    }
                }
            }
        );
        return result;
    }
}
