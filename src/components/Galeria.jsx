import Cards from './Cards';
import './styles/Galeria.css';

function Galeria() {
    return (
        <section className="galeria-container">
            <h1 className="galeria-title">Conheça nossos gatinhos</h1>
            <Cards />
        </section>
    );
}

export default Galeria;