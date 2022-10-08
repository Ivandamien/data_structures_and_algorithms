let unsorted = [3, 38, 44, 25, 56, 48, 25, 5, 4, 3];
let swapped;

// Non refactored
function bubbleSort(arr) {
    swapped = false;
    let end = arr.length - 1;
    for (let i = 0; i < end; i++) {
        if (arr[i] > arr[i + 1]) {
            swapped = true;
            let temp = arr[i];
            arr[i] = arr[i + 1];
            arr[i + 1] = temp;
        }
    }
    end--;
}
do {
    bubbleSort(unsorted)
} while (swapped);

console.log(unsorted);

//Refactored
function bubbleSort(arr) {
    swapped = false;
    let end = arr.length - 1;
    for (let i = 0, j = 1; i < end; i++, j++) {
        if (arr[i] > arr[j]) {
            swapped = true;
            [arr[i], arr[j]] = [arr[j], arr[i]];

        }
    }
    end--;
}
do {
    bubbleSort(unsorted)
} while (swapped);

console.log(unsorted);