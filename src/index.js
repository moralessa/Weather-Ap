import './styles.scss'
import { formatCity, foreCastRequest } from './modules/apiFunctionality';
import {domSetForecast, populateContent} from './modules/domFunctionality';



async function makeCall(){
    let input = formatCity('Roy, Utah, US');
    let foreCast = await foreCastRequest(input);
    return foreCast
}

makeCall().then(data =>{
    domSetForecast(data);
})