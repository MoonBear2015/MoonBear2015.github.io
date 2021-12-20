function set_horo()
{
    set_header_menu(5);

    scrollTo(0,0);

    let html : string = '';
    html += '<div id="main_title">'
    html += '<h1>';
    html += 'Horoscope';
    html += '<small>';
    html += ' H00.47';
    html += '</small>';
    html += '</h1>';
    html += '</div>';

    html += make_horo();

    let elem = document.getElementById('site_main');
    if (elem == null)
    {
        alert('not found "site_main"');
        return;
    }
    elem.innerHTML = ruby_change(html);
}



function make_horo()
{

    let maker = new horo_docs_maker();
    let fixStars = new Fix_stars();
    maker.dic_push(fixStars);
    let cntHoro = rnd_minmax(4,fixStars.countItm + 1);
    
    let makerItms = new horo_docs_maker_items();
    let fixItem = new Fix_items();
    makerItms.dic_push(fixItem);

    let cntItem = 6;

    let dt = new Date()

    let html : string = '';

    let days = SplitYearDays(cntHoro);

    html += '<div id="horo_box">';

    for(let j = 0; j < cntHoro; j++) {

        if (j == cntHoro - 3) {
            html += '<span id="horo_00"></span>';
        }

        html += '<a href="#horo_';
        html += ( '00' + j ).slice( -2 );
        html += '">';

        html += '<div id="horo_line">';

        html += '<div id="horo_col_icon">';
        html += '<img src="pics/@ICON_HORO@" width="100%" height="100%">';
        html += '</div>';

        html += '<div id="horo_col_name">';
        html += '@F_STAR_B@座';
        html += '</div>';

        html += '<div id="horo_col_days">';
        html += date_MD_string(days[j].st);
        html += ' ~ ';
        html += date_MD_string(days[j].ed);
        html += '</div>';

        html += '</div>';
        html += '</a>';

        html = maker.gene_docs(html);
        fixStars.Next();

    }
    html += '</div>';

    fixStars.Restart();

    html += '<div id="horo_sent_box">';

    for(let j = 0; j < cntHoro; j++) {
        
        html += '<span id="horo_';
        html += ( '00' + (j + 1).toString() ).slice( -2 )
        html += '">';
        html += '</span>';
        
        html += '<div id="horo_sent">';

        html += '<div id="horo_sent_icon">';
        html += '<img src="pics/@ICON_HORO@" width="100%" height="100%">';
        html += '@F_STAR@';
        html += '</div>';

        html += '<div id="horo_sent_title">';
        html += '☆★';
        html += '<big>@F_STAR_B@座</big>';
        html += '★☆';
        html += '</div>';

        html += '<div id="horo_sent_days">';
        html += date_MD_string(days[j].st);
        html += ' ~ ';
        html += date_MD_string(days[j].ed);
        html += '</div>';

        html += '<p id="horo_sent_info">'; // 
        html += '@H_INFO@';
        html += '</p>'; // info


        html += '<p id="horo_sent_type">'; // 
        html += '　@H_TYPE_INIT@';
        for(let j = 0; j < 2; j++){
            html += '@H_TYPE@';
        }
        html += '@H_TYPE_END@。';
        html += '</p>'; // info

        html = maker.gene_docs(html);
        fixStars.Next();

        html += '<p id="horo_sent_items">'; // 
        for(let k = 0; k < cntItem; k++)
        {
            html += '<img src="pics/@ICON_HOROITEM@" width="30px" height="30px">';
            html += '@F_ITEM@：' + star_str(rnd_minmax(1,6));
            html += ' @F_ITEM@<br>';

            html = makerItms.gene_docs(html);
            fixItem.Next();
        }
        makerItms.Restart();
        html += '</p>'; // info
        
        
        html += '</div>';
    }
    html += '</div>';

    let cnt1 = 0;

    html = maker.gene_docs(html);
    return html;
    
}

