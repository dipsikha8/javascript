//array

const myarr=[0,1,2,3,4,5]
const myhero=["shaktiman","nagraj"]
const myarr2=new Array(1,2,3,4)
console.log(myarr[1]);
//Array methods

myarr.push(6)
myarr.push(7)
myarr.pop()
console.log(myarr);

console.log(myarr.includes(9));
console.log(myarr.indexOf(3));


const newarr=myarr.join()
console.log(myarr);
console.log(newarr);

//slice ,apice

console.log("A ",myarr);
const myn1=myarr.slice(1,3);
console.log(myn1);[1,2]
console.log("B",myarr);
const myn2=myarr.splice(1,3);
console.log("c ",myarr);
console.log(myn2);[1,2,3]

//The main differene between slice and splice is  splice modify the original array,it takes that portion and remoes it from the array.[0,4,5]

const marvel_heros=["thor","ironman","spiderman"]
const dc=["superman","flash","batman"]





const all=marvel_heros.concat(dc)

console.log(all);
const newhero=[...marvel_heros,...dc]
console.log(newhero);

//using flat we can split multiple arrya in one array
//Array.flat[infinity]


console.log(Array.from("Dipsikha"))
console.log(Array.from({name:"Dipsikha"}))//returns empty array

