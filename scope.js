
function one(){
    const userName = "chetan"
    function two(){
        const terminal ="visual studio"
        //console.log(userName);
        
    }
    //console.log(terminal); we can not access the this variable out of two function
    
    two()
}
one()

if (true) {
    const username = "Nikhil"
    if (username === "Nikhil") {
        const terminal1 = " Android"
        console.log(username + terminal1);
    }
}

function oneFun(){
    console.log("this Function one" );
}

oneFun()
twoFun()
const twoFun = function() {
    console.log("this Function two" );
}
