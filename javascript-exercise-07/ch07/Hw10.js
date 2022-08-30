// 10.請定義以下類別
//
// Owner(主人)
// 屬性
// name: 姓名
// pet: 寵物，Pet型態
// vehicle: 交通工具，Vehicle型態
// 建構式: 3個參數(name、pet、vehicle)
// 方法
// walkPet(): (示意即可) 印出寵物叫聲
// drive(): (示意即可) 印出油箱大小
class Owner {
    name;
    pet;
    vehicle;

    constructor(name, pet, vehicle) {
        this.name = name;
        this.pet = pet;
        this.vehicle = vehicle;
    }

    walkPet() {
        this.pet.talk();
    }

    drive() {
        this.vehicle.gasUp();
    }
}
class Pet {
    nickname;
    age;
    color;

    constructor(nickname, age, color) {
        this.nickname = nickname;
        this.age = age;
        this.color = color;
    }

    talk() {};
}
class Cat extends Pet {

    constructor(nickname, age, color) {
        super(nickname, age, color);
    }
    talk() {
        super.talk();
        console.log('喵')
    }
}

class Veichle {
    tankSize;

    constructor(tankSize) {
        this.tankSize = tankSize;
    }

    gasUp() {
        console.log('油箱大小' + this.tankSize + '公升');
    }
}

class Car extends Veichle{

    constructor(tankSize) {
        super(tankSize);
    }
}


let a =new Cat('X',5,'black')
let b =new Car(50)
let my = new Owner('bee',a,b);
my.walkPet()
my.drive()