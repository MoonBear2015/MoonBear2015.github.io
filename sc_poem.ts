const KEY_A : string = '@A';
const KEY_B : string = '@B';


function set_poem()
{
    set_header_menu(2);

    scrollTo(0,0);

    let html : string = '';
    html += '<div id="main_title">'
    html += '<h1>';
    html += 'POEM';
    html += '<small>';
    html += 'P01.13 test';
    html += '</small>';
    html += '</h1>';
    html += '</div>';

    let gt1 = new Gene_tema01();
    let arys = gt1.Generate(8,new SctItm_Selector());

    // test start
    arys.forEach(ary => {
        html += string_html(ary.ToString());
    });
    // test end

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
    html += 'url(./pics/TEMA/@PIC_TEMA);';
    html += 'background-size: ';
    html += 'cover;';
    html += '">';
    
    html += '<h2>';
    html += 'テーマ：@TEMASL@';
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
    html += '@TITLE@'
    html += '</h3>';

    html += '<div>';
    html += '<figure>';
    html += '<img src="pics/TITLE/@PIC_TITLE@" width="40">';
    html += '</figure>';
    html += '</div>';

    html += '<h2 id="poem_main">';
    html += '@POEM_TYPE@';
    html += '</h2>';

    html += '<h4 id="poem_writer" align="right">';
    html += '@WRITER@';
    html += '</h4>';

    html += '</div>';

    return html;

}

class poem_docs_maker extends news_docs_maker {
    constructor(){
        super();
        this.selectors.push(new poemer_type());
        this.selectors.push(new poemer_pattern_A());
        this.selectors.push(new poemer_pattern_B());
        this.selectors.push(new poemer_tema());
        this.selectors.push(new poemer_title());
        this.selectors.push(new poemer_titlepic());
        this.selectors.push(new poemer_tema01());
        this.selectors.push(new poemer_tema02());
        this.selectors.push(new poemer_tema03());
        this.selectors.push(new poemer_tema04());
        this.selectors.push(new poemer_tema05());
    }
}

class poemer_type extends SctItm_SelectLocker implements ISctItm_Selector{
    constructor(){
        super('@POEM_TYPE@');
        this.itms = [
            new SctItm('@TYPE_A@')
            ,
            new SctItm('@TYPE_B@')
        ];
    }
}

class poemer_pattern_A extends SctItm_Selector implements ISctItm_Selector{
    constructor(){
        super('@TYPE_A@');
        this.itms = [
            new SctItm('@TM05@ @ST07@ @ST05@')
            ,
            new SctItm('@ST05@ @TM07@ @ST05@')
            ,
            new SctItm('@ST05@ @ST07@ @TM05@')
        ];
    }
}

class poemer_pattern_B extends SctItm_Selector implements ISctItm_Selector{
    constructor(){
        super('@TYPE_B@');
        this.itms = [
            new SctItm('@TM05@ @ST07@ @ST05@ @ST07@ @ST07@')
            ,
            new SctItm('@ST05@ @TM07@ @ST05@ @ST07@ @ST07@')
            ,
            new SctItm('@ST05@ @ST07@ @TM05@ @ST07@ @ST07@')
            ,
            new SctItm('@ST05@ @ST07@ @ST05@ @TM07@ @ST07@')
            ,
            new SctItm('@ST05@ @ST07@ @ST05@ @ST07@ @TM07@')
        ];
    }
}


// 受賞
class poemer_title extends SctItm_Counter implements ISctItm_Selector{
    constructor(){
        super('@TITLE@');
        this.itms = [
            new SctItm('金賞 受賞作')
            ,
            new SctItm('銀賞 受賞作')
            ,
            new SctItm('銅賞 受賞作')
            ,
            new SctItm('佳作')
            ,
            new SctItm('佳作')
            ,
            new SctItm('佳作')
            ,
            new SctItm('佳作')
            ,
            new SctItm('入選')
        ];
    }
}

