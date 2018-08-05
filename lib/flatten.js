const flatten = (arr, result = []) => {
  // guard
  // return something unless array
  if (!Array.isArray(arr)) {
    result.push(arr)
    return arr;
  }
  arr.forEach(el => flatten(el, result));
  return result;
};

module.exports = {
  flatten,
};
