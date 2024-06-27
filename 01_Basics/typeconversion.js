let score="33abc"//same in case of undefined
console.log(typeof(score));//string//undefined if we use undefined
let valueInNumber=Number(score)
console.log(typeof valueInNumber);//number
console.log(valueInNumber);//NaN


let score1=null
console.log(typeof(score));//object
let valueInNumber1=Number(score1)//object
console.log(typeof valueInNumber1);//number
console.log(valueInNumber1);//0



