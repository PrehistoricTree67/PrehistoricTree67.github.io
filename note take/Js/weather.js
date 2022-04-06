const weather = 'https://api.openweathermap.org/data/2.5/weather?id=5604473&appid=e393808b164a35213aa10cb637f93d76';
fetch(weather)
    .then(function (response){
        return response.json();
    })
    .then(function (jsonObject){
        console.table(jsonObject);
    })