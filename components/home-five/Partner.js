import React, { Component } from 'react';
import OwlCarousel from 'react-owl-carousel3';

const options = {
    loop: true,
    nav: false,
    dots: false,
    autoplay: true,
    smartSpeed: 1000,
    autoplayTimeout: 3000,
    responsive: {
        0:{
            items:1,
        },
        768:{
            items:1,
        },
        1200:{
            items:1,
        }
    }
}


class Partner extends Component {
    render() {
        return (
            <section className="iot-partner-area bg-f9fafb">
                <div className="container">
                <div className="section-title ">
                                <h2>Our Technology Stack</h2>
                                <div className="bar">
                                </div>
                            </div>
                    <div className="row">
                           
                        <OwlCarousel 
                            className="repair-partner-slides owl-theme"
                            {...options}
                        >
                            <div className="col-lg-12 col-md-12">
                                <div className="single-repair-partner">
                                    <a href="#">
                                        <img src={require('../../static/images/partner-img/partnerslider1.jpg')} alt="image" />
                                        <img src={require('../../static/images/partner-img/partnerslider1.jpg')} alt="image" />
                                    </a>
                                </div>
                            </div>

                            <div className="col-lg-12 col-md-12">
                                <div className="single-repair-partner">
                                <a href="#">
                                        <img src={require('../../static/images/partner-img/partnerslider2.jpg')} alt="image" />
                                        <img src={require('../../static/images/partner-img/partnerslider2.jpg')} alt="image" />
                                    </a>
                                </div>
                            </div>

                            <div className="col-lg-12 col-md-12">
                                <div className="single-repair-partner">
                                <a href="#">
                                        <img src={require('../../static/images/partner-img/partnerslider3.jpg')} alt="image" />
                                        <img src={require('../../static/images/partner-img/partnerslider3.jpg')} alt="image" />
                                    </a>
                                </div>
                            </div>

                            <div className="col-lg-12 col-md-12">
                                <div className="single-repair-partner">
                                <a href="#">
                                        <img src={require('../../static/images/partner-img/partnerslider4.jpg')} alt="image" />
                                        <img src={require('../../static/images/partner-img/partnerslider4.jpg')} alt="image" />
                                    </a>
                                </div>
                            </div>

                            
                        </OwlCarousel>
                    </div>
                </div>
            </section>
        );
    }
}

export default Partner;
