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