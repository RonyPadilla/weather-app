import '../styles/app.css'
import { Today } from "../components/Today.jsx";
import { WeatherWeek } from "../components/WeatherWeek.jsx";
import { SearchLocation } from '../components/SearchLocation.jsx';
import { useState } from 'react';

function App() {

  const [search, setSearch] = useState(false);

  
  return (
    <>
      <section className='app'>
        {search ? <SearchLocation sendSearch={setSearch} valueSearch={search}/> : <Today sendSearch={setSearch}/>}
        <WeatherWeek />
      </section>
    </>
  );
  
}

export default App
