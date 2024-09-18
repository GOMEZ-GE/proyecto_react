
import { Link, } from "react-router-dom";

const Nav = (props) => {
    return (
        
            <nav>
                <div><strong>NAV</strong></div>
                <ul>
                    <Link to="/">Inicio</Link>
                    <Link to="/noticias">Noticias</Link>
                    <Link to="/historia">Historia</Link>
                    <Link to="/plantel">Plantel</Link>
                    <Link to="/contacto">Contacto</Link>
                </ul>
            </nav>
        
    );
}

export default Nav;