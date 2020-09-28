"use strict";
function TestItems_String(in_tests) {
    let str = '';
    in_tests.forEach(test => {
        str += test.toString() + '\r\n';
    });
    return str;
}
function cr_br(in_string) {
    let result = in_string;
    while (true) {
        if (result.indexOf('\r\n') == -1)
            break;
        result = result.replace('\r\n', '<br>');
    }
    return result;
}
function TestItems_html(in_tests) {
    let str = '';
    str += '<div>';
    str += '----------------<br>';
    in_tests.forEach(test => {
        str += test.toString() + '<br>';
    });
    str += '----------------<br>';
    str += '</div>';
    return str;
}
function TestItems_alert(in_tests) {
    let str = '';
    in_tests.forEach(test => {
        str += test.toString() + '\r\n';
    });
    alert(str);
}
//------------------------------------ etc
const zP2 = new Intl.NumberFormat('ja', { minimumIntegerDigits: 2 });
const zP3 = new Intl.NumberFormat('ja', { minimumIntegerDigits: 3 });
const char_cnt = (in_str, in_chr) => {
    return in_str.split(in_chr).length - 1;
};
function char_del(in_str, in_chr) {
    let result = in_str;
    for (let i = 0; i < in_chr.length; i++) {
        result = replaceAll(result, in_chr[i], '');
    }
    return result;
}
let replaceAll = function (str, before, after) {
    return str.split(before).join(after);
};
class AB {
    constructor(A, B) {
        this.A = A;
        this.B = B;
    }
    toString() {
        return '(' + this.A + ',' + this.B + ')';
    }
}
function sepalate_number(num) {
    let results = new Array();
    for (let i = 0; i <= num; i++) {
        results.push(new AB(i, num - i));
    }
    return results;
}
//------------------------------------ key text
const KEYS_CHR = ",";
const keyText_keys = (inText) => inText.split(KEYS_CHR);
const keys_keyText = (inKeys) => {
    let result = "";
    inKeys.forEach(key => {
        if (result === "")
            result += KEYS_CHR;
        result += key;
    });
    return result;
};
const isInKeys = (inText, inKey) => inText.indexOf(inKey) !== -1;
const keyAppend = (inText, inKey) => {
    if (inKey === "")
        return inText;
    if (isInKeys(inText, inKey))
        return inText;
    let result = inText;
    if (result.length > 0)
        result += KEYS_CHR;
    result += inKey;
    return result;
};
const keyRemove = (inText, inKey) => {
    if (inKey === "")
        return inText;
    if (!isInKeys(inText, inKey))
        return inText;
    let result = "";
    let keys = keyText_keys(inText);
    for (let i = 0; i < keys.length; i++) {
        if (keys[i] === inKey)
            continue;
        if (result !== "")
            result += KEYS_CHR;
        result += keys[i];
    }
    return result;
};
//------------------------------------ japanese text
const ruby_check = (in_str) => {
    let cnt = char_cnt(in_str, '\|');
    let sts = ((cnt % 3) == 0);
    return ((cnt % 3) == 0);
};
const ruby_kana = (in_str) => {
    let strs = in_str.split('|');
    let result = '';
    let sts = 0;
    strs.forEach((str) => {
        switch (sts) {
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
};
const ruby_no = (in_str) => {
    if (!ruby_check(in_str))
        return in_str;
    let strs = in_str.split('|');
    let result = '';
    let sts = 0;
    strs.forEach((str) => {
        switch (sts) {
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
};
function ruby_beat(in_str) {
    let str = ruby_kana(in_str);
    str = char_del(str, 'ぁぃぅぇぉゎゃゅょァィゥェォヮャュョ・');
    return str.length;
}
const ruby_change = (in_html) => {
    let result = '';
    let rubytags = [
        '<ruby><rb>',
        '</rb><rt>',
        '</rt></ruby>'
    ];
    let rcnt = -1;
    if (!ruby_check(in_html)) {
        alert('[ruby error] ' + in_html);
    }
    for (let i = 0; i < in_html.length; i++) {
        let ch = in_html[i];
        if (ch == '|') {
            rcnt++;
            if (rcnt > 2) {
                rcnt = 0;
            }
            result += rubytags[rcnt];
        }
        else {
            result += ch;
        }
    }
    return result;
};
function star_str(in_score, in_max) {
    let score = Math.floor(in_score);
    let mill = 0;
    if (score != in_score)
        mill = 1;
    let max = 5;
    if (in_max)
        max = in_max;
    let result = '';
    result += '★'.repeat(score);
    result += '☆'.repeat(mill);
    result += '・'.repeat(max - score - mill);
    return result;
}
