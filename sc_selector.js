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
    get Copy() {
        return new SctItm(this.Wrd, this.SctPic);
    }
    set Copy(value) {
        this.Wrd = value.Wrd;
        this.SctPic = value.SctPic;
    }
    ToString() {
        return this.Wrd + '(' + this.SctPic + ")";
    }
}
class SctCod extends SctItm {
    constructor(inWrd, inSctPic, CodLength) {
        super(inWrd, inSctPic);
        this.CodLength = CodLength;
    }
    to_SctItm() {
        return new SctItm(this.Wrd, this.SctPic);
    }
    to_length_itms(in_length, in_AKey, in_BKey) {
        let results = new Array();
        if (in_length < this.CodLength) {
            return results;
        }
        if (in_length == this.CodLength) {
            results.push(this.to_SctItm());
            return results;
        }
        let l = in_length - this.CodLength;
        let abs = sepalate_number(l);
        tests_alert(abs);
        for (let i = 0; i < abs.length; i++) {
            if (abs[i].A == 1)
                continue;
            let key = "";
            if (abs[i].A > 1) {
                key += to_key_with_length(in_AKey, abs[i].A);
            }
            key += this.Wrd;
            if (abs[i].B > 0) {
                key += to_key_with_length(in_BKey, abs[i].B);
            }
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
    ToString() {
        return super.ToString() + this.CodLength.toString();
    }
}
class SctWrd extends SctItm {
    constructor(in_Wrd) {
        super(in_Wrd, '');
    }
    get Copy() {
        return new SctWrd(this.Wrd);
    }
    set Copy(value) {
        this.Wrd = value.Wrd;
    }
    ToString() {
        return super.ToString();
    }
}
class ItmArray {
    constructor(in_array) {
        this.itms = new Array();
        if (in_array) {
            this.Paste(in_array);
        }
    }
    Paste(in_array) {
        this.itms = new Array();
        this.itms.length = 0;
        in_array.forEach(it => {
            this.itms.push(it);
        });
    }
    Copy() {
        let result = new ItmArray();
        result.Paste(this.itms);
        return result;
    }
}
class ItmSelector extends ItmArray {
    constructor(in_array) {
        if (in_array) {
            super(in_array);
        }
        else {
            super();
        }
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
    Copy() {
        let result = new ItmSelector();
        result.Paste(this.itms);
        return result;
    }
}
class ItmCounter extends ItmArray {
    constructor(in_array) {
        if (in_array) {
            super(in_array);
        }
        else {
            super();
        }
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
    Copy() {
        let result = new ItmCounter();
        result.Paste(this.itms);
        return result;
    }
}
class SctItm_Selector extends ItmSelector {
    constructor(itm_key, pic_key, in_array) {
        super(in_array);
        this.itm_key = itm_key;
        this.pic_key = pic_key;
    }
}
class SctWrd_Selector extends SctItm_Selector {
    constructor(in_itm_key, in_array) {
        super(in_itm_key, '', in_array);
    }
}
class SctItm_SelectLocker extends SctItm_Selector {
    constructor(itm_key, pic_key, in_array) {
        super(itm_key, pic_key, in_array);
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
    constructor(itm_key, in_array) {
        super(itm_key, in_array);
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
        this.cods = new Array();
    }
    Generate(in_max, in_selector) {
        let results = new Array();
        for (let c = 1; c <= in_max; c++) {
        }
        return results;
    }
}
