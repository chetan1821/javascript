// array
const myArray =[0,1,2,3,4,5];
const myfrieds =["Nikhil","jagdish","ravi"];
//console.log(`this is my Array ${myArray}`);
//console.table(myfrieds);

//Array method
    myArray.push(6)//insert value [its insert values in last index]
    console.log(myArray); 
    myArray.pop() //remove insert value
    console.log(myArray);

    myArray.unshift(9) //insert value [its insert values in first index]
    console.log(myArray);

    myArray.shift();
    console.log(myArray);//remove insert value

    console.log(myArray.includes(5)); //find value is exist or not
    console.log(myArray.indexOf(3)); //its return the index value

    const newArray = myArray.join()
    console.log(`this is myArray ${myArray} and new Array is ${newArray}`);
    // this is myArray object and new Array is string
    

    //slice , splice

    console.log("A",myArray);
    const myn1 = myArray.slice(1,3);
    console.log(myn1);
    console.log("B",myArray);

    const mysplice = myArray.splice(1,3)
    console.log("mysplice",myArray);
    console.log(mysplice);
    


