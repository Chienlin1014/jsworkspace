// 4. 請定義函式calculate2，說明如下 (類似第1題)
// 功能: 計算N個整數的加法、乘法運算，並依指定的進位模式回傳計算結果
// 參數
// arithmetic: 四則運算，只接受’+‘、’*'
// radix: 進位模式，可接受2、8、10(預設)、16
// nums: 運算元陣列
// 回傳: 算術運算的結果

function calculate2(arithmetic,radix,nums) {
    let result=0;
    switch (arithmetic) {
        case '+':
            for (let a of nums) {
                result+=a;
            }
            return result.toString(radix);
            break;
        case '*':
            result=1;
            for (let a of nums) {
                result*=a;
            }
            return result.toString(radix);
            break;
    }
}
let arr=[1,2,3,4];
console.log(calculate2('*', 16, arr));