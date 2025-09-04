
// Objects Literelas

const jsUser = {

    name : "Iron Man",
    age : 100,
    city : "Los Angels",
    email : "jarvise123@gmail.com",
    isLoggedIn : false,
    lastLogindays : ["Monday","Saturday"]
}

//console.log(jsUser);
// console.log(jsUser.name);

 jsUser.name = "Tony Stark"

// Object.freeze(jsUser)  // when you freeze the object, then you cannot modify it
// console.log(jsUser);

// jsUser.name = "Hulk"
console.log(jsUser)

jsUser.greeting = function (){console.log("Hello JS User ...")}

console.log(jsUser.greeting());

jsUser.greetings2 = function(){
console.log(`Hello JS user 2, ${this.name} `)
}

console.log(jsUser.greetings2());




