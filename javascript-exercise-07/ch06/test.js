// // function f1(a, b) {
// //     console.log(a, b)
// // }
// // f1(1,2);
//
// // function pow2(a) {
// //     return a*a; //or Math.pow(a, 2)
// // }
// // const result=pow2(3);
// // console.log(result);
// //
// // function pow3(a, b) {
// //     return a**b;
// // }
// // const  result2 = pow3(3,9);
// // console.log(result2);
// // function f1(nickname) {
// //     if(nickname!=undefined){
// //         console.log('HI! '+nickname);
// //     }else{
// //         console.log('HI! '+'Guest')
// //     }
// // }
// //
// // f1();
// // function f1(a) {
// //     a.n++;
// // }
// // let b={n:1};
// // f1(b);
// // console.log(b);
// // function exchange1(a, b) {
// //     const temp = a;
// //     a = b;
// //     b = temp;
// // }
// //
// // let x = 1, y = 2;
// // exchange1(x, y);
// // console.log('x: ' + x);
// // console.log('y: ' + y);
// // function exchange2(point) {
// //     const temp = point.x;
// //     point.x = point.y;
// //     point.y = temp;
// // }
// //
// // let point = {
// //     x: 1,
// //     y: 2
// // };
// // exchange2(point);
// // console.log('point.x: ' + point.x);
// // console.log('point.y: ' + point.y);
//
// // callback
// // function f2(e) {
// //     console.log(e*e)
// // }
// // function f1(arr,f2) {
// //     for (let e of arr) {
// //         f2(e); //<--print
// //     }
// // }
// // const array=[5,3,2,1,4];
// // f1(array,f2);
//
// function f1(arr, f2) {
//     const result=[];
//     for (let e of arr) {
//         result[result.length] = f2(e);
//     }
//     return result;
// }
// function f2(e){
//     return e*2;
// }
// const array =[5,3,2,1,4];
// const result=f1(array,function (e){
//     return e*2;
// })
// console.log(result) //[10,6,4,2,8]
//
//
// function f3(arr, f2) {
//     const result=[];
//     for(let e of arr){
//         result[result.length] = f2(e);
//     }
//     return result;
// }
// const array2=[5,3,2,1,4];
// const result2=f3(array2, e => e*2 ); // return可省，大括號可省，如果參數只有一個，圓括號也可省
// console.log(result2);
//
// (() =>{
//     console.log('xxx');
//     console.log('xxx');
//     console.log('xxx');
//     console.log('xxx');
//     console.log('xxx');
// // })();
// let a =50
// console.log(a.toString(2))
let r=0;
let arr=[1,2,3,4];
for (let a of arr) {
    r+=a;
}
console.log(r)