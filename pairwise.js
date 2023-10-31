function pairwise(arr, arg) {
  if (arr.length === 0) {
    return 0
  }
  let indices = []
  for (let i = 0; i < arr.length; i++) {
    for (let j = i+1; j < arr.length; j++) {
      if (arr[i] + arr[j] === arg) {
        indices.push(arr.indexOf(arr[i]))
        arr[i] = 'a'
        indices.push(arr.indexOf(arr[j]))
        arr[j] = 'a'
      }
    }
  }
  return eval(indices.join('+'));
}

console.log(pairwise([0,0,0,0, 1, 1], 1));