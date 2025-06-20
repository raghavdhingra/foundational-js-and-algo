// Flatten array: [1, [2, [3, 4], 5]] => [1, 2, 3, 4, 5]

const flattenArray = (arr, result = []) => {
  arr.forEach((itm) => {
    if (Array.isArray(itm)) {
      flattenArray(itm, result);
    } else {
      result.push(itm);
    }
  });
  return result;
};

console.log(
  flattenArray([
    1,
    [2, [3, 4], 5, [1, 2, 3, 4, [1, 0, [[[1, 2, 3]], [2]], 2, 3]]],
  ])
);
/*
[
  1, 2, 3, 4, 5, 1, 2,
  3, 4, 1, 0, 1, 2, 3,
  2, 2, 3
]
*/

console.log([1, [2], [[3]], [[[4]]]].flat(2));
// [ 1, 2, 3, [ 4 ] ]
