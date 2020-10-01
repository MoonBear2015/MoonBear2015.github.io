"use strict";
// Tag = "@R_ABC@"         タグ
// pTag = "@P_ABC@"         画像貼り付け
// TAG_CHR = "@"            タグ認識文字
// SEL_CHR = "_"           セル指定文字                    
// TagStr = "R_ABC"         タグ文字列
// TagKey = "ABC"           タグ識別子
// TagSel = "R"            セル（特殊選択指定）
// TagTxt = "WHAT,COUNTRY,~"     複数タグ（いち文字列による指定）
// Tags = "@WHAT@","@COUNTRY@",~    複数タグ配列
// TAGS_CHR = ","           複数タグ区切り    
// Sel Type
const SEL_RND = ""; // ランダム
const SEL_LCK = "L"; // 固定
const SEL_SEQ = "S"; // 順
const SELS = [
    SEL_RND,
    SEL_LCK,
    SEL_SEQ
];
const SEL_PIC = "P"; // 画像用
// Tag Char
const TAG_CHR = "@";
// STag Char
const SEL_CHR = "_";
class Tag {
    constructor(inKey, inSel) {
        let str = to_TagStr(inKey);
        this.key = to_TagKey(str);
        if (is_STagStr(str)) {
            this.sel = to_TagSel(str);
            return;
        }
        if (inSel) {
            this.sel = inSel;
        }
        else {
            this.sel = "";
        }
    }
    get str() {
        if (this.sel === "") {
            return this.key;
        }
        else {
            return this.sel + SEL_CHR + this.key;
        }
    }
    set str(inStr) {
        this.key = to_TagKey(inStr);
        this.sel = to_TagSel(inStr);
    }
    get tag() {
        let result = this.key;
        if (this.sel !== "") {
            result = this.sel + SEL_CHR + this.key;
        }
        return TAG_CHR + result + TAG_CHR;
    }
    set tag(inTag) {
        let st = to_TagStr(inTag);
        this.str = st;
    }
    get pTag() {
        let result = TAG_CHR + SEL_PIC + "_" + this.key + TAG_CHR;
        return result;
    }
}
const TagTxt_TagKeys = (inTagTxt) => keyText_keys(inTagTxt);
const TagKey_TagStr = (inTagKey, inTagSel) => {
    let result = inTagKey;
    if (inTagSel) {
        result = inTagSel + SEL_CHR + result;
    }
    return result;
};
const TagStr_Tag = (inTagStr) => TAG_CHR + inTagStr + TAG_CHR;
const to_TagStr = (inTag) => {
    let result = "";
    if (is_Tag(inTag)) {
        result = inTag.substr(1, inTag.length - 2);
    }
    else {
        result = inTag;
    }
    return result;
};
const is_Tag = (inTag) => {
    if (inTag.charAt(0) !== TAG_CHR)
        return false;
    if (inTag.charAt(inTag.length - 1) != TAG_CHR)
        return false;
    if (inTag.length <= 2)
        return false;
    return true;
};
const is_STagStr = (inTag) => to_TagStr(inTag).charAt(1) == SEL_CHR;
const to_TagSel = (inTag) => {
    if (is_STagStr(inTag)) {
        let strs = to_TagStr(inTag).split(SEL_CHR);
        return strs[0];
    }
    return "";
};
const to_TagKey = (inTag) => {
    let result = "";
    let str = to_TagStr(inTag);
    if (str === "") {
        return "";
    }
    let strs = str.split(SEL_CHR);
    if (strs.length !== 2) {
        return str;
    }
    else {
        return strs[1];
    }
};
