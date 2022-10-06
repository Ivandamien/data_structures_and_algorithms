/*

Merge Sort Algorithm

Time Complexity, Worst Case O(n log n)

Sorting By Splitting Arrays

*/

const mergeSort = array => {
    //Check if array can be split
    if (array.length < 2) return array;
    //Get Middle index
    const middle = Math.floor(array.length / 2);
    //Split Array In Two Sides
    const leftSide = array.slice(0, middle);
    const rightSide = array.slice(middle, array.length);
    //Use recusion to continue splitting
    console.log('split:', leftSide, rightSide);
    return merge(mergeSort(leftSide), mergeSort(rightSide));
}

const merge = (left, right) => {
    //Create New Array
    const result = [];
    //Check if left array and right array is empty
    while (left.length && right.length) {
        //Find lower value
        if (left[0] <= right[0]) {
            //Add left value
            result.push(left.shift());
        } else {
            //Add right value
            result.push(right.shift());
        }
    }
    //Merge left array
    while (left.length) result.push(left.shift());
    //Merge right array
    while (right.length) result.push(right.shift());
    //return result array
    console.log('result:', result);
    return result;
}

console.log(mergeSort([5, 3, 7, 10, 4, 1, 5]));