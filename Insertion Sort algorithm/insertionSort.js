const arr = [2, 4, 9, 14, 23, 7];
const insertionSort = arr => {
    for (let i = 1; i < arr.length; i++) {
        let curr = arr[i];
        let j = i - 1;

        while (j >= 0 && arr[j] > curr) {
            arr[j + 1] = arr[i];
            j--;
        }
        arr[j + 1] = curr;
    }
    return arr;
}
insertionSort(arr);
console.log(arr)