document.getElementById('inputValue').addEventListener('input', convertTemperature);
document.getElementById('inputUnit').addEventListener('change', convertTemperature);
document.getElementById('outputUnit').addEventListener('change', convertTemperature);

function convertTemperature() {
    const inputValue = parseFloat(document.getElementById('inputValue').value);
    const inputUnit = document.getElementById('inputUnit').value;
    const outputUnit = document.getElementById('outputUnit').value;

    if (isNaN(inputValue)) {
        document.getElementById('outputValue').value = '';
        document.getElementById('formula').textContent = '';
        return;
    }

    let outputValue;
    let formula;

    // Celsius to other units
    if (inputUnit === 'Celsius') {
        if (outputUnit === 'Fahrenheit') {
            outputValue = (inputValue * 9/5) + 32;
            formula = `(${inputValue}°C × 9/5) + 32 = ${outputValue.toFixed(2)}°F`;
        } else if (outputUnit === 'Kelvin') {
            outputValue = inputValue + 273.15;
            formula = `${inputValue}°C + 273.15 = ${outputValue.toFixed(2)}K`;
        } else {
            outputValue = inputValue;
            formula = `${inputValue}°C = ${outputValue.toFixed(2)}°C`;
        }
    }
         //Fahrenheit to other units
         else if (inputUnit === 'Fahrenheit') {
            if(outputUnit === 'Celsius') {
                outputValue = (inputValue - 32) * 5/9;
                formula = `(${inputValue}°F - 32) × 5/9 = ${outputValue.toFixed(2)}°C`;
            }else if (outputUnit === 'Kelvin') {
                outputValue = (inputValue-32) *5/9 + 273.15;
                formula = `(${inputValue}°F - 32) × 5/9 + 273.15 = ${outputValue.toFixed(2)}K`;
            }else {
                outputValue = inputValue;
                formula = `${inputValue}°F = ${outputValue.toFixed(2)}°F`;
            }
         }

         //kelvin to other units
         else if(inputUnit === 'Kelvin') {
            if(outputUnit === 'Celsius') {
                outputValue = inputValue-273.15;
                formula = `${inputValue}K - 273.15 =  ${outputValue.toFixed(2)}°C`;
            }else if(outputUnit === 'Fahrenheit'){
                outputValue = (inputValue - 273.15) * 9/5 + 32;
                formula = `(${inputValue}K - 273.15) × 9/5 + 32 = ${outputValue.toFixed(2)}°F`;
            }else {
                outputValue = inputValue;
                formula = `${inputValue}K = ${outputValue.toFixed(2)}K`;
            }
         }

document.getElementById('outputValue').value = outputValue.toFixed(2);
document.getElementById('formula').textContent = formula;



}