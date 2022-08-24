// 3.(續上題) 請將陣列排序，若有陣列元素之值等於平均值，印出該元素的索引，否則，找出平均值介於哪兩個元素值之間，印出該兩個元素的索引
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
let  avg =sum/randomArr.length;
console.log('隨機陣列總合為：'+sum);
console.log('隨機陣列平均為：'+avg);

randomArr.sort();
console.log(randomArr)
for (let i = 0; i < randomArr.length; i++) {
    if(avg===randomArr[i]){
        console.log('平均值等於索引值：'+i+'之元素');
    }
    if(avg>randomArr[i]&&avg<randomArr[i+1]){
        console.log('平均介於索引值'+i+'及'+(i+1)+'的元素間');
    }
}