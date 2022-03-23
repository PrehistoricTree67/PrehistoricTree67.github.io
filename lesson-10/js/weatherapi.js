const apiURL = "https://api.openweathermap.org/...";
fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);
  });