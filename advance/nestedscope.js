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


//nested scope
function one(){
    const username="Dipu"
    function two(){
        const website="www.linkedin/dipsikha-mazumdar"
        console.log(username);
    }
    //console.log(website);
    //two()//two can access all the variable of one//child function can access the parents variable
}
one()//if we are not calling two() then it wont be executed

if(true){
    const username="Dipsikha"

    if (username==="Dipsikha"){
        const website="Linkedin"
        console.log(username + website);
    }
   // console.log(website);//first error will be in website for the scope
}
//console.log(username)//username will be undefined for the scope again


//++++++++++++++++++ interesting concept++++++++++++++

function addone(value){//we can access it before initialization
    value=value+1
    return value
}
result=addone(5)
console.log(result)


//you can do this it in another way

const addtwo=function(num){//sometimes it is called expression//as we stored the funtion in a variable so we cant access it before intialization
    return num+2
}
addtwo(5)


