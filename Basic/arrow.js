const user={
    username:"Dipsikha",
    price:999,

    welcomeMessage:function(){
        console.log(`${this.username}, welcome to website`);//this is used for current context
        console.log(this);
    }

}
//user.welcomeMessage()
//user.username="Sam" //changing the current context
//user.welcomeMessage()
console.log(this);//when u are in node environment this refers to empty 

//in browser the global object is window object
//in node this is empty object


function one(){
    let user="Dipsikha"
    console.log(this);//when u run this in the function in node environment then it gives many values
    //in function i cant use this as if i want to access this.username it will print undefined
}
one()


//+++++++arrow function++++++++++
/*const one=function(){
    let user="Dipsikha"
    console.log(this.user);  //it will also print undefined
}
*/


//this is arrow function

const two=()=>{
    let user="Dipsikha"
    console.log(this.user);  //it will also print undefined//if we use only this it gives {}
}
two()//result will be undefined

//pure arrow function core


//()=>{}//syntax of arrow funtion
//Basic arrow funtion
//explicit return
const addtwo=(n1,n2)=>{  
    return n1+n2  //if u use {} then u have to write return
    
}



r=addtwo(4,5)
console.log(r)


//implicit return
//const addthree=(n1,n2)=> n1+n2
//const addthree=(n1,n2)=> (n1+n2)
//console.log(addthree(3,4))


const addthree=(n1,n2)=> ({username:"dipu"})//u have to wrap up in case of object . u cant directly access it
console.log(addthree(3,4))





