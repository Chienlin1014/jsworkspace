// 5. 請宣告一個二維陣列，並用巢狀for迴圈將以下值放入陣列內
//     [
//     [18, 27, 36, 45, 54, 63, 72, 81],
//         [16, 24, 32, 40, 48, 56, 64],
//         [14, 21, 28, 35, 42, 49],
//         [12, 18, 24, 30, 36],
//         [10, 15, 20, 25],
//         [8, 12, 16],
//         [6, 9],
//         [4]
//     ]
let arr1=[];
let arr2=[]
for (let i =9; i>=2;i--){
    arr1=[];
    for(let j =2;j<=i;j++){
     arr1[arr1.length]=i*j;
    }
   arr2[arr2.length]=arr1;
}
console.log(arr2);
console.table(arr2);
