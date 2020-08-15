const set_html = (in_id : string,in_html : string) => {
    let elem = document.getElementById(in_id);
    if (elem == null)
    {
        alert('not found ' + in_id);
        return;
    }
    elem.innerHTML = ruby_change(in_html);
}

const set_index_header = () => {
    let html = '';
    html += '<div id="header_title">';
    html += '<h1>';
    html += '「|空虚|くうきょ|」';
    html += '</h1>';
    html += '<p>';
    html += '<small> i0.03 </small>';
    html += '</p>';
    html += '</div>';
    html += '<div id="header_menu">';

    html += '<ul>';

    html += '<li>';
    html += '<a onclick="test_alt()">';
    html += 'あ'
    html += '</a></li>' + '\r\n';
    html += '<li>';
    html += '<a onclick="test_alt()">';
    html += 'い'
    html += '</a></li>' + '\r\n';
    html += '<li>';
    html += '<a onclick="test_alt()">';
    html += 'う'
    html += '</a></li>' + '\r\n';
    html += '<li>';
    html += '<a onclick="test_alt()">';
    html += 'え'
    html += '</a></li>' + '\r\n';


    html += '</ul>';

    html += '</div>';



    set_html('index_header',html);
}

const test_alt = (str : string) => {
    alert(str);
}

class menu_itm {
    constructor(
            public name : string,
            public command : string
        ){};
}
