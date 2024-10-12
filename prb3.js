function stringChecker(latter1, latter2, sntnc)
{
    let rslt = sntnc.startsWith(latter1);
    let rslt2 = sntnc.endsWith(latter2);
    return rslt, rslt2;

}

let first_latter ='t';
let last_latter = 'e';
let sentence = 'hi';
console.log(stringChecker(first_latter,last_latter, sentence));
