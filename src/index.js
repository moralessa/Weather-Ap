/* eslint linebreak-style: ["error", "windows"] */
import './styles.scss';
import { formatCity, foreCastRequest } from './modules/apiFunctionality';
import domSetForecast from './modules/domFunctionality';
import icon from './images/search-icon.png';
import favicon from './images/favicon.ico';

const errorText = document.querySelector('.error');
const searchInput = document.getElementById('search-input');
const searchForm = document.getElementById('search-form');
const searchIcon = new Image();
searchIcon.src = icon;
searchIcon.setAttribute('id', 'search-icon');
searchForm.append(searchIcon);
const faviconIcon = document.createElement('link');
faviconIcon.setAttribute('type', 'image/x-icon');
faviconIcon.setAttribute('rel', 'icon');
faviconIcon.setAttribute('href', favicon);
document.head.append(faviconIcon);

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

searchIcon.addEventListener('click', () => {
  makeCall(searchInput.value).then((data) => {
    domSetForecast(data);
    errorText.style.display = 'none';
  }).catch(() => {
    errorText.style.display = 'block';
  });
});
