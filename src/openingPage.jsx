import Title1 from './assets/title1.svg'
import Title2 from './assets/title2.svg'
import Title3 from './assets/title3.svg'
import Title4 from './assets/title4.svg'
import Logo from './assets/logo.png'
import './openingPage.css'
import { useEffect, useState } from 'react'

const OpeningPage = (props) => {
    const [currentTitle, setCurrentTitle] = useState("");
    const titleOption = {
        "title1": Title1,
        "title2": Title2,
        "title3": Title3,
        "title4": Title4
      }

    useEffect(() => {
        setCurrentTitle(`title${props.currentBackground.charAt(props.currentBackground.length - 1)}`);
    }, [props.currentBackground]);

    return (
        <div className='openContainer'>
            <img src={`${titleOption[currentTitle]}`} alt="title" className='title' />
            <img src={Logo} alt="logo" className='logo' />
            <div className='slogan'>"התשובה בעשייה"</div>
        </div>
    )
}

export default OpeningPage