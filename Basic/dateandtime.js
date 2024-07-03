//Dates
let myDate=new Date()
console.log(myDate);
console.log(myDate.toLocaleDateString());//7/3/2024
console.log(myDate.toDateString());//wed jul 03 2024
console.log(myDate.toJSON());//2024-07-03T08:47:29.812Z
console.log(typeof(myDate));//date type is object

let mycreateddate=new Date(2024,3,24)
//let mycreateddate=new Date("2024-03-24")

console.log(mycreateddate.toDateString());
console.log(mycreateddate.toLocaleDateString());
let mytimestamp=Date.now();
console.log(mytimestamp);
console.log(mycreateddate.getTime());
console.log(Date.now()/1000);//it will give decimal points also
console.log(Math.floor(Date.now()/1000));//now it is converted into seconds


let newDate=new Date()
console.log(newDate);
console.log(newDate.getMonth()+1);//as it starts from 0 so for removing the confusion of end user we adding 1 here.
console.log(newDate.getDay());

newDate.toLocaleString('default',{
    weekday:"long",
    
})
