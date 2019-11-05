function check(data, expectedType) {
  try {
    if (expectedType === 'array' && Array(data).isArray()) {
      console.log(true);
    } else if (expectedType === 'number' && Array(data).isArray()) {
      console.log(true);
    } else if (expectedType === 'null' && !data) {
      console.log(true);
    } else if (expectedType === 'string' && typeof data == 'string') {
      console.log(true);
    }
  } catch {
    console.log(false);
  }
}

check([], 'number');
check([], 'array');
check(null, 'null');
check('test', 'string');
