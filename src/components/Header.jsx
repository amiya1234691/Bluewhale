import React from 'react'
import {Link } from 'react-router-dom';


export default function Header() {
    return (
        
        <div>
            <header id="header" className="header d-flex align-items-center" >
                <div className="container-fluid container-xl d-flex align-items-center justify-content-between">

                    <Link to="/" className="logo d-flex align-items-center">
                        <img src="assets/img/logob.jpg" alt="logo"/>
                        <h1>Blue Whale Stacks</h1>
                    </Link>

                    <i className="mobile-nav-toggle mobile-nav-show bi bi-list"></i>
                    <i className="mobile-nav-toggle mobile-nav-hide d-none bi bi-x"></i>
                    <nav id="navbar" className="navbar">
                        <ul>
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/about">Solution</Link></li>
                            <li><Link to="/service">Products</Link></li>
                            <li><Link to="/projects">Consulting</Link></li>
                            <li className="dropdown"><Link to="/"><span>Events</span> <i className="bi bi-chevron-down dropdown-indicator"></i></Link>
                                <ul>
                                    <li><Link to="/">Virtual Events</Link></li>
                                    <li className="dropdown"><Link to="/"><span>Event Calender</span><i className="bi bi-chevron-down dropdown-indicator"></i></Link>
                                        <ul>
                                            <li><Link to="/">Event Calender</Link></li>
                                            <li><Link to="/">Knowledge</Link></li>
                                            <li><Link to="/">Live webinars</Link></li>
                                            <li><Link to="/">On Demand-Webinars</Link></li>
                                            <li><Link to="/">Live Demos</Link></li>
                                        </ul>
                                    </li>
                                    <li><Link to="/">Platform Release Broadcast</Link></li>
                                    <li><Link to="/">Knowledge</Link></li>
                                    <li><Link to="/">World Forums</Link></li>
                                </ul>
                            </li>
                            <li><Link to="/contact">Contact</Link></li>
                            <li><Link to="/LoginPage">login</Link></li>
                        </ul>
                    </nav>

                </div>
            </header>
        </div>
        
    )
}
