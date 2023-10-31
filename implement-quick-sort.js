function quickSort(array) {
  // Only change code below this line
  if (array.length === 0) {
    return []
  } else {
    const pivot = array[0];
    const lesser = [];
    const greater = [];
    const equal = [];
    for (let i = 0; i < array.length; i++) {
      if (array[i] > pivot) {
        greater.push(array[i])
      } else if (array[i] < pivot) {
        lesser.push(array[i])
      } else {
        equal.push(array[i])
      }
    }
    console.log('greater', greater)
    console.log('lesser', lesser)
  return [...quickSort(lesser), ...equal, ...quickSort(greater)];
  }
  // Only change code above this line
}    

console.log(quickSort([1,4,2,8,345,123,43,32,5643,63,123,43,2,55,1,234,92]))