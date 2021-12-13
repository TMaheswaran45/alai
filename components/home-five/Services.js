import React, { Component } from 'react';
import Link from 'next/link';
import * as Icon from 'react-feather';
import ReactWOW from 'react-wow'

class Services extends Component {
    render() {
        return (
            <section className="iot-services-area ptb-80">
                <div className="container">
                    <div className="section-title">
                        <h2>Futuristic Solutions we have delivered</h2>
                        <div className="bar"></div>
                        <p>The last 4 years our team has been at work on creating top of the class solutions for multiple domains and deployed across the world </p>
                    </div>

                    <div className="row">
                        <div className="col-lg-4 col-md-6">
                            <div className="single-repair-services bg9">
                                <div className="icon">
                                    <i className="flaticon-cloud text-dark"></i>
                                </div>

                                <h3 class>IIoT Sensors and AI Edge Systems</h3>
                                <p class>Industrial Vision System,Robotic Arm,Smart Vehicle Entry System</p>
                                <Link href="/iiot-sensors-ai-edge?style=default">
                                    <a><Icon.ArrowRight /></a>
                                </Link>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6">
                            <div className="single-repair-services bg7">
                                <div className="icon">
                                    <i className="flaticon-layout"></i>
                                </div>

                                <h3>Smart ERP Solutions</h3>
                                <p>CRM,HRMS,Marketing Management,Finance & Inventory Management</p>

                                <Link href="/erp-software?style=default">
                                    <a><Icon.ArrowRight /></a>
                                </Link>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6">
                            <div className="single-repair-services bg2">
                                <div className="icon">
                                    <i className="flaticon-gear"></i>
                                </div>

                                <h3>Smart Property</h3>
                                <p>Visitor Management,Automated Vehicle Access,Incident Management System,Facility Reservation</p>

                                <Link href="/smart-property?style=default">
                                    <a><Icon.ArrowRight /></a>
                                </Link>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6">
                            <div className="single-repair-services bg3">
                                <div className="icon">
                                    <i className="flaticon-delivery-truck"></i>
                                </div>

                                <h3>Smart Waste Management</h3>
                                <p>Smart Homes, Visitor Management, Security Cameras</p>

                                <Link href="/waste-management-system?style=default">
                                    <a><Icon.ArrowRight /></a>
                                </Link>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6">
                            <div className="single-repair-services bg1">
                                <div className="icon">
                                    <i className="flaticon-skyline"></i>
                                </div>

                                <h3>Smart Offices</h3>
                                <p>Smart Lockers,Biometric Access Control,Facility Booking </p>
                                <Link href="/smart-office?style=default">
                                    <a><Icon.ArrowRight /></a>
                                </Link>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6">
                            <div className="single-repair-services bg5">
                                <div className="icon">
                                    <i className="flaticon-factory"></i>
                                </div>

                                <h3>Smart Port</h3>
                                <p>Add Intelligence to existing systems,Tracking</p>
                                <Link href="/smart-port?style=default">
                                    <a><Icon.ArrowRight /></a>
                                </Link>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6">
                            <div className="single-repair-services bg6">
                                <div className="icon">
                                    <i className="flaticon-chip"></i>
                                </div>

                                <h3>Software Development</h3>
                                <p>App Development, AI & Machine Learning,BPM,RPA</p>

                                <Link href="/sw-development?style=default">
                                    <a><Icon.ArrowRight /></a>
                                </Link>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6">
                            <div className="single-repair-services bg4">
                                <div className="icon">
                                    <i className="flaticon-shield"></i>
                                </div>

                                <h3>Smart Hospitals</h3>
                                <p>Blue Genie - Smart Health Assistant,Patient Monitoring</p>

                                <Link href="/smart-hospital?style=default">
                                    <a><Icon.ArrowRight /></a>
                                </Link>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6">
                            <div className="single-repair-services bg8">
                                <div className="icon">
                                    <i className="flaticon-handshake"></i>
                                </div>

                                <h3>Our Success story</h3>
                                <p>ALAI Labs Sucess Story <br/> Click here</p>

                                <Link href="/our-success-story?style=default">
                                    <a><Icon.ArrowRight /></a>
                                </Link>
                            </div>
                        </div>

                        

                    </div>
                    {/* <div className="repair-main-banner">
                        <div className="container">
                            <div className="section-title">
                                <h2>Our Technology Stack</h2>
                                <div className="bar">
                                </div>
                            </div>
                            {/* <div className="row align-items-center">
                                <div className="col-lg-12">
                                    <div className="repair-banner-image">
                                        <ReactWOW delay='0.6s' animation='zoomIn'>
                                            <img
                                                src={require('../../static/images/our-technology1.jpg')}
                                                data-wow-delay="0.6s"
                                                alt="image"
                                            />
                                        </ReactWOW>
                                    </div>
                                </div>
                            </div> 
                        </div>
                    </div>  */}
                </div>
            </section>
        );
    }
}

export default Services;
