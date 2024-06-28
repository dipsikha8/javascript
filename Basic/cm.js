console.log(2>1);
console.log(2>=1);
console.log(2<1);
console.log(2<=1);


console.log("2">1);
console.log("02">1);

console.log(null>0)//false
console.log(null==0)//false
console.log(null>=0)//true//conversion problem//we always try to avoid this type of conventions

console.log(undefined==0);
console.log(undefined>0);
console.log(undefined<0);



//The reason is that an equality check== and comparison><>=<=work differently.

//comparisons convert null to a number,treating it as 0.
//thtas why (3)null>=0 is true and (1)null>0 is false