// （固定）ステータス
class Fix_stars extends SctItm_FixSeq implements ISctItm_Selector{
    constructor(){
        super('@F_STAR@','@F_STAR_B@','@ICON_HORO@');
        this.Add(itms_horo_star);
    }
}

// （固定）占い・項目
class Fix_items extends SctItm_FixSeq implements ISctItm_Selector{
    constructor(){
        super('@F_ITEM@');
        this.itms = [
            new SctItm('@I_LOVE@')
            ,
            new SctItm('@I_JOB@')
            ,
            new SctItm('@I_HEALTH@')
            ,
            new SctItm('@I_STUDAY@')
            ,
            new SctItm('@I_TRAVEL@')
            ,
            new SctItm('@I_FAMILY@')
            ,
            new SctItm('@I_GAME@')
            ,
            new SctItm('@I_SWEETS@')
            ,
            new SctItm('@I_FOOD@')
            ,
            new SctItm('@I_MUSIC@')
            ,
            new SctItm('@I_SPORTS@')
        ]
    }
}
// （固定）名詞・人物・組織　～は・～が・～の
class First_love extends SctItm_FirstLocker2 implements ISctItm_Selector{
    constructor(){
        super('@I_LOVE@','','@ICON_HOROITEM@');
        this.itms = [
            new SctItm('恋愛','HORO/love.png','Love')
            ,
            new SctItm('@KEY@で出逢いが待っている')
            ,
            new SctItm('@CLASS@には要注意')
            ,
            new SctItm('@CLASS@を射止める絶好のチャンス')
            ,
            new SctItm('お薦めデートスポット ～ @LANDMARK@ @LANDMARK@ @LANDMARK@')
        ]
    }
}
// （固定）名詞・人物・組織　～は・～が・～の
class First_job extends SctItm_FirstLocker2 implements ISctItm_Selector{
    constructor(){
        super('@I_JOB@','','@ICON_HOROITEM@');
        this.itms = [
            new SctItm('仕事','HORO/job.png','Business')
            ,
            new SctItm('@CLASS@の素質有り')
            ,
            new SctItm('お薦めの転職先 ～ @CLASS@ @CLASS@ @CLASS@')
            ,
            new SctItm('@CLASS@が高収入')
            ,
            new SctItm('@TECH@で業績アップ')
            ,
            new SctItm('@TECH@で効率化')
        ]
    }
}
// （固定）名詞・人物・組織　～は・～が・～の
class First_health extends SctItm_FirstLocker2 implements ISctItm_Selector{
    constructor(){
        super('@I_HEALTH@','','@ICON_HOROITEM@');
        this.itms = [
            new SctItm('健康','HORO/health.png','Health')
            ,
            new SctItm('@HABIT@で医者いらず')
            ,
            new SctItm('@HABIT@中毒に気を付けて')
            ,
            new SctItm('毎日の@HABIT@でダイエット')
            ,
            new SctItm('@TECH@が健康の秘訣')
        ]
    }
}

class First_studay extends SctItm_FirstLocker2 implements ISctItm_Selector{
    constructor(){
        super('@I_STUDAY@','','@ICON_HOROITEM@');
        this.itms = [
            new SctItm('学業','HORO/studay.png','Studay')
            ,
            new SctItm('@TECH@で学力向上')
            ,
            new SctItm('@TECH@で志望校合格')
            ,
            new SctItm('@HABIT@で記憶力向上')
        ]
    }
}


