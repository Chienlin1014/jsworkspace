for (let n = 1; n <= 30; n++) {
    // 若不是3的倍數，就跳過這一輪
    if (n % 3 !== 0) {
        continue;
    }
    console.log(n);
}