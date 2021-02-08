import React, {Component} from 'react';
import Slider from "react-slick"
import jane1 from "../component/image/janedory1.png"
import jane2 from "../component/image/janedory2.png"
import jane3 from "../component/image/manager2.png"
import jane4 from "../component/image/design.png"
// import jane5 from "../component/image/designerGess.png"
import Carousel from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';
import '@brainhubeu/react-carousel';



class Team extends Component {
    render() {
        const settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true
        };

        return (
            <section id="carousel">
                <div className='container'>
                    <div>
                        <div className='chizziq-achieve '>
                        </div>
                        <div className='d-flex justify-content-between'>
                            <h1 className='text-white mb-5'>Our Team</h1>
                            <div>
                                <button type='button' className='btn btn-outline-light mr-3 h-50'>&#8592;</button>
                                <button type='button' className='btn btn-outline-light h-50'>&#8594;</button>
                            </div>
                        </div>

                    </div>
                    <div className="row">
                        <div className="col-12  mt-5">


                            <Carousel
                                slidesPerPage={5}
                                slidesPerScroll={2}
                                infinite
                                clickToChange
                                centered
                                breakpoints={{
                                    1000: { // these props will be applied when screen width is less than 1000px
                                        slidesPerPage: 2,
                                        clickToChange: false,
                                        centered: false,
                                        arrows: true,
                                        infinite: false,
                                    },
                                    500: {
                                        slidesPerPage: 1,
                                        slidesPerScroll: 1,
                                        clickToChange: false,
                                        centered: false,
                                        arrowLeft: (<button type='button' className='btn btn-light mr-3 h-50'>&#8592;</button>),
                                        arrowRight: (<button type='button' className='btn btn-light h-50' name="arrow-right">&#8594;</button>),
                                        animationSpeed: 2000,
                                        infinite: false,
                                    },
                                }}
                            >
                                <div className='ml-3'>
                                    <img src={jane1} alt=""  className='w-100 mb-4'/>
                                    <h4 className='mb-3 text-white'>Jane Dory</h4>
                                    <h6 className='text-secondary'>Designer, Gess</h6>
                                </div>
                                <div className='ml-3'>
                                    <img src={jane2} alt=""  className='w-100 mb-4'/>
                                    <h4 className='mb-3 text-white'>Jane Dory</h4>
                                    <h6 className='text-secondary'>CEO Flenkler</h6>
                                </div>
                                <div className='ml-3'>
                                    <img src={jane3} alt=""  className='w-100 mb-4'/>
                                    <h4 className='mb-3 text-white'>Jane Dory</h4>
                                    <h6 className='text-secondary'>Manager</h6>
                                </div>
                                <div className='ml-3'>
                                    <img src={jane4} alt=""  className='w-100 mb-4'/>
                                    <h4 className='mb-3 text-white'>Jane Dory</h4>
                                    <h6 className='text-secondary'>Design studio</h6>
                                </div>
                                {/*<div className='ml-3'>*/}
                                {/*    <img src={jane5} alt=""  className='w-100 h-75 mb-4'/>*/}
                                {/*    <h4 className='mb-3 text-white'>Jane Dory</h4>*/}
                                {/*    <h6 className='text-secondary'>Designer, Gess</h6>*/}
                                {/*</div>*/}
                            </Carousel>


                            {/*<Slider setings={settings}></Slider>*/}
                            {/*<Carousel>*/}
                            {/*<Slider {...settings}>*/}
                            {/*    <div className="row d-flex justify-content-between">*/}
                            {/*        <div className="col-3 mr-5">*/}
                            {/*            <img src={jane1} alt="" className='mb-4'/>*/}
                            {/*            <h4 className='mb-3 text-white'>Jane Dory</h4>*/}
                            {/*            <h6 className='text-secondary'>Designer, Gess</h6>*/}
                            {/*        </div>*/}
                            {/*        <div className="col-3 mx-5">*/}
                            {/*            <img src={jane2} alt="" className='mb-4'/>*/}
                            {/*            <h4 className='mb-3 text-white'>Jane Dory</h4>*/}
                            {/*            <h6 className='text-secondary'>CEO Flenkler </h6>*/}
                            {/*        </div>*/}
                            {/*        <div className="col-3 mx-5">*/}
                            {/*            <img src={jane1} alt="" className='mb-4'/>*/}
                            {/*            <h4 className='mb-3 text-white'>Jane Dory</h4>*/}
                            {/*            <h6 className='text-secondary'>Manager</h6>*/}
                            {/*        </div>*/}
                            {/*        <div className="col-3 mx-5">*/}
                            {/*            <img src={jane2} alt="" className='mb-4'/>*/}
                            {/*            <h4 className='mb-3 text-white'>Jane Dory</h4>*/}
                            {/*            <h6 className='text-secondary'>Design studio</h6>*/}
                            {/*        </div>*/}
                            {/*        <div className="col-3 ml-5">*/}
                            {/*            <img src={jane1} alt="" className='mb-4'/>*/}
                            {/*            <h4 className='mb-3 text-white'>Jane Dory</h4>*/}
                            {/*            <h6 className='text-secondary'>Designer, Gess</h6>*/}
                            {/*        </div>*/}

                            {/*    </div>*/}

                            {/*</Slider>*/}

                        </div>
                    </div>
                </div>
            </section>

        );
    }
}

export default Team;