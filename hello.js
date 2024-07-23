console.log("Hello chetan...!")
let a=1;
function outer (){
    let b=2;
    function inner(){
        let c =3;
        console.log(a,b,c);
    }
    inner();
}
outer();