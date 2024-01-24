import './tableOfContent.css'
import BusesButton from './assets/busesButton.svg'
import LunchButton from './assets/lunchButton.svg'
import ServiceButton from './assets/serviceButton.svg'
import CenterButton from './assets/centerButton.svg'
import FitnessButton from './assets/fitnessButton.svg'
import EquipButton from './assets/equipButton.svg'
import RabanutButton from './assets/rabanutButton.svg'
import healthButton from './assets/healthButton.svg'
import { forwardRef } from 'react';

const TableOfContent = forwardRef((props, ref) => {
    return (
        <div className='tableContainer' ref={ref}>
            <div className='titleTable'>תוכן עניינים</div>
            <div className='buttonContainer'>
                <img src={BusesButton} alt="buses" className='buttons' onClick={props.clickedSubject} />
                <img src={LunchButton} alt="lunch" className='buttons' onClick={props.clickedSubject} />
                <img src={ServiceButton} alt="service" className='buttons' onClick={props.clickedSubject} />
                <img src={CenterButton} alt="center" className='buttons' onClick={props.clickedSubject} />
                <img src={FitnessButton} alt="fitness" className='buttons' onClick={props.clickedSubject} />
                <img src={EquipButton} alt="equip" className='buttons' onClick={props.clickedSubject} />
                <img src={RabanutButton} alt="rabanut" className='buttons' onClick={props.clickedSubject} />
                <img src={healthButton} alt="health" className='buttons' onClick={props.clickedSubject} />
            </div>
        </div>
    )
})

export default TableOfContent