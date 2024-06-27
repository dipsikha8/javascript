let score=33//if we use "33abc"//it will be converted to num  NAN which is also type of number,null=>0,undefined=>nan,string=>nan
console.log(typeof (score));

let valueInNumber=Number(score)//converting to number
console.log(typeof valueInNumber);

//nan=not a number but type is number

let isloggedIn=1
let booleanIsLoggedIn=boolean(isloggedIn)
console.log(booleanIsLoggedIn);//1=>true
//empty=>false
//0=>false
//hitesh=>true


let stringn=33
let sc=string(stringn);
console.log(sc);