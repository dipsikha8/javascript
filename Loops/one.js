//for loop

for (let i= 0; i < 10; i++) {
    const element=i;
    console.log(element);
    if(element==5){
        console.log("Best number");
    }

    
}



//++++++++++++++++loop inside a loop

for (let i = 0; i < 10; i++) {
    console.log(`outer loop: ${i}`);
    for(let j=0;j<10;j++){
        //console.log(`inner loop value:${j} and ${i}`);
        console.log(`${i} * ${j} = ${i*j}`);
    }

}

//++++++Array+++++++

let arr=["Dipu","Mona","Subham"]

for(let i=0;i<arr.length;i++){
    
   // console.log(arr[i]);
}

//keywords=>break,continue
//Break
console.log("Break keyword example");
for(let i=0;i<10;i++){
    if(i==5){
        break;
    }
    console.log(i);
}
//Continue
console.log("Continue keyword example");
for(let i=0;i<10;i++){
    if(i==5){
        continue;
    }
    console.log(i);
}




