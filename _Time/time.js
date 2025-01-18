"use strict";
var TimeLib;
(function (TimeLib) {
    function updateClock() {
        const now = new Date();
        const hours = String(now.getHours()).padStart(2, '0');
        const minutes = String(now.getMinutes()).padStart(2, '0');
        const seconds = String(now.getSeconds()).padStart(2, '0');
        const clockElement = document.getElementById('clock');
        if (clockElement) {
            clockElement.textContent = `${hours}:${minutes}:${seconds}`;
        }
    }
    // 初期化 
    updateClock();
    // 1秒ごとに時計を更新
    setInterval(updateClock, 1000);
    function resizeClock() {
        const clockElement = document.getElementById('clock');
        if (clockElement) {
            const width = window.innerWidth;
            const fontSize = width / 100;
            // ビューポート幅の10% 
            clockElement.style.fontSize = `${fontSize}rem`;
        }
    }
    // リサイズ時にフォントサイズを調整
    window.addEventListener('resize', () => {
        resizeClock();
    });
    document.addEventListener('DOMContentLoaded', () => {
        resizeClock();
    });
})(TimeLib || (TimeLib = {}));
