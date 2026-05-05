import { useState } from 'react';
import styles from './index.module.css';

export default function Exemplo05() {

    const [qtd, setQtd] = useState('');
    const [produto, setProduto] = useState('');
    const [lista, setLista] = useState([]);

    const handleAdd = (e) => {
        e.preventDefault();

        if (!qtd || !produto) return;

        const novoItem = `${qtd}x ${produto}`;

        setLista([...lista, novoItem]);

        // limpa os campos
        setQtd('');
        setProduto('');
    };

    return (
        <div className={styles.container}>

            <h1>Atividade 4 - Lista de compra</h1>

            <form onSubmit={handleAdd} className={styles.formulario}>
                
                <input
                    type="number"
                    placeholder="Qtd"
                    value={qtd}
                    onChange={(e) => setQtd(e.target.value)}
                    className={styles.qtd}
                />

                <input
                    type="text"
                    placeholder="Produto..."
                    value={produto}
                    onChange={(e) => setProduto(e.target.value)}
                    className={styles.produto}
                />

                <button type="submit" className={styles.botao}>
                    Adicionar
                </button>
            </form>

            <div className={styles.lista}>
                {
                    lista.map((item, index) => (
                        <div key={index} className={styles.item}>
                            {item}
                        </div>
                    ))
                }
            </div>

        </div>
    );
}