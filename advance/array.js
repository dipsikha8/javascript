//array
//collection of multiple items in a single variable.

const myarr=[0,1,2,3,4,5]
const myhero=["shahrukh khan","salman khan","Amir khan"]
const myarr2=new Array(1,2,3,4)
console.log(myarr[1]);
//Array methods

myarr.push(6)
myarr.push(7)
myarr.pop()//removes the last value from array
console.log(myarr);

console.log(myarr.includes(9));//if 9 is present or not in the array
console.log(myarr.indexOf(3));//it gives the index//if we ask index of a value which is not present in the array it will give -1


const newarr=myarr.join()
console.log(myarr);
console.log(newarr);//join bounded our array and converted into string

//slice ,splice

console.log("A", myarr);
const myn1=myarr.slice(1,3);//it includes only 1 and 2
console.log(myn1);
console.log("B ", myarr);
const myn2=myarr.splice(1, 3);//
console.log("c ", myarr);
console.log(myn2);

//The main differene between slice and splice is  splice modify the original array,it takes that portion and removes it from the array.[0,4,5]

const marvel_heros=["thor","ironman","spiderman"]
const dc_heros=["superman","flash","batman"]
//marvel_heros.push(dc_heros);//array takes any input of any datatype .in this example we saw it took the dc_heros array as input in marvel heros
//console.log(marvel_heros);
const all=marvel_heros.concat(dc_heros)//concatenation

console.log(all);
const newhero=[...marvel_heros,...dc_heros]//spread operator
console.log(newhero);

//using flat we can split multiple array in one array
//Array.flat[infinity]


console.log(Array.from("Dipsikha"))//it converts string in array
console.log(Array.from({name:"Dipsikha"}))//returns empty array//interesting for interview

let score1=100;
let score2=300;
let scrore3=500;
console.log(Array.of(score1,score2,scrore3));//creates newarray from set of elements