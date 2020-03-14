"use strict";
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
