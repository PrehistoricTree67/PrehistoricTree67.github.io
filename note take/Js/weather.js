const weather = 'https://api.openweathermap.org/data/2.5/weather?id=5604473&appid=e393808b164a35213aa10cb637f93d76';
const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
fetch(weather)
    .then(function (response){
        return response.json();
    })
    .then(function (jsonObject){
        console.table(jsonObject);
        let list = jsonObject.list;
        console.log(list);
        let newList = [];
        for(let r=0; r<list.length; r++){
            if(list[r].dt_txt.includes("20:00:00")) {
                newList.push(list[r]);
            }
        }
    })