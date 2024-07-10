//Immediately Invked Function Expression(IIFE)

/*function db(){
    console.log(`DB CONNECTED`);
}
db()*/

//immediate invoke function
(function db(){
    //named IIFE
    console.log(`DB CONNECTED`);
})();


//()()  => ()= defination of the function and () is for execution.//This is iife

//global scopes polution results some problem.to prevent global scopes polution or declaration  we use IIFE

//sometimes u may face some problems in IIFE or arrow function its happened because of semicolon;.First code have to be ended so we use semicolon.the we can execute second IIFE without any error

//IIFE in ARROW FUNCTION
( ()=>{
    console.log(`DB CONNECTED TWO`);
})();


//u can give input

( (name)=>{
    //unnamed IIFE
    console.log(`DB CONNECTED To ${name}`);
})('Dipsikha')


