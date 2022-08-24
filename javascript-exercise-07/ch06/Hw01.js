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
    let result;
    switch (arithmetic) {
        case '+':
            num = a + b;
            break;
        case '-':
            num = a - b;
            break;
        case '*':
            num = a * b;
            break;
        case '/':
            num = a / b;
            break;
    }

    // switch (radix) {
    //     case 2:
    //         result=num.toString(2);
    //         break;
    //     case 8:
    //         result=num.toString(8)
    //         break;
    //     case 16:
    //         result=num.toString(16)
    //         break
    // }
    // return result;
    return num.toString(radix);
}

console.log(calculate('+', 2,2, 1));

