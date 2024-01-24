import Title from './assets/title1.svg'
import Logo from './assets/logo.png'
import Bahadim from './assets/base2.png'
import './openingPage.css'

const OpeningPage = () => {
    return (
        <div className='openContainer' style={{ backgroundImage: `url('${Bahadim}')`}}>
            <img src={Title} alt="title" className='title' />
            <img src={Logo} alt="logo" className='logo' />
            <div className='slogan'>"התשובה בעשייה"</div>
        </div>
    )
}

export default OpeningPage