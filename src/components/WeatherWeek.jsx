import "../styles/weatherWeek.css";
import { RiNavigationFill } from "react-icons/ri";

export const WeatherWeek = () => {
  return (
    <>
      <section className="weather-week">
        <div className="div-content-weather-week">
          <div className="div-degrees">
            <button className="dutton-degrees">°C</button>
            <button className="dutton-degrees">°F</button>
          </div>
          <div className="div-weather-week-info">
            <div className="div-day-weather-info">
              <p>Tomorrow</p>
              <img
                className="img-weather-info"
                src="https://github.com/RonyPadilla/weather-app/blob/main/src/img/Sleet.png?raw=true"
                alt="img-weather"
              />
              <div className="div-day-degrees-info">
                <p>16°C</p>
                <p>11°C</p>
              </div>
            </div>
            <div className="div-day-weather-info">
              <p>Tomorrow</p>
              <img
                className="img-weather-info"
                src="https://github.com/RonyPadilla/weather-app/blob/main/src/img/Sleet.png?raw=true"
                alt="img-weather"
              />
              <div className="div-day-degrees-info">
                <p>16°C</p>
                <p>11°C</p>
              </div>
            </div>
            <div className="div-day-weather-info">
              <p>Tomorrow</p>
              <img
                className="img-weather-info"
                src="https://github.com/RonyPadilla/weather-app/blob/main/src/img/Sleet.png?raw=true"
                alt="img-weather"
              />
              <div className="div-day-degrees-info">
                <p>16°C</p>
                <p>11°C</p>
              </div>
            </div>
            <div className="div-day-weather-info">
              <p>Tomorrow</p>
              <img
                className="img-weather-info"
                src="https://github.com/RonyPadilla/weather-app/blob/main/src/img/Sleet.png?raw=true"
                alt="img-weather"
              />
              <div className="div-day-degrees-info">
                <p>16°C</p>
                <p>11°C</p>
              </div>
            </div>
            <div className="div-day-weather-info">
              <p>Tomorrow</p>
              <img
                className="img-weather-info"
                src="https://github.com/RonyPadilla/weather-app/blob/main/src/img/Sleet.png?raw=true"
                alt="img-weather"
              />
              <div className="div-day-degrees-info">
                <p>16°C</p>
                <p>11°C</p>
              </div>
            </div>
          </div>
          <div className="div-Today-Hightlights">
            <h2>Today’s Hightlights </h2>
            <div className="div-tag-day-weather-info">
              <div className="div-tag-day-weather1">
                <p className="p-wind-status">wind status</p>
                <h2 className="h2-wind-status">
                  <strong className="strong-wind-status">7</strong>mph
                </h2>
                <div className="div-wind-status">
                  <div className="div-icon-wind-status">
                    <RiNavigationFill className="icon-wind-status"/>
                  </div>
                  <p className="p-wsw-wind-status">WSW</p>
                </div>
              </div>
              <div className="div-tag-day-weather1">
                <p className="p-humidity">Humidity</p>
                <h2 className="h2-humidity">
                  <strong className="strong-humidity">84</strong>%
                </h2>
                <div className="div-rod-humidity">
                  <div className="div-percentage-humidity">
                    <p>0</p>
                    <p>50</p>
                    <p>100</p>
                  </div>
                  <div className="div1-percentage-bar-humidity">
                    <div className="div2-percentage-bar-humidity" style={{ '--w': '84%' }}></div>
                  </div>
                  <p className="p-percentage-humidity">%</p>
                </div>
              </div>
              <div className="div-tag-day-weather2">
                <p className="p-tag-day-weather2">Visibility</p>
                <h2 className="h2-tag-day-weather2">
                  <strong className="strong-tag-day-weather2">6,4</strong> miles
                </h2>
              </div>
              <div className="div-tag-day-weather2">
                <p className="p-tag-day-weather2">Air Pressure</p>
                <h2 className="h2-tag-day-weather2">
                  <strong className="strong-tag-day-weather2">998 </strong>mb
                </h2>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
