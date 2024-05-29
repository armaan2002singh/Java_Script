// destructuring of objects.......
const course ={
    coursename:"js in hindi",
    price:"999",
    courseInstructor:"nitesh"
}

// course.courseInstructor

const {courseInstructor:  instructor} = course
//console.log(courseInstructor); // value will be nitesh from courseInstructor and it is used for syntax representation.
// values are targeted to {} also we can access the values by their names. Can also change the name "courseInstructor: instructor".
console.log(instructor);

//.....................API'S.........................

// {
//     //JSON keys will usually string 
//     "name":"armaan",
//     "course":"js in hindi",
//     "price":"free"
// }

// example - https://api.github.com/users/hiteshchoudhary   

// some time we get API'S in form of objects. 

// [
//     {},
//     {},
//     {}
// ]

// ...........................can user  tool to understand API structure.
