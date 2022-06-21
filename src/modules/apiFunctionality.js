/* eslint linebreak-style: ["error", "windows"] */
const API_KEY = '96f74019283a3f8cdc69b60026732ec2';

async function firstDayForeCastRequest(data) { // function to get forecast for current day
  const { totalData } = data;
  const foreCastResponse = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${totalData.city.coord.lat}&lon=${totalData.city.coord.lon}&units=imperial&precipitation.mode='rain'&appid=${API_KEY}`);
  const foreCastData = await foreCastResponse.json();
  if (foreCastResponse.status !== 200) {
    throw new Error('cannot fetch forecast data');
  }
  return foreCastData;
}

function formatCity(cityName) { // Function to format input
  let returnCity = '';
  if (cityName) {
    // remove whitespace for the api call
    returnCity = cityName
      .replace(/(\s+$|^\s+)/g, '') // remove whitespace from begining and end of string
      .replace(/(,\s+)/g, ',') // remove any white space that follows a comma
      .replace(/(\s+,)/g, ',') // remove any white space that preceeds a comma
      .replace(/\s+/g, '+'); // replace any remaining white space with +, so it works in api call
  }
  return returnCity;
}

function checkTime(input) { // Helper function to check the times for each list item
  if (input === '21:00:00' || input === '00:00:00') {
    return true;
  }
  return false;
}

function formatDate(date) { // Helper function to create key for forecasts of each day
  const dateUnformatted = date;
  const dateUnformattedArray = dateUnformatted.split(' ');
  const timeValidation = checkTime(dateUnformattedArray[1]);
  return [timeValidation, dateUnformattedArray[0]];
}

function setFirstDayForecast(data) {
  const keys = Object.keys(data);
  const newFirstKey = 'todaysForeCast';
  keys.push(newFirstKey);
  firstDayForeCastRequest(data).then((forecast) => {
    // eslint-disable-next-line no-param-reassign
    data[newFirstKey] = forecast;
  });
}

function getFiveDayForecast(data) {
  const { list } = data;
  const dayForecasts = {};
  list.forEach((item) => {
    const temp = formatDate(item.dt_txt);
    if (temp[0]) {
      if (dayForecasts[temp[1]]) {
        dayForecasts[temp[1]].push(item);
      } else {
        dayForecasts[temp[1]] = [];
        dayForecasts[temp[1]].push(item);
      }
    }
  });
  dayForecasts.totalData = data;
  setFirstDayForecast(dayForecasts);
  return dayForecasts;
}

async function foreCastRequest(input) {
  const response = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${input}&appid=${API_KEY}&units=imperial`);
  if (response.status !== 200) {
    throw new Error('cannot fetch forecast data');
  }
  const data = await response.json();
  const forecast = getFiveDayForecast(data);
  return forecast;
}

export { formatCity, foreCastRequest };
