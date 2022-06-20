const forecastHeading = document.querySelector('.forecast-heading');
const cityHeading = document.querySelector('.city');
const dateHeading = document.querySelector('.date');
const timeHeading = document.querySelector('.time');
const temperatureHeading = document.querySelector('.temperature');
const changeTempHeading = document.querySelector('.change-temp');
const searchIcon = document.getElementById('search-icon');
const detailsFeelsLike = document.getElementById('feels-like');
const detailsHumidity = document.getElementById('humidity');
const detailsPrecipitation = document.getElementById('precipitation');
const detailsWindSpeed = document.getElementById('wind-speed');
let forecast;
let keys;


function domSetForecast(input){
    forecast = input;
    keys = Object.keys(forecast);
}

function populateHead(){
    
}

function populateBody(){

}


function populateContent(){
    populateHead();
    populateBody();
}

export {domSetForecast, populateContent};