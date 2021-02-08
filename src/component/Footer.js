import React, {Component} from 'react';
import '../component/main.css'
import telegramm from  '../component/image/telegramm.svg'
import facebook from '../component/image/facebook.svg'
import instagramm from '../component/image/instagramm.png'

class Footer extends Component {
    render() {
        return (
            <footer>
                <div className="container">
                    <div className="row pt-5">
                        <div className="col-5 text-white mt-4 ml-auto">
                            <h4>TECH YARD SOLUTION</h4>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br/> Duis sed velit euismod, iaculis
                                velit et, viverra nisl. Mauris <br/> quis varius nulla</p>
                        </div>
                        <div className="col-4 text-white mt-5 ml-auto pl-5">
                            <h4>Address</h4>
                            <p>6100 Lake Ellenor Drive STE 174 <br/> Orlando FL 32809</p>
                        </div>

                        <div className="col-3 text-white mt-5 pl-5">
                            <h4>Contact us</h4>
                            <p>1 (518) 401-8276 <br/>
                                info@techyardsolutions.com</p>
                        </div>
                    </div>
                    <div className='d-flex '>
                        <h3 className='mr-5 text-white'>Follow us:</h3>
                        <a href="#"><img className=' mt-3 mr-4' src={telegramm} alt=""/></a>
                        <a href="#"><img className=' mt-3 mr-4' src={facebook} alt=""/></a>
                        <a href="#"><img className='bg-white w-75 h-25 mt-3' src={instagramm} alt=""/></a>
                    </div>
                    <div className="chiziqfooter">
                    </div>
                    <div className="row justify-content-between">
                        <h6>Copyrights © 2021 All Rights Reserved by Tech Yard Solutions</h6>
                        <h6>Privacy policy</h6>
                    </div>
                </div>

            </footer>

        );
    }
}

export default Footer;