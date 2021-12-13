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
                                        src={require('../../static/images/city-banner-1.jpg')}
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
                                <p>New Team has a good mix of experience in AI, Machine Learning Algorithm and Training, App development on Android & Hybrid platforms, Business process modelling and Robotic Process Automation</p>
                            </div>
                        </div>
                    </div>

                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-6">
                                <div className="repair-banner-content">
                                    <h3>Industrial Vision System (Object counting, Identification, Quality check & Maintenance)</h3>
                                    <p>Industrial Vision system technology and methods used to provide imaging-based automatic inspection and analysis for such applications as automatic inspection, process control, and robot guidance, usually in industry. Industrial vision is the use of a camera or multiple cameras to inspect and analyze objects automatically, usually in an industrial or production environment. The camera may be programmed to check the position of something, its color, size or shape, or whether the object is there or not.</p>

                                    <Link href="/industrial-vision-system-features?style=default">
                                        <a className="btn btn-primary">Read more</a>
                                    </Link>
                                </div>
                            </div>

                            <div className="col-lg-6">
                                <div className="repair-banner-image">
                                    <ReactWOW delay='0.6s' animation='zoomIn'>
                                        <img
                                            src={require('../../static/images/Industrial-vision-system-3.jpg')}
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
                                            src={require('../../static/images/Robotic-Arm1.jpg')}
                                            className="wow zoomIn"
                                            data-wow-delay="0.6s"
                                            alt="image"
                                        />
                                    </ReactWOW>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="repair-banner-content">
                                    <h3>Robotic Arm (Handling, Assembly, Pick and Place)</h3>
                                    <h5>What is robotic Arm?</h5>
                                    <p>Robotic arms are machines that are programmed to execute a specific task or job quickly, efficiently, and extremely accurately. The typical applications of industrial robotic arms are welding, painting, assembly, pick and place for printed circuit boards, packaging, labeling, palletizing, product inspection, and testing. They also have the ability to assist in material handling and provide interfaces.</p>
                                    <Link href="/robotic-arm-features?style=default">
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
                                    <h3>Smart Vehicle Entry System</h3>
                                    <p>ANPR is image processing technology which is used to identify vehicles by their number plates using Optical Character Recognition. This technology is used in various security traffic applications such as access-control, entry & exit systems Like Apartment, Buildings, Industries, etc.,.</p>
                                    <Link href="/smart-vehicle-entry-features?style=default">
                                        <a className="btn btn-primary">Read more</a>
                                    </Link>
                                </div>
                            </div>

                            <div className="col-lg-6">
                                <div className="repair-banner-image">
                                    <ReactWOW delay='0.6s' animation='zoomIn'>
                                        <img
                                            src={require('../../static/images/Smart-vehicle-entry-system.jpg')}
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
                                            src={require('../../static/images/Smart bin - 2.jpg')}
                                            className="wow zoomIn"
                                            data-wow-delay="0.6s"
                                            alt="image"
                                        />
                                    </ReactWOW>
                                </div>
                            </div>
                            
                            <div className="col-lg-6">
                                <div className="repair-banner-content">
                                    <h3>Smart Bin</h3>
                                    <p>The “smart bin” gather information on dustbin fill levels and once bin is full it can intimate. It helps reducing your organization’s carbon footprint.</p>
                                    <Link href="/smart-bin-features?style=default">
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
                                    <h3>Industrial Vision System (People counting and Identification) </h3>
                                    <p>People counting cameras are devices that count and monitor the flow and behavior of people visiting public places like airports, shopping centers, museums, and sports areas, etc. People counters can help to evaluate and compare the number of people visiting stores. They gather data by counting the number of people entering and exiting these places and by measuring their actions, sizes, and movement.</p>
                                    <Link href="/industrial-people-counting-features?style=default">
                                        <a className="btn btn-primary">Read more</a>
                                    </Link>
                                </div>
                            </div>

                            <div className="col-lg-6">
                                <div className="repair-banner-image">
                                    <ReactWOW delay='0.6s' animation='zoomIn'>
                                        <img
                                            src={require('../../static/images/people-counting-identification.jpg')}
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
                                            src={require('../../static/images/Face-Recognition.jpg')}
                                            className="wow zoomIn"
                                            data-wow-delay="0.6s"
                                            alt="image"
                                        />
                                    </ReactWOW>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="repair-banner-content">
                                    <h3>Face recognition Terminal</h3>
                                    <h5>What is Face recognition Terminal?</h5>
                                    <p>Face recognition terminal is a kind of access control device for face recognition, that is mainly applied in security access control systems, such as logistic centers, airports, university campuses, alarm centers, dwellings, etc.</p>
                                    <Link href="/face-recognition-terminal-features?style=default">
                                        <a className="btn btn-primary">Read more</a>
                                    </Link>
                                </div>
                            </div>

                            <div className="row align-items-center">
                            <div className="col-lg-6"><br /><br /></div>
                            <div className="col-lg-6"><br /><br /></div>
                        </div>

                            <div className="row align-items-center">
                                <div className="col-lg-6">
                                    <div className="repair-banner-content">
                                        <h3>UHF RFID Reader & RF Tag</h3>
                                        <h5>What is UHF RFID Reader & RF Tag?</h5>
                                        <p>A UHF RFID reader is a device using an Ultra-High Frequency (UHF) range, The RFID reader emits radio waves of specific frequencies through RFID antennas. The waves "give energy" to the tags so that they can communicate by emitting a unique ID. They do not need batteries and can be used for many years.</p>
                                        <Link href="/uhf-rfid-reader-features?style=default">
                                            <a className="btn btn-primary">Read more</a>
                                        </Link>
                                    </div>
                                </div>

                                <div className="col-lg-6">
                                    <div className="repair-banner-image">
                                        <ReactWOW delay='0.6s' animation='zoomIn'>
                                            <img
                                                src={require('../../static/images/UHF-RFID-1.jpg')}
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
                                                src={require('../../static/images/POS.jpg')}
                                                className="wow zoomIn"
                                                data-wow-delay="0.6s"
                                                alt="image"
                                            />
                                        </ReactWOW>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="repair-banner-content">
                                        <h3>POS Billing Machine(Point of Sales)</h3>
                                        <h5>What is POS Billing Machine?</h5>
                                        <p>The POS billing machine is a point-of-sales billing machine that performs functions every time a sale is done. For example, updating inventory, generating an invoice, maintaining stock, etc. The retail POS billing machine is User friendly and automates your business.</p>
                                        <Link href="/pos-billing-machine-features?style=default">
                                            <a className="btn btn-primary">Read more</a>
                                        </Link>
                                    </div>
                                </div>
                            </div>

                            <div className="row align-items-center">
                                <div className="col-lg-6">
                                    <div className="repair-banner-content">
                                        <h3>Biometric Attendance System</h3>
                                        <h5>What is Biometric Attendance system?</h5>
                                        <p>Biometrics devices can be measure and verify the biological characteristics of a human. It can help to keep data of the schedule of Employees, volunteers, or students. It can maintain an exact record of the entry and exit times of the individual.</p>
                                        <Link href="/biometric-attendance-system-features?style=default">
                                            <a className="btn btn-primary">Read more</a>
                                        </Link>
                                    </div>
                                </div>

                                <div className="col-lg-6">
                                    <div className="repair-banner-image">
                                        <ReactWOW delay='0.6s' animation='zoomIn'>
                                            <img
                                                src={require('../../static/images/biometric.png')}
                                                className="wow zoomIn"
                                                data-wow-delay="0.6s"
                                                alt="image"
                                            />
                                        </ReactWOW>
                                    </div>
                                </div>
                            </div>
                            

                        </div>

                    </div>
                </div>
            </div>
        );
    }
}

export default MainBanner;
