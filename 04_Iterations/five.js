const codding = ["JS", "Python", "C++", "Java", "C#"];

codding.forEach((item, index) => {
  // console.log(`Index is : ${index} and item is : ${item}`);
});
console.log("--------------------------------------");
function printme(item) {
  //console.log(`Item is : ${item}`);
}

codding.forEach(printme);

codding.forEach((i, index) => {
  //console.log(`Index is : ${index} and item is : ${i}`);
});

const myObject = [
  {
    languageName: "Python",
    languageType: "Scripting",
  },
  {
    languageName: "Java",
    languageType: "Object Oriented",
  },
  {
    languageName: "C++",
    languageType: "Object Oriented",
  },
  {
    languageName: "C#",
    languageType: "Object Oriented",
  },
];

// myObject.forEach((item) =>
//   console.log(
//     `Language Name is : ${item.languageName} and Language Type is : ${item.languageType}`,
//   ),
// );

myObject.forEach((element) =>
  console.log(`Language Name is : ${element.languageName}`),
);

console.log("--------------------------------------");

myObject.forEach((element) =>
  console.log(`Language Type is : ${element.languageType}`),
);

/* Notes
The foreach loop is used to iterate over arrays and perform a function on each element.
It takes a callback function as an argument, which can accept up to three parameters: the current element, the index of the current element, 
and the array being traversed,The forEach method does not return a value, and it cannot be broken out of like a traditional for loop. 
It is often used for side effects, such as logging or modifying elements in an array. */
