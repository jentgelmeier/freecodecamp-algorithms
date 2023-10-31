function insertionSort(array) {
  // Only change code below this line
  for (let i = 1; i < array.length; i++) {
   let current = array[i]
   console.log(current)
    for (var j = i - 1; j >= 0; j--) {
      if (array[j] > array[j+1]) {
        [array[j + 1], array[j]] = [array[j], array[j+1]];
      }
    }
  }
  return array;
  // Only change code above this line
}

console.log(insertionSort([5, 4, 33, 2, 8]))
