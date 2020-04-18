
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
    html += 'M01.14';
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
        // 'ここには、何もありません。<br>何の意味もありません。<br>何の意図もありません。'
        // ,
        // '書かせたのは私ですが、<br>書いたのはあなたのブラウザです。'
        // ,
        // 'ここには誰の意図も込められていません。<br>安心して、ご閲覧ください。'
        // ,
        // 'この世でもっとも不条理なあなたの為に。'
        // ,
        // 'どうぞ、錯乱したい時にお読みください。'
        // ,
        // 'ここは、あなたを写した鏡です。'
        // ,
        // 'このサイトが素晴らしいとお思いでしたら、<br>人類はその程度だったということです。'
        // ,
        // 'もはや人工知能には不得意な、<br>支離滅裂がここにあります。'
        // ,

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
        '@CLASS@は@KEI@@KEY@をなす。<br>@CLASS@がなす@KEI@@KEY@は、<br>@THEY@を@CLASS@と@CLASS@に分けてしまうことだ。'
    ]

    let msg = msgs[rnd_max(msgs.length)];
    let maker = new news_docs_maker();
    let cnt = 0;
    while(true)
    {
        msg = maker.gene_docs(msg);
        cnt++;
        let chk = html.indexOf('@');
        if (chk < 0) break;
        if (cnt > 10)
        {
            alert('over work : ' + chk.toString());
            break;
        }
    }
    
    
    set_center_message(ruby_change(msg));
}

