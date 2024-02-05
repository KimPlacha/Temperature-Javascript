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

function convertTemperatureRange ();
    let temperature = (document.getElementById('startValue').value);
    let temperature = (document.getElementById('endValue').value);
    let scale = document.getElementById('scale').value;

    let result;
    if (scale === 'celsius') {
        result = (temperature - 32) * (5/9);
    } else {
        result = (temperature * 9/5) + 32;
    }
    
    document.getElementById('result').innerHTML = result.toFixed(2) + 'º' + (scale === 'celsius' ? 'Celsius' : 'Fahrenheit');