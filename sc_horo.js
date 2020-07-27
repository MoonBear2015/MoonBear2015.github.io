"use strict";
function set_horo() {
    set_header_menu(5);
    scrollTo(0, 0);
    let html = '';
    html += '<div id="main_title">';
    html += '<h1>';
    html += 'Horoscope';
    html += '<small>';
    html += ' H00.00';
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
    let html = '';
    html += '<div id="horo_box">';
    html += '@P_ANIMAL@ <br>';
    html += '@P_ANIMAL@ <br>';
    html += '@P_ANIMAL@ <br>';
    html += '@P_ANIMAL@ <br>';
    html += '@P_ANIMAL@ <br>';
    html += '------- <br>';
    html += '@P_ANIMAL@ <br>';
    html += '@P_ANIMAL@ <br>';
    html += '@P_ANIMAL@ <br>';
    html += '@P_ANIMAL@ <br>';
    html += '@P_ANIMAL@ <br>';
    let maker = new horo_docs_maker();
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
// （固定）ステータス
class pointer_animal extends SctItm_PointSelector {
    constructor() {
        super('@P_ANIMAL@', '', '@ICON_HORO@');
        this.Add(itms_horo_animal);
    }
}
class horo_docs_maker extends news_docs_maker {
    constructor() {
        super();
        this.dic_push(new pointer_animal());
    }
}
