import React from 'react'
import "./BubbleSort.css";
import { ComplexityItems } from '../../components/data/complexities';
import ComplexityComparisonTable from '../../components/ComplexityComparisonTable';

const Comparison = () => {
  return (
    <div className="bubble-sort-container">
      <div className="container-block">
        <h3>Time &amp; Space Complexities Comparison Chart</h3>
        <hr />
        <p>
          <i>Description</i>
        </p>
        <p>
          The <b>bubble sort</b> algorithms is a comparison-based sorting
          algorithm that compares each pair of adjacent elements, and swapping
          them if they are not in the correct order.
        </p>
      </div>

      <div>
        <ComplexityComparisonTable tableItems={ComplexityItems} />
      </div>
    </div>
  );
}

export default Comparison