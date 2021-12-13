import React from 'react'
import Link from 'next/link'
import * as Icon from 'react-feather'

export default class Footer extends React.Component {
    render() {
        return (
            <footer className="footer-area bg-f7fafd">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 col-md-6">
                            <div className="single-footer-widget">
                                <div className="logo">
                                    <Link href="#">
                                        <a>
                                            <img src={require("../../static/images/alai_logo.png")} alt="logo" width="150px"/>
                                        </a>
                                    </Link>
                                </div>
                                <p class="text-justify">Alai Labs is an IoT Technology company based in Singapore with a development center in India. <br />At ALAI Labs, we are passionate about developing next-generation ingenious solutions. Our Products are affordable without compromising on the capability / quality.</p>
                            </div>
                        </div>



                        <div className="col-lg-4 col-md-6">
                            <div className="single-footer-widget">
                                <h3>India (Development Center)</h3>
                                <h6>ALAI TECHNOLOGY LABS INDIA PRIVATE LIMITED</h6>
                                <ul className="footer-contact-info">
                                    <li> 
                                        <Icon.MapPin />
                                        24, A3, Subhagraha apartments, <br />Balraman St,
                                        Baktavatsalam Nagar, <br />Adyar, Chennai, India
                                    </li>
                                    <li>
                                        <Icon.Mail />
                                        Email: <Link href="#"><a>info@alai-labs.com</a></Link>
                                    </li>
                                    <li> 
                                        <Icon.PhoneCall />
                                        Phone: <Link href="#"><a>+91 98414-23048 </a></Link>
                                    </li>
                                    <li> 
                                        <Icon.PhoneCall />
                                        Landline: <Link href="#"><a>+91-44-7964-4952</a></Link>
                                    </li>
                                </ul>
                            </div>
                            <div></div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="single-footer-widget">
                                <h3>Singapore (Head Office)</h3>
                                <h6>ALAI LABS PTE LTD</h6>
                                <ul className="footer-contact-info">
                                    <li> 
                                        <Icon.MapPin />
                                        10 Anson Road, <br />#28-01 International Plaza, <br />Singapore – 079903
                                    </li>
                                    <li>
                                        <Icon.Mail />
                                        Email: <Link href="#"><a>info@alai-labs.com</a></Link>
                                    </li>
                                    <li> 
                                        <Icon.PhoneCall />
                                        Phone: <Link href="#"><a>+65-8233-6313</a></Link>
                                    </li>
                                </ul>
                                <ul className="social-links">
                                    <li>
                                        <Link href="#">
                                            <a className="facebook">
                                                <Icon.Facebook />
                                            </a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="#">
                                            <a className="twitter"><Icon.Twitter /></a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="#">
                                            <a className="instagram"><Icon.Instagram /></a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="#">
                                            <a className="linkedin"><Icon.Linkedin /></a>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className="col-lg-12 col-md-12">
                            <div className="copyright-area">
                                <p>Copyright @2021 Alai Labs Pte ltd. All rights reserved</p>
                            </div>
                        </div>
                    </div>
                </div>

                <img src={require("../../static/images/map.png")} className="map" alt="map" />
                <div className="shape1"><img src={require("../../static/images/shape1.png")} alt="shape" /></div>
                <div className="shape8 rotateme"><img src={require("../../static/images/shape2.svg")} alt="shape" /></div>
            </footer>
        )
    }
}
