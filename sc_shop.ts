function set_shop()
{
    set_header_menu(4);

    scrollTo(0,0);

    let html : string = '';
    html += '<div id="main_title">'
    html += '<h1>';
    html += 'Shop';
    html += '<small>';
    html += ' S00.18';
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
    let maker01 = new shop_docs_maker01();

    for(let i = 0; i < 3; i++){
        
        let makerC01 = new shop_docs_maker01();
        let html01 = '';
        html01 += '<div id="shop_con">'; // con 

        html01 += '<div id="shop_icon">'; // icon
        html01 += '<img src="pics/@ICON_SHOP@" width="95%">';
        html01 += '</div>'; // icon
        
        html += '<br>';
        
        html01 += '<div id="shop_doc">'; // doc
        
        
        html01 += '<div id="shop_catch">'; // catch
        html01 += '@CATCH@';
        html01 += '</div>'; // catch

        html01 = maker.gene_docs(html01);
        html01 = makerC01.gene_docs(html01);
        
        html01 += '<p id="shop_info">'; // info
        html01 += '@S_INFO_INIT@';
        for(let j = 0; j < 2; j++){
            html01 += '@S_INFO@';
        }
        html01 += '</p>'; // info
        
        html01 += '</div>'; // doc
        html01 += '</div>'; // con
        
        // html01 += '</div> a';
        
        let cnt = 0;
        while(true)
        {
            html01 = maker.gene_docs(html01);
            html01 = makerC01.gene_docs(html01);
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

    for(let h = 0; h < 4; h++){

        html += '@WRITER3@';

        html += '<div id="shop_comtitle">'; // catch
        html += '@SHOPCOM@';
        html += '</div>'; // catch

        let star_cnt : number = rnd_minmax(3,6);
        let star_miss : number = 5 - star_cnt;

        html += '<div id="shop_star">'; // catch
        html += '★'.repeat(star_cnt);
        html += '☆'.repeat(star_miss);
        html += '</div>'; // catch

        html += '<p id="shop_comdoc">'; // info
        for(let j = 0; j < 4; j++){
            html += '@SHOPCOMDOC@';
        }
        html += '</p>'; // catch

        html += '<br><br>';
    }


    //---- this shop END
    html += '</div>';

    let cnt = 0;
    while(true)
    {
        html = maker.gene_docs(html);
        html = maker01.gene_docs(html);
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
// （固定）場所
class locker_place extends SctItm_SelectLocker implements ISctItm_Selector {
    constructor(){
        super('@L_PLACE@','@ICON_SHOP@');
        this.Add(cods_to_itms(cods_place));
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
            new SctItm('@KEI1@@L_STATUS@を体感しよう')
            ,
            new SctItm('@KEI1@@L_STATUS@の@FUTURE@')
            ,
            new SctItm('さあ、@KEI1@@L_STATUS@を手に入れよう')
            ,
            new SctItm('@ASSES@@L_STATUS@')
            ,
            new SctItm('あなたの@PLACE@が@L_PLACE@となる')
            ,
            new SctItm('@FUTURE@の@L_PLACE@へようこそ')
            ,
            new SctItm('@L_PLACE@の@FUTURE@が変わる')
            ,
            new SctItm('@KEI1@@L_PLACE@が@SUCCESS@する')
            ,
            new SctItm('さあ、@KEI1@@L_PLACE@が待っている')
        ];
    }
}
// （固定）ステータス
class locker_status extends SctItm_SelectLocker implements ISctItm_Selector{
    constructor(){
        super('@L_STATUS@','@ICON_SHOP@');
        this.Add(itms_status);
    }
}

class selector_s_info_init extends SctItm_Selector implements ISctItm_Selector {
    constructor(){
        super('@S_INFO_INIT@');
        this.itms = [
            new SctItm('　@S_INFO00@。')
            ,
            new SctItm('　@S_INFO03@。')
        ]
    }
}


class selector_s_info extends SctItm_Selector implements ISctItm_Selector {
    constructor(){
        super('@S_INFO@');
        this.itms = [
            new SctItm('@S_INFO00@。')
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
        ]
    }
}
// 上（句点なし）
class selector_s_info01 extends SctItm_Selector implements ISctItm_Selector {
    constructor(){
        super('@S_INFO01@');
        this.itms = [
            new SctItm('@L_CAMPANY@社の@L_SHOP@は')
            ,
            new SctItm('@L_CAMPANY@社の@TECH@により')
            ,
            new SctItm('@L_CAMPANY@社の@CLASS@達により')
            ,
            new SctItm('@L_CAMPANY@社が誇る@KEI1@@CLASS@達によって')
            ,
            new SctItm('@L_CAMPANY@社が誇る@KEI1@@TECH@によって')
            ,
            new SctItm('@L_CAMPANY@社は@MANY@@KEY@を経て')
            ,
            new SctItm('@L_CAMPANY@社は@KEI1@@FUTURE@のために')
            ,
            new SctItm('@DO@する@FUTURE@に向けて')
            ,
            new SctItm('@DO@する@L_PLACE@のために')
        ]
    }
}
// 下（句点なし）
class selector_s_info02 extends SctItm_Selector implements ISctItm_Selector {
    constructor(){
        super('@S_INFO02@');
        this.itms = [
            new SctItm('@KEI1@@L_STATUS@が@SUCCESS@されました')
            ,
            new SctItm('@MANY@@L_STATUS@が@SUCCESS@致しました')
            ,
            new SctItm('@MANY@@THEY@から@MANY@@SAY2@を頂いております')
            ,
            new SctItm('@MANY@@THEY@から@MANY@@SAY2@や@SAY2@を頂いております')
            ,
            new SctItm('@KEI1@@FUTURE@の@SUCCESS@をお約束いたします')
            ,
            new SctItm('@KEI1@@L_PLACE@をご提供いたします')
        ]
    }
}
// 単　（句点なし）
class selector_s_info03 extends SctItm_Selector implements ISctItm_Selector {
    constructor(){
        super('@S_INFO03@');
        this.itms = [
            new SctItm('さあ、@KEI1@@FUTURE@の到来です')
            ,
            new SctItm('さあ、@L_SHOP@の全てが変わります')
            ,
            new SctItm('あなたの@HABIT@、@HABIT@、そして@HABIT@のお供にどうぞ')
            ,
            new SctItm('さあ、@KEI1@@L_CAMPANY@ @L_SHOP@と共に、@KEI1@@FUTURE@へ旅立ちましょう')
            ,
            new SctItm('さあ、@KEI1@@L_CAMPANY@ @L_SHOP@と共に、@HABIT@や@HABIT@へと繰り出しましょう')
            ,
            new SctItm('@KEI1@@L_CAMPANY@ @L_SHOP@と一緒に、@PLACE@や@PLACE@、@PLACE@へ向かいましょう')
            ,
            new SctItm('@KEI1@@PART@へのプレゼントに如何でしょうか')
            ,
            new SctItm('あなたの@KEI1@@PART@への贈り物に最適です')
            ,
            new SctItm('もう、@CLASS@を呼ぶ必要はありません')
            ,
            new SctItm('もう、@PLACE@に行かなくても大丈夫')
            ,
            new SctItm('@L_CAMPANY@ @L_SHOP@は、あなたとの出逢いを待っています')
            ,
            new SctItm('@L_CAMPANY@ @L_SHOP@は、あなたの@KEI1@@HABIT@を@SUCCESS@させるでしょう')
            ,
            new SctItm('もはや、@L_CAMPANY@ @L_SHOP@は手放せません')
            ,
            new SctItm('@L_CAMPANY@ @L_SHOP@の@KEI1@新モデルが誕生しました')
            ,
            new SctItm('これから、@L_PLACE@の@FUTURE@が変わります')
            ,
            new SctItm('あなたの@PLACE@が@L_PLACE@へと早変わり')
            ,
            new SctItm('@L_SHOP@があなたの@L_PLACE@となるでしょう')
            ,
            new SctItm('もはや、@L_PLACE@では欠かせないアイテムです')
            ,
            new SctItm('もう、@L_SHOP@の無い@L_PLACE@など有り得ません')
        ]
    }
}

// コメント
class selector_ShopComentTitle extends SctItm_Selector implements ISctItm_Selector {
    constructor(){
        super('@SHOPCOM@');
        this.itms = [
            new SctItm('待ってました！ @L_CAMPANY@ @L_SHOP@！')
            ,
            new SctItm('遂に来た！ これぞ@FUTURE@の@L_SHOP@です！')
            ,
            new SctItm('@L_CAMPANY@！　@L_CAMPANY@！　@L_CAMPANY@！')
            ,
            new SctItm('@L_CAMPANY@ @L_SHOP@！　もう待ちきれない！')
            ,
            new SctItm('@L_CAMPANY@ @L_SHOP@！　正に@COUNTRY@の@NICK@！')
            ,
            new SctItm('@L_CAMPANY@ @L_SHOP@！　ああ、なんて@KEI1@！')
            ,
            new SctItm('@L_CAMPANY@ @L_SHOP@！　これで勝てる！')
            ,
            new SctItm('なんて@KEI1@@L_SHOP@なのだろう！')
            ,
            new SctItm('もう@L_CAMPANY@の@L_SHOP@が無ければ生きていけません！')
            ,
            new SctItm('@COUNTRY@でNo.1！ @L_CAMPANY@の@L_SHOP@！')
        ];
    }
}
// キャッチコピー
class selector_ShopComentDoc01 extends SctItm_Selector implements ISctItm_Selector {
    constructor(){
        super('@SHOPCOMDOC@');
        this.itms = [
            new SctItm('ずっと@PLACE@で@L_CAMPANY@の@L_SHOP@を使っています。')
            ,
            new SctItm('@L_SHOP@は@L_CAMPANY@でなければ有り得ません。')
            ,
            new SctItm('今度の@L_SHOP@は実に@KEI2@で@KEIM2@です。')
            ,
            new SctItm('もう@L_CAMPANY@の@L_SHOP@は手放せません。')
            ,
            new SctItm('すぐに@PART@や@PART@に奨めなければ。')
            ,
            new SctItm('今度、@L_CAMPANY@ @L_SHOP@が我が社で採用されました。')
            ,
            new SctItm('今では@CLASS@の誰もが@L_CAMPANY@ @L_SHOP@を使っています。')
            ,
            new SctItm('正に@L_CAMPANY@ @L_SHOP@は@CLASS@の必需品です。')
            ,
            new SctItm('これで@CLASS@を呼ぶ必要はありません。')
            ,
            new SctItm('@L_CAMPANY@ @L_SHOP@なら値段なんて気にしません。')
            ,
            new SctItm('@PART@や@PART@、@PART@にも買ってあげなければ。')
            ,
            new SctItm('もうこれで@PLACE@に行かなくてすみます。')
            ,
            new SctItm('もう@L_CAMPANY@の@L_SHOP@が無ければ生きていけません。')
            ,
            new SctItm('@L_CAMPANY@ @L_SHOP@は@PLACE@に行くときの必需品です。')
            ,
            new SctItm('私を@KEY@や@KEY@から救ってくれたのが@L_CAMPANY@ @L_SHOP@だったのです。')
            ,
            new SctItm('私は@L_CAMPANY@ @L_SHOP@のお陰で悩みから解放されました。')
            ,
            new SctItm('私は@L_CAMPANY@ @L_SHOP@のお陰で@CLASS@になれました。')
            ,
            new SctItm('私は@L_CAMPANY@ @L_SHOP@のお陰で@SUCCESS@できました。')
            ,
            new SctItm('@L_CAMPANY@ @L_SHOP@が無ければ、ずっと@CLASS@のままでした。')
        ];
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

        this.dic_push(new selector_ShopComentTitle());
        this.dic_push(new selector_ShopComentDoc01());

    }
}
class shop_docs_maker01 extends news_docs_maker {
    constructor(){
        super();
        this.dic_push(new locker_status());
        this.dic_push(new locker_place());
    }
}




