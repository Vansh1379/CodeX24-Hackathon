import React from 'react';
import "./Navbar.css"

export function Navbar() {
    return (
        <nav className="navbar">
            
            <div className="navbar-logo">Veil-Voice</div>
            <div className="navbar-buttons">
                <button className="navbar-button">NEW ENTRY</button>
                <button className="navbar-button">LOGOUT</button>
            </div>
        </nav>
    );
}