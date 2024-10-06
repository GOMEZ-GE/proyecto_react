
//import { Link, } from "react-router-dom";

import { NavLink } from "react-router-dom";

const Nav = (props) => {
    return (

        <nav>
            <ul>
                <li><NavLink to="/" className={({ isActive }) => isActive ? "activo" : undefined} > Inicio</NavLink></li>
                <li><NavLink to="/noticias" className={({ isActive }) => isActive ? "activo" : undefined}>Noticias</NavLink></li>
                <li><NavLink to="/historia" className={({ isActive }) => isActive ? "activo" : undefined}>Historia</NavLink></li>
                <li><NavLink to="/plantel" className={({ isActive }) => isActive ? "activo" : undefined}>Plantel</NavLink></li>
                <li><NavLink to="/contacto" className={({ isActive }) => isActive ? "activo" : undefined}>Contacto</NavLink></li>
            </ul>
        </nav >

    );
}

export default Nav;