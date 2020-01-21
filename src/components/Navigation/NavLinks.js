import React from 'react';
import { NavLink } from 'react-router-dom';

const NavLink = props => {
    return (
        <ul>
            <li>
                <NavLink to="/cities" >Cities</NavLink>
            </li>
        </ul>
    )
}
