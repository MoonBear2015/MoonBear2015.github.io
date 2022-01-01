"use strict";
function set_shop() {
    set_header_menu(4);
    scrollTo(0, 0);
    let html = '';
    html += '<div id="main_title">';
    html += '<h1>';
    html += 'Shop';
    html += '<small>';
    html += ' S00.49';
    html += '</small>';
    html += '</h1>';
    html += '</div>';
    for (let i = 0; i < 10; i++) {
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
    html += '<div id="shop_box">';
    html += '<div id="shop_title">';
    html += '@L_CAMPANY@ @L_SHOP@ @MODEL@';
    html += '</div>';
    html += '<div id="shop_pic">';
    html += '<img src="pics/@PIC_SHOP@" width="100%">';
    html += '</div>';
    let maker = new shop_docs_maker();
    let maker01 = new shop_docs_maker01();
    for (let i = 0; i < 4; i++) {
        let makerC01 = new shop_docs_maker01();
        let html01 = '';
        html01 += '<div id="shop_con">'; // con 
        html01 += '<div id="shop_icon">'; // icon
        html01 += '<img src="pics/@ICON_SHOP@" width="95%">';
        html01 += '</div>'; // icon
        html01 += '<br>';
        html01 += '<div id="shop_catch">'; // catch
        html01 += '@CATCH@';
        html01 += '</div>'; // catch
        // html01 += '<div id="shop_doc">'; // doc
        html01 = maker.gene_docs(html01, true);
        html01 = makerC01.gene_docs(html01, true);
        html01 += '<p id="shop_info">'; // info
        html01 += '@S_INFO_INIT@';
        for (let j = 0; j < 2; j++) {
            html01 += '@S_INFO@';
        }
        html01 += '</p>'; // info
        // html01 += '</div>'; // doc
        html01 += '</div>'; // con
        // html01 += '</div> a';
        let cnt = 0;
        while (true) {
            html01 = maker.gene_docs(html01, true);
            html01 = makerC01.gene_docs(html01, true);
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
        html += '<br>';
    }
    let scores = new Array();
    let scnt = [0, 0, 0, 0, 0, 0];
    let ucnt = [0, 0, 0, 0, 0, 0];
    let reviewCnt = 8;
    let usercnt = rnd_max(1000) + 100;
    for (let i = 0; i < reviewCnt; i++) {
        let s = rnd_minmax(1, 6);
        let user = usercnt + rnd_max(100);
        scores.push(s);
        ucnt[s] += user;
        scnt[s]++;
    }
    let all = 0;
    let alluser = 0;
    let max = 0;
    for (let i = 0; i < 6; i++) {
        ucnt[i] += rnd_max(10);
        if (max < ucnt[i]) {
            max = ucnt[i];
        }
        all += ucnt[i] * i;
        alluser += ucnt[i];
    }
    let gauge = max / 15;
    let score_ave = Math.floor((all / alluser) * 10) / 10;
    html += '<div id="shop_review_title">'; // review_title
    html += 'レビュー';
    html += '</div>'; // review_title
    html += '<div id="shop_review_all">'; // review_all
    html += '<div id="shop_review_all01">'; // review_all01
    html += '<div id="shop_allscore">'; // allscore
    html += '<big>' + score_ave.toFixed(1).toString() + '</big><br>';
    html += '</div>'; // allscore
    html += '<div id="shop_starL">'; // starL
    html += star_str(score_ave);
    html += '</div>'; // starL
    html += '</div>'; // review_all01
    html += '<div id="shop_review_all02">'; // review_all02
    html += '<small>(' + alluser.toString() + 'ユーザーより集計)</small><br>';
    for (let i = 5; i > 0; i--) {
        html += i.toString() + ':' + '*'.repeat(ucnt[i] / gauge);
        html += '<small>(' + ucnt[i].toString() + ')</small>';
        html += '<br>';
    }
    html += '</div>'; // review_all02
    html += '</div>'; // review_all
    html += '<br><br>';
    for (let h = 0; h < reviewCnt; h++) {
        html += '@WRITER3@';
        let star_cnt = scores[h];
        let star_miss = 5 - star_cnt;
        let score2 = scores[h];
        if (score2 == 2)
            score2 += rnd_max(2) * 2 - 1;
        if (score2 == 4)
            score2 += rnd_max(2) * 2 - 1;
        html += '<div id="shop_comtitle">'; // comtitle
        switch (score2) {
            case 1:
                html += '@SHOPCOM_B@';
                break;
            case 3:
                html += '@SHOPCOM_N@';
                break;
            case 5:
                html += '@SHOPCOM_G@';
                break;
        }
        html += '</div>'; // comtitle
        html += '<div id="shop_star">'; // catch
        html += star_str(star_cnt);
        html += '</div>'; // catch
        html += '<p id="shop_comdoc">'; // comdoc
        html += '　';
        let goodCnt = star_cnt;
        let badCnt = star_miss;
        let before = 0;
        for (let j = 0; j < 5; j++) {
            let flg = 0;
            if (goodCnt == 0)
                flg = 2;
            if (badCnt == 0)
                flg = 1;
            if (flg == 0) {
                let r = rnd_max(2);
                if (r == 1) {
                    flg = 1;
                    goodCnt--;
                }
                else {
                    flg = 2;
                    badCnt--;
                }
            }
            if (before != 0) {
                if (before != 0 && before != flg) {
                    html += '@BAT@';
                }
                else {
                    html += '@AND@';
                }
            }
            if (flg == 1) {
                html += '@SHOPCOMDOC_G@';
            }
            else {
                html += '@SHOPCOMDOC_B@';
            }
            before = flg;
        }
        html += '。</p>'; // comdoc
        html += '<br><br>';
    }
    //---- this shop END
    html += '</div>'; // shop_box
    let cnt = 0;
    while (true) {
        html = maker.gene_docs(html, true);
        html = maker01.gene_docs(html, true);
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
function make_site_footer() {
    let html = '';
    html += '<div id="@FOOT_ST@">'; // st
    html += '<div id="foot_cm">'; // cm
    html += '<div id="foot_pic">';
    html += '<img src="pics/@PIC_SHOP@" width="100%" >';
    html += '</div>';
    html += '<div id="foot_copy">';
    html += '@CATCH@';
    html += '</div>';
    html += '<div id="foot_title">';
    html += '@L_CAMPANY@ @L_SHOP@ @MODEL@';
    html += '</div>';
    html += '</div>'; // cm
    html += '</div>'; // st
    let maker = new shop_docs_maker();
    let maker01 = new shop_docs_maker01();
    let cnt = 0;
    while (true) {
        html = maker.gene_docs(html, true);
        html = maker01.gene_docs(html, true);
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
        super('@L_SHOP@', '@L_SHOP_B@', '@PIC_SHOP@');
        this.Add(itms_shop);
    }
}
// （固定）商品
class locker_campany extends SctItm_SelectLocker {
    constructor() {
        super('@L_CAMPANY@', '@L_CAMPANY_B@');
        this.Add(itms_campany);
    }
}
// （固定）場所
class locker_place extends SctItm_SelectLocker {
    constructor() {
        super('@L_PLACE@', '', '@ICON_SHOP@');
        this.startNumber = 1;
        this.Add(cods_to_itms(cods_place));
    }
}
// （固定）テクノロジー
class locker_tech extends SctItm_SelectLocker {
    constructor() {
        super('@L_TECH@', '', '@ICON_SHOP@');
        this.Add(itms_tech);
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
            new SctItm('@KEI1@@L_TECH@'),
            new SctItm('@KEI1@@L_STATUS@'),
            new SctItm('@KEI1@@L_STATUS@の@SUCCESS@'),
            new SctItm('@KEI1@@L_STATUS@をあなたに'),
            new SctItm('@KEI1@@L_TECH@をあなたに'),
            new SctItm('@MANYPEOPLE@を@DO@@END02E@@L_TECH@'),
            new SctItm('@FUTURE@の@L_TECH@を実現'),
            new SctItm('@KEI1@@L_STATUS@と共に'),
            new SctItm('@KEI1@@L_STATUS@を体感しよう'),
            new SctItm('@KEI1@@L_STATUS@の@FUTURE@'),
            new SctItm('さあ、@KEI1@@L_STATUS@を手に入れよう'),
            new SctItm('@ASSES@@L_STATUS@'),
            new SctItm('あなたの@PLACE@が@L_PLACE@となる'),
            new SctItm('@FUTURE@の@L_PLACE@へようこそ'),
            new SctItm('@L_PLACE@の@FUTURE@が変わる'),
            new SctItm('@KEI1@@L_PLACE@が@SUCCESS@する'),
            new SctItm('さあ、@KEI1@@L_PLACE@が待っている')
        ];
    }
}
// （固定）ステータス
class locker_status extends SctItm_SelectLocker {
    constructor() {
        super('@L_STATUS@', '', '@ICON_SHOP@');
        this.Add(itms_status);
    }
}
class selector_s_info_init extends SctItm_Selector {
    constructor() {
        super('@S_INFO_INIT@');
        this.itms = [
            new SctItm('　@S_INFO00@。'),
            new SctItm('　@S_INFO03@。')
        ];
    }
}
class selector_s_info extends SctItm_Selector {
    constructor() {
        super('@S_INFO@');
        this.itms = [
            new SctItm('@S_INFO00@。'),
            new SctItm('@S_INFO03@。')
        ];
    }
}
// 上下（句点なし）
class selector_s_info00 extends SctItm_Selector {
    constructor() {
        super('@S_INFO00@');
        this.itms = [
            new SctItm('@S_INFO01@、@S_INFO02@'),
            new SctItm('@S_INFO04@、@S_INFO05@')
        ];
    }
}
// 上（句点なし）
class selector_s_info01 extends SctItm_Selector {
    constructor() {
        super('@S_INFO01@');
        this.itms = [
            new SctItm('@L_CAMPANY_B@社の@L_SHOP_B@は'),
            new SctItm('@L_CAMPANY_B@社の@L_TECH@により'),
            new SctItm('@L_CAMPANY_B@社の@CLASS@達により'),
            new SctItm('@L_CAMPANY_B@社が誇る@KEI1@@CLASS@達によって'),
            new SctItm('@L_CAMPANY_B@社が誇る@KEI1@@L_TECH@によって'),
            new SctItm('@L_CAMPANY_B@社は@KEI1@@L_TECH@を投入し'),
            new SctItm('@L_CAMPANY_B@社は@MANY@@KEY@を経て'),
            new SctItm('@L_CAMPANY_B@社は@KEI1@@FUTURE@のために'),
            new SctItm('@MANYPEOPLE@より「@CALL2@」と@ASSES@@L_CAMPANY_B@社は'),
            new SctItm('@FUTURE@の@L_PLACE@のために'),
            new SctItm('@DO@する@L_PLACE@のために')
        ];
    }
}
// 下（句点なし）
class selector_s_info02 extends SctItm_Selector {
    constructor() {
        super('@S_INFO02@');
        this.itms = [
            new SctItm('@KEI1@@L_STATUS@が@SUCCESS@されました'),
            new SctItm('@MANY@@L_STATUS@が@SUCCESS@致しました'),
            new SctItm('@MANY@@THEY@から@MANY@@SAY2@を頂いております'),
            new SctItm('@MANY@@THEY@から@MANY@@SAY2@や@SAY2@を頂いております'),
            new SctItm('@KEI1@@FUTURE@の@SUCCESS@をお約束いたします'),
            new SctItm('@KEI1@@L_PLACE@をご提供いたします'),
            new SctItm('@KEI1@@L_PLACE@で@MANY@@SAY2@を頂いております'),
            new SctItm('「@CALL2@」と@ASSES@@KEI1@@L_PLACE@へとご案内いたします'),
            new SctItm('「@CALL2@」と@ASSES@@KEI1@@L_SHOP_B@をご紹介いたします')
        ];
    }
}
// 単　（句点なし）
class selector_s_info03 extends SctItm_Selector {
    constructor() {
        super('@S_INFO03@');
        this.itms = [
            new SctItm('さあ、@KEI1@@FUTURE@の到来です'),
            new SctItm('さあ、@L_SHOP_B@の全てが変わります'),
            new SctItm('あなたの@HABIT@、@HABIT@、そして@HABIT@のお供にどうぞ'),
            new SctItm('@L_CAMPANY@ @L_SHOP@が、あなたの@KEI@パートナーとなるでしょう'),
            new SctItm('@L_CAMPANY@ @L_SHOP@が、あなたの@KEI@@PART@となるでしょう'),
            new SctItm('@KEI@@L_CAMPANY@ @L_SHOP@なら、あなたの@THINK@や@THINK@が@SUCCESS@できます'),
            new SctItm('@KEI1@@PART@へのプレゼントに如何でしょうか'),
            new SctItm('あなたの@KEI1@@PART@への贈り物に最適です'),
            new SctItm('もう、@CLASS@を呼ぶ必要はありません'),
            new SctItm('もう、@PLACE@に行かなくても大丈夫'),
            new SctItm('@L_CAMPANY@ @L_SHOP@は、あなたとの出逢いを待っています'),
            new SctItm('@L_CAMPANY@ @L_SHOP@により、あなたの@KEI1@@HABIT@が@SUCCESS@します'),
            new SctItm('もはや、@L_CAMPANY@ @L_SHOP@は手放せません'),
            new SctItm('@L_CAMPANY@ @L_SHOP@の@KEI1@新モデルが誕生しました'),
            new SctItm('これから、@L_PLACE@の@FUTURE@が変わります'),
            new SctItm('あなたの@PLACE@が@L_PLACE@へと早変わり'),
            new SctItm('@L_SHOP_B@があなたの@L_PLACE@となるでしょう'),
            new SctItm('もはや、@L_PLACE@では欠かせないアイテムです'),
            new SctItm('もう、@L_CAMPANY@ @L_SHOP@の無い@L_PLACE@など有り得ません'),
            new SctItm('あなたも@KEI1@@L_CAMPANY@ @L_SHOP@で@DOING@みませんか'),
            new SctItm('あなたも@KEI1@@L_CAMPANY@ @L_SHOP@で@DOING@みましょう')
        ];
    }
}
// 上（句点なし）
class selector_s_info04 extends SctItm_Selector {
    constructor() {
        super('@S_INFO04@');
        this.itms = [
            new SctItm('さあ、@KEI1@@L_CAMPANY@ @L_SHOP@と共に'),
            new SctItm('さあ、@KEI1@@L_CAMPANY@ @L_SHOP@を片手に'),
            new SctItm('さあ、@KEI1@@L_CAMPANY@ @L_SHOP@と一緒に'),
            new SctItm('@KEI1@@L_CAMPANY@ @L_SHOP@でパワーアップして')
        ];
    }
}
// 下（句点なし）
class selector_s_info05 extends SctItm_Selector {
    constructor() {
        super('@S_INFO05@');
        this.itms = [
            new SctItm('@KEI1@@FUTURE@へと旅立ちましょう'),
            new SctItm('@KEI1@@FUTURE@を冒険してみませんか'),
            new SctItm('@HABIT@や@HABIT@に繰り出しましょう'),
            new SctItm('@PLACE@や@PLACE@へと出かけましょう'),
            new SctItm('@KEI@@PLACE@へと出かけましょう'),
            new SctItm('@KEI@@PLACE@へと出かけてみませんか'),
            new SctItm('@DOING@みませんか'),
            new SctItm('@DOING@みましょう')
        ];
    }
}
// コメント 
class selector_ShopComentGood extends SctItm_Selector {
    constructor() {
        super('@SHOPCOM_G@');
        this.itms = [
            new SctItm('待ってました！ @L_CAMPANY@ @L_SHOP@！'),
            new SctItm('遂に来た！ これぞ@FUTURE@の@L_SHOP_B@です！'),
            new SctItm('@L_CAMPANY@！　@L_CAMPANY@！　@L_CAMPANY@！'),
            new SctItm('@L_CAMPANY@ @L_SHOP@！　もう待ちきれない！'),
            new SctItm('@L_CAMPANY@ @L_SHOP@！　正に@COUNTRY@の@NICKGOOD@！'),
            new SctItm('@L_CAMPANY@ @L_SHOP@！　ああ、なんて@KEI1@！'),
            new SctItm('@L_CAMPANY@ @L_SHOP@！　これで勝てる！'),
            new SctItm('なんて@KEI1@@L_SHOP_B@なのだろう！'),
            new SctItm('もう@L_CAMPANY_B@社の@L_SHOP_B@が無ければ生きていけません！'),
            new SctItm('@COUNTRY@でNo.1！ @L_CAMPANY@ @L_SHOP@！'),
            new SctItm('@HABIT@する時の必需品です！'),
            new SctItm('ああ、なんて@KEI1@んだろう！！')
        ];
    }
}
// コメント
class selector_ShopComentNomal extends SctItm_Selector {
    constructor() {
        super('@SHOPCOM_N@');
        this.itms = [
            new SctItm('ああ、新しい@L_CAMPANY@ @L_SHOP@ですか'),
            new SctItm('@L_CAMPANY@ @L_SHOP@？　様子見かなぁ'),
            new SctItm('@L_CAMPANY@ @L_SHOP@？ 知らなかったな'),
            new SctItm('@L_CAMPANY_B@社でも@L_SHOP_B@を出してたんだ'),
            new SctItm('@L_CAMPANY@ @L_SHOP@？　へえ？'),
            new SctItm('@L_CAMPANY@ @L_SHOP@？　ちょっと@KEIM2@かな'),
            new SctItm('たまにしか@L_SHOP_B@は使わないので'),
            new SctItm('@HABIT@の時しか使わないけど'),
            new SctItm('@COUNTRY@だったら売れそうだけど'),
            new SctItm('もう少し@KEIM1@と良いんですが'),
            new SctItm('ちょっと@KEI1@んですよね')
        ];
    }
}
// コメント
class selector_ShopComentBad extends SctItm_Selector {
    constructor() {
        super('@SHOPCOM_B@');
        this.itms = [
            new SctItm('@L_CAMPANY_B@社の@L_SHOP_B@は、ちょっとなあ'),
            new SctItm('これが@L_SHOP_B@？　@NICKBAD@かと思った・・・'),
            new SctItm('@L_SHOP_B@？　今更かな'),
            new SctItm('こんな@L_SHOP_B@なら無い方がいいですね'),
            new SctItm('@CLASS@を呼んだ方がマシ'),
            new SctItm('こんな@L_SHOP_B@じゃ@PLACE@には持って行けない'),
            new SctItm('どうせ@COUNTRY@産の安物でしょう'),
            new SctItm('これ、中身は@COUNTRY@産なんだよね'),
            new SctItm('もう@COUNTRY@でしか使ってないですよ'),
            new SctItm('@L_CAMPANY_B@製はもういいです'),
            new SctItm('@L_CAMPANY_B@製は壊れやすいので'),
            new SctItm('どうして@L_CAMPANY_B@製は@KEI1@んですかね'),
            new SctItm('あまり@HABIT@はしないから'),
            new SctItm('@DOING@いるので@L_SHOP_B@は要りません')
        ];
    }
}
// コメント
class selector_ShopComentDocGood extends SctItm_Selector {
    constructor() {
        super('@SHOPCOMDOC_G@');
        this.itms = [
            new SctItm('ずっと@PLACE@で@L_CAMPANY_B@の@L_SHOP_B@を使っています'),
            new SctItm('@L_SHOP_B@は@L_CAMPANY_B@でなければ有り得ません'),
            new SctItm('今度の@L_CAMPANY@ @L_SHOP@は@KEI2@で@KEI1@んです'),
            new SctItm('もう@L_CAMPANY@ @L_SHOP@は手放せません'),
            new SctItm('すぐに@PART@や@PART@に奨めなければいけません'),
            new SctItm('今度、@L_CAMPANY@ @L_SHOP@が我が社で採用されました'),
            new SctItm('今では@CLASS@の誰もが@L_CAMPANY@ @L_SHOP@を使っています'),
            new SctItm('正に@L_CAMPANY@ @L_SHOP@は@CLASS@の必需品です'),
            new SctItm('@L_CAMPANY@ @L_SHOP@さえあれば、@CLASS@を呼ぶ必要はありません'),
            new SctItm('@L_CAMPANY@ @L_SHOP@なら値段なんて気にしません'),
            new SctItm('@PART@や@PART@、@PART@にも買ってあげようと思います'),
            new SctItm('もうこれで@PLACE@に行かなくてすみます'),
            new SctItm('もう@L_CAMPANY@ @L_SHOP@が無ければ生きていけません'),
            new SctItm('@PLACE@に行くときに必ず持って行きます'),
            new SctItm('私を@KEY@や@KEY@から救ってくれたのが@L_CAMPANY@ @L_SHOP@だったのです'),
            new SctItm('私は@L_CAMPANY@ @L_SHOP@のお陰で悩みから解放されました'),
            new SctItm('私は@L_CAMPANY@ @L_SHOP@のお陰で@CLASS@になれました'),
            new SctItm('私は@L_CAMPANY@ @L_SHOP@のお陰で@SUCCESS@できました'),
            new SctItm('@L_CAMPANY@ @L_SHOP@が無ければ、ずっと@CLASS@のままでした'),
            new SctItm('さすが「@CALL2@」と@ASSES@だけのことはあります'),
            new SctItm('これほど@KEI1@@L_SHOP_B@は見たことがありません')
        ];
    }
}
// コメント
class selector_ShopComentDocBad extends SctItm_Selector {
    constructor() {
        super('@SHOPCOMDOC_B@');
        this.itms = [
            new SctItm('@L_CAMPANY_B@の@L_SHOP_B@って、なんだか使いにくいんです'),
            new SctItm('@L_CAMPANY_B@の@L_SHOP_B@って、すぐ壊れるんです'),
            new SctItm('最近、@L_CAMPANY_B@の@L_SHOP_B@って見かけません'),
            new SctItm('今時、@L_CAMPANY_B@の@L_SHOP_B@を使うの恥ずかしいんです'),
            new SctItm('もう@L_CAMPANY_B@の@L_SHOP_B@は使いたくないです'),
            new SctItm('@PART@や@PART@はダメだと云ってます'),
            new SctItm('@PLACE@の@L_SHOP_B@と違うから困るんです'),
            new SctItm('@CLASS@を呼べば済むので必要ありません'),
            new SctItm('@L_SHOP_B@にしては高いです'),
            new SctItm('@PLACE@に行くとき邪魔になります'),
            new SctItm('@L_SHOP_B@はそろそろ卒業しないといけません'),
            new SctItm('@L_SHOP_B@は医者に止められています'),
            new SctItm('今使っている@L_SHOP_B@で十分です'),
            new SctItm('@L_SHOP_B@なら他にもあります'),
            new SctItm('@L_SHOP_B@にしては大きすぎます'),
            new SctItm('@L_SHOP_B@ってもう古いんです'),
            new SctItm('@L_SHOP_B@があるから、@KEY@や@KEY@が絶えないんです'),
            new SctItm('そんなことだから「@CALL2@」と@ASSES@んです'),
            new SctItm('こんな@KEI1@@L_SHOP_B@なんて有り得ません')
        ];
    }
}
class selector_footer extends SctItm_Selector {
    constructor() {
        super('@FOOT_ST@');
        this.itms = [
            new SctItm('foot01'),
            new SctItm('foot02'),
            new SctItm('foot03'),
            new SctItm('foot04'),
            new SctItm('foot05'),
            new SctItm('foot06')
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
        this.dic_push(new selector_success());
        this.dic_push(new selector_s_info_init());
        this.dic_push(new selector_s_info());
        this.dic_push(new selector_s_info00());
        this.dic_push(new selector_s_info01());
        this.dic_push(new selector_s_info02());
        this.dic_push(new selector_s_info03());
        this.dic_push(new selector_s_info04());
        this.dic_push(new selector_s_info05());
        this.dic_push(new selector_ShopComentGood());
        this.dic_push(new selector_ShopComentNomal());
        this.dic_push(new selector_ShopComentBad());
        this.dic_push(new selector_ShopComentDocGood());
        this.dic_push(new selector_ShopComentDocBad());
        this.dic_push(new selector_footer());
    }
}
class shop_docs_maker01 extends news_docs_maker {
    constructor() {
        super();
        this.dic_push(new locker_status());
        this.dic_push(new locker_place());
        this.dic_push(new locker_tech());
    }
}
