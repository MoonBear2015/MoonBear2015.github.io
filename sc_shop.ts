function set_shop()
{
    set_header_menu(4);

    scrollTo(0,0);

    let html : string = '';
    html += '<div id="main_title">'
    html += '<h1>';
    html += 'Shop';
    html += '<small>';
    html += ' S00.05';
    html += '</small>';
    html += '</h1>';
    html += '</div>';

    for(let i = 0; i < 10; i++){
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

    for(let i = 0; i < 3; i++){

        let maker01 = new shop_docs_maker01();
        let html01 = '';

        html01 += '<div id="shop_catch">';
        html01 += '@CATCH@';
        html01 += '</div>';
        // html01 += '<br>';

        html01 += '<p id="shop_info">';
        html01 += '@S_INFO_INIT@';
        for(let j = 0; j < 2; j++){
            html01 += '@S_INFO@';
        }
        html01 += '</p>';
        let cnt = 0;
        while(true)
        {
            html01 = maker.gene_docs(html01);
            html01 = maker01.gene_docs(html01);
            cnt++;
            let chk = html01.indexOf('@');
            if (chk < 0) break;
            if (cnt > 10)
            {
                alert('over work : ' + chk.toString());
                break;
            }
        }
        html += html01;
        html += '<br>';

    }

    //---- this Q&A END
    html += '</div>';

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
// ステータス
class selector_status extends SctItm_Selector implements ISctItm_Selector {
    constructor(){
        super('@STATUS@');
        this.Add(itms_status);
    }
}
// テクノロジー
class selector_tech extends SctItm_Selector implements ISctItm_Selector {
    constructor(){
        super('@TECH@');
        this.Add(itms_tech);
    }
}
// 成功・達成
class selector_success extends SctItm_Selector implements ISctItm_Selector {
    constructor(){
        super('@SUCCESS@');
        this.Add(itms_success);
    }
}

// キャッチコピー
class selector_catch extends SctItm_Selector implements ISctItm_Selector {
    constructor(){
        super('@CATCH@');
        this.itms = [
            new SctItm('@KEI1@@L_STATUS@')
            ,
            new SctItm('@KEI1@@L_STATUS@の@SUCCESS@')
            ,
            new SctItm('@KEI1@@L_STATUS@をあなたに')
            ,
            new SctItm('@KEI1@@L_STATUS@と共に')
            ,
            new SctItm('さあ、@KEI1@@L_STATUS@を手に入れよう')
            ,
            new SctItm('@ASSES@@L_STATUS@')
        ];
    }
}
// （固定）ステータス
class locker_status extends SctItm_SelectLocker implements ISctItm_Selector{
    constructor(){
        super('@L_STATUS@');
        this.Add(itms_status);
    }
}

class selector_s_info_init extends SctItm_Selector implements ISctItm_Selector {
    constructor(){
        super('@S_INFO_INIT@');
        this.itms = [
            new SctItm('　@S_INFO00@。')
        ]
    }
}


class selector_s_info extends SctItm_Selector implements ISctItm_Selector {
    constructor(){
        super('@S_INFO@');
        this.itms = [
            new SctItm('@S_INFO00@。')
            ,
            new SctItm('@CONECT@、@S_INFO00@。')
            ,
            new SctItm('@S_INFO03@。')
        ]
    }
}
// 上下（句点なし）
class selector_s_info00 extends SctItm_Selector implements ISctItm_Selector {
    constructor(){
        super('@S_INFO00@');
        this.itms = [
            new SctItm('@S_INFO01@、@S_INFO02@')
            ,
            new SctItm('@S_INFO02@が、@S_INFO00@')
            ,
            new SctItm('@S_INFO01@、@S_INFO02@が、@S_INFO00@')
        ]
    }
}
// 上（句点なし）
class selector_s_info01 extends SctItm_Selector implements ISctItm_Selector {
    constructor(){
        super('@S_INFO01@');
        this.itms = [
            new SctItm('@L_CAMPANY@ @L_SHOP@は')
            ,
            new SctItm('@L_CAMPANY@社の@TECH@により')
            ,
            new SctItm('@L_CAMPANY@社の@CLASS@達により')
            ,
            new SctItm('@L_CAMPANY@社が誇る@KEI1@@CLASS@達によって')
            ,
            new SctItm('@L_CAMPANY@社が誇る@KEI1@@TECH@によって')
            ,
            new SctItm('@L_CAMPANY@社は@MANY@@SAY2@を頂き')
            ,
            new SctItm('@L_CAMPANY@社は@MANY@@KEY@を経て')
            ,
            new SctItm('@L_CAMPANY@社は@KEI1@@FUTURE@のために')
        ]
    }
}
// 下（句点なし）
class selector_s_info02 extends SctItm_Selector implements ISctItm_Selector {
    constructor(){
        super('@S_INFO02@');
        this.itms = [
            new SctItm('@MANY@@L_STATUS@が@SUCCESS@致しました')
            ,
            new SctItm('@MANY@@L_STATUS@を@SUCCESS@させました')
            ,
            new SctItm('@MANY@@THEY@から@MANY@@SAY2@を頂いております')
            ,
            new SctItm('@MANY@@THEY@から@MANY@@SAY2@や@SAY2@を頂いております')
            ,
            new SctItm('@KEI1@@FUTURE@の@SUCCESS@をお約束いたします')
        ]
    }
}
// 単　（句点なし）
class selector_s_info03 extends SctItm_Selector implements ISctItm_Selector {
    constructor(){
        super('@S_INFO03@');
        this.itms = [
            new SctItm('あなたの@HABIT@、@HABIT@、そして@HABIT@のお供にどうぞ')
            ,
            new SctItm('さあ、@KEI1@@L_CAMPANY@ @L_SHOP@と共に、@KEI1@@FUTURE@へ旅立ちましょう')
            ,
            new SctItm('さあ、@KEI1@@L_CAMPANY@ @L_SHOP@と共に、@HABIT@や@HABIT@へと繰り出しましょう')
            ,
            new SctItm('@KEI1@@PART@へのプレゼントに如何でしょうか')
            ,
            new SctItm('あなたの@KEI1@@PART@への贈り物に最適です')
            ,
            new SctItm('@L_CAMPANY@ @L_SHOP@は、あなたとの出逢いを待っています')
            ,
            new SctItm('@L_CAMPANY@ @L_SHOP@は、あなたの@KEI1@@HABIT@を@SUCCESS@させるでしょう')
        ]
    }
}

class shop_docs_maker extends news_docs_maker {
    constructor(){
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
        this.dic_push(new selector_s_info00());
        this.dic_push(new selector_s_info01());
        this.dic_push(new selector_s_info02());
        this.dic_push(new selector_s_info03());
    }
}
class shop_docs_maker01 extends news_docs_maker {
    constructor(){
        super();
        this.dic_push(new locker_status());
    }
}




