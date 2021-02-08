import React from 'react';
import webDev from "../component/image/services1.png";
import {Link} from "react-router-dom";
import testingicon from "../component/image/services2.png";
import Ulicon from "../component/image/services3.png";
import deployicon from "../component/image/services5.png";
import mobileDevelop from "../component/image/services4.png"
import  '../component/main.css'

const AutomationServices = () => {
    return (
        <section id="automationServices">
            <div className="container">

                <div className='d-inline-block'>
                    <div className="chiziq mb-5">

                    </div>
                    <h2>Other Services</h2>
                </div>
                <div className="row">
                    <div className="col-4 mb-4">
                        <div className="card">
                            <div className="row">
                                <div className="col-3 pt-4 ">
                                    <img src={webDev} alt=""/>
                                </div>
                                <div className="col-9 ">
                                    <h4>Web Develop</h4>
                                    <p>There is a web design for the bridge to be beautiful and for the customers...</p>
                                    <Link to="/webDevelop">more...</Link>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div className="col-4 mb-4">
                        <div className="card">
                            <div className="row">
                                <div className="col-3 pt-4">
                                    <img src={testingicon} alt=""/>
                                </div>
                                <div className="col-9 text-white">
                                    <h4>Testing</h4>
                                    <p>There is a web design for the bridge to be beautiful and for the customers...</p>
                                    <Link to='/testing'>more...</Link>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div className="col-4 mb-4">
                        <div className="card">
                            <div className="row">
                                <div className="col-3 pt-4">
                                    <img src={Ulicon} alt=""/>
                                </div>
                                <div className="col-9">
                                    <h4>UI/UX Design</h4>
                                    <p>There is a web design for the bridge to be beautiful and for the customers...</p>
                                    <Link to='/uiDesign'>more...</Link>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div className='d-flex justify-content-center'>
                        <div className="col-4 mb-4">
                            <div className="card">
                                <div className="row">
                                    <div className="col-3 pt-4">
                                        <img src={mobileDevelop} alt=""/>
                                    </div>
                                    <div className="col-9 text-white">
                                        <h4>Automation</h4>
                                        <p>There is a web design for the bridge to be beautiful and for the customers...</p>
                                        <Link to='/automation'>more...</Link>
                                    </div>
                                </div>

                            </div>
                        </div>
                        <div className="col-4 mb-4">
                            <div className="card">
                                <div className="row">
                                    <div className="col-3 pt-4">
                                        <img src={deployicon} alt=""/>
                                    </div>
                                    <div className="col-9">
                                        <h4>Deployment</h4>
                                        <p>There is a web design for the bridge to be beautiful and for the customers...</p>
                                        <Link to='/deployment'>more...</Link>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AutomationServices;