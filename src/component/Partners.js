import React, {Component} from 'react';
import '../component/main.css'
import allstate1 from '../component/image/allstate1.png'
import atlantic from '../component/image/atlantic.png'
import itpark from '../component/image/itpark.png'
import ambition from '../component/image/ambition.png'

class Partners extends Component {
    render() {
        return (
            <section id='partners'>
                <div className="container">
                    <div className="chiziq5">
                    </div>

                    <div className="d-flex justify-content-between">
                        <h1 className='mt-4'>Our partners</h1>
                        <div>
                            <button type='button' className='h-50 btn btn-light mr-3'>&#8592;</button>
                            <button type='button' className='h-50 btn btn-light'>&#8594;</button>
                        </div>
                    </div>

                    <div className="row mt-5">
                        <div className="col-3">
                            <img src={allstate1} alt=""/>
                            <p className='mt-5'>“We are a web & app development company that provides excellent
                                solutions to your
                                problems pushing your business forward.
                            </p>
                        </div>
                        <div className="col-3 border-left-0">
                            <img src={atlantic} alt=""/>
                            <p className='mt-5'>“We are a web & app development company that provides excellent
                                solutions to your
                                problems pushing your business forward.
                            </p>
                        </div>
                        <div className="col-3 border-left-0">
                            <img src={itpark} alt=""/>
                            <p className='mt-5'>“We are a web & app development company that provides excellent
                                solutions to your
                                problems pushing your business forward.
                            </p>
                        </div>
                        <div className="col-3 border-left-0">
                            <img src={ambition} alt=""/>
                            <p className='mt-4'>“We are a web & app development company that provides excellent
                                solutions to your
                                problems pushing your business forward.
                            </p>
                        </div>
                    </div>

                </div>
            </section>
        );
    }
}

export default Partners;