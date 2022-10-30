hash("pink", 100);

//Hash that works on strings only
function hash(key, arrayLen) {
    let total = 0;
    for (let char of key) {
        // map "a" to 1, "b" to 2, "c" to 3,etc.
        let value = char.charcodeAt(0) - 96
        total = (total + value) % arrayLen;
    }
    return total;
}