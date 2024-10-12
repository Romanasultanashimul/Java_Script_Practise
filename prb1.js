function compare(str1, str2)
{
  if(str1.toLowerCase()==str2.toLowerCase())
    return 1;
else
return 0;  

}

let a = "Apple"
let b = "apple"

if (compare(a,b)==1)
{
    console.log("The Strings are equal");
}
else
console.log("The Strings are not equal.");

