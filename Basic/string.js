const name="Dipsikha"
const repo=30
console.log(`Hello my name is ${name} and my repo count is ${repo}`);//use of backtics//string interpolation//This is more readable 

const gname=new String('dipu-ma-zum-dar')//string is a object .it is is not an array
console.log(gname.length);
console.log(gname[0])

console.log(gname.toUpperCase());
console.log(gname.charAt(2));
console.log(gname.indexOf('p'));
const newString=gname.substring(0,2);//we cant give negative value here 
console.log(newString);
const anotherstring=gname.slice(-8,2)//the main thing in slice is we can give negative value also
console.log(anotherstring);
const newStringone="   dipu    "
console.log(newStringone)
console.log(newStringone.trim());//trim is used to remove extra space//it works on whitespace strings or character
const url="https://dipu.com/dipu%20mazumdar"
console.log(url.replace('%20','_'));
console.log(url.includes('dip'));
console.log(gname.split('-'))//it splits the string basis on'-'
