const mySkills = ['javascript', 'java', 'sql', 'c', 'python', 'php', 'swift'];
const x = mySkills.toString().replaceAll(",", "");
let count = [];
for (let i = 0; i < x.length; i++) {
    count[x[i]] ? count[x[i]]++ : count[x[i]] = 1;
}
console.log(count);