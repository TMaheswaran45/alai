import React from 'react'
import { withRouter } from 'next/router';
import { connect } from 'react-redux'
import Link from '../common/ActiveLink'
import * as Icon from 'react-feather';

class DefaultStyle extends React.Component {

    state = {
        collapsed: true,
    };

    toggleNavbar = () => {
        this.setState({
            collapsed: !this.state.collapsed,
        });
    }

    componentDidMount() {
        let elementId = document.getElementById("navbar");
        document.addEventListener("scroll", () => {
            if (window.scrollY > 170) {
                elementId.classList.add("is-sticky");
            } else {
                elementId.classList.remove("is-sticky");
            }
        });
        window.scrollTo(0, 0);
    }

    render() {
        let { products } = this.props;
        const { collapsed } = this.state;
        const classOne = collapsed ? 'collapse navbar-collapse' : 'collapse navbar-collapse show';
        const classTwo = collapsed ? 'navbar-toggler navbar-toggler-right collapsed' : 'navbar-toggler navbar-toggler-right';

        let { pathname } = this.props.router;
        let layOutCls = '';
        if (pathname == '/home-three') {
            layOutCls = 'p-relative';
        }
        return (
            <header id="header">
                <div id="navbar" className={`startp-nav ${layOutCls}`}>
                    <div className="container">
                        <nav className="navbar navbar-expand-md navbar-light">
                            <Link href="/">
                                <a
                                    className="navbar-brand"
                                    onClick={() => window.location.refresh()}
                                >
                                    <img src={require("../../static/images/alai_logo.png")} alt="logo" width="150px" />
                                </a>
                            </Link>

                            <button
                                onClick={this.toggleNavbar}
                                className={classTwo}
                                type="button"
                                data-toggle="collapse"
                                data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                                aria-expanded="false"
                                aria-label="Toggle navigation"
                            >
                                <span className="navbar-toggler-icon"></span>
                            </button>

                            <div className={classOne} id="navbarSupportedContent">
                                <ul className="navbar-nav nav ml-auto">
                                    <li className="nav-item">
                                        <a
                                            onClick={() => window.location.refresh()}
                                            href="/?style=brink-pink"
                                            className="nav-link"
                                        >
                                            Home
                                        </a>
                                    </li>



                                    <li className="nav-item">
                                        <Link activeClassName="active" href="#">
                                            <a href="#" className="nav-link">Futuristic Solutions <Icon.ChevronDown /></a>
                                        </Link>
                                        <ul className="dropdown_menu">
                                            <li className="nav-item">
                                                <Link activeClassName="active" href="/iiot-sensors-ai-edge">
                                                    <a className="nav-link">IIoT Sensors and AI Edge Systems <Icon.ChevronDown /></a>
                                                </Link>

                                                <ul className="dropdown_menu">
                                                    <li className="nav-item">
                                                        <Link activeClassName="active" href="/industrial-vision-system-features">
                                                            <a className="nav-link">Industrial Vision System (Object counting, Identification, Quality check & Maintenance)</a>
                                                        </Link>

                                                        <Link activeClassName="active" href="/robotic-arm-features">
                                                            <a className="nav-link">Robotic Arm</a>
                                                        </Link>

                                                        <Link activeClassName="active" href="/smart-vehicle-entry-features">
                                                            <a className="nav-link">Smart Vehicle Entry System</a>
                                                        </Link>

                                                        <Link activeClassName="active" href="/smart-bin-features">
                                                            <a className="nav-link">Smart Bin</a>
                                                        </Link>

                                                        <Link activeClassName="active" href="/industrial-people-counting-features">
                                                            <a className="nav-link">Industrial Vision System (People counting and Identification) </a>
                                                        </Link>

                                                        <Link activeClassName="active" href="/face-recognition-terminal-features">
                                                            <a className="nav-link">Face recognition Terminal</a>
                                                        </Link>
                                                        <Link activeClassName="active" href="/uhf-rfid-reader-features">
                                                            <a className="nav-link">UHF RFID Reader & RF Tag</a>
                                                        </Link>
                                                        <Link activeClassName="active" href="/pos-billing-machine-features">
                                                            <a className="nav-link">POS Billing Machine</a>
                                                        </Link>
                                                        <Link activeClassName="active" href="/biometric-attendance-system-features">
                                                            <a className="nav-link">Biometric Attendance System</a>
                                                        </Link>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li className="nav-item">
                                                <Link activeClassName="active" href="/erp-software">
                                                    <a className="nav-link">Smart ERP Solutions <Icon.ChevronDown /></a>
                                                </Link>

                                                <ul className="dropdown_menu">
                                                    <li className="nav-item">
                                                        <Link activeClassName="active" href="/crm-features">
                                                            <a className="nav-link">Customer Relationship Management</a>
                                                        </Link>

                                                        <Link activeClassName="active" href="/hrm-features">
                                                            <a className="nav-link">Human Resource Management</a>
                                                        </Link>

                                                        <Link activeClassName="active" href="/marketing-features">
                                                            <a className="nav-link">Marketing Management</a>
                                                        </Link>

                                                        <Link activeClassName="active" href="/finance-inventory-features">
                                                            <a className="nav-link">Finance & Inventory Management</a>
                                                        </Link>

                                                        <Link activeClassName="active" href="/facility-mangement-features">
                                                            <a className="nav-link">Facility Management </a>
                                                        </Link>

                                                    </li>
                                                </ul>

                                            </li>

                                            <li className="nav-item">
                                                <Link activeClassName="active" href="/smart-property">
                                                    <a className="nav-link">Smart Property</a>
                                                </Link>
                                            </li>

                                            <li className="nav-item">
                                                <Link activeClassName="active" href="/waste-management-system">
                                                    <a className="nav-link">Smart Waste Management </a>
                                                </Link>
                                            </li>

                                            <li className="nav-item">
                                                <Link activeClassName="active" href="/smart-office">
                                                    <a className="nav-link">Smart Office</a>
                                                </Link>
                                            </li>

                                            <li className="nav-item">
                                                <Link activeClassName="active" href="/smart-port">
                                                    <a className="nav-link">Smart Port</a>
                                                </Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link activeClassName="active" href="/sw-development">
                                                    <a className="nav-link">Software Development</a>
                                                </Link>
                                            </li>

                                            <li className="nav-item">
                                                <Link activeClassName="active" href="/smart-hospital">
                                                    <a className="nav-link">Smart Hospital</a>
                                                </Link>
                                            </li>
                                            {/*<li className="nav-item">
                                                <Link activeClassName="active" href="#">
                                                    <a className="nav-link">Our Success story</a>
                                                </Link>
					                        </li>  /hardware-solutions*/}


                                        </ul>
                                    </li>



                                    <li className="nav-item">
                                        <Link activeClassName="active" href="/our-success-story">
                                            <a className="nav-link">Our Success story</a>
                                        </Link>
                                    </li>

                                    <li className="nav-item">
                                        <Link activeClassName="active" href="/about">
                                            <a className="nav-link">About</a>
                                        </Link>
                                    </li>

                                    <li className="nav-item">
                                        <Link activeClassName="active" href="/contact">
                                            <a className="nav-link">Contact Us</a>
                                        </Link>
                                    </li>

                                    <li className="nav-item">
                                        <Link activeClassName="active" href="/freedemo">
                                            <a className="nav-link">Get a Free Demo</a>
                                        </Link>
                                    </li>

                                </ul>
                            </div>


                        </nav>
                    </div>
                </div>

            </header>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        products: state.addedItems
    }
}

export default withRouter(connect(mapStateToProps)(DefaultStyle))
