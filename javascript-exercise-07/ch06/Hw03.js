// 3. 請定義函式getRandom，說明如下
// 功能: 產生指定範圍的整數亂數，並回傳
// 參數
// startNum: 亂數範圍下限
// endNum: 亂數範圍上限
// 回傳: 產生的亂數
/**
 *
 * @param {number}startNum
 * @param {number}endNum
 * @returns {number}
 */
function getRandom(startNum, endNum) {
    return Math.trunc(Math.random() * (endNum - startNum + 1));
}
let startNum=0;
let endNum=100;
console.log(startNum+'到'+endNum+'隨機取一個數為：'+getRandom(startNum, endNum));