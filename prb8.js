function mathf(num)
{
    let rslt1 = Math.round(num); 
    let rslt2 = Math.ceil(num);
    let rslt3 = Math.floor(num);
    return rslt1+ "\n"+ rslt2+ "\n"+ rslt3;
}

let number = 7.89008;
console.log(mathf(number));
