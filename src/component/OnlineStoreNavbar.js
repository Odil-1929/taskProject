import React, {Component} from 'react';
import MainNavbar from "./MainNavbar";
import onlineStoreBack from "./image/onlineStoreBack.png";
import '../component/main.css'

class OnlineStoreNavbar extends Component {
    render() {
        return (
            <section id="onlinestorenavbar">
                <MainNavbar/>


                <div className="container mt-5">
                    <div className="row mb-5">
                        <div className="col-4">
                            <h1>Online Store</h1>
                        </div>
                        <div className="col-6 pl-0 pr-4 d-flex justify-content-center">
                            <button type="button" className='btn pt-0 pb-0 mr-4 ml-auto border-0 '>TO ORDER</button>
                            <button type="button" className='btn pt-0 pb-0 border-0'>CONSULT</button>
                        </div>

                    </div>
                </div>


                <img src={onlineStoreBack} className="w-100 mt-4" alt=""/>

                <div className="container second">
                    <div className="row flex-column">
                        <div className="col-5 p-5 bg-dark text-white mb-5">
                            <h4 className='mb-3'>"If you aren't on the internet you don't exist and soon you wll not be able
                                to sell either"</h4>
                            <h3 className='float-right'>-Bill Gates.</h3>
                        </div>

                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet, beatae?</p>
                        <br/>
                        <p>Lorem ipsum dolor sit amet.</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem beatae enim iure modi nam quis
                            repellat tempora. Fugiat harum itaque labore natus nostrum officia recusandae.</p>
                        <br/>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis, illum quisquam?</p>
                        <br/>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi, maiores.</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid aperiam debitis facere,
                            molestias necessitatibus nesciunt nulla repudiandae vel voluptates voluptatum.</p>
                    </div>
                </div>



            </section>
        );
    }
}

export default OnlineStoreNavbar;