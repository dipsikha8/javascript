//singleton-> Object.create


//object literals
const mysym=Symbol("key1");
const jsuser={
    name:"Dipsikha",
    age:22,
    [mysym]:"mykey1",
    location:"burdwan",
    isloggedin:false,
    email:"dipsikha200218@gmail.com"


}
console.log(jsuser["email"])
console.log(jsuser[mysym])
jsuser.greeting=function(){
    console.log("Hello js user");

}
console.log(jsuser.greeting());
jsuser.greeting2=function(){
    console.log(`Hello js user,${this.name}`);

}
console.log(jsuser,greeting2())
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




