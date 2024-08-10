const Course = {
    Course_name :"BCA",
    Course_price :17500 ,
    course_duration : "3 year"
}
// console.log(Course.course_duration);
// Using Destructure

const {Course_name : C_name } =Course
//console.log(Course_name);
console.log(C_name);