import './health.css'
import HealthIcon from './assets/healthIcon.svg'
import HealthCenter from './assets/healthCenter.svg'
import MedicineRoom from './assets/medicineRoom.svg'
import Dentist from './assets/dentist.svg'
import BaseMap from './assets/baseMap.svg'
import { forwardRef } from 'react';
import Back from './assets/backArrow.png'


const Health = forwardRef((props, ref) => {
    return (
        <div className='healthContainer' ref={ref}>
            <div className='titleContainer'>
                <img src={HealthIcon} alt="health" className='healthIcon' />
                <div className='titleNameHealth'>רפואה</div>
            </div>
            <img src={Back} alt="back" className='backArrow' onClick={props.goback} />
            <div className='healthTextContainer'>
                <div className='healthCenter'>
                    <img src={HealthCenter} alt="center" className='titleName' />
                    <div className='centerText'>
                        המרכז הרפואי נותן שירותי רפואה ראשונית לכלל משרתי
                        החובה בקריית ההדרכה     
                        <p>
                        מחוץ למחנה נמצא המרפ"א שמכיל בתוכו רפואת
    מומחים, מרפאת אנשי קבע, בית מרקחת ושירותי
    פיזיותרפיה. 
                        </p>
                        <p>
                        מרפאת ערב למקרים דחופים לאחר התייעצות עם אחות
    18:00-22:00.
                        </p>
                        <div>
                        משעה 22:00 עד פתיחת המרפאה ב08:00 בבוקר.
                        </div>
                        <div>
                        שעות פעילות מרפאות הבה״דים -
                        <p>
                        יום א׳ - 13:00-22:00
                        </p>
                        <p>
                        ימים ב׳-ד׳ - 08:00-22:00
                        </p>
                        <p>
                        יום ה׳ - 08 - שאטל הבה״ד 
                        </p>
                        <p>
                        לקביעת מפגש חובש ראשוני יש לפנות למרפאת הבה"ד 
                        </p>
                        </div>
                    </div>
                </div>
                <div className='medicineContainer'>
                    <img src={MedicineRoom} alt="medicine" className='titleName' />
                    <div className='medicText'>
                        שעות פעילות ,08:00-17:30 הפסקה 12:00-13:00
                        מקרה רפואי דחוף -יש להתקשר לטלפון חירום-
                        <p>
                            <a href="tel: +073-3772819">073-3772819</a>
                        </p>
                    </div>
                </div>
                <div className='teethContainer'>
                    <img src={Dentist} alt="teeth" className='titleName' />
                    <div className='dentistText'>
                    מיקום- המרכז הרפואי, קומה .2
                    <p>
                    מספר טלפון- <a href="tel: +073-377-2874">073-377-2874</a>
                    </p>
                    <p>
                    ניתן לפנות גם בוואטסאפ - 052-925-7270
                    </p>
                    <p>
                    מקרים דחופים ייכנסו ללא קביעת תור מראש,
לאחר השעה 17:00 יש לפנות לחדר הטיפולים במרכז
                    </p>
                    <p>
                    הרפואי /בטלפון חירום- <a href="tel: +073-3772819">073-3772819</a>
                    </p>
                    <p>
                    שעות פעילות-
                    </p>
                    <p>
                    08:00-17:00
                    </p>
                    </div>
                </div>
            </div>
            <img src={BaseMap} alt="base" className='baseLastPic' />
        </div>
    )
})

export default Health