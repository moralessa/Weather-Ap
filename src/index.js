import './styles.scss'
import { formatCity, foreCastRequest } from './modules/apiFunctionality';
import {domSetForecast, populateContent} from './modules/domFunctionality';
const errorText = document.querySelector('.error');



async function makeCall(){
    let input = formatCity('Salt Lake City, Utah, US');
    let foreCast = await foreCastRequest(input);
    return foreCast
}

makeCall().then(data =>{
    domSetForecast(data)
}).catch(err =>{
    errorText.style.display = 'block';
})