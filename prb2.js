function wordChecker(word, sentence)
{
    let check = sentence.includes(word, 0);

    if(check== true)
{
    let result = sentence.indexOf(word);
    return result;
}
else
{
    return -1;
}

}

let word = "is"
let sentence = "She is Okay"

console.log(wordChecker(word, sentence));
