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
    html += 'P01.33';
    html += '</small>';
    html += '</h1>';
    html += '</div>';

    // // test start

    // let gt1 = new Gene_tema20();
    // let arys = gt1.Generate();

    // arys.forEach(ary => {
    //     html += string_html(ary.ToString());
    // });
    // // test end

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
    html += 'url(./pics/TEMA/@PIC_TEMA@);';
    html += 'background-size: ';
    html += 'contain;';
    html += '">';
    
    html += '<h2>';
    html += 'テーマ：@TEMA@';
    html += '</h2>';
    for(let i = 0;i < rnd_minmax(10,20); i++) {
        html += make_poem_sub();
    }

    html += '</div>';

    let maker = new poem_docs_maker();
    let maker_tema = new poem_docs_maker_tema();
    let maker_sent = new poem_docs_maker_sent();
    let maker_im = new poem_docs_maker_im();
    let maker_c = new poem_docs_maker_c();

    let cnt = 0;
    while(true)
    {
        html = maker.gene_docs(html);

        html = maker_tema.gene_docs(html);
        html = maker_sent.gene_docs(html);
    
        html = maker_im.gene_docs(html);
    
        html = maker_c.gene_docs(html);
    
        cnt++;
        let chk = html.indexOf('@');
        if (chk < 0) break;
        if (cnt > 20)
        {
            alert('over work : ' + chk.toString());
            break;
        }
    }

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
    html += '<img src="pics/TITLE/@PIC_TITLE@" width="70px">';
    html += '</figure>';
    html += '</div>';

    html += '<h2 id="poem_main">';
    html += '@POEM_TYPE@';
    html += '</h2>';

    html += '<br>';
    
    html += '@WRITER@';

    html += '<br>';

    html += '</div>';

    return html;

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
            new SctItm('@TEMA05@ @SENT07@ @SENT05@')
            ,
            new SctItm('@SENT05@ @TEMA07@ @SENT05@')
            ,
            new SctItm('@SENT05@ @SENT07@ @TEMA05@')
            ,
            new SctItm('@TEMA05@ @TEMA07@ @SENT05@')
            ,
            new SctItm('@SENT05@ @TEMA07@ @TEMA05@')
            ,
            new SctItm('@TEMA05@ @TEMA07@ @TEMA05@')
        ];
    }
}

