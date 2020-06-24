"use strict";
function set_shop() {
    set_header_menu(4);
    scrollTo(0, 0);
    let html = '';
    html += '<div id="main_title">';
    html += '<h1>';
    html += 'Shop';
    html += '<small>';
    html += ' P00.02';
    html += '</small>';
    html += '</h1>';
    html += '</div>';
    for (let i = 0; i < 3; i++) {
        html += '<p>[' + i.toString() + ']</p>' + make_shop();
    }
    let elem = document.getElementById('site_main');
    if (elem == null) {
        alert('not found "site_main"');
        return;
    }
    elem.innerHTML = ruby_change(html);
}
function make_shop() {
    let html = '';
    html += '<div id="shop_box"';
    html += 'style="';
    html += 'text-aligh = center';
    html += '"';
    html += '>';
    // html += 'style="';
    // html += 'text-aligh = center';
    // html += '">';
    html += '<div id="shop_title">';
    html += '@L_CAMPANY@ @L_SHOP@ @MODEL@';
    html += '</div>';
    html += '<div id="shop_pic">';
    html += '<img src="pics/@PIC_SHOP@" width="100%">';
    html += '</div>';
    let maker = new shop_docs_maker();
    for (let i = 0; i < 3; i++) {
        let maker01 = new shop_docs_maker01();
        let html01 = '';
        html01 += '<div id="shop_catch">';
        html01 += '@CATCH@';
        html01 += '</div>';
        // html01 += '<br>';
        html01 += '<p id="shop_info">';
        html01 += '@S_INFO_INIT@';
        for (let j = 0; j < 5; j++) {
            html01 += '@S_INFO@';
        }
        html01 += '</p>';
        let cnt = 0;
        while (true) {
            html01 = maker.gene_docs(html01);
            html01 = maker01.gene_docs(html01);
            cnt++;
            let chk = html01.indexOf('@');
            if (chk < 0)
                break;
            if (cnt > 10) {
                alert('over work : ' + chk.toString());
                break;
            }
        }
        html += html01;
    }
    //---- this Q&A END
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
    return html;
}
// （固定）商品
class locker_shop extends SctItm_SelectLocker {
    constructor() {
        super('@L_SHOP@', '@PIC_SHOP@');
        this.Add(itms_shop);
    }
}
// （固定）商品
class locker_campany extends SctItm_SelectLocker {
    constructor() {
        super('@L_CAMPANY@');
        this.Add(itms_campany);
    }
}
// 商品モデル
class selector_model extends SctItm_Selector {
    constructor() {
        super('@MODEL@');
        this.Add(itms_model);
    }
}
// ステータス
class selector_status extends SctItm_Selector {
    constructor() {
        super('@STATUS@');
        this.Add(itms_status);
    }
}
// テクノロジー
class selector_tech extends SctItm_Selector {
    constructor() {
        super('@TECH@');
        this.Add(itms_tech);
    }
}
// 成功・達成
class selector_success extends SctItm_Selector {
    constructor() {
        super('@SUCCESS@');
        this.Add(itms_success);
    }
}
// キャッチコピー
class selector_catch extends SctItm_Selector {
    constructor() {
        super('@CATCH@');
        this.itms = [
            new SctItm('@KEI@@L_STATUS@'),
            new SctItm('@MOVE@@L_STATUS@')
        ];
    }
}
// （固定）ステータス
class locker_status extends SctItm_SelectLocker {
    constructor() {
        super('@L_STATUS@');
        this.Add(itms_status);
    }
}
class selector_s_info_init extends SctItm_Selector {
    constructor() {
        super('@S_INFO_INIT@');
        this.itms = [
            new SctItm('　@S_INFO01@、@S_INFO02@。'),
            new SctItm('　@S_INFO01@、@S_INFO02@。')
        ];
    }
}
class selector_s_info extends SctItm_Selector {
    constructor() {
        super('@S_INFO@');
        this.itms = [
            new SctItm('@CONECT@、@S_INFO01@、@S_INFO02@。'),
            new SctItm('@CONECT@、@S_INFO@')
        ];
    }
}
class selector_s_info01 extends SctItm_Selector {
    constructor() {
        super('@S_INFO01@');
        this.itms = [
            new SctItm('@L_CAMPANY@の@TECH@により'),
            new SctItm('@L_CAMPANY@が誇る@TECH@は')
        ];
    }
}
class selector_s_info02 extends SctItm_Selector {
    constructor() {
        super('@S_INFO02@');
        this.itms = [
            new SctItm('@MANY@@L_STATUS@が@SUCCESS@されました'),
            new SctItm('@MANY@@L_STATUS@を@SUCCESS@しました')
        ];
    }
}
class shop_docs_maker extends news_docs_maker {
    constructor() {
        super();
        this.dic_push(new locker_shop());
        this.dic_push(new locker_campany());
        this.dic_push(new selector_model());
        this.dic_push(new selector_status());
        this.dic_push(new selector_catch());
        this.dic_push(new selector_tech());
        this.dic_push(new selector_success());
        this.dic_push(new selector_s_info_init());
        this.dic_push(new selector_s_info());
        this.dic_push(new selector_s_info01());
        this.dic_push(new selector_s_info02());
    }
}
class shop_docs_maker01 extends news_docs_maker {
    constructor() {
        super();
        this.dic_push(new locker_status());
    }
}
