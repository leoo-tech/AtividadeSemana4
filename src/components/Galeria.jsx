import Cards from './Cards';
import './styles/Galeria.css';


const gatosAdocao = [
    {cod: 1, nome: "Alex", genero: "macho", corOlhos: "Verdes", cor: "Tigrado e branco", tipoPelagem: "Pelagem Curta"},
    {cod: 2, nome: "Líder", genero: "macho", corOlhos: "Verdes", cor: "Tigrado e branco", tipoPelagem: "Pelagem Curta"},
    {cod: 3, nome: "Cuscuz", genero: "macho", corOlhos: "Verdes", cor: "Branco", tipoPelagem: "Pelagem Longa"},
]


function Galeria() {

    const cardsGatos = gatosAdocao.map((gatos) => {
        return (
            <article> {/*adicionar um componente*/}
                <h3>{gatos.nome}</h3>
                <p>Genero: {gatos.genero}</p>
                <p>Cor dos olhos: {gatos.corOlhos}</p>
                <p>Cor: {gatos.cor}</p>
                <p>Tipo de pelagem: {gatos.tipoPelagem}</p>
            </article>
        );
    });

    return (
        <section>
            {cardsGatos}
        </section>
    );
}

export default Galeria;