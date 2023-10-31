function permAlone(str) {
  if (str.length === 1) {
    return 1
  }
  const array = str.split('')
  if (array.filter((item,index) => array.indexOf(item) === index).length === 1) {
    return 0
  }

  const regex = /(.)\1+/
  const permutations = []

  function generate(array, length) {
    if (length === 1) {
      permutations.push(array.join(''));
    } else {
      for (let i = 0; i < length; i++) {
        generate(array, length - 1);
        if (length % 2 === 1) {
          let temp = array[0];
          array[0] = array[length - 1];
          array[length - 1] = temp;
        } else {
          let temp = array[i];
          array[i] = array[length - 1];
          array[length - 1] = temp;
        }
      }
    }
  }
  generate(array, array.length);
  const filtered = permutations.filter(a => !a.match(regex));
  return filtered.length;
}

console.log(permAlone('aaabb'));