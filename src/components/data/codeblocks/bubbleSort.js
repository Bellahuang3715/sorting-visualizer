export default {
	c: 
`#include <stdio.h>

void bubbleSort(int array[]) {
  int len = sizeof array / sizeof array[0];
  for (int i = 0; i < len - 1; i++) {
    for (int j = 0; j < (len - i - 1); j++) {
      if (array[j] > array[j+1]) {
        int temp = array[j];
        array[j] = array[j+1];
        array[j+1] = temp;
      }
    }
  }
}`,
	cpp: 
`#include <iostream>
using namespace std;

void bubbleSort(int array[]) {
  int len = sizeof array / sizeof array[0];
  for (int i = 0; i < len - 1; i++) {
    for (int j = 0; j < (len - i - 1); j++) {
      if (array[j] > array[j+1]) {
        int temp = array[j];
        array[j] = array[j+1];
        array[j+1] = temp;
      }
    }
  }
}`,
	java: 
`import java.util.Arrays;

class BubbleSort {
  void bubbleSort(int array[]) {
    int len = array.length;
    for (int i = 0; i < len - 1; i++) {
      for (int j = 0; j < (len - i - 1); j++) {
        if (array[j] > array[j+1]) {
          int temp = array[j];
          array[j] = array[j+1];
          array[j+1] = temp;
        }
      }
    }
  }
}`,
	javascript: 
`function bubbleSort(array) {
  let len = array.length;
  for (let i = 0; i < len; i++) {
    for (let j = 0; j < (len - i - 1); j++) {
      if (array[j] > array[j+1]) {
        let temp = array[j];
        array[j] = array[j+1];
        array[j+1] = temp;
      }
    }
  }
}
`,
	python: 
`def bubbleSort(array):
  for i in range(len(array)):
    for j in range(0, len(array) - i - 1):
      if array[j] > array[j+1]:
        temp = array[j]
        array[j] = array[j+1]
        array[j+1] = temp
`,
};
