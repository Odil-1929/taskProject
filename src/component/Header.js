import React, {Component} from 'react';
import './main.css'
import instagramm from '../component/image/instagramm.png'
import facebook from '../component/image/facebook.svg'
import telegramm from '../component/image/telegramm.svg'
import {Link} from 'react-router-dom'

class Header extends Component {
    render() {
        return (
            <header>
                <div className="container">

                    <div className="row">


                        <nav className="navbar navbar-expand-sm bg-light navbar-light fixed-top">
                            <div className="container">

                                <a className="navbar-brand" href="#">TECH YARD</a>


                                <ul className="navbar-nav justify-content-en">
                                    <li className="nav-item px-2">
                                        <Link to='/' className="nav-link my-1" href="#">HOME</Link>
                                    </li>
                                    <li className="nav-item px-2">
                                        <Link to='/services' className="nav-link border-left my-1" href="#">SERVICE</Link>
                                    </li>
                                    <li className="nav-item px-2">
                                        <Link to='/about' className="nav-link border-left my-1" href="#">ABOUT US</Link>
                                    </li>
                                    <li className="nav-item px-2">
                                        <Link to='/onlineStore' className="nav-link border-left my-1" href="#">CASE STUDENTS</Link>
                                    </li>
                                    <li className="nav-item px-2">
                                        <Link to='/contacts' className="nav-link border-left my-1" href="#">CONTACTS</Link>
                                    </li>

                                </ul>
                            </div>

                        </nav>

                        <div className='d-inline-block text-white mt-5'>
                            <h1 className='font-weight-bold'>TECH YARD</h1>
                            <h2 className='font-weight-bold'>Solutions</h2>
                            <h3>Your digital knight</h3>
                            <button type='button' className='btn btn-primary mt-4'>More</button>

                            <div className='d-flex '>
                                <p className='mr-5'>Follow us:</p>
                                <a href="#"><img className=' mt-3 mr-4' src={telegramm} alt=""/></a>
                                <a href="#"><img className=' mt-3 mr-4' src={facebook} alt=""/></a>
                                <a href="#"><img className='bg-white w-75 h-25 mt-3' src={instagramm} alt=""/></a>


                            </div>
                        </div>

                    </div>
                </div>

            </header>
        );
    }
}

export default Header;