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
  const [isLoading, setIsLoading] = useState(true);
  const speech = useRef(null)
  const sections = {
    buses: useRef(null),
    lunch: useRef(null),
    service: useRef(null),
    center:  useRef(null),
    fitness:  useRef(null),
    equip:  useRef(null),
    rabanut: useRef(null),
    health: useRef(null)
  }
  // const newCache = await caches.open('new-cache');

  const bgOption = {
    "bg1": Background1,
    "bg2": Background2,
    "bg3": Background3,
    "bg4": Background4
  }

  useEffect(() => {
    setCurrentBackground(`bg${Math.floor(Math.random() * (4 - 1) + 1)}`);
  }, []);

  // useEffect(() => {
  //   const imgs = [
  //     './assets/background4.jpeg',
  //     './assets/background3.jpeg',
  //     './assets/background2.jpeg',
  //     './assets/background1.jpeg'
  //   ];

  //   cacheImgs(imgs);
  // }, []);


  function clickedSubject (event) {
    sections[event.currentTarget.alt].current.scrollIntoView({ behavior: 'smooth' });
  }

  function clickedArrow () {
    speech.current.scrollIntoView({behavior: 'smooth'});
  }

  // const cacheImgs = async (srcArray) => {
  //   const promises = await srcArray.map((src) => {
  //     return new Promise(function (resolve, reject) {
  //       const img = new Image();

  //       img.src = src;
  //       img.onload = resolve();
  //       img.onerror = reject();
  //     });
  //   });

  //   await Promise.all(promises);

  //   setIsLoading(false);
  // }
  
  return (
    <div style={{ backgroundImage: `url(${bgOption[currentBackground]})`}} className='body'>
      <OpeningPage currentBackground={currentBackground} clickedArrow={clickedArrow} />
      <Speech ref={speech} />
      <TableOfContent clickedSubject={clickedSubject} />
      <Transit ref={sections.buses} />
      <FoodCourt ref={sections.lunch} />
      <Service ref={sections.service} />
      <Rabanut ref={sections.rabanut} />
      <Center ref={sections.center} />
      <Fittness ref={sections.fitness} />
      <Equipment ref={sections.equip} />
      <Health ref={sections.health} />
    </div>
  )
}

export default App
