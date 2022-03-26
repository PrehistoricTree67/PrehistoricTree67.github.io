function inPutoutPut() {
    let o = parseInt(document.getElementById('high').innerText);
    let a = parseInt(document.getElementById('wind-speed').innerText);
    let w = parseInt(document.getElementById('currently').innerText);
    let u = parseInt(document.getElementById('humidity').innerText);
    let results = windChill(o, a, w, u);
    document.getElementById('wcf').innerHTML = results.toFixed(0) + "°" + "F";
}
inPutoutPut();
function windChill(tempFahren, mph){
    let t = tempFahren;
    let s = mph;
    let f = 35.74 + 0.6215 * t - 35.75 * s ** 0.16 + 0.4275 * t * s ** 0.16;
    return f;
}
