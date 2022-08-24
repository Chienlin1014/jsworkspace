// 4. 有一字串陣列內容如下..
// const mySkills = ['javascript', 'java', 'sql', 'c', 'python', 'php', 'swift'];
// 請統計並印出陣列內每個字母各有幾個，EX..
// a: 4
// c: 2
// ..
const mySkills = ['javascript', 'java', 'sql', 'c', 'python', 'php', 'swift'];
let str=[];
for (let i = 0; i < mySkills.length; i++) {
    for (str[str.length] of mySkills[i]) { //將所有字母都當成個別元素
    }
}
str=str.sort(); // 排列所有字母
// console.log(str); //確認是否所有字母都有排到
let alphabet=[]; //預定做成二維陣列
let letter=[]; //存放同字母之陣列(用來判斷字母數量)
for (let i = 0; i <str.length ; ) {
    letter=[]; //每次都初始化存放字母之陣列
    for (let j = 0; j <str.length ; j++) {
        if (str[i] === str[j]) {
            letter[letter.length] = str[i]; //將相同的字母存入letter陣列
        }
    }
    alphabet[alphabet.length]=letter; //將letter陣列當作元素丟到alphabet陣列
    i+=letter.length; //因已排序且抓出字母數量，所以i+=letter.length跳過已抓過之字母
}
for (let i = 0; i < alphabet.length; i++) {
    console.log('字母' + alphabet[i][0] + '，共有' + alphabet[i].length + '個');

}
