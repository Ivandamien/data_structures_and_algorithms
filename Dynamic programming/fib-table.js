function fib_table(n) {
    if (n <= 2) return 1;
    var fibNums = [0, 1, 1];
    for (var i = 3; i <= n; i++){
        fibNums[i] = fibNums[i - 1] + fibNums[i - 2];
    }
    return fibNums[n]
}