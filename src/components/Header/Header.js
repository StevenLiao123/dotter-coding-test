import React from 'react';
import './Header.css';

export default () => 
<nav className="navbar navbar-expand-md navbar-dark bg-dark dotterNav px-5 py-3">
    <a className="navbar-brand" href="/">
        <img src="/dotter-coding-test/assets/images/logo1.jpg" className="img-fluid" alt="dotter-logo" width="100" height="100" />
    </a>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav ml-auto">
            <li className="nav-item">
                <a className="nav-link text-white" href="/"><u>Dashboard</u></a>
            </li>
            <li className="nav-item">
                <a className="nav-link text-white" href="/">
                    <span className="text-white">Hello Sam</span>
                    <img src="/dotter-coding-test/assets/images/logo2.jpg" className="rounded-circle ml-2" alt="Cinque Terre" width="30" height="30" />
                </a>
            </li>
        </ul>
    </div>
</nav>;