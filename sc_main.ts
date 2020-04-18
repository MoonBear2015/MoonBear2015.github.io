
function set_site_header(){
    let html = '';
    html += make_site_header();
    let elem = document.getElementById('site_header');
    if (elem == null)
    {
        alert('not found "site_header"');
        return;
    }
    elem.innerHTML = html;
}

function make_site_header(): string {
    let html = '';
    html += '<div id="header_title">';
    html += '<h1>';
    html += '「空虚」';
    html += '<small>';
    html += 'M01.15';
    html += '</small>';
    html += '</h1>';
    html += '</div>';
    html += '<div id="header_menu">';
    html += make_header_menu(0);
    html += '</div>';

    // let testcod = new SctCod('####','Pic',4);
    // let tests = testcod.to_length_itms(7,'@akey','@bkey');
    // tests_alert(tests);

    return html;
}

class menu_item {
    constructor(
            public itemName : string,
            public itemCommand : string
        ){};
}

function get_menu_items() : menu_item[] {
    let menu_items : menu_item[] = [
        new menu_item('Home','set_main()'),
        new menu_item('News','set_news()'),
        new menu_item('Poem','set_poem()'),
        new menu_item('Q&A','set_qa()'),
        new menu_item('About','select_menu(3)')
    ];
    return menu_items;
}

function select_menu(num : number) {
    set_header_menu(num);

    let items = get_menu_items();
    set_center_item(items[num]);

}

function set_header_menu(num : number) {
    let html = make_header_menu(num);
    let elem = document.getElementById('header_menu');
    if (elem == null)
    {
        alert('not found "header_menu"');
        return;
    }
    elem.innerHTML = html;
}

function make_header_menu(num : number) : string {
    let html ='';

    html += '<ul>';

    let items = get_menu_items();

    for(var i = 0;i < items.length;i++) {
        let cmd = items[i].itemCommand;
        // var cmd = 'select_menu(' + String(i) + ')';
        // let cmd : string = 'set_news()';
        html += '<li>';
        html += '<a ';
        if (i == num)
        {
            html += 'id="active"';
        }
        html += ' onclick="' + cmd + '">';
        html += items[i].itemName;
        html += '</a></li>' + '\r\n';
    }
    
    html += '</ul>';
    html += '</div>' + '\r\n';

    return html;

}

function set_center_item(mess : menu_item) {
    set_center_message(mess.itemName);
}


function set_center_message(mess : string) {
    let html : string = '';
    html += '<div id="center_message">';
    html += '<p>';
    html += mess;
    html += '</p>';
    html += '</div>';

    let elem = document.getElementById('site_main');
    if (elem == null)
    {
        alert('not found "main_con"');
        return;
    }
    elem.innerHTML = html;
}

