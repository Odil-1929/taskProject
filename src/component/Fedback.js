import React, {Component} from 'react';
import '../component/main.css'
import fedbackback from '../component/image/fedbackback.png'
import fudbackphoto from '../component/image/fudbackphoto.png'

class Fedback extends Component {
    render() {
        return (
            <section id='fedback'>
                <div className="container">
                    <div className="row">
                        <div className="col-3">
                            <div className="chiziq-6">
                            </div>
                            <h1 className='mt-5'>Feedback from our clients</h1>
                        </div>
                        <div className="col-9">
                            <div className="row">
                                <div className="col-4">
                                    <img src={fudbackphoto} alt=""/>
                                </div>
                                <div className="col-8">
                                    <div className='knopka'>
                                        <button type='button' className='h-50 btn btn-outline-secondary mr-3'>&#8592;</button>
                                        <button type='button' className='h-50 btn btn-outline-secondary'>&#8594;</button>
                                    </div>

                                    <div>
                                        <h4 className='text-white'>— Billy Gach</h4>
                                        <p className='text-secondary mt-5'>“We are a web & app development company that provides excellent solutions to
                                            your problems pushing your business forward.</p>
                                        <p className='text-secondary'>Our team consists of senior developers to deliver projects on time and
                                            maintain high code standards.</p>
                                        <p className='text-secondary'>“We are a web & app development company that provides excellent solutions to
                                            your problems pushing your business forward.</p>
                                        <p className='text-secondary'>Our team consists of senior developers to deliver projects on time and
                                            maintain high code standards.</p>
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

export default Fedback;