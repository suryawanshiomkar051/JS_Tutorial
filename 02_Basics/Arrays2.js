

const marvel_heroes = ["Iron Man","Hulk","Captain America","Thor"]

const dc_heroes = ["Superman","Flash","BatMan"]

console.log(marvel_heroes)
console.log(dc_heroes)

// marvel_heroes.push(dc_heroes)
// console.log(marvel_heroes)
// console.log(marvel_heroes[4][2])

console.log(marvel_heroes.concat(dc_heroes))
const all_heroes = marvel_heroes.concat(dc_heroes)

console.log(all_heroes);

const all_new_heroes = [...marvel_heroes,...dc_heroes]
console.log(all_new_heroes);
console.log("-----------------------------------");

let name = "Amit"
let age = 27
let location = "Pune"
let salary = 25000

console.log(  name );
console.log(   age);
console.log(   location);
console.log(   salary);

console.log(   );
const combined_array = Array.of(name,age,location,salary)

console.log("Combined Array ------");

console.log(combined_array)

//          last stop of tutorial  -  03 : 45

