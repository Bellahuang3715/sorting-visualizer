import React from "react";
import Table from "react-bootstrap/Table";
import { ComplexityProps } from "./ComplexityTable";

export interface ComplexityComparisonProps {
  tableItems: ComplexityProps[];
}

const ComplexityComparisonTable: React.FC<ComplexityComparisonProps> = ({ tableItems }: ComplexityComparisonProps) => {
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>Algorithm</th>
          <th>Time Complexity (Best)</th>
          <th>Time Complexity (Average)</th>
          <th>Time Complexity (Worst)</th>
          <th>Space Complexity (Worst)</th>
        </tr>
      </thead>
      <tbody>
        {tableItems.map((item) => (
          <tr>
            <td>{item.title}</td>
            <td>{item.timeComplexity["bestCase"]}</td>
            <td>{item.timeComplexity["avgCase"]}</td>
            <td>{item.timeComplexity["worstCase"]}</td>
            <td>{item.spaceComplexity}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default ComplexityComparisonTable;
