import './service.css'
import SettingsIcon from './assets/settingsIcon.svg'
import mokedButton from './assets/2000Button.png'
import YohalamButton from './assets/yohalamButton.png'
import MokedMishuv from './assets/mokedMichshuv.svg'
import Barber from './assets/barberButton.png'
import Tash from './assets/tash.png'
import Education from './assets/education.svg'
import Discpline from './assets/discipline.svg'
import Base from './assets/base.svg'
import Hamal from './assets/hamal.png'
import PPPButton from './assets/PPPButton.png'

const Service = () => {
    return (
        <div className='serviceContainer'>
            <div className='titleContainer'>
                <img src={SettingsIcon} alt="settings" className='icon' />
                <div className='titleService'>שירותים כלליים</div>
            </div>
            <div className='textContainer'>
                <div className='container1'>
                    <div>
                        <img src={mokedButton} alt="2000" className='titleName' />
                        <div className='mokedText'>
                            נתקלתם בתקלה? התקשרו
                            למוקד הזכיין ופתחו קריאה
                            <p>
                            בטלפון הצבאי- 2000
                            </p>
                            בטלפון אזרחי- <a href="tel: +073-3772000">073-3772000</a>
                        <div>
                            במידה ולא מתקבל מענה ניתן
                            לבקש לפנות לנציג הצבאי  
                        </div>
                    </div>
                    <div>
                        <img src={YohalamButton} alt="yohalam" className='titleName' />
                        <div className='yohalamText'>
                            <p>
                            מרכז המעניק טיפול רגשי, סיוע
                            רפואי וליווי משפטי לחיילות וחיילים
                            במקרים של פגיעה מינית, אלימות
                            במשפחה ובין בני זוג ובמקרים של
                            היריון בלתי מתוכנן.
                            </p>
                            <p>
                            מהו”ת- מרכז התמודדות ותמיכה:
                            </p>
                            <p>
                            <a href="tel: +1111">1111</a> שלוחה 5 > 2
                            או בווטסאפ-
                            052-9282398
                            </p>
                        </div>
                    </div>
                    <div>
                        <img src={MokedMishuv} alt="michshuv" className='titleName1' />
                        <div className='michshuvText'>
                            <p>
                            בניין המפקדה (206) קומה -1 (חלון קבלה
                            בחניית מפקדת קרה”ד)
                            </p>
                            <p>
                            ניתן לפנות דרך הטלפון:
                            </p>
                            <p>
                                <a href="tel: +073-3772000">073-3772000</a> שלוחה 2.
                                שעות פעילות: 8:30-12:00 13:00-18:00
                            </p>
                        </div>
                    </div>
                </div>
                </div>
                <div className='container2'>
                    <div>
                        <img src={Barber} alt="barber" className='titleName' />
                        <div className='barberText'>
                            תאמו תור מראש והסתפרו
                            במרכז המסחרי בבסיס-
                            <p><a href="tel: +054-5562343">054-5562343</a></p>
                            <p>א-ה: 08:00-18:00
                            הפסקה: 12:00-13:00</p>
                        </div>
                    </div>
                    <div>
                        <img src={Tash} alt="tash" className='titleName' />
                        <div className='tashText'>
                            טיפול בבקשות ת״ש ,סיוע
                            כלכלי ובירור זכאויות ותנאי
                            שירות -יש לפנות למשרד
                            הת״ש בבה״ד.
                        </div>
                    </div>
                    <div>
                        <img src={Education} alt="educ" className='titleName' />
                        <div className='educText'>
                            <p>תפקידי מדור החינוך בקריית
                            ההדרכה- לספק שירותי חינוך עבור
                            המשרתים ביחידה תוך חיזוק
                            תחושבת המחויובות והשייכות
                            למדינת ישראל. </p>
                            <p>
                            לכל בה"ד מדור חינוך משלו וניתן
                            לפנות אליהם במגוון נושאי חינוך.
                            </p>
                        </div>
                    </div>
                </div>
                <div className='discContainer'>
                    <div className='displine'>
                        <img src={Discpline} alt="discpline" className='titleName' />
                        <div className='discText'>
                            <div>
                                בקריית ההדרכה ינועו עם כומתה על הראש כלל המשרתים.
                                חלה חובת הצדעה בשטח היחידה מדרגת אל”ם ומעלה.
                                בשישי שבת וחג לא חלה החובה לחבישת כומתה.
                            </div>
                            <div>
                                <p>עמדת חוגרים</p>
                                <p>שעות פתיחה:</p>
                                <p>יום א’ - ד ,08:30-12:00 13:00-17:00</p>
                                <p>יום ה- 8:30 - 12:00</p>
                                <p>טלפון מטכ”לי <a href="tel: +07472345">07472345</a>, 
                                </p>
                                <p>טלפון אזרחי <a href="tel: +0733772345">0733772345</a></p>
                            </div>
                        </div>
                        
                    </div>
                    <img src={Base} alt="base" className='basePic' />
                </div>
            </div>
            <div className='textContainer2'>
                <div>
                    <img src={Hamal} alt="hamal" className='titleName2' />
                    <div className='hamalText'>
                        <p>
                        גורם אחראי על משימת
                        האבטחה ביחידה.
                        </p>
                        <p>
                        חמ״ל מבצעי למקרי חירום,
                        טלפון -  <a href="tel: + 073-3772330"> 073-3772330</a>
                        </p>
                    </div>
                </div>
                <div>
                    <img src={PPPButton} alt="PPP" className='titleName' />
                    <div className='PPPText'>
                        קריית ההדרכה נשענת על קונספט ייחודי של שיתוף פעולה בין
                        צה”ל לגורמי תפעול אזרחיים. מרקם מיוחד זה מאפשר הזדמנויות
                        מגוונות להתפתחות ויצירה לקידום ההכשרות בצה”ל.
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Service