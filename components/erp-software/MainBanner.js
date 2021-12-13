import React, { Component } from 'react';
import Link from 'next/link';
import ReactWOW from 'react-wow'

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
                                        src={require('../../static/images/erp1-banner.jpg')}
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

                    <div className="row align-items-center">
                        <div className="col-lg-12">
                            <div className="repair-banner-content">
                                <p>New Team has a good mix of experience in AI, Machine Learning Algorithm and Training, App development on Android & Hybrid platforms, Business process modelling and Robotic Process Automation.</p>
                            </div>
                        </div>
                    </div>

                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-6">
                                <div className="repair-banner-content">
                                    <h3>Customer Relationship  Management</h3>
                                    <h5>Why ALAI CRM ?</h5>
                                    <p>CRM helps to empowers your sales, marketing and customer support. With our completely unified interface, the platform enables businesses to get a complete visibility on every customer interaction. The unified interface, admin panel, setup, search, and provisioning comes as one of its kind in the industry to help businesses deliver exceptional customer experiences to your customer.</p>

                                    <Link href="/crm-features?style=default">
                                        <a className="btn btn-primary">Read more</a>
                                    </Link>
                                </div>
                            </div>

                            <div className="col-lg-6">
                                <div className="repair-banner-image">
                                    <ReactWOW delay='0.6s' animation='zoomIn'>
                                        <img
                                            src={require('../../static/images/CRM-2.jpg')}
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

                        <div className="row align-items-center">
                            <div className="col-lg-6">
                                <div className="repair-banner-image">

                                    <ReactWOW delay='0.6s' animation='zoomIn'>
                                        <img
                                            src={require('../../static/images/hr2.jpg')}
                                            className="wow zoomIn"
                                            data-wow-delay="0.6s"
                                            alt="image"
                                        />
                                    </ReactWOW>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="repair-banner-content">
                                    <h3>Human Resources Management</h3>
                                    <h5>Why ALAI HRM?</h5>
                                    <p>Let our HRM software handle your HR problems while you take care of your employees</p>
                                    <Link href="/hrm-features?style=default">
                                        <a className="btn btn-primary">Read more</a>
                                    </Link>
                                </div>
                            </div>


                        </div>

                        <div className="row align-items-center">
                            <div className="col-lg-6"><br /><br /></div>
                            <div className="col-lg-6"><br /><br /></div>
                        </div>


                        <div className="row align-items-center">
                            <div className="col-lg-6">
                                <div className="repair-banner-content">
                                    <h3>Marketing Management</h3>
                                    <h5>Why ALAI Marketing Management?</h5>
                                    <p>Marketing software is a very important tools because it helps to promote your business day to day marketing activities such as create brand awareness and to make your business stand out. Without marketing software, your business doesn't have a voice and you can't reach out and connect with people.</p>
                                    <Link href="/marketing-features?style=default">
                                        <a className="btn btn-primary">Read more</a>
                                    </Link>
                                </div>
                            </div>

                            <div className="col-lg-6">
                                <div className="repair-banner-image">
                                    <ReactWOW delay='0.6s' animation='zoomIn'>
                                        <img
                                            src={require('../../static/images/marketing-sq.jpg')}
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

                        <div className="row align-items-center">
                            <div className="col-lg-6">
                                <div className="repair-banner-image">

                                    <ReactWOW delay='0.6s' animation='zoomIn'>
                                        <img
                                            src={require('../../static/images/fin-inv-sq.jpg')}
                                            className="wow zoomIn"
                                            data-wow-delay="0.6s"
                                            alt="image"
                                        />
                                    </ReactWOW>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="repair-banner-content">
                                    <h3>Inventory & Finance Management</h3>
                                    <h5>What is Inventory management?</h5>
                                    <p>Alai Inventory management software helps to monitor, manage and control your inventories with ease</p>
                                    <Link href="/finance-inventory-features?style=default">
                                        <a className="btn btn-primary">Read more</a>
                                    </Link>
                                </div>
                            </div>


                        </div>

                        <div className="row align-items-center">
                            <div className="col-lg-6"><br /><br /></div>
                            <div className="col-lg-6"><br /><br /></div>
                        </div>

                        <div className="row align-items-center">
                            <div className="col-lg-6">
                                <div className="repair-banner-content">
                                    <h3>Facility Management</h3>
                                    <h5>What is Facility management?</h5>
                                    <p>End to End Facility Management & Integrated Workplace Management software that</p>
                                    <p>
                                        ● Simplifies your operations <br/>
                                        ● Cost reduction <br/>
                                        ● Improves efficiencies <br/>
                                    </p>
                                    <Link href="/facility-mangement-features?style=default">
                                        <a className="btn btn-primary">Read more</a>
                                    </Link>
                                </div>
                            </div>

                            <div className="col-lg-6">
                                <div className="repair-banner-image">
                                    <ReactWOW delay='0.6s' animation='zoomIn'>
                                        <img
                                            src={require('../../static/images/Facilities-Management2.jpg')}
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

                        <div className="repair-main-banner">
                            <div className="container">
                                <div className="section-title">
                                    <h2>ERP Modules </h2>
                                </div>
                                <div className="row align-items-center">
                                    <div className="col-lg-12">
                                        <div className="repair-banner-image">
                                            <ReactWOW delay='0.1s' animation='zoomIn'>
                                                <img
                                                    src={require('../../static/images/erp-modules1.png')}
                                                    data-wow-delay="0.1 s"
                                                    alt="image"
                                                />
                                            </ReactWOW>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* <div className="row align-items-center">
                            <div className="col-lg-6">
                                <div className="repair-banner-image">

                                    <ReactWOW delay='0.6s' animation='zoomIn'>
                                        <img
                                            src={require('../../static/images/Facilities-Management2.jpg')}
                                            className="wow zoomIn"
                                            data-wow-delay="0.6s"
                                            alt="image"
                                        />
                                    </ReactWOW>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="repair-banner-content">
                                <h3>Facility Management</h3>
                                    <h5>What is Facility management?</h5>
                                    <p>End to End Facility Management & Integrated Workplace Management software that</p>
                                    <ul>
                                        <li>Simplifies your operations</li>
                                        <li>Cost reduction</li>
                                        <li>Improves efficiencies</li>
                                    </ul>
                                    <Link href="#">
                                        <a className="btn btn-primary">Read more</a>
                                    </Link>
                                </div>
                            </div>


                        </div>*/}

                    </div>
                </div>
            </div>
        );
    }
}

export default MainBanner;
