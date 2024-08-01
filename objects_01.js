//singleton Object
// const tinderUser = new Object()
// console.log(tinderUser);


const tinderUser = {
    Id : "123abcd",
    name : "chetan patil",
    isLoggedIn : false 
}
//console.log(tinderUser);

const InstaUser ={
    email : "cp123@gmail.com",
    fullName :{
            UserDetail : {
                frist_Name : "Chetan" ,
                Middel_name : "Rajendra" ,
                Last_name : "Patil"

            }
    }
    
}
console.log(InstaUser.email);
console.log(InstaUser.fullName.UserDetail.Middel_name);

// merge the object
const obj1 ={1: "A" , 2:"B"}
const obj2 ={3: "C" , 4:"D"}

const obj4 = {obj1 , obj2} //merge in object into object
console.log(obj4);//{ obj1: { '1': 'A', '2': 'B' }, obj2: { '3': 'C', '4': 'D' } }


// assign() :-
// The target object to copy to.Copy the values of all of the enumerable own properties from one or more source objects to a target object.
//  Returns the target object.
const obj3=Object.assign({} , obj1,obj2)
  console.log(obj3); //{ '1': 'A', '2': 'B', '3': 'C', '4': 'D' } 

// sperd  ["this method are mostly use"]
const sperd_to_merge ={...obj1, ...obj2}
console.log(sperd_to_merge);

//Creating array with Object
const usee_array =[
    {
        id : 123 ,
        name :"chetan"
    }
]
usee_array[0].id
console.log(usee_array);

//access the object keys and values sapreat
console.log(tinderUser);
console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));

console.log(Object.entries(tinderUser));
console.log(tinderUser.hasOwnProperty('isLoggedIn'));