class First_travel extends SctItm_FirstLocker2 implements ISctItm_Selector{
    constructor(){
        super('@I_TRAVEL@','','@ICON_HOROITEM@');
        this.itms = [
            new SctItm('旅行','HORO/travel.png','Travel')
            ,
            new SctItm('お薦めの国 ～ @COUNTRY@ @COUNTRY@ @COUNTRY@')
            ,
            new SctItm('@LANDMARK@巡りの季節になりました')
            ,
            new SctItm('@DIR@への旅路は要注意')
        ]
    }
}
class First_family extends SctItm_FirstLocker2 implements ISctItm_Selector{
    constructor(){
        super('@I_FAMILY@','','@ICON_HOROITEM@');
        this.itms = [
            new SctItm('家庭','HORO/family.png','Family')
            ,
            new SctItm('@FAMILY@の言動に要注意')
            ,
            new SctItm('@FAMILY@を大切に')
            ,
            new SctItm('@FAMILY@へのプレゼントが幸運を呼ぶ')
            ,
            new SctItm('家族旅行は@COUNTRY@がお薦め')
            ,
            new SctItm('家族みんなで@HABIT@')
        ]
    }
}

class First_game extends SctItm_FirstLocker2 implements ISctItm_Selector{
    constructor(){
        super('@I_GAME@','','@ICON_HOROITEM@');
        this.itms = [
            new SctItm('賭事','HORO/game.png','Travel')
            ,
            new SctItm('@DIR@に勝利の予感')
            ,
            new SctItm('昨日の勝敗に@THINK@は禁物')
            ,
            new SctItm('@CLASS@との勝負は避けて')
            ,
            new SctItm('@THEY@を味方に付ければ')
        ]
    }
}

class First_sweets extends SctItm_FirstLocker2 implements ISctItm_Selector{
    constructor(){
        super('@I_SWEETS@','','@ICON_HOROITEM@');
        this.itms = [
            new SctItm('菓子','HORO/sweet.png','Sweets')
            ,
            new SctItm('@SWEETS@を@HABIT@のお供に')
            ,
            new SctItm('@SWEETS@を今日一日のご褒美に')
            ,
            new SctItm('今日のおやつは@COUNTRY@産の@SWEETS@')
        ]
    }
}

class First_food extends SctItm_FirstLocker2 implements ISctItm_Selector{
    constructor(){
        super('@I_FOOD@','','@ICON_HOROITEM@');
        this.itms = [
            new SctItm('食事','HORO/food.png','Food')
            ,
            new SctItm('朝食には@FOOD@が一番')
            ,
            new SctItm('おすすめランチ ～ @FOOD@ @FOOD@ @FOOD@')
            ,
            new SctItm('おすすめディナー ～ @FOOD@ @FOOD@ @FOOD@')
            ,
            new SctItm('@FOOD@が美味しい季節になりました')
            ,
            new SctItm('@FOOD@の名店を探してみよう')
        ]
    }
}

class First_music extends SctItm_FirstLocker2 implements ISctItm_Selector{
    constructor(){
        super('@I_MUSIC@','','@ICON_HOROITEM@');
        this.itms = [
            new SctItm('音楽','HORO/music.png','Music')
            ,
            new SctItm('@COUNTRY@のヒットチャートに注目')
            ,
            new SctItm('お休み前には@COUNTRY@の@MUSIC@')
            ,
            new SctItm('@THEY@で人気の@MUSIC@がお薦め')
            ,
            new SctItm('目覚めの@MUSIC@で元気一杯')
        ]
    }
}
class First_sports extends SctItm_FirstLocker2 implements ISctItm_Selector{
    constructor(){
        super('@I_SPORTS@','','@ICON_HOROITEM@');
        this.itms = [
            new SctItm('運動','HORO/sports.png','Sports')
            ,
            new SctItm('@SPORTS@で良い汗を流そう')
            ,
            new SctItm('@SPORTS@のシーズン到来です')
            ,
            new SctItm('お薦めのスポーツ ～ @SPORTS@ @SPORTS@ @SPORTS@')
        ]
    }
}


