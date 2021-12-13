import React from 'react'
import * as Icon from 'react-feather'
import ReactWOW from 'react-wow'
import { Preloader, Placeholder } from 'react-preloading-screen'
import NoSSR from 'react-no-ssr'
import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemPanel,
    AccordionItemButton
} from 'react-accessible-accordion';
import 'react-accessible-accordion/dist/fancy-example.css';
import 'isomorphic-fetch'


export default function FacilityMangementFeaturesContent() {
    return (
        <React.Fragment>
            <section className="features-details-area ">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-12">
                            <div className="repair-banner-content">
                                <h4>What is Facility management?</h4>
                                <p>End to End Facility Management & Integrated Workplace Management software that </p>
                                <ul>
                                    <li>Simplifies your operations</li> <br />
                                    <li>Cost reduction </li> <br />
                                    <li>Improves efficiencies</li><br />
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="row align-items-center">
                        <div className="col-lg-6 features-details-image">
                            <img
                                src={require('../../static/images/Facility-Management.jpg')}
                                className="wow zoomIn"
                                data-wow-delay="0.6s"
                                alt="image"
                            />
                        </div>

                        <div className="col-lg-6 features-details">
                            <div className="features-details-desc">
                                <h3>Instant Feedback System</h3>
                                <p> ● Collect feedback from occupants and raise helpdesk calls through web, mobile and kiosk devices, customizable user interfaces.</p>
                                <h3>Facility Booking System</h3>
                                <p> ● Schedule a meeting , booking of meeting rooms via kiosk / touch displays, visual booking, attendees pre-registration with visitor management, automate facility reservation.</p>
                                <h3>Instant Feedback System</h3>
                                <p> ● Visitor self sign-in / out, interactive visitor management kiosk to scan visitors, black listed verification.</p>
                         
                            </div>
                        </div>
                    </div>

                    {/*<div className="separate"></div>*/}

                </div>

            </section>

            {/* <!-- 9 features or CRM --> */}

            <div className="col-lg-6"><br /><br /></div>

            <section className="features-area bg-f9f6f6">
                <div className="container">

                    <div className="col-lg-12"><br /><br /></div>
                    <h3>How Feedback system works?</h3>
                    <div className="row">
                        <div className="col-lg-4 col-md-4 pb-1">
                            <div className="single-features">
                                <div className="icon">
                                    <Icon.Camera />
                                </div>

                                <h3>Step 1:</h3>
                                <img
                                    src={require('../../static/images/facility-management-qr.png')}
                                    className="wow zoomIn"
                                    alt="image" height="490px" width="500px"
                                />
                                <p>
                                    Scan the QR Code Using your Mobile QR Scanner will redirect to the feedback form.

                                </p>
                                
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-4 pb-1">
                            <div className="single-features">
                                <div className="icon">
                                    <Icon.Edit />
                                </div>

                                <h3>Step 2:</h3>
                                <img
                                    src={require('../../static/images/facility-management-feedback.jpeg')}
                                    className="wow zoomIn"
                                    alt="image" height="575px" width="500px"
                                />
                                <p>
                                    <br/>
                                    Now You can Access the Feedback form with help of your browser Ex: Have any Cleanliness in the Garden area you can give your grievances with help of the Feedback form

                                </p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-4 pb-1">
                            <div className="single-features">
                                <div className="icon">
                                    <Icon.Layers />
                                </div>

                                <h3>Step 3:</h3>
                                <img
                                    src={require('../../static/images/dash-qr.jpg')}
                                    className="wow zoomIn"
                                    alt="image" 
                                />
                                <p>
                                    We give an attractive Dashboard for an Admin use it helps to admin can view complaints and assign to the concerned department, Once Issue solved both of admin and user got a notification.

                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* <!-- End Features Area --> */}

        </React.Fragment>
    )
}
