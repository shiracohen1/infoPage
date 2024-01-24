import FoodIcon from './assets/foodIcon.svg'
import LunchRoom from './assets/lunchRoom.svg'
import OpenHours from './assets/openHours.svg'
import Kosher from './assets/kosher.svg'
import Kashrut from './assets/kashrut.svg'
import MiddleMeal from './assets/middleMeal.svg'
import './foodCourt.css'

const FoodCourt = () => {
    return (
        <>
            <div className='titleContainer'>
                <img src={FoodIcon} alt="icon" className='icon' />
                <div className='titleFood'>חדר אוכל</div>
            </div>
            <div className='genericContainer'>
                <img src={LunchRoom} alt="room" className='lunchPic' />
                <div className='genericText'>
                    בקריית ההדרכה ישנם 6 חדרי אוכל.
                    פעילים A, B, C, D אוכל חדרי
                    במהלך כל השבוע ובכל השעות
                    הנקובות.
                    חדר אוכל E הוא פיתייה ופעיל בימים
                    א׳-ה׳ במהלך שעות ארוחת הצהריים
                    בלבד.
                </div>
                <div className='textContainerFood'>
                    <div>
                        <img src={OpenHours} alt="openHours" className='titleName' />
                        <div className='openText'>
                            <div>
                                <b>ימי א׳ -ה׳-</b>
                                <p>
                                    בוקר- 06:30-08:00
                                    צהריים- 11:30-14:00
                                    ערב- 18:00-20:00                            
                                </p>
                            </div>
                            <div>
                                <b>ימי שישי-</b>
                                <p>
                                    בוקר- 06:30-08:00
                                    צהריים- 11:30-13:30
                                    ערב -משתנה בהתאם
                                    לכניסת השבת.
                                </p>
                            </div>
                            <div>
                                <b>ימי שבת-</b>
                                <p>
                                    בוקר- 06:30-08:00
                                    צהריים- 11:30-14:30
                                    ערב- משתנה בהתאם לזמן
                                    יציאת שבת.
                                </p>
                            </div>
                            <div>
                                מידי שבוע מופץ ויסות חדרי אוכל
                                קרייתי במסרתו נקבעות שעות לכל
                                בה”ד, יש להקפיד להגיע בשעות
                                שהוקצו לבה”ד.
                            </div>
                        </div>
                    </div>
                        <div>
                            <div>
                                <img src={MiddleMeal} alt="middle" className='titleName' />
                                <div className='middleText'>
                                בקריית ההדרכה ניתן להזמין ולמשוך
                                ארוחות ביניים מעמדת הפריסה
                                שהוגדרה בצמוד לרמפה של המטבח.
                                    <p> איך מזמינים ארוחת ביניים?
                                    פנו לתכנון הצבאי של הבה״ד שלכם -
                                    דרישה למפקדת הסעדה - הזנה
                                    במערכת ניהול העיר - ובאמצעות
                                    מספר המפגש שלכם תוכלו למשוך
                                    את הפריסה.</p>
                                </div>
                            </div>
                            <div>
                                <img src={Kashrut} alt="kasher" className='titleName' />
                                <div className='kosherText'>
                                    <p>בשר גולמי וטחון חלק מהרבנות.
                                    מוצרי עוף רבנות מהדרין.</p> 
                                    <p>ירקות ופירות שמיטא לחומרה. <img src={Kosher} className='kosherPic' /></p>
                                    <p>ירק עלי בפיקוח חרקים למהדרין.
                                    חומרי גלם ומוצרי חלב בד”צ העדה
                                    החרדית בחדר אוכל A. </p>
                                    <p>
                                    מס טלפון אחראי כשרות ודת-
                                    רס”ב נאור בוכובזה - <a href="tel: +0526374225">0526374225</a>
                                    </p>
                                </div>
                            </div>
                        </div>
                </div>
            </div>
        </>
    )
}

export default FoodCourt