import { Link } from 'react-router-dom'
import '../styles/Header.css'
import logo from '../assets/LOGO.png'

function Header() {
    return (
        <div className="Kasa-header">
            <nav>
                <img src={logo} alt='Kasa' className='kasa-logo' />
                <div className="link">
                    <Link to="/">Accueil</Link>
                    <Link to="/aboutUs">A Propos</Link>
                </div>
            </nav>
        </div>
    )
}

export default Header