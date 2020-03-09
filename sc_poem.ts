function set_poem()
{
    set_header_menu(2);

    scrollTo(0,0);

    let html : string = '';
    html += '<div id="main_title">'
    html += '<h1>';
    html += 'POEM';
    html += '<small>';
    html += 'R01.00';
    html += '</small>';
    html += '</h1>';
    html += '</div>';

    for(let i = 0; i < 5; i++){
        html += make_poem();
    }

    let elem = document.getElementById('site_main');
    if (elem == null)
    {
        alert('not found "site_main"');
        return;
    }
    elem.innerHTML = html;
}

function make_poem()
{
    let html : string = '';

    html += '<div id="poem_box" ';
    html += 'style="';
    html += 'margin:     10px; ';
    html += 'padding:    10px; ';
    html += 'border:     0.5px solid #606060;';
    html += 'border-radius:  1%;';
    html += 'background: ';
    html += 'linear-gradient(135deg,rgba(30,30,30,0.8),rgba(120,120,120,0.8)),';
    html += 'url(./pics/WHAT/christ.jpg);';
    html += 'background-size: ';
    html += 'cover;';
    html += '">';

    html += '<h2 id="news_title">';
    html += '秋の田の　刈り穂の色の とまをあらみ';
    html += '</span>';
    html += '</h2>';
    html += '</div>';

    return html;
}

