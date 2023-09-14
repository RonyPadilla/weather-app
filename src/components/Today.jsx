import '../styles/today.css'
import PropTypes from 'prop-types'
import { useState, useEffect } from 'react'
import { FaLocationDot } from 'react-icons/fa6'
import { BiCurrentLocation } from 'react-icons/bi'
import { weatherWeek } from '../service/weatherWeek.js'

export const Today = ({ sendSearch }) => {
  const [weatherData, setWeatherData] = useState(null)
  const [error, setError] = useState(null)

  useEffect(() => {
    weatherWeek()
      .then((responseData) => {
        setWeatherData(responseData)
      })
      .catch((error) => {
        setError(error)
      })
  }, [])

  if (error) {
    return <div>Error: {error.message}</div>
  }

  const handleClick = () => {
    sendSearch(true)
  }

  return (
    <>
      <section className='today'>
        {weatherData ? (
          <div>
            <div className='div-today-search'>
              <button className='button-search-places' onClick={handleClick}>
                Search for places
              </button>
              <button className='button-location'>
                <BiCurrentLocation style={{color: 'white',   width: '2vw', height: '4vh'}} />
              </button>
            </div>

            <div className='div-today-weather'>
              <img
                className='img-cloud-background'
                src='https://github.com/RonyPadilla/weather-app/blob/main/src/img/Cloud-background.png?raw=true'
                alt='Cloud-background'
              />
              <img
                className='img-weather'
                src='https://github.com/RonyPadilla/weather-app/blob/main/src/img/Shower.png?raw=true'
                alt='img-weather'
              />
            </div>

            <div className='div-info-weather'>
              <h1 className='h1-info-weather'>
                <strong className='strong-info-weather'>
                  {weatherData.current.feelslike_c}
                </strong>
                °C
              </h1>
              <h2 className='h2-info-weather'>
                {weatherData.current.condition.text}
              </h2>
              <div className='div-date-location-info-weather'>
                <p className='p1-date-location-info-weather'>
                  Today • Fri, 5 Jun
                </p>
                <p className='p2-date-location-info-weather'>
                  <FaLocationDot className='icon-date-location-info' />
                  Helsinki
                </p>
              </div>
            </div>
          </div>
        ) : (
          <p>Loading weather data...</p>
        )}
      </section>
    </>
  )
}

Today.propTypes = {
  sendSearch: PropTypes.func.isRequired,
}
