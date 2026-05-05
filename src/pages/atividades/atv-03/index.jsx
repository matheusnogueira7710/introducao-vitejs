import { useState } from 'react';
import Botao from './botao';
import styles from './index.module.css';

function Atividade03() {
  const [acao, setAcao] = useState("0");

  return (
    <div className={styles.container}>
      <h1>Atividade 3</h1>
      <h2>Ação selecionada: {acao}</h2>

      <div className={styles.botoes}>
        <button 
          className={styles.cadastrar}
          onClick={() => setAcao("Cadastrar")}
        >
          Cadastrar
        </button>

        <button 
          className={styles.editar}
          onClick={() => setAcao("Editar")}
        >
          Editar
        </button>

        <button 
          className={styles.listar}
          onClick={() => setAcao("Listar")}
        >
          Listar
        </button>

        <button 
          className={styles.excluir}
          onClick={() => setAcao("Excluir")}
        >
          Excluir
        </button>

        <button 
          className={styles.cancelar}
          onClick={() => setAcao("cancelar")}
        >
          Cancelar
        </button>
      </div>
    </div>
  );
}

export default Atividade03;