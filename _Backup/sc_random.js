"use strict";
// 整数乱数生成 最小～最大値未満
function rnd_minmax(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}
// 整数乱数生成 ゼロ～最大値未満
function rnd_max(max) {
    return Math.floor(Math.random() * max);
}
// 配列のシャッフル
const Shuffle = ([...array]) => {
    for (let i = array.length - 1; i >= 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
};
function SeqNumber(n) {
    let ary = new Array();
    for (let i = 0; i < n; i++) {
        ary.push(i);
    }
    return ary;
}
