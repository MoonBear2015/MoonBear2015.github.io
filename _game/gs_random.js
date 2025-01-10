"use strict";
function g_rnd(minOrMax, max) {
    let min;
    if (max === undefined) {
        min = 0;
        max = minOrMax;
    }
    else {
        min = minOrMax;
    }
    return Math.floor(Math.random() * (max - min)) + min;
}
