import React from 'react';
import {Link} from 'react-router-dom';
const NavBar = () => {
    return(
        <nav className ='nav-wrapper'>
    <div className = "container">
    <Link to ='/'> BlackHole </Link>
    </div>
        </nav>
    );

}
export default NavBar;