// 受賞アイコン
class poemer_titlepic extends SctItm_Counter implements ISctItm_Selector{
    constructor(){
        super('@PIC_TITLE@');
        this.itms = [
            new SctItm('gold.png')
            ,
            new SctItm('silver.png')
            ,
            new SctItm('bronze.png')
            ,
            new SctItm('blue.png')
            ,
            new SctItm('blue.png')
            ,
            new SctItm('blue.png')
            ,
            new SctItm('blue.png')
            ,
            new SctItm('green.png')
        ];
    }
}

class poemer_tema extends SctItm_SelectLocker implements ISctItm_Selector{
    constructor(){
        super('@TEMA@');
        this.itms = [
            new SctItm('@TM01@')
            ,
            new SctItm('@TM02@')
            ,
            new SctItm('@TM03@')
            ,
            new SctItm('@TM04@')
            ,
            new SctItm('@TM05@')
        ];
    }
}

// 季語：春
class Gene_tema01 extends Selector_Generator {
    constructor(){
        super('@TM01@','@PIC_TEMA@');
        this.cods = [
            new SctCod('|春|はる|' ,2,'spring.jpg')
            ,
            new SctCod('|花|はな|',2)
            ,
            new SctCod('|蝶|ちょう|',2)
            ,
            new SctCod('|梅|うめ|',2)
            ,
            new SctCod('|土筆|つくし|',3)
            ,
            new SctCod('|蛙|かえる|',3)
        ];
    }
}


// 季語：春
class poemer_tema01 extends SctItm_FirstLocker implements ISctItm_Selector {
    constructor(){
        super('@TEMA01@','@PIC_TEMA@');
        this.itms = [
            new SctItm('|春|はる|' ,'spring.jpg')
            ,
            new SctItm('|花|はな|')
            ,
            new SctItm('|蝶|ちょう|')
            ,
            new SctItm('|梅|うめ|')
            ,
            new SctItm('|土筆|つくし|')
            ,
            new SctItm('|蛙|かえる|')
        ];
    }
}

// 季語：夏
class poemer_tema02 extends SctItm_FirstLocker implements ISctItm_Selector {
    constructor(){
        super('@TEMA02@','@PIC_TEMA@');
        this.itms = [
            new SctItm('|夏|なつ|' ,'summer.jpg')
            ,
            new SctItm('|虹|にじ|')
            ,
            new SctItm('|浴衣|ゆかた|')
            ,
            new SctItm('|祭|まつり|')
        ];
    }
}

// 季語：秋
class poemer_tema03 extends SctItm_FirstLocker implements ISctItm_Selector {
    constructor(){
        super('@TEMA03@','@PIC_TEMA@');
        this.itms = [
            new SctItm('|秋|あき|' ,'autumn.jpg')
            ,
            new SctItm('|月|つき|')
            ,
            new SctItm('|紅葉|もみじ|')
            ,
            new SctItm('|栗|くり|')
            ,
            new SctItm('|柿|かき|')
            ,
            new SctItm('|芋|いも|')
        ];
    }
}

// 季語：冬
class poemer_tema04 extends SctItm_FirstLocker implements ISctItm_Selector {
    constructor(){
        super('@TEMA04@','@PIC_TEMA@');
        this.itms = [
            new SctItm('|冬|ふゆ|' ,'winter.jpg')
            ,
            new SctItm('|雪|ゆき|')
            ,
            new SctItm('|氷|こおり|')
            ,
            new SctItm('|霜|しも|')
        ];
    }
}

// 季語：天
class poemer_tema05 extends SctItm_FirstLocker implements ISctItm_Selector {
    constructor(){
        super('@TEMA05@','@PIC_TEMA@');
        this.itms = [
            new SctItm('|天|てん|' ,'sky.jpg')
            ,
            new SctItm('|月|つき|')
            ,
            new SctItm('|星|ほし|')
            ,
            new SctItm('|雲|くも|')
            ,
            new SctItm('|空|そら|')
        ];
    }
}

