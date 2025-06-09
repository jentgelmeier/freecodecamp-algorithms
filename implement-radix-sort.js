function getLongestNumber(array) {
  let longest = 0;
  for (let i = 0; i < array.length; i++) {
    const currentLength = array[i].toString().length;
    longest = currentLength > longest ? currentLength : longest;
  }
  return longest;
}

function radixSort(array) {
  const longest = getLongestNumber(array);

  const buckets = new Array(10).fill().map(() => []);

  for (let i = 0; i <= longest; i++) {
    while (array.length) {
      let numString = array[0].toString();
      let digit = numString[numString.length - 1 - i] || "0";
      buckets[digit].push(array.shift());
    }

    for (let j = 0; j < buckets.length; j++) {
      while (buckets[j].length) {
        array.push(buckets[j].shift())
      }
    }
  }
  
  return array;
}

const nums = [
      20,
      51,
      3,
      801,
      415,
      62,
      4,
      17,
      19,
      11,
      1,
      100,
      1244,
      104,
      944,
      854,
      34,
      3000,
      3001,
      1200,
      633
    ];

console.log(radixSort(nums));
