function set_poem()
{
    set_header_menu(2);

    scrollTo(0,0);

    let html : string = '';
    html += '<div id="main_title">'
    html += '<h1>';
    html += 'POEM';
    html += '<small>';
    html += 'R01.05';
    html += '</small>';
    html += '</h1>';
    html += '</div>';

    for(let i = 0; i < 3; i++){
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

function make_poem() : string
{
    let html : string = '';
    
    html += '<div>';
    html += '<h2>';
    html += 'テーマ：春';
    html += '</h2>';
    for(let i = 0;i < rnd_minmax(10,20); i++) {
        html += make_poem_sub();
    }

    html += '</div>';

    let maker = new poem_docs_maker();
    html = maker.gene_docs(html);
    html = maker.gene_docs(html);

    return ruby_change(html);
}

function make_poem_sub() : string
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
    html += 'url(./pics/#PIC_KEY);';
    html += 'background-size: ';
    html += 'cover;';
    html += '">';

    html += '<h3 id="poem_title">';
    html += '#TITLE'
    html += '</h3>';

    html += '<div>';
    html += '<figure>';
    html += '<img src="pics/TITLE/#PIC_TITLE" width="50">';
    html += '</figure>';
    html += '</div>';

    html += '<h2 id="poem_main">';
    html += '#POEM';
    html += '</h2>';
    html += '</div>';

    return html;

}

class poem_docs_maker {
    protected selectors : INwsItm_Selector[];
    constructor(){
        this.selectors  = new Array<INwsItm_Selector>();
        this.selectors.push(new poemer_title());
        this.selectors.push(new poemer_titlepic());
    }

    public gene_docs(temp_doc : string) : string {
        let result = temp_doc;
        this.selectors.forEach(
            (value) => {
                if (value.news_key != ''){
                    while(result.search(value.news_key) != -1){
                        let itm = value.rnd_Itm;
                        result = result.replace(value.news_key,itm.Wrd);
                        if (value.pic_key != ''){
                            while(result.search(value.pic_key) != -1){
                                result = result.replace(value.pic_key,itm.NwsPic);
                            }
                        }
                    }
                }
            }
        );
        return result;
    }
}


// 受賞
class poemer_title extends PmsWrd_Counter implements INwsItm_Selector{
    constructor(){
        super('#TITLE');
        this.itms = [
            new NwsWrd('金賞 受賞作')
            ,
            new NwsWrd('銀賞 受賞作')
            ,
            new NwsWrd('銅賞 受賞作')
            ,
            new NwsWrd('佳作')
            ,
            new NwsWrd('入選')
        ];
    }
}

// 受賞アイコン
class poemer_titlepic extends PmsWrd_Counter implements INwsItm_Selector{
    constructor(){
        super('#PIC_TITLE');
        this.itms = [
            new NwsWrd('gold.png')
            ,
            new NwsWrd('silver.png')
            ,
            new NwsWrd('bronze.png')
            ,
            new NwsWrd('blue.png')
            ,
            new NwsWrd('green.png')
        ];
    }
}

class poemer_tema extends NwsWrd_SelectLocker implements INwsItm_Selector{
    constructor(){
        super('#TEMASL');
        this.itms = [
            new NwsWrd('TEMA01')
            ,
            new NwsWrd('TEMA02')
            ,
            new NwsWrd('TEMA03')
            ,
            new NwsWrd('TEMA04')
            ,
            new NwsWrd('TEMA05')
        ];
    }

}

