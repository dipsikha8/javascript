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
const tinder=new object()//singletone object
const tinderuser={}//non singletone object


const tin={}
tin.id="123ab"
tin.name="dipu"
tin.loggedin=false
console.log(tin);

const regular={
    email:"some@gmail.com",
    fullname:{
        userfullname:{
          firstname:"Dipsikha",
          lastname:"Mazumdar"
        }

    }
}
console.log(regular.fullname);

const obj1={1:"a",2:"b"}
const obj2={3:"a",4:"b"}
const obj3={obj1,obj2}
console.log(obj3);

constobj4=object.assign({},obj1,obj2)
console.log(obj4);
const users = [
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

users[1].email
// console.log(tinderUser);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));
// console.log(tinderUser.hasOwnProperty('isLoggedIn'));


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
//     "name": "hitesh",
//     "coursename": "js in hindi",//json{key:value both are string}
//     "price": "free"
// }

[
    {},
    {},            
    {}
]




