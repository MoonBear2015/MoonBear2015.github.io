function set_qa()
{
    set_header_menu(1);

    scrollTo(0,0);

    let html : string = '';
    html += '<div id="main_title">'
    html += '<h1>';
    html += 'Q&A';
    html += '<small>';
    html += 'N00.02 test';
    html += '</small>';
    html += '</h1>';
    html += '</div>';

    for(let i = 0; i < 20; i++){
        html += '<p>[' + i.toString() + ']</p>' + make_qa();
    }

    let elem = document.getElementById('site_main');
    if (elem == null)
    {
        alert('not found "site_main"');
        return;
    }
    elem.innerHTML = html;
}

function make_qa()
{
    let html : string = '';

    html += '<div id="qa_box" ';
    html += 'style="';
    html += 'margin:     5px; ';
    html += 'padding:    10px; ';
    html += 'border:     0.5px solid #606060;';
    html += 'border-radius:  1%;';
    // html += 'background: ';
    // html += 'linear-gradient(0deg,rgba(0,0,0,0.6),rgba(0,0,0,0.8)),';
    // html += 'url(./pics/@PIC_DO@);';
    // html += 'background-position: center center;';
    // html += 'background-size: cover;';
    html += '">';

    html += Make_Q();

    // html += '<h2 id="qa_title">';
    // html += '<span style="border-bottom: solid 2px #FFFFFF;">';
    // html += '@QA_TITLE@';
    // html += '</span>';
    // html += '</h2>';

    // html += '<div id="news_pic_L">';
    // html += '<figure>';
    // html += '<img src="pics/@PIC_WHAT@" width="300px">';
    // html += '</figure>';
    // html += '</div>';
    
    // html += '<p id="news_doc">';
    // html += '　@NEWS_DOC@';
    // for(let i = 0;i < rnd_minmax(2,3);i++)
    // {
    //     html += '@CONECT@、';
    //     html += '@NEWS_DOC@';
    // }
    // html += '</p>';

    // html += '<div id="news_pic_R">';
    // html += '<figure>';
    // html += '<img src="pics/@PIC_DO@" width="300px">';
    // html += '</figure>';
    // html += '</div>';

    // html += '<p id="news_doc">';
    // html += '　@NEWS_DOC@';
    // for(let i = 0;i < rnd_minmax(3,5);i++)
    // {
    //     html += '@CONECT@、';
    //     html += '@NEWS_DOC@';
    // }
    // html += '</p>';

    // html += '<br>';
    
    // html += '@WRITER@';

    // html += '<br>';

    //---- this Q&A END
    html += '</div>';

    let maker = new news_docs_maker();
    let cnt = 0;
    while(true)
    {
        html = maker.gene_docs(html);
        cnt++;
        let chk = html.indexOf('@');
        if (chk < 0) break;
        if (cnt > 10)
        {
            alert('over work : ' + chk.toString());
            break;
        }
    }
    return html;
}

function Make_Q() : string {
    let html = '';
    html += '<div id="q_box" ';
    html += 'style="';
    html += 'margin:     5px; ';
    html += 'padding:    10px; ';
    html += 'border:     0.5px solid #606060;';
    html += 'border-radius:  1%;';
    // html += 'background: ';
    // html += 'linear-gradient(0deg,rgba(0,0,0,0.6),rgba(0,0,0,0.8)),';
    // html += 'url(./pics/@PIC_Q@);';
    // html += 'background-position: center center;';
    // html += 'background-size: cover;';
    html += '">';
    
    html += '@QUESTER@';

    html += '<br>';

    html += '@PART@が、@KEY@ばかりして@THINK@しています。';

    html += '</div>';

    return html;
}




