// // let user ={
// //     id: 1,
// //     username: 'xxxxx@gmail.com',
// //     pw: 'P@ssw0rd',
// //     nickname: 'yyy'
// // };
// // user.pass= false;
// // user['phone']=123;
// // console.table(user)
// // console.log(user['id']);
// // console.log(user['pw']);
//
// // let i = 'a'.charCodeAt();
// // console.log(i)
//
//
//
//
// // function f1(user) {
// //     const {username, password}=user;
// //     console.log(username, password)
// // }
// //
// // const u1 = {username: '123', password: '545', age:30};
// // const {username, ...other}=u1;
// // console.log(username);
// // console.log(other);
// // f1(u1);
// // const arr = ['a', 'b', 'c'];
// // const [e1,e2,e3]=arr;
// // console.log(e1, e2, e3);
// //
// // let a = 1;
// // let b = 2;
// // let temp=a;
// // a=b;
// // b=temp;
//
// // const u1 = {username: '123', password: '545', age:30};
// // const {username, ...other}=u1;
// // console.log(username);
// // console.log(other);
// //
// // const arr = [1, 2, 3, 4, 5];
// // const [e1,e2,...e3]=arr;
// // console.log(e1);
// // console.log(e2);
// // console.log(e3);
// //
// // const a ={
// //     user: 'Bee',
// //     age: 12,
// // };
// // const n = {...a, y: 2};
// // console.log(n)
//
// // const user = {
// //     id: 1,
// //     username: 'william1234',
// //     password: 'P@ssw0rd',
// //     nickname: 'William Lee'
// // };
// //
// // for (let prop in user) { //把屬性的名字放到prop，要呼叫屬性值必須以物件名包住prop，ex user[prop]
// //     console.log(prop + ': ' + user[prop]);
// // }
//
//
// function f1(obj) {
//     for (let key in obj) {
//         const value = obj[key];
//         console.log(key + ':' + value);
//     }
// }
//
// let user = {
//     id: 1,
//     name: 'William',
//     pw: 1234,
//     xxx: 'WERTYUI',
//     gender: 'man',
//
// };
// f1(user);

// 定義Person的原型，有屬性name、age、talk
Person.prototype.name = 'Xi';
Person.prototype.age = 0;
Person.prototype.talk = function () {
    console.log("Hi! I'm " + this.name + ", I'm " + this.age + " years old.");
};

// 定義Person的建構式
function Person(name, age) {
    this.name = name;
    this.age = age;
}
console