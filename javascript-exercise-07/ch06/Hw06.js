// 6.請定義函式request，說明如下
// 參數
// url: 欲發出請求的目標網址
// option: 選項物件，用以描述請求的細節設定，包含以下屬性
// method: 請求方法，可接受’GET’(預設)、‘POST’
// contentType: 請求內容的MIME類型，可接受’application/x-www-form-urlencoded’(預設)、‘application/json’
// body: 請求本體，請求傳輸的資料
// 功能: 只需將所有參數的內容印出即可
/**
 *
 * @param {string}url
 * @param {選項物件}option
 * @param {request}body
 */
function request(url, option, body) {
    console.log(url);
    const opt={
        method: option.method || 'GET',
        contentType: option.contentType || 'application/x-www-form-urlencoded'
    };
    console.log(opt);
    console.log(body);
}
let option={
    method:undefined,  // ‘POST’
    contentType:undefined // ‘application/json’
};

request('https://',option,'請求本體');