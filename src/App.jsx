import { useEffect, useState, lazy, useRef } from 'react'
import Background1 from './assets/background1.svg' 
import Background2 from './assets/background2.svg'
import Background3 from './assets/background3.svg'
import Background4 from './assets/background4.svg'
import './App.css'

const OpeningPage = lazy(() => import('./openingPage'));
const Speech = lazy(() => import('./speech'));
const TableOfContent = lazy(() => import('./tableOfContent'));
const Transit = lazy(() => import('./transit'));
const FoodCourt = lazy(() => import('./foodCourt'));
const Service = lazy(() => import('./service'));
const Rabanut = lazy(() => import('./rabanut'));
const Center = lazy(() => import('./center'));
const Fittness = lazy(() => import('./fittness'));
const Equipment = lazy(() => import('./equipment'));

function App() {
  const [currentBackground, setCurrentBackground] = useState("");
  // const [currentSubject, setCurrentSubject] = useState("");
  const buses = useRef(null);
  const lunch = useRef(null);
  const service = useRef(null);
  const center = useRef(null);
  const fitness = useRef(null);
  const equip = useRef(null);
  const rabanut = useRef(null);
  const health = useRef(null);

  const bgOption = {
    "bg1": Background1,
    "bg2": Background2,
    "bg3": Background3,
    "bg4": Background4
  }

  useEffect(() => {
    setCurrentBackground(`bg${Math.floor(Math.random() * (4 - 1) + 1)}`);
  }, []);

  useEffect(() => {
    console.log(currentBackground);
    console.log(bgOption[currentBackground]);
  }, [currentBackground]);

  function clickedSubject (event) {
    // setCurrentSubject(event.currentTarget.alt);
    // event.currentTarget.alt.current.scrollIntoView({ behavior: 'smooth' });

    console.log(event.currentTarget.alt);
}
  
  return (
    <div style={{ backgroundImage: `url(${bgOption[currentBackground]})`}} className='body'>
      <OpeningPage />
      <Speech />
      <TableOfContent clickedSubject={clickedSubject} />
      <Transit />
      <FoodCourt />
      <Service />
      <Rabanut />
      <Center />
      <Fittness />
      <Equipment />
    </div>
  )
}

export default App
