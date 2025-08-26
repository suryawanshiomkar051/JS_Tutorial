
// Data Types in JS
// Reference Type datatypes

//  Arrays , Objects , Functions

// 1) Arrays

const heros = ["Iron Man","Hulk","Thor","Groot"];  // Array Literal Syntax

let MyObj = {
    name : "Omakr",                                // Object Literal Syntax
    age : 27
}

const MyFunc = function(){
    console.log("Welcom to function ")               // Function Expression Syntax
                        }

console.log(typeof MyObj)
console.log(typeof MyFunc) 



// -------------------------------------  Dates --------------------------------------------  02:55


let mydate = new Date()
console.log(mydate.toString())
console.log(mydate.toLocaleString)
console.log(mydate.toJSON())
console.log(mydate.toDateString())
console.log(typeof mydate)

let mycreatedDate =new Date(2025,6,14)

console.log(mycreatedDate)
console.log(mycreatedDate.toDateString())

let curentDate = Date.now()

console.log(curentDate)
