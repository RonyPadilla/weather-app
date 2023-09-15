import '../styles/today.css'
import PropTypes from 'prop-types'
import { useState, useEffect } from 'react'
import { FaLocationDot } from 'react-icons/fa6'
import { BiCurrentLocation } from 'react-icons/bi'

export const Today = ({ sendSearch, sendCountry }) => {
  const [weatherData, setWeatherData] = useState(null)
  const [error, setError] = useState(null)

  console.log(sendCountry)

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
        setWeatherData(responseData)
      })
      .catch((error) => {
        setError(error)
      })
  }, [])

  if (error) {
    return <div>Error: {error.message}</div>
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

  const handleClick = () => {
    sendSearch(true)
  }

  const handleDate = (epochValue) => {
    const date = new Date(epochValue * 1000)

    const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
    const months = [
      'Jan',
      'Feb',
      'Mar',
      'Apr',
      'May',
      'Jun',
      'Jul',
      'Aug',
      'Sep',
      'Oct',
      'Nov',
      'Dec',
    ]

    const dayOfWeekAbbr = daysOfWeek[date.getDay()]
    const dayOfMonth = date.getDate()
    const monthAbbr = months[date.getMonth()]

    const formattedDate = `${dayOfWeekAbbr}, ${dayOfMonth} ${monthAbbr}`
    return formattedDate
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
                <BiCurrentLocation
                  style={{ color: 'white', width: '2vw', height: '4vh' }}
                />
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
                src={`https://github.com/RonyPadilla/weather-app/blob/main/src/img/${handleImg(
                  weatherData.current.condition.text
                )}?raw=true`}
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
                  Today • {handleDate(weatherData.current.last_updated_epoch)}
                </p>
                <p className='p2-date-location-info-weather'>
                  <FaLocationDot className='icon-date-location-info' />
                  {weatherData.location.name}
                </p>
              </div>
            </div>
          </div>
        ) : (
          <div className='loading-today-data'></div>
        )}
      </section>
    </>
  )
}

Today.propTypes = {
  sendSearch: PropTypes.func.isRequired,
  sendCountry: PropTypes.string.isRequired
}
