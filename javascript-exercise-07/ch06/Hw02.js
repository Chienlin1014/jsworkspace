// 2.請定義函式distance，說明如下
// 功能: 計算平面座標上，2點的距離，並回傳
// 參數
// p1: 點1，物件型態，含有2的屬性x、y，表示水平位移量、垂直位移量
// p2: 點2，同上
// 回傳: 2點的距離
const p1={
    x:0,
    y:0
};
const p2={
    x:4,
    y:3
};
console.log(distance(p1, p2));
function distance (p1,p2) {
    return ((p1.x-p2.x)* (p1.x-p2.x)+(p1.y-p2.y)*(p1.y-p2.y))**0.5;
}