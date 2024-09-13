// this Keyword
const user = {
    userName : "chetan",
    price : 333,

    WelComeMessage : function(){
        console.log(` wel-Come , ${this.userName} `);
        
    }
    
}
user.WelComeMessage()
user.userName ="Nikhil"
user.WelComeMessage()

// arrow Function
 const addTwo = (num1 , num2) => {
    return num1 * num2
 }
 console.log(addTwo(5,5));

 //implicit method 

 const addTwo1 = (num1 , num2) => num1+num2;
 console.log(addTwo(5,5));
 const addTwo2 = (num1 , num2) => (num1+num2);
 console.log(addTwo(5,5));

 //access Object 
 const arrowObject = () => ({name:"chetan",No :644})
 console.log(arrowObject());

 const arrowObject1 = (name , no) => ({name :name ,No :no})
 console.log(arrowObject('chetan' , 644));


 
 
