import { useEffect, useState, lazy } from 'react'
import Background1 from './assets/background1.svg' 
import Background2 from './assets/background2.svg'
import Background3 from './assets/background3.svg'
import Background4 from './assets/background4.svg'
import './App.css'
// import OpeningPage from './openingPage'
// import Speech from './speech'

const OpeningPage = lazy(() => import('./openingPage'));
const Speech = lazy(() => import('./speech'));
const TableOfContent = lazy(() => import('./tableOfContent'));


function App() {
  const [currentBackground, setCurrentBackground] = useState("");
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
  
  return (
    <div style={{ backgroundImage: `url(${bgOption[currentBackground]})`}} className='body'>
      <OpeningPage />
      <Speech />
      <TableOfContent />
    </div>
  )
}

export default App
