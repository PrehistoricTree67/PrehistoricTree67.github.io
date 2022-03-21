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