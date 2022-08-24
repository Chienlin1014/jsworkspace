 // 2.(續上題) 請印出陣列所有元素的總和、平均值

 let randomArr=[];
for (let i = 0; i <5; i++){
    randomArr[i] = Math.trunc(Math.random() *10);
    for (let j = 0; j < i; j++){
        if (randomArr[i] === randomArr[j]){
            i--;
        }
    }
}
console.log(randomArr)

 let sum=0;
for (let x of randomArr){
    sum+=x;
}
console.log('隨機陣列總合為：'+sum);
console.log('隨機陣列平均為：'+sum/randomArr.length)