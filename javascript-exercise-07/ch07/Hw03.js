// 3. 請定義類別Point，表示二維座標的點
//
// 屬性
// x: 水平位移量
// y: 垂直位移量
// 建構式: 2個參數，用來初始化屬性x、y
// 替第2題的類別Calculator加入一個方法distance()
//
// 功能: 計算平面座標上，2點的距離，並回傳
// 參數
// p1: 點1，Point型態，含有2的屬性x、y，表示水平位移量、垂直位移量
// p2: 點2，同上
// 回傳: 2點的距離
class Calculator{
    radix;

    constructor(radix=10) {
        this.radix = radix;
    }

    add(a, b) {
        return (a+b).toString(this.radix);
    }
    sub(a, b) {
        return (a-b).toString(this.radix);
    }
    mul(a, b) {
        return (a*b).toString(this.radix);
    }
    div(a, b) {
        return (a/b).toString(this.radix);
    }

    distance(a, b) {
        return ((a.x - b.x) ** 2 + (a.y + b.y) ** 2) ** 0.5;

    }
}
class Point {
    x;
    y;

    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
}

let p1 = new Point(0, 0);
let p2 = new Point(3, 4);
let cal = new Calculator(10);
console.log('兩點距離為'+cal.distance(p1, p2));