function set_main()
{
    set_header_menu(0);

    scrollTo(0,0);

    let html : string = '';

    let msgs = [
        'このサイトが素晴らしいとお思いでしたら、<br>人類はその程度だったということです。'
        ,
        // エレノア・ルーズベルト（米国のファーストレディ、人権活動家 / 1884～1962）
        // あなたの心が正しいと思うことをしなさい。どっちにしたって批判されるのだから。
        'あなたの心が@KEI3@と思うことをしなさい。<br>どっちにしたって@KEI3@のだから。'
        ,
        // ゲーテ（ドイツの詩人、小説家、劇作家 / 1749～1832）
        // 前進をしない人は、後退をしているのだ。
        '@THINK@をしない人は、@THINK@をしているのだ。'
        ,
        // 松下幸之助（日本の実業家、発明家、パナソニック創業者 / 1894～1989）
        // どんなに悔いても過去は変わらない。
        // どれほど心配したところで未来もどうなるものでもない。
        // いま、現在に最善を尽くすことである。
        'どんなに@THINK@しても@WHEN@は変わらない。<br>どれほど@THINK@したところで@WHEN@もどうなるものでもない。<br>@WHEN@に@THINK@することである。'
        ,
        // スティーブ・ジョブズ（米国の実業家、アップル創業者 / 1955～2011）
        // 最も重要な決定とは、何をするかではなく、何をしないかを決めることだ。
        '最も重要な@ANSWER@とは、<br>何が@KEI2@かではなく、<br>何が@KEI3@かを決めることだ。'
        ,
        // ビル・ゲイツ（米国の実業家、マイクロソフト社の創業者 / 1955～） 
        // 人生は公平ではない。そのことに慣れよう。
        '@CLASS@は@NICK@ではない。<br>そのことに慣れよう。'
        ,
        // 武者小路実篤（日本の小説家、詩人、劇作家、画家 / 1885～1976）
        // 人生は楽ではない。そこが面白い。
        '@PART@は@CLASS@ではない。<br>そこが@KEI3@。'
        ,
        // 斎藤茂太（日本の精神科医、随筆家 / 1916～2006）
        // 自分で自分をあきらめなければ、人生に「負け」はない。
        '@THEY@が@CLASS@をあきらめなければ、<br>人生に「@THINK@」はない。'
        ,
        // オスカー・ワイルド（アイルランドの詩人、作家、劇作家 / 1854～1900）
        // 善人はこの世で多くの害をなす。彼らがなす最大の害は、人びとを善人と悪人に分けてしまうことだ。
        '@CLASS@は@KEI@@KEY@を為す。<br>@CLASS@が為す@KEI@@KEY@は、<br>@THEY@を@CLASS@と@CLASS@に分けてしまうことだ。'
        ,
        // ジョン・レノン（英国のミュージシャン、ビートルズのリーダー / 1940～1980）
        // 人生とは、人生以外のことを夢中で考えているときにあるんだよ。
        '@THINK@とは、@THINK@以外のことを@KEI2@に考えているときにあるんだよ。'
        ,
        // 宮本武蔵（江戸時代初期の剣術家、兵法家 / 1584～1645）
        // 我、神仏を尊びて、神仏を頼らず。
        '我、@CLASS@を尊びて、@CLASS@を頼らず。'
        ,
        // 王貞治（日本の元プロ野球選手、監督 / 1940～）
        // 努力は必ず報われる。もし報われない努力があるのならば、それはまだ努力と呼べない。
        '@KEY@は必ず@STATUS@する。<br>もし@STATUS@しない@KEY@があるのならば、<br>それはまだ@KEY@と呼べない。'
        ,
        // レイモンド・チャンドラー（米国のハードボイルド作家 / 1888～1959）
        // タフでなければ生きて行けない。優しくなれなければ生きている資格がない。
        '@KEI2@でなければ生きて行けない。<br>@KEI4@なければ生きている資格がない。'
        ,
        // ルイーザ・メイ・オルコット（米国の女性小説家 / 1832～1888）
        // 雲の向こうは、いつも青空。
        '@THINK@の向こうは、いつも@THINK@。'
        ,
        '@COUNTRY@の向こうは、いつも@COUNTRY@。'
        ,
        // ゾラ・ニール・ハーストン（米国の黒人女性作家 / 1891～1960）
        // 問いを投げる年もあれば、答える年もある。
        '@KEI3@年もあれば、@KEI3@年もある。'
        ,
        '@KEI2@な年もあれば、@KEI2@な年もある。'
        ,
        // アインシュタイン（理論物理学者、ノーベル物理学賞受賞 / 1879～1955）
        // 人の価値とは、その人が得たものではなく、その人が与えたもので測られる。
        '@CLASS@の価値とは、<br>@CLASS@が得たものではなく、<br>@CLASS@が与えたもので測られる。'
        ,
        // ジョージ・ワシントン（米国の軍人、政治家、米国初代大統領 / 1732～1799）
        // 他人を押さえつけている限り、自分もそこから動くことはできない。
        '@CLASS@を押さえつけている限り、<br>@CLASS@もそこから動くことはできない。'
        ,
        // グレタ・ガルボ（スウェーデン出身のハリウッド女優 / 1905～1990）
        // 結婚してようがしてまいが、あなたが幸せならそれが幸せなのよ。
        '@KEY@してようがしてまいが、<br>あなたが@KEI2@ならそれが@KEI2@なのよ。'
        ,
        // アンソニー・ロビンズ（米国の自己啓発書作家、講演家 / 1960～）
        // あなたの運命が形作られるのは、あなたが決断する瞬間なのです。
        '@CLASS@の@THINK@が形作られるのは、<br>@CLASS@が@DO@する瞬間なのです。'
        ,
        // マザー・テレサ（カトリック修道女、ノーベル平和賞受賞 / 1910～1997）
        // 神様は私たちに、成功してほしいなんて思っていません。ただ、挑戦することを望んでいるだけよ。
        '@CLASS@は@THEY@に、@DO@して欲しいなんて思っていません。<br>ただ、@THINK@することを望んでいるだけよ。'
        ,
        // バーナード・ショー（アイルランドの劇作家、ノーベル文学賞受賞 / 1856～1950）
        // 人生とは自分を見つけることではない。人生とは自分を創ることである。
        '@THINK@とは@THEY@に@THINK@することではない。<br>@THINK@とは@CLASS@に@THINK@することである。'
        ,
        // オードリー・ヘップバーン（英国の女優 / 1929～1993）
        // 何より大事なのは、人生を楽しむこと。幸せを感じること、それだけです。
        '何より大事なのは、人生に@THINK@すること。<br>@THINK@を感じること、それだけです。'
        ,
        // シェイクスピア（英国の劇作家、詩人 / 1564～1616）
        // 神は、我々を人間にするために、何らかの欠点を与える。
        '@CLASS@は、@THEY@を@CLASS@にするために、何らかの@ANSWER@を与える。'
        ,
        // ニーチェ（ドイツの哲学者、古典文献学者 / 1844～1900）
        // 悪とは何か？　–　弱さから生じるすべてのものだ。
        '@CLASS@とは何か？　–　@THINK@から生じるすべてのものだ。'
        ,
        // エイブラハム・リンカーン（米国の第16代大統領 / 1809～1865）
        // 敵が友となる時、敵を滅ぼしたと言えないかね？
        '@CLASS@が@PART@となる時、@CLASS@が@DO@したと言えないかね？'
        ,
        // ナイチンゲール（英国の看護師、社会起業家、看護教育学者 / 1820～1910）
        // 経験をもたらすのは観察だけなのである。
        '@THINK@をもたらすのは@DO@だけなのである。'
        ,
        // パブロ・ピカソ（スペイン出身の画家、彫刻家 / 1881～1973）
        // 人はあらゆる物や人に意味を見出そうとする。これは我々の時代にはびこる病気だ。
        '人はあらゆる@CLASS@や@CLASS@に@THINK@を見出そうとする。<br>これは@THEY@の時代にはびこる@NICK@だ。'
        ,
        // ゴッホ（オランダ出身のポスト印象派の画家 / 1853～1890）
        // 美しい景色を探すな。景色の中に美しいものを見つけるんだ。
        '@KEI@@CLASS@を探すな。<br>@THEY@の中から@KEI@@CLASS@を見つけるんだ。'
        ,
        // ベートーヴェン（ドイツの作曲家 / 1770～1827）
        // これはあなたのために書いたのではありません。後世のために書いたのです。
        'これは@CLASS@のために書いたのではありません。<br>@MANY@@THEY@のために書いたのです。'
        ,
        // エマーソン（米国の思想家、哲学者、作家、詩人 / 1803～1882）
        // どんなに暗くても、星は輝いている。
        'どんなに@KEI2@でも、<br>@CLASS@は@KEI3@。'
        ,
        // ナポレオン・ボナパルト（フランスの皇帝、政治家、軍人 / 1769～1821）
        // 人間は、その想像力によって支配される。
        '@THEY@は、@CLASS@によって@THINK@する。'
        ,
        // レオナルド・ダ・ヴィンチ（イタリアのルネサンス期の芸術家 / 1452～1519）
        // 自分の判断以上に自分を欺くものはない。
        '@CLASS@の@ANSWER@以上に@THEY@を欺くものはない。'
        ,
        // ピーター・ドラッカー（オーストリア出身の経営学者 / 1909～2005）
        // できることから始めるのではなく、正しいことから始めるのです。
        '@KEI1@ことから始めるのではなく、<br>@KEI1@ことから始めるのです。'
        ,
        // ソクラテス（古代ギリシアの哲学者 / 紀元前469～399）
        // 唯一の真の英知とは、自分が無知であることを知ることにある。
        '唯一の真の@THINK@とは、<br>@CLASS@が@NICK@であることを知ることにある。'
        ,
        // アリストテレス（古代ギリシアの哲学者 / 紀元前384～前322）
        // 恥は、若者にとって名誉であり、老人には屈辱である。
        '@THINK@は、<br>@THEY@にとって@THINK@であり、<br>@THEY@には@THINK@である。'
        ,
        // マーク・トウェイン（米国の作家、小説家 / 1835～1910）
        // 自分が多数派の側にいると気づいたら、もう意見を変えてもいいころだ。
        '@CLASS@が@THEY@の側にいると気づいたら、もう@ANSWER@を変えてもいいころだ。'
        ,
        // 夏目漱石（日本の小説家、評論家、英文学者 / 1867～1916）
        // あせってはいけません。ただ、牛のように、図々しく進んで行くのが大事です
        'あせってはいけません。<br>ただ、@NICK@のように、@KEID@進んで行くのが@CLASS@です'
        ,
        // 芥川龍之介（日本の小説家 / 1892年～1927年） 
        // 阿呆はいつも彼以外のものを阿呆であると信じている。
        '@THEY@はいつも@CLASS@以外のものを@CLASS@であると信じている。'
    ]

    let msg = msgs[rnd_max(msgs.length)];
    // let msg = msgs[msgs.length - 1];

    // msg += '<br><br><br><br><br>';
    // msg += '@WRITER@';

    let maker = new news_docs_maker();
    let cnt = 0;
    while(true)
    {
        msg = maker.gene_docs(msg);
        cnt++;
        let chk = msg.indexOf('@');
        if (chk < 0) break;
        if (cnt > 10)
        {
            alert('over work : ' + chk.toString());
            break;
        }
    }
    
    
    set_center_message(ruby_change(msg));
}

