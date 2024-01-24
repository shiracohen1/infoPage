import busIcon from './assets/busIcon.svg'
import ShuttleButton from './assets/shuttleButton.svg'
import OutsideBase from './assets/outsideBase.svg'
import InsideButton from './assets/insideKiryaButton.png'
import Shuttles from './assets/shuttles.svg'
import './transit.css'
import { forwardRef } from 'react';

const Transit = forwardRef((props, ref) => {
    return (
        <div className='shuttleContainer' ref={ref}>
            <div className='titleContainer'>
                <img src={busIcon} alt="bus" className='icon' />
                <div className='titleNameBus'>היסעים</div>
            </div>
            <div className='textContainer'>
                <div className='shuttle'>
                    <img src={ShuttleButton} alt="shuttle" className='shuttleTitle' />
                    <div className='shuttleText'>
                        <p>שאטל הינו שירות היסעים עבור חיילי צה״ל. </p>
                        <p> בקריית ההדרכה קיים מערך היסעים הכולל שירותי היסעים חוץ קרייתים ותוך קרייתיים.</p>
                        <div>בימי חמישי + שישי ישנם שאטלים המסיעים את החיילים מקריית ההדרכה ל-20 מוקדים ברחבי הארץ.</div>
                        <div>בימי ראשון ישנם 32 מוקדי איסוף מכל הארץ המסיעות את החיילים לקריית ההדרכה.</div>
                    </div>
                </div>
                <div className='inAndOutContainer'>
                    <div className='outside'>
                        <img src={OutsideBase} alt="outside" className='outsideTitle' />
                        <div className='outsideText'>
                            <p>מטרופולין קו - 140 מגיע לש.ג המרכזי ולמרפ״א דרום.</p>
                            <p>אפליקציית שאטל - קישור להורדה ולהרשמה - <a href="https://onelink.to/jq7h8k">לחץ כאן</a></p>
                        </div>
                    </div>
                    <div className='inside'>
                        <img src={InsideButton} alt="inside" className='insideTitle' />
                        <div className='insideText'>
                        קו 747- קו אשר עובר ב-12 תחנות הפזורות ברחבי קריית ההדרכה ומשרת את כלל חיילי הבסיס.
                        </div>
                    </div>
                </div>
            </div>
            <img src={Shuttles} alt="shuttle" className='shuttlePic' />
        </div>
    )
})

export default Transit