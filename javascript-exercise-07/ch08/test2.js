// const  obj ={
//     id:1,
//     name: 'Chienlin',
//     age: 35,
//
// };
// ;
// console.log(Object.keys(obj));
// console.log(Date());

// const date = new Date();
// console.log(date);
// console.log(Date.parse('1988-01-30'))

const date = new Date(1999, 8, 21, 1, 47, 15, 900);
const options = {
    year: 'numeric',    // 年: 使用4位數
    month: '2-digit',   // 月: 使用2數位
    day: '2-digit',     // 日: 使用2數位
    hour12: false,      // 12小時制: 不使用
    hour: '2-digit',    // 時: 使用2數位
    minute: '2-digit',  // 分: 使用2數位
    second: '2-digit'   // 秒: 使用2數位
};
console.log(new Intl.DateTimeFormat('zh-TW', options).format(date));    // 1999/09/21 01:47:15

