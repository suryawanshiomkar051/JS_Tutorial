
// <, >, <=, >=, ==, !=, ===, !===

//  If statement


// const score = 100;

// if(score < 200)
// {
//   const power = "flying";
//   console.log(`You have ${power} power!`);
// }
// console.log(`You have ${power} power!`);  // ReferenceError: power is not defined, because the variable power is defined inside the if block, and it is not accessible outside the block. This is called block scope. In JavaScript, variables defined with var are function scoped, while variables defined with let and const are block scoped.


const balance = 1000;

if(balance > 500) console.log("You have enough balance to make a purchase!");

// if there is only one statement in the if block, you can remove the curly braces and write

if(balance > 500)
{
  console.log("balance is greater than 500");
} else if(balance > 200)
{
  console.log("balance is greater than 200");
}else if(balance > 100)
{
  console.log("balance is greater than 100");
}else
{
  console.log("balance is less than 100");
}



const UserLoggedIn = true;
const haveCreditCard = true;
const LoggedInFromGoogle = false;
const LoggedInFromEmail = true;
const isGuestUser = true;

if(UserLoggedIn && haveCreditCard)
{
  console.log("Allow purchase");
}

if(LoggedInFromGoogle || LoggedInFromEmail || isGuestUser)
{
  console.log("You are logged in!");
}























