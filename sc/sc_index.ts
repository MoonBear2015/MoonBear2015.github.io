const set_html = (in_id : string,in_html : string) => {
    let elem = document.getElementById(in_id);
    if (elem == null)
    {
        alert("not found " + in_id);
        return;
    }
    elem.innerHTML = ruby_change(in_html);
}

const set_index_header = () => {
    let html = "";
    html += "<div id='header_title'>";
    html += "<h1>";
    html += "「|空虚|くうきょ|」";
    html += "</h1>";
    html += "<p>";
    html += "<small> i0.09 </small>";
    html += "</p>";
    html += "</div>";
    html += "<div id='header_menu'>";
    html += make_header_menu(0);
    html += "</div>";
    set_html("index_header",html);
}

const test_alt = (num : number) => {
    alert(num.toString());
}

class menu_item {
    constructor(
            public name : string,
            public command : string
        ){};
}

const menu_items = [
    new menu_item("聞","set_news()")
    ,
    new menu_item("詩","set_header_menu(1)")
    ,
    new menu_item("問","set_header_menu(2)")
    ,
    new menu_item("店","set_header_menu(3)")
    ,
    new menu_item("注","set_header_menu(4)")
]

const set_index_header_menu = (num : number) => {
    let html = make_header_menu(num);
    set_html("header_menu",html);
}

const set_index_main = () => {
    let html = "";
    for(let i = 0; i < 10; i++) {
        html += i.toString();
        html += "<br>";
    }
    set_html("index_main",html);
}



const make_header_menu = (num : number) : string => {
    let html ="";

    html += "<ul>";

    for(var i = 0;i < menu_items.length;i++) {
        let cmd = menu_items[i].command;
        html += "<li>";
        html += "<a ";
        if (i == num)
        {
            html += "id='active'";
        }
        html += " onclick='" + cmd + "'>";
        html += menu_items[i].name;
        html += "</a></li>" + "\r\n";
    }
    
    html += "</ul>";
    html += "</div>" + "\r\n";

    return html;

}
