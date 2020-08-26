// Tag = "@ABC@"        タグ
// TTag = "@R_ABC@"     タグ（使用時）

// TAG_CHR = "@"        タグ認識文字
// TTAG_CHR = "_"

// TagStr = "R_ABC"     タグ文字列
// TagKey = "ABC"       タグ識別
// TagType = "R_"       タグ種類





// tag char
const TAG_CHR = "@";
const TTAG_CHR = "_";

// tag Type
const TTAG_NONE = "";   // （無効タグ）
const TTAG_RND = "R_";  // ランダム
const TTAG_LCK = "L_";  // 固定
const TTAG_SEQ = "S_";  // 順

const TagTypes = [
    TTAG_NONE
    ,
    TTAG_RND
    ,
    TTAG_LCK
    ,
    TTAG_SEQ
]

// Tag判定
const is_Tag = (inTag : string) : boolean => {
    if (inTag.charAt(0) != TAG_CHR) return false;
    if (inTag.charAt(inTag.length - 1) != TAG_CHR) return false;
    if (inTag.length <= 2) return false;
    return true;
}
// TTag判定
const is_TTag = (inTTag : string) : boolean => {
    if (!is_Tag(inTTag)) return false;
    if (inTTag.charAt(2) != TTAG_CHR) return false;
    return true;
}

// Tag文字列抽出
const to_TagString = (inTag : string) : string => {
    let result = "";
    if (is_Tag(inTag)) {
        result = inTag.substr(1,inTag.length - 1);
    }
    return result;
}


