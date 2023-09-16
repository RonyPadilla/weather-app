import '../styles/app.css'
import { Today } from '../components/Today.jsx'
import { WeatherWeek } from '../components/WeatherWeek.jsx'
import { AddLocation } from './AddLocation.jsx'
import { useState } from 'react'

function App () {
  const [search, setSearch] = useState(false)
  const [country, setCountry] = useState('Tegucigalpa')

  return (
    <>
      <section className='app'>
        {search ? <AddLocation sendCountry={setCountry} sendSearch={setSearch} /> : <Today sendCountry={country} sendSearch={setSearch} />}
        {search && window.innerWidth < 768 ? null : <WeatherWeek sendCountry={country} />}
      </section>
    </>
  )
}

export default App
