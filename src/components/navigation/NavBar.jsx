import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import Logo from './logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMars, faVenus} from '@fortawesome/free-solid-svg-icons';

const NavBar = () => {
    return (
        <nav className="nav-wrapper red darken-3">
            <div className="container">
                <NavLink className="brand-logo left" to="/"><img src={Logo} alt="halloe" width="80%" height="80%" /><FontAwesomeIcon icon={faVenus} /></NavLink>
                <ul className="right">
                    <li><a href="/">Home</a></li>
                    <li><NavLink to="/series">Series</NavLink></li>
                    <li><NavLink to="/films">Films</NavLink></li>
                    <li><NavLink to="/newandpopular">New and popular</NavLink></li>
                    <li><NavLink to="/mylist">My list</NavLink></li>
                </ul>
            </div>

        </nav>

    )
}

export default NavBar;