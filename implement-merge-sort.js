function mergeSort(array) {
  // Only change code below this line
  if (array.length === 1) {
    return array
  }
  let middle = array.length / 2
  let firstHalf = array.slice(0, middle)
  let secondHalf = array.slice(middle)
  let left = mergeSort(firstHalf)
  let right = mergeSort(secondHalf)
  //console.log('left', left)

  return merge(left,right);
  // Only change code above this line
}

function merge(array1, array2) {
  let merged = [];
  //console.log('1', array1)
  //console.log('2', array2)
  while (array1.length && array2.length) {
    if (array1[0] < array2[0]) {
      merged.push(array1.shift())
    } else if (array1[0] > array2[0]) {
      merged.push(array2.shift())
    } else {
      merged.push(array1.shift(), array2.shift())
    }
  } 
  console.log('merged', merged)
  return [...merged, ...array1, ...array2]
}

console.log(mergeSort([1,4,2,8,345,123,43,32,5643,63,123,43,2,55,1,234,92]))