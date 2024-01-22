import IntroSpeech from './assets/introSpeech.svg'
import Building from './assets/building.svg'
import './speech.css'

const Speech = () => {
    return (
        <div className='body'>
            <img src={IntroSpeech} alt="speech" className='speech' />
            <img src={Building} alt="building" className='building' />
        </div>
    )
}

export default Speech