export default {
	c: 
`#include <stdio.h>

void swap(int *a, int *b) {
  int temp = *a; 
  *a = *b;
  *b = temp;
}

void selectionSort(int array[]) {
  int len = sizeof array / sizeof array[0];
  for (int i = 0; i < len - 1; i++) {
    int min_index = i;
    for (int j = i + 1; j < len; j++) {
      if (array[j] < array[min_index]) {
        min_index = j;
      }
    }
    swap(&array[min_index], &array[i]);
  }
}`,
	cpp: 
`#include <iostream>
using namespace std;

void swap(int *a, int *b) {
  int temp = *a; 
  *a = *b;
  *b = temp;
}

void selectionSort(int array[]) {
  int len = sizeof array / sizeof array[0];
  for (int i = 0; i < len - 1; i++) {
    int min_index = i;
    for (int j = i + 1; j < len; j++) {
      if (array[j] < array[min_index]) {
        min_index = j;
      }
    }
    swap(&array[min_index], &array[i]);
  }
}`,
	java: 
`import java.util.Arrays;

class SelectionSort {
  void selectionSort(int array[]) {
    int len = array.length;
    for (int i = 0; i < len - 1; i++) {
      int min_index = i;
      for (int j = i + 1; j < len; j++) {
        if (array[j] < array[min_index]) {
          min_index = j;
        }
      }
      int temp = array[i];
      array[i] = array[min_index];
      array[min_index] = temp;
    }
  }
}`,
	javascript: 
`function selectionSort(array) {
  let len = array.length;
  for (let i = 0; i < len - 1; i++) {
    let min_index = i;
    for (let j = i + 1; j < len; j++) {
      if (array[j] < array[min_index]) {
        min_index = j;
      }
      let temp = array[min_index];
      array[min_index] = array[i];
      array[i] = temp;
    }
  }
}
`,
	python: 
`def selectionSort(array):
  for i in range(len(array)):
    min_index = i
    for j in range(i + 1, len(array)):
      if array[j] < array[min_index]:
        min_index = j
    (array[i], array[min_index]) = (array[min_index], array[i])
`,
};
