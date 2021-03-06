// 整数乱数生成 最小～最大値未満
function RanMinMax(min: number,max: number) : number {
    return Math.floor( Math.random() * (max - min) ) + min;
}
// 整数乱数生成 ゼロ～最大値未満
function RanMax(max: number) : number {
    return Math.floor( Math.random() * max );
}

// 配列のシャッフル
const shuffleArray = ([...array]) => {
    for (let i = array.length - 1; i >= 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

function seqNumber(n : number) {
    let ary = new Array<number>();
    for(let i = 0; i < n; i++) {
        ary.push(i);
    }
    return ary;
}
