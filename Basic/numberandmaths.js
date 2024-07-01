
//++++++++++++Numbers++++++++++++

const score=400


const balance=new Number(100)
console.log(balance)//it specifically defined it as number
console.log(score)//it just prints the value


console.log(balance.toString());//it converts it to string
console.log(balance.toString().length);
console.log(balance.toFixed(2));//it gives precision value
const otherNumber=123.8966
console.log(otherNumber.toPrecision(3));
const hundreds=1000000
console.log(hundreds.toLocaleString());//it converts it to us standards.
console.log(hundreds.toLocaleString('en-IN'));//converted into indian standards


//++++++++Maths+++++++++++++

console.log(Math);

console.log(Math.abs(-4));//it only converts the negative value to positive
console.log(Math.round(4.6));
console.log(Math.ceil(4.2));//if it is greater then 4 it will always choose the top value and makes it 5.
console.log(Math.floor(4.9));//it will always take the lower value
console.log(Math.min(4,3,5,6,8,));
console.log(Math.max(4,6,2,9,));
console.log(Math.random());//it will give any random number beetween 0 and 1
console.log((Math.random()*10) + 1);//it assures that the randome value will always be greater than 0
console.log(Math.floor(Math.random()*10) + 1);//it avoids the case of 0.04 and this things
const min=10;
const max=20;

console.log(Math.floor(Math.random()* (max-min + 1))+ min)


