import './styles/Navbar.css';
import Button from './Button'; // Corrigido para importar o arquivo Button corretamente

function Navbar(props) {

    return (
        

        <header className='navbar'>
             {props.logado && <img width="25" src="https://www.theventuretours.com/wp-content/uploads/2020/03/avatar-icon-png-1-1024x1024.png"/>}
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
        </header>
    );
}
export default Navbar;