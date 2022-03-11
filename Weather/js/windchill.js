function inPutoutPut {
    let a = parseInt(document.getElementById('currently').value);
    
}

function windchill(tempFahren, mph){
    let t = tempFahren;
    let s = mph;
    let f = 35.74 + 0.6215 * t - 35.75 * s ** 0.16 + 0.4275 * t * s ** 0.16;
    return f;
}