// 9.請定義函式filter，說明如下
// 功能: 過濾陣列元素，並回傳新陣列，內含通過過濾的元素
// 參數
// array: 欲被過濾的陣列。此陣列應保持原有的元素，不可異動！
//     bulb: 提示: 因陣列屬於物件型態，會以call by reference方式傳遞，所以不可異動到參數array的內容，否則會影響到呼叫端的陣列！
//     callback: 回呼函式，用以表示過濾陣列元素的條件，回傳true表示元素留下；false表示元素捨棄
// 回傳: 新陣列，內含通過過濾的元素
/**
 *
 * @param {array} arr 數字
 * @param filtCondition 過濾條件(回呼函數)
 * @returns {*[]}
 */
function filter(arr, filtCondition) {
    let arr2=[];
    for(const element of arr) {
        if (filtCondition(element) === true) {
            arr2[arr2.length] = element;
        }
    }
    return arr2;
}
function filtCondition(num) {
    return num > 3;
}
const arr=[1,2,3,4,5];
console.log(filter(arr, filtCondition));

