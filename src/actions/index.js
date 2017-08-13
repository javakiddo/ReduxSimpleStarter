
import axios from 'axios';
const API_KEY="a82d872c6ac02a9b041ec8ca35d8fd65";
const ROOT_URL=`http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;



export const FETCH_WEATHER='FETCH_WEATHER';

export function fetchWeather(city){


  const URL=`${ROOT_URL}&q=${city},us`;
  const request= axios.get(URL);
  console.log('Requst',request);

  return{
    type:FETCH_WEATHER,
    payload:request

  };

}
