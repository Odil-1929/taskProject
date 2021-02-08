import React, {Component} from 'react';
import '../component/main.css'
import mobileBAck from  '../component/image/mobileBAck.png'
import MainNavbar from "./MainNavbar";

class MobileDevelopNavbar extends Component {
    render() {
        return (

                <section id='mobiledevelopnavbar'>
                    <MainNavbar/>

                    <div className="container mt-5">
                        <div className="row mb-5">
                            <div className="col-4">
                                <h1>Mobile development</h1>
                            </div>
                            <div className="col-6 pl-0 pr-4 d-flex justify-content-center">
                                <button type="button" className='btn pt-0 pb-0 mr-4 ml-auto border-0 '>TO ORDER</button>
                                <button type="button" className='btn pt-0 pb-0 border-0'>CONSULT</button>
                            </div>

                        </div>
                    </div>

                    <img src={mobileBAck} className="w-100 mt-4 mb-5" alt=""/>

                    <div className="container second">
                        <div className="row">


                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem beatae enim iure modi nam
                                quis
                                repellat tempora. Fugiat harum itaque labore natus nostrum officia recusandae.</p>
                            <br/>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis, illum quisquam?</p>


                        </div>
                    </div>




                </section>

        );
    }
}

export default MobileDevelopNavbar;