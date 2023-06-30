import React from 'react';
import { useParams } from 'react-router-dom';
import Head from './Head';
import styles from './Produto.module.css';

function Produto() {
    const { id } = useParams();

    const [produto, setProduto] = React.useState(null);
    const [loading, setLoading] = React.useState(false);
    const [error, setError] = React.useState(null);

    React.useEffect(() => {
        async function fetchProdutos(url) {
            try {
                setLoading(true);

                const response = await fetch(url);
                const json = await response.json();

                setProduto(json);
            } catch (erro) {
                setError(erro);
            } finally {
                setLoading(false);
            }
        }

        fetchProdutos(`https://ranekapi.origamid.dev/json/api/produto/${id}`);
    }, []);

    if (loading) return <div className="loading"></div>;
    if (error) return <p> {error} </p>;
    if (produto == null) return null;

    return (
        <section className={`${styles.product} anime-left`}>
            <Head title={`Amz | ${produto.nome}`} description={`Produto | ${produto.nome}`}></Head>

            <div>
                {produto.fotos.map((foto) => (
                    <img key={foto.src} src={foto.src} alt={foto.titulo} />
                ))}
            </div>

            <div>
                <h1>{produto.nome}</h1>
                <span>RS {produto.preco}</span>
                <p>{produto.descricao}</p>
            </div>
        </section>
    );
}

export default Produto;
