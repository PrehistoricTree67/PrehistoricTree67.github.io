const hambutton = document.querySelector(".contain");
const mainnav = document.querySelector(".pop")

hambutton.addEventListener('click', () =>
{mainnav.classList.toggle('responsive')},
false);

window.onresize = () => {if
(window.innerWidth > 760)
mainnav.classList.remove('responsive')};

if(new Date().getDay()!= 6) {
    document.getElementById("days").style.display = "none";
}


const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';
fetch(requestURL)
    .then(function (response){
       return response.json();
    })
    .then(function (jsonObject){
        console.table(jsonObject); const towns = jsonObject['towns'];
        for(let t=0; t<towns.length; t++) {
            let card = document.createElement('section');
            card.classList.add('zootopia');
            let h2 =document.createElement('h2');
            h2.textContent = towns[t].name;
            let averageRainfall = document.createElement('p');
            averageRainfall.textContent = "Average Rainfall:" + ' ' + towns[t].averageRainfall;
            let motto = document.createElement('p');
            motto.textContent = towns[t].motto;
            let events = document.createElement('p');
            events.textContent = "Events:" + ' ' + towns[t].events;
            let yearFounded = document.createElement('p');
            yearFounded.textContent = "Year Founded:" + ' ' + towns[t].yearFounded;
            let currentPopulation = document.createElement('p');
            currentPopulation = "Current Population:" + ' ' + towns[t].currentPopulation;
            let photo = document.createElement('img');
            photo.setAttribute('src', `../images/${towns[t].photo}`);
            photo.classList.add('idaho');
            photo.setAttribute('alt', towns[t].name);
            card.appendChild(h2);
            card.appendChild(motto);
            card.appendChild(yearFounded);
            card.append(averageRainfall);
            card.append(currentPopulation);
            card.append(events);
            card.append(photo);
            document.querySelector('div.upperstclair').appendChild(card);
        }
    })


const weathapi = 'https://api.openweathermap.org/data/2.5/forecast?id=5604473&appid=e393808b164a35213aa10cb637f93d76&units=imperial';
  const days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
  fetch(weathapi)
  .then(function (response) {
    return response.json();
})
.then(function (jsonObject) {
    console.table(jsonObject); 
    let list = jsonObject.list;
    console.log(list);
    let newList = [];
    for(let i = 0; i < list.length; i++){
        if(list[i].dt_txt.includes("18:00:00")){
            newList.push(list[i]);
        }
    }
    console.log(newList);
    const day1 = new Date(newList[0].dt_txt);
    document.getElementById('day1').innerHTML = days[day1.getDay()];
    const day2 = new Date(newList[1].dt_txt);
    document.getElementById('day2').innerHTML = days[day2.getDay()];
    const day3 = new Date(newList[2].dt_txt);
    document.getElementById('day3').innerHTML = days[day3.getDay()];
    const day4 = new Date(newList[3].dt_txt);
    document.getElementById('day4').innerHTML = days[day4.getDay()];
    const day5 = new Date(newList[4].dt_txt);
    document.getElementById('day5').innerHTML = days[day5.getDay()];
    document.getElementById('climate1').innerHTML=newList[0].main.temp;
    document.getElementById('climate2').innerHTML=newList[1].main.temp;
    document.getElementById('climate3').innerHTML=newList[2].main.temp;
    document.getElementById('climate4').innerHTML=newList[3].main.temp;
    document.getElementById('climate5').innerHTML=newList[4].main.temp;
});

const hyiat = 'https://byui-cit230.github.io/weather/data/towndata.json';
fetch(hyiat)
    .then(function (responder) {
        return responder.json();
    })
    .then(function (jsonObject) {
        console.table(jsonObject); const towns = jsonObject['towns'].filter((towns) => {
            if(towns.name==="Fish Haven") {
                return towns;
            }
        });
        for(let u=0; u<towns[0].events.length; u++) {
            let swapanese = document.createElement('section');
            swapanese.classList.add('elion');
            let wevents = document.createElement('p');
            wevents.textContent = towns[0].events[u];
            swapanese.appendChild(wevents);
            document.querySelector('div.eventuals').appendChild(swapanese);
        }
    })