function set_poem()
{
    set_header_menu(2);

    scrollTo(0,0);

    let html : string = '';
    html += '<div id="main_title">'
    html += '<h1>';
    html += 'POEM';
    html += '<small>';
    html += 'R01.07';
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

function make_poem() : string
{
    let html : string = '';
    html += '<div id="poem_box" ';
    html += 'style="';
    html += 'margin:     5px; ';
    html += 'padding:    5px; ';
    html += 'border:     0.5px solid #606060;';
    html += 'border-radius:  1%;';
    html += 'background: ';
    html += 'linear-gradient(135deg,rgba(30,30,30,0.8),rgba(120,120,120,0.8)),';
    html += 'url(./pics/TEMA/#PIC_TEMA);';
    html += 'background-size: ';
    html += 'cover;';
    html += '">';
    
    html += '<h2>';
    html += 'テーマ：#TEMASL';
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

    html += '<div id="poem_sub" ';
    html += 'style="';
    html += 'margin:     5px; ';
    html += 'padding:    5px; ';
    html += 'border:     0.5px solid #606060;';
    html += 'border-radius:  1%;';
    html += '">';

    html += '<h3 id="poem_title">';
    html += '#TITLE'
    html += '</h3>';

    html += '<div>';
    html += '<figure>';
    html += '<img src="pics/TITLE/#PIC_TITLE" width="40">';
    html += '</figure>';
    html += '</div>';

    html += '<h2 id="poem_main">';
    html += '#TEMASL';
    html += '</h2>';
    html += '</div>';

    return html;

}

class poem_docs_maker {
    protected selectors : ISctItm_Selector[];
    constructor(){
        this.selectors  = new Array<ISctItm_Selector>();
        this.selectors.push(new poemer_tema());
        this.selectors.push(new poemer_title());
        this.selectors.push(new poemer_titlepic());
        this.selectors.push(new poemer_tema01());
        this.selectors.push(new poemer_tema02());
        this.selectors.push(new poemer_tema03());
        this.selectors.push(new poemer_tema04());
        this.selectors.push(new poemer_tema05());
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
                                result = result.replace(value.pic_key,itm.SctPic);
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
class poemer_title extends SctWrd_Counter implements ISctItm_Selector{
    constructor(){
        super('#TITLE');
        this.itms = [
            new SctWrd('金賞 受賞作')
            ,
            new SctWrd('銀賞 受賞作')
            ,
            new SctWrd('銅賞 受賞作')
            ,
            new SctWrd('佳作')
            ,
            new SctWrd('佳作')
            ,
            new SctWrd('佳作')
            ,
            new SctWrd('佳作')
            ,
            new SctWrd('入選')
        ];
    }
}

// 受賞アイコン
class poemer_titlepic extends SctWrd_Counter implements ISctItm_Selector{
    constructor(){
        super('#PIC_TITLE');
        this.itms = [
            new SctWrd('gold.png')
            ,
            new SctWrd('silver.png')
            ,
            new SctWrd('bronze.png')
            ,
            new SctWrd('blue.png')
            ,
            new SctWrd('blue.png')
            ,
            new SctWrd('blue.png')
            ,
            new SctWrd('blue.png')
            ,
            new SctWrd('green.png')
        ];
    }
}

class poemer_tema extends SctWrd_SelectLocker implements ISctItm_Selector{
    constructor(){
        super('#TEMASL');
        this.itms = [
            new SctWrd('#TEMA01')
            ,
            new SctWrd('#TEMA02')
            ,
            new SctWrd('#TEMA03')
            ,
            new SctWrd('#TEMA04')
            ,
            new SctWrd('#TEMA05')
        ];
    }
}

// 季語：２文字（１字余り可）
class poemer_tema01 extends SctItm_FirstLocker implements ISctItm_Selector {
    constructor(){
        super('#TEMA01','#PIC_TEMA');
        this.itms = [
            new SctItm('|春|はる|' ,'spring.jpg')
            ,
            new SctItm('|花|はな|','')
            ,
            new SctItm('|蝶|ちょう|','')
            ,
            new SctItm('|梅|うめ|','')
            ,
            new SctItm('|土筆|つくし|','')
            ,
            new SctItm('|蛙|かえる|','')
        ];
    }
}

// 季語：２文字（１字余り可）
class poemer_tema02 extends SctItm_FirstLocker implements ISctItm_Selector {
    constructor(){
        super('#TEMA02','#PIC_TEMA');
        this.itms = [
            new SctItm('|夏|なつ|' ,'summer.jpg')
            ,
            new SctItm('|虹|にじ|','')
            ,
            new SctItm('|浴衣|ゆかた|','')
            ,
            new SctItm('|祭|まつり|','')
        ];
    }
}

// 季語：２文字（１字余り可）
class poemer_tema03 extends SctItm_FirstLocker implements ISctItm_Selector {
    constructor(){
        super('#TEMA03','#PIC_TEMA');
        this.itms = [
            new SctItm('|秋|あき|' ,'autumn.jpg')
            ,
            new SctItm('|月|つき|','')
            ,
            new SctItm('|紅葉|もみじ|','')
            ,
            new SctItm('|栗|くり|','')
            ,
            new SctItm('|柿|かき|','')
            ,
            new SctItm('|芋|いも|','')
        ];
    }
}

// 季語：２文字（１字余り可）
class poemer_tema04 extends SctItm_FirstLocker implements ISctItm_Selector {
    constructor(){
        super('#TEMA04','#PIC_TEMA');
        this.itms = [
            new SctItm('|冬|ふゆ|' ,'winter.jpg')
            ,
            new SctItm('|雪|ゆき|','')
            ,
            new SctItm('|氷|こおり|','')
            ,
            new SctItm('|霜|しも|','')
        ];
    }
}

// 季語：２文字（１字余り可）
class poemer_tema05 extends SctItm_FirstLocker implements ISctItm_Selector {
    constructor(){
        super('#TEMA05','#PIC_TEMA');
        this.itms = [
            new SctItm('|天|てん|' ,'sky.jpg')
            ,
            new SctItm('|月|つき|','')
            ,
            new SctItm('|星|ほし|','')
            ,
            new SctItm('|雲|くも|','')
            ,
            new SctItm('|空|そら|','')
        ];
    }
}

