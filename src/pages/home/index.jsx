  import { Link } from "react-router";

  import styles from './index.module.css';

  function Home() {

    return (
      <div className={styles.container}>
          <h1>Aula de React com Vite JS</h1>
          <div className={styles.containerCards}>   
            <h2>Exemplos</h2>       
            <Link to="/exemplo/1">Exemplo 1 - Componente básico</Link>
            <Link to="/exemplo/2">Exemplo 2 - Uso de module CSS</Link> 
            <Link to="/exemplo/3">Exemplo 3 - Uso de module CSS</Link>   
            <Link to="/exemplo/4">Exemplo 4 - Uso de module CSS</Link> 
            <Link to="/exemplo/5">Exemplo 5 - Uso de module CSS</Link>       
          </div>
          
          <div className={styles.containerCards}>    
            <h2>Atividades</h2>
            <Link to="/atividades/1">atividade01 - Uso de module CSS</Link>     
            <Link to="/atividades/2">atividade02 - Uso de module CSS</Link>
            <Link to="/atividades/3">atividade03 - Uso de module CSS</Link>
            <Link to="/atividades/4">atividade04 - Uso de module CSS</Link>        
          </div>
      </div>
    )
  }

  export default Home;