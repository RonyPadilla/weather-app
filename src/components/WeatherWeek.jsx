import '../styles/weatherWeek.css'
import PropTypes from 'prop-types'
import { useState, useEffect } from 'react'
import { RiNavigationFill } from 'react-icons/ri'

export const WeatherWeek = ({ sendCountry }) => {
  const [weatherData, setWeatherData] = useState(null)
  const [degrees, setDegrees] = useState(true)
  const [error, setError] = useState(null)

  console.log('this is he WeatherWeek ' + sendCountry)
  const weatherWeek = async function fetchData () {
    try {
      const response = await fetch(`http://api.weatherapi.com/v1/forecast.json?key=c5d292e922b44584803144339231309&q=${sendCountry}&days=6&aqi=yes&alerts=no`)
      if (!response.ok) {
        throw new Error('Network response was not ok')
      }
      const data = await response.json()
      console.log(data)
      return data
    } catch (error) {
      console.error('Error:', error)
    }
  }

  useEffect(() => {

    weatherWeek()
      .then((responseData) => {
        setWeatherData(responseData);
      })
      .catch((error) => {
        setError(error);
      });
  }, [sendCountry])

  console.log(weatherData)

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

  const handleDegrees = () => {
    setDegrees(!degrees)
  }

  const handleImg = (condition) => {
    switch (condition) {
      case 'Sunny':
        return 'Clear.png'
      case 'Partly cloudy':
        return 'LightCloud.png'
      case 'Cloudy' || 'Overcast' || 'Mist' || 'Fog':
        return 'HeavyCloud.png'
      case 'Patchy rain possible' ||
        'Patchy light rain' ||
        'Light rain' ||
        'Moderate rain at times':
        return 'Shower.png'
      case 'Patchy snow possible' ||
        'Patchy light snow' ||
        'Light snow' ||
        'Patchy moderate snow' ||
        'Moderate snow' ||
        'Light snow showers' ||
        'Moderate or heavy snow showers':
        return 'Snow.png'
      case 'Patchy sleet possible' ||
        'Patchy freezing drizzle possible' ||
        'Heavy freezing drizzle' ||
        'Light freezing rain' ||
        'Moderate or heavy freezing rain' ||
        'Light sleet showers' ||
        'Light sleet' ||
        'Moderate or heavy sleet' ||
        'Moderate or heavy sleet showers' ||
        'Moderate or heavy showers of ice pellets' ||
        'Light showers of ice pellets':
        return 'Sleet.png'
      case 'Thundery outbreaks possible' ||
        'Torrential rain shower' ||
        'Patchy light rain with thunder' ||
        'Moderate or heavy rain with thunder' ||
        'Patchy light snow with thunder' ||
        'Moderate or heavy snow with thunder':
        return 'Thunderstorm.png'
      case 'Blowing snow' ||
        'Blizzard' ||
        'Freezing fog' ||
        'Patchy heavy snow' ||
        'Heavy snow' ||
        'Ice pellets':
        return 'Hail.png'
      case 'Patchy light drizzle' ||
        'Heavy rain at times' ||
        'Heavy rain' ||
        'Light drizzle' ||
        'Freezing drizzle' ||
        'Moderate or heavy rain shower':
        return 'HeavyRain.png'
      case 'Moderate rain' || 'Light rain shower':
        return 'LightRain.png'
      default:
        console.log('Opción no válida')
    }
    console.log(condition)
  }

  const handleDate = (epochValue) => {
    const date = new Date(epochValue)
    const aDayInMilliseconds = 24 * 60 * 60 * 1000

    const nextDate = new Date(date.getTime() + aDayInMilliseconds)

    const option = { weekday: 'short', day: 'numeric', month: 'short' }
    const formattedDate = nextDate.toLocaleDateString('en-US', option)

    return formattedDate
  }

  return (
    <>
      <section className='weather-week'>
        {weatherData ? (
          <div className='div-content-weather-week'>
            <div className='div-degrees'>
              <button className='dutton-degrees' onClick={handleDegrees}>
                °C
              </button>
              <button className='dutton-degrees' onClick={handleDegrees}>
                °F
              </button>
            </div>
            <div className='div-weather-week-info'>
              <div className='div-day-weather-info'>
                <p>Tomorrow</p>
                <img
                  className='img-weather-info'
                  src={`https://github.com/RonyPadilla/weather-app/blob/main/src/img/${handleImg(
                    weatherData.forecast.forecastday[1].day.condition.text
                  )}?raw=true`}
                  alt='img-weather'
                />
                <div className='div-day-degrees-info'>
                  <p>
                    {degrees
                      ? weatherData.forecast.forecastday[1].day.maxtemp_c
                      : weatherData.forecast.forecastday[1].day.maxtemp_f}
                    °{degrees ? 'C' : 'F'}
                  </p>
                  <p>
                    {degrees
                      ? weatherData.forecast.forecastday[1].day.mintemp_c
                      : weatherData.forecast.forecastday[1].day.mintemp_f}
                    °{degrees ? 'C' : 'F'}
                  </p>
                </div>
              </div>
              <div className='div-day-weather-info'>
                <p>{handleDate(weatherData.forecast.forecastday[2].date)}</p>
                <img
                  className='img-weather-info'
                  src={`https://github.com/RonyPadilla/weather-app/blob/main/src/img/${handleImg(
                    weatherData.forecast.forecastday[2].day.condition.text
                  )}?raw=true`}
                  alt='img-weather'
                />
                <div className='div-day-degrees-info'>
                  <p>
                    {degrees
                      ? weatherData.forecast.forecastday[2].day.maxtemp_c
                      : weatherData.forecast.forecastday[2].day.maxtemp_f}
                    °{degrees ? 'C' : 'F'}
                  </p>
                  <p>
                    {degrees
                      ? weatherData.forecast.forecastday[2].day.mintemp_c
                      : weatherData.forecast.forecastday[2].day.mintemp_f}
                    °{degrees ? 'C' : 'F'}
                  </p>
                </div>
              </div>
              <div className='div-day-weather-info'>
                <p>{handleDate(weatherData.forecast.forecastday[3].date)}</p>
                <img
                  className='img-weather-info'
                  src={`https://github.com/RonyPadilla/weather-app/blob/main/src/img/${handleImg(
                    weatherData.forecast.forecastday[3].day.condition.text
                  )}?raw=true`}
                  alt='img-weather'
                />
                <div className='div-day-degrees-info'>
                  <p>
                    {degrees
                      ? weatherData.forecast.forecastday[3].day.maxtemp_c
                      : weatherData.forecast.forecastday[3].day.maxtemp_f}
                    °{degrees ? 'C' : 'F'}
                  </p>
                  <p>
                    {degrees
                      ? weatherData.forecast.forecastday[3].day.mintemp_c
                      : weatherData.forecast.forecastday[3].day.mintemp_f}
                    °{degrees ? 'C' : 'F'}
                  </p>
                </div>
              </div>
              <div className='div-day-weather-info'>
                <p>{handleDate(weatherData.forecast.forecastday[4].date)}</p>
                <img
                  className='img-weather-info'
                  src={`https://github.com/RonyPadilla/weather-app/blob/main/src/img/${handleImg(
                    weatherData.forecast.forecastday[4].day.condition.text
                  )}?raw=true`}
                  alt='img-weather'
                />
                <div className='div-day-degrees-info'>
                  <p>
                    {degrees
                      ? weatherData.forecast.forecastday[4].day.maxtemp_c
                      : weatherData.forecast.forecastday[4].day.maxtemp_f}
                    °{degrees ? 'C' : 'F'}
                  </p>
                  <p>
                    {degrees
                      ? weatherData.forecast.forecastday[4].day.mintemp_c
                      : weatherData.forecast.forecastday[4].day.mintemp_f}
                    °{degrees ? 'C' : 'F'}
                  </p>
                </div>
              </div>
              <div className='div-day-weather-info'>
                <p>{handleDate(weatherData.forecast.forecastday[5].date)}</p>
                <img
                  className='img-weather-info'
                  src={`https://github.com/RonyPadilla/weather-app/blob/main/src/img/${handleImg(
                    weatherData.forecast.forecastday[5].day.condition.text
                  )}?raw=true`}
                  alt='img-weather'
                />
                <div className='div-day-degrees-info'>
                  <p>
                    {degrees
                      ? weatherData.forecast.forecastday[5].day.maxtemp_c
                      : weatherData.forecast.forecastday[5].day.maxtemp_f}
                    °{degrees ? 'C' : 'F'}
                  </p>
                  <p>
                    {degrees
                      ? weatherData.forecast.forecastday[5].day.mintemp_c
                      : weatherData.forecast.forecastday[5].day.mintemp_f}
                    °{degrees ? 'C' : 'F'}
                  </p>
                </div>
              </div>
            </div>
            <div className='div-Today-Hightlights'>
              <h2>Today’s Hightlights </h2>
              <div className='div-tag-day-weather-info'>
                <div className='div-tag-day-weather1'>
                  <p className='p-wind-status'>wind status</p>
                  <h2 className='h2-wind-status'>
                    <strong className='strong-wind-status'>
                      {weatherData.current.wind_mph}
                    </strong>
                    mph
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
                    <strong className='strong-humidity'>
                      {weatherData.current.humidity}
                    </strong>
                    %
                  </h2>
                  <div className='div-rod-humidity'>
                    <div className='div-percentage-humidity'>
                      <p>0</p>
                      <p>50</p>
                      <p>100</p>
                    </div>
                    <div className='div1-percentage-bar-humidity'>
                      <div
                        className='div2-percentage-bar-humidity'
                        style={{ '--w': `${weatherData.current.humidity}%` }}
                      />
                    </div>
                    <p className='p-percentage-humidity'>%</p>
                  </div>
                </div>
                <div className='div-tag-day-weather2'>
                  <p className='p-tag-day-weather2'>Visibility</p>
                  <h2 className='h2-tag-day-weather2'>
                    <strong className='strong-tag-day-weather2'>
                      {weatherData.current.vis_miles}
                    </strong>{' '}
                    miles
                  </h2>
                </div>
                <div className='div-tag-day-weather2'>
                  <p className='p-tag-day-weather2'>Air Pressure</p>
                  <h2 className='h2-tag-day-weather2'>
                    <strong className='strong-tag-day-weather2'>
                      {weatherData.current.air_quality.co}{' '}
                    </strong>
                    mb
                  </h2>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className='loading-data'></div>
        )}
      </section>
    </>
  )
}

WeatherWeek.propTypes = {
  sendCountry: PropTypes.string.isRequired, 
}
