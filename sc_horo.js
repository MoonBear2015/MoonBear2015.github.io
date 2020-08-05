"use strict";
function set_horo() {
    set_header_menu(5);
    scrollTo(0, 0);
    let html = '';
    html += '<div id="main_title">';
    html += '<h1>';
    html += 'Horoscope';
    html += '<small>';
    html += ' H00.06';
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
    let fixAnimal = new Fix_animal();
    maker.dic_push(fixAnimal);
    let cntHoro = rnd_minmax(4, fixAnimal.countItm + 1);
    let dt = new Date();
    let html = '';
    let days = SplitYearDays(cntHoro);
    html += '<div id="horo_box">';
    for (let j = 0; j < cntHoro; j++) {
        html += '<div id="horo_line">';
        html += '<div id="horo_col_icon">';
        html += '<img src="pics/@ICON_HORO@" width="50" height="50">';
        html += '</div>';
        html += '<div id="horo_col_name">';
        html += '@F_ANIMAL_B@ 座';
        html += '</div>';
        html += '<div id="horo_col_start">';
        html += date_MD_string(days[j].st);
        html += '</div>';
        html += '<div id="horo_col_to">';
        html += ' ~ ';
        html += '</div>';
        html += '<div id="horo_col_end">';
        html += date_MD_string(days[j].ed);
        html += '</div>';
        html += '</div>';
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
        html += '<div id="horo_sent">';
        html += '<div id="horo_sent_icon">';
        html += '<img src="pics/@ICON_HORO@" width="100%">';
        html += '</div>';
        html += '<div id="horo_sent_icon_name" width="100%">';
        html += '@F_ANIMAL@';
        html += '</div>';
        html += '<div id="horo_sent_title">';
        html += '<small>☆ ★ </small>';
        html += '@F_ANIMAL_B@ 座';
        html += '<small> ★ ☆</small>';
        html += '</div>';
        html += '<div id="horo_sent_days">';
        html += date_MD_string(days[j].st);
        html += ' ~ ';
        html += date_MD_string(days[j].ed);
        html += '</div>';
        html += '<p id="horo_sent_info">'; // info
        html += '　@H_INFO_INIT@、';
        // for(let j = 0; j < 2; j++){
        //     html += '@H_INFO@。';
        // }
        html += '</p>'; // info
        html += '</div>';
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
class Fix_animal extends SctItm_FixSeq {
    constructor() {
        super('@F_ANIMAL@', '@F_ANIMAL_B@', '@ICON_HORO@');
        this.Add(itms_horo_animal);
    }
}
class selector_h_info_init extends SctItm_Selector {
    constructor() {
        super('@H_INFO_INIT@');
        this.itms = [
            new SctItm('@F_ANIMAL_B@座の人の特徴は、'),
            new SctItm('@F_ANIMAL_B@座の人の多くは、'),
            new SctItm('@F_ANIMAL_B@座の人にありがちなことは、'),
            new SctItm('@F_ANIMAL_B@座の人の性格は、')
        ];
    }
}
class horo_docs_maker extends news_docs_maker {
    constructor() {
        super();
        this.dic_push(new selector_h_info_init());
        // this.dic_push(new Fix_animal());
    }
}
