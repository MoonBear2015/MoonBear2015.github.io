function set_news()
{
    set_header_menu(0);

    scrollTo(0,0);

    let html : string = '';
    html += '<div id="main_title">'
    html += '<h1>';
    html += 'NEWS';
    html += '<small>';
    html += ' N0.00';
    html += '</small>';
    html += '</h1>';
    html += '</div>';

    // for(let i = 0; i < 20; i++){
    //     html += '<p>[' + i.toString() + ']</p>' + make_news();
    // }

    set_html('index_main',html);

}
