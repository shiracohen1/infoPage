import './center.css'
import MoneyIcon from './assets/moneyIcon.svg'
import Bistop from './assets/bistopButton.png'
import Kosher from './assets/kosher.svg'
import Shnitzel from './assets/shnitzel.svg'
import Burger from './assets/burgerButton.png'
import Coffee from './assets/coffeeTime.svg'
import Gidron from './assets/gidron.svg'
import Shiftzurim from './assets/shiftzurim.svg'
import Freshop from './assets/freshop.svg'
import DVCom from './assets/DVcom.svg'
import CenterPic from './assets/center.png'
import Bank from './assets/bank.png'
import { forwardRef } from 'react';

const Center = forwardRef((props, ref) => {
    return (
        <div ref={ref}>
            <div className='titleContainer'>
                <img src={MoneyIcon} alt="money" className='moneyIcon' />
                <div className='titleCenter'>מרכז מסחרי</div>
            </div>
            <div className='cenTextContainer'>
                <div className='bistopContainer'>
                    <img src={Bistop} alt="bistop" className='titleName' />
                    <div className='bisText'>
                        מאפייה - כשר חלבי מהדרין
                        <p>
                        שעות פתיחה-
                        </p>
                        <p>
                        א-ד- 07:00-22:00
                        </p>
                        <p>
                        ה- 07:00-20:30
                        </p>
                        <p>
                        ו- 07:00-13:00
                        </p>
                        <img src={Kosher} className='kosher'/>
                    </div>
                </div>
                <div className='shnitzelContainer'>
                    <img src={Shnitzel} alt="Shnitzel" className='titleName' />
                    <div className='shnizText'>
                        כשרות-רבנות מהדרין
                        טלפון*-9131
                        <p>
                        שעות פתיחה-
                        </p>
                        <p>
                        א-ה- 11:30-21:00
                        </p>
                        <img src={Kosher} className='kosher'/>
                    </div>
                </div>
                <div className='burgerContainer'>
                    <img src={Burger} alt="Burger" className='titleName' />
                    <div className='burgerText'>
                        כשר -בשרי למהדרין
                        שעות פתיחה-
                        <p>
                        א-ה- 11:30-21:00
                        </p>
                        <img src={Kosher} className='kosher'/>
                    </div>
                </div>
                <div className='coffeeContainer'>
                    <img src={Coffee} alt="coffee" className='titleName' />
                    <div className='coffeeText'> 
                        כשר -חלבי למהדרין
                        שעות פתיחה-
                        <p>
                        א-ה- 06:30-21:00
                        </p>
                        <img src={Kosher} className='kosher'/>
                    </div>
                </div>
                <div className='gidronContainer'>
                    <img src={Gidron} alt="Gidron" className='titleName' />
                    <div className='gidronText'>
                        כשר -חלבי למהדרין
                        שעות פתיחה-
                        <p>
                        א-ד 06:30-19:30
                        </p>
                        <p>
                        ה- 08:30-14:00
                        </p>
                        <p>
                        ו- 06:30-14:00
                        </p>
                        <img src={Kosher} className='kosher'/>
                    </div>
                </div>
                <div className='shiftzurimContainer'>
                    <img src={Shiftzurim} alt="shifzturim" className='titleName' />
                    <div className='shifturText'>
                    שעות פתיחה-
                    <p>
                        א-ד 09:30-20:00
                    </p>
                    <p>
                    ה- 08:30-14:00
                    </p>
                    </div>
                </div>
                <div className='freshContainer'>
                    <img src={Freshop} alt="freshop" className='titleName'/>
                    <div className='freshText'>
                        כשר -חלבי למהדרין
                        <p>
                        טלפון- <a href="tel: + 052-5991194"> 052-5991194</a>
                        </p>
                        שעות פתיחה-
                        <p>
                        א-ד- 07:00-22:00
                        </p>
                        <p>
                        ה- משתנה.
                        </p>
                        <img src={Kosher} className='kosher'/>
                    </div>
                </div>
                <div className='DVContainer'>
                    <img src={DVCom} alt="dvCom" className='titleName' />
                    <div className='DVText'>
                    טלפון- <a href="tel: + 055-9989777"> 055-9989777</a>
                    <p>
                    שעות פתיחה -
                    </p>
                    <p>
                    א-ד- 09:30-20:0
                    </p>
                    <p>
                    ה- 09:30-14:00
                    </p>
                    </div>
                </div>
                <div className='bankContainer'>
                    <img src={Bank} className='titleName' />
                    <div className='bankText'>
                    קיימת עמדת מידע
                    והפקדת שיקים וכספומט
                    למשיכת מזומנים
                    ללקוחות כל הבנקים
                    <p>טלפון- <a href="tel: + 3390*" > 3390*</a></p>
                    <p>שעות פתיחה-</p>
                    <p>
                    א- 09:00-14:00
                    </p>
                    <p>ג- 09:00- 14:00</p>
                    </div>
                </div>
                <img src={CenterPic} className='centerPic' />
            </div>
        </div>
    )
})

export default Center