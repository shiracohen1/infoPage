import IntroSpeech from './assets/introSpeech.svg'
import Building from './assets/building.svg'
import './speech.css'
import { forwardRef } from 'react';


const Speech = forwardRef((props, ref) => {
    return (
        <div className='body' ref={ref}>
            <img src={IntroSpeech} alt="speech" className='speech' />
            <img src={Building} alt="building" className='building' />
        </div>
    )
})

export default Speech