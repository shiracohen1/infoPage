import './fittness.css'
import Heart from './assets/heartIcon.svg'
import Gym from './assets/gym.svg'
import PoolButton from './assets/poolButton.svg'
import Library from './assets/libraryButton.png'
import Pool from './assets/pool.svg'

const Fittness = () => {
    return (
        <div className='fitContainer'>
            <div className='titleContainer'>
                <img src={Heart} alt="Heart" className='heartIcon' />
                <div className='titleCenter'>פנאי וכושר</div>
            </div>
            <div className='fitTextContainer'>
                <div className='gymContainer'>
                    <img src={Gym} className="titleName" />
                    <div className='gymText'>
                    מיקום -קריית הספורט, קומה 1
                    שעות פתיחה- 
                    <p>א-ה 06:00-22:00</p>
                    <p>
                    ו- 06:00-13:00
                    </p>
                    <p>
                    שעות רישום לחדר כושר -
                    14:00 - 12:00
                    </p>
                    <p>
                    *הכניסה לחדר הכושר לאחר
                    הרשמה והצגת חוגר בכניסה.
                    *כל מתאמן מחויב להגיע על
                    מדי ספורט תקניים ועם מגבת
                    אישית.
                    *כל מתאמן מעל גיל 23 או
                    מתחת לפרופיל 72 נדרש
                    לאישור רופא המאשר לו   
                    </p>
                    </div>
                </div>
                <div className='libraryContainer'>
                    <img src={Library} alt="library" className='titleName' />
                    <div className='libraryText'>
                        שעות פעילות-
                        <p>
                            א-ה- 08:00-17:00
                        </p>
                        <p>
                            19:00-22:00
                        </p>
                        <p>
                        בספרייה קיימים מחשבים אזרחיים
                        וצבאיים עם אופצייה להדפסה,
                        פסנתר וספרים המסווגים לפי
                        נושאים.
                        </p>
                        </div>
                    </div>
                <div>
                    <img src={PoolButton} alt="pool" className='titleName' />
                    <div className='poolText'>
                        שעות פעילות-
                        <p>בכל יום: 14:00-19:30
                        יום א’: 1</p>
                        <p>
                        בנוסף בימי ב’-ה’: 6:30-9:00
                        </p>
                        <p>
                        בקריית הספורט קיימת בריכת שחייה
                        חצי אולימפית.
                        </p>
                        <p>
                        *ניתן להיכנס רק לאחר הרשמה לחדר
                        הכושר               
                        </p>
                        <p>
                            *כל מתאמן מעל גיל 23 או
                            <p>

                            מתחת לפרופיל 72 נדרש
                            </p>
                            <p>
                            לאישור רופא.
                            </p>
                        </p>
                        <p>
                        *על כולם למלא הצהרת בריאות
                        מקרפר 300
                        </p>
                        <div>
                            ישנם אימוני שחייה עם מאמן מקצועי
                            כל יום שני ב6:30 לאנשי הקבע בלבד.
                            הרשמה מול רמ”ד כושר קרבי 
                        </div>
                    </div>
                    <div className='genericText1'>
                    שאר מתקני קריית הספורט פועלים בתיאום מול המדא״גים של
                    הבה״דים בנוסף ישנם חוגי מפקדה לכלל מפקדות הבה״דים.
                    כמו כן, מוצעים אימונים אישיים לאנשי הקבע ולחיילים בסדיר. 
                    <p>
                    רמ”ד כושר קרבי- <a href="tel: +053-333-4515" >053-333-4515</a>.
                    </p>
                    </div>
                </div>
                <img src={Pool} alt="pool" className='poolPic' />
            </div>
        </div>
    )
}

export default Fittness