"use strict";
var cellgameSub;
(function (cellgameSub) {
    function rnd(minOrMax, max) {
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
    let randomColor = () => "#" + rnd(0xFFFFFF).toString(16);
})(cellgameSub || (cellgameSub = {}));
