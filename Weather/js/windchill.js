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

const apiURL = "https://api.openweathermap.org/data/2.5/weather?q=Preston,5604473&appid=d8504fb6db3692f9637d82ee139508e9&units=imperial";
fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject); 
        document.getElementById('current-temp').textContent = jsObject.main.temp;
        const imagesrc = 'https://openweathermap.org/img/w/' + jsObject.weather[0].icon + '.png';  // note the concatenation
        const desc = jsObject.weather[0].description;  // note how we reference the weather array
        document.getElementById('imagesrc').textContent = imagesrc;  // informational specification only
        document.getElementById('icon').setAttribute('src', imagesrc);  // focus on the setAttribute() method
        document.getElementById('icon').setAttribute('alt', desc);
  });