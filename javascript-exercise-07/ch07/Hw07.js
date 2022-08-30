// 7.續第6題，定義2個Shape類別的子類別
class Shape {
    getPerimeter(){}
    getArea(){}
}
//
// Rectangle(矩形)
// 屬性
// length: 長
// width: 寬
// 建構式: 2個參數(length、width)
// 方法 (覆寫Shape的方法)
// getPerimeter(): 計算矩形周長，並回傳
// getArea(): 計算矩形面積，並回傳

class Rectangle extends Shape {
    length;
    width;

    constructor(length, width) {
        super();
        this.length = length;
        this.width = width;
    }
    getPerimeter() {
        super.getPerimeter();
        return (this.length * 2 + this.width * 2);
    }
    getArea() {
        super.getArea();
        return (this.length * this.width);
    }
}

// Circle(圓形)
// 屬性
// radius: 半徑
// 建構式: 1個參數(radius)
// 方法 (覆寫Shape的方法)
// getPerimeter(): 計算圓形周長，並回傳
// getArea(): 計算圓形面積，並回傳
class Circle extends Shape {
    radius;
    PI=3.14;

    constructor(radius) {
        super();
        this.radius = radius;
    }

    getPerimeter() {
        super.getPerimeter();
        return (this.radius*2*this.PI);
    }
    getArea() {
        super.getArea();
        return (this.radius**2*this.PI);
    }
}

let rec = new Rectangle(5, 4);
console.log('矩形周長='+rec.getPerimeter()+',面積='+rec.getArea())
let cir = new Circle(5);
console.log('圓形周長='+cir.getPerimeter()+',面積='+cir.getArea())
