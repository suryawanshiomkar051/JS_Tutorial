

//    Object Singleton                              Time     04:)4

const tinderUser = {}

tinderUser.Id = "123A"
tinderUser.Name  = "Michle Jackson"
tinderUser.IsLoggedIn = true

console.log(tinderUser);


const normalUser = {
    emmail : "some@gmail.com",
    fullName : {
            username : "user@123",
            FirstName : "Somnath",
            LastName : "Ranavre"
            },
    mobile : "9876545678"
}

console.log(normalUser);

console.log("---------------------------");

console.log(normalUser.fullName.FirstName);
console.log(normalUser.fullName.mobile);

//        Combine two arrays


const obj1 = {
    1:"one",
    2:"Two",
    3:"Three",
    3:"Foure"
}

const obj2 = {
    1:"A",
    2:"B",
    3:"C",
    4:"D"
}

// const obj3 = Object.assign(obj1,obj2)

// console.log(obj3);                      // last stop    04 : 14


const obj3 = {...obj1, ...obj2}
console.log(obj3);

console.log("---------------------------------------------------------------");


const users = [
    {
        Id : 101,
        Name : "User-1"
    },
     {
        Id : 102,
        Name : "User-2"
    },
     {
        Id : 103,
        Name : "User-3"
    },
     {
        Id : 104,
        Name : "User-4"
    },
     {
        Id : 105,
        Name : "User-5"
    }
]

console.log(users);
console.log(users[1].Name);
console.log(users[2].Name);


console.log("---------------------------------------------------------------");

console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));

console.log(tinderUser.hasOwnProperty('IsLoggedIn'));









