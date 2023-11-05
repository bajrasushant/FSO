import { useEffect, useState } from "react";
import axios from "axios";
const WeatherDetails = ({country}) => {
    const api_key = import.meta.env.VITE_API_KEY
    // console.log(country)

    const lat = country.capitalLat;
    const lon = country.capitalLng;
    const [weatherCondition, setWeatherCondition] = useState(null)
    // console.log(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${api_key}`)
    useEffect(()=>{
    // axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${api_key}&units=metric`).then(res=>setWeatherCondition(res.data))}, [api_key, lat, lon])
    axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${country.name}&appid=${api_key}&units=metric`).then(res=>setWeatherCondition(res.data))}, [api_key, lat, lon])
  if(!weatherCondition){
    return null
  }
  return (
    <div>
    <h1>Weather Details</h1>
    <p>temperature {weatherCondition.main.temp} celcius</p>
    <img src={ `https://openweathermap.org/img/wn/${weatherCondition.weather[0].icon}.png`} />
    <p>wind {weatherCondition.wind.speed} m/s </p>
    </div>
  )
}

export default WeatherDetails

