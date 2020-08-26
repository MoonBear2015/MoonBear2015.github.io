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
enum TagType {
    None
    ,
    Rundom
    ,
    Locker
    ,
    Seq
}

class TagTypeKeySet {
    constructor(
        public typekey : string
        ,
        public type : TagType
        ) {}    
}

const Tag_None = new TagTypeKeySet("",TagType.None);
const Tag_Random = new TagTypeKeySet("R_",TagType.Rundom);
const Tag_Locker = new TagTypeKeySet("L_",TagType.Locker);
const Tag_Seq = new TagTypeKeySet("S_",TagType.Seq);

const TagTypeKeySets = [
    Tag_None
    ,
    Tag_Random
    ,
    Tag_Locker
    ,
    Tag_Seq
]

const isTag = (inTag : string) : boolean => {
    if (inTag.charAt(0) != TAG_ST) return false;
    if (inTag.charAt(inTag.length - 1) != TAG_ED) return false;
    if (inTag.length <= 2) return false;
    return true;
}


const toTagStr = (inTag : string) : string => {
    let result : string = "";
    if (!isTag(inTag)) return "";
    return inTag.substring(1,inTag.length - 1);
}


const toTagTypeKeySet = (inTag : TagType) : TagTypeKeySet | undefined => {
    let result : TagTypeKeySet | undefined = undefined;
    for(let i = 0; i < TagTypeKeySets.length; i++) {
        if (TagTypeKeySets[i].type = inTag) {
            result = TagTypeKeySets[i];
            break;
        }
    }
    return result;
}



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

