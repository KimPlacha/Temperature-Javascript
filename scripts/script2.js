function convertToF(celsius) {
    let fahrenheit = celsius * 9/5 + 32
    return fahrenheit;
    document.getElementById("temp").innerHTML=fahrenheit;
}
convertToF(30);