// 4. 替第2題的類別Calculator加入1個方法showDistance()
//// 功能: 印出p1和p2的座標和2點的距離
// 參數
// p1: 點1，Point型態，含有2的屬性x、y，表示水平位移量、垂直位移量
// p2: 點2，同上

class Calculator{
    radix;

    constructor(radix=10) {
        this.radix = radix;
    }


    distance(a, b) {
        return (((a.x - b.x) ** 2 + (a.y + b.y) ** 2) ** 0.5).toString(this.radix);
    }

    showDistance(a,b) {
        console.log(a);
        console.log(b);
        console.log('兩點距離'+this.distance(a, b));
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
let cal = new Calculator();
cal.showDistance(p1, p2);
