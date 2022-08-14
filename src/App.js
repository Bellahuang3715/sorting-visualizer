import React from "react";
import Select from "react-select";
import Topbar from "./components/Topbar";
import "./App.css";

import SortingVisualizer from "./SortingVisualizer/SortingVisualizer";
import "bootstrap/dist/css/bootstrap.min.css";

const sortingAlgorithms = [
  { label: "Merge Sort", value: 1 },
  { label: "Insertion Sort", value: 2 },
  { label: "Selection Sort", value: 3 },
  { label: "Quick Sort", value: 4 },
  { label: "Bubble Sort", value: 5 },
];

function App() {
  return (
    <div className="visualizer">
      <Topbar />
      <div className="wrapper">
        <div className="box left">
          <SortingVisualizer></SortingVisualizer>
        </div>
        {/* <div className="box right">
          <h4>Select a sorting algorithm:</h4>
          <div className="algorithm-selector">
            <div className="row">
              <div className="col-md-4"></div>
              <div className="col-md-4">
                <Select options={sortingAlgorithms} />
              </div>
              <div className="col-md-4"></div>
            </div>
          </div>
          <button>Generate New Array</button>
          <button>Start</button>
        </div> */}
      </div>
    </div>
  );
}

export default App;
