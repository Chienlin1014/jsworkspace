let user ={
    id: 1,
    username: 'xxxxx@gmail.com',
    pw: 'P@ssw0rd',
    nickname: 'yyy'
};
user.pass= false;
user['phone']=123;
console.table(user)
console.log(user['id']);
console.log(user['pw']);
