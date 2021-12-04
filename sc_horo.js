"use strict";
function set_horo() {
    set_header_menu(5);
    scrollTo(0, 0);
    let html = '';
    html += '<div id="main_title">';
    html += '<h1>';
    html += 'Horoscope';
    html += '<small>';
    html += ' H00.34';
    html += '</small>';
    html += '</h1>';
    html += '</div>';
    html += make_horo();
    let elem = document.getElementById('site_main');
    if (elem == null) {
        alert('not found "site_main"');
        return;
    }
    elem.innerHTML = ruby_change(html);
}
function make_horo() {
    let maker = new horo_docs_maker();
    let fixStars = new Fix_stars();
    maker.dic_push(fixStars);
    let cntHoro = rnd_minmax(4, fixStars.countItm + 1);
    let makerItms = new horo_docs_maker_items();
    let fixItem = new Fix_items();
    makerItms.dic_push(fixItem);
    let cntItem = 2;
    let dt = new Date();
    let html = '';
    let days = SplitYearDays(cntHoro);
    html += '<div id="horo_box">';
    for (let j = 0; j < cntHoro; j++) {
        if (j == cntHoro - 3) {
            html += '<span id="horo_00"></span>';
        }
        html += '<a href="#horo_';
        html += ('00' + j).slice(-2);
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
    for (let j = 0; j < cntHoro; j++) {
        html += '<span id="horo_';
        html += ('00' + (j + 1).toString()).slice(-2);
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
        html += '　@H_INFO@';
        html += '</p>'; // info
        html += '<p id="horo_sent_type">'; // 
        html += '　@H_TYPE_INIT@';
        for (let j = 0; j < 2; j++) {
            html += '@H_TYPE@';
        }
        html += '@H_TYPE_END@。';
        html += '</p>'; // info
        html = maker.gene_docs(html);
        fixStars.Next();
        html += '<p id="horo_sent_items">'; // 
        for (let k = 0; k < cntItem; k++) {
            html += '<img src="pics/@ICON_HOROITEM@" width="30px" height="50px">';
            html += '@F_ITEM@ @F_ITEM@ @F_ITEM@ @F_ITEM@';
            html += '<br>';
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
class Fix_stars extends SctItm_FixSeq {
    constructor() {
        super('@F_STAR@', '@F_STAR_B@', '@ICON_HORO@');
        this.Add(itms_horo_star);
    }
}
// （固定）占い・項目
class Fix_items extends SctItm_FixSeq {
    constructor() {
        super('@F_ITEM@');
        this.itms = [
            new SctItm('@I_LOVE@'),
            new SctItm('@I_JOB@'),
            new SctItm('@I_HEALTH@')
        ];
    }
}
// （固定）名詞・人物・組織　～は・～が・～の
class First_love extends SctItm_FirstLocker2 {
    constructor() {
        super('@I_LOVE@', '', '@ICON_HOROITEM@');
        this.itms = [
            new SctItm('☆★愛情★☆<br>', 'HORO/love.png', 'Love'),
            new SctItm('@THEY@'),
            new SctItm('@CLASS@'),
            new SctItm('@PEOPLE@')
        ];
    }
}
// （固定）名詞・人物・組織　～は・～が・～の
class First_job extends SctItm_FirstLocker2 {
    constructor() {
        super('@I_JOB@', '', '@ICON_HOROITEM@');
        this.itms = [
            new SctItm('☆★仕事運★☆<br>', 'HORO/job.png', 'Business'),
            new SctItm('就職'),
            new SctItm('転職')
        ];
    }
}
// （固定）名詞・人物・組織　～は・～が・～の
class First_health extends SctItm_FirstLocker2 {
    constructor() {
        super('@I_HEALTH@', '', '@ICON_HOROITEM@');
        this.itms = [
            new SctItm('☆★健康★☆<br>', 'HORO/health.png', 'Health'),
            new SctItm('体重'),
            new SctItm('身長')
        ];
    }
}
// 解説
class selector_h_info extends SctItm_Selector {
    constructor() {
        super('@H_INFO@');
        this.itms = [
            new SctItm('@H_INFO_INIT@、@H_INFO_ITEM@@H_INFO_END@ています。'),
            new SctItm('@H_INFO_INIT@すが、@H_INFO_ITEM@@H_INFO_END@ています。'),
            new SctItm('@H_INFO_INIT@、@H_INFO_ITEM@@H_INFO_END@、@H_INFO_END@ています。'),
            new SctItm('@H_INFO_INIT@すが、@H_INFO_ITEM@@H_INFO_END@、@CONECT3@、@H_INFO_ITEM@@H_INFO_END@ています。')
        ];
    }
}
// 解説 開始
class selector_h_info_init extends SctItm_Selector {
    constructor() {
        super('@H_INFO_INIT@');
        this.itms = [
            new SctItm('@F_STAR_B@座は@DIR@の夜空に輝く星座で'),
            new SctItm('@F_STAR_B@座は代表的な@SEASON@の星座で'),
            new SctItm('@F_STAR_B@座は@COUNTRY@に伝わる星座で')
        ];
    }
}
// 解説 主語
class selector_h_info_item extends SctItm_Selector {
    constructor() {
        super('@H_INFO_ITEM@');
        this.itms = [
            new SctItm('その姿は@GRADE@@KEI3@ので'),
            new SctItm('その@F_STAR_B@は@ANIMAL@の@BODY@を持つと'),
            new SctItm('その@F_STAR_B@は@NICK@瓜二つだと')
        ];
    }
}
// 解説 結び
class selector_h_info_end extends SctItm_Selector {
    constructor() {
        super('@H_INFO_END@');
        this.itms = [
            new SctItm('@COUNTRY@@HISTORY@に@H_WRITE@'),
            new SctItm('@COUNTRY@@HISTORY@に@H_WRITE@'),
            new SctItm('@WHO3@@MANYPEOPLE@に@H_THINK@'),
            new SctItm('@H_TITLE_NAME@に@H_THINK@'),
            new SctItm('@COUNTRY@の「@H_TITLE_NAME@」に@H_CHOISE@'),
            new SctItm('@THEY@より「@H_TITLE_NAME@」に@H_CHOISE@')
        ];
    }
}
class selector_h_title_name extends SctItm_Selector {
    constructor() {
        super('@H_TITLE_NAME@');
        this.itms = [
            new SctItm('@THEY@の@PART@'),
            new SctItm('@COUNTRY@の@PART@'),
            new SctItm('@COUNTRY@の@THINK@'),
            new SctItm('@COUNTRY@の@CLASS@'),
            new SctItm('@COUNTRY@の@FUTURE@'),
            new SctItm('@COUNTRY@の@NICK@'),
            new SctItm('@CLASS@の@PART@'),
            new SctItm('@CLASS@の@THINK@'),
            new SctItm('@CLASS@の@NICK@'),
            new SctItm('@PEOPLE@の中の@PEOPLE@'),
            new SctItm('@WHO3@@PEOPLE@')
        ];
    }
}
// 解説 結び
class selector_h_think extends SctItm_Selector {
    constructor() {
        super('@H_THINK@');
        this.itms = [
            new SctItm('親しまれ'),
            new SctItm('愛され'),
            new SctItm('讃えられ'),
            new SctItm('恐れられ'),
            new SctItm('語り継がれ')
        ];
    }
}
class selector_h_write extends SctItm_Selector {
    constructor() {
        super('@H_WRITE@');
        this.itms = [
            new SctItm('記され'),
            new SctItm('記載され'),
            new SctItm('記述され'),
            new SctItm('掲載され'),
            new SctItm('記録され'),
            new SctItm('刻まれ'),
            new SctItm('描かれ')
        ];
    }
}
// 解説 結び
class selector_h_choise extends SctItm_Selector {
    constructor() {
        super('@H_CHOISE@');
        this.itms = [
            new SctItm('定められ'),
            new SctItm('例えられ'),
            new SctItm('選ばれ'),
            new SctItm('任命され'),
            new SctItm('列せられ'),
            new SctItm('指定され'),
            new SctItm('任命され'),
            new SctItm('祭り上げられ')
        ];
    }
}
// 性格 開始
class selector_h_type_init extends SctItm_Selector {
    constructor() {
        super('@H_TYPE_INIT@');
        this.itms = [
            new SctItm('@F_STAR_B@座の人は'),
            new SctItm('@F_STAR_B@座の人の多くは'),
            new SctItm('@F_STAR_B@座の人にありがちなことは'),
            new SctItm('@F_STAR_B@座の人の特徴は'),
            new SctItm('@F_STAR_B@座の人は基本的に')
        ];
    }
}
// 性格
class selector_h_type extends SctItm_Selector {
    constructor() {
        super('@H_TYPE@');
        this.itms = [
            new SctItm('@H_TYPE_END@。'),
            new SctItm('@H_TYPE_END@。@CONECT3@、'),
            new SctItm('@H_TYPE_END@が、'),
            new SctItm('@H_TYPE_END@から、'),
            new SctItm('@H_TYPE_END@ので、')
        ];
    }
}
// 性格 結び
class selector_h_type_end extends SctItm_Selector {
    constructor() {
        super('@H_TYPE_END@');
        this.itms = [
            new SctItm('@GRADE@@KEI1@性格の持ち主です'),
            new SctItm('男性なら@GRADE@@KEID2@、女性なら@GRADE@@KEI1@性格の持ち主です'),
            new SctItm('男性には@GRADE@@KEI1@人が多いようです'),
            new SctItm('女性には@GRADE@@KEI1@人が多いです'),
            new SctItm('@GRADE@@KEIM1@と@PEOPLE_ASSES@ています'),
            new SctItm('@GRADE@@KEIM1@と@PEOPLE_ASSES@ているようです'),
            new SctItm('@GRADE@@KEIM1@と@PEOPLE_ASSES@ています'),
            new SctItm('@GRADE@@KEIM1@と@PEOPLE_ASSES@てしまうので注意が必要です'),
            new SctItm('@GRADE@@KEIM1@と@PEOPLE_ASSES@ているのが難点です'),
            new SctItm('@GRADE@@KEI1@のが今後の課題です'),
            new SctItm('@GRADE@@KEI1@ので要注意です')
        ];
    }
}
class horo_docs_maker extends news_docs_maker {
    constructor() {
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
    constructor() {
        super();
        this.dic_push(new First_love());
        this.dic_push(new First_job());
        this.dic_push(new First_health());
    }
}
