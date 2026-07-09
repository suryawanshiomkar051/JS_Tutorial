

function sayMyName(){
  console.log("My name is John Doe");
  console.log("I am a software developer");
  console.log("I love coding in JavaScript");
}

sayMyName();

console.log("------------------------------------------------------------------------")

function addNumbers(a, b){
  return a + b;
}

let result = addNumbers(5, 10);
console.log(result);

console.log("------------------------------------------------------------------------")

function userLoginMsg(username){
  //console.log(`Welcome back, ${username}!`);
  return `${username} has successfully logged in.`  ;
}

let loginMessage = userLoginMsg("John Ibrahim");
console.log(loginMessage);

console.log("------------------------------------------------------------------------")


function calculateCartPrice(price, quantity){

  return price * quantity;
}

let totalPrice = calculateCartPrice(20, 5);
console.log(`The total price of the cart is: $${totalPrice}`);

console.log("------------------------------------------------------------------------")


function Calculate(...numbers){
  return numbers;

}

let total = Calculate(10, 20, 30, 40);
console.log(`The total sum is: ${total}`);

console.log("------------------------------------------------------------------------")


function handleObject(Obj){
  console.log(`username is ${Obj.username} and password is ${Obj.password}`);
}

handleObject({username: "John", password: "12345"});

console.log("------------------------------------------------------------------------")


function returnfromarray(getarray)
{
  return getarray.slice(0, 3);
}


let myArray = [1, 2, 3, 4, 5];
let firstThree = returnfromarray(myArray);
console.log(firstThree);

