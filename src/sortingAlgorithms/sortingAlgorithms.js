export const getInsertionSortAnimations = (array) => {
  const animations = [];
  let len = array.length;
  if (len <= 1) return array;
  insertionSortHelper(array, len, animations);
  return animations;
};


function insertionSortHelper(array, len, animations) {
  for (let i = 1; i < len; i++) {
    let element = array[i];
    let currentIdx = i;
    let previousIdx = i - 1;

    let swap = previousIdx >= 0 && array[previousIdx] > element;
    while (previousIdx >= 0 && array[previousIdx] > element) {
      array[previousIdx + 1] = array[previousIdx];
      console.log("current array: " + array)
      animations.push([currentIdx, previousIdx]);
      animations.push([currentIdx, previousIdx]);
      previousIdx -= 1;
      if (previousIdx >= 0 && array[previousIdx] > element){
        animations.push([previousIdx, array[previousIdx]]);
        animations.push([currentIdx, array[currentIdx]]);;
      }
    }
    if (!swap) {
      animations.push([currentIdx, previousIdx]);
      animations.push([currentIdx, previousIdx]);
      animations.push([previousIdx, array[previousIdx]]);
      animations.push([currentIdx, array[currentIdx]]);
    }
    array[previousIdx + 1] = element;
    animations.push([previousIdx + 1, element]);
    animations.push([currentIdx, array[currentIdx]]);
  }
  return array;
}


export const getSelectionSortAnimations = (array) => {
  const animations = [];
  let len = array.length;
  if (len <= 1) return array;
  selectionSortHelper(array, len, animations);
  return animations;
}

function selectionSortHelper(array, len, animations) {
  for (let i = 0; i < len; i++) {
    // min = index w/ min val
    let min = i;
    for (let j = i + 1; j < len; j++) {
      animations.push([i, j]);
      animations.push([i, j]);
      if (j !== (len-1)) {
        animations.push([i, array[i]]);
        animations.push([j, array[j]]);
      }
      if (array[j] < array[min]) {
        min = j;
      }
    }
    // swap if the current index does not have the min val
    animations.push([i, array[min]]);
    animations.push([min, array[i]]);
    if (min !== i) {
      let temp = array[i];
      array[i] = array[min];
      array[min] = temp;
    }
  }
  return array;
}

export const bubbleSort = (array) => {
  let swapped = true;
  do {
    swapped = false;
    for (let i = 0; i < array.length; i++) {
      if (array[i] > array[i + 1]) {
        let temp = array[i];
        array[i] = array[i + 1];
        array[i + 1] = temp;
        swapped = true;
      }
    }
  } while (swapped);
  return array;
};




export function getMergeSortAnimations(array) {
  const animations = [];
  if (array.length <= 1) return array;
  // .slice method returns a shallow copy of an array
  const auxiliaryArray = array.slice();
  mergeSortHelper(array, 0, array.length - 1, auxiliaryArray, animations);
  return animations;
}

function mergeSortHelper(mainArray, startIdx, endIdx, auxiliaryArray,
animations) {
  if (startIdx === endIdx) return;
  const middleIdx = Math.floor((startIdx + endIdx) / 2);
  mergeSortHelper(auxiliaryArray, startIdx, middleIdx, mainArray, animations);
  mergeSortHelper(auxiliaryArray, middleIdx + 1, endIdx, mainArray, animations);
  doMerge(mainArray, startIdx, middleIdx, endIdx, auxiliaryArray, animations);
}

function doMerge(
  mainArray,
  startIdx,
  middleIdx,
  endIdx,
  auxiliaryArray,
  animations
) {
  let k = startIdx;
  let i = startIdx;
  let j = middleIdx + 1;
  while (i <= middleIdx && j <= endIdx) {
    // These are the values that we're comparing; we push them once
    // to change their color.
    animations.push([i, j]);
    // These are the values that we're comparing; we push them a second
    // time to revert their color.
    animations.push([i, j]);
    if (auxiliaryArray[i] <= auxiliaryArray[j]) {
      // We overwrite the value at index k in the original array with the
      // value at index i in the auxiliary array.
      animations.push([k, auxiliaryArray[i]]);
      mainArray[k++] = auxiliaryArray[i++];
    } else {
      // We overwrite the value at index k in the original array with the
      // value at index j in the auxiliary array.
      animations.push([k, auxiliaryArray[j]]);
      mainArray[k++] = auxiliaryArray[j++];
    }
  }
  while (i <= middleIdx) {
    // These are the values that we're comparing; we push them once
    // to change their color.
    animations.push([i, i]);
    // These are the values that we're comparing; we push them a second
    // time to revert their color.
    animations.push([i, i]);
    // We overwrite the value at index k in the original array with the
    // value at index i in the auxiliary array.
    animations.push([k, auxiliaryArray[i]]);
    mainArray[k++] = auxiliaryArray[i++];
  }
  while (j <= endIdx) {
    // These are the values that we're comparing; we push them once
    // to change their color.
    animations.push([j, j]);
    // These are the values that we're comparing; we push them a second
    // time to revert their color.
    animations.push([j, j]);
    // We overwrite the value at index k in the original array with the
    // value at index j in the auxiliary array.
    animations.push([k, auxiliaryArray[j]]);
    mainArray[k++] = auxiliaryArray[j++];
  }
}
