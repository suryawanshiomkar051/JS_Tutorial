
// 05 : 13

const user =  {
    username  : "Rushi",
    price : 120,

    welcomemessage : function ()
    {
        console.log(`${this.username }, Welcome to website`)
        console.log(this)
    }

}

user.welcomemessage()
user.username  = "Amar"
user.welcomemessage()


console.log("____________________________________________________")
console.log("Arrow Functions Code : ")
//          Arrow  Functions    


const addtwo = (num1, num2) => {
    return num1 + num2                          // Need to add curly braces and return key, its called explicitly return
}

const multiply = (n1, n2) => n1 * n2            // Dont need to add curly braces

const devide = (a1,a2) => (189/4)               // Dont need to add return keyword, its called implecit return

console.log(addtwo(23,54))
console.log(multiply(25,45))



// 05 : 58