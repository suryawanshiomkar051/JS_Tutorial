

//     video start     04 : 20

const course = {
    courseName : "JS in Hindi",
    Price : 999,
    courseInstructor : "Hitesh Chaudhary"
}

console.log("This is normal objects value ---------");

console.log(course.courseInstructor);

// destructuring object

const {courseInstructor : instructor} = course

console.log("This is Destructured objects value ---------");

console.log(instructor);

