import { useEffect, useState } from 'react'
import Background1 from './assets/background1.png' 
import Background2 from './assets/background2.png'
import Background3 from './assets/background3.png'
import Background4 from './assets/background4.png'
import './App.css'

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
    <div style={{ backgroundImage: `url('${bgOption[currentBackground]}')`}} className='body'>
      
    </div>
  )
}

export default App
