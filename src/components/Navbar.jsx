import './Navbar.css'
import Button from './Button'; // Corrigido para importar o arquivo Button corretamente

function Navbar() {
    return (
        <nav className='navbar'>
            <div className="logo-container">
                <img src="/logo-gatopoles.png" alt="Logo da Gatopoles" className="logo" />
            </div>
            <ul className="nav-links">
                <li><a href="#">Sobre</a></li>
                <li><a href="#">Apadrinhe</a></li>
                <li><a href="#"><strong>Adote</strong></a></li>
            </ul>
            <div className="login-container">
                <Button />
            </div>
        </nav>
    );
}
export default Navbar;