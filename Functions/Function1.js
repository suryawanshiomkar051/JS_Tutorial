

function addtwonum(num1 , num2)
{
   // console.log(num1 + num2);
   return num1 + num2;
}

const result = addtwonum(10,20);

console.log("---------------------------------------------------------------");
console.log("Functins in JS Tutorial - 1");
console.log("The sum is : " + result);


function multipletwonum(num1 , num2)
{
   let result =  num1 * num2;
   return result;
}

const result2 = multipletwonum(10,20);
console.log("The Multiplication is : " + result2);

console.log("---------------------------------------------------------------");


function loginusermessage(userNAme,message)
{
    return `Hello ${userNAme} , ${message}`;
}

const loginMessage = loginusermessage("Omkar","Welcome to JS Course");
console.log(loginMessage);

console.log("---------------------------------------------------------------");

function loginusermessage2(userNAme,message)
{
    if(userNAme === undefined)
    {
        console.log("Please enter your name");
        return
    }
    return `Hello ${userNAme} , ${message}`;
}

const loginMessage2 = loginusermessage2();
console.log(loginMessage2);

console.log("---------------------------------------------------------------");

const loginmessage3 = loginusermessage2("Omkar","Welcome to JS Course");
console.log(loginmessage3);

console.log("---------------------------------------------------------------");

function printname(name = "Hitesh")
{
    if(name === undefined)
        {
            console.log("please enter user name")
            return
        }
        return `${name} just logged in`
}

console.log(printname("Omkar"))
console.log(printname())

console.log("---------------------------------------------------------------");


const user = {
    name :"Hitesh",
    price : 200
}

function returnPrice(anyobj){
    console.log(`UserNam = is ${anyobj.name} and Price is ${anyobj.price}`);
    return 
}

returnPrice(user)

returnPrice({
    name:"Rajkumer",
    price:5000
})
