
import { useNavigate } from "react-router-dom";
import { Link } from "react-router";

function home () {

const navigate = useNavigate();

    return(
        <div className="conteinerHome">
            <h1>Aula de React com Vite JS</h1>

            <button onClick={() => navigate('/exemplo/1')}>
                exemplo 1

            </button>

            <Link to="/exemplo/2"> exemplo 2 </Link>
          
        </div>

    )
}
export default home;