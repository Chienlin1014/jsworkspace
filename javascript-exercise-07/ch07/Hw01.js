// 1.請定義"手機"類別，特徵依你認知的現實狀況
class Cellphone {
    Brand;
    phoneNumber;
    size;

    constructor(Brand, phoneNumber, size) {
        this.Brand = Brand;
        this.phoneNumber = phoneNumber;
        this.size = size;
    }

    callout(phoneNumber) {
        console.log('撥打電話給' + phoneNumber);
    }

    callin(phoneNumber) {
        console.log('收到' + phoneNumber + '來電');
    }
};