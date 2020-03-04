
function set_site_header(){
    var html = '';
    html += make_site_header();
    var elem = document.getElementById('site_header');
    elem.innerHTML = html;
}

function make_site_header(){
    var html = '';
    html += '<div id="header_title">';
    html += '<h1>「空虚」</h1>';
    html += '</div>';
    html += '<div id="header_menu">';
    html += make_header_menu(0);
    html += '</div>';
    return html;
}

function get_menu_items(){
    var menu_items = new Array(
        'Home',
        'News',
        'Content',
        'Story',
        'Poem',
        'About'
    );
    return menu_items;
}

function select_menu(num) {
    set_header_menu(num);

    var items = get_menu_items();
    set_center_message(items[num]);

}

function set_header_menu(num) {
    var html = make_header_menu(num);
    var elem = document.getElementById('header_menu');
    elem.innerHTML = html;
}

function make_header_menu(num){
    var html ='';

    html += '<ul>';

    var items = get_menu_items();

    for(var i = 0;i < items.length;i++) {
        var cmd = 'select_menu(' + String(i) + ')';
        html += '<li>';
        if (i == num)
        {
            html += '<a id="active">';
        }
        else
        {
            html += '<a onclick="' + cmd + '">';
        }
        html += items[i];
        html += '</a></li>' + '\r\n';
    }
    
    html += '</ul>';
    html += '</div>' + '\r\n';

    return html;

}

function set_center_message(mess) {
    html = '';
    html += '<div id="center_message">';
    html += '<p>';
    html += mess;
    html += '</p>';
    html += '</div>';

    var elem = document.getElementById('main_con');
    elem.innerHTML = html;
}

