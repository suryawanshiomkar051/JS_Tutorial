

const user = {
  username : "John Cena",
  price : 999,

  welcomemessage : function (){
                  //console.log(`Welcome back, ${this.username}!`);
                  console.log(this);
  }
}


user.welcomemessage()

user.username = "The Rock"
user.welcomemessage()


//     Arrow Functions



const chai = () => {
  username : "John Cena";
  price : 999;

  console.log(`Welcome back, ${this.username}! `);
}


chai()


const add = (num1,num2) => {
  return num1 + num2;
}

console.log(add(5, 3));

const add2 = (num1,num2) => ( num1 + num2 );          // Implicit return  , if you have only one line of code in the function, you can remove the return statement and the curly braces. and f you have only one parameter, you can remove the parentheses as well. and you can also use the arrow function to return an object, but you need to wrap the object in parentheses.

console.log(add2(5, 11));



//      Immediately Invoked Function Expressions (IIFE)

(function(){
  console.log("IIFE");
})();

// Named IIFE
(function namedIIFE(){
  console.log("Named IIFE");
})();

(function add(num1,num2){
  console.log(num1 + num2);
})(5, 9);


  ( () => { console.log("IIFE with arrow function") })();

  ( (name) => { console.log(`IIFE with arrow function and parameter ${name}`) })("John Cena");