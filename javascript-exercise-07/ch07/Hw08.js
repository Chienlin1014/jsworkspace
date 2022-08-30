// 8.請定義以下類別
// Pet(寵物)
// 屬性
// nickname: 暱稱
// age: 年紀
// color: 毛色
// 建構式: 3個參數(nickname、age、color)
// 方法
// talk(): 方法內留空即可
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

// Dog(狗)、Cat(貓)、Bird(鳥)
// 繼承Pet類別
// 建構式: 3個參數(nickname、age、color)
// 方法 (覆寫Pet的方法)
// talk(): 印出寵物的叫聲

class Dog extends Pet {

    constructor(nickname, age, color) {
        super(nickname, age, color);
    }
    talk() {
        super.talk();
        console.log('汪');
    }
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

class Bird extends Pet {

    constructor(nickname, age, color) {
        super(nickname, age, color);
    }
    talk() {
        super.talk();
        console.log('呱')
    }
}
