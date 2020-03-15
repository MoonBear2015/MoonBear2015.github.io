//------------------------------------ etc
const zP2 = new Intl.NumberFormat('ja', { minimumIntegerDigits: 2 })

class AB {
    constructor(
        public A : number
        ,
        public B : number
    )
    {}
}

function sepalate_number(num : number) : Array<AB>
{
    let results = new Array<AB>();
    for(let i = 0; i <= num; i++)
    {
        results.push(new AB(i,num - i));
    }
    return results;    
}


function ruby_change(in_html : string) : string {
    let result : string = '';
    let rubytags = [
        '<ruby><rb>'
        ,
        '</rb><rt>'
        ,
        '</rt></ruby>'
    ]
    let rcnt = -1;
    for(let i = 0;i < in_html.length;i++)
    {
        let ch = in_html[i];
        if ( ch == '|')
        {
            rcnt++;
            if (rcnt > 2)
            {
                rcnt = 0;
            } 
            result += rubytags[rcnt];
        }
        else
        {
            result += ch;
        }
    }
    return result;
}