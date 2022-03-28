
if(new Date().getDay()!= 6) {
    document.getElementById("days").style.display = "none";
}

const coronavirus = 'https://byui-cit230.github.io/weather/data/towndata.json';
fetch(coronavirus)
    .then(function (response) {
        return response.json();
    })