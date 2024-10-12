function genNum(num1, num2)
{
    let number = Math.round((Math.random() * num2) + num1);  
    return number;
}
let num1= 2;
let num2 = 50;
console.log(genNum(num1, num2));
