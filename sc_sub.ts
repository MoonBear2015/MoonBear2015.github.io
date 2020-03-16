//------------------------------------ test
interface ITest {
    ToString() : string;
}

function tests_alert(in_tests : Array<ITest>)
{
    let str = '';
    in_tests.forEach(test => {
        str += test.ToString() + '\r\n';
    });
    alert(str);
}

//------------------------------------ etc
const zP2 = new Intl.NumberFormat('ja', { minimumIntegerDigits: 2 })

class AB implements ITest {
    constructor(
        public A : number
        ,
        public B : number
    )
    {}

    ToString() : string {
        return '(' + this.A + ',' + this.B + ')';
    }
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