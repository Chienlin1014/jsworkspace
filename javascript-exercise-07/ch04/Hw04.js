// 4.請設計一程式，含有1個正整數變數n，並印出1~n所有質數的總和
let n = 100;
let prime = 2;
for (let i = 3; i <= n; i++) {
    let primeJudge = true;
    for (let j = 2; j <= parseInt(i / 2); j++) {
        if (i % j === 0) {
            primeJudge = false;
            break;
        }
    }
    if (primeJudge) {
        prime += i;
    }
}
console.log("1-n之質數和：" + prime);

