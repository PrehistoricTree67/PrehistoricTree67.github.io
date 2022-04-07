const cars = 'file:///Users/jonahli/Desktop/PrehistoricTree67.github.io/lesson-10/js/rental.json';

var company;
var type;
var maxAmount;
var price;
var quantity;
var reservation;
var walkIn;
var refund;


fetch(cars)
    .then(function (response){
        return response.json();
    })
    .then(function (jsonObject){
        console.table(jsonObject);
        company= jsonObject["name"];
        type= jsonObject["type"];
        maxAmount = jsonObject["maxAmount"];
        price = jsonObject["price"];
        quantity = jsonObject["quantity"];
        reservation = jsonObject["reservation"];
        walkIn = jsonObject["walk-in"];
        refund = jsonObject["refund"];
    })