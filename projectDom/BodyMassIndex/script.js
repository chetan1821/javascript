// BMI Calculator
const form = document.querySelector('form');
form.addEventListener('submit', function (e){
    e.preventDefault();
    const height = document.querySelector('#height').value; // Get raw value
   const weight = document.querySelector('#weight').value; // Get raw value
   const results = document.querySelector('#results'); // Select results element

    
    // input validation 
    if (height === '' || height<0 || isNaN(height)) {
        results.innerHTML ="Invalid Height"
    }
    else if(weight === '' || weight<0 || isNaN(weight)){
        results.innerHTML ="Invalid Weight"
    }
    else{
        const heightInMeters = height / 100; // Convert height to meters
    const bmi = (weight / (heightInMeters * heightInMeters)).toFixed(2); // Calculate BMI
    // show Result
    results.innerHTML = `<span>BMI: ${bmi}</span>`;
    }
        
 });