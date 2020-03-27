"use strict";
const KEY_A = '@A';
const KEY_B = '@B';
function set_poem() {
    set_header_menu(2);
    scrollTo(0, 0);
    let html = '';
    html += '<div id="main_title">';
    html += '<h1>';
    html += 'POEM';
    html += '<small>';
    html += 'P01.16 test';
    html += '</small>';
    html += '</h1>';
    html += '</div>';
    let gt1 = new Gene_tema01();
    let arys = gt1.Generate();
    // // test start
    // let maker = new poem_docs_maker();
    // maker.selectors.forEach(ary => {
    //     html += string_html(ary.ToString());
    // });
    // // test end
    for (let i = 0; i < 5; i++) {
        html += make_poem();
    }
    let elem = document.getElementById('site_main');
    if (elem == null) {
        alert('not found "site_main"');
        return;
    }
    elem.innerHTML = html;
}
function make_poem() {
    let html = '';
    html += '<div id="poem_box" ';
    html += 'style="';
    html += 'margin:     5px; ';
    html += 'padding:    5px; ';
    html += 'border:     0.5px solid #606060;';
    html += 'border-radius:  1%;';
    html += 'background: ';
    html += 'linear-gradient(135deg,rgba(30,30,30,0.8),rgba(120,120,120,0.8)),';
    html += 'url(./pics/TEMA/@PIC_TEMA@);';
    html += 'background-size: ';
    html += 'cover;';
    html += '">';
    html += '<h2>';
    html += 'テーマ：@TEMA@';
    html += '</h2>';
    for (let i = 0; i < rnd_minmax(10, 20); i++) {
        html += make_poem_sub();
    }
    html += '</div>';
    let maker = new poem_docs_maker();
    html = maker.gene_docs(html);
    html = maker.gene_docs(html);
    return ruby_change(html);
}
function make_poem_sub() {
    let html = '';
    html += '<div id="poem_sub" ';
    html += 'style="';
    html += 'margin:     5px; ';
    html += 'padding:    5px; ';
    html += 'border:     0.5px solid #606060;';
    html += 'border-radius:  1%;';
    html += '">';
    html += '<h3 id="poem_title">';
    html += '@TITLE@';
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
class poemer_type extends SctItm_SelectLocker {
    constructor() {
        super('@POEM_TYPE@');
        this.itms = [
            new SctItm('@TYPE_A@'),
            new SctItm('@TYPE_B@')
        ];
    }
}
class poemer_pattern_A extends SctItm_Selector {
    constructor() {
        super('@TYPE_A@');
        this.itms = [
            new SctItm('@TEMA05@ @SENT07@ @SENT05@'),
            new SctItm('@SENT05@ @TEMA07@ @SENT05@'),
            new SctItm('@SENT05@ @SENT07@ @TEMA05@')
        ];
    }
}
class poemer_pattern_B extends SctItm_Selector {
    constructor() {
        super('@TYPE_B@');
        this.itms = [
            new SctItm('@TEMA05@ @SENT07@ @SENT05@ @SENT07@ @SENT07@'),
            new SctItm('@SENT05@ @TEMA07@ @SENT05@ @SENT07@ @SENT07@'),
            new SctItm('@SENT05@ @SENT07@ @TEMA05@ @SENT07@ @SENT07@'),
            new SctItm('@SENT05@ @SENT07@ @SENT05@ @TEMA07@ @SENT07@'),
            new SctItm('@SENT05@ @SENT07@ @SENT05@ @SENT07@ @TEMA07@')
        ];
    }
}
// 受賞
class poemer_title extends SctItm_Counter {
    constructor() {
        super('@TITLE@');
        this.itms = [
            new SctItm('金賞 受賞作'),
            new SctItm('銀賞 受賞作'),
            new SctItm('銅賞 受賞作'),
            new SctItm('佳作'),
            new SctItm('佳作'),
            new SctItm('佳作'),
            new SctItm('佳作'),
            new SctItm('入選')
        ];
    }
}
// 受賞アイコン
class poemer_titlepic extends SctItm_Counter {
    constructor() {
        super('@PIC_TITLE@');
        this.itms = [
            new SctItm('gold.png'),
            new SctItm('silver.png'),
            new SctItm('bronze.png'),
            new SctItm('blue.png'),
            new SctItm('blue.png'),
            new SctItm('blue.png'),
            new SctItm('blue.png'),
            new SctItm('green.png')
        ];
    }
}
class poemer_tema extends SctItm_SelectLocker {
    constructor() {
        super('@TEMA');
        this.itms = [
            new SctItm('@TM01'),
            new SctItm('@TM02'),
            new SctItm('@TM03'),
            new SctItm('@TM04'),
            new SctItm('@TM05')
        ];
    }
}
class Gene_Poemer extends Selector_Generator {
    constructor(in_itm_key, in_pic_key) {
        super(in_itm_key, in_pic_key);
    }
    Generate() {
        return super.Generate(7, new SctItm_FirstLocker(), new SctItm_Selector);
    }
}
// 季語：春
class Gene_tema01 extends Gene_Poemer {
    constructor() {
        super('@TM01', '@PIC_TEMA@');
        this.Add_cods(cods_spring);
        this.Add_cods(cods_flower_spring);
    }
}
// 季語：夏
class Gene_tema02 extends Gene_Poemer {
    constructor() {
        super('@TM02', '@PIC_TEMA@');
        this.Add_cods(cods_summer);
    }
}
// 季語：秋
class Gene_tema03 extends Gene_Poemer {
    constructor() {
        super('@TM03', '@PIC_TEMA@');
        this.Add_cods(cods_autumn);
    }
}
// 季語：冬
class Gene_tema04 extends Gene_Poemer {
    constructor() {
        super('@TM04', '@PIC_TEMA@');
        this.Add_cods(cods_winter);
    }
}
// 季語：冬
class Gene_tema05 extends Gene_Poemer {
    constructor() {
        super('@TM05', '@PIC_TEMA@');
        this.Add_cods(cods_sky);
    }
}
class poem_docs_maker extends news_docs_maker {
    constructor() {
        super();
        this.selectors.push(new poemer_type());
        this.selectors.push(new poemer_pattern_A());
        this.selectors.push(new poemer_pattern_B());
        this.selectors.push(new poemer_tema());
        this.selectors.push(new poemer_title());
        this.selectors.push(new poemer_titlepic());
        this.selectors = this.selectors.concat(new Gene_tema01().Generate());
        this.selectors = this.selectors.concat(new Gene_tema02().Generate());
        this.selectors = this.selectors.concat(new Gene_tema03().Generate());
        this.selectors = this.selectors.concat(new Gene_tema04().Generate());
        this.selectors = this.selectors.concat(new Gene_tema05().Generate());
    }
}
