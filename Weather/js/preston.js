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
            let h2 =document.createElement('h2');
            h2.textContent = towns[t].name;
            let yearFounded =document.createElement('p');
            yearFounded.textContent = towns[t].yearFound;
            image.setAttribute('src', towns[t].photo);

            card.appendChild(h2);
            card.appendChild(yearFounded);
            card.append(photo);
            document.querySelector('div.upperstclair').appendChild(card);
        }
    })