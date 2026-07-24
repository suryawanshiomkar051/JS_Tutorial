// const arr = ["Mumbai", "Pune", "Nagpur", "Nashik", "Aurangabad"];

// arr.forEach((element) => {
//   console.log(`City : ${element}`);
// });

// console.log("------------------------------------");

// const values = arr.forEach((index, item) => {
//   console.log(`Item value is ${index} and item is ${item}`);
// });

// console.log(values);

const num = [6, 4, 7, 43, 7, 4, 7, 5, 8, 9, 22, 6];

const filteredNums = num.filter((n) => n > 6);

console.log(filteredNums);

const filteredNums2 = num.forEach((n) => {
  if (n > 10) {
    console.log(n);
  }
});

const newNums = [];

num.forEach((n) => {
  if (n > 7) {
    newNums.push(n);
  }
});

console.log(`Newly created array is : ${newNums}`);

console.log("-------------------------------------------------");

const books = [
  { tittle: "Book one", gener: "Fiction", publish: 1891, edition: 2005 },
  { tittle: "Book two", gener: "Action", publish: 1897, edition: 2003 },
  { tittle: "Book three", gener: "Fiction", publish: 1831, edition: 2009 },
  { tittle: "Book four", gener: "Comedy", publish: 1898, edition: 2007 },
  { tittle: "Book five", gener: "Drama", publish: 1894, edition: 2005 },
  { tittle: "Book six", gener: "Fiction", publish: 1891, edition: 2002 },
];

const userBooks1 = books.filter(
  (bk) => bk.gener === "Fiction" && bk.publish > 1800,
);

console.log(userBooks1);

const userBooks2 = books.filter((bk) => {
  return bk.publish > 1891;
});

console.log(userBooks2);
