
import React from 'react';
import { Link } from 'react-router-dom';

function Nav() {
    return (
        <nav class="header-nav">
            <Link to="/">Home</Link>
            <Link to="/shoes">Shoes</Link>
            <Link to="../rotation">Rotation</Link>
            <Link to="../upcoming">Upcoming</Link>
            <Link to="../about">About</Link>
        </nav>
    );
}

export default Nav;