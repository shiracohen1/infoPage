import './rabanut.css'
import BookIcon from './assets/bookIcon.svg'
import Kneset from './assets/kneset.svg'

const Rabanut = () => {
    return (
        <div className='rabanut'>
            <div className='containerrrrrr'>
                <div className='rabTitleContainer'>
                    <img src={BookIcon} alt="bus" className='bookIcon' />
                    <div className='rabTitleName'>רבנות</div>
                </div>
                <div className='rabText'>
                    <p>שירותי הדת בקריית ההדרכה</p>
                    <p>
                        שלושה בתי כנסת ותפילות במניין בשעות שונות
                        פיקוח כשרות בחדרי האוכל, במתחמי האוכל ובאירועים
                        זמנים מגדריים לאימונים במתחם הספורט
                        ליווי חיילים וחיילות בתהליך גיור
                        שיעורים, חברותות, מרצים שונים ורב אורח בשבת
                        שיחות אישיות לכל המעוניין/ת
                        ציוד דת
                    </p>
                    <div>
                        לפרטים, יש ליצור קשר עם אחראי כשרות ודת: 
                        <p>נאור בוכובזה: <a href="tel: + 052-6374225">052-6374225</a></p>
                    </div>
                    <div>
                        רב קריית ההדרכה, הרב ליאור בנימין: 
                        <p><a href="tel: +054-695-6624" >054-695-6624</a></p>
                    </div>
                </div>
            </div>
            <img src={Kneset} alt="kneset" className='RabanutPic' />
        </div>
    )
}

export default Rabanut