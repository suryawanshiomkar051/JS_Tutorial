// for of     The for off loop is used for iterating over iterable objects like arrays, strings, maps, sets, etc. It allows you to loop through the values of an iterable object directly.

const arr = [1, 2, 3, 4, 5];

for (const item of arr) {
  //console.log(item);
}

const greeting = "Hello Good Morning";

for (const element of greeting) {
  //console.log(`Element is : ${element}`);
}

// map

const map = new Map();

map.set("name", "John");
map.set("age", 30);
map.set("city", "New York");

//console.log(map);

const map2 = new Map();

map2.set("Ind", "Indiaaa");
map2.set("US", "United States");
map2.set("UK", "United Kingdom");
map2.set("Aus", "Australia");
map2.set("Can", "Canada");
map2.set("Ind", "India2"); // This will update the value of the key "Ind" to "India"
map2.set("UK", "United Kingdom");

console.log(map2);
console.log();
console.log();
console.log();

for (const key of map2) {
  console.log(key);
}

console.log();
console.log();
console.log();

for (const [key, value] of map2) {
  console.log(key + " : " + value);
}

const myObject = {
  name: "John",
  age: 30,
  city: "New York",
};

for (const key in myObject) {
  console.log(key + " : " + myObject[key]);
}

for (const key in myObject) {
  console.log(key);
}

for (const key in myObject) {
  console.log(myObject[key]);
}
