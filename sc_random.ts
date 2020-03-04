// 整数乱数生成 最小～最大値未満
function rnd_minmax(min: number,max: number) : number {
    return Math.floor( Math.random() * (max - min) ) + min;
}
// 整数乱数生成 ゼロ～最大値未満
function rnd_max(max: number) : number {
    return Math.floor( Math.random() * max );
}
