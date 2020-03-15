"use strict";
//------------------------------------ etc
const zP2 = new Intl.NumberFormat('ja', { minimumIntegerDigits: 2 });
class AB {
    constructor(A, B) {
        this.A = A;
        this.B = B;
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
