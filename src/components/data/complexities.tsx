import { ComplexityProps } from "../ComplexityTable";

export const ComplexityItems: ComplexityProps[] = [
  {
    title: "Bubble Sort",
    spaceComplexity: "O(1)",
    timeComplexity: {
        bestCase: "O(n)",
        avgCase: "O(n^2)",
        worstCase: "O(n^2)",
    },
  },
  {
    title: "Insertion Sort",
    spaceComplexity: "O(1)",
    timeComplexity: {
        bestCase: "O(n)",
        avgCase: "O(n^2)",
        worstCase: "O(n^2)",
    },
  },
  {
    title: "Merge Sort",
    spaceComplexity: "O(n)",
    timeComplexity: {
        bestCase: "O(nlogn)",
        avgCase: "O(nlogn)",
        worstCase: "O(nlogn)",
    },
  },
  {
    title: "Quick Sort",
    spaceComplexity: "O(n)",
    timeComplexity: {
        bestCase: "O(nlogn)",
        avgCase: "O(nlogn)",
        worstCase: "O(n^2)",
    },
  },
  {
    title: "Selection Sort",
    spaceComplexity: "O(1)",
    timeComplexity: {
        bestCase: "O(n^2)",
        avgCase: "O(n^2)",
        worstCase: "O(n^2)",
    },
  },
];
