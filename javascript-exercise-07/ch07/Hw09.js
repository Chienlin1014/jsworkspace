// 9.請定義以下類別
//
// Vehicle(交通工具)
// 屬性
// tankSize: 油箱大小(公升)
// 建構式: 1個參數(tankSize)
// 方法
// gasUp(): (示意即可) 印出已加滿至xx公升
// Car(車)、Airplane(飛機)
// 繼承Vehicle類別
// 建構式: 1個參數(tankSize)
class Veichle {
    tankSize;

    constructor(tankSize) {
        this.tankSize = tankSize;
    }

    gasUp() {
        console.log('油已加滿至' + this.tankSize + '公升');
    }
}

class Car extends Veichle{

    constructor(tankSize) {
        super(tankSize);
    }
}

class Plane extends Veichle {

    constructor(tankSize) {
        super(tankSize);
    }
}

let c = new Car(50);
let p = new Plane(500);
c.gasUp();
p.gasUp();