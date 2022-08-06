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