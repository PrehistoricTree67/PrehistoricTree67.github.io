
if(new Date().getDay()!= 6) {
    document.getElementById("days").style.display = "none";
}

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
    document.getElementById('climate6').innerHTML=newList[4].main.temp;
    document.getElementById('climate7').innerHTML=newList[4].main.temp;
});

const mytownship = 'https://byui-cit230.github.io/weather/data/towndata.json';
fetch(mytownship)
    .then(function (respond) {
        return respond.json();
    })
    .then(function (jsonObject) {
        console.table(jsonObject); const towns = jsonObject['towns'].filter((towns) => {
            if(towns.name==="Soda Springs") {
                return towns;
            }
        });
        for(let y=0; y<towns.length; y++) {
            let card = document.createElement('section');
            card.classList.add('ur');
            let upevent = document.createElement('p');
            upevent.textContent = towns[y].events;
            card.appendChild(upevent);
            document.querySelector('div.funny').appendChild(card);
        }
    })