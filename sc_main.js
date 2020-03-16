"use strict";
function set_site_header() {
    let html = '';
    html += make_site_header();
    let elem = document.getElementById('site_header');
    if (elem == null) {
        alert('not found "site_header"');
        return;
    }
    elem.innerHTML = html;
}
function make_site_header() {
    let html = '';
    html += '<div id="header_title">';
    html += '<h1>';
    html += '「空虚」';
    html += '<small>';
    html += 'M01.03';
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
    constructor(itemName, itemCommand) {
        this.itemName = itemName;
        this.itemCommand = itemCommand;
    }
    ;
}
function get_menu_items() {
    let menu_items = [
        new menu_item('Home', 'select_menu(0)'),
        new menu_item('News', 'set_news()'),
        new menu_item('Poem', 'set_poem()'),
        new menu_item('About', 'select_menu(3)')
    ];
    return menu_items;
}
function select_menu(num) {
    set_header_menu(num);
    let items = get_menu_items();
    set_center_message(items[num]);
}
function set_header_menu(num) {
    let html = make_header_menu(num);
    let elem = document.getElementById('header_menu');
    if (elem == null) {
        alert('not found "header_menu"');
        return;
    }
    elem.innerHTML = html;
}
function make_header_menu(num) {
    let html = '';
    html += '<ul>';
    let items = get_menu_items();
    for (var i = 0; i < items.length; i++) {
        let cmd = items[i].itemCommand;
        // var cmd = 'select_menu(' + String(i) + ')';
        // let cmd : string = 'set_news()';
        html += '<li>';
        if (i == num) {
            html += '<a id="active">';
        }
        else {
            html += '<a onclick="' + cmd + '">';
        }
        html += items[i].itemName;
        html += '</a></li>' + '\r\n';
    }
    html += '</ul>';
    html += '</div>' + '\r\n';
    return html;
}
function set_center_message(mess) {
    let html = '';
    html += '<div id="center_message">';
    html += '<p>';
    html += mess.itemName;
    html += '</p>';
    html += '</div>';
    let elem = document.getElementById('site_main');
    if (elem == null) {
        alert('not found "main_con"');
        return;
    }
    elem.innerHTML = html;
}
