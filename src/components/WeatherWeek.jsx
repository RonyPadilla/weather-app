import '../styles/weatherWeek.css'
import { useState, useEffect } from 'react'
import { RiNavigationFill } from 'react-icons/ri'
import { weatherWeek } from '../service/weatherWeek.js'

export const WeatherWeek = () => {
  const [weatherData, setWeatherData] = useState(null)
  const [degrees, setDegrees] = useState(true)
  const [error, setError] = useState(null);

  useEffect(() => {
    weatherWeek()
      .then(responseData => {
        setWeatherData(responseData);
      })
      .catch(error => {
        setError(error);
      });
  }, []);

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  const handleDegrees = () => {
    setDegrees(!degrees)
  }


  return (
    <>
    {weatherData ?  <section className='weather-week'>
        <div className='div-content-weather-week'>
          <div className='div-degrees'>
            <button className='dutton-degrees' onClick={handleDegrees}>°C</button>
            <button className='dutton-degrees' onClick={handleDegrees}>°F</button>
          </div>
          <div className='div-weather-week-info'>
            <div className='div-day-weather-info'>
              <p>Tomorrow</p>
              <img
                className='img-weather-info'
                src='https://github.com/RonyPadilla/weather-app/blob/main/src/img/Sleet.png?raw=true'
                alt='img-weather'
              />
              <div className='div-day-degrees-info'>
                <p>{degrees ? weatherData.forecast.forecastday[1].day.maxtemp_c : weatherData.forecast.forecastday[1].day.maxtemp_f}°{degrees ? 'C' : 'F'}</p>
                <p>{degrees ? weatherData.forecast.forecastday[1].day.mintemp_c : weatherData.forecast.forecastday[1].day.mintemp_f}°{degrees ? 'C' : 'F'}</p>
              </div>
            </div>
            <div className='div-day-weather-info'>
              <p>{weatherData.forecast.forecastday[2].date}</p>
              <img
                className='img-weather-info'
                src='https://github.com/RonyPadilla/weather-app/blob/main/src/img/Sleet.png?raw=true'
                alt='img-weather'
              />
              <div className='div-day-degrees-info'>
                 <p>{degrees ? weatherData.forecast.forecastday[2].day.maxtemp_c : weatherData.forecast.forecastday[2].day.maxtemp_f}°{degrees ? 'C' : 'F'}</p>
              <p>{degrees ? weatherData.forecast.forecastday[2].day.mintemp_c : weatherData.forecast.forecastday[2].day.mintemp_f}°{degrees ? 'C' : 'F'}</p>
              </div>
            </div>
            <div className='div-day-weather-info'>
              <p>{weatherData.forecast.forecastday[3].date}</p>
              <img
                className='img-weather-info'
                src='https://github.com/RonyPadilla/weather-app/blob/main/src/img/Sleet.png?raw=true'
                alt='img-weather'
              />
              <div className='div-day-degrees-info'>
              <p>{degrees ? weatherData.forecast.forecastday[3].day.maxtemp_c : weatherData.forecast.forecastday[3].day.maxtemp_f}°{degrees ? 'C' : 'F'}</p>
              <p>{degrees ? weatherData.forecast.forecastday[3].day.mintemp_c : weatherData.forecast.forecastday[3].day.mintemp_f}°{degrees ? 'C' : 'F'}</p>
              </div>
            </div>
            <div className='div-day-weather-info'>
              <p>{weatherData.forecast.forecastday[4].date}</p>
              <img
                className='img-weather-info'
                src='https://github.com/RonyPadilla/weather-app/blob/main/src/img/Sleet.png?raw=true'
                alt='img-weather'
              />
              <div className='div-day-degrees-info'>
              <p>{degrees ? weatherData.forecast.forecastday[4].day.maxtemp_c : weatherData.forecast.forecastday[4].day.maxtemp_f}°{degrees ? 'C' : 'F'}</p>
              <p>{degrees ? weatherData.forecast.forecastday[4].day.mintemp_c : weatherData.forecast.forecastday[4].day.mintemp_f}°{degrees ? 'C' : 'F'}</p>
              </div>
            </div>
            <div className='div-day-weather-info'>
              <p>{weatherData.forecast.forecastday[5].date}</p>
              <img
                className='img-weather-info'
                src='https://github.com/RonyPadilla/weather-app/blob/main/src/img/Sleet.png?raw=true'
                alt='img-weather'
              />
              <div className='div-day-degrees-info'>
              <p>{degrees ? weatherData.forecast.forecastday[5].day.maxtemp_c : weatherData.forecast.forecastday[5].day.maxtemp_f}°{degrees ? 'C' : 'F'}</p>
              <p>{degrees ? weatherData.forecast.forecastday[5].day.mintemp_c : weatherData.forecast.forecastday[5].day.mintemp_f}°{degrees ? 'C' : 'F'}</p>
              </div>
            </div>
          </div>
          <div className='div-Today-Hightlights'>
            <h2>Today’s Hightlights </h2>
            <div className='div-tag-day-weather-info'>
              <div className='div-tag-day-weather1'>
                <p className='p-wind-status'>wind status</p>
                <h2 className='h2-wind-status'>
                  <strong className='strong-wind-status'>{weatherData.current.wind_mph}</strong>mph
                </h2>
                <div className='div-wind-status'>
                  <div className='div-icon-wind-status'>
                    <RiNavigationFill className='icon-wind-status' />
                  </div>
                  <p className='p-wsw-wind-status'>WSW</p>
                </div>
              </div>
              <div className='div-tag-day-weather1'>
                <p className='p-humidity'>Humidity</p>
                <h2 className='h2-humidity'>
                  <strong className='strong-humidity'>{weatherData.current.humidity}</strong>%
                </h2>
                <div className='div-rod-humidity'>
                  <div className='div-percentage-humidity'>
                    <p>0</p>
                    <p>50</p>
                    <p>100</p>
                  </div>
                  <div className='div1-percentage-bar-humidity'>
                  <div className='div2-percentage-bar-humidity' style={{ '--w': `${weatherData.current.humidity}%` }} />

                  </div>
                  <p className='p-percentage-humidity'>%</p>
                </div>
              </div>
              <div className='div-tag-day-weather2'>
                <p className='p-tag-day-weather2'>Visibility</p>
                <h2 className='h2-tag-day-weather2'>
                  <strong className='strong-tag-day-weather2'>{weatherData.current.vis_miles}</strong> miles
                </h2>
              </div>
              <div className='div-tag-day-weather2'>
                <p className='p-tag-day-weather2'>Air Pressure</p>
                <h2 className='h2-tag-day-weather2'>
                  <strong className='strong-tag-day-weather2'>{weatherData.current.air_quality.co} </strong>mb
                </h2>
              </div>
            </div>
          </div>
        </div>
      </section> : <p >Loading weather data...</p>}
    </>
  )
}