// 解説
class selector_h_info extends SctItm_Selector implements ISctItm_Selector {
    constructor(){
        super('@H_INFO@');
        this.itms = [
            new SctItm('@H_INFO_INIT@、@H_INFO_ITEM@、@H_INFO_END@ています。')
            ,
            new SctItm('@H_INFO_INIT@すが、@H_INFO_ITEM@、@H_INFO_END@ています。')
            ,
            new SctItm('@H_INFO_INIT@、@H_INFO_ITEM@、@H_INFO_END@、@H_INFO_END@ています。')
            ,
            new SctItm('@H_INFO_INIT@すが、@H_INFO_ITEM@、@H_INFO_END@、@CONECT3@、@H_INFO_ITEM@、@H_INFO_END@ています。')
        ]
    }
}



// 解説 開始
class selector_h_info_init extends SctItm_Selector implements ISctItm_Selector {
    constructor(){
        super('@H_INFO_INIT@');
        this.itms = [
            new SctItm('@F_STAR_B@座は@DIR@の夜空に輝く星座で')
            ,
            new SctItm('@F_STAR_B@座は代表的な@SEASON@の星座で')
            ,
            new SctItm('@F_STAR_B@座は@COUNTRY@に伝わる星座で')
            ,
            new SctItm('@F_STAR_B@座は@COUNTRY@に伝わる星座で')
        ]
    }
}

// 解説 主語
class selector_h_info_item extends SctItm_Selector implements ISctItm_Selector {
    constructor(){
        super('@H_INFO_ITEM@');
        this.itms = [
            new SctItm('その姿は@GRADE@@KEIM1@と')
            ,
            new SctItm('その@F_STAR_B@は@ANIMAL@の@BODY@を持つと')
            ,
            new SctItm('その姿は@NICK@に瓜二つだと')
            ,
            new SctItm('@CLASS@の象徴であると')
        ]
    }
}


// 解説 結び
class selector_h_info_end extends SctItm_Selector implements ISctItm_Selector {
    constructor(){
        super('@H_INFO_END@');
        this.itms = [
            new SctItm('@COUNTRY@@HISTORY@に@H_WRITE@')
            ,
            new SctItm('@WHO3@@MANYPEOPLE@に@ASSES1@')
            ,
            new SctItm('@MANYPEOPLE@に@ASSES_S2@')
        ]
    }
}

class selector_h_title_name extends SctItm_Selector implements ISctItm_Selector {
    constructor(){
        super('@H_TITLE_NAME@');
        this.itms = [
            new SctItm('@THEY@の@PART@')
            ,
            new SctItm('@COUNTRY@の@PART@')
            ,
            new SctItm('@COUNTRY@の@THINK@')
            ,
            new SctItm('@COUNTRY@の@CLASS@')
            ,
            new SctItm('@COUNTRY@の@FUTURE@')
            ,
            new SctItm('@COUNTRY@の@NICK@')
            ,
            new SctItm('@CLASS@の@PART@')
            ,
            new SctItm('@CLASS@の@THINK@')
            ,
            new SctItm('@CLASS@の@NICK@')
            ,
            new SctItm('@PEOPLE@の中の@PEOPLE@')
            ,
            new SctItm('@WHO3@@PEOPLE@')

        ]
    }
}


// 解説 結び
class selector_h_think extends SctItm_Selector implements ISctItm_Selector {
    constructor(){
        super('@H_THINK@');
        this.itms = [
            new SctItm('親しまれ')
            ,
            new SctItm('愛され')
            ,
            new SctItm('讃えられ')
            ,
            new SctItm('恐れられ')
        ]
    }
}

class selector_h_write extends SctItm_Selector implements ISctItm_Selector {
    constructor(){
        super('@H_WRITE@');
        this.itms = [
            new SctItm('記され')
            ,
            new SctItm('記載され')
            ,
            new SctItm('記述され')
            ,
            new SctItm('掲載され')
            ,
            new SctItm('記録され')
            ,
            new SctItm('刻まれ')
            ,
            new SctItm('描かれ')
        ]
    }
}


