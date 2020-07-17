function set_comic()
{
    set_header_menu(5);

    scrollTo(0,0);

    let html : string = '';
    html += '<div id="main_title">'
    html += '<h1>';
    html += 'Comic';
    html += '<small>';
    html += ' C00.00';
    html += '</small>';
    html += '</h1>';
    html += '</div>';

    for(let i = 0; i < 10; i++){
        html += make_comic();
    }

    let elem = document.getElementById('site_main');
    if (elem == null)
    {
        alert('not found "site_main"');
        return;
    }
    elem.innerHTML = ruby_change(html);
}

function make_comic()
{
    let html : string = '';

    html += '<div id="comic_box">';
    html += '<div id="comic_page">';

    html += '<div '; // icon
    html += 'style="';
    html += 'grid-column: 2 / 98 ';
    html += 'grid-row: 2 / 98 ';
    html += '">';
    html += '<img src="pics/PLACE/bar.jpg">';
    html += '</div>'; // icon

    html += '</div>';   // comic_coma
    html += '</div>';   // comic_box
    return html;
}

