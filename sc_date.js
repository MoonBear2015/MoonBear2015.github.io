"use strict";
class DateRange {
    constructor(inSt, inEd) {
        if (inSt) {
            this.st = inSt;
        }
        else {
            this.st = new Date();
        }
        if (inEd) {
            this.ed = inEd;
        }
        else {
            this.ed = new Date();
        }
    }
}
function SplitYearDays(inSplitCnt) {
    let results = [];
    for (let i = 0; i < inSplitCnt; i++) {
        let dt = SplitYearDay(i, inSplitCnt);
        if (i + 1 == inSplitCnt) {
            dt.ed.setMonth(11);
            dt.ed.setDate(31);
        }
        results.push(dt);
    }
    return results;
}
function SplitYearDay(inIndex, inSplitCnt) {
    let spDay = SplitDayCount(inSplitCnt);
    let dt = FirstDate();
    let st = AddDay(dt, spDay * inIndex);
    let ed = AddDay(dt, spDay * (inIndex + 1) - 1);
    return new DateRange(st, ed);
}
function AddDay(inDt, inDay) {
    let dt = inDt.getDate();
    dt += inDay;
    let result = new Date(inDt);
    result.setDate(dt);
    return result;
}
function SplitDayCount(inCnt) {
    return Math.floor(365 / inCnt);
}
function FirstDate() {
    let dt = new Date();
    dt.setMonth(0);
    dt.setDate(1);
    return dt;
}
function date_string(inDate) {
    let result = "";
    result += inDate.getFullYear().toString()
        + '/'
        + (inDate.getMonth() + 1).toString()
        + '/'
        + inDate.getDate().toString()
        + '('
        + '日月火水木金土'[inDate.getDay()]
        + ')';
    return result;
}
function date_MD_string(inDate) {
    let result = '';
    result += (inDate.getMonth() + 1).toString()
        + '月'
        + inDate.getDate().toString()
        + '日';
    return result;
}
function date_YM_string(inDate) {
    let result = '';
    result += inDate.getFullYear().toString()
        + '年'
        + (inDate.getMonth() + 1).toString()
        + '月';
    return result;
}
function date_Y_string(inDate) {
    let result = '';
    result += inDate.getFullYear().toString();
    return result;
}
function random_MD_string() {
    return date_MD_string(date_random());
}
function random_YM_string() {
    return date_YM_string(date_random());
}
function random_Y_string() {
    return date_Y_string(date_random());
}
function date_random() {
    let nowyear = new Date().getFullYear();
    let year = rnd_minmax(1969, nowyear + 1);
    let month = rnd_minmax(0, 12);
    let daymax = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31][month];
    let date = rnd_minmax(1, daymax + 1);
    return new Date(year, month, date);
}
