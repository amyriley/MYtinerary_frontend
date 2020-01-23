import React from 'react';
import { Link } from 'react-router-dom';

import logo from '../../src/images/MYtineraryLogo.png';
import './Landing.css';

export default function Landing() {
    return (
        <div>
            <h1>Landing</h1>
            <div className="logo">
                <img src={logo} alt="logo"/>
            </div>
            <div className="description">
                <p>Find your perfect trip, designed by people who know and love their cities.</p>
            </div>
            <Link to="/cities" >Start browsing</Link>
        </div>
    )
}
