import React from "react";
import * as sortingAlgorithms from '../sortingAlgorithms/sortingAlgorithms'
// import {getMergeSortAnimations} from '../sortingAlgorithms/sortingAlgorithms'
import "./SortingVisualizer.css";


// Change this value for the speed of the animations.
const ANIMATION_SPEED_MS = 1;

// Change this value for the number of bars (value) in the array.
const NUMBER_OF_ARRAY_BARS = 310;

// This is the main color of the array bars.
const PRIMARY_COLOR = 'turquoise';

// This is the color of array bars that are being compared throughout the animations.
const SECONDARY_COLOR = 'red';


export default class SortingVisualizer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      array: [],
    };
  }

  // when the component reloads/ loads for the first time
  componentDidMount() {
    this.resetArray();
  }

  resetArray() {
    const array = [];
    // for (let i = 0; i < 310; i++)
    for (let i = 0; i < 210; i++) {
      // generate random values b/w 5 and 1000
      array.push(randomNumber(5, 730));
    }
    this.setState({ array });
  }

  mergeSort() {
    // const javaScriptSortedArray = this.state.array.slice().sort((a, b) => a - b);
    // const sortedArray = sortingAlgorithms.mergeSort(this.state.array);
    // console.log(arraysAreEqual(javaScriptSortedArray, sortedArray));
    // const animations = getMergeSortAnimations(this.state.array);
    // for (let i = 0; i < animations.length; i++) {
    //   const arrayBars = document.getElementsByClassName('array-bar');
    //   const isColorChange = i % 3 !== 2;
    //   if (isColorChange) {
    //     const [barOneIdx, barTwoIdx] = animations[i];
    //     const barOneStyle = arrayBars[barOneIdx].style;
    //     const barTwoStyle = arrayBars[barTwoIdx].style;
    //     const color = i % 3 === 0 ? SECONDARY_COLOR : PRIMARY_COLOR;
    //     setTimeout(() => {
    //       barOneStyle.backgroundColor = color;
    //       barTwoStyle.backgroundColor = color;
    //     }, i * ANIMATION_SPEED_MS);
    //   } else {
    //     setTimeout(() => {
    //       const [barOneIdx, newHeight] = animations[i];
    //       const barOneStyle = arrayBars[barOneIdx].style;
    //       barOneStyle.height = `${newHeight}px`;
    //     }, i * ANIMATION_SPEED_MS);
    //   }
    // }
  }

  insertionSort() {
    // const javaScriptSortedArray = this.state.array.slice().sort((a, b) => a - b);
    // const sortedArray = sortingAlgorithms.insertionSort(this.state.array);
    // console.log(sortedArray);
    // console.log(arraysAreEqual(javaScriptSortedArray, sortedArray));
  }

  selectionSort() {
    const javaScriptSortedArray = this.state.array.slice().sort((a, b) => a - b);
    const sortedArray = sortingAlgorithms.selectionSort(this.state.array);
    console.log(sortedArray);
    console.log(arraysAreEqual(javaScriptSortedArray, sortedArray));
  }

  quickSort() {
    // const javaScriptSortedArray = this.state.array.slice().sort((a, b) => a - b);
    // const sortedArray = sortingAlgorithms.mergeSort(this.state.array);
    // console.log(arraysAreEqual(javaScriptSortedArray, sortedArray));
  }

//   heapSort() {}

  bubbleSort() {
    const javaScriptSortedArray = this.state.array.slice().sort((a, b) => a - b);
    const sortedArray = sortingAlgorithms.bubbleSort(this.state.array);
    console.log(sortedArray);
    console.log(arraysAreEqual(javaScriptSortedArray, sortedArray));
  }

  testSortingAlgorithms() {
    // create 100 arrays of random lengths
    for (let i = 0; i < 100; i++) {
        const array = [];
        const length = randomNumber(1, 1000);
        for (let i = 0; i < length; i++) {
            array.push(randomNumber(-1000, 1000));
        }
        const javaScriptSortedArray = array.slice().sort((a, b) => a - b);
        // const mergeSortedArray = getMergeSortAnimations(array.slice());
        const mergeSortedArray = sortingAlgorithms.bubbleSort(array.slice());
        console.log(arraysAreEqual(javaScriptSortedArray, mergeSortedArray));
    }
  }

  render() {
    const { array } = this.state;
    return (
      <div className="array-container">
        {array.map((value, index) => (
          <div
            className="array-bar"
            key={index}
            style={{ height: `${value}px` }}
          ></div>
        ))}
        <button onClick={() => this.resetArray()}>Generate New Array</button>

        <button onClick={() => this.mergeSort()}>Merge Sort</button>
        <button onClick={() => this.insertionSort()}>Insertion Sort</button>
        <button onClick={() => this.selectionSort()}>Selection Sort</button>
        <button onClick={() => this.quickSort()}>Quick Sort</button>
        {/* <button onClick={() => this.heapSort()}>Heap Sort</button> */}
        <button onClick={() => this.bubbleSort()}>Bubble Sort</button>
        <button onClick={() => this.testSortingAlgorithms()}>Test Sorting Algorithms</button>
      </div>
    );
  }
}

function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

function arraysAreEqual(arrayOne, arrayTwo) {
  if (arrayOne.length !== arrayTwo.length) {
    return false;
  }
  for (let i = 0; i < arrayOne.length; i++) {
    if (arrayOne[i] !== arrayTwo[i]) {
      return false;
    }
  }
  return true;
}
