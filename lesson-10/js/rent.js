const cars = 'file:///Users/jonahli/Desktop/PrehistoricTree67.github.io/lesson-10/js/rental.json';
fetch(cars)
    .then(function (response){
        return response.json();
    })
    .then(function (jsonObject){
        console.table(jsonObject);

    })