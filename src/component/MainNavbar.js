import React from 'react';
import {Link} from "react-router-dom";
import '../component/main.css'

const MainNavbar = () => {
    return (
        <section id="mainNavbar" className='pt-3'>
            <navbar>
                <div className="container">
                    <div className="row">
                        <nav className="navbar navbar-expand-sm bg-light navbar-light">
                            <div className="container">
                                <a className="navbar-brand" href="#">TECH YARD</a>
                                <ul className="navbar-nav">
                                    <li className="nav-item px-2"><Link to='/' className="nav-link my-2">HOME</Link>
                                    </li>
                                    <li className="nav-item px-2"><a className="nav-link my-2 border-left"
                                                                     href="#">SERVICES</a></li>
                                    <li className="nav-item px-2"><a className="nav-link my-2 border-left" href="#">ABOUT
                                        US</a></li>
                                    <li className="nav-item px-2"><a className="nav-link my-2 border-left" href="#">CASE
                                        STUDIES</a></li>
                                    <li className="nav-item px-2"><a className="nav-link my-2 border-left"
                                                                     href="#">CONTACTS</a></li>
                                </ul>
                            </div>
                        </nav>
                    </div>
                </div>
            </navbar>
        </section>

    );
};

export default MainNavbar;