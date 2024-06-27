//1.primitive

//7types:string,number,boolean.null.undefined.sumbol,bigInt


const score=100
const scorevalue=100.3
const isloggedIn=false
const temp=null//completely empty
let useremail;
const id=Symbol('123')
const anotherid=Symbol('123')
console.log(id==anotherid);
//2.reference(non primitive)
//aryya,object,function

const heros=["shaktiman","nagraj","doga"];
let myobj={
    name:"Dipu",
    age: 21,
}
const myfunction=function(){
    console.log("Hellow world");
}
//non primitive type = function
//function return type=object function

///+++++++++++++++++++++++
//stack(primiticve) ,heap memory(non-primitive)
