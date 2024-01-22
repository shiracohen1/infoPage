import FoodIcon from './assets/foodIcon.svg'
import LunchRoom from './assets/lunchRoom.svg'
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
                <div className='foodText'>
                    <div className='openingContainer'>

                    </div>
                </div>
            </div>
        </>
    )
}

export default FoodCourt