const apiURL = "https://api.openweathermap.org/...";
fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject); {
        document.getElementById('current-temp').textContent = jsObject.main.temp;
    }
  });