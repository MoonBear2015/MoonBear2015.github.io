"use strict";
function set_horo() {
    set_header_menu(5);
    scrollTo(0, 0);
    let html = '';
    html += '<div id="main_title">';
    html += '<h1>';
    html += 'Horoscope';
    html += '<small>';
    html += ' H00.17';
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
    let fixAnimal = new Fix_stars();
    maker.dic_push(fixAnimal);
    let cntHoro = rnd_minmax(4, fixAnimal.countItm + 1);
    let fixItem = new Fix_items();
    maker.dic_push(fixItem);
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
        html += '<img src="pics/@ICON_HORO@" width="90%" height="90%">';
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
        let cnt0 = 0;
        while (true) {
            html = maker.gene_docs(html);
            cnt0++;
            let chk = html.indexOf('@');
            if (chk < 0)
                break;
            if (cnt0 > 10) {
                alert('over work : ' + chk.toString());
                break;
            }
        }
        fixAnimal.Next();
    }
    html += '</div>';
    fixAnimal.Restart();
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
        let cnt0 = 0;
        while (true) {
            html = maker.gene_docs(html);
            cnt0++;
            let chk = html.indexOf('@');
            if (chk < 0)
                break;
            if (cnt0 > 10) {
                alert('over work : ' + chk.toString());
                break;
            }
        }
        fixAnimal.Next();
        html += '<p id="horo_sent_items">'; // 
        for (let k = 0; k < cntItem; k++) {
            html += '@F_ITEM_A @F_ITEM_B ';
            html += '<br>';
            let cnt1 = 0;
            while (true) {
                html = maker.gene_docs(html);
                cnt1++;
                let chk = html.indexOf('@');
                if (chk < 0)
                    break;
                if (cnt1 > 10) {
                    alert('over work : ' + chk.toString());
                    break;
                }
            }
            fixItem.Next();
        }
        html += '</p>'; // info
        fixItem.Restart();
        html += '</div>';
    }
    html += '</div>';
    let cnt1 = 0;
    while (true) {
        html = maker.gene_docs(html);
        cnt1++;
        let chk = html.indexOf('@');
        if (chk < 0)
            break;
        if (cnt1 > 10) {
            alert('over work : ' + chk.toString());
            break;
        }
    }
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
        super('@F_ITEM');
        this.Add(itms_horo_item);
    }
}
// 解説
class selector_h_info extends SctItm_Selector {
    constructor() {
        super('@H_INFO@');
        this.itms = [
            new SctItm('@H_INFO_INIT@、@H_INFO_END@ています。'),
            new SctItm('@H_INFO_INIT@すが、@H_INFO_END@ています。'),
            new SctItm('@H_INFO_INIT@、@H_INFO_END@、@H_INFO_END@ています。'),
            new SctItm('@H_INFO_INIT@すが、@H_INFO_END@、@CONECT3@、@H_INFO_END@ています。')
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
// 解説 結び
class selector_h_info_end extends SctItm_Selector {
    constructor() {
        super('@H_INFO_END@');
        this.itms = [
            new SctItm('@MANYPEOPLE@に親しまれ'),
            new SctItm('@CLASS@の象徴として愛され'),
            new SctItm('@PEOPLE@のシンボルに採用され'),
            new SctItm('@COUNTRY@神話に語られ'),
            new SctItm('@COUNTRY@民謡にも歌われ'),
            new SctItm('「@COUNTRY@の@PART@」と親しまれ')
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
            new SctItm('@F_STAR_B@座の人の特徴は')
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
            new SctItm('女性には@GRADE@@KEI1@人が多いようです'),
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
        this.dic_push(new selector_h_info_end());
        this.dic_push(new selector_h_type());
        this.dic_push(new selector_h_type_init());
        this.dic_push(new selector_h_type_end());
        // this.dic_push(new Fix_animal());
    }
}