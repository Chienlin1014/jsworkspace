// 1.請宣告一個陣列，並利用Math.random()產生5個範圍為0~9的整數值給每個元素，且每個值不可重複
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
