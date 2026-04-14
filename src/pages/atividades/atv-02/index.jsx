import { useState } from 'react';

import styles from './index.module.css';

export default function Atividade2() {

    const [num, setNum] = useState(67);

    function somarUm () {
        setNum(num + 1);
    }

    function subtrairUm () {
        setNum(num - 1);
    }

    function zero () {
        setNum(0);
    }

    return (
        <div className={styles.container}>

            <div className={styles.containerHorizontal}>

                <label
            className={styles.botao} 
                onClick={() => subtrairUm()}
            >-1</label>

            <label className={styles.texto}>{`Contador ${num}`}</label>
            <label                
                className={styles.botao} 
                onClick={() => somarUm()}
            >+1</label>
            
      

        </div>

         <label
            className={styles.botao} 
                onClick={() => zero()}
            >Zerar</label>
            </div>

        
    );
}
