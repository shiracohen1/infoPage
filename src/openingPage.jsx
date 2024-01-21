import Title from './assets/title.svg'
import Logo from './assets/logo.png'
import './openingPage.css'

const OpeningPage = () => {
    return (
        <div className='openContainer'>
            <img src={Title} alt="title" className='title' />
            <img src={Logo} alt="logo" className='logo' />
            <div className='slogan'>"התשובה בעשייה"</div>
        </div>
    )
}

export default OpeningPage