import './equpiment.css'
import Tank from './assets/tankIcon.svg'
import Afsan from './assets/afsancol.svg'
import Marlog from './assets/marlog.svg'
import Window from './assets/tikshuvWindow.svg'
import Merkaz from './assets/tikshuvCenter.svg'

const Equipment = () => {
    return (
        <>
            <div className='titleContainer'>
                <img src={Tank} alt="tank" className='equipIcon' />
                <div className='equipTitle'>ציוד צבאי</div>
            </div>
            <div className='containers'>
                <div className='afsankolContainer'>
                    <img src={Afsan} alt="afsan" className='titleName' />
                    <div>
                        <div>        
                            מחסן ציוד לוגיסטי קדמי אשר נותן מענה
                            בהחלפת ציוד אישי במקום קיימות לפחות 2
                            עמדות זמינות לקבלת קהל, ויהיו שני חדרי
                            מדידה באזור ההמתנה
                            <p>
                            שעות פתיחה-
                            </p>
                            <p>
                            א-ה- 08:30-20:00
                            </p>
                            <p>
                            יום ו’ ובערבי חג - 08:00-12:00
                            </p>
                        </div>
                        <div>
                        באפסנכל ניתן מענה בשירותי כביסה לחיילי
                        קרה”ד.
                        <p>
                        כביסה שתתקבל עד יום שני תוחזר מכובסת
                        ונקייה עד שני בשבוע הבא.
                        </p>
                        </div>
                        <div>
                            מחסן א’ - מענה להחלפת מדי א’ “חדש
                            תמורת חדש” בימים ב’ - ה’ בין השעות
                            10:00-14:00
                        </div>
                    </div>
                </div>
                <div className='marlogContainer'>
                    <img src={Marlog} alt="marlog" className='titleName' />
                    <div>
                        <div>
                        מרלו”ג קריית ההדרכה ממוקם בין המרת”ק
                        לארמו”ן.
                        <p>
                        שעות פעילות -
                        </p>
                        <p>
                        א’-ה’- 08:00-17:00
                        </p>
                        </div>
                        <div>
                            המרלוג נותן מענה ושירות בתיאום מראש ע”ב
                            הזנת סרגל או מפגשים, לרבות:
                            <p>
                            1 ציוד לוגיסטי להכשרות יונפק בהתאם לכרך
                            ההפעלה (ג’) ע”י הזכיין.
                            </p>
                            <p>
                            2ציוד ע”פ קיטים שהוגדרו מראש להכשרות (1-6)
                            יונפקו להן לפי שיוך הקיט.
                            </p>
                            <p>
                            3ציוד לפרט ינופק לחניך בחדר במהלך הקליטה
                            במגורים ובהתאם להנחיות מדור תכנון.
                            </p>
                            <p>
                            4ציוד משרדי יונפק בקיטים כשבוע טרם תחילת
                            ההכשרה.
                            </p>
                        </div>
                    </div>
                </div>
                <div className='windowContainer'>
                    <img src={Window} alt="Window" className='titleName' />
                    <div>
                        <p>
                        - הלבנה
                        </p>
                        <p>
                        - טופס טיולים נכנס יוצא
                        </p>
                        <p>
                        - הרשאות לתיקיות רשת
                        </p>
                        <p>
                        - קידוד חוגרים
                        </p>
                        <p>
                        שעות פעילות:
                        </p>
                        <p>
                        18:00 - 13:00 , 08:00-12:00
                        <p>19:00-20:00</p>
                        </p>
                    </div>
                </div>
                <div className='merkazContainer'>
                    <img src={Merkaz} alt="merkaz" className='titleName' />
                    <div>
                    מרת”ק, מספק ציוד תקשובי
                    וכולל מעבדות תקשוב. 
                    <p>
                    שעות פתיחה-
                    </p>
                    <p>א-ה- 08:00-20:00</p>
                    <p>
                    תורן זכיין- <a href="tel: + 052-7032177"> 052-7032177</a>
                    </p>
                    <p>
                    טלפון- <a href="tel: +054-8775797">054-8775797</a>
                    </p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Equipment