const form = document.querySelector('form');

form.addEventListener('submit', (event) => {
    event.preventDefault();
    let height = document.getElementById('height').value;
    let weight = document.getElementById('weight').value;
    let result = document.getElementById('results');

    if (height==''||height==null||isNaN(height)) {
        alert( `Please enter a valid number for Height ${height}` );
    } else if (weight==''||weight==null||isNaN(weight)) {
        alert( `Please enter a valid number for Weight ${weight}` );
    } else {
     const bmi = (weight/((height*height)/10000)).toFixed(2);  //BMI is in kg/m^2 
     result.innerHTML = `<h3>Your BMI is: <strong>${bmi}</strong></h3>`;
    }
})