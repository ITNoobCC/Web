function pulloutArray(array) {
  var resultArray = [];
  for (var i = 0; i < array.length; i++) {
    if (Array.isArray(array[i])) {
      for (var j = 0; j < array[i].length; j++) {
        if (
          array[i][j] !== null &&
          Number.isNaN(array[i][j]) === false &&
          typeof array[i][j] !== 'string'
        ) {
          resultArray.push(array[i][j]);
        }
      }
    } else if (
      array[i] !== null &&
      Number.isNaN(array[i]) === false &&
      typeof array[i] !== 'string'
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
