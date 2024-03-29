const name="Dipsikha"
const repo=30
console.log(`Hello my name is ${name} and my repo count is ${repo}`);

const gname=new String('dipu')
console.log(gname.length);
console.log(gname.toUpperCase());
console.log(gname.charAt(2));
console.log(gname.indexOf('t'));
const newString=gname.substring(0,2);
console.log(newString);
const anotherstring=gname.slice(-8,4)
console.log(anotherstring);
const newStringone="   dipu    "
console.log(newStringone.trim());
const url="https://dipu.com/dipu20%mazumdar"
console.log(url.replace('%20','_'));
console.log(url.includes('dip'));
