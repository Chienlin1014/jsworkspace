// 2.請定義函式distance，說明如下
// 功能: 計算平面座標上，2點的距離，並回傳

/**
 *
 * @param {類陣列}p1
 * @param {類陣列}p2
 * @returns {number}
 */
function distance (p1,p2) {
    return ((p1.x-p2.x)* (p1.x-p2.x)+(p1.y-p2.y)*(p1.y-p2.y))**0.5;
}
const p1={
    x:0,
    y:0
};
const p2={
    x:8,
    y:6
};
console.log('兩點距離：'+distance(p1, p2));
