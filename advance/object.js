//singleton-> Object.create

//when we create objects from literals singletone object will not be created
//when we create objects from constructor singletone object will be created
//object literals
const mysym=Symbol("key1");
const jsuser={
    name:"Dipsikha",
    age:22,
    [mysym]:"mykey1",//if u want to use it as symbol u have to include it in sqare brackets.otherwise it will be treated as string
    location:"burdwan",
    isloggedin:false,
    email:"dipsikha@gmail.com",
    lastlogindays:["Monday","Tuesday","Saturday"]


}
console.log(jsuser.email)//to access values
console.log(jsuser["email"])//to access the values
jsuser.email="dipu@gmail.com"//u can override using '='.
//Object.freeze(jsuser)//if u dont want anyone to change your object then u can use freeze
console.log(jsuser[mysym])

//fuctions

jsuser.greeting=function(){
    console.log("Hello js user");

}
console.log(jsuser.greeting());
jsuser.greeting2=function(){
    console.log(`Hello js user,${this.name}`);//String interpolation//this will be used to see the properties available in the object


}
console.log(jsuser.greeting2())
//const tinder=new object()//singletone object//if u print it it is empty object
//const tinderuser={}//non singletone object


const tin={}
tin.id="123ab"
tin.name="dipu"
tin.loggedin=false
console.log(tin);

const regular={
    email:"some@gmail.com",
    fullname:{                     //you can go with nesting
        userfullname:{
          firstname:"Dipsikha",
          lastname:"Mazumdar"
        }

    }
}
console.log(regular.fullname.userfullname.firstname);//we can access value using '.' 


const obj1={1:"a",2:"b"}
const obj2={3:"a",4:"b"}
const obj3={obj1,obj2}//same like array problem object will come into an another object
//console.log(obj3);

const obj4=Object.assign(obj1,obj2)//u can use this syntax
console.log(obj4);
const obj5=Object.assign({},obj1,obj2)//this will also give same result but it is mostly preferrable .//sometimes there can be more object therefore we use {}.{}is the target and all the objects are source.
console.log(obj5);//it returns a modified target object
const obj6={...obj1, ...obj2}//u can use spread operator also like array .This is the latest 
console.log(obj6);
const users = [//array of objects//u can add multiple objects 
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
]

users[1].email//as this is the array so give the index then use .as u want to access object
// console.log(tinderUser);

// console.log(Object.keys(tin));//u are making array of using the keys of tinderuser object
// console.log(Object.values(tin));
// console.log(Object.entries(tin));
// console.log(tinderUser.hasOwnProperty('isLoggedIn'));//if it is present or not 


const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "hitesh"
}

// course.courseInstructor

const {courseInstructor: instructor} = course//destrcutute of object



// console.log(courseInstructor);
console.log(instructor);

// {
//     "name": "hitesh",//keys are also a string in json
//     "coursename": "js in hindi",//json{key:value both are string}
//     "price": "free"
// }

[
    {},
    {},            //JSON API in array format
    {}
]




