const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const changedNums = myNums.map((num) => num * 2);

console.log(changedNums);

const changesNums2 = myNums.map((i) => {
  return i + 3;
});

console.log(changesNums2);

// Chaining in JS

const newNums = myNums.map((i) => i * 5).map((j) => j + 2);

console.log(newNums);

const newNums2 = myNums
  .map((i) => i * 5)
  .map((j) => j + 2)
  .filter((i) => i % 2 === 0);

console.log(newNums2);
