import React from "react";
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

  render() {
    const { array } = this.state;
    return (
      <div className="array-container">
        {array.map((value, index) => (
          <div 
            className="array-bar" 
            key={index}
            style={{height: `${value}px`}}>
          </div>
        ))}
        <button onClick={() => this.resetArray()}>Generate New Array</button>
      </div>
    );
  }
}

function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}
