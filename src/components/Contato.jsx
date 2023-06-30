import styles from './Contato.module.css';
import image from '../img/contato.jpg';
import Head from './Head';

function Contato() {
    return (
        <section className={`${styles.contact} anime-left`}>
            <Head title="Amz | Contato" description="Entre em contato"></Head>

            <img src={image} alt="Máquina de escrever" />
            
            <div>
                <h1>Entre em contato</h1>
                <ul>
                    <li>guilherme@origamid.com</li>
                    <li>27 99999-9999</li>
                    <li>Rua Pinheiros, 999, Guriri</li>
                </ul>
            </div>
        </section>
    );
}

export default Contato;
