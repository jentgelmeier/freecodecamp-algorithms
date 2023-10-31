function binarySearch(searchList, value) {
  const arrayPath = []
  // console.log(arrayPath)
  let newList = searchList.slice()
  let middle = Math.floor((newList.length-1)/2);


  while (newList[middle] !== value) {
    arrayPath.push(newList[middle]);

    if (!newList.length) {
      return "Value Not Found"
    }

    if (newList[middle] > value) {
      newList = newList.slice(0, middle);
      middle = Math.floor((newList.length-1)/2);
      console.log('left', newList)
    } else {
      newList = newList.slice(middle+1);
      middle = Math.floor((newList.length-1)/2);
      console.log('right', newList)
    }
  }
  arrayPath.push(newList[middle]);
  return arrayPath;
}

const testArray = [0, 1, 2, 3, 4, 5, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 49, 70];

console.log(binarySearch(testArray, 7));