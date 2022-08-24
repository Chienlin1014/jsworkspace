/**
 * 功能: 計算2個整數的四則運算，並依指定的進位模式回傳計算結果
 * @param {string} arithmetic :四則運算，可接受’+‘、’-‘、’*‘、’/’
 * @param {number}radix :進位模式，可接受2、8、10(預設)、16
 * @param {number}a : 運算元
 * @param {number}b : 運算元
 * @returns {string} :回傳值
 */
function calculate(arithmetic,radix, a, b) {
    let num;
    switch (arithmetic) {
        case '+':
            num = a + b;
            return num.toString(radix);
            break;
        case '-':
            num = a - b;
            return num.toString(radix);
            break;
        case '*':
            num = a * b;
            return num.toString(radix);
            break;
        case '/':
            num = a / b;
            return num.toString(radix);
            break;
    }
}

console.log(calculate('+', 16,2, 1));

