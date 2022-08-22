// 4.李威廉在寫JavaScript作業，電腦開機需要1分鐘，打開VS Code需要2分鐘，寫1題作業需要3分鐘，且李威廉每天都會將電腦關機。
// 李威廉分2天寫，第一天連續寫3題目，第二天連續寫2題，
// 請用程式算出李威廉共花多少時間
let day=2;
let powerOn=1;
let vsOn=2;
let hwComplete=3;
console.log('共花：'+(hwComplete*5+(powerOn+vsOn)*2)+'分');