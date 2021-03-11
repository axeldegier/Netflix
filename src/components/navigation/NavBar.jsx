import React from 'react';
import { Link, NavLink } from 'react-router-dom'

const NavBar = () => {
    return (
        <nav className="nav-wrapper red darken-3">
            <div className="container">
                <NavLink className="brand-logo left" to="/">Netflix</NavLink>
                <ul className="right">
                    <li><NavLink to="/">Home</NavLink></li>
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