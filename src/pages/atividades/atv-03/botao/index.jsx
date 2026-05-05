import styles from './index.module.css';

function Botao({ texto, aoClicar, acao }) {
    return (
        <button
            className={`${styles.botao} ${acao === 'cadastrar' ? styles.cadastrar : styles.editar}`}
            onClick={aoClicar}
        >
            {texto}
        </button>
    );
}

export default Botao;