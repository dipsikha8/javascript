const userEmail=[]//""

//when u assume that string have true value
//if the string is empty then assume that it is false
if(userEmail){
    console.log("Got user email");
}
else{
    console.log("Dont have user Email");
}

//Notes:

//falsy value: false,0,-0,BigInt 0n,"",null,undefined,NaN


//truthy values: "0",'false'," ",[],{},function(){}

if(userEmail.length===0){
    console.log("Array is Empty");
}


const emptyobj={}
if(Object.keys(emptyobj).length===0){
   console.log("Object is empty");
}

//Nullish Coalescing operator (??):null undefined

let val1;

//val1= 5 ?? 10
//val1= null ?? 10// used for safety check//if value is present then fine otherwise assign null
//val1=undefined ?? 15

val1=null ?? 10 ?? 20 //first value will be printed
console.log(val1)


//Ternary operator

//condition ? true : false 

const  iceTeaPrice= 100
 iceTeaPrice<= 80? console.log("less  than 80"): console.log("more than 80")


 