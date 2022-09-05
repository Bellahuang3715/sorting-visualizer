import React from "react";
import Table from "react-bootstrap/Table";

interface TimeComplexity {
    bestCase: string
    avgCase: string
    worstCase: string
}

export interface ComplexityProps {
    title: string
    spaceComplexity: string
    timeComplexity: TimeComplexity
}

export interface TableProps {
  tableItems: ComplexityProps[];
}

const ComplexityTable: React.FC<TableProps> = ({ tableItems }: TableProps) => {
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>Algorithm</th>
          <th>Time Complexity (Best Case)</th>
          <th>Time Complexity (Average Case)</th>
          <th>Time Complexity (Worst Case)</th>
          <th>Space Complexity</th>
        </tr>
      </thead>
      <tbody>
          <tr>
            <td>{tableItems["title"]}</td>
            <td>{tableItems["timeComplexity"]["bestCase"]}</td>
            <td>{tableItems["timeComplexity"]["avgCase"]}</td>
            <td>{tableItems["timeComplexity"]["worstCase"]}</td>
            <td>{tableItems["spaceComplexity"]}</td>
          </tr>
      </tbody>
    </Table>
  );
};

export default ComplexityTable;
