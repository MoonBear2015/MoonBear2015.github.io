function set_news()
{
    set_header_menu(1);

    scrollTo(0,0);

    let html : string = '';
    html += '<div id="main_title">'
    html += '<h1>';
    html += 'NEWS';
    html += '<small>';
    html += 'R01.32';
    html += '</small>';
    html += '</h1>';
    html += '</div>';

    for(let i = 0; i < 30; i++){
        html += make_news();
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
    html += 'margin:     10px; ';
    html += 'padding:    10px; ';
    html += 'border:     0.5px solid #606060;';
    html += 'border-radius:  1%;';
    html += 'background: ';
    html += 'linear-gradient(135deg,rgba(30,30,30,0.8),rgba(120,120,120,0.8)),';
    html += 'url(./pics/#PIC_DO);';
    html += 'background-size: ';
    html += 'cover;';
    html += '">';

    html += '<h2 id="news_title">';
    html += '<span style="border-bottom: solid 2px #FFFFFF;">';
    html += '#NEWS_TITLE';
    html += '</span>';
    html += '</h2>';

    html += '<div id="news_pic">';
    html += '<figure>';
    html += '<img src="pics/#PIC_WHAT" width="200">';
    html += '</figure>';
    html += '</div>';
    
    html += '<p id="news_doc">';
    html += '#NEWS_DOC';
    for(let i = 0;i < rnd_minmax(5,20);i++)
    {
        html += '#CONECT、';
        html += '#NEWS_DOC';
    }
    html += '</p>';
    html += '</div>';



    let maker = new news_docs_maker();
    html = maker.gene_docs(html);
    html = maker.gene_docs(html);
    return html;
}

interface INwsItm {
    Wrd : string;
    NwsPic : string;

}

class NwsItm implements INwsItm {
    constructor(
        public Wrd : string
        ,
        public NwsPic : string
    ){
    };
    static Copy(inItm : NwsItm) : NwsItm {
        return new NwsItm(inItm.Wrd,inItm.NwsPic);
    }
    get Copy() : NwsItm {
        return NwsItm.Copy(this);
    }
    set Copy(value : NwsItm){
        this.Wrd = value.Wrd;
        this.NwsPic = value.NwsPic;    
    }
}

class NwsWrd extends NwsItm implements INwsItm {
    constructor(
        in_Wrd : string
    )
    {
        super(in_Wrd,"");
    }
    static Copy(inWrd : NwsWrd) : NwsWrd {
        return new NwsWrd(inWrd.Wrd);
    }
    get Copy() : NwsWrd {
        return NwsWrd.Copy(this);
    }
    set Copy(value : NwsWrd){
        this.Wrd = value.Wrd;
    }
}

interface IItmSelector<T extends INwsItm> {
    rnd_Itm : T;
}

class ItmSelector<T extends INwsItm> implements IItmSelector<T> {
    protected itms : T[];
    private bef_num : number;
    constructor(){
        this.itms = new Array<T>();
        this.bef_num = -1;
    }
    get rnd_Itm() : T {
        let i = -1;
        while(true) {
            i = rnd_max(this.itms.length);
            if (this.itms.length < 2) break;
            if (i != this.bef_num) break;
        }
        this.bef_num = i;
        return this.itms[i];
    }
}

interface INwsItm_Selector extends IItmSelector<NwsItm> {
    // rnd_Itm : NwsItm;
    news_key : string;
    pic_key : string;
}

class NwsItm_Selector extends ItmSelector<NwsItm> implements INwsItm_Selector {
    constructor(
        public news_key : string
        ,
        public pic_key : string
    )
    {
        super();
    }
}

class NwsItm_SelectLocker extends NwsItm_Selector implements INwsItm_Selector {
    private is_lock : boolean;
    private lock_item : NwsItm;

    constructor(
        public news_key : string
        ,
        public pic_key : string
    )
    {
        super(news_key,pic_key);
        this.is_lock = false;
        this.lock_item = new NwsItm('','');
    }

    get rnd_Itm() : NwsItm {
        if (this.is_lock)
        {
            return this.lock_item;
        }
        this.is_lock = true;
        let i = rnd_max(this.itms.length);
        this.lock_item.Copy = this.itms[i];
        return this.itms[i];
    }
}

class NwsWrd_Selector extends NwsItm_Selector implements INwsItm_Selector {
    constructor(
        in_news_key : string
    )
    {
        super(in_news_key,'');
    }
}

class selector_random_date implements INwsItm_Selector {
    public news_key : string;
    public pic_key : string;
    constructor()
    {
        this.news_key = "#DATE";
        this.pic_key = "";
    }
    get rnd_Itm() : NwsItm {
        switch(rnd_max(2))
        {
            case 0:
                return new NwsItm(random_MD_string(),"");
            case 1:
                return new NwsItm(random_YM_string(),"");
            default:
                return new NwsItm(random_MD_string(),"");
        }
    } 
}

class selector_human implements INwsItm_Selector {
    public nameMaker : INameMaker;
    public news_key : string;
    public pic_key : string;
    constructor()
    {
        this.news_key = "#HUMAN";
        this.pic_key = "";
        this.nameMaker = new NameMakerAll();
    }
    get rnd_Itm() : NwsItm {
        let name = this.nameMaker.create();
        return new NwsItm(name,'');
    }
}


class selector_age implements INwsItm_Selector {
    public nameMaker : INameMaker;
    public news_key : string;
    public pic_key : string;
    constructor()
    {
        this.news_key = "#AGE";
        this.pic_key = "";
        this.nameMaker = new NameMakerAll();
    }
    get rnd_Itm() : NwsItm {
        let age : string = "";
        age = "(" + rnd_minmax(16,90).toString() + ")";
        return new NwsItm(age,'');
    }
}

class selector_title extends NwsWrd_Selector implements INwsItm_Selector {
    constructor(){
        super('#NEWS_TITLE');
        this.itms = [
            new NwsWrd('#WHATの#DO')
            ,
            new NwsWrd('#DOする#WHAT')
            ,
            new NwsWrd('#DOする#WHATの#NICK')
            ,
            new NwsWrd('#DOした#WHAT')
            ,
            new NwsWrd('#DOした#WHATの#NICK')
            ,
            new NwsWrd('#WHATは#DOした')
            ,
            new NwsWrd('#WHATは#DOした#NICK')
            ,
            new NwsWrd('#WHATは#DOする')
            ,
            new NwsWrd('#WHATは#DOする#NICK')
            ,
            new NwsWrd('#DOする#WHATの#THEY')
            ,
            new NwsWrd('#DOした#WHATの#KEY')
            ,
            new NwsWrd('#WHATの#DOが#STATUS')
            ,
            new NwsWrd('#STATUSする#WHATの#DO')
            ,
            new NwsWrd('#STATUSする#WHATの#NICK')
            ,
            new NwsWrd('#DOする#WHATの#NICK')
            ,
            new NwsWrd('#WHATの#NICKが#DO#END02B')
            ,
            new NwsWrd('#WHATの#NICK')
            ,
            new NwsWrd('#WHATの#NICKが#STATUS')
            ,
            new NwsWrd('#WHATは#NICKが#STATUS#END02B')
            ,
            new NwsWrd('#WHATは#DOする#NICK#END02A')
            ,
            new NwsWrd('#WHATを#DOさせた#NICK')
        ];
    }
}

class selector_doc extends NwsWrd_Selector implements INwsItm_Selector {
    constructor(){
        super('#NEWS_DOC');
        this.itms = [
            new NwsWrd('#NEWS_C01、#NEWS_C02。')
            ,
            new NwsWrd('#NEWS_C01、#DATE、#NEWS_C02。')
            ,
            new NwsWrd('#DATE、#NEWS_C01、#NEWS_C02。')
            ,
            new NwsWrd('#DATE、#WHOは「#COMMENT」との#ANSWERを#SAY#END02B。')
            ,
            new NwsWrd('#WHOは「#COMMENT」との#ANSWERを#SAY#END02B。')
            ,
            new NwsWrd('#WHOは#DATE、「#COMMENT」との#ANSWERを#SAY#END02B。')
            ,
            new NwsWrd('「#COMMENT」との#ANSWERを#SAYしたのは、#WHO#END02A。')
        ];
    }
}

class selector_who extends NwsWrd_Selector implements INwsItm_Selector {
    constructor(){
        super('#WHO');
        this.itms = [
            new NwsWrd('#CLASSの#HUMAN#AGE')
            ,
            new NwsWrd('「#WHATの#NICK」と#ASSES#CLASSの#HUMAN#AGE')
            ,
            new NwsWrd('「#DOする#NICK」と#ASSES#CLASSの#HUMAN#AGE')
            ,
            new NwsWrd('#THEYより「#WHATの#NICK」と#ASSES#CLASSの#HUMAN#AGE')
            ,
            new NwsWrd('#THEYより「#DOする#NICK」と#ASSES#CLASSの#HUMAN#AGE')
        ];
    }
}

class selector_c01 extends NwsWrd_Selector implements INwsItm_Selector {
    constructor(){
        super('#NEWS_C01');
        this.itms = [
            new NwsWrd('#WHATによる#KEY#END01A')
            ,
            new NwsWrd('#WHATが#DO#END01B')
            ,
            new NwsWrd('#KEYが#STATUSする#WHAT#END01A')
            ,
            new NwsWrd('#WHATによる#KEYが#STATUS#END01B')
            ,
            new NwsWrd('#WHATが#DO#END01B')
            ,
            new NwsWrd('#MANY#THEYが#DO#END01B')
            ,
            new NwsWrd('#MANY#THEYによる#KEYが#STATUS#END01B')
            ,
            new NwsWrd('#MANY#THEYの#THINKが#STATUS#END01B')
            ,
            new NwsWrd('#MANY#THEYの#THINKや#THINKが#STATUS#END01B')
            ,
            new NwsWrd('#THINKや#THINKが#STATUSする#WHAT#END01A')
            ,
            new NwsWrd('#THINKが#STATUSする#WHAT#END01A')
            ,
            new NwsWrd('#THINKが#STATUSする#THEY#END01A')
            ,
            new NwsWrd('#THINKが#STATUSする#DO#END01A')
        ];
    }
}

class selector_end01a extends NwsWrd_Selector implements INwsItm_Selector {
    constructor(){
        super('#END01A');
        this.itms = [
            new NwsWrd('により')
            ,
            new NwsWrd('のため')
            ,
            new NwsWrd('は')
            ,
            new NwsWrd('には')
            ,
            new NwsWrd('が')
        ];
    }
}

class selector_end01b extends NwsWrd_Selector implements INwsItm_Selector {
    constructor(){
        super('#END01B');
        this.itms = [
            new NwsWrd('し')
            ,
            new NwsWrd('したが')
            ,
            new NwsWrd('する中')
            ,
            new NwsWrd('したため')
            ,
            new NwsWrd('するため')
            ,
            new NwsWrd('してしまったため')
        ];
    }
}


class selector_c02 extends NwsWrd_Selector implements INwsItm_Selector {
    constructor(){
        super('#NEWS_C02');
        this.itms = [
            new NwsWrd('#WHATの#MANY#THEYが#ASSES')
            ,
            new NwsWrd('#MANY#THEYが#DO#END02B')
            ,
            new NwsWrd('#MANY#THEYが#NICK#END02A')
            ,
            new NwsWrd('#MANY#THEYの#KEYが#STATUS#END02B')
            ,
            new NwsWrd('#MANY#THEYの#KEYや#KEYが#STATUS#END02B')
            ,
            new NwsWrd('#MANY#THEYの#THINKが#STATUS#END02B')
            ,
            new NwsWrd('#MANY#THEYの#THINKと#THINKが#STATUS#END02B')
        ];
    }
}

class selector_comment extends NwsWrd_Selector implements INwsItm_Selector {
    constructor(){
        super('#COMMENT');
        this.itms = [
            new NwsWrd('#NEWS_C01、#NEWS_C02')
            ,
            new NwsWrd('#NEWS_C01、#NEWS_C02。#CONECT、#NEWS_C01、#NEWS_C02')
            ,
            new NwsWrd('#COMMENT。#CONECT、#COMMENT')
            ,
            new NwsWrd('どうして#THEYは#DOするのか')
            ,
            new NwsWrd('#WHATの#NICKが#STATUS#END02B')
            ,
            new NwsWrd('#WHATは#NICKと#ASSES')
            ,
            new NwsWrd('#WHATが#NICK#END02A')
            ,
            new NwsWrd('#MANY#THEYは#NICK#END02A')
            ,
            new NwsWrd('#THEYは#NICK#END02A。#WHATの#NICK#END02A')
            ,
            new NwsWrd('#THEYは#WHATの#NICK#END02A。#WHATが#NICK#END02A')
            ,
            new NwsWrd('#WHATは#DO#END02B。#THEYが#KEY#END02B')
            ,
            new NwsWrd('#WHATは#NICKと#ASSES#NICK#END02A')
            ,
            new NwsWrd('#THEYは#NICK#END02A。#NICK#END02A')
            ,
            new NwsWrd('#THEYは#NICK#END02A。#NICKで#NICK#END02A')
            ,
            new NwsWrd('#WHATが#NICK？ いいえ、#THEYが#NICK#END02A')
            ,
            new NwsWrd('#THEYが#NICK？ だが、#WHATは#NICK#END02A')
            ,
            new NwsWrd('#THEYが#NICK？ その通り、#WHATは#NICK#END02A')
        ];
    }
}


class selector_end02a extends NwsWrd_Selector implements INwsItm_Selector {
    constructor(){
        super('#END02A');
        this.itms = [
            new NwsWrd('だ')
            ,
            new NwsWrd('である')
            ,
            new NwsWrd('であった')
            ,
            new NwsWrd('だった')
            ,
            new NwsWrd('なのだ')
            ,
            new NwsWrd('なのだろう')
        ];
    }
}

class selector_end02b extends NwsWrd_Selector implements INwsItm_Selector {
    constructor(){
        super('#END02B');
        this.itms = [
            new NwsWrd('している')
            ,
            new NwsWrd('していた')
            ,
            new NwsWrd('する')
            ,
            new NwsWrd('した')
            ,
            new NwsWrd('しようとしている')
            ,
            new NwsWrd('しようとしていた')
        ];
    }
}



// 名詞・人物・組織　～は・～が・～の
class selector_whats extends NwsItm_SelectLocker implements INwsItm_Selector {
    constructor(){
        super('#WHAT','#PIC_WHAT');
        this.itms = [
            new NwsItm('日本' ,'WHAT/Japan.jpg')
            ,
            new NwsItm('アメリカ','WHAT/America.jpg')
            ,
            new NwsItm('米国','WHAT/America.jpg')
            ,
            new NwsItm('中国','WHAT/China.jpg')
            ,
            new NwsItm('イギリス','WHAT/England.jpg')
            ,
            new NwsItm('英国','WHAT/England.jpg')
            ,
            new NwsItm('大英帝国','WHAT/England.jpg')
            ,
            new NwsItm('ロシア','WHAT/Russia.jpg')
            ,
            new NwsItm('インド','WHAT/india.jpg')
            ,
            new NwsItm('イタリア','WHAT/Italy.jpg')
            ,
            new NwsItm('フランス','WHAT/France.jpg')
            ,
            new NwsItm('ドイツ','WHAT/German.jpg')
            ,
            new NwsItm('韓国','WHAT/koria.jpg')
            ,
            new NwsItm('エジプト','WHAT/pyramid.jpg')
            ,
            new NwsItm('経済','WHAT/Economy.jpg')
            ,
            new NwsItm('市場','WHAT/Economy.jpg')
            ,
            new NwsItm('株価','WHAT/Economy.jpg')
            ,
            new NwsItm('科学','WHAT/Science.jpg')
            ,
            new NwsItm('現代科学','WHAT/Science.jpg')
            ,
            new NwsItm('先進科学','WHAT/Science.jpg')
            ,
            new NwsItm('医療','WHAT/Medical.jpg')
            ,
            new NwsItm('医療現場','WHAT/Medical.jpg')
            ,
            new NwsItm('医学','WHAT/Medical.jpg')
            ,
            new NwsItm('現代医学','WHAT/Medical.jpg')
            ,
            new NwsItm('農業','WHAT/Agri.jpg')
            ,
            new NwsItm('農場','WHAT/Agri.jpg')
            ,
            new NwsItm('工業','WHAT/Factory.jpg')
            ,
            new NwsItm('工業地帯','WHAT/Factory.jpg')
            ,
            new NwsItm('人工知能','WHAT/AI.jpg')
            ,
            new NwsItm('教育','WHAT/stady.jpg')
            ,
            new NwsItm('学校','WHAT/stady.jpg')
            ,
            new NwsItm('宇宙','WHAT/space.jpg')
            ,
            new NwsItm('宇宙開発','WHAT/NASA.jpg')
            ,
            new NwsItm('天文学','WHAT/space.jpg')
            ,
            new NwsItm('NASA','WHAT/NASA.jpg')
            ,
            new NwsItm('マスコミ','WHAT/MassMedia.jpg')
            ,
            new NwsItm('芸能界','WHAT/media.jpg')
            ,
            new NwsItm('キリスト教','WHAT/christ.jpg')
            ,
            new NwsItm('仏教','WHAT/buddha.jpg')
            ,
            new NwsItm('イスラム教','WHAT/Islam.jpg')
            ,
            new NwsItm('宗教','WHAT/buddha.jpg')
            ,
            new NwsItm('歴史','WHAT/history.jpg')
            ,
            new NwsItm('世界史','WHAT/history.jpg')
            ,
            new NwsItm('人類','WHAT/human.jpg')
            ,
            new NwsItm('女子校','WHAT/girlscoll.jpg')
            ,
            new NwsItm('オリンピック','WHAT/Olympic.jpg')
            ,
            new NwsItm('江戸幕府','WHAT/edo.jpg')
            ,
            new NwsItm('ホワイトハウス','WHAT/whitehouse.jpg')
            ,
            new NwsItm('紫禁城','WHAT/shikin.jpg')
            ,
            new NwsItm('イギリス王朝','WHAT/kingdom.jpg')
            ,
            new NwsItm('ピラミッド','WHAT/pyramid.jpg')
            ,
            new NwsItm('国連','WHAT/nation.jpg')

        ];
    }
}

// 動名詞 の～
class selector_do extends NwsItm_SelectLocker implements INwsItm_Selector{
    constructor(){
        super('#DO','#PIC_DO');
        this.itms = [
            new NwsItm('壊滅','DO/break.jpg')
            ,
            new NwsItm('死滅','DO/dead.jpg')
            ,
            new NwsItm('崩壊','DO/City.jpg')
            ,
            new NwsItm('捏造','DO/fakeTelop.jpg')
            ,
            new NwsItm('絶望','DO/Lonly.jpg')
            ,
            new NwsItm('孤立','DO/Lonly2.jpg')
            ,
            new NwsItm('消滅','DO/Dis.jpg')
            ,
            new NwsItm('感染','DO/infection.jpg')
            ,
            new NwsItm('暴走','DO/Wild.jpg')
            ,
            new NwsItm('発狂','DO/mad.jpg')
            ,
            new NwsItm('洗脳','DO/brainwash.jpg')
            ,
            new NwsItm('終焉','DO/end.jpg')
            ,
            new NwsItm('滅亡','DO/end.jpg')
            ,
            new NwsItm('自滅','DO/self.jpg')
        ];
    }
}

// 事象・事件・事故
class selector_key extends NwsWrd_Selector implements INwsItm_Selector {
    constructor(){
        super('#KEY');
        this.itms = [
            new NwsWrd('虐待')
            ,
            new NwsWrd('暴行')
            ,
            new NwsWrd('迫害')
            ,
            new NwsWrd('急落')
            ,
            new NwsWrd('暗黒化')
            ,
            new NwsWrd('殺戮')
            ,
            new NwsWrd('犯罪')
            ,
            new NwsWrd('崩壊')
            ,
            new NwsWrd('犯罪行為')
            ,
            new NwsWrd('殺戮行為')
            ,
            new NwsWrd('迫害行為')
            ,
            new NwsWrd('事件発生')
            ,
            new NwsWrd('災害発生')
            ,
            new NwsWrd('傷害事件')
            ,
            new NwsWrd('虐待事件')
            ,
            new NwsWrd('虐殺行為')
            ,
            new NwsWrd('暴走状態')
            ,
            new NwsWrd('妨害工作')
            ,
            new NwsWrd('差別化')
            ,
            new NwsWrd('無力化')
            ,
            new NwsWrd('黙殺')
            ,
            new NwsWrd('暴力行為')
            ,
            new NwsWrd('乱痴気騒ぎ')
            ,
            new NwsWrd('乱交パーティー')
            ,
            new NwsWrd('雪合戦')
            ,
            new NwsWrd('運動会')
            ,
            new NwsWrd('密漁')
            ,
            new NwsWrd('乱獲')
            ,
            new NwsWrd('乱闘騒ぎ')
        ];
    }
}

// 物量・増減・拡縮 ～する・～した・～し、
class selector_status extends NwsWrd_Selector implements INwsItm_Selector {
    constructor(){
        super('#STATUS');
        this.itms = [
            new NwsWrd('加速')
            ,
            new NwsWrd('増長')
            ,
            new NwsWrd('蔓延')
            ,
            new NwsWrd('増大')
            ,
            new NwsWrd('倍増')
            ,
            new NwsWrd('増殖')
            ,
            new NwsWrd('肥大化')
            ,
            new NwsWrd('急増')
            ,
            new NwsWrd('迷走')
            ,
            new NwsWrd('暴発')
            ,
            new NwsWrd('沈黙')
            ,
            new NwsWrd('沈静化')
        ];
    }
}

// 団体 ～の間に・～の間で
class selector_they extends NwsWrd_Selector implements INwsItm_Selector {
    constructor(){
        super('#THEY');
        this.itms = [
            new NwsWrd('人々')
            ,
            new NwsWrd('一般大衆')
            ,
            new NwsWrd('有識者')
            ,
            new NwsWrd('子供達')
            ,
            new NwsWrd('学生達')
            ,
            new NwsWrd('女子校生')
            ,
            new NwsWrd('女子大生')
            ,
            new NwsWrd('女性達')
            ,
            new NwsWrd('ＯＬ達')
            ,
            new NwsWrd('男性陣')
            ,
            new NwsWrd('先人達')
            ,
            new NwsWrd('労働者達')
            ,
            new NwsWrd('兵士達')
            ,
            new NwsWrd('若年層')
            ,
            new NwsWrd('主婦層')
            ,
            new NwsWrd('乗組員')
            ,
            new NwsWrd('乗客')
            ,
            new NwsWrd('従業員')
            ,
            new NwsWrd('売春婦')
            ,
            new NwsWrd('暴走族')
            ,
            new NwsWrd('マフィア')
            ,
            new NwsWrd('ヤクザ')
            ,
            new NwsWrd('過激派')
            ,
            new NwsWrd('移住者')
            ,
            new NwsWrd('旅行者')
            ,
            new NwsWrd('スタントマン')
            ,
            new NwsWrd('旅芸人')
            ,
            new NwsWrd('パイロット')
            ,
            new NwsWrd('奴隷')
            ,
            new NwsWrd('飼い猫')
            ,
            new NwsWrd('首狩り族')
            ,
            new NwsWrd('僧侶達')
            ,
            new NwsWrd('盗賊達')
            ,
            new NwsWrd('海兵隊')
            ,
            new NwsWrd('囚人達')
            ,
            new NwsWrd('少年達')
            ,
            new NwsWrd('少女達')
            ,
            new NwsWrd('年長者')
            ,
            new NwsWrd('エリート')
        ];
    }
}

// 団体の数 （一部の／多くの）人々
class selector_many extends NwsWrd_Selector implements INwsItm_Selector {
    constructor(){
        super('#MANY');
        this.itms = [
            new NwsWrd('少数の')
            ,
            new NwsWrd('多くの')
            ,
            new NwsWrd('一部の')
            ,
            new NwsWrd('大多数の')
            ,
            new NwsWrd('ごく僅かな')
            ,
            new NwsWrd('ほとんどの')
            ,
            new NwsWrd('数名の')
            ,
            new NwsWrd('幾人もの')
            ,
            new NwsWrd('全ての')
            ,
            new NwsWrd('大半の')
            ,
            new NwsWrd('数え切れない程の')
            ,
            new NwsWrd('掃いて捨てるほどの')
        ];
    }
}


// 肩書き ～の
class selector_class extends NwsWrd_Selector implements INwsItm_Selector {
    constructor(){
        super('#CLASS');
        this.itms = [
            new NwsWrd('大学教授')
            ,
            new NwsWrd('高校教師')
            ,
            new NwsWrd('物理学者')
            ,
            new NwsWrd('経済学者')
            ,
            new NwsWrd('映画評論家')
            ,
            new NwsWrd('劇作家')
            ,
            new NwsWrd('映画監督')
            ,
            new NwsWrd('恋愛小説家')
            ,
            new NwsWrd('調理師')
            ,
            new NwsWrd('陸軍少佐')
            ,
            new NwsWrd('元海兵隊')
            ,
            new NwsWrd('工場長')
            ,
            new NwsWrd('店主')
            ,
            new NwsWrd('舞台監督')
            ,
            new NwsWrd('元警察官')
            ,
            new NwsWrd('空軍少佐')
            ,
            new NwsWrd('陶芸家')
            ,
            new NwsWrd('タクシードライバー')
            ,
            new NwsWrd('アニメーター')
            ,
            new NwsWrd('漫画家')
            ,
            new NwsWrd('少女漫画家')
            ,
            new NwsWrd('プロサーファー')
            ,
            new NwsWrd('ユーチューバー')
            ,
            new NwsWrd('プログラマー')
            ,
            new NwsWrd('システムエンジニア')
            ,
            new NwsWrd('助産婦')
            ,
            new NwsWrd('ケアマネージャー')
            ,
            new NwsWrd('外交官')
            ,
            new NwsWrd('警備員')
            ,
            new NwsWrd('警察官')
            ,
            new NwsWrd('保安官')
            ,
            new NwsWrd('ピアニスト')
            ,
            new NwsWrd('指揮者')
            ,
            new NwsWrd('ギターリスト')
            ,
            new NwsWrd('考古学者')
            ,
            new NwsWrd('ホテルマン')
            ,
            new NwsWrd('デザイナー')
            ,
            new NwsWrd('靴磨き')
            ,
            new NwsWrd('お侍様')
            ,
            new NwsWrd('王族')
            ,
            new NwsWrd('水呑百姓')
            ,
            new NwsWrd('ミイラ職人')
            ,
            new NwsWrd('花売り娘')
            ,
            new NwsWrd('大道芸人')
            ,
            new NwsWrd('吟遊詩人')
            ,
            new NwsWrd('連邦保安官')
            ,
            new NwsWrd('国家公務員')
            ,
            new NwsWrd('国選弁護人')
        ];
    }
}

// 敬称 の～
class selector_nickname extends NwsWrd_Selector implements INwsItm_Selector {
    constructor(){
        super('#NICK');
        this.itms = [
            new NwsWrd('犬')
            ,
            new NwsWrd('死神')
            ,
            new NwsWrd('死霊')
            ,
            new NwsWrd('病')
            ,
            new NwsWrd('骸')
            ,
            new NwsWrd('功罪')
            ,
            new NwsWrd('恥')
            ,
            new NwsWrd('恥部')
            ,
            new NwsWrd('悪魔')
            ,
            new NwsWrd('害虫')
            ,
            new NwsWrd('亡霊')
            ,
            new NwsWrd('ミイラ')
            ,
            new NwsWrd('蛇')
            ,
            new NwsWrd('奴隷')
            ,
            new NwsWrd('疫病神')
            ,
            new NwsWrd('梅毒')
            ,
            new NwsWrd('淋病')
            ,
            new NwsWrd('疫病')
            ,
            new NwsWrd('粗大ゴミ')
            ,
            new NwsWrd('ゴミ')
            ,
            new NwsWrd('燃えないゴミ')
            ,
            new NwsWrd('ゴミ箱')
            ,
            new NwsWrd('ゴミの山')
            ,
            new NwsWrd('猛毒')
            ,
            new NwsWrd('公害')
            ,
            new NwsWrd('腐敗')
            ,
            new NwsWrd('腐敗臭')
            ,
            new NwsWrd('死臭')
            ,
            new NwsWrd('鼻くそ')
            ,
            new NwsWrd('贅肉')
            ,
            new NwsWrd('無駄骨')
            ,
            new NwsWrd('無駄')
            ,
            new NwsWrd('穀潰し')
            ,
            new NwsWrd('蝿')
            ,
            new NwsWrd('コソ泥')
            ,
            new NwsWrd('ガン細胞')
            ,
            new NwsWrd('紙屑')
            ,
            new NwsWrd('公衆便所')
            ,
            new NwsWrd('病原菌')
            ,
            new NwsWrd('火薬庫')
            ,
            new NwsWrd('悪臭')
            ,
            new NwsWrd('食中毒')
            ,
            new NwsWrd('落とし穴')
            ,
            new NwsWrd('残飯')
            ,
            new NwsWrd('ヘドロ')
            ,
            new NwsWrd('嘔吐物')
            ,
            new NwsWrd('脇毛')
            ,
            new NwsWrd('鼻毛')
            ,
            new NwsWrd('吸い殻')
            ,
            new NwsWrd('影')
            ,
            new NwsWrd('闇')
            ,
            new NwsWrd('悪意')
            ,
            new NwsWrd('処刑人')
            ,
            new NwsWrd('番人')
            ,
            new NwsWrd('悪夢')
            ,
            new NwsWrd('寝息')
            ,
            new NwsWrd('蚤')
            ,
            new NwsWrd('蟻')
            ,
            new NwsWrd('ネズミ')
            ,
            new NwsWrd('ハゲタカ')
            ,
            new NwsWrd('ポリバケツ')
            ,
            new NwsWrd('ブラックホール')
            ,
            new NwsWrd('サルガッソ')
            ,
            new NwsWrd('罪人')
            ,
            new NwsWrd('海賊')
            ,
            new NwsWrd('盗賊')
            ,
            new NwsWrd('山賊')
            ,
            new NwsWrd('夜盗')
            ,
            new NwsWrd('大泥棒')
            ,
            new NwsWrd('覗き魔')
            ,
            new NwsWrd('痴漢')
            ,
            new NwsWrd('変態')
            ,
            new NwsWrd('変質者')
            ,
            new NwsWrd('物乞い')
            ,
            new NwsWrd('乞食')
            ,
            new NwsWrd('ペテン師')
        ];
    }
}


// 意識 ～する
class selector_think extends NwsWrd_Selector implements INwsItm_Selector {
    constructor(){
        super('#THINK');
        this.itms = [
            new NwsWrd('動揺')
            ,
            new NwsWrd('警戒')
            ,
            new NwsWrd('絶望')
            ,
            new NwsWrd('失望')
            ,
            new NwsWrd('苦悶')
            ,
            new NwsWrd('失意')
            ,
            new NwsWrd('迷走')
            ,
            new NwsWrd('狂気')
            ,
            new NwsWrd('発狂')
            ,
            new NwsWrd('激怒')
            ,
            new NwsWrd('嘲笑')
            ,
            new NwsWrd('驚喜')
            ,
            new NwsWrd('驚嘆')
            ,
            new NwsWrd('号泣')
        ];
    }
}

// 発言・主張 ～している
class selector_say extends NwsWrd_Selector implements INwsItm_Selector {
    constructor(){
        super('#SAY');
        this.itms = [
            new NwsWrd('主張')
            ,
            new NwsWrd('強調')
            ,
            new NwsWrd('公表')
            ,
            new NwsWrd('分析')
            ,
            new NwsWrd('発言')
            ,
            new NwsWrd('発表')
            ,
            new NwsWrd('代弁')
            ,
            new NwsWrd('強弁')
            ,
            new NwsWrd('記録')
            ,
            new NwsWrd('記憶')
        ];
    }
}

// 判断 ～を
class selector_answer extends NwsWrd_Selector implements INwsItm_Selector {
    constructor(){
        super('#ANSWER');
        this.itms = [
            new NwsWrd('見方')
            ,
            new NwsWrd('意見')
            ,
            new NwsWrd('見解')
            ,
            new NwsWrd('推測')
            ,
            new NwsWrd('判断')
            ,
            new NwsWrd('戯れ言')
            ,
            new NwsWrd('疑問')
            ,
            new NwsWrd('悩み')
            ,
            new NwsWrd('事例')
            ,
            new NwsWrd('妄想')
            ,
            new NwsWrd('妄言')
            ,
            new NwsWrd('寝言')
        ];
    }
}

// 評価 と～（る・た・い）。
class selector_assessment extends NwsWrd_Selector implements INwsItm_Selector {
    constructor(){
        super('#ASSES');
        this.itms = [
            new NwsWrd('親しまれている')
            ,
            new NwsWrd('賞賛された')
            ,
            new NwsWrd('蔑まれている')
            ,
            new NwsWrd('罵倒されている')
            ,
            new NwsWrd('称されている')
            ,
            new NwsWrd('呼ばれている')
            ,
            new NwsWrd('評価が高い')
            ,
            new NwsWrd('名高い')
            ,
            new NwsWrd('知られている')
            ,
            new NwsWrd('期待されている')
            ,
            new NwsWrd('見放されている')
            ,
            new NwsWrd('見限られた')
            ,
            new NwsWrd('見捨てられた')
            ,
            new NwsWrd('恐れられた')
            ,
            new NwsWrd('おだてられている')
            ,
            new NwsWrd('馬鹿にされている')
            ,
            new NwsWrd('讃えられている')
            ,
            new NwsWrd('言い伝えられた')
            ,
            new NwsWrd('丸め込まれた')
            ,
            new NwsWrd('知れ渡っている')
        ];
    }
}


// 接続詞
class selector_conect extends NwsWrd_Selector implements INwsItm_Selector {
    constructor(){
        super('#CONECT');
        this.itms = [
            new NwsWrd('そして')
            ,
            new NwsWrd('それに伴い')
            ,
            new NwsWrd('しかし')
            ,
            new NwsWrd('そのため')
            ,
            new NwsWrd('その後')
            ,
            new NwsWrd('それにより')
            ,
            new NwsWrd('その一方')
            ,
            new NwsWrd('一方')
            ,
            new NwsWrd('しかるに')
            ,
            new NwsWrd('そこで')
            ,
            new NwsWrd('それを受けて')
            ,
            new NwsWrd('やはり')
            ,
            new NwsWrd('つまり')
            ,
            new NwsWrd('それはさておき')
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
    protected selectors : INwsItm_Selector[];
    constructor(){
        this.selectors  = new Array<INwsItm_Selector>();
        this.selectors.push(new selector_title());
        this.selectors.push(new selector_doc());
        this.selectors.push(new selector_c01());
        this.selectors.push(new selector_c02());
        this.selectors.push(new selector_end01a());
        this.selectors.push(new selector_end01b());
        this.selectors.push(new selector_end02a());
        this.selectors.push(new selector_end02b());
        this.selectors.push(new selector_comment());
        
        this.selectors.push(new selector_random_date());
        this.selectors.push(new selector_whats());
        this.selectors.push(new selector_do());
        this.selectors.push(new selector_key());
        this.selectors.push(new selector_status());
        this.selectors.push(new selector_they());
        this.selectors.push(new selector_many());

        this.selectors.push(new selector_think());
        this.selectors.push(new selector_who());
        this.selectors.push(new selector_human());
        this.selectors.push(new selector_class());
        this.selectors.push(new selector_age());
        this.selectors.push(new selector_say());
        this.selectors.push(new selector_answer());
        this.selectors.push(new selector_conect());
        this.selectors.push(new selector_nickname());
        this.selectors.push(new selector_assessment());
    }

    public gene_docs(temp_doc : string) : string {
        let result = temp_doc;

        this.selectors.forEach(
            (value) => {
                if (value.news_key != ''){
                    while(result.search(value.news_key) != -1){
                        let itm = value.rnd_Itm;
                        result = result.replace(value.news_key,itm.Wrd);
                        if (value.pic_key != ''){
                            while(result.search(value.pic_key) != -1){
                                result = result.replace(value.pic_key,itm.NwsPic);
                            }
                        }
                    }
                }
            }
        );
        return result;
    }
}
