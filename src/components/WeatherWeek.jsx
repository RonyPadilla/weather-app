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
                <p className="p-Wind-status">Wind status</p>
                <h2 className="h2-Wind-status">
                  <strong className="strong-Wind-status">7</strong>mph
                </h2>
                <div className="div-Wind-status">
                  <div className="div-icon-Wind-status">
                    <RiNavigationFill className="icon-Wind-status"/>
                  </div>
                  <p>WSW</p>
                </div>
              </div>
              <div className="div-tag-day-weather1">
                <p>Humidity</p>
                <h2>
                  <strong>84</strong>%
                </h2>
                <div>
                  <div>
                    <p>0</p>
                    <p>50</p>
                    <p>100</p>
                  </div>
                  <div>
                    <div></div>
                  </div>
                  <p>%</p>
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
