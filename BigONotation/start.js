// Write a function that calculates the sum of all numbers from 1 upto (and including) some numbers n

//add 1
function addUpTo(n) {
    let total = 0;
    for (let i = 1; i <= n; i++) {
        total += i;
    }
    return total;
}

const t1 = performance.now();
addUpTo(100000000);
const t2 = performance.now();
console.log(`Time Elapsed: ${(t2 - t1) / 1000} seconds.`);

//add 2
function addUpto1(n) {
    return (n * (n + 1)) / 2;
}