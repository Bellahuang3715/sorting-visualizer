export default {
	c: 
`#include <stdio.h>

void insertionSort(int array[]) {
  int len = sizeof array / sizeof array[0];
  for (int i = 0; i < len; i ++) {
    int key = array[i];
    int j = i - 1;
    while (key < array[j] && j >= 0) {
      array[j+1] = array[j];
      j -= 1;
    }
    array[j+1] = key;
  }
}`,
	cpp: 
`#include <iostream>
using namespace std;

void insertionSort(int array[]) {
  int len = sizeof array / sizeof array[0];
  for (int i = 0; i < len; i ++) {
    int key = array[i];
    int j = i - 1;
    while (key < array[j] && j >= 0) {
      array[j+1] = array[j];
      j -= 1;
    }
    array[j+1] = key;
  }}`,
	java: 
`import java.util.Arrays;

class InsertionSort {
  void insertionSort(int array[]) {
    int len = array.length;
    for (int i = 0; i < len - 1; i++) {
      int key = array[i];
      int j = i - 1;
      while (j >= 0 && array[j] > key) {
        array[j+1] = array[j];
        j = j - 1;
      }
      array[j+1] = key;
    }
  }
}`,
	javascript: 
`function insertionSort(array) {
  let len = array.length
  for (let i = 0; i < len; i++) {
    let key = array[i];
    ley j = i - 1;
    while (j >= 0 && array[j] > key) {
      array[j+1] = array[j]
      j = j - 1;
    }
    array[j+1] = key;
  }
}
`,
	python: 
`def insertionSort(array):
  for i in range(1, len(array)):
    key = array[i]
    j = i - 1
    while j >= 0 and key < array[j]:
      array[j+1] = array[j]
      j = j - 1
    array[j + 1] = key
`,
};
