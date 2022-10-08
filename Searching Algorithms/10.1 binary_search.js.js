// Original Solution
function binarySearch(arr, elem) {
    var start = 0;
    var end = arr.length - 1;
    var middle = Math.floor((start + end) / 2);
    while (arr[middle] !== elem && start <= end) {
        if (elem < arr[middle]) {
            end = middle - 1;
        } else {
            start = middle + 1;
        }
        middle = Math.floor((start + end) / 2);
    }
    if (arr[middle] === elem) {
        return middle;
    }
    return -1;
}

// Refactored Version
function binarySearch(arr, elem) {
    var start = 0;
    var end = arr.length - 1;
    var middle = Math.floor((start + end) / 2);
    while (arr[middle] !== elem && start <= end) {
        if (elem < arr[middle]) end = middle - 1;
        else start = middle + 1;
        middle = Math.floor((start + end) / 2);
    }
    return arr[middle] === elem ? middle : -1;
}

binarySearch([2, 5, 6, 9, 13, 15, 28, 30], 103);

//Another easier way to implement binary search

const binary = (val, arr) => {
    let lower = 0;
    let upper = arr.length - 1;
    while (lower <= upper) {
        console.log("Try");
        const middle = lower + Math.floor((upper - lower) / 2);
        if (val === arr[middle]) {
            return middle;
        }
        if (val < arr[middle]) {
            upper = middle - 1;

        } else {
            lower = middle + 1;
        }
    }
    return -1;
}

const values = [1, 2, 3, 4, 5, 8, 11, 12, 15, 16, 20]
console.log(binary(55, values))