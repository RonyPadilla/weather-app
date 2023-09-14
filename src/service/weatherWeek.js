export const weatherWeek = async function fetchData () {
    try {
      const response = await fetch('https://api.weatherapi.com/v1/forecast.json?key=c5d292e922b44584803144339231309&q=tegucigalpa&days=6&aqi=yes&alerts=no')
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
