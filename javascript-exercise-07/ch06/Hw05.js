// 5. 請定義函式calShapeArea，說明如下
//
// 功能: 計算形狀的面積
// 參數
// type: 形狀種類，0:圓形、1:矩形
// data: 選項物件，形狀的數值
// 圓形時: 包含屬性radius(半徑)
// 矩形時: 包含屬性長(length)、寬(width)
// 回傳: 面積
/**
 *
 * @param {number}type
 * @param {obj}data
 */
function calShapeArea(type,data) {
    switch (type) {
        case 0:
            return data.r**2*data.PI;
            break;
        case 1:
            return data.length*data.width;
    }
}
let circle={
    PI:3.14,
     r:5
};
let rectangle={
    length:5,
    width:4
};
console.log('面積為：' + calShapeArea(0, circle));
console.log('面積為：' + calShapeArea(1, rectangle));

