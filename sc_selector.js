"use strict";
//------------------------------------ etc's
function to_key_with_length(in_key, in_length) {
    let result = in_key;
    result = replaceAll(result, '@', '');
    return '@' + result + zP2.format(in_length) + '@';
}
class SctItm {
    constructor(in_Wrd, in_SctPic) {
        if (in_Wrd) {
            this.Wrd = in_Wrd;
        }
        else {
            this.Wrd = '';
        }
        if (in_SctPic) {
            this.SctPic = in_SctPic;
        }
        else {
            this.SctPic = '';
        }
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
        if (this.SctPic != '') {
            return this.Wrd + '(' + this.SctPic + ")";
        }
        return this.Wrd;
    }
}
class SctCod extends SctItm {
    constructor(in_Wrd, in_SctPic, in_CodLength) {
        super(in_Wrd, in_SctPic);
        if (in_CodLength) {
            this.CodLength = in_CodLength;
        }
        else {
            this.CodLength = ruby_beat(this.Wrd);
        }
        this.KeyA = '';
        this.KeyB = '';
        this.KeyC = '';
        this.MinA = 0;
        this.MinB = 0;
    }
    to_SctItm() {
        return new SctItm(this.Wrd, this.SctPic);
    }
    to_length_itms(in_length) {
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
        for (let i = 0; i < abs.length; i++) {
            if (abs[i].A != 0 && abs[i].A < this.MinA)
                continue;
            if (abs[i].B != 0 && abs[i].B < this.MinB)
                continue;
            if (abs[i].A > 0 && this.KeyA == '')
                continue;
            if (abs[i].B > 0 && this.KeyB == '')
                continue;
            let key = "";
            if (abs[i].A > 0 && this.KeyA != '') {
                if (this.KeyC != '' && abs[i].A == 1) {
                    key += to_key_with_length(this.KeyC, 1);
                }
                else {
                    key += to_key_with_length(this.KeyA, abs[i].A);
                }
            }
            key += this.Wrd;
            if (abs[i].B > 0 && this.KeyB != '') {
                if (this.KeyC != '' && abs[i].B == 1) {
                    key += to_key_with_length(this.KeyC, 1);
                }
                else {
                    key += to_key_with_length(this.KeyB, abs[i].B);
                }
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
class SctCod_TI extends SctCod {
    constructor(in_Wrd, in_SctPic, in_CodLength) {
        super(in_Wrd, in_SctPic, in_CodLength);
        this.KeyA = '@M';
        this.KeyB = '@M';
        this.KeyC = '@C';
        this.MinA = 2;
        this.MinB = 1;
    }
}
class SctCod_TM extends SctCod {
    constructor(in_Wrd, in_SctPic, in_CodLength) {
        super(in_Wrd, in_SctPic, in_CodLength);
        this.KeyA = '@I';
        this.KeyB = '@I';
        this.KeyC = '';
        this.MinA = 2;
        this.MinB = 2;
    }
}
class SctCod_It extends SctCod {
    constructor(in_Wrd, in_SctPic, in_CodLength) {
        super(in_Wrd, in_SctPic, in_CodLength);
        this.KeyA = '@M';
        this.KeyB = '@M';
        this.KeyC = '@C';
        this.MinA = 2;
        this.MinB = 1;
    }
}
class SctCod_Mv extends SctCod {
    constructor(in_Wrd, in_SctPic, in_CodLength) {
        super(in_Wrd, in_SctPic, in_CodLength);
        this.KeyA = '';
        this.KeyB = '';
        this.MinA = 2;
        this.MinB = 2;
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
    ToString() {
        return tests_string(this.itms);
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
    constructor(in_itm_key, in_pic_key, in_array) {
        super(in_array);
        if (in_itm_key) {
            this.itm_key = in_itm_key;
        }
        else {
            this.itm_key = '';
        }
        if (in_pic_key) {
            this.pic_key = in_pic_key;
        }
        else {
            this.pic_key = '';
        }
    }
    ToString() {
        return '[itm_key = ' + this.itm_key + ']\r\n'
            + '[pic_key = ' + this.pic_key + ']\r\n'
            + super.ToString();
    }
    Copy() {
        let result = new SctItm_Selector(this.itm_key, this.pic_key);
        result.Paste(this.itms);
        return result;
    }
}
class SctItm_SelectLocker extends SctItm_Selector {
    constructor(in_itm_key, in_pic_key, in_array) {
        super(in_itm_key, in_pic_key, in_array);
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
    Copy() {
        let result = new SctItm_SelectLocker(this.itm_key, this.pic_key);
        result.Paste(this.itms);
        return result;
    }
}
class SctItm_FirstLocker extends SctItm_Selector {
    constructor(in_itm_key, in_pic_key) {
        super(in_itm_key, in_pic_key);
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
    Copy() {
        let result = new SctItm_FirstLocker(this.itm_key, this.pic_key);
        result.Paste(this.itms);
        return result;
    }
}
//------------------------------------ poem
class SctItm_Counter extends ItmCounter {
    constructor(in_itm_key, in_pic_key) {
        super();
        if (in_itm_key) {
            this.itm_key = in_itm_key;
        }
        else {
            this.itm_key = '';
        }
        if (in_pic_key) {
            this.pic_key = in_pic_key;
        }
        else {
            this.pic_key = '';
        }
    }
    Copy() {
        let result = new SctItm_Counter(this.itm_key, this.pic_key);
        result.Paste(this.itms);
        return result;
    }
}
class Selector_Generator {
    constructor(in_itm_key, in_pic_key, in_key_a, in_key_b, in_min_a, in_min_b) {
        this.cods = new Array();
        if (in_itm_key) {
            this.itm_key = in_itm_key;
        }
        else {
            this.itm_key = '';
        }
        if (in_pic_key) {
            this.pic_key = in_pic_key;
        }
        else {
            this.pic_key = '';
        }
        if (in_key_a) {
            this.key_a = in_key_a;
        }
        else {
            this.key_a = '';
        }
        if (in_key_b) {
            this.key_b = in_key_b;
        }
        else {
            this.key_b = '';
        }
        if (in_min_a) {
            this.min_a = in_min_a;
        }
        else {
            this.min_a = 2;
        }
        if (in_min_b) {
            this.min_b = in_min_b;
        }
        else {
            this.min_b = 1;
        }
    }
    Gene_Itm_no_length() {
        let results = new Array();
        this.cods.forEach(cod => {
            results.push(cod.to_SctItm());
        });
        return results;
    }
    Gene_Itm_length(in_length) {
        let results = new Array();
        this.cods.forEach(cod => {
            cod.to_length_itms(in_length, this.key_a, this.key_b, this.min_a, this.min_b).forEach(itm => {
                results.push(itm);
            });
        });
        return results;
    }
    Generate(in_max, in_selector_no_length, in_selector_length) {
        let results = new Array();
        let itms_no_length = this.Gene_Itm_no_length();
        if (itms_no_length.length > 0) {
            let selector_no_length = in_selector_no_length.Copy();
            selector_no_length.itm_key = this.itm_key + '@';
            selector_no_length.pic_key = this.pic_key;
            selector_no_length.Paste(itms_no_length);
            results.push(selector_no_length);
        }
        for (let c = 1; c <= in_max; c++) {
            let itms_length = this.Gene_Itm_length(c);
            if (itms_length.length > 0) {
                let selector_length = in_selector_length.Copy();
                selector_length.itm_key = to_key_with_length(this.itm_key, c);
                selector_length.pic_key = this.pic_key;
                selector_length.Paste(itms_length);
                results.push(selector_length);
            }
        }
        return results;
    }
    Add_cods(in_cods) {
        this.cods = this.cods.concat(in_cods);
    }
}
