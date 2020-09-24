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
const SEL_NON : string = "";    // 不正・指定なし
const SEL_RND : string = "R";   // ランダム
const SEL_LCK : string = "L";   // 固定
const SEL_SEQ : string = "S";   // 順

const SelTypes = [
    SEL_RND
    ,
    SEL_LCK
    ,
    SEL_SEQ
]

const TagTxt_TagKeys = (inTagSt : string) : string[] =>  inTagSt.split(TAGS_CHR);
const TagKey_TagStr = (inTagKey : string,inTagSel? : string) : string => {
    let result = inTagKey;
    if (inTagSel) {
        result = inTagSel + STAG_CHR + result;
    }    
    return result;
}
const TagStr_Tag = (inTagStr : string) : string => TAG_CHR + inTagStr + TAG_CHR;
const Tag_TagStr = (inTag : string) : string => {
    let result = "";
    if (isTag(inTag)) {
        result = inTag.substr(1,inTag.length - 1);
    }
    return result;
}

const isTag = (inTag : string) : boolean => {
    if (inTag.charAt(0) != TAG_CHR) return false;
    if (inTag.charAt(inTag.length - 1) != TAG_CHR) return false;
    if (inTag.length <= 2) return false;
    return true;
}



const _TagKey = (inTag : string) : string => {
    let result = "";
    let str = Tag_TagStr(inTag);
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
}



// 選択識別子判定（なければ""返却）
const is_SelType = (inSel : string) : string => {
    let result = "";
    for(let i = 0; i < SelTypes.length; i++) {
        if (SelTypes[i] == inSel) {
            result = SelTypes[i];
            break;
        }
    }
    return result;
}

// 選択識別子抽出
const to_SelString = (inTag : string) : string => {
    let result = "";
    if (!isTag(inTag)) {
        return result;
    }
    let tagString = _TagKey(inTag);
    let tags = tagString.split(STAG_CHR);
    if (tags.length != 2) {
        return "";
    }
    return is_SelType(tags[0]);
}
