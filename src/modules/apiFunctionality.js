const API_KEY = '96f74019283a3f8cdc69b60026732ec2';
let previousCity;

async function firstDayForeCastRequest(){
    const locationResponse = await fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${previousCity}&appid=${API_KEY}&limit=1`)
    const locationData = await locationResponse.json();
    if(locationResponse.status !== 200){
        throw new Error('cannot fetch location data');
    }
    const foreCastResponse = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${locationData[0].lat}&lon=${locationData[0].lon}&units=imperial&appid=${API_KEY}`);
    const foreCastData = await foreCastResponse.json();
    if(foreCastResponse.status !== 200){
        throw new Error('cannot fetch forecast data');
    }
    return foreCastData;
}

function formatCity(input){
    let inputArray = input.split('');
    let locationInputRefactored = inputArray.filter(char => char !== ' ').join('')
    previousCity = locationInputRefactored;
    return locationInputRefactored;
}

function checkTime(input){
    if(input == '21:00:00' || input == '00:00:00'){
        return true;
    }
    return false;
}

function formatDate(date){
    let dateUnformatted = date;
    let dateUnformattedArray = dateUnformatted.split(' ');
    let timeValidation = checkTime(dateUnformattedArray[1]);
    return [timeValidation, dateUnformattedArray[0]];
}

function overRideFirstDayForecast(data){
    const keys = Object.keys(data);
    firstDayForeCastRequest().then(forecast =>{
        data[keys[0]] = forecast;
    });
}

function getFiveDayForecast(data){
    const list = data.list;
    let dayForecasts = {};
    list.forEach(item =>{
       let temp = formatDate(item.dt_txt);
       if(temp[0]){
            if(dayForecasts[temp[1]]){
                dayForecasts[temp[1]].push(item);
            }else{
                dayForecasts[temp[1]] = [];
                dayForecasts[temp[1]].push(item);
            }
       }
    })
    dayForecasts['totalData'] = data;
    overRideFirstDayForecast(dayForecasts);
    return dayForecasts;
}

async function foreCastRequest(input){
    const response = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${input}&appid=${API_KEY}&units=imperial`);
    if(response.status !== 200){
        throw new Error('cannot fetch forecast data');
    }
    const data = await response.json();
    const forecast = getFiveDayForecast(data);
    return forecast;
}




export {formatCity, foreCastRequest};