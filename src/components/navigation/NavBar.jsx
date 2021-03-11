import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import Logo from './logo.png';

const NavBar = () => {
    return (
        <nav className="nav-wrapper red darken-3">
            <div className="container">
                <a className="brand-logo left" href="#"><img src={Logo} alt="halloe" /></a>
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