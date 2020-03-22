"use strict";
function tests_string(in_tests) {
    let str = '';
    in_tests.forEach(test => {
        str += test.ToString() + '\r\n';
    });
    return str;
}
function string_html(in_string) {
    let result = in_string;
    while (true) {
        if (result.indexOf('\r\n') == -1)
            break;
        result = result.replace('\r\n', '<br>');
    }
    return result;
}
function tests_html(in_tests) {
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
function tests_alert(in_tests) {
    let str = '';
    in_tests.forEach(test => {
        str += test.ToString() + '\r\n';
    });
    alert(str);
}
//------------------------------------ etc
const zP2 = new Intl.NumberFormat('ja', { minimumIntegerDigits: 2 });
class AB {
    constructor(A, B) {
        this.A = A;
        this.B = B;
    }
    ToString() {
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
function ruby_change(in_html) {
    let result = '';
    let rubytags = [
        '<ruby><rb>',
        '</rb><rt>',
        '</rt></ruby>'
    ];
    let rcnt = -1;
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
}
