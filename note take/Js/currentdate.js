//day names array
const dayNames = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thrusday",
    "Friday",
    "Saturday"
];


//long month names array
const months = [
    "Januray",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
];

const todaysdate = new Date();
const dayName = dayNames[todaysdate.getDay()];
const monthName = months[todaysdate.getMonth()];
const year = todaysdate.getFullYear;
const currentdate = dayName + ", " + todaysdate.getDate() + " " + monthName + ", " + todaysdate.getFullYear();

document.getElementById("currentdate").textContent = currentdate;