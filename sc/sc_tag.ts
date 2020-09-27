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
const SEL_NON : string = "";    // 指定なし
const SEL_RND : string = "R";   // ランダム
const SEL_LCK : string = "L";   // 固定
const SEL_SEQ : string = "S";   // 順

class Tag {
    public key : string;
    public sel : string;
    constructor(inKey : string,inSel? : string) {
        let str = to_TagStr(inKey);
        this.key = to_TagKey(str);
        if (is_STagStr(str)) {
            this.sel = to_TagSel(str);
            return;
        }
        if (inSel) {
            this.sel = inSel;
        }
        else
        {
            this.sel = "";
        }
    }
}

const TagTxt_TagKeys = (inTagSt : string) : string[] =>  inTagSt.split(TAGS_CHR);
const TagKey_TagStr = (inTagKey : string,inTagSel? : string) : string => {
    let result = inTagKey;
    if (inTagSel) {
        result = inTagSel + STAG_CHR + result;        
    }    
    return result;
}

const TagStr_Tag = (inTagStr : string) : string => TAG_CHR + inTagStr + TAG_CHR;



const to_TagStr = (inTag : string) : string => {
    let result = "";
    if (is_Tag(inTag)) {
        result = inTag.substr(1,inTag.length - 2);
    }
    else {
        result = inTag;
    }
    return result;
}

const is_Tag = (inTag : string) : boolean => {
    if (inTag.charAt(0) !== TAG_CHR) return false;
    if (inTag.charAt(inTag.length - 1) != TAG_CHR) return false;
    if (inTag.length <= 2) return false;
    return true;
}

const is_STagStr = (inTag : string) : boolean => to_TagStr(inTag).charAt(1) == STAG_CHR;

const to_TagSel = (inTag : string) : string => {
    if (is_STagStr(inTag)) {
        let strs = to_TagStr(inTag).split(STAG_CHR);
        return strs[0];
    }
    return "";
}

const to_TagKey = (inTag : string) : string => {
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
}

const StrInTxtCheck = (inTxt : string,inStr : string) : boolean => inTxt.indexOf(inStr) !== -1;



