// function f1(a, b) {
//     console.log(a, b)
// }
// f1(1,2);

// function pow2(a) {
//     return a*a; //or Math.pow(a, 2)
// }
// const result=pow2(3);
// console.log(result);
//
// function pow3(a, b) {
//     return a**b;
// }
// const  result2 = pow3(3,9);
// console.log(result2);
function f1(nickname) {
    if(nickname!=undefined){
        console.log('HI! '+nickname);
    }else{
        console.log('HI! '+'Guest')
    }
}

f1();
