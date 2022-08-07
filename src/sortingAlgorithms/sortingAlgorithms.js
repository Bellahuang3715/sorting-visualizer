// divide and conquer
// split array into two halves at the middle
// continue dividing the subarrays in the same manner until left with single elements
// sort + combine the subarrays

export const mergeSort = array => {
    const middle = Math.floor(array.length / 2);
    if (array.length === 1) {
        return array;
    }
    const left = mergeSort(array.slice(0, middle));
    const right = mergeSort(array.slice(middle));
    const sortedArray = [];
    let i = 0, j = 0;
    while (i < left.length && j < right.length) {
        if (left[i] < right[j]) {
            sortedArray.push(left[i++]);
        } else {
            sortedArray.push(right[j++]);
        }
    }
    while (i < left.length) sortedArray.push(left[i++]);
    while (j < right.length) sortedArray.push(right[j++]);
    return sortedArray;
}

export const insertionSort = array => {
    let len = array.length;
    for (let i = 0; i < len; i++) {
        let element = array[i];
        let previousIdx = i - 1;
        while (previousIdx >= 0 && array[previousIdx] > element) {
            array[previousIdx + 1] = array[previousIdx];
            previousIdx -= 1;
        }
        array[previousIdx+1] = element;
    }
    return array;
}

export const selectionSort = array => {
    let len = array.length;
    for (let i = 0; i < len; i++) {
        let min = i;
        for (let j = i+1; j < len; j++) {
            if (array[j] < array[min]) {
                min = j;
            }
        }
        if (min != i) {
            let temp = array[i];
            array[i] = array[min];
            array[min] = temp;
        }
    }
    return array;
}


export const bubbleSort = array => {
    let swapped = true;
    do {
        swapped = false;
        for (let i = 0; i < array.length; i++) {
            if (array[i] > array[i+1]) {
                let temp = array[i];
                array[i] = array[i+1];
                array[i+1] = temp;
                swapped = true;
            }
        }
    } while (swapped)
    return array;
}

// export function getMergeSortAnimations(array) {
//   const animations = [];
//   if (array.length <= 1) return array;
//   const auxiliaryArray = array.slice();
//   mergeSortHelper(array, 0, array.length - 1, auxiliaryArray, animations);
//   return animations;
// }

// function mergeSortHelper(
//   mainArray,
//   startIdx,
//   endIdx,
//   auxiliaryArray,
//   animations,
// ) {
//   if (startIdx === endIdx) return;
//   const middleIdx = Math.floor((startIdx + endIdx) / 2);
//   mergeSortHelper(auxiliaryArray, startIdx, middleIdx, mainArray, animations);
//   mergeSortHelper(auxiliaryArray, middleIdx + 1, endIdx, mainArray, animations);
//   doMerge(mainArray, startIdx, middleIdx, endIdx, auxiliaryArray, animations);
// }

// function doMerge(
//   mainArray,
//   startIdx,
//   middleIdx,
//   endIdx,
//   auxiliaryArray,
//   animations,
// ) {
//   let k = startIdx;
//   let i = startIdx;
//   let j = middleIdx + 1;
//   while (i <= middleIdx && j <= endIdx) {
//     // These are the values that we're comparing; we push them once
//     // to change their color.
//     animations.push([i, j]);
//     // These are the values that we're comparing; we push them a second
//     // time to revert their color.
//     animations.push([i, j]);
//     if (auxiliaryArray[i] <= auxiliaryArray[j]) {
//       // We overwrite the value at index k in the original array with the
//       // value at index i in the auxiliary array.
//       animations.push([k, auxiliaryArray[i]]);
//       mainArray[k++] = auxiliaryArray[i++];
//     } else {
//       // We overwrite the value at index k in the original array with the
//       // value at index j in the auxiliary array.
//       animations.push([k, auxiliaryArray[j]]);
//       mainArray[k++] = auxiliaryArray[j++];
//     }
//   }
//   while (i <= middleIdx) {
//     // These are the values that we're comparing; we push them once
//     // to change their color.
//     animations.push([i, i]);
//     // These are the values that we're comparing; we push them a second
//     // time to revert their color.
//     animations.push([i, i]);
//     // We overwrite the value at index k in the original array with the
//     // value at index i in the auxiliary array.
//     animations.push([k, auxiliaryArray[i]]);
//     mainArray[k++] = auxiliaryArray[i++];
//   }
//   while (j <= endIdx) {
//     // These are the values that we're comparing; we push them once
//     // to change their color.
//     animations.push([j, j]);
//     // These are the values that we're comparing; we push them a second
//     // time to revert their color.
//     animations.push([j, j]);
//     // We overwrite the value at index k in the original array with the
//     // value at index j in the auxiliary array.
//     animations.push([k, auxiliaryArray[j]]);
//     mainArray[k++] = auxiliaryArray[j++];
//   }
// }