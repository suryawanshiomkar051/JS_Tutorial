// For

/* for loops, we can use the for loop to iterate over an array or an object. The for loop has three parts: the initialization, the condition, and the increment. The initialization is executed before the loop starts. The condition is evaluated before each iteration. If the condition is true, the loop continues. If the condition is false, the loop stops. The increment is executed after each iteration.  */


// for (let i = 0; i <= 10; i++) {

//           const element = i * 2;

//           console.log(`The index is ${i}`);
//           console.log(`The element is ${element}`);
//           if(i === 5)
//           {
//             console.log("Breaking the loop");
//           }
// }



// for (let i = 0; i <= 10; i++) {
//   for (let j = 0; j <= 10; j++) {
//     console.log(`inner loop value of J : ${j}, and value of I : ${i}`);
    
    
//   }
  
// }
for (let i = 0; i <= 10; i++) {
 if(i === 5)
  {
    console.log("Breaking the loop");
    continue
  }
 console.log(`The index is ${i}`);
}







