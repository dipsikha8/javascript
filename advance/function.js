console.log("D");
console.log("I");
console.log("P");
console.log("U");



function saymyname(){
    console.log("D");
    console.log("I");
    console.log("P");
    console.log("U");

}
//saymyname()

function add1(n1,n2){//parameters n1,n2
   console.log(n1+n2)
}
add1(3,4)//arguments 3,4


function add2(n1,n2){
    let result=n1+n2
    return result
}
result=add2(4,5)
console.log("result",result)

function loginuser(username){
    if(username===undefined){
        console.log("enter a username");
        return
    }
    return `${username} just logged in`
}
console.log(loginuser("Dipu"))
//when you dont pass anything you get undefined

function calculatorPrice(...n1){//rest operator...n1 used for passing multiple value
   return n1
}
console.log(calculatorPrice(200,400,500))


const user={
    name:"dipu",
    price:199
}
function handleObject(anyobject){
    console.log(`username is ${anyobject.name} and price is ${anyobject.price}`);

}
handleObject(user)

const newaray=[100,200,400]
function returnsecond(getArray){
    return getArray[1]
}
console.log(returnsecond(newaray));


//scope

let a=10
const b=20
var c=30
{}//scope

//avoid use of var for variable declaration

//code in if block is block scope//out of if it is global scope

console.log(a);
console.log(b);
console.log(c);



