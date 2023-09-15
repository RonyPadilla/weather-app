import '../styles/addLocation.css'
import PropTypes from 'prop-types'
import { useState } from 'react'
import { v4 as uuidv4 } from 'uuid';
import { AiOutlineClose, AiOutlineSearch, AiOutlineRight } from 'react-icons/ai';

export const AddLocation = ({ sendSearch, sendCountry }) => {
  const [locationAdded, setLocationAdded] = useState([
    {
      id: uuidv4(),
      city: 'London'
    },{
      id: uuidv4(),
      city: 'Barcelona'
    },{
      id: uuidv4(),
      city: 'Long Beach'
    }
  ])
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleButtonClick = () => {
    const newLocation = {
      id: uuidv4(),
      city: inputValue.charAt(0).toUpperCase() + inputValue.slice(1) 
    };

    setLocationAdded([...locationAdded, newLocation]);  
    setInputValue('');
  
  };

  const handleCity = (value) => {
    sendCountry(value)
  }

  const handleClick = () => {
    sendSearch(false)
  }


  return (
    <>
      <section className='addlocation'>
        <div className='div-x-addlocation'>
          <AiOutlineClose
            className='icon-x-addlocation'
            onClick={handleClick}
          />
        </div>
        <div className='div-add-location'>
          <div className='div-seeker-add-location'>
            <div className='div-input-add-location'>
              <AiOutlineSearch className='icon-add-location' />
              <input
                className='input-add-location'
                type='text'
                placeholder='add location'
                value={inputValue}
                onChange={handleInputChange}
              />
            </div>

            <button onClick={handleButtonClick} className='button-add-location'>add</button>
          </div>
          <div className='div-added-cities'>
            {locationAdded.map((location) => (
              <div onClick={() => handleCity(location.city)} className='added-city' key={location.id}>
                <h3 className='h3-added-city'>{location.city}</h3>
                <div className='div-icon-added-city'>
                  <AiOutlineRight className='icon-added-city' />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

AddLocation.propTypes = {
  sendSearch: PropTypes.func.isRequired,
  sendCountry: PropTypes.func.isRequired
};
