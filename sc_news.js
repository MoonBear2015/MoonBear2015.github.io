"use strict";
function set_news() {
    set_header_menu(1);
    scrollTo(0, 0);
    let html = '';
    html += '<div id="main_title">';
    html += '<h1>';
    html += 'NEWS';
    html += '<small>';
    html += 'N01.90';
    html += '</small>';
    html += '</h1>';
    html += '</div>';
    for (let i = 0; i < 20; i++) {
        html += '<p>[' + i.toString() + ']</p>' + make_news();
    }
    let elem = document.getElementById('site_main');
    if (elem == null) {
        alert('not found "site_main"');
        return;
    }
    elem.innerHTML = html;
}
function make_news() {
    let html = '';
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
    for (let i = 0; i < rnd_minmax(3, 5); i++) {
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
    for (let i = 0; i < rnd_minmax(5, 10); i++) {
        html += '@CONECT@、';
        html += '@NEWS_DOC@';
    }
    html += '</p>';
    html += '<br>';
    html += '<h4 id="news_writer" align="right">';
    html += 'Copyright (C) @WRITER@';
    html += '<br>@DATE@';
    html += '</h4>';
    html += '</div>';
    let maker = new news_docs_maker();
    let cnt = 0;
    while (true) {
        html = maker.gene_docs(html);
        cnt++;
        let chk = html.indexOf('@');
        if (chk < 0)
            break;
        if (cnt > 10) {
            alert('over work : ' + chk.toString());
            break;
        }
    }
    return html;
}
class selector_random_date extends ItmArray {
    constructor() {
        super();
        this.itm_key = "@DATE@";
        this.pic_key = "";
    }
    get rnd_Itm() {
        switch (rnd_max(2)) {
            case 0:
                return new SctItm(random_MD_string(), "");
            case 1:
                return new SctItm(random_YM_string(), "");
            default:
                return new SctItm(random_MD_string(), "");
        }
    }
    Copy() {
        let result = new selector_random_date();
        result.Paste(this.itms);
        return result;
    }
}
class selector_human extends ItmArray {
    constructor() {
        super();
        this.itm_key = "@HUMAN@";
        this.pic_key = "";
        this.nameMaker = new NameMakerAll();
    }
    get rnd_Itm() {
        let name = this.nameMaker.create();
        return new SctItm(name, '');
    }
    Copy() {
        let result = new selector_human();
        return result;
    }
}
class selector_age extends ItmArray {
    constructor() {
        super();
        this.itm_key = "@AGE@";
        this.pic_key = "";
        this.nameMaker = new NameMakerAll();
    }
    get rnd_Itm() {
        let age = "";
        age = "(" + rnd_minmax(16, 90).toString() + ")";
        return new SctItm(age, '');
    }
    Copy() {
        let result = new selector_age();
        return result;
    }
}
class selector_writer extends SctItm_Selector {
    constructor() {
        super('@WRITER@');
        this.itms = [
            new SctItm('@WH2@')
        ];
    }
}
class selector_title extends SctItm_Selector {
    constructor() {
        super('@NEWS_TITLE@');
        this.itms = [
            new SctItm('@WHAT@の@DO@'),
            new SctItm('@WHAT@は@DO@@END02C@'),
            new SctItm('@WHAT@で@DO@@END02C@@NICK@'),
            new SctItm('@WHAT@の@NICK@が@DO@@END02C@'),
            new SctItm('@WHAT@の@PEOPLE@、@HUMAN@が@DO@@END02C@'),
            new SctItm('@DO@@END02C@@WHAT@'),
            new SctItm('@DO@@END02C@@WHAT@の@PEOPLE@'),
            new SctItm('@DO@@END02C@@WHAT@の@NICK@、@HUMAN@'),
            new SctItm('@WHAT@の@NICK@、@HUMAN@が@DO@'),
            new SctItm('@WHAT@の@NICK@、@HUMAN@が@DO@@END02C@'),
            new SctItm('@WHAT@の@NICK@、@DO@@END02C@'),
            new SctItm('@WHAT@で@DO@@END02C@@PEOPLE@、@HUMAN@'),
            new SctItm('@HUMAN@が@DO@@END02C@@WHAT@'),
            new SctItm('@PEOPLE@の@NICK@、@HUMAN@が@DO@@END02C@@WHAT@'),
            new SctItm('@HUMAN@、@WHAT@で@DO@@END02C@')
        ];
    }
}
class selector_people extends SctItm_Selector {
    constructor() {
        super('@PEOPLE@');
        this.itms = [
            new SctItm('@NICK@'),
            new SctItm('@CLASS@'),
            new SctItm('@PART@')
        ];
    }
}
class selector_manypeople extends SctItm_Selector {
    constructor() {
        super('@MANYPEOPLE@');
        this.itms = [
            new SctItm('@THEY@'),
            new SctItm('@MANYPEOPLE@'),
            new SctItm('@MANY@@CLASS@'),
            new SctItm('@MANY@@PART@'),
            new SctItm('「@CALL@」と@ASSES@@MANY@@PEOPLE@')
        ];
    }
}
class selector_doc extends SctItm_Selector {
    constructor() {
        super('@NEWS_DOC@');
        this.itms = [
            new SctItm('@NEWS_C01@、@NEWS_C02@。'),
            new SctItm('@NEWS_C01@、@DATE@、@NEWS_C02@。'),
            new SctItm('@DATE@、@NEWS_C01@、@NEWS_C02@。'),
            new SctItm('@DATE@、@WHO@は「@COMMENT@」との@ANSWER@を@SAY@@END02B@。'),
            new SctItm('@WHO@は「@COMMENT@」との@ANSWER@を@SAY@@END02B@。'),
            new SctItm('@WHO@は@DATE@、「@COMMENT@」との@ANSWER@を@SAY@@END02B@。'),
            new SctItm('「@COMMENT@」との@ANSWER@を@SAY@したのは、@WHO@@END02A@。')
        ];
    }
}
class selector_who extends SctItm_Selector {
    constructor() {
        super('@WHO@');
        this.itms = [
            new SctItm('@CLASS@の@HUMAN@@AGE@'),
            new SctItm('「@CALL@」と@ASSES@@HUMAN@@AGE@'),
            new SctItm('「@CALL@」と@ASSES@@CLASS@の@HUMAN@@AGE@'),
            new SctItm('@MANYPEOPLE@より「@CALL@」と@ASSES@@CLASS@の@HUMAN@@AGE@')
        ];
    }
}
class selector_who2 extends SctItm_Selector {
    constructor() {
        super('@WH2@');
        this.itms = [
            new SctItm('@CLASS@ @HUMAN@@AGE@'),
            new SctItm('「@CALL@」 @HUMAN@@AGE@'),
            new SctItm('「@CALL@」と@ASSES@@PEOPLE@ @HUMAN@@AGE@'),
            new SctItm('@MANYPEOPLE@より「@CALL@」と@ASSES@@PEOPLE@ @HUMAN@@AGE@')
        ];
    }
}
class selector_call extends SctItm_Selector {
    constructor() {
        super('@CALL@');
        this.itms = [
            new SctItm('@WHAT@の@PEOPLE@'),
            new SctItm('@DO@する@PEOPLE@'),
            new SctItm('@STATUS@する@PEOPLE@'),
            new SctItm('@CLASS@の@PEOPLE@')
        ];
    }
}
class selector_c01 extends SctItm_Selector {
    constructor() {
        super('@NEWS_C01@');
        this.itms = [
            new SctItm('@WHAT@が@DO@@END01B@'),
            new SctItm('@WHAT@での@KEY@@END01A@'),
            new SctItm('@WHAT@で@KEY@が@STATUS@@END01B@'),
            new SctItm('@WHAT@では@KEY@や@KEY@が@STATUS@@END01B@'),
            new SctItm('@KEY@が@STATUS@する@WHAT@@END01A@'),
            new SctItm('@KEY@や@KEY@が@STATUS@する@WHAT@@END01A@'),
            new SctItm('@MANYPEOPLE@が@DO@@END01B@'),
            new SctItm('@MANYPEOPLE@による@KEY@が@STATUS@@END01B@'),
            new SctItm('@THINK@や@THINK@@STATUS2@@WHAT@@END01A@')
        ];
    }
}
class selector_end01a extends SctItm_Selector {
    constructor() {
        super('@END01A@');
        this.itms = [
            new SctItm('により'),
            new SctItm('のため'),
            new SctItm('では'),
            new SctItm('には'),
            new SctItm('で')
        ];
    }
}
class selector_end01b extends SctItm_Selector {
    constructor() {
        super('@END01B@');
        this.itms = [
            new SctItm('し'),
            new SctItm('したが'),
            new SctItm('する中'),
            new SctItm('したため'),
            new SctItm('するため'),
            new SctItm('してしまったため')
        ];
    }
}
class selector_c02 extends SctItm_Selector {
    constructor() {
        super('@NEWS_C02@');
        this.itms = [
            new SctItm('@WHAT@の@MANY@@PEOPLE@が@ASSES@'),
            new SctItm('@MANYPEOPLE@が@DO@@END02B@'),
            new SctItm('@MANYPEOPLE@が@NICK@@END02A@'),
            new SctItm('@MANYPEOPLE@の@KEY@が@STATUS@@END02B@'),
            new SctItm('@MANYPEOPLE@の@KEY@や@KEY@が@STATUS@@END02B@'),
            new SctItm('@MANYPEOPLE@の@THINK@@STATUS2@'),
            new SctItm('@MANYPEOPLE@の@THINK@と@THINK@@STATUS2@')
        ];
    }
}
class selector_comment extends SctItm_Selector {
    constructor() {
        super('@COMMENT@');
        this.itms = [
            new SctItm('@NEWS_C01@、@NEWS_C02@'),
            new SctItm('@NEWS_C01@、@NEWS_C02@。@CONECT@、@NEWS_C01@、@NEWS_C02@'),
            new SctItm('@COMMENT@。@CONECT@、@COMMENT@'),
            new SctItm('@WHAT@の@NICK@が@STATUS@@END02B@'),
            new SctItm('@WHAT@は@DO@@END02C@@NICK@と@ASSES@'),
            new SctItm('@WHAT@が@DO@@END02C@@NICK@@END02A@'),
            new SctItm('@MANYPEOPLE@は@DO@@END02C@@NICK@@END02A@'),
            new SctItm('@MANYPEOPLE@は@NICK@@END02A@。@WHAT@の@DO@@END02C@@NICK@@END02A@'),
            new SctItm('@MANYPEOPLE@は@WHAT@の@NICK@@END02A@。@WHAT@が@NICK@@END02A@'),
            new SctItm('@WHAT@は@DO@@END02B@。@MANYPEOPLE@の@KEY@@END02A@'),
            new SctItm('@WHAT@は@NICK@と@ASSES@@NICK@@END02A@'),
            new SctItm('@WHAT@は@NICK@@END02A@。@CONECT@、@NICK@@END02A@'),
            new SctItm('@WHAT@は@NICK@@END02A@。@NICK@で@NICK@@END02A@'),
            new SctItm('@WHAT@が@NICK@？ @YESNO@、@WHAT@は@NICK@@END02A@'),
            new SctItm('@WHAT@の@DO@？ @YESNO@、それは@PEOPLE@の@KEY@@END02A@'),
            new SctItm('@DO@@END02C@@NICK@、@YESNO@、それが@WHAT@@END02A@'),
            new SctItm('@NICK@、@NICK@、@NICK@、@NICK@・・・、@YESNO@、それが@WHAT@@END02A@')
        ];
    }
}
// 肯定・否定 ・・・？　～、・・・
class selector_YESNO extends SctItm_Selector {
    constructor() {
        super('@YESNO@');
        this.itms = [
            new SctItm('しかし'),
            new SctItm('だが'),
            new SctItm('いえいえ'),
            new SctItm('いいえ'),
            new SctItm('いや'),
            new SctItm('いいや'),
            new SctItm('いやいや'),
            new SctItm('それでも'),
            new SctItm('確かに'),
            new SctItm('その通り'),
            new SctItm('すなわち'),
            new SctItm('正に'),
            new SctItm('正しく'),
            new SctItm('間違いなく'),
            new SctItm('確かに'),
            new SctItm('紛れもなく'),
            new SctItm('疑いようも無く')
        ];
    }
}
class selector_end02a extends SctItm_Selector {
    constructor() {
        super('@END02A@');
        this.itms = [
            new SctItm('だ'),
            new SctItm('である'),
            new SctItm('であった'),
            new SctItm('だった'),
            new SctItm('なのだ'),
            new SctItm('なのだろう')
        ];
    }
}
class selector_end02b extends SctItm_Selector {
    constructor() {
        super('@END02B@');
        this.itms = [
            new SctItm('している'),
            new SctItm('していた'),
            new SctItm('する'),
            new SctItm('した'),
            new SctItm('させている'),
            new SctItm('させていた'),
            new SctItm('しようとしている'),
            new SctItm('しようとしていた'),
            new SctItm('してしまった'),
            new SctItm('してしまう'),
            new SctItm('するべきであった'),
            new SctItm('するべきである'),
            new SctItm('させる'),
            new SctItm('させた'),
            new SctItm('させたかった'),
            new SctItm('したかった')
        ];
    }
}
class selector_end02c extends SctItm_Selector {
    constructor() {
        super('@END02C@');
        this.itms = [
            new SctItm('する'),
            new SctItm('した'),
            new SctItm('していた'),
            new SctItm('している'),
            new SctItm('してしまった'),
            new SctItm('すべき'),
            new SctItm('すべきである'),
            new SctItm('すべきであった'),
            new SctItm('させる'),
            new SctItm('させた')
        ];
    }
}
// 名詞・人物・組織　～は・～が・～の
class selector_whats extends SctItm_SelectLocker {
    constructor() {
        super('@WHAT@', '@PIC_WHAT@');
        this.itms = [
            new SctItm('日本', 'WHAT/Japan.jpg'),
            new SctItm('アメリカ', 'WHAT/America.jpg'),
            new SctItm('米国', 'WHAT/America.jpg'),
            new SctItm('中国', 'WHAT/China.jpg'),
            new SctItm('イギリス', 'WHAT/England.jpg'),
            new SctItm('英国', 'WHAT/England.jpg'),
            new SctItm('大英帝国', 'WHAT/England.jpg'),
            new SctItm('ロシア', 'WHAT/Russia.jpg'),
            new SctItm('インド', 'WHAT/india.jpg'),
            new SctItm('イタリア', 'WHAT/Italy.jpg'),
            new SctItm('フランス', 'WHAT/France.jpg'),
            new SctItm('ドイツ', 'WHAT/German.jpg'),
            new SctItm('韓国', 'WHAT/koria.jpg'),
            new SctItm('エジプト', 'WHAT/pyramid.jpg'),
            new SctItm('ガミラス帝国', 'WHAT/gamilas.jpg'),
            new SctItm('経済', 'WHAT/Economy.jpg'),
            new SctItm('株価', 'WHAT/Economy.jpg'),
            new SctItm('科学', 'WHAT/Science.jpg'),
            new SctItm('現代科学', 'WHAT/Science.jpg'),
            new SctItm('先進科学', 'WHAT/Science.jpg'),
            new SctItm('医療', 'WHAT/Medical.jpg'),
            new SctItm('医療現場', 'WHAT/Medical.jpg'),
            new SctItm('医学', 'WHAT/Medical.jpg'),
            new SctItm('現代医学', 'WHAT/Medical.jpg'),
            new SctItm('農業', 'WHAT/Agri.jpg'),
            new SctItm('農場', 'WHAT/Agri.jpg'),
            new SctItm('工業', 'WHAT/Factory.jpg'),
            new SctItm('工業地帯', 'WHAT/Factory.jpg'),
            new SctItm('人工知能', 'WHAT/AI.jpg'),
            new SctItm('学校教育', 'WHAT/stady.jpg'),
            new SctItm('宇宙', 'WHAT/space.jpg'),
            new SctItm('宇宙開発', 'WHAT/NASA.jpg'),
            new SctItm('天文学', 'WHAT/space.jpg'),
            new SctItm('NASA', 'WHAT/NASA.jpg'),
            new SctItm('マスコミ', 'WHAT/MassMedia.jpg'),
            new SctItm('ビジネス', 'WHAT/business.jpg'),
            new SctItm('現代社会', 'WHAT/community.jpg'),
            new SctItm('情報化社会', 'WHAT/info.jpg'),
            new SctItm('音楽業界', 'WHAT/music.jpg'),
            new SctItm('芸能界', 'WHAT/media.jpg'),
            new SctItm('キリスト教', 'WHAT/christ.jpg'),
            new SctItm('仏教', 'WHAT/buddha.jpg'),
            new SctItm('イスラム教', 'WHAT/Islam.jpg'),
            new SctItm('宗教', 'WHAT/buddha.jpg'),
            new SctItm('歴史', 'WHAT/history.jpg'),
            new SctItm('世界史', 'WHAT/history.jpg'),
            new SctItm('人類', 'WHAT/human.jpg'),
            new SctItm('女子校', 'WHAT/girlscoll.jpg'),
            new SctItm('オリンピック', 'WHAT/Olympic.jpg'),
            new SctItm('江戸幕府', 'WHAT/edo.jpg'),
            new SctItm('ホワイトハウス', 'WHAT/whitehouse.jpg'),
            new SctItm('紫禁城', 'WHAT/shikin.jpg'),
            new SctItm('イギリス王家', 'WHAT/kingdom.jpg'),
            new SctItm('ピラミッド', 'WHAT/pyramid.jpg'),
            new SctItm('国連', 'WHAT/nation.jpg'),
            new SctItm('東京', 'WHAT/tokyo.jpg'),
            new SctItm('大阪', 'WHAT/osaka.jpg'),
            new SctItm('ニューヨーク', 'WHAT/newyork.jpg'),
            new SctItm('パリ', 'WHAT/Paris.jpg'),
            new SctItm('地獄', 'WHAT/hell.jpg'),
            new SctItm('天国', 'WHAT/heaven.jpg'),
            new SctItm('極楽浄土', 'WHAT/heaven2.jpg'),
            new SctItm('ディズニーランド', 'WHAT/disney.jpg'),
            new SctItm('ディズニーランド', 'WHAT/disney2.jpg'),
            new SctItm('ひらかたパーク', 'WHAT/hirapa-.jpg'),
            new SctItm('ひらかたパーク', 'WHAT/hirapa-2.jpg'),
            new SctItm('ひらかたパーク', 'WHAT/hirapa-3.jpg'),
            new SctItm('ジオン公国', 'WHAT/jion.jpg'),
            new SctItm('ナチス・ドイツ', 'WHAT/nachi.jpg'),
            new SctItm('ホビット床', 'WHAT/Shire.jpg'),
            new SctItm('銀河帝国', 'WHAT/GalaxyEmpire.jpg'),
            new SctItm('暗黒面', 'WHAT/darkside.jpg'),
            new SctItm('ローマ帝国', 'WHAT/Rome.jpg'),
            new SctItm('未来', 'WHAT/future.jpg'),
            new SctItm('縄文時代', 'WHAT/joumon.jpg'),
            new SctItm('スラム街', 'WHAT/slum.jpg'),
            new SctItm('九竜城', 'WHAT/coulomb.jpg'),
            new SctItm('邪馬台国', 'WHAT/yama.jpg')
        ];
    }
}
// 動名詞 の～
class selector_do extends SctItm_SelectLocker {
    constructor() {
        super('@DO@', '@PIC_DO@');
        this.itms = [
            //
            // nega 
            //
            new SctItm('壊滅', 'DO/break.jpg'),
            new SctItm('死滅', 'DO/dead.jpg'),
            new SctItm('崩壊', 'DO/Collapse.jpg'),
            new SctItm('捏造', 'DO/fakeTelop.jpg'),
            new SctItm('絶望', 'DO/Lonly.jpg'),
            new SctItm('孤立', 'DO/Lonly2.jpg'),
            new SctItm('消滅', 'DO/Dis.jpg'),
            new SctItm('感染', 'DO/infection.jpg'),
            new SctItm('暴走', 'DO/Wild.jpg'),
            new SctItm('発狂', 'DO/crazy.jpg'),
            new SctItm('洗脳', 'DO/brainwash.jpg'),
            new SctItm('終焉', 'DO/end.jpg'),
            new SctItm('衰退', 'DO/decline.jpg'),
            new SctItm('滅亡', 'DO/Destruction.jpg'),
            new SctItm('自滅', 'DO/self.jpg'),
            new SctItm('困惑', 'DO/panic.jpg'),
            new SctItm('混乱', 'DO/panic.jpg'),
            new SctItm('嘲笑', 'DO/laugh.jpg'),
            new SctItm('哄笑', 'DO/laugh.jpg'),
            new SctItm('罵倒', 'DO/taunt.jpg'),
            new SctItm('堕落', 'DO/depra.jpg'),
            new SctItm('失業', 'DO/lostjob.jpg'),
            new SctItm('支配', 'DO/mad.jpg'),
            new SctItm('追放', 'DO/getout.jpg'),
            new SctItm('虐待', 'DO/depression.jpg'),
            new SctItm('束縛', 'DO/sm.jpg'),
            new SctItm('拘束', 'DO/sm.jpg'),
            new SctItm('否定', 'DO/no.jpg'),
            new SctItm('警告', 'DO/warning.jpg'),
            new SctItm('漏洩', 'DO/infoleak.jpg'),
            new SctItm('復讐', 'DO/revenge.jpg'),
            new SctItm('号泣', 'DO/cry.jpg')
            //
            // posi 
            //
            ,
            new SctItm('誕生', 'DO/birth.jpg'),
            new SctItm('復活', 'DO/rebirth.jpg'),
            new SctItm('成長', 'DO/grow.jpg'),
            new SctItm('成功', 'DO/success.jpg'),
            new SctItm('承認', 'DO/yes.jpg'),
            new SctItm('解放', 'DO/release.jpg'),
            new SctItm('独立', 'DO/independence.jpg'),
            new SctItm('賞賛', 'DO/praise.jpg'),
            new SctItm('祝福', 'DO/bless.jpg'),
            new SctItm('救助', 'DO/rescue.jpg'),
            new SctItm('生還', 'DO/surviving.jpg'),
            new SctItm('達成', 'DO/affir.jpg'),
            new SctItm('勝利', 'DO/vict.jpg'),
            new SctItm('優勝', 'DO/topwin.jpg'),
            new SctItm('発明', 'DO/Edison.jpg'),
            new SctItm('開発', 'DO/debelop.jpg'),
            new SctItm('革命', 'DO/revolution.jpg')
        ];
    }
}
// 事象・事件・事故
class selector_key extends SctItm_Selector {
    constructor() {
        super('@KEY@');
        this.itms = [
            //
            // nega 
            //
            new SctItm('虐待行為'),
            new SctItm('婦女暴行'),
            new SctItm('人種差別'),
            new SctItm('暗黒化'),
            new SctItm('無差別殺人'),
            new SctItm('殺戮行為'),
            new SctItm('犯罪行為'),
            new SctItm('殺戮行為'),
            new SctItm('迫害行為'),
            new SctItm('重大事件'),
            new SctItm('大災害'),
            new SctItm('傷害事件'),
            new SctItm('虐待事件'),
            new SctItm('虐殺行為'),
            new SctItm('大量虐殺'),
            new SctItm('暴走状態'),
            new SctItm('妨害工作'),
            new SctItm('人種差別'),
            new SctItm('暴力行為'),
            new SctItm('乱痴気騒ぎ'),
            new SctItm('乱交パーティー'),
            new SctItm('乱闘騒ぎ'),
            //
            // posi 
            //
            new SctItm('新年会'),
            new SctItm('卒業式'),
            new SctItm('記念撮影'),
            new SctItm('入学式'),
            new SctItm('海水浴'),
            new SctItm('運動会'),
            new SctItm('フォークダンス'),
            new SctItm('文化祭'),
            new SctItm('祝賀会'),
            new SctItm('大掃除'),
            new SctItm('餅つき大会'),
            new SctItm('忘年会'),
            new SctItm('雪合戦'),
            new SctItm('結婚式'),
            new SctItm('送別会'),
            new SctItm('お誕生日会'),
            new SctItm('同窓会')
        ];
    }
}
// 出来事の増減・発生 ～する・～した・～し、
class selector_status1 extends SctItm_Selector {
    constructor() {
        super('@STATUS@');
        this.itms = [
            new SctItm('勃発'),
            new SctItm('蔓延'),
            new SctItm('肥大化'),
            new SctItm('急増'),
            new SctItm('暴発'),
            new SctItm('多発'),
            new SctItm('復活'),
            new SctItm('衰退'),
            new SctItm('解消'),
            new SctItm('消失'),
            new SctItm('開催'),
            new SctItm('流行'),
            new SctItm('禁止'),
            new SctItm('奨励'),
            new SctItm('推奨'),
            new SctItm('計画')
        ];
    }
}
// 感情の増減（２） （感情）～。（悲しみが広がっている）
class selector_status2 extends SctItm_Selector {
    constructor() {
        super('@STATUS2@');
        this.itms = [
            new SctItm('が広がっている'),
            new SctItm('が巻き起こっている'),
            new SctItm('が訴えられている'),
            new SctItm('が蔓延している'),
            new SctItm('に包まれている'),
            new SctItm('で混乱している'),
            new SctItm('で困惑している'),
            new SctItm('で言葉を失っている'),
            new SctItm('に満ちあふれている'),
            new SctItm('に輝いている')
        ];
    }
}
// 団体 ～の間に・～の間で
class selector_they extends SctItm_Selector {
    constructor() {
        super('@THEY@');
        this.itms = [
            new SctItm('@CLASS@'),
            new SctItm('人々'),
            new SctItm('一般大衆'),
            new SctItm('有識者'),
            new SctItm('子供達'),
            new SctItm('学生達'),
            new SctItm('女子校生'),
            new SctItm('女子大生'),
            new SctItm('彼女達'),
            new SctItm('ＯＬ達'),
            new SctItm('彼ら'),
            new SctItm('先人達'),
            new SctItm('労働者達'),
            new SctItm('兵士達'),
            new SctItm('若年層'),
            new SctItm('主婦層'),
            new SctItm('乗組員'),
            new SctItm('従業員'),
            new SctItm('売春婦'),
            new SctItm('暴走族'),
            new SctItm('マフィア'),
            new SctItm('ヤクザ'),
            new SctItm('過激派'),
            new SctItm('移住者'),
            new SctItm('旅行者'),
            new SctItm('スタントマン'),
            new SctItm('旅芸人'),
            new SctItm('パイロット'),
            new SctItm('奴隷'),
            new SctItm('飼い猫'),
            new SctItm('首狩り族'),
            new SctItm('僧侶達'),
            new SctItm('盗賊達'),
            new SctItm('海兵隊'),
            new SctItm('囚人達'),
            new SctItm('少年達'),
            new SctItm('少女達'),
            new SctItm('年長者'),
            new SctItm('エリート'),
            new SctItm('傭兵達'),
            new SctItm('民衆'),
            new SctItm('観客'),
            new SctItm('乗客'),
            new SctItm('通行人'),
            new SctItm('視聴者'),
            new SctItm('ユーザー'),
            new SctItm('株主'),
            new SctItm('株主'),
            new SctItm('皇族'),
            new SctItm('貴族'),
            new SctItm('家族'),
            new SctItm('親戚一同'),
            new SctItm('親類縁者'),
            new SctItm('先祖代々'),
            new SctItm('犠牲者'),
            new SctItm('生徒一同'),
            new SctItm('兄弟弟子'),
            new SctItm('メンバー'),
            new SctItm('チームメイト'),
            new SctItm('ルームメイト'),
            new SctItm('クラスメイト')
        ];
    }
}
// 団体の数 （一部の／多くの）人々
class selector_many extends SctItm_Selector {
    constructor() {
        super('@MANY@');
        this.itms = [
            new SctItm('少数の'),
            new SctItm('数多くの'),
            new SctItm('多くの'),
            new SctItm('一部の'),
            new SctItm('大多数の'),
            new SctItm('ごく僅かな'),
            new SctItm('一握りの'),
            new SctItm('ほとんどの'),
            new SctItm('数名の'),
            new SctItm('幾人もの'),
            new SctItm('全ての'),
            new SctItm('大半の'),
            new SctItm('大勢の'),
            new SctItm('数え切れない程の'),
            new SctItm('掃いて捨てるほどの')
        ];
    }
}
// 肩書き ～の
class selector_class extends SctItm_Selector {
    constructor() {
        super('@CLASS@');
        this.itms = [
            new SctItm('大学教授'),
            new SctItm('高校教師'),
            new SctItm('数学教師'),
            new SctItm('物理学者'),
            new SctItm('経済学者'),
            new SctItm('政治評論家'),
            new SctItm('映画評論家'),
            new SctItm('映画監督'),
            new SctItm('舞台監督'),
            new SctItm('舞台作家'),
            new SctItm('恋愛小説家'),
            new SctItm('調理師'),
            new SctItm('ケーキ職人'),
            new SctItm('工場長'),
            new SctItm('会社員'),
            new SctItm('事務員'),
            new SctItm('飼育員'),
            new SctItm('店員'),
            new SctItm('店主'),
            new SctItm('アルバイター'),
            new SctItm('釣り師'),
            new SctItm('元警察官'),
            new SctItm('陸軍少佐'),
            new SctItm('元海兵隊'),
            new SctItm('空軍少佐'),
            new SctItm('海軍将校'),
            new SctItm('陶芸家'),
            new SctItm('タクシードライバー'),
            new SctItm('トラックの運転手'),
            new SctItm('バスの運転手'),
            new SctItm('アニメーター'),
            new SctItm('漫画家'),
            new SctItm('少女漫画家'),
            new SctItm('プロサーファー'),
            new SctItm('ユーチューバー'),
            new SctItm('プログラマー'),
            new SctItm('システムエンジニア'),
            new SctItm('助産婦'),
            new SctItm('ケアマネージャー'),
            new SctItm('外交官'),
            new SctItm('警備員'),
            new SctItm('警察官'),
            new SctItm('保安官'),
            new SctItm('ピアニスト'),
            new SctItm('指揮者'),
            new SctItm('ギターリスト'),
            new SctItm('考古学者'),
            new SctItm('ホテルマン'),
            new SctItm('デザイナー'),
            new SctItm('靴磨き'),
            new SctItm('武士'),
            new SctItm('野武士'),
            new SctItm('伯爵'),
            new SctItm('水呑百姓'),
            new SctItm('ミイラ職人'),
            new SctItm('花売り娘'),
            new SctItm('大道芸人'),
            new SctItm('吟遊詩人'),
            new SctItm('連邦保安官'),
            new SctItm('国家公務員'),
            new SctItm('国選弁護人'),
            new SctItm('メイド'),
            new SctItm('執事'),
            new SctItm('幼稚園児'),
            new SctItm('駅員'),
            new SctItm('世界第三位'),
            new SctItm('世界第一位'),
            new SctItm('旅芸人'),
            new SctItm('サーカス団員'),
            new SctItm('保育園児'),
            new SctItm('ラーメン屋'),
            new SctItm('落語家'),
            new SctItm('漫才師'),
            new SctItm('漫才師'),
            new SctItm('コメディアン'),
            new SctItm('ストリッパー'),
            new SctItm('キャバクラ嬢'),
            new SctItm('飴細工師'),
            new SctItm('マッチ売り'),
            new SctItm('魔法使い'),
            new SctItm('抜け忍'),
            new SctItm('黒魔術師'),
            new SctItm('祈祷師'),
            new SctItm('インディアン'),
            new SctItm('カウボーイ'),
            new SctItm('看板娘'),
            new SctItm('カメラ屋'),
            new SctItm('税理士'),
            new SctItm('銀行マン'),
            new SctItm('変身ヒーロー'),
            new SctItm('ショッカー'),
            new SctItm('仮面ライダー'),
            new SctItm('学級委員'),
            new SctItm('図書委員'),
            new SctItm('ＰＴＡ会長'),
            new SctItm('会社員'),
            new SctItm('専業主婦'),
            new SctItm('家政婦'),
            new SctItm('アニメ声優'),
            new SctItm('アナウンサー'),
            new SctItm('新聞記者'),
            new SctItm('牛乳配達員'),
            new SctItm('郵便局員'),
            new SctItm('公務員'),
            new SctItm('機関士'),
            new SctItm('野鳥の会'),
            new SctItm('牧師'),
            new SctItm('神主'),
            new SctItm('村長'),
            new SctItm('町長'),
            new SctItm('市長'),
            new SctItm('皇帝'),
            new SctItm('国王'),
            new SctItm('大統領'),
            new SctItm('女王'),
            new SctItm('総理大臣'),
            new SctItm('道化師'),
            new SctItm('庭師'),
            new SctItm('狩人'),
            new SctItm('騎士'),
            new SctItm('忍者'),
            new SctItm('抜け忍'),
            new SctItm('諜報員'),
            new SctItm('狙撃兵')
        ];
    }
}
// 敬称 の～
class selector_nickname extends SctItm_Selector {
    constructor() {
        super('@NICK@');
        this.itms = [
            //
            // nega
            //
            new SctItm('犬'),
            new SctItm('死神'),
            new SctItm('死霊'),
            new SctItm('病'),
            new SctItm('骸'),
            new SctItm('髑髏'),
            new SctItm('恥'),
            new SctItm('恥部'),
            new SctItm('悪魔'),
            new SctItm('小悪魔'),
            new SctItm('堕天使'),
            new SctItm('魔女'),
            new SctItm('魔王'),
            new SctItm('世紀末覇者'),
            new SctItm('罰当たり'),
            new SctItm('蜥蜴'),
            new SctItm('害虫'),
            new SctItm('亡霊'),
            new SctItm('ミイラ'),
            new SctItm('蛇'),
            new SctItm('奴隷'),
            new SctItm('疫病神'),
            new SctItm('梅毒'),
            new SctItm('淋病'),
            new SctItm('疫病'),
            new SctItm('粗大ゴミ'),
            new SctItm('ゴミ'),
            new SctItm('燃えないゴミ'),
            new SctItm('ゴミ箱'),
            new SctItm('ゴミの山'),
            new SctItm('猛毒'),
            new SctItm('公害'),
            new SctItm('腐敗'),
            new SctItm('腐敗臭'),
            new SctItm('死臭'),
            new SctItm('贅肉'),
            new SctItm('無駄骨'),
            new SctItm('穀潰し'),
            new SctItm('蝿'),
            new SctItm('コソ泥'),
            new SctItm('ガン細胞'),
            new SctItm('紙屑'),
            new SctItm('公衆便所'),
            new SctItm('病原菌'),
            new SctItm('火薬庫'),
            new SctItm('悪臭'),
            new SctItm('食中毒'),
            new SctItm('落とし穴'),
            new SctItm('残飯'),
            new SctItm('ヘドロ'),
            new SctItm('脇毛'),
            new SctItm('鼻毛'),
            new SctItm('吸い殻'),
            new SctItm('影'),
            new SctItm('闇'),
            new SctItm('悪意'),
            new SctItm('処刑人'),
            new SctItm('番人'),
            new SctItm('悪夢'),
            new SctItm('蚤'),
            new SctItm('蟻'),
            new SctItm('ネズミ'),
            new SctItm('ハゲタカ'),
            new SctItm('ポリバケツ'),
            new SctItm('ブラックホール'),
            new SctItm('サルガッソ'),
            new SctItm('罪人'),
            new SctItm('海賊'),
            new SctItm('盗賊'),
            new SctItm('山賊'),
            new SctItm('夜盗'),
            new SctItm('大泥棒'),
            new SctItm('覗き魔'),
            new SctItm('痴漢'),
            new SctItm('変態'),
            new SctItm('変質者'),
            new SctItm('物乞い'),
            new SctItm('乞食'),
            new SctItm('ペテン師'),
            new SctItm('ゲス野郎'),
            new SctItm('ホモ野郎'),
            new SctItm('ヒットラー'),
            new SctItm('独裁者'),
            new SctItm('おっさん')
            //
            // posi
            //
            ,
            new SctItm('鷹'),
            new SctItm('鷲'),
            new SctItm('韋駄天'),
            new SctItm('勇者'),
            new SctItm('英雄'),
            new SctItm('勝利者'),
            new SctItm('ヒーロー'),
            new SctItm('天才'),
            new SctItm('秀才'),
            new SctItm('仙人'),
            new SctItm('切れ者'),
            new SctItm('麗人'),
            new SctItm('看板娘'),
            new SctItm('花'),
            new SctItm('希望'),
            new SctItm('夢'),
            new SctItm('赤い彗星'),
            new SctItm('白い悪魔'),
            new SctItm('星'),
            new SctItm('希望'),
            new SctItm('鉄人'),
            new SctItm('偉人'),
            new SctItm('魔法使い'),
            new SctItm('魔術師'),
            new SctItm('マジシャン'),
            new SctItm('テクニシャン'),
            new SctItm('達人'),
            new SctItm('種馬'),
            new SctItm('馬車馬'),
            new SctItm('重戦車'),
            new SctItm('航空母艦'),
            new SctItm('巨砲'),
            new SctItm('妖精'),
            new SctItm('天使'),
            new SctItm('神様'),
            new SctItm('鬼神'),
            new SctItm('魔神'),
            new SctItm('コンピューター'),
            new SctItm('薔薇'),
            new SctItm('百合の花'),
            new SctItm('野菊'),
            new SctItm('ダイヤモンド'),
            new SctItm('ルビー'),
            new SctItm('宝石'),
            new SctItm('宝石箱'),
            new SctItm('宝'),
            new SctItm('骨'),
            new SctItm('魂'),
            new SctItm('神髄'),
            new SctItm('真骨頂'),
            new SctItm('真の姿'),
            new SctItm('化身'),
            new SctItm('スター'),
            new SctItm('スーパースター'),
            new SctItm('紳士'),
            new SctItm('淑女'),
            new SctItm('レディ'),
            new SctItm('貴公子'),
            new SctItm('貴人'),
            new SctItm('貴婦人'),
            new SctItm('王様'),
            new SctItm('女王様'),
            new SctItm('お殿様'),
            new SctItm('大統領'),
            new SctItm('酋長')
            //
            // nomal
            //
            ,
            new SctItm('人'),
            new SctItm('男'),
            new SctItm('女'),
            new SctItm('少年'),
            new SctItm('少女'),
            new SctItm('教師'),
            new SctItm('先生'),
            new SctItm('老師'),
            new SctItm('おじさん'),
            new SctItm('おばさん'),
            new SctItm('おじいちゃん'),
            new SctItm('おばあちゃん'),
            new SctItm('若者')
        ];
    }
}
// 意識 ～する
class selector_think extends SctItm_Selector {
    constructor() {
        super('@THINK@');
        this.itms = [
            new SctItm('動揺'),
            new SctItm('警戒'),
            new SctItm('絶望'),
            new SctItm('失望'),
            new SctItm('苦悶'),
            new SctItm('失意'),
            new SctItm('迷走'),
            new SctItm('狂気'),
            new SctItm('発狂'),
            new SctItm('激怒'),
            new SctItm('嘲笑'),
            new SctItm('驚喜'),
            new SctItm('驚嘆'),
            new SctItm('号泣')
        ];
    }
}
// 発言・主張 ～している
class selector_say extends SctItm_Selector {
    constructor() {
        super('@SAY@');
        this.itms = [
            new SctItm('主張'),
            new SctItm('強調'),
            new SctItm('公表'),
            new SctItm('分析'),
            new SctItm('発言'),
            new SctItm('発表'),
            new SctItm('代弁'),
            new SctItm('強弁'),
            new SctItm('記録'),
            new SctItm('メモ書き'),
            new SctItm('コメント'),
            new SctItm('@PART@にメール'),
            new SctItm('@PART@に電話'),
            new SctItm('@PART@に相談'),
            new SctItm('@PART@に連絡'),
            new SctItm('@PART@に説明'),
            new SctItm('@PART@にFAX'),
            new SctItm('リツイート')
        ];
    }
}
// 判断 ～を
class selector_partner extends SctItm_Selector {
    constructor() {
        super('@PART@');
        this.itms = [
            new SctItm('知り合い'),
            new SctItm('友達'),
            new SctItm('彼女'),
            new SctItm('彼氏'),
            new SctItm('家族'),
            new SctItm('恋人'),
            new SctItm('婚約者'),
            new SctItm('嫁'),
            new SctItm('夫'),
            new SctItm('父'),
            new SctItm('母'),
            new SctItm('娘'),
            new SctItm('息子'),
            new SctItm('孫'),
            new SctItm('ひ孫'),
            new SctItm('妹'),
            new SctItm('弟'),
            new SctItm('姉'),
            new SctItm('兄'),
            new SctItm('師匠'),
            new SctItm('弟子'),
            new SctItm('恩師'),
            new SctItm('愛弟子'),
            new SctItm('雇い主'),
            new SctItm('上司'),
            new SctItm('部下'),
            new SctItm('お客様'),
            new SctItm('顧客'),
            new SctItm('取引先'),
            new SctItm('メイド'),
            new SctItm('執事'),
            new SctItm('秘書'),
            new SctItm('ボス'),
            new SctItm('愛人'),
            new SctItm('不倫相手'),
            new SctItm('相方'),
            new SctItm('ライバル'),
            new SctItm('親の仇'),
            new SctItm('マスコミ')
        ];
    }
}
// 判断 ～を
class selector_answer extends SctItm_Selector {
    constructor() {
        super('@ANSWER@');
        this.itms = [
            new SctItm('見方'),
            new SctItm('意見'),
            new SctItm('見解'),
            new SctItm('推測'),
            new SctItm('判断'),
            new SctItm('戯れ言'),
            new SctItm('疑問'),
            new SctItm('悩み'),
            new SctItm('事例'),
            new SctItm('妄想'),
            new SctItm('妄言'),
            new SctItm('寝言'),
            new SctItm('言い訳'),
            new SctItm('世迷い言'),
            new SctItm('予言'),
            new SctItm('伝説'),
            new SctItm('仮説'),
            new SctItm('解説'),
            new SctItm('推理')
        ];
    }
}
// 評価 と～（る・た・い）。
class selector_assessment extends SctItm_Selector {
    constructor() {
        super('@ASSES@');
        this.itms = [
            new SctItm('親しまれている'),
            new SctItm('賞賛された'),
            new SctItm('蔑まれている'),
            new SctItm('罵倒されている'),
            new SctItm('呼ばれている'),
            new SctItm('評価が高い'),
            new SctItm('名高い'),
            new SctItm('知られている'),
            new SctItm('期待されている'),
            new SctItm('見放されている'),
            new SctItm('見限られた'),
            new SctItm('見捨てられた'),
            new SctItm('恐れられた'),
            new SctItm('おだてられている'),
            new SctItm('馬鹿にされている'),
            new SctItm('讃えられている'),
            new SctItm('言い伝えられた'),
            new SctItm('丸め込まれた'),
            new SctItm('知れ渡っている'),
            new SctItm('語り継がれている'),
            new SctItm('後ろ指を指された'),
            new SctItm('表彰された'),
            new SctItm('ささやかれている'),
            new SctItm('驚嘆した'),
            new SctItm('驚かせた'),
            new SctItm('感動させた'),
            new SctItm('感謝されている'),
            new SctItm('太鼓判を押された'),
            new SctItm('名付けられた')
        ];
    }
}
// 接続詞
class selector_conect extends SctItm_Selector {
    constructor() {
        super('@CONECT@');
        this.itms = [
            new SctItm('そして'),
            new SctItm('それに伴い'),
            new SctItm('しかし'),
            new SctItm('そのため'),
            new SctItm('その後'),
            new SctItm('それにより'),
            new SctItm('その一方'),
            new SctItm('一方'),
            new SctItm('しかるに'),
            new SctItm('そこで'),
            new SctItm('それを受けて'),
            new SctItm('やはり'),
            new SctItm('つまり'),
            new SctItm('それはさておき'),
            new SctItm('その時'),
            new SctItm('かつて'),
            new SctItm('以前は'),
            new SctItm('確かに'),
            new SctItm('流石に'),
            new SctItm('兎に角')
        ];
    }
}
class news_doc {
    constructor(doc) {
        this.doc = doc;
        this.pics = new Array();
    }
}
class news_docs_maker {
    constructor() {
        this.selectors = new Array();
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
        this.selectors.push(new selector_status1());
        this.selectors.push(new selector_status2());
        this.selectors.push(new selector_they());
        this.selectors.push(new selector_many());
        this.selectors.push(new selector_think());
        this.selectors.push(new selector_who());
        this.selectors.push(new selector_who2());
        this.selectors.push(new selector_human());
        this.selectors.push(new selector_class());
        this.selectors.push(new selector_call());
        this.selectors.push(new selector_age());
        this.selectors.push(new selector_say());
        this.selectors.push(new selector_answer());
        this.selectors.push(new selector_conect());
        this.selectors.push(new selector_nickname());
        this.selectors.push(new selector_assessment());
        this.selectors.push(new selector_people());
        this.selectors.push(new selector_manypeople());
        this.selectors.push(new selector_partner());
    }
    gene_docs(temp_doc) {
        let result = temp_doc;
        this.selectors.forEach((value) => {
            if (value.itm_key != '') {
                while (result.search(value.itm_key) != -1) {
                    let itm = value.rnd_Itm;
                    result = result.replace(value.itm_key, itm.Wrd);
                    if (value.pic_key != '') {
                        while (result.search(value.pic_key) != -1) {
                            result = result.replace(value.pic_key, itm.SctPic);
                        }
                    }
                }
            }
        });
        return result;
    }
}
