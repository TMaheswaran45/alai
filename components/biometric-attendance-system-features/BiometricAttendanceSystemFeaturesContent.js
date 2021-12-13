import React from 'react'
import * as Icon from 'react-feather'
import ReactWOW from 'react-wow'
import { Preloader, Placeholder } from 'react-preloading-screen'
import NoSSR from 'react-no-ssr'


export default function BiometricAttendanceSystemFeaturesContent() {
    return (
        <React.Fragment>
            <section className="features-details-area ">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-12">
                            <div className="repair-banner-content">
                                <h4>What is Biometric Attendance system ?</h4>
                                <p>Biometrics devices can be measure and verify the biological characteristics of a human. It can help to keep data of the schedule of Employees, volunteers, or students. It can maintain an exact record of the entry and exit times of the individual.</p>

                            </div>
                        </div>


                    </div>
                    {/* <div className="separate"></div>  ptb-80*/}
                    <div className="row align-items-center">
                        <div className="col-lg-6 features-details">
                            <div className="features-details-desc">
                                <h3>Benefit of Biometric Attendance system ?</h3>
                                <p> ● Easy to Operate and User Friendly<br />
                                    ● Quick and Accurate Identification and Authentication<br />
                                    ● Record attendance reliably<br />
                                    ● Prevents fraud<br />
                                    ● Mobile Access and Authentication<br />
                                    ● Increased Security<br />                                
                                </p>
                                <div className="separate"></div>
                                
                                {/* <div className="separate"></div>
                                <ul className="features-details-list">
                                    <li>Create effective email campaigns to reach and interact with your customer.</li>
                                    <li>Proactively chat with your website visitors and convert them into potential customer.</li>
                                    <li>Create, schedule and deliver your social media content where your audiences are most likely to engage.</li>
                                    <li>Manage your sales pipeline, spot opportunities, increase win rates and grow your business.</li>
                                    <li>Provide unmatched customer service across multiple channels, languages and time zones.</li>
                                    <li>Plan, track and collaborate on client deliverables using our project management tools.</li>
                                    <li>Gain data-driven insights on your sales performance with smart dashboards and KPIs.</li>
                                    <li>Gather opinions, analyze results and discover better ways to exceed customer expectations.</li>
                                </ul>*/}
                            </div>
                        </div>

                        <div className="col-lg-6 features-details-image">
                            <img
                                src={require('../../static/images/biometric.png')}
                                className="wow zoomIn"
                                data-wow-delay="0.6s"
                                alt="image" height="900px" width="600px"
                            />
                        </div>


                    </div>

                    {/*<div className="separate"></div>*/}

                </div>

            </section>

            {/* <!-- 9 features or CRM --> ptb-80*/}
            {/*<section className="features-area bg-f9f6f6">
                <div className="container-fluid p-5">


                    <div className="row">
                        <div className="col-lg-4 col-md-4">
                            <div className="single-features">
                                <div className="icon">
                                    <Icon.Settings />
                                </div>

                                <h3>Sales Force Automation</h3>
                                <p>
                                    <ul>
                                        <li>Lead Management</li>
                                        <li>Deal Management</li>
                                        <li>Contact Management</li>
                                        <li>Workflow Automation</li>
                                    </ul>
                                </p>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-4">
                            <div className="single-features">
                                <div className="icon">
                                    <Icon.Mail />
                                </div>

                                <h3>Analytics</h3>
                                <p>
                                    <ul>
                                        <li>Reports</li>
                                        <li>Analytical Components</li>
                                        <li>Capabilities</li>

                                    </ul>
                                </p>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-4">
                            <div className="single-features">
                                <div className="icon bg-c679e3">
                                    <Icon.Grid />
                                </div>

                                <h3>Predictive Sales and Intelligence</h3>
                                <p><ul>
                                    <li>Lead & Deal Prediction</li>
                                    <li>Zia Voice</li>
                                    <li>Macro Suggestions</li>

                                </ul>
                                </p>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-4">
                            <div className="single-features">
                                <div className="icon bg-c679e3">
                                    <Icon.Info />
                                </div>

                                <h3>Process Management</h3>
                                <p><ul>
                                    <li>Sales Process Builder</li>
                                    <li>Processing Rules</li>
                                    <li>Review Process</li>
                                </ul>
                                </p>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-4">
                            <div className="single-features">
                                <div className="icon bg-eb6b3d">
                                    <Icon.Monitor />
                                </div>

                                <h3>Sales Enablement</h3>
                                <p><ul>
                                    <li>Quotes and Finance</li>
                                    <li>Partner Portals</li>
                                    <li>Calendar</li>
                                    <li>G-Suite and Office 365</li>
                                </ul></p>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-4">
                            <div className="single-features">
                                <div className="icon bg-eb6b3d">
                                    <Icon.Mail />
                                </div>

                                <h3>Customization</h3>
                                <p><ul>
                                    <li>Layouts</li>
                                    <li>Custom Components</li>
                                    <li>Views and Filters</li>
                                    <li>Global Selling</li>
                                </ul></p>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-4">
                            <div className="single-features">
                                <div className="icon bg-eb6b3d">
                                    <Icon.Mail />
                                </div>

                                <h3>Omnichannel</h3>
                                <p><ul>
                                    <li>Email</li>
                                    <li>Telephony</li>
                                    <li>Social</li>
                                    <li>Customer portals</li>
                                </ul></p>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-4">
                            <div className="single-features">
                                <div className="icon bg-eb6b3d">
                                    <Icon.Mail />
                                </div>

                                <h3>Performance Management</h3>
                                <p><ul>
                                    <li>Forecasting</li>
                                    <li>Territory Management</li>
                                    <li>Gamification</li>

                                </ul></p>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-4">
                            <div className="single-features">
                                <div className="icon bg-eb6b3d">
                                    <Icon.Mail />
                                </div>

                                <h3>Marketing Automation</h3>
                                <p><ul>
                                    <li> Customer Segmentation</li>
                                    <li>Lead Nurturing</li>
                                    <li>Google Ads Integration</li>
                                    <li>Event Management</li>
                                </ul></p>
                            </div>
                        </div>

                    </div>
                </div>
            </section>*/}


            {/* <!-- End Features Area --> */}

            {/* <!-- Start Features Area --> */}
            {/* <section className="features-area-two ptb-80 bg-f7fafd">
                <div className="container">
                    <div className="row h-100 justify-content-center align-items-center">
                        <div className="col-lg-6 col-md-12 services-content">
                            <div className="section-title">
                                <h2>Experience The Best Features Ever</h2>
                                <div className="bar"></div>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                            </div>

                            <div className="row">
                                <div className="col-lg-6 col-md-6">
                                    <div className="box">
                                        <Icon.Lock /> Secure & Fast
                                    </div>
                                </div>

                                <div className="col-lg-6 col-md-6">
                                    <div className="box">
                                        <Icon.Watch /> Rich experience
                                    </div>
                                </div>

                                <div className="col-lg-6 col-md-6">
                                    <div className="box">
                                        <Icon.Users /> Support Stuffs
                                    </div>
                                </div>

                                <div className="col-lg-6 col-md-6">
                                    <div className="box">
                                        <Icon.TrendingUp /> Forex trading
                                    </div>
                                </div>

                                <div className="col-lg-6 col-md-6">
                                    <div className="box">
                                        <Icon.Folder /> File backups
                                    </div>
                                </div>

                                <div className="col-lg-6 col-md-6">
                                    <div className="box">
                                        <Icon.Monitor /> Remote desktop
                                    </div>
                                </div>

                                <div className="col-lg-6 col-md-6">
                                    <div className="box">
                                        <Icon.Mail /> Email servers
                                    </div>
                                </div>

                                <div className="col-lg-6 col-md-6">
                                    <div className="box">
                                        <Icon.Cloud /> Hybrid cloud
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-6 col-md-12 services-right-image">
                                <ReactWOW delay='0.6s' animation='fadeInDown'>
                                    <img 
                                        src={require("../../static/images/services-right-image/book-self.png")} 
                                        className="wow fadeInDown" 
                                        data-wow-delay="0.6s" alt="book-self" 
                                    />
                                </ReactWOW>
                                <ReactWOW delay='0.6s' animation='fadeInUp'>
                                    <img 
                                        src={require("../../static/images/services-right-image/box.png")} 
                                        className="wow fadeInUp" 
                                        data-wow-delay="0.6s" 
                                        alt="box" 
                                    />
                                </ReactWOW>
                                <ReactWOW delay='0.6s' animation='fadeInLeft'>
                                    <img 
                                        src={require("../../static/images/services-right-image/chair.png")} 
                                        className="wow fadeInLeft" 
                                        data-wow-delay="0.6s" 
                                        alt="chair" 
                                    />
                                </ReactWOW>
                                <ReactWOW delay='0.6s' animation='zoomIn'>
                                    <img 
                                        src={require("../../static/images/services-right-image/cloud.png")} 
                                        className="wow zoomIn" 
                                        data-wow-delay="0.6s" 
                                        alt="cloud" 
                                    />
                                </ReactWOW>
                                <ReactWOW delay='0.6s' animation='bounceIn'>
                                    <img 
                                        src={require("../../static/images/services-right-image/cup.png")} 
                                        className="wow bounceIn" 
                                        data-wow-delay="0.6s" 
                                        alt="cup" 
                                    />
                                </ReactWOW>
                                <ReactWOW delay='0.6s' animation='fadeInDown'>
                                    <img 
                                        src={require("../../static/images/services-right-image/flower-top.png")} 
                                        className="wow fadeInDown" 
                                        data-wow-delay="0.6s" 
                                        alt="flower" 
                                    />
                                </ReactWOW>
                                <ReactWOW delay='0.6s' animation='zoomIn'>
                                    <img 
                                        src={require("../../static/images/services-right-image/head-phone.png")} 
                                        className="wow zoomIn" 
                                        data-wow-delay="0.6s" 
                                        alt="head-phone" 
                                    />
                                </ReactWOW>
                                <ReactWOW delay='0.6s' animation='fadeInUp'>
                                    <img 
                                        src={require("../../static/images/services-right-image/monitor.png")} 
                                        className="wow fadeInUp" 
                                        data-wow-delay="0.6s" 
                                        alt="monitor" 
                                    />
                                </ReactWOW>
                                <ReactWOW delay='0.6s' animation='rotateIn'>
                                    <img 
                                        src={require("../../static/images/services-right-image/mug.png")} 
                                        className="wow rotateIn" 
                                        data-wow-delay="0.6s" 
                                        alt="mug" 
                                    />
                                </ReactWOW>
                                <ReactWOW delay='0.6s' animation='fadeInUp'>
                                    <img 
                                        src={require("../../static/images/services-right-image/table.png")} 
                                        className="wow fadeInUp" 
                                        data-wow-delay="0.6s" 
                                        alt="table" 
                                    />
                                </ReactWOW>
                                <ReactWOW delay='0.6s' animation='zoomIn'>
                                    <img 
                                        src={require("../../static/images/services-right-image/tissue.png")} 
                                        className="wow zoomIn" 
                                        data-wow-delay="0.6s" 
                                        alt="tissue" 
                                    />
                                </ReactWOW>
                                <ReactWOW delay='0.6s' animation='zoomIn'>
                                    <img 
                                        src={require("../../static/images/services-right-image/water-bottle.png")} 
                                        className="wow zoomIn" 
                                        data-wow-delay="0.6s" 
                                        alt="water-bottle" 
                                    />
                                </ReactWOW>
                                <ReactWOW delay='0.6s' animation='fadeInLeft'>
                                    <img 
                                        src={require("../../static/images/services-right-image/wifi.png")} 
                                        className="wow fadeInLeft" 
                                        data-wow-delay="0.6s" 
                                        alt="wifi" 
                                    />
                                </ReactWOW>
                            <img 
                                src={require("../../static/images/services-right-image/cercle-shape.png")} 
                                className="bg-image rotateme" 
                                alt="shape" 
                            />
                            <ReactWOW delay='0.6s' animation='fadeInUp'>
                                <img 
                                    src={require("../../static/images/services-right-image/service-right-main-pic.png")} 
                                    className="wow fadeInUp" 
                                    data-wow-delay="0.6s" 
                                    alt="main-pic" 
                                />
                            </ReactWOW>
                        </div>
                    </div>
                </div>
            </section>*/}
            {/* <!-- End Features Area --> */}

            {/* <!-- Start Features Area --> */}
            {/*<section className="features-area-two ptb-80">
                <div className="container">
                    <div className="row h-100 justify-content-center align-items-center">
                        {/*<div className="col-lg-6 col-md-12 services-left-image">
                            <ReactWOW delay='0.6s' animation='fadeInDown'>
                                <img 
                                    src={require("../../static/images/services-left-image/big-monitor.png")} 
                                    className="wow fadeInDown" 
                                    data-wow-delay="0.6s" 
                                    alt="big-monitor" 
                                />
                            </ReactWOW>
                            <ReactWOW delay='0.6s' animation='fadeInUp'>
                                <img 
                                    src={require("../../static/images/services-left-image/creative.png")} 
                                    className="wow fadeInUp" 
                                    data-wow-delay="0.6s" 
                                    alt="creative" 
                                />
                            </ReactWOW>
                            <ReactWOW delay='0.6s' animation='fadeInLeft'>
                                <img 
                                    src={require("../../static/images/services-left-image/developer.png")} 
                                    className="wow fadeInLeft" 
                                    data-wow-delay="0.6s" 
                                    alt="developer"
                                />
                            </ReactWOW>
                            <ReactWOW delay='0.6s' animation='zoomIn'>
                                <img 
                                    src={require("../../static/images/services-left-image/flower-top.png")} 
                                    className="wow zoomIn" 
                                    data-wow-delay="0.6s" 
                                    alt="flower-top"
                                />
                            </ReactWOW>
                            <ReactWOW delay='0.6s' animation='bounceIn'>
                                <img 
                                    src={require("../../static/images/services-left-image/small-monitor.png")} 
                                    className="wow bounceIn" 
                                    data-wow-delay="0.6s" 
                                    alt="small-monitor"
                                />
                            </ReactWOW>
                            <ReactWOW delay='0.6s' animation='fadeInDown'>
                                <img 
                                    src={require("../../static/images/services-left-image/small-top.png")} 
                                    className="wow fadeInDown" 
                                    data-wow-delay="0.6s" 
                                    alt="small-top"
                                />
                            </ReactWOW>
                            <ReactWOW delay='0.6s' animation='zoomIn'>
                                <img 
                                    src={require("../../static/images/services-left-image/table.png")} 
                                    className="wow zoomIn" 
                                    data-wow-delay="0.6s" 
                                    alt="table"
                                />
                            </ReactWOW>
                            <ReactWOW delay='0.6s' animation='fadeInUp'>
                                <img 
                                    src={require("../../static/images/services-left-image/target.png")} 
                                    className="wow fadeInUp" 
                                    data-wow-delay="0.6s" 
                                    alt="target"
                                />
                            </ReactWOW>
                        
                            <img 
                                src={require("../../static/images/services-left-image/cercle-shape.png")} 
                                className="bg-image rotateme" 
                                alt="shape"
                            />
                            <ReactWOW delay='0.6s' animation='fadeInUp'>
                                <img 
                                    src={require("../../static/images/services-left-image/service-left-main-pic.png")} 
                                    className="wow fadeInUp" 
                                    data-wow-delay="0.6s" 
                                    alt="main-pic"
                                />
                            </ReactWOW>
                        </div>

                        <div className="col-lg-6 col-md-12 services-content">
                            <div className="section-title">
                                <h2>What Our Software Can Do For You</h2>
                                <div className="bar"></div>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                            </div>
                            {/* <div className="row">
                                <div className="col-lg-6 col-md-6">
                                    <div className="box">
                                        <Icon.Layout /> Responsive design
                                    </div>
                                </div>

                                <div className="col-lg-6 col-md-6">
                                    <div className="box">
                                        <Icon.Code /> React web development
                                    </div>
                                </div>

                                <div className="col-lg-6 col-md-6">
                                    <div className="box">
                                        <Icon.Smartphone /> Android apps development
                                    </div>
                                </div>

                                <div className="col-lg-6 col-md-6">
                                    <div className="box">
                                        <Icon.Code /> Laravel web development
                                    </div>
                                </div>

                                <div className="col-lg-6 col-md-6">
                                    <div className="box">
                                        <Icon.Smartphone /> iOS apps development
                                    </div>
                                </div>

                                <div className="col-lg-6 col-md-6">
                                    <div className="box">
                                        <Icon.Percent /> UX/UI design
                                    </div>
                                </div>

                                <div className="col-lg-6 col-md-6">
                                    <div className="box">
                                        <Icon.ShoppingCart /> E-commerce development
                                    </div>
                                </div>

                                <div className="col-lg-6 col-md-6">
                                    <div className="box">
                                        <Icon.CheckCircle /> Print ready design
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>*/}
        </React.Fragment>
    )
}
