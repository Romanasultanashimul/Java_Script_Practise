function extract(strt, end, sntnc)
{
    let ex1 = sntnc.slice(strt, end);
    let ex2 = sntnc.substring(strt, end);
    return ex1 + "\n" + ex2;
}
let start = 2;
let end = 6;
let sntnc= "This is Maisha binte kabir"
console.log(extract(start, end, sntnc));
