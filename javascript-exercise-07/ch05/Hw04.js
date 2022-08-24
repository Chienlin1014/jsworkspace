// 4. 有一字串陣列內容如下..
// const mySkills = ['javascript', 'java', 'sql', 'c', 'python', 'php', 'swift'];
// 請統計並印出陣列內每個字母各有幾個，EX..
// a: 4
// c: 2
// ..
const mySkills = ['javascript', 'java', 'sql', 'c', 'python', 'php', 'swift'];
let str=[];
for (let i = 0; i < mySkills.length; i++) {
    for (str[str.length] of mySkills[i]) {
    }
}
str=str.sort();
let alphabet=[];
let letter=[];
for (let i = 0; i <str.length ; ) {
    letter=[];
    for (let j = 0; j <str.length ; j++) {
        if (str[i] === str[j]) {
            letter[letter.length] = str[i];
        }
    }
    alphabet[alphabet.length]=letter;
    i+=letter.length;
}
for (let i = 0; i < alphabet.length; i++) {
    console.log('字母' + alphabet[i][0] + '，共有' + alphabet[i].length + '個');
}
