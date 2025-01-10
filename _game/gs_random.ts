
function g_rnd(max: number): number;
function g_rnd(min: number, max: number): number;
function g_rnd(minOrMax: number, max?: number): number {
    let min: number;
    if (max === undefined) {
        min = 0;
        max = minOrMax;
    }
    else {
        min = minOrMax;
    }
    return Math.floor(Math.random() * (max - min)) + min;
}




