const codding = ["JS", "Python", "C++", "Java", "C#"];

codding.forEach((item, index) => {
  console.log(`Index is : ${index} and item is : ${item}`);
});
console.log("--------------------------------------");
function printme(item) {
  console.log(`Item is : ${item}`);
}

codding.forEach(printme);

codding.forEach((i, index) => {
  console.log(`Index is : ${index} and item is : ${i}`);
});
