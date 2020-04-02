function date_string(inDate: Date) : string 
{
    let result: string = "";
    result += inDate.getFullYear().toString() 
    + '/'
    + inDate.getMonth().toString()
    + '/'
    + inDate.getDate().toString()
    + '('
    + '日月火水木金土'[inDate.getDay()]
    + ')';
    return result;
}

function date_MD_string(inDate: Date) : string
{
    let result: string = '';
    result += inDate.getMonth().toString()
    + '月'
    + inDate.getDate().toString()
    + '日';
    return result;
}

function date_YM_string(inDate: Date) : string
{
    let result: string = '';
    result += inDate.getFullYear().toString()
    + '年'
    + inDate.getMonth().toString()
    + '月';
    return result;
}

function date_Y_string(inDate: Date) : string
{
    let result: string = '';
    result += inDate.getFullYear().toString();
    return result;
}

function random_MD_string() : string
{
    return date_MD_string(date_random());
}

function random_YM_string() : string
{
    return date_YM_string(date_random());
}

function random_Y_string() : string
{
    return date_Y_string(date_random());
}


function date_random() : Date
{
    let nowyear = new Date().getFullYear();
    let year : number = rnd_minmax(1969,nowyear + 1);
    let month : number = rnd_minmax(1,12);
    let daymax = [31,28,31,30,31,30,31,31,30,31,30,31][month];
    let date : number = rnd_minmax(1,daymax);
    return new Date(year,month,date);
}
