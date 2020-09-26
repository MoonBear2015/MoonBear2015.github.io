"use strict";
// Tag = "@ABC@"              タグ
// STag = "@R_ABC@"         セルタグ（特殊選択指定付きタグ）
// TAG_CHR = "@"            タグ認識文字
// STAG_CHR = "_"           セル指定文字                    
// TagStr = "R_ABC"         タグ文字列
// TagKey = "ABC"           タグ識別子
// TagSel = "R"            セル（特殊選択指定）
// TagTxt = "WHAT,COUNTRY,~"     複数タグ（いち文字列による指定）
// Tags = "@WHAT@","@COUNTRY@",~    複数タグ配列
// TAGS_CHR = ","           複数タグ区切り    
// Tag Char
const TAG_CHR = "@";
// STag Char
const STAG_CHR = "_";
// Tags Char
const TAGS_CHR = ",";
// Sel Type
const SEL_NON = ""; // 不正・指定なし
const SEL_RND = "R"; // ランダム
const SEL_LCK = "L"; // 固定
const SEL_SEQ = "S"; // 順
const TagTxt_TagKeys = (inTagSt) => inTagSt.split(TAGS_CHR);
const TagKey_TagStr = (inTagKey, inTagSel) => {
    let result = inTagKey;
    if (inTagSel) {
        result = inTagSel + STAG_CHR + result;
    }
    return result;
};
const TagStr_Tag = (inTagStr) => TAG_CHR + inTagStr + TAG_CHR;
const to_TagStr = (inTag) => {
    let result = "";
    if (is_Tag(inTag)) {
        result = inTag.substr(1, inTag.length - 2);
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
const is_STagStr = (inTag) => to_TagStr(inTag).charAt(1) == STAG_CHR;
const to_TagSel = (inTag) => {
    if (is_STagStr(inTag)) {
        let strs = to_TagStr(inTag).split(STAG_CHR);
        alert(strs);
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
    let strs = str.split(STAG_CHR);
    if (strs.length !== 2) {
        return str;
    }
    else {
        return strs[1];
    }
};
const StrInTxtCheck = (inTxt, inStr) => inTxt.indexOf(inStr) !== -1;
