import './tableOfContent.css'
import BusesButton from './assets/busesButton.svg'
import LunchButton from './assets/lunchButton.svg'
import ServiceButton from './assets/serviceButton.svg'
import CenterButton from './assets/centerButton.svg'
import FitnessButton from './assets/fitnessButton.svg'
import EquipButton from './assets/equipButton.svg'
import RabanutButton from './assets/rabanutButton.svg'
import healthButton from './assets/healthButton.svg'

const TableOfContent = () => {
    return (
        <div className='tableContainer'>
            <div className='titleTable'>תוכן עניינים</div>
            <div className='buttonContainer'>
                <img src={BusesButton} alt="buses" className='buttons' />
                <img src={LunchButton} alt="lunch" className='buttons' />
                <img src={ServiceButton} alt="service" className='buttons' />
                <img src={CenterButton} alt="center" className='buttons' />
                <img src={FitnessButton} alt="fitness" className='buttons' />
                <img src={EquipButton} alt="equip" className='buttons' />
                <img src={RabanutButton} alt="rabanut" className='buttons' />
                <img src={healthButton} alt="health" className='buttons' />
            </div>
        </div>
    )
}

export default TableOfContent