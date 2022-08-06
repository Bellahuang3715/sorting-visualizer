import React from "react";
import * as sortingAlgorithms from '../sortingAlgorithms/sortingAlgorithms'
import "./SortingVisualizer.css";

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
    for (let i = 0; i < 310; i++) {
      // generate random values b/w 5 and 1000
      array.push(randomNumber(5, 730));
    }
    this.setState({ array });
  }

  mergeSort() {
    const javaScriptSortedArray = this.state.array.slice().sort((a, b) => a - b);
    const sortedArray = sortingAlgorithms.mergeSort(this.state.array);
    console.log(arraysAreEqual(javaScriptSortedArray, sortedArray));
  }
  quickSort() {}
  heapSort() {}
  bubbleSort() {}


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
        <button onClick={() => this.quickSort()}>Quick Sort</button>
        <button onClick={() => this.heapSort()}>Heap Sort</button>
        <button onClick={() => this.bubbleSort()}>Bubble Sort</button>
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
