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
    html += '<small> i0.02 </small>';
    html += '</p>';
    html += '</div>';
    // html += '<div id="header_menu">';
    // html += make_header_menu(0);
    // html += '</div>';
    set_html('index_header',html);
}
