function check(data, expectedType) {
  if (!data && data !== null) {
    throw new Error('Ошибка');
  }
  
  if (!expectedType) {
    throw new Error('Ошибка');
  }

  if (
    typeof data === expectedType &&
    !(data === null && expectedType === 'object')
  ) {
    return true;
  } else if (data === null && expectedType === 'null') {
    return true;
  } else {
    throw new Error('Ошибка');
  }
}

try {
  console.log(check([], 'number'));
  console.log(check([], 'array'));
  console.log(check(null, 'null'));
  console.log(check('test', 'string'));
} catch (error) {
  console.log(error);
}
