import "../styles/today.css";
import PropTypes from 'prop-types';
import { FaLocationDot } from "react-icons/fa6";
import { BiCurrentLocation } from "react-icons/bi";

export const Today = ({ sendSearch }) => {

  const handleClick = () => {
    sendSearch(true); 
  };

  return (
    <>
      <section className="today">
        <div className="div-today-search">
          <button className="button-search-places" onClick={handleClick}>Seach for places</button>
          <button className="button-location"><BiCurrentLocation className="icon-locatio"/></button>
        </div>

        <div className="div-today-weather">
          <img className="img-cloud-background" src="https://github.com/RonyPadilla/weather-app/blob/main/src/img/Cloud-background.png?raw=true" alt="Cloud-background" />
          <img className="img-weather" src="https://github.com/RonyPadilla/weather-app/blob/main/src/img/Shower.png?raw=true" alt="img-weather" />
        </div>

        <div className="div-info-weather">
          <h1 className="h1-info-weather"><strong className="strong-info-weather">15</strong>°C</h1>
          <h2 className="h2-info-weather">Shower</h2>
          <div className="div-date-location-info-weather">
            <p className="p1-date-location-info-weather">Today • Fri, 5 Jun</p>
            <p className="p2-date-location-info-weather"><FaLocationDot className="icon-date-location-info"/>Helsinki</p>
          </div>
        </div>
      </section>
    </>
  );
};

Today.propTypes = {
  sendSearch: PropTypes.func.isRequired, 
};
