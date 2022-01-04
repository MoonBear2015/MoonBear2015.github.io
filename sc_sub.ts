//------------------------------------ test
interface TestItem {
    ToString() : string;
}

function testItems_string(in_tests : Array<TestItem>) : string
{
    let str = '';
    in_tests.forEach(test => {
        str += test.ToString() + '\r\n';
    });
    return str;
}

function string_html(in_string : string) : string
{
    let result = in_string;
    while(true)
    {
        if (result.indexOf('\r\n') == -1) break;
        result = result.replace('\r\n','<br>');
    }
    return result;
}

function testItems_html(in_tests : Array<TestItem>) : string
{
    let str = '';
    str += '<div>';
    str += '----------------<br>';

    in_tests.forEach(test => {
        str += test.ToString() + '<br>';
    });

    str += '----------------<br>';
    str += '</div>';

    return str;
}


function testItems_alert(in_tests : Array<TestItem>)
{
    let str = '';
    in_tests.forEach(test => {
        str += test.ToString() + '\r\n';
    });
    alert(str);
}

//------------------------------------ etc
const zP2 = new Intl.NumberFormat('ja', { minimumIntegerDigits: 2 })
const zP3 = new Intl.NumberFormat('ja', { minimumIntegerDigits: 3 })

function char_cnt(in_str : string,in_chr : string) {
    return in_str.split(in_chr).length - 1;
}
function char_del(in_str : string,in_chr : string) : string {
    let result = in_str;
    for(let i = 0;i < in_chr.length;i++) {
        result = replaceAll(result,in_chr[i],'');
    }
    return result;
}

let replaceAll = function(str : string, before : string, after : string) : string
{
    return str.split(before).join(after);
};

class AB implements TestItem {
    constructor(
        public A : number
        ,
        public B : number
    )
    {}

    ToString() : string {
        return '(' + this.A + ',' + this.B + ')';
    }
}

function sepalate_number(num : number) : Array<AB>
{
    let results = new Array<AB>();
    for(let i = 0; i <= num; i++)
    {
        results.push(new AB(i,num - i));
    }
    return results;    
}

//------------------------------------ japanese text

function cods_to_itms(in_cods : ISctCod[]) : ISctItm[]
{
    let results = new Array<ISctItm>();
    in_cods.forEach((cod) => {
        results.push(cod.to_SctItm_NoRubi());
    });
    return results;
}

function cods_ruby_to_itms(in_cods : ISctCod[]) : ISctItm[]
{
    let results = new Array<ISctItm>();
    in_cods.forEach((cod) => {
        results.push(cod.to_SctItm_Rubi());
    });
    return results;
}

function cods_rubyKana_to_itms(in_cods : ISctCod[]) : ISctItm[]
{
    let results = new Array<ISctItm>();
    in_cods.forEach((cod) => {
        results.push(cod.to_SctItm_RubiKana());
    });
    return results;
}


function ruby_check(in_str : string) : boolean {
    let cnt = char_cnt(in_str,'\|');
    let sts : boolean = ((cnt % 3) == 0);
    return ((cnt % 3) == 0);
}

function ruby_kana(in_str : string) : string {
    //if (!ruby_check(in_str)) return in_str;
    let strs = in_str.split('|');
    let result : string = '';
    let sts : number = 0;
    strs.forEach((str) => {
        switch(sts) {
            case 0:
                result += str;
                break;
            case 1:
                break;
            case 2:
                result += str;
                break;
            default:
                result += str;
                sts = 0;
                break;
        }
        sts++;
    });
    return result;
}

function ruby_no(in_str : string) : string {
    if (!ruby_check(in_str)) return in_str;
    let strs = in_str.split('|');
    let result : string = '';
    let sts : number = 0;
    strs.forEach((str) => {
        switch(sts) {
            case 0:
                result += str;
                break;
            case 1:
                result += str;
                break;
            case 2:
                break;
            default:
                result += str;
                sts = 0;
                break;
        }
        sts++;
    });
    return result;

}

function ruby_beat(in_str : string) : number {
    let str = ruby_kana(in_str);
    str = char_del(str,'ぁぃぅぇぉゎゃゅょァィゥェォヮャュョ・');
    return str.length;
}

function ruby_change(in_html : string) : string {
    let result : string = '';
    let rubytags = [
        '<ruby><rb>'
        ,
        '</rb><rt>'
        ,
        '</rt></ruby>'
    ]
    let rcnt = -1;
    if (!ruby_check(in_html)) {
        alert('[ruby error] ' + in_html);
    }
    for(let i = 0;i < in_html.length;i++)
    {
        let ch = in_html[i];
        if ( ch == '|')
        {
            rcnt++;
            if (rcnt > 2)
            {
                rcnt = 0;
            } 
            result += rubytags[rcnt];
        }
        else
        {
            result += ch;
        }
    }
    return result;
}

function star_str(in_score : number,in_max? : number) : string {
    let score = Math.floor(in_score);
    let mill = 0;
    if (score != in_score) mill = 1;
    let max = 5;
    if (in_max) max = in_max;

    let result = '';
    result += '★'.repeat(score);
    result += '☆'.repeat(mill)
    result += '・'.repeat(max - score - mill);

    return result;
}

function hiraToKana(str : string) : string {
    return str.replace(/[\u3041-\u3096]/g, function(match) {
        var chr = match.charCodeAt(0) + 0x60;
        return String.fromCharCode(chr);
    });
}

function kanaToHira(str : string)  : string {
    return str.replace(/[\u30a1-\u30f6]/g, function(match) {
        var chr = match.charCodeAt(0) - 0x60;
        return String.fromCharCode(chr);
    });
}
