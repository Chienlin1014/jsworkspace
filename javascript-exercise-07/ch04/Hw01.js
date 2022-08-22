// 1.有一個正整數n，並印出1~n之內，3的倍數和4的倍數的總和
let n =500;
let max=0;
for(let i=1; i<=500;i++){
    if(i%3===0||i%4===0){
        max+=i;
    }
}
console.log('3、4的倍數總合為：'+max);