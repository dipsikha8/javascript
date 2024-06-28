//1.primitive

//7types:String,number,boolean,null(empty),undefined(variable declared without assigning a value),symbol(to make a value unique we use symbol),bigInt
//primitive uses call by value



const score=100
const scorevalue=100.3
const isloggedIn=false
const temp=null//completely empty
let userEmail;//undefined
const id=Symbol('123');
const anotherid=Symbol('123');
console.log(id===anotherid);

const bigNumber=1223445848638364n//add n implies it is bigInt

//2.reference(Non primitive)
//array,object,Function

const heros=["shaktiman","nagraj","doga"];
let myobj={
    name:"Dipu",
    age: 21,
}
const myfunction=function(){
    console.log("Hellow world");
}

console.log(typeof bigNumber)
//non primitive type return type = function
//function return type=object function

///+++++++++++++++++++++++
//stack(primiticve) ,heap memory(non-primitive)


//javascripts is dynamically typed or statically typed?
//=>