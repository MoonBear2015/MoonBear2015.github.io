"use strict";
//------------------------------------ etc's
function to_key_with_length(in_key, in_length) {
    return in_key + zP2.format(in_length);
}
class SctItm {
    constructor(Wrd, SctPic) {
        this.Wrd = Wrd;
        this.SctPic = SctPic;
    }
    ;
    static Copy(inItm) {
        return new SctItm(inItm.Wrd, inItm.SctPic);
    }
    get Copy() {
        return SctItm.Copy(this);
    }
    set Copy(value) {
        this.Wrd = value.Wrd;
        this.SctPic = value.SctPic;
    }
    ToString() {
        return '(' + this.Wrd + '/' + this.SctPic + ')';
    }
}
class SctCod extends SctItm {
    constructor(inWrd, inSctPic, CodLength) {
        super(inWrd, inSctPic);
        this.CodLength = CodLength;
    }
    get to_SctItm() {
        return new SctItm(this.Wrd, this.SctPic);
    }
    to_length_itms(in_length, in_AKey, in_BKey) {
        let results = new Array();
        if (in_length < this.CodLength) {
            return results;
        }
        if (in_length == this.CodLength) {
            results.push(this.to_SctItm);
            return results;
        }
        let l = in_length - this.CodLength;
        let abs = sepalate_number(l);
        alert(abs.length);
        for (let i = 0; i < abs.length; i++) {
            if (abs[i].A < 2)
                continue;
            let key = "";
            key += to_key_with_length(in_AKey, abs[i].A);
            key += this.Wrd;
            key += to_key_with_length(in_BKey, abs[i].B);
            results.push(new SctItm(key, this.SctPic));
        }
        return results;
    }
    add(inCod) {
        let resWrd = this.Wrd + inCod.Wrd;
        let resPic = this.SctPic;
        let resLen = this.CodLength + inCod.CodLength;
        return new SctCod(resWrd, resPic, resLen);
    }
}
class SctWrd extends SctItm {
    constructor(in_Wrd) {
        super(in_Wrd, "");
    }
    static Copy(inWrd) {
        return new SctWrd(inWrd.Wrd);
    }
    get Copy() {
        return SctWrd.Copy(this);
    }
    set Copy(value) {
        this.Wrd = value.Wrd;
    }
}
class ItmSelector {
    constructor() {
        this.itms = new Array();
        this.bef_num = -1;
    }
    get rnd_Itm() {
        let i = -1;
        while (true) {
            i = rnd_max(this.itms.length);
            if (this.itms.length < 2)
                break;
            if (i != this.bef_num)
                break;
        }
        this.bef_num = i;
        return this.itms[i];
    }
}
class ItmCounter {
    constructor() {
        this.itms = new Array();
        this.bef_num = -1;
    }
    get rnd_Itm() {
        let i = this.bef_num + 1;
        if (i == this.itms.length) {
            i = this.itms.length - 1;
        }
        this.bef_num = i;
        return this.itms[i];
    }
}
class SctItm_Selector extends ItmSelector {
    constructor(itm_key, pic_key) {
        super();
        this.itm_key = itm_key;
        this.pic_key = pic_key;
    }
}
class SctWrd_Selector extends SctItm_Selector {
    constructor(in_itm_key) {
        super(in_itm_key, '');
    }
}
class SctItm_SelectLocker extends SctItm_Selector {
    constructor(itm_key, pic_key) {
        super(itm_key, pic_key);
        this.itm_key = itm_key;
        this.pic_key = pic_key;
        this.is_lock = false;
        this.lock_item = new SctItm('', '');
    }
    get rnd_Itm() {
        if (this.is_lock) {
            return this.lock_item;
        }
        this.is_lock = true;
        let i = rnd_max(this.itms.length);
        this.lock_item.Copy = this.itms[i];
        return this.itms[i];
    }
}
class SctWrd_SelectLocker extends SctWrd_Selector {
    constructor(itm_key) {
        super(itm_key);
        this.itm_key = itm_key;
        this.is_lock = false;
        this.lock_item = new SctWrd('');
    }
    get rnd_Itm() {
        if (this.is_lock) {
            return this.lock_item;
        }
        this.is_lock = true;
        let i = rnd_max(this.itms.length);
        this.lock_item.Copy = this.itms[i];
        return this.itms[i];
    }
}
class SctItm_FirstLocker extends SctItm_Selector {
    constructor(itm_key, pic_key) {
        super(itm_key, pic_key);
        this.itm_key = itm_key;
        this.pic_key = pic_key;
        this.is_first = true;
    }
    get rnd_Itm() {
        if (this.is_first) {
            this.is_first = false;
            return this.itms[0];
        }
        let i = rnd_max(this.itms.length);
        return this.itms[i];
    }
}
//------------------------------------ poem
class SctItm_Counter extends ItmCounter {
    constructor(itm_key, pic_key) {
        super();
        this.itm_key = itm_key;
        this.pic_key = pic_key;
    }
}
class SctWrd_Counter extends SctItm_Counter {
    constructor(in_itm_key) {
        super(in_itm_key, '');
    }
}
class Selector_Generator {
    constructor(itm_key, pic_key) {
        this.itm_key = itm_key;
        this.pic_key = pic_key;
        this.itms = new Array();
    }
    Generate(in_max, in_selector) {
        let results = new Array();
        for (let c = 1; c <= in_max; c++) {
            let is = new Array();
        }
        return results;
    }
}
