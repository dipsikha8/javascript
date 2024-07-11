//if 

/*if(condition){ //condition should be true then it will be executed otherwise we will not execute

}*/

const isuerloggedin=true

if(isuerloggedin){

}

//comparison <,>,<=,>=,==,!=,
//= it is used for assignment
//=== chechks the type also

if(2==="2"){
    console.log("true")
}
else{
    console.log("false")
}

//++++++++++


const score=100

if(score>50){
    const power="fly"
    console.log(`user power: ${power}`);
}

/*if(score>50){
    const power="fly"//if we use var then it is global it is accessable outside the if scope.so we avoid the use of var
    console.log(`user power: ${power}`);
}
console.log(`user power: ${power}`);
*/



const balance=1000

//if(balance>500) console.log("test");//implicit scope

// Nesting

if(balance<500){
   console.log("less than");
}
else if(balance<750){
    console.log("less than 750");
}
else if(balance<900){
    console.log("less than 900")
}
else{
    console.log("less than 1200");
}


const userloggedin=true

const debit=true
if(userloggedin && debit){//in and all conditions must be true
    console.log("shopping allowed");
}


const loggedingoogle=true
const loggedinemail=false
if(loggedingoogle|| loggedinemail){//in or one condition must be true
    console.log("user logged in");
}

