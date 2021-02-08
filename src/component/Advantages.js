import React from 'react';
import "./main.css"
import "../component/image/high.svg"
import foto1 from "../component/image/advantages1.png"
import foto2 from "../component/image/advantages2.png"
import foto3 from "../component/image/advantages3.png"
import foto4 from "../component/image/advantages4.png"
import foto5 from "../component/image/advantages5.png"
import foto6 from "../component/image/advantages6.png"

const Advantages = () => {
    return (
        <section id='advantages' className='mt-5'>
            <div className="container">
                <div className="row">
                    <div className="col-4 tech-yard">
                        <h3>Teach Yard – Your Digital Solutions Architect</h3>
                        <p>“Get Rid of All Digital Problems with Tech Yard!
                            We are an IT Company that provides the best medium-class service on Internet. No matter what
                            You need, our respectable Senior Developers and Brave/Powerful Senior Designers can
                            implement it!
                            Our distinctive feature - we do not target Premium or Low-class. Applications, websites,
                            design – we work only with the middle segment and try to become the best software company in
                            the World.”</p>
                    </div>
                    <div className="col-7">
                        <h3>Our advantages</h3>
                        <div className="container m-0">
                            <div className="row">
                                <div className="col-6 mb-4">
                                    <div className="row">
                                        <div className="col-4">
                                            <img src={foto1} alt=""/>
                                        </div>
                                        <div className="col-8 text-white">
                                            <div>
                                                <h6>High Quality</h6>
                                                <p>Development company that provides excellent solutions to</p>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                                <div className="col-6 mb-4">
                                    <div className="row">
                                        <div className="col-4">
                                            <img src={foto2} alt=""/>
                                        </div>
                                        <div className="col-8 text-white">
                                            <div>
                                                <h6>Responsive Design</h6>
                                                <p>Development company that provides excellent solutions to</p>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                                <div className="col-6 mb-4">
                                    <div className="row">
                                        <div className="col-4">
                                            <img src={foto3} alt=""/>
                                        </div>
                                        <div className="col-8 text-white">
                                            <div>
                                                <h6>Reasonable Cost</h6>
                                                <p>Development company that provides excellent solutions to</p>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                                <div className="col-6 mb-4">
                                    <div className="row">
                                        <div className="col-4">
                                            <img src={foto4} alt=""/>
                                        </div>
                                        <div className="col-8 text-white">
                                            <div>
                                                <h6>Talantes Business Analysis</h6>
                                                <p>Development company that provides excellent solutions to</p>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                                <div className="col-6 mb-4">
                                    <div className="row">
                                        <div className="col-4">
                                            <img src={foto5} alt=""/>
                                        </div>
                                        <div className="col-8 text-white">
                                            <div>
                                                <h6>24/7 Support</h6>
                                                <p>Development company that provides excellent solutions to</p>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                                <div className="col-6 mb-4">
                                    <div className="row">
                                        <div className="col-4">
                                            <img src={foto6} alt=""/>
                                        </div>
                                        <div className="col-8 text-white">
                                            <div>
                                                <h6>Exprienced Team</h6>
                                                <p>Development company that provides excellent solutions to</p>
                                            </div>

                                        </div>
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

export default Advantages;