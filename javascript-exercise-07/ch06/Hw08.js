// 8.請複製第7題的power函式至本題。另定義函式power2，說明如下
//
// 功能: 計算平方值
// 參數
// a: 底數
// 回傳: 平方值
//     :bulb: 提示: 請利用函式power來完成power2的功能

/**
 *
 * @param {number} a 底數
 * @param {number} b 次方數
 * @returns {number}
 */
function power(a, b) {
    return a**b;
}

/**
 *
 * @param {number} a 底數
 * @param {function} power
 * @returns {*} 回傳power的回傳值
 */
function power2(a, power) {
    return power(a,2);
}

console.log(power2(10, power));