// 解説 結び
class selector_h_choise extends SctItm_Selector implements ISctItm_Selector {
    constructor(){
        super('@H_CHOISE@');
        this.itms = [
            new SctItm('定められ')
            ,
            new SctItm('任命され')
            ,
            new SctItm('列せられ')
            ,
            new SctItm('指定され')
            ,
            new SctItm('任命され')
            ,
            new SctItm('祭り上げられ')
        ]
    }
}



// 性格 開始
class selector_h_type_init extends SctItm_Selector implements ISctItm_Selector {
    constructor(){
        super('@H_TYPE_INIT@');
        this.itms = [
            new SctItm('@F_STAR_B@座の人は')
            ,
            new SctItm('@F_STAR_B@座の人の多くは')
            ,
            new SctItm('@F_STAR_B@座の人にありがちなことは')
            ,
            new SctItm('@F_STAR_B@座の人の特徴は')
            ,
            new SctItm('@F_STAR_B@座の人は基本的に')
        ]
    }
}
// 性格
class selector_h_type extends SctItm_Selector implements ISctItm_Selector {
    constructor(){
        super('@H_TYPE@');
        this.itms = [
            new SctItm('@H_TYPE_END@。')
            ,
            new SctItm('@H_TYPE_END@。@CONECT3@、')
            ,
            new SctItm('@H_TYPE_END@が、')
            ,
            new SctItm('@H_TYPE_END@から、')
            ,
            new SctItm('@H_TYPE_END@ので、')
        ]
    }
}

// 性格 結び
class selector_h_type_end extends SctItm_Selector implements ISctItm_Selector {
    constructor(){
        super('@H_TYPE_END@');
        this.itms = [
            new SctItm('@GRADE@@KEI1@性格の持ち主です')
            ,
            new SctItm('男性なら@GRADE@@KEID2@、女性なら@GRADE@@KEI1@性格の持ち主です')
            ,
            new SctItm('男性には@GRADE@@KEI1@人が多いようです')
            ,
            new SctItm('女性には@GRADE@@KEI1@人が多いです')
            ,
            new SctItm('@GRADE@@KEIM1@と@PEOPLE_ASSES@ています')
            ,
            new SctItm('@GRADE@@KEIM1@と@PEOPLE_ASSES@ているようです')
            ,
            new SctItm('@GRADE@@KEIM1@と@PEOPLE_ASSES@ています')
            ,
            new SctItm('@GRADE@@KEIM1@と@PEOPLE_ASSES@てしまうので注意が必要です')
            ,
            new SctItm('@GRADE@@KEIM1@と@PEOPLE_ASSES@ているのが難点です')
            ,
            new SctItm('@GRADE@@KEI1@のが今後の課題です')
            ,
            new SctItm('@GRADE@@KEI1@ので要注意です')
        ]
    }
}


class horo_docs_maker extends news_docs_maker {
    constructor(){
        super();
        this.dic_push(new selector_h_info());
        this.dic_push(new selector_h_info_init());
        this.dic_push(new selector_h_info_item());
        this.dic_push(new selector_h_info_end());
        this.dic_push(new selector_h_type());
        this.dic_push(new selector_h_type_init());
        this.dic_push(new selector_h_type_end());
        this.dic_push(new selector_h_title_name());
        this.dic_push(new selector_h_think());
        this.dic_push(new selector_h_write());
        this.dic_push(new selector_h_choise());
    }
}

class horo_docs_maker_items extends news_docs_maker {
    constructor(){
        super();
        this.dic_push(new First_love());
        this.dic_push(new First_job());
        this.dic_push(new First_health());
        this.dic_push(new First_studay());
        this.dic_push(new First_family());
        this.dic_push(new First_travel());
        this.dic_push(new First_game());
        this.dic_push(new First_sweets());
        this.dic_push(new First_food());
        this.dic_push(new First_music());
        this.dic_push(new First_sports());
    }
    
}







