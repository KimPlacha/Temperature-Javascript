function convertTemperature() {
    let temperature = (document.getElementById('inputTemperature').value);
    let scale = document.getElementById('scale').value;
    let result;
    if (scale === 'celsius') {
        result = (temperature - 32) * (5/9);
    } else {
        result = (temperature * 9/5) + 32;
    }

    document.getElementById('result').innerHTML = result.toFixed(2) + 'º' + (scale === 'celsius' ? 'Celsius' : 'Fahrenheit');
}

function convertTemperatureRange(){
    let startValue = (document.getElementById("endValue").value);
    let endValue = (document.getElementById("endValue").value);
    let scale = document.getElementById("scale").value;
    let result = document.getElementById("result");

for (let temperature = startValue; temperature <= endValue; temperature += 5) { 
    let convertTemperatureRange
    if (scale === "celsius") {
        let convertTemperatureRange = (temperature * 9/5) + 32;

for (let temperature = startValue; temperature <= endValue; temperature + 5) {
    let convertTemperatureRange
    if (scale === "fahrenheit") {
        let convertTemperature = (temperature - 32) * 5/9;
} else {
    result = "Invalid scale. Please enter 'C' for Celsius or 'F' for Fahrenheit.";
}