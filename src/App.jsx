import { useEffect, useState } from 'react'
import Background1 from './assets/background1.png' 
import Background2 from './assets/background2.png'
import Background3 from './assets/background3.png'
import Background4 from './assets/background4.png'
import './App.css'

function App() {
  const [currentBackground, setCurrentBackground] = useState("");
  const [currentNumber, setCurrentNumber] = useState(0);

  useEffect(() => {
   setCurrentNumber(Math.floor(Math.random() * (4 - 1) + 1));
   choosingBackground();
  }, []);

  function choosingBackground() {
    setCurrentBackground(`Background${currentNumber}`);
    console.log(currentBackground);
  }
  
  return (
    <div style={{ backgroundImage: `url(${Background1})` }} className='body'>
      
    </div>
  )
}

export default App
