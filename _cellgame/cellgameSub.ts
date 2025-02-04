
namespace cellgameSub {
    function rnd(max: number): number;
    function rnd(min: number, max: number): number;
    function rnd(minOrMax: number, max?: number): number {
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

    let randomColor = () :string => "#" + rnd(0xFFFFFF).toString(16);
    
}




