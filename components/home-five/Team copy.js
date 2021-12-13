import React from 'react';
import Link from 'next/link';
import * as Icon from 'react-feather';

class Team extends React.Component {
    render() {
        return (
            <section className="team-area iot-team-area ptb-80 bg-f9f6f6">
                <div className="container">
                    <div className="section-title">
                        <h2>Our Awesome Team</h2>
                        <div className="bar"></div>
                        <p></p>
                    </div>


                    <div className="row">

                        <div className="col-lg-4 col-md-6">
                            <div className="single-team">
                                <div className="team-image">
                                    <img src={require("../../static/images/team-image/team1.jpg")} alt="image" />
                                </div>

                                <div className="team-content">
                                    <div className="team-info">
                                        <h3>Lakshmana Prabhu</h3>
                                        <span>CEO & Founder</span>
                                    </div>

                                    <ul>

                                        <li>
                                            <Link href="#">
                                                <a><Icon.Linkedin /></a>
                                            </Link>
                                        </li>
                                    </ul>

                                    <p>Passionate about solving real world problems. Avid Learner</p>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6">
                            <div className="single-team">
                                <div className="team-image">
                                    <img src={require("../../static/images/team-image/team1.jpg")} alt="image" />
                                </div>

                                <div className="team-content">
                                    <div className="team-info">
                                        <h3>T K Viswanathan</h3>
                                        <span>Director & Head of Technology</span>
                                    </div>

                                    <ul>
                                        <li>
                                            <Link href="#">
                                                <a><Icon.Twitter /></a>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="#">
                                                <a><Icon.Linkedin /></a>
                                            </Link>
                                        </li>
                                    </ul>

                                    <p>Passionate about solving real world problems. Avid Learner</p>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6">
                            <div className="single-team">
                                <div className="team-image">
                                    <img src={require("../../static/images/team-image/team1.jpg")} alt="image" />
                                </div>

                                <div className="team-content">
                                    <div className="team-info">
                                        <h3>Dr. Thiru Kanagasabapathi</h3>
                                        <span>Partner & Advisor</span>
                                    </div>

                                    <ul>

                                        <li>
                                            <Link href="#">
                                                <a><Icon.Facebook /></a>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="#">
                                                <a><Icon.Linkedin /></a>
                                            </Link>
                                        </li>
                                    </ul>

                                    <p>Passionate about solving real world problems. Avid Learner</p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        )
    }
}

export default Team