
for (let i = 0; i<= 10; i++) {
  const element = i;
  
  if (element == 5) {
    //console.log("5 number is best");
    
  }
  //console.log(i);

}

for (let i = 0; i <= 5; i++) {
    //console.log(`outer loop ${i}`);
    for (let j = 0; j <= 5; j++) {
        //console.log(`inner loop ${j} outer loop ${i}`);
    }
}

// for loops by Arrays

    let myArray =["chetan patil","Nikhil koli","Mayur patil"]
    //console.log(myArray.length);
    //console.log(myArray[2]);
    for (let i = 0; i < myArray.length; i++) {
       // console.log(myArray[i]);
        
    }
// Break keyWord in for loop
for (let index = 0; index <=20; index++) {
    if (index == 5) {
        console.log(`5 is find ${index}`);
        break;//continue
    }
    
    console.log(index);
    
}
