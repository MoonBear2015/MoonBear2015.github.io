"use strict";
var SelMode;
(function (SelMode) {
    SelMode[SelMode["Seq"] = 0] = "Seq";
    SelMode[SelMode["Rnd"] = 1] = "Rnd";
})(SelMode || (SelMode = {}));
class ItemArraySt {
    constructor(inItems, inMode) {
        this.items = [];
        this.idx = -1;
        if (inMode) {
            this.mode = inMode;
        }
        else {
            this.mode = SelMode.Seq;
        }
        if (inItems) {
            this.add(inItems);
        }
    }
    reset() {
        this.idx = -1;
    }
    next() {
        if (this.items.length == 0) {
            return undefined;
        }
        if (this.idx < 0 || this.idx >= this.items.length) {
            this.idx = 0;
        }
        else {
            this.idx++;
        }
        return this.items[this.idx];
    }
    add(inItems) {
        inItems.forEach(it => {
            this.items.push(it);
        });
    }
    new() {
        this.items = [];
    }
    reNew(inItems) {
        this.new();
        this.add(inItems);
    }
    copy() {
        return new ItemArraySt(this.items);
    }
}
