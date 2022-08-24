// 10.有一陣列如下
// const array = [1, 2, 3, 4, 5];
// 請另定義函式，用來過濾array的元素，過濾條件為大於3，此函式須傳入第9題的函式filter
// 上述函式，請使用不同語法各撰寫一次
// 10-1. 使用定義函式語法
// 10-2. 使用匿名函式語法
// 10-3. 使用箭頭函式語法

/**
 *
 * @param {array} arr 數字
 * @param filtCondition 過濾條件(回呼函數)
 * @returns {*[]}
 */
const arr=[1,2,3,4,5];
function filter(arr, filtCondition) {
    let arr2=[];
    for(let i=0;i<arr.length;i++){
        if(filtCondition(arr[i])===true){
            arr2[arr2.length]=arr[i];
        }
    }
    return arr2;
}
function filtCondition(num) {
    return num > 3;
}
console.log('使用定義函式語法')
console.log(filter(arr, filtCondition));
console.log('匿名函式語法')
console.log(filter(arr, function (num){return num>3}));
console.log('箭頭函式語法')
console.log(filter(arr,  (num)=>{return num>3}));