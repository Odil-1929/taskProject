import React, {Component} from 'react';
import '../component/main.css'
import service1 from '../component/image/services1.png'
import {Link} from "react-router-dom";
import testUI_IXIcon from "../component/image/testUI_IXIcon.png";
import testMobilDevIcon from "../component/image/testMobilDevIcon.png";
import testAutoIcon from "../component/image/testAutoIcon.png";
import testDeploymeIcon from "../component/image/testDeploymeIcon.png";

class TestingService extends Component {
    render() {
        return (
            <section id="testingservices">
                <div className="container">

                    <div className='d-inline-block'>
                        <div className="chiziq">
                        </div>
                        <h2 className='mt-5'>Other services</h2>
                    </div>
                    <div className="row mt-5">
                        <div className="col-4 mb-4">
                            <div className="card">
                                <div className="row">
                                    <div className="col-3 pt-4">
                                        <img src={service1} alt=""/>
                                    </div>
                                    <div className="col-9">
                                        <h4>Web develop</h4>
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
                                        <img src={testMobilDevIcon} alt=""/>
                                    </div>
                                    <div className="col-9 text-white">
                                        <h4>Mobila Develop</h4>
                                        <p>There is a web design for the bridge to be beautiful and for the customers...</p>
                                        <Link to='/mobileDev'>more...</Link>
                                    </div>
                                </div>

                            </div>
                        </div>

                        <div className="col-4 mb-4">
                            <div className="card">
                                <div className="row">
                                    <div className="col-3 pt-4">
                                        <img src={testUI_IXIcon} alt=""/>
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
                                            <img src={testAutoIcon} alt=""/>
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
                                            <img src={testDeploymeIcon} alt=""/>
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
    }
}

export default TestingService;