

let a = 10
const b = 20
var c = 30

console.log(a)
console.log(b)
console.log(c)

console.log("-------------------------------------")

if(true)
{
    let a1 = 10
    const b1 = 20
    var c1 = 30
}


//console.log(a1)
//console.log(b1)
console.log(c1)

// o/packagePS C:\Learning\JS\JS_Tutorial-1\02_Basics> node Scope.js
// 10
// 20
// 30
// -------------------------------------
// 30
console.log("-------------------------------------")



let d = 10
if(true)
{
    let d = 22
    console.log(d)
}

console.log(d)

// Nested scope


function one()
{
    const use1 = "Hitesh"
    console.log(" Function one started")
    function two()
    {
        const website = "Youtube"
        console.log(" Function two started")
        console.log(use1)
        console.log(website)
        console.log(" Function two ended")
    }
    two()
    console.log(use1)
    console.log(website)
    console.log(" Function one ended")
}

one()