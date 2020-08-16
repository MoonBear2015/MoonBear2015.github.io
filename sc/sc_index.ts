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
    html += '<small> i0.04 </small>';
    html += '</p>';
    html += '</div>';
    html += '<div id="header_menu">';

    html += make_header_menu(1);

    html += '</div>';



    set_html('index_header',html);
}

const test_alt = (num : number) => {
    alert(num.toString());
}

class menu_itm {
    constructor(
            public name : string,
            public command : string
        ){};
}

const menu_itms = [
    new menu_itm('聞','test_alt(0)')
    ,
    new menu_itm('詩','test_alt(1)')
    ,
    new menu_itm('問','test_alt(2)')
    ,
    new menu_itm('店','test_alt(3)')
    ,
    new menu_itm('注','test_alt(4)')
]


const make_header_menu = (num : number) : string => {
    let html ='';

    html += '<ul>';

    for(var i = 0;i < menu_itms.length;i++) {
        let cmd = menu_itms[i].command;
        html += '<li>';
        html += '<a ';
        if (i == num)
        {
            html += 'id="active"';
        }
        html += ' onclick="' + cmd + '">';
        html += menu_itms[i].name;
        html += '</a></li>' + '\r\n';
    }
    
    html += '</ul>';
    html += '</div>' + '\r\n';

    return html;

}
