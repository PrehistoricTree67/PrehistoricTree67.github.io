const forecastApiURL = "https://api.openweathermap.org/data/2.5/forecast?id=5604473&units=imperial&appid=a22fa08f55a59807a4b7b1e71c3230eb";

fetch(forecastApiURL)
  .then(function (response) {
	return response.json();
  })
  .then(function (jsonObject) {
	// console.table(jsonObject); // temporary checking for valid response and data parsing
	const forescastList = jsonObject["list"].filter((forecast) => {
		if(forecast.dt_txt.includes(" 06:00:00")) {
			return forecast;
		}
	});

	const weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

	for (let y = 0; y < forescastList.length; y++) {
		// Create elements
		let container = document.createElement("div");

        let dayOfTheWeek = document.createElement("span");
        const eachDay = new Date(forescastList[y].dt_txt);

        let image = document.createElement("img");
		let imagesrc = "https://openweathermap.org/img/w/" + forescastList[y].weather[0].icon + ".png";
		let desc = forescastList[i].weather[0].description;

        let span = document.createElement("span");
        let spanTemperature = parseFloat(forescastList[y].main.temp);
		let roundTemp = Math.round(spanTemperature);
        // Set atributes
		container.setAttribute("class", "flex-col");

        dayOfTheWeek.setAttribute("class", "col-head");

        image.setAttribute("class", "image-day");
		image.setAttribute("src", imagesrc);
		image.setAttribute("alt", desc);
        span.setAttribute("class", "climate");
		
		//Append elementes
		dayOfTheWeek.textContent = weekday[eachDay.getDay()];
		container.appendChild(dayOfTheWeek)
		container.appendChild(image);
		span.textContent = roundTemp + "°F";
		container.appendChild(span);

		// Add elements to container 
		document.querySelector("div.flex").appendChild(container);
	}
  });