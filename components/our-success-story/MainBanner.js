import React, { Component } from 'react';
import Link from 'next/link';
import ReactWOW from 'react-wow'
import * as Icon from 'react-feather'
class MainBanner extends Component {
    render() {
        return (
            <div className="repair-main-banner">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-12">
                            <div className="repair-banner-image">
                                <ReactWOW delay='0.6s' animation='zoomIn'>
                                    <img
                                        src={require('../../static/images/our-success-stories.jpg')}
                                        className="wow zoomIn"
                                        data-wow-delay="0.6s"
                                        alt="image"
                                    />
                                </ReactWOW>
                            </div>
                        </div>
                    </div>

                    <div className="row align-items-center">
                        <div className="col-lg-6"><br /><br /></div>
                        <div className="col-lg-6"><br /><br /></div>
                    </div>

                    <section className="team-area ptb-80 bg-f9f6f6">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-6 col-md-6">
                                    <div className="single-team">
                                        <div className="team-image">
                                            <img src={require("../../static/images/team-image/client1.png")} alt="image" />
                                        </div>

                                        <div className="team-content">
                                            <div className="team-info">
                                                {/* <h5>On-Demand Cleaning Platform for optimized resource planning integrated with cover drain, smart dust bin, and on-road litter monitoring system.</h5> */}
                                                {/* <span>CEO & Founder</span> */}
                                            </div>
                                            <p>On-Demand Cleaning Platform for optimized resource planning integrated with cover drain, smart dust bin, and on-road litter monitoring system.
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-lg-6 col-md-6">
                                    <div className="single-team">
                                        <div className="team-image">
                                            <img src={require("../../static/images/team-image/client2.png")} alt="image" />
                                        </div>

                                        <div className="team-content">
                                            <div className="team-info">
                                                {/* <h3>Tirumangalakudi Viswanathan</h3>
                                                <span>Director and Co-Founder</span> */}
                                            </div>



                                            <p>Vision-based asset tracking (track cranes and terminal tractors) to enable digital transformation. POC and a successful case study conducted.
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-lg-6 col-md-6">
                                    <div className="single-team">
                                        <div className="team-image">
                                            <img src={require("../../static/images/team-image/client3.png")} alt="image" />
                                        </div>

                                        <div className="team-content">
                                            <div className="team-info">
                                                {/* <h3>Janny Cotller</h3>
                                                <span>Web Developer</span> */}
                                            </div>



                                            <p>Face recognition-based solution for office space automation, including smart lockers and access control system.
                                            </p>
                                        </div>
                                    </div>
                                </div>


                                <div className="col-lg-6 col-md-6">
                                    <div className="single-team">
                                        <div className="team-image">
                                            <img src={require("../../static/images/team-image/client4.png")} alt="image" />
                                        </div>

                                        <div className="team-content">
                                            <div className="team-info">
                                                {/* <h3>Corey Anderson</h3>
                                                <span>Project Manager</span> */}
                                            </div>



                                            <p>Intelligent patrol system based on vision and edge processing solution to enhance remote monitoring.
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-lg-6 col-md-6">
                                    <div className="single-team">
                                        <div className="team-image">
                                            <img src={require("../../static/images/team-image/client5.png")} alt="image" />
                                        </div>

                                        <div className="team-content">
                                            <div className="team-info">
                                                {/* <h3>Josh Buttler</h3>
                                                <span>CEO & Founder</span> */}
                                            </div>



                                            <p>Vision-based intelligent traffic monitoring system inside the terminal to achieve traffic flow trend analysis and control high mast lights based on the traffic flow intensity to save power. 

                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-lg-6 col-md-6">
                                    <div className="single-team">
                                        <div className="team-image">
                                            <img src={require("../../static/images/team-image/client6.png")} alt="image" />
                                        </div>

                                        <div className="team-content">
                                            <div className="team-info">
                                                {/* <h3>Alex Maxwel</h3>
                                                <span>Marketing Manager</span> */}
                                            </div>



                                            <p>Bio-mass monitoring system designed with edge image processing technology. The solution is deployed in a remote area with low infrastructure (connectivity and power).
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-lg-6 col-md-6">
                                    <div className="single-team">
                                        <div className="team-image">
                                            <img src={require("../../static/images/team-image/client7.png")} alt="image" />
                                        </div>

                                        <div className="team-content">
                                            <div className="team-info">
                                                {/* <h3>Janny Cotller</h3>
                                                <span>Web Developer</span> */}
                                            </div>



                                            <p>Mass footfall monitoring system with zone-based monitoring and smart access system (Face recognition)
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-lg-6 col-md-6">
                                    <div className="single-team">
                                        <div className="team-image">
                                            <img src={require("../../static/images/team-image/client8.png")} alt="image" />
                                        </div>

                                        <div className="team-content">
                                            <div className="team-info">
                                                {/* <h3>Jason Statham</h3>
                                                <span>UX/UI Designer</span> */}
                                            </div>
                                            <p>Vision-based tracking and face recognition solution for indoor occupancy monitoring and trend analysis
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                </div>
            </div>
        );
    }
}

export default MainBanner;
