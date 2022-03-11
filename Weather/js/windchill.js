function inPutoutPut() {
    let a = parseInt(document.getElementById('wcf').value);
    let y = parseInt(document.getElementById('high').value);
    let g = parseInt(document.getElementById('humidity').value);
    let results = windChill(a, y, g);
    document.getElementById('wind-speed').innerHTML = results + "•";
}

function windChill(tempFahren, mph){
    let t = tempFahren;
    let s = mph;
    let f = 35.74 + 0.6215 * t - 35.75 * s ** 0.16 + 0.4275 * t * s ** 0.16;
    return f;
}