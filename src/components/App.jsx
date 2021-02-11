import { useState, useEffect } from 'react'
import axios from 'axios'

const App = () => {

  const [weather, setWeather] = useState({
    name: '-',
    main: '-',
    description: '-',
    temp: '-',
    humidity: '-'
  })
   
  useEffect(() => {
    axios.get(`https://api.openweathermap.org/data/2.5/weather?id=${process.env.REACT_APP_WEATHER_CITYID}&units=metric&appid=${process.env.REACT_APP_WEATHER_APIKEY}`)
    .then(res => {
      console.log(res.data)
      setWeather({
        name: res.data.name,
        main: res.data.weather.main,
        description: res.data.weather[0].description,
        temp: res.data.main.temp,
        humidity: res.data.main.humidity,
      })
    })
  },[]) 

  return (
    <div className="container mx-auto px-4">
      <div className="flex justify-center">
        <div className="my-10 w-60 p-4 rounded-xl shadow-xl bg-gradient-to-tr from-blue-700 to-blue-400">
          <p className="text-2xl bg-clip-text text-transparent text-white font-bold">Weather</p>
          <p className="text-xl bg-clip-text text-transparent text-white"> {weather.name} </p>
          <div className="mt-2 rounded-md text-white p-2 bg-gradient-to-tr from-gray-700 to-gray-400 w-100 contianer">
            <p className="text-xl font-bold">Today weather</p>
            <p className="text-lg uppercase"> {weather.description} </p>
            <p className="text-3xl"> {weather.temp}°C </p>
            <p className="text-sm"> humidity: {weather.humidity}% </p>
          </div>
        </div>
      </div>
    </div> 
  );
}

export default App;