class poemer_pattern_B extends SctItm_Selector implements ISctItm_Selector{
    constructor(){
        super('@TYPE_B@');
        this.itms = [
            new SctItm('@TEMA05@ @SENT07@ @SENT05@<br>@SENT07@ @SENT07@')
            ,
            new SctItm('@SENT05@ @TEMA07@ @SENT05@<br>@SENT07@ @SENT07@')
            ,
            new SctItm('@SENT05@ @SENT07@ @TEMA05@<br>@SENT07@ @SENT07@')
            ,
            new SctItm('@SENT05@ @SENT07@ @SENT05@<br>@TEMA07@ @SENT07@')
            ,
            new SctItm('@SENT05@ @SENT07@ @SENT05@<br>@SENT07@ @TEMA07@')
            ,
            new SctItm('@SENT05@ @SENT07@ @SENT05@<br>@TEMA07@ @TEMA07@')
            ,
            new SctItm('@TEMA05@ @TEMA07@ @TEMA05@<br>@SENT07@ @SENT07@')
            ,
            new SctItm('@TEMA05@ @TEMA07@ @TEMA05@<br>@TEMA07@ @TEMA07@')
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
        super('@TEMA');
        this.itms = [
            new SctItm('@TM01')
            ,
            new SctItm('@TM02')
            ,
            new SctItm('@TM03')
            ,
            new SctItm('@TM04')
            ,
            new SctItm('@TM05')
            ,
            new SctItm('@TM06')
            ,
            new SctItm('@TM07')
            ,
            new SctItm('@TM08')
            ,
            new SctItm('@TM09')
            ,
            new SctItm('@TM10')
            ,
            new SctItm('@TM11')
            ,
            new SctItm('@TM12')
            ,
            new SctItm('@TM13')
            ,
            new SctItm('@TM14')
            ,
            new SctItm('@TM15')
            ,
            new SctItm('@TM16')
            ,
            new SctItm('@TM17')
            ,
            new SctItm('@TM18')
            ,
            new SctItm('@TM19')
            ,
            new SctItm('@TM20')
            ,
            new SctItm('@TM21')
        ];
    }
}

class Gene_Poemer extends Selector_Generator {
    constructor(
        in_itm_key? : string
        ,
        in_pic_key? : string
    )
    {
        super(in_itm_key,in_pic_key,'',KEY_B,2,2);
    }
    Generate() : ISctItm_Selector[] {
        return super.Generate(7,new SctItm_FirstLocker(),new SctItm_Selector);
    }
}

// 季語：春
class Gene_tema01 extends Gene_Poemer {
    constructor(){
        super('@TM01','@PIC_TEMA@');
        this.Add_cods(cods_spring);
        this.Add_cods(cods_flower_spring);
        this.Add_cods(cods_bird_spring);
    }
}

// 季語：夏
class Gene_tema02 extends Gene_Poemer {
    constructor(){
        super('@TM02','@PIC_TEMA@');
        this.Add_cods(cods_summer);
        this.Add_cods(cods_flower_summer);
        this.Add_cods(cods_bird_summer);
    }
}

// 季語：秋
class Gene_tema03 extends Gene_Poemer {
    constructor(){
        super('@TM03','@PIC_TEMA@');
        this.Add_cods(cods_autumn);
        this.Add_cods(cods_flower_autumn);
        this.Add_cods(cods_bird_autumn);
    }
}

// 季語：冬
class Gene_tema04 extends Gene_Poemer {
    constructor(){
        super('@TM04','@PIC_TEMA@');
        this.Add_cods(cods_winter);
        this.Add_cods(cods_flower_winter);
        this.Add_cods(cods_bird_winter);
    }
}

// 季語：空
class Gene_tema05 extends Gene_Poemer {
    constructor(){
        super('@TM05','@PIC_TEMA@');
        this.Add_cods(cods_sky);
        this.Add_cods(cods_star);
        this.Add_cods(cods_sun);
        this.Add_cods(cods_moon);
        this.Add_cods(cods_weather);
    }
}

// 季語：花
class Gene_tema06 extends Gene_Poemer {
    constructor(){
        super('@TM06','@PIC_TEMA@');
        this.Add_cods(cods_flower);
        this.Add_cods(cods_flower_spring);
        this.Add_cods(cods_flower_summer);
        this.Add_cods(cods_flower_autumn);
        this.Add_cods(cods_flower_winter);
    }
}

// 季語：星
class Gene_tema07 extends Gene_Poemer {
    constructor(){
        super('@TM07','@PIC_TEMA@');
        this.Add_cods(cods_star);
    }
}

// 季語：天気
class Gene_tema08 extends Gene_Poemer {
    constructor(){
        super('@TM08','@PIC_TEMA@');
        this.Add_cods(cods_weather);
    }
}

// 季語：月
class Gene_tema09 extends Gene_Poemer {
    constructor(){
        super('@TM09','@PIC_TEMA@');
        this.Add_cods(cods_moon);
    }
}

// 季語：春の花
class Gene_tema10 extends Gene_Poemer {
    constructor(){
        super('@TM10','@PIC_TEMA@');
        this.Add_cods(cods_flower_spring);
    }
}

// 季語：夏の花
class Gene_tema11 extends Gene_Poemer {
    constructor(){
        super('@TM11','@PIC_TEMA@');
        this.Add_cods(cods_flower_summer);
    }
}

// 季語：秋の花
class Gene_tema12 extends Gene_Poemer {
    constructor(){
        super('@TM12','@PIC_TEMA@');
        this.Add_cods(cods_flower_autumn);
    }
}

// 季語：冬の花
class Gene_tema13 extends Gene_Poemer {
    constructor(){
        super('@TM13','@PIC_TEMA@');
        this.Add_cods(cods_flower_winter);
    }
}

// 季語：鳥
class Gene_tema14 extends Gene_Poemer {
    constructor(){
        super('@TM14','@PIC_TEMA@');
        this.Add_cods(cods_bird);
        this.Add_cods(cods_bird_spring);
        this.Add_cods(cods_bird_summer);
        this.Add_cods(cods_bird_autumn);
        this.Add_cods(cods_bird_winter);
    }
}

// 季語：春の鳥
class Gene_tema15 extends Gene_Poemer {
    constructor(){
        super('@TM15','@PIC_TEMA@');
        this.Add_cods(cods_bird_spring);
    }
}

// 季語：夏の鳥
class Gene_tema16 extends Gene_Poemer {
    constructor(){
        super('@TM16','@PIC_TEMA@');
        this.Add_cods(cods_bird_summer);
    }
}

// 季語：秋の鳥
class Gene_tema17 extends Gene_Poemer {
    constructor(){
        super('@TM17','@PIC_TEMA@');
        this.Add_cods(cods_bird_autumn);
    }
}

// 季語：冬の鳥
class Gene_tema18 extends Gene_Poemer {
    constructor(){
        super('@TM18','@PIC_TEMA@');
        this.Add_cods(cods_bird_winter);
    }
}

// 季語：獣
class Gene_tema19 extends Gene_Poemer {
    constructor(){
        super('@TM19','@PIC_TEMA@');
        this.Add_cods(cods_animal);
    }
}

// 季語：道
class Gene_tema20 extends Gene_Poemer {
    constructor(){
        super('@TM20','@PIC_TEMA@');
        this.Add_cods(cods_load);
    }
}

// 季語：踊る
class Gene_tema21 extends Gene_Poemer {
    constructor(){
        super('@TM21','@PIC_TEMA@');
        this.Add_cods(cods_move_dance);
    }
}


// 一般
class Gene_sent extends Gene_Poemer {
    constructor(){
        super('@SENT');
        this.Add_cods(cods_nature);
        // this.Add_cods(cods_body);
        this.Add_cods(cods_home);
        this.Add_cods(cods_town);
        this.Add_cods(cods_load);
        this.Add_cods(cods_weather);
        // this.Add_cods(cods_what);
        // this.Add_cods(cods_where);
        this.Add_cods(cods_when);
        // this.Add_cods(cods_item_color);

        this.Add_cods(cods_move);
        this.Add_cods(cods_move_dance);
        this.Add_cods(cods_move_run);
        this.Add_cods(cods_move_fly);
        this.Add_cods(cods_move_walk);
        this.Add_cods(cods_move_stop);
        this.Add_cods(cods_move_open);
        this.Add_cods(cods_move_life);
        this.Add_cods(cods_move_death);
        this.Add_cods(cods_move_light);
        this.Add_cods(cods_move_dark);
        this.Add_cods(cods_adject_color);
        this.Add_cods(cods_adject_beauty);

    }
}

class Gene_move extends Gene_Poemer {
    constructor(){
        super('@M');
        this.Add_cods(cods_move);
        this.Add_cods(cods_move_dance);
        this.Add_cods(cods_move_run);
        this.Add_cods(cods_move_fly);
        this.Add_cods(cods_move_walk);
        this.Add_cods(cods_move_stop);
        this.Add_cods(cods_move_open);
        this.Add_cods(cods_move_life);
        this.Add_cods(cods_move_death);
        this.Add_cods(cods_move_light);
        this.Add_cods(cods_move_dark);
        this.Add_cods(cods_adject_color);
        this.Add_cods(cods_adject_beauty);
        // this.Add_cods(cods_move_which);
    }
}

class Gene_item extends Gene_Poemer {
    constructor(){
        super('@I');
        this.Add_cods(cods_nature);
        // this.Add_cods(cods_body);
        // this.Add_cods(cods_home);
        // this.Add_cods(cods_town);
        // this.Add_cods(cods_load);
        this.Add_cods(cods_weather);
        // this.Add_cods(cods_what);
        // this.Add_cods(cods_where);
        this.Add_cods(cods_when);
        // this.Add_cods(cods_item_color);

    }
}

class Gene_conect extends Gene_Poemer {
    constructor(){
        super('@C');
        this.Add_cods(cods_conect);
    }
}



class poem_docs_maker extends news_docs_maker {
    constructor(){
        super();
        this.dic_push(new poemer_type());
        this.dic_push(new poemer_pattern_A());
        this.dic_push(new poemer_pattern_B());
        this.dic_push(new poemer_tema());
        this.dic_push(new poemer_title());
        this.dic_push(new poemer_titlepic());
    }
}

class poem_docs_maker_tema extends docs_maker {
    constructor(){
        super();
        this.dic_concat(new Gene_tema01().Generate());
        this.dic_concat(new Gene_tema02().Generate());
        this.dic_concat(new Gene_tema03().Generate());
        this.dic_concat(new Gene_tema04().Generate());
        this.dic_concat(new Gene_tema05().Generate());
        this.dic_concat(new Gene_tema06().Generate());
        this.dic_concat(new Gene_tema07().Generate());
        this.dic_concat(new Gene_tema08().Generate());
        this.dic_concat(new Gene_tema09().Generate());
        this.dic_concat(new Gene_tema10().Generate());
        this.dic_concat(new Gene_tema11().Generate());
        this.dic_concat(new Gene_tema12().Generate());
        this.dic_concat(new Gene_tema13().Generate());
        this.dic_concat(new Gene_tema14().Generate());
        this.dic_concat(new Gene_tema15().Generate());
        this.dic_concat(new Gene_tema16().Generate());
        this.dic_concat(new Gene_tema17().Generate());
        this.dic_concat(new Gene_tema18().Generate());
        this.dic_concat(new Gene_tema19().Generate());
        this.dic_concat(new Gene_tema20().Generate());
        this.dic_concat(new Gene_tema21().Generate());
    }
}

class poem_docs_maker_sent extends docs_maker {
    constructor(){
        super();
        this.dic_concat(new Gene_sent().Generate());
    }
}

class poem_docs_maker_im extends docs_maker {
    constructor(){
        super();
        this.dic_concat(new Gene_item().Generate());
        this.dic_concat(new Gene_move().Generate());
    }
}

class poem_docs_maker_c extends docs_maker {
    constructor(){
        super();
        this.dic_concat(new Gene_conect().Generate());
    }
}

