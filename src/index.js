/* eslint linebreak-style: ["error", "windows"] */
import './styles.scss';
import { formatCity, foreCastRequest } from './modules/apiFunctionality';
import domSetForecast from './modules/domFunctionality';

const errorText = document.querySelector('.error');
const searchInput = document.getElementById('search-input');
const searchForm = document.getElementById('search-form');
const searchButton = document.getElementById('search-icon');

async function makeCall(input) {
  const inputFormatted = formatCity(input);
  const foreCast = await foreCastRequest(inputFormatted);
  return foreCast;
}

makeCall('Salt Lake City, Utah').then((data) => {
  domSetForecast(data);
});

searchForm.addEventListener('submit', (event) => {
  event.preventDefault();
  makeCall(searchInput.value).then((data) => {
    domSetForecast(data);
    errorText.style.display = 'none';
  }).catch(() => {
    errorText.style.display = 'block';
  });
});

searchButton.addEventListener('click', () => {
  makeCall(searchInput.value).then((data) => {
    domSetForecast(data);
    errorText.style.display = 'none';
  }).catch(() => {
    errorText.style.display = 'block';
  });
});
