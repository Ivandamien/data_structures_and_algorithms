 const arr = [7, 9, 3, 5, 15, 10, 0];

 // Without destructuring
 const selectionSort = arr => {
     const len = arr.length;
     for (let i = 0; i < len; i++) {
         let indexOfMin = i;
         for (let j = i + 1; j < len; j++) {
             if (arr[j] < arr[indexOfMin]) indexOfMin = j
         }
         if (indexOfMin !== i) {
             // Swap
             const temp = arr[indexOfMin];
             arr[indexOfMin] = arr[i];
             arr[i] = temp
         }
     }
     return arr;
 }


 //With Distructuring
 const selectionSort2 = arr => {
     const len = arr.length;
     const swap = (arr, indexOne, indexTwo) => {
         ([arr[indexOne], arr[indexTwo]] = [arr[indexTwo], arr[indexOne]])
     }
     for (let i = 0; i < len; i++) {
         let indexOfMin = i;
         for (let j = i + 1; j < len; j++) {
             if (arr[j] < arr[indexOfMin]) indexOfMin = j
         }
         if (indexOfMin !== i) {
             swap(arr, indexOfMin, i)
         }
     }
     return arr;
 }