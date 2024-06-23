import LogoImage from '../../assets/logo.svg'
import './header.styles.css'

const Header = () => {
    return(
        <header className='header'>
            <div>
              <img src={LogoImage} alt='logo da minha listinha'/>  
            </div>
        </header>
    )
}

export default Header