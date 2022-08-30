// 5.替第4題的類別Calculator加入1個方法getRandom()
//
// 功能: 產生指定範圍的整數亂數
// 參數
// startNum: 亂數範圍下限
// endNum: 亂數範圍上限
// 回傳: 介於startNum~endNum的整數亂數
class Calculator{
    radix;

    constructor(radix=10) {
        this.radix = radix;
    }


    distance(a, b) {
        return ((a.x - b.x) ** 2 + (a.y + b.y) ** 2) ** 0.5;
    }

    showDistance(a,b) {
        console.log(a);
        console.log(b);
        console.log('兩點距離'+this.distance(a, b));
    }

    getRandom(a, b) {
        return Math.trunc(Math.random() * (b - a + 1) + a);
    }
}
let startNum=50;
let endNum=500;
let cal = new Calculator();
console.log(cal.getRandom(startNum, endNum));
