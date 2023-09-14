import '../styles/searchLocation.css'
import PropTypes from 'prop-types'
import { useState } from 'react'
import { AiOutlineClose, AiOutlineSearch, AiOutlineRight } from 'react-icons/ai'

export const SearchLocation = ({ sendSearch }) => {
  const [locationSearched, setLocationSearched] = useState([
    {
      id: 1,
      city: 'London'
    }
  ])

  const [weatherWeek, setWeatherWeek] = useState([
    {
      id: 1,
      city: 'London'
    }
  ])

  const handleClick = () => {
    sendSearch(false)
  }

  return (
    <>
      <section className='searchlocation'>
        <div className='div-x-searchlocation'>
          <AiOutlineClose
            className='icon-x-searchlocation'
            onClick={handleClick}
          />
        </div>
        <div className='div-search-location'>
          <div className='div-seeker-search-location'>
            <div className='div-input-search-location'>
              <AiOutlineSearch className='icon-search-location' />
              <input
                className='input-search-location'
                type='text'
                placeholder='search location'
              />
            </div>

            <button className='button-search-location'>Search</button>
          </div>
          <div className='div-searched-cities'>
            {locationSearched.map((location) => (
              <div className='searched-city' key={location.id}>
                <h3 className='h3-searched-city'>{location.city}</h3>
                <div className='div-icon-searched-city'>
                  <AiOutlineRight className='icon-searched-city' />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

SearchLocation.propTypes = {
  sendSearch: PropTypes.func.isRequired
}
