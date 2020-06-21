function set_shop()
{
    set_header_menu(4);

    scrollTo(0,0);

    let html : string = '';
    html += '<div id="main_title">'
    html += '<h1>';
    html += 'Shop';
    html += '<small>';
    html += ' P00.00';
    html += '</small>';
    html += '</h1>';
    html += '</div>';

    for(let i = 0; i < 3; i++){
        html += '<p>[' + i.toString() + ']</p>' + make_shop();
    }

    let elem = document.getElementById('site_main');
    if (elem == null)
    {
        alert('not found "site_main"');
        return;
    }
    elem.innerHTML = ruby_change(html);
}

function make_shop()
{
    let html : string = '';

    html += '<div id="shop_box" ';
    html += 'style="';
    html += '">';

    html += '<h2 id="shop_title">';
    html += '@L_CAMPANY@ @L_SHOP@ @MODEL@';
    html += '</h2>';

    html += '<div id="shop_pic">';
    html += '<img src="pics/@PIC_SHOP@" width="100%">';
    html += '</div>';


    //---- this Q&A END
    html += '</div>';

    let maker = new shop_docs_maker();

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

// （固定）商品
class locker_shop extends SctItm_SelectLocker implements ISctItm_Selector{
    constructor(){
        super('@L_SHOP@','@PIC_SHOP@');
        this.Add(itms_shop);
    }
}
// （固定）商品
class locker_campany extends SctItm_SelectLocker implements ISctItm_Selector{
    constructor(){
        super('@L_CAMPANY@');
        this.Add(itms_campany);
    }
}

// 商品モデル
class selector_model extends SctItm_Selector implements ISctItm_Selector {
    constructor(){
        super('@MODEL@');
        this.Add(itms_model);
    }
}


class shop_docs_maker extends news_docs_maker {
    constructor(){
        super();
        this.dic_push(new locker_shop());
        this.dic_push(new locker_campany());
        this.dic_push(new selector_model());
    }
}


