function set_horo()
{
    set_header_menu(5);

    scrollTo(0,0);

    let html : string = '';
    html += '<div id="main_title">'
    html += '<h1>';
    html += 'Horoscope';
    html += '<small>';
    html += ' H00.03';
    html += '</small>';
    html += '</h1>';
    html += '</div>';

    html += make_horo();

    let elem = document.getElementById('site_main');
    if (elem == null)
    {
        alert('not found "site_main"');
        return;
    }
    elem.innerHTML = ruby_change(html);
}



function make_horo()
{

    let maker = new horo_docs_maker();
    let fixAnimal = new Fix_animal();
    maker.dic_push(fixAnimal);

    let cntHoro = rnd_minmax(4,fixAnimal.countItm + 1);
    let dt = new Date()

    let html : string = '';

    let days = SplitYearDays(cntHoro);

    for(let i = 0; i < 2; i++) {

        html += '<div id="horo_box">';

        for(let j = 0; j < cntHoro; j++) {

            html += '<div id="horo_line">';

            html += '<div id="#horo_colname">';
            html += '@F_ANIMAL@';
            html += '</div>';

            html += '<div id="#horo_colstart">';
            html += date_MD_string(days[j].st);
            html += '</div>';

            html += '<div id="#horo_colto">';
            html += ' ~ ';
            html += '</div>';

            html += '<div id="#horo_colend">';
            html += date_MD_string(days[j].ed);
            html += '</div>';

            html += '</div>';
            
        }
        html += '</div>';

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
        fixAnimal.Reset();
    }
    return html;
    
}

// （固定）ステータス
class Fix_animal extends SctItm_FixSeq implements ISctItm_Selector{
    constructor(){
        super('@F_ANIMAL@','','@ICON_HORO@');
        this.Add(itms_horo_animal);
    }
}

class horo_docs_maker extends news_docs_maker {
    constructor(){
        super();
        // this.dic_push(new Fix_animal());

    }
}





