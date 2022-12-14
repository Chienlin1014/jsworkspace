// 4. 請定義函式calculate2，說明如下 (類似第1題)

/**
 *
 * @param {string}arithmetic arithmetic: 四則運算，只接受’+‘、’*'
 * @param {number}radix radix: 進位模式，可接受2、8、10(預設)、16
 * @param {number[]}nums nums: 運算元陣列
 * @returns {string} 回傳: 算術運算的結果
 */
function calculate2(arithmetic,radix=10,nums) {
    let result=0;
    switch (arithmetic) {
        case '+':
            for (let a of nums) {
                result+=a;
            }
            return result.toString(radix);
        case '*':
            result=1;
            for (let a of nums) {
                result*=a;
            }
            return result.toString(radix);
    }
}
let arr=[1,2,3,4];
console.log(calculate2('*', 16, arr));