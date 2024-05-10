import React from 'react';
import './Fotter.css';

export function Footer() {
    return (
        <div>
            <footer className="footer">
                <div className="footer-container">
                    <div className="footer-section">
                        <h1 className='replit'>100xDevs</h1>
                        <ul>
                            <li>Mobile app</li>
                            <li>Blog</li>
                            <li>Careers</li>
                            <li>Pricing</li>
                        </ul>
                    </div>
                    <div className="footer-section">
                        <h1 className='replit2'>Legal</h1>
                        <ul>
                            <li>Terms of Service</li>
                            <li>Replit Teams Agreement</li>
                            <li>Privacy</li>
                            <li>Subprocessors</li>
                            <li>DPA</li>
                            <li>US Student DPA</li>
                            <li>Student Privacy</li>
                            <li>Report Abuse</li>
                        </ul>
                    </div>
                    <div className="footer-section">
                        <h1 className='replit2'>Features</h1>
                        <ul>
                            <li>IDE</li>
                            <li>Multiplayer</li>
                            <li>Community</li>
                            <li>Deployments</li>
                            <li>Replit AI</li>
                            <li>Bounties</li>
                        </ul>
                    </div>
                    <div className="footer-section">
                        <h1 className='replit2'>Handy links</h1>
                        <ul>
                            <li>Languages</li>
                            <li>Docs</li>
                            <li>Support</li>
                            <li>Forum</li>
                            <li>Status</li>
                            <li>Import from Glitch</li>
                            <li>Import from Heroku</li>
                            <li>Copilot alternative</li>
                            <li>Brand Kit</li>
                            <li>Replit India</li>
                            <li>Partnerships</li>
                        </ul>
                    </div>
                    <div className="footer-section">
                        <h3 className='replit2'>Programming languages</h3>
                        <ul>
                            <li>Python</li>
                            <li>Nix</li>
                            <li>JavaScript</li>
                            <li>HTML, CSS, JS</li>
                            <li>TypeScript</li>
                            <li>C++</li>
                            <li>Node.js</li>
                            <li>Golang</li>
                        </ul>
                    </div>
                </div>
                <div className="footer-copyright">
                    <span >Copyright © 2024 Veil-Voice, Inc. All rights reserved.</span>
                    <div className="footer-social-icons">
                        <a href="#" className="social-icon">
                            <i className="fab fa-reddit"></i>
                        </a>
                        <a href="#" className="social-icon">
                            <i className="fab fa-tiktok"></i>
                        </a>
                        <a href="#" className="social-icon">
                            <i className="fab fa-instagram"></i>
                        </a>
                        <a href="#" className="social-icon">
                            <i className="fab fa-twitter"></i>
                        </a>
                    </div>
                </div>
            </footer>
        </div>
    );
}