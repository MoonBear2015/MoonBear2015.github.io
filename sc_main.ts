
// --------------------------------------------------------------

// class nWord {
//     word : string;
//     constructor(inword : string)
//     {
//         this.word = inword;
//     }
// }

// class nWordAry<T> {
//     words : T[];
//     rnd_index = -1; 

//     constructor()
//     {
//         this.words = new Array<T>();
//     }

//     add(word : T)
//     {
//         this.words.push(word);
//     }
//     get count() : number
//     {
//         return this.words.length;
//     }
    
// }

// function set_nTruth() : nWordAry<string> {
//     let result = new nWordAry<string>();
//     result.words = [
//             '幻'
//         ,   '幻想'
//         ,   '妄想'
//         ,   '蜃気楼'
//         ,   '空想'
//         ,   '模造品'
//         ,   '偽物'
//         ,   '模型'
//         ,   '廃墟'
//         ,   '抜け殻'
//     ];
//     return result;
// }


// // Act : 主役
// class nAct extends nWord {
//     nPic: string;
//     constructor(inStr: string,inPic: string) {
//         super(inStr);
//         this.nPic = inPic;
//     }
// }

// function get_nActs() : nAct[] {
//     let result = [
//             new nAct('日本','pics/Japan.jpg')
//         ,   new nAct('アメリカ','pics/America.jpg')
//         ,   new nAct('中国','pics/China.jpg')
//     ];
//     return result;
// }
// function rnd_nActs() : nAct {
//     let acts = get_nActs();
//     return acts[rnd_max(acts.length)];
// }

// function make_news_title() : string {
//     let result : string = '';

//     let acts = get_nActs();

//     let act = acts[rnd_max(acts.length)];
//     result += act.word;
    
//     return result;
// }

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
    html += '<h1>「空虚」</h1>';
    html += '</div>';
    html += '<div id="header_menu">';
    html += make_header_menu(0);
    html += '</div>';
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
        new menu_item('Home','select_menu(0)'),
        new menu_item('News','set_news()'),
        new menu_item('Poem','select_menu(2)'),
        new menu_item('About','select_menu(3)')
    ];
    return menu_items;
}

function select_menu(num : number) {
    set_header_menu(num);

    let items = get_menu_items();
    set_center_message(items[num]);

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
        if (i == num)
        {
            html += '<a id="active">';
        }
        else
        {
            html += '<a onclick="' + cmd + '">';
        }
        html += items[i].itemName;
        html += '</a></li>' + '\r\n';
    }
    
    html += '</ul>';
    html += '</div>' + '\r\n';

    return html;

}

function set_center_message(mess : menu_item) {
    let html : string = '';
    html += '<div id="center_message">';
    html += '<p>';
    html += mess.itemName;
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

function make_news_box() : string {
    let html : string = '';
    


    return html;
}

