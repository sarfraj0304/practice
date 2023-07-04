let arr = [1, 3, 2, 2, -4, -6, -2, 8];
let target = 4;
let sum = 0;
let res = [];

// use to find out all the pairs whose sum is eqaual to target

const findTargetSum = (target, sum, arr) => {
  arr.sort((a, b) => a - b);
  let n = arr.length;
  let l = 0;
  let r = n - 1;
  while (l < r) {
    sum = arr[l] + arr[r];
    if (sum === target) {
      res.push([arr[l], arr[r]]);
      l++;
      r--;
      temp = [];
    } else if (sum < target) {
      l++;
    } else {
      r--;
    }
  }
};

findTargetSum(target, sum, arr);

// use to flatten the array using in build function
const flattenArray = (arr) => {
  return arr.flat();
};
const flattendArray = flattenArray(res);

// use to find out combination of all that elements whose sum is equal to double the target
let newTarget = target * 2;

const findCombination = (arr, target) => {
  let pairs = [];
  function findPairs(curr, ind) {
    if (curr.length == 4) {
      if (curr.reduce((el, acc) => el + acc, 0) === target) {
        pairs.push([...curr]);
      }
      return;
    }
    for (let i = ind; i < arr.length; i++) {
      curr.push(arr[i]);
      findPairs(curr, i + 1);
      curr.pop();
    }
  }
  findPairs([], 0);
  return pairs;
};

const finalResult = findCombination(arr, newTarget);
console.log(res);
console.log(flattendArray);
console.log(finalResult);
