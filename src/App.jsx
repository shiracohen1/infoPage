import { useEffect, useState, lazy, useRef } from 'react'
import Background1 from './assets/background1.jpeg' 
import Background2 from './assets/background2.jpeg'
import Background3 from './assets/background3.jpeg'
import Background4 from './assets/background4.jpeg'
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
const Health = lazy(() => import('./health'));


function App() {
  const [currentBackground, setCurrentBackground] = useState("");
  // const [currentSubject, setCurrentSubject] = useState("");
  // const subArr = ["buses", "lunch", "service", "center", "fitness", "equip", "rabanut", "health"];

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

  function clickedSubject (event) {
    buses.current.scrollIntoView({ behavior: 'smooth' });

    console.log(event.currentTarget.alt);
  }

  // useEffect(() => {
  //   // if (currentSubject === ) {
  //   // }
  // }, [currentSubject])
  
  return (
    <div style={{ backgroundImage: `url(${bgOption[currentBackground]})`}} className='body'>
      <OpeningPage currentBackground={currentBackground} />
      <Speech />
      <TableOfContent clickedSubject={clickedSubject} />
      <Transit ref={buses} />
      <FoodCourt ref={lunch} />
      <Service ref={service} />
      <Rabanut ref={rabanut} />
      <Center ref={center} />
      <Fittness ref={fitness} />
      <Equipment ref={equip} />
      <Health ref={health} />
    </div>
  )
}

export default App
