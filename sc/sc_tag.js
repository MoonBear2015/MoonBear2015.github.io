"use strict";
// Tag = "@ABC@"
// TAG_ST = "@"
// TAG_ED = "@"
// TagStr = "ABC"
// TagType = Tag.Rundom
// TagTypeKey = "R_"
// TagKey = "@R_ABC@"
// tag char
const TAG_ST = "@";
const TAG_ED = "@";
// tag Type
var TagType;
(function (TagType) {
    TagType[TagType["None"] = 0] = "None";
    TagType[TagType["Rundom"] = 1] = "Rundom";
    TagType[TagType["Locker"] = 2] = "Locker";
    TagType[TagType["Seq"] = 3] = "Seq";
})(TagType || (TagType = {}));
class TagTypeKeySet {
    constructor(typekey, type) {
        this.typekey = typekey;
        this.type = type;
    }
}
const Tag_None = new TagTypeKeySet("", TagType.None);
const Tag_Random = new TagTypeKeySet("R_", TagType.Rundom);
const Tag_Locker = new TagTypeKeySet("L_", TagType.Locker);
const Tag_Seq = new TagTypeKeySet("S_", TagType.Seq);
const TagTypeKeySets = [
    Tag_None,
    Tag_Random,
    Tag_Locker,
    Tag_Seq
];
const isTag = (inTag) => {
    if (inTag.charAt(0) != TAG_ST)
        return false;
    if (inTag.charAt(inTag.length - 1) != TAG_ED)
        return false;
    if (inTag.length <= 2)
        return false;
    return true;
};
const toTagStr = (inTag) => {
    let result = "";
    if (!isTag(inTag))
        return "";
    return inTag.substring(1, inTag.length - 1);
};
const toTagTypeKeySet = (inTag) => {
    let result = undefined;
    for (let i = 0; i < TagTypeKeySets.length; i++) {
        if (TagTypeKeySets[i].type = inTag) {
            result = TagTypeKeySets[i];
            break;
        }
    }
    return result;
};
// class Key {
//     public tag : string;
//     public type : TagType;
//     constructor(
//         inStr0 : string
//         ,
//         inStr1? : string
//     )
//     {
//         if (inStr1) {
//         }
//     }
// }
