import React from 'react';
import { Link } from 'react-router-dom';
import Head from './Head';
import styles from './Produtos.module.css';

function Produtos() {
    const [produtos, setProdutos] = React.useState(null);

    React.useEffect(() => {
        fetch('https://ranekapi.origamid.dev/json/api/produto')
            .then((r) => r.json())
            .then((json) => setProdutos(json));
    }, []);

    if (produtos === null) {
        return null;
    }

    return (
        <section className={`${styles.products} anime-left`}>
            <Head title="Amz | Produtos" description="Todos os produtos da Amz"></Head>


            {produtos.map((produto) => (
                <Link to={`produto/${produto.id}`} key={produto.id}>
                    <img src={produto.fotos[0].src} alt={produto.fotos[0].titulo} />
                    <h1>{produto.nome}</h1>
                </Link>
            ))}
        </section>
    );
}

export default Produtos;
