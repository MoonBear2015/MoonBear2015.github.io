"use strict";
function set_horo() {
    set_header_menu(5);
    scrollTo(0, 0);
    let html = '';
    html += '<div id="main_title">';
    html += '<h1>';
    html += 'Horoscope';
    html += '<small>';
    html += ' H00.02';
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
    let horoDays = Math.floor(365 / cntHoro);
    let dt = new Date();
    let html = '';
    for (let i = 0; i < 2; i++) {
        html += '<div id="horo_box">';
        for (let j = 0; j < cntHoro; j++) {
            let dt1 = first_date();
            dt1.setDate(dt1.getDate() + horoDays * j);
            alert(date_string(dt1));
            html += '@F_ANIMAL@ ' + date_MD_string(dt1) + '<br>';
        }
        html += '------- <br>';
        html += '</div>';
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
        fixAnimal.Reset();
    }
    return html;
}
// （固定）ステータス
class Fix_animal extends SctItm_FixSeq {
    constructor() {
        super('@F_ANIMAL@', '', '@ICON_HORO@');
        this.Add(itms_horo_animal);
    }
}
class horo_docs_maker extends news_docs_maker {
    constructor() {
        super();
        // this.dic_push(new Fix_animal());
    }
}
