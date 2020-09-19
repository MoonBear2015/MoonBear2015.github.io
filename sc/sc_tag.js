"use strict";
// Tag = "@ABC@"            タグ
// STag = "@R_ABC@"         セルタグ（特殊選択指定付きタグ）
// TAG_CHR = "@"            タグ認識文字
// STAG_CHR = "_"           セル指定文字                    
// TagStr = "R_ABC"         タグ文字列
// TagKey = "ABC"           タグ識別子
// SetType = "R"            セル（特殊選択指定）
// TagsString = "WHAT,COUNTRY,~"  複数タグ（いち文字列による指定）
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
const SelTypes = [
    SEL_RND,
    SEL_LCK,
    SEL_SEQ
];
const to_Tags = (inTagsString) => {
    let tags = inTagsString.split(TAGS_CHR);
    let results = [];
    tags.forEach(tag => {
        if (is_Tag(tag)) {
            results.push(tag);
        }
    });
    return results;
};
// Tag判定
const is_Tag = (inTag) => {
    if (inTag.charAt(0) != TAG_CHR)
        return false;
    if (inTag.charAt(inTag.length - 1) != TAG_CHR)
        return false;
    if (inTag.length <= 2)
        return false;
    return true;
};
// Tag文字列抽出
const to_TagString = (inTag) => {
    let result = "";
    if (is_Tag(inTag)) {
        result = inTag.substr(1, inTag.length - 1);
    }
    return result;
};
// TagKey抽出
const to_TagKey = (inTag) => {
    let result = "";
    let str = to_TagString(inTag);
    if (str == "") {
        return "";
    }
    let strs = str.split(STAG_CHR);
    if (strs.length != 2) {
        return str;
    }
    else {
        return strs[1];
    }
};
// 選択識別子判定（なければ""返却）
const is_SelType = (inSel) => {
    let result = "";
    for (let i = 0; i < SelTypes.length; i++) {
        if (SelTypes[i] == inSel) {
            result = SelTypes[i];
            break;
        }
    }
    return result;
};
// 選択識別子抽出
const to_SelString = (inTag) => {
    let result = "";
    if (!is_Tag(inTag)) {
        return result;
    }
    let tagString = to_TagString(inTag);
    let tags = tagString.split(STAG_CHR);
    if (tags.length != 2) {
        return "";
    }
    return is_SelType(tags[0]);
};
