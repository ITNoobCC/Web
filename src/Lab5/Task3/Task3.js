function pulloutArray(array) {
  var resultArray = [];
  for (var i = 0; i < array.length; i++) {
    if (Array.isArray(array[i])) {
      for (var j = 0; j < array[i].length; j++) {
        if (
          Number.isNaN(array[i][j]) === false &&
          typeof array[i][j] !== 'string' &&
          array[i][j] !== null
        ) {
          resultArray.push(array[i][j]);
        }
      }
    } else if (
      Number.isNaN(array[i]) === false &&
      typeof array[i] !== 'string' &&
      array[i] !== null
    ) {
      resultArray.push(array[i]);
    }
  }
  return resultArray;
}

console.log(pulloutArray([1, 2, 3])); // return [1, 2, 3]
console.log(pulloutArray([])); // return []
console.log(pulloutArray([1, [2, 3, 4], 5])); // return [1, 2, 3, 4, 5]
console.log(pulloutArray([1, [2, 3, 4], 5, [1]])); // return [1, 2, 3, 4, 5, 1]
console.log(pulloutArray([1, [1], null, NaN, ['test']])); // return [1, 1]
