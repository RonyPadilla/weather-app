import '../styles/app.css'
import { Today } from "../components/Today.jsx";
import { WeatherWeek } from "../components/WeatherWeek.jsx";

function App() {

  return (
    <>
    <section className='app'>
      <Today/>
    <WeatherWeek />
    </section>
    
    </>
  )
}

export default App
