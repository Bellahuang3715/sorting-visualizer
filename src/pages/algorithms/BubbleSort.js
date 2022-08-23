import React from 'react'
import './BubbleSort.css'
import { CodeBlock, CopyBlock, dracula } from "react-code-blocks";
import Tabs from '../../components/Tabs';

const BubbleSort = () => {
  const text = 'text goes here';
  return (
    <div className='bubble-sort-container'>

      <div className="container-block">
        <h3>Bubble Sort</h3>
        <hr />
        <p><i>Description</i></p>
        <p>The <b>bubble sort</b> algorithms is a comparison-based sorting algorithm that compares each pair of adjacent elements, and swapping them if they are not in the correct order.</p>
        <p><i>Analogies</i></p>
        <ul>
          <li>
          Think of bubbles in sparkling water. The larger bubbles rises to the top faster, while the smaller ones rise slower. This is similar to bubble sort in the way that at each iteration in the algorithm, the largest element in the set gets 'pushed' to the back.
          </li>
          <li>
          You are standing in a line 
          </li>
        </ul>
      </div>

      <div className="container-block">
        <h5 className="container-title">Let's take a look at an example:</h5>
        <div className='bubble-sort-example'>
          <p>Consider the following array: </p>
        </div>
      </div>

      <div className="container-block">
        <h5 className="container-title">Pseudocode</h5>
        <CopyBlock
          language='python'
          text="print('GeeksforGeeks')"
          showLineNumbers='true'
          wrapLines
          theme={dracula}
          codeBlock
        />
      </div>
      
      <div className="container-block">
        <h5 className="container-title">Implementation in Different Languages</h5>
        <Tabs />
      </div>

      <div className="container-block">
        <h5 className="container-title">Complexity</h5>
      </div>

      <div className="container-block">
        <h5 className="container-title">Additional Notes</h5>
      </div>
      
    </div>
  )
}

export default BubbleSort
