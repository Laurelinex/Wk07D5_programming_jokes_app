import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <ul className="nav-list">
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/jokes">Random Jokes</Link>
            </li>
            <li>
                <Link to="/saved">Saved</Link>
            </li>
        </ul>
    )
}

export default NavBar;