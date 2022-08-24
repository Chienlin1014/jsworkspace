// 5.請設計一程式，含有2個正整數變數year(年)、month(月)，印出該年該月有幾天
// *註: 需考慮閏年
let yyyy=2021;
let month=2;
let dates= [31,28,31,30,31,30,31,31,30,31,30,31];
if ((yyyy%4==0&&yyyy%100!=0)||yyyy%400==0) {
    dates[1]=29;
}
console.log(yyyy+'年'+month+'月，有'+dates[month-1]+'天');



