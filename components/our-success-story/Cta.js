import React, { Component } from 'react';
import Link from 'next/link';

class Cta extends Component {
    render() {
        return (
            <section className="repair-cta-area bg-0f054b">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6">
                            <div className="cta-repair-content">
                                <h3>We'll help you get back to work</h3>
                                <p>The solutions we have presented are just the tip of the iceberg. The possibilities IoT offers are limitless. our team with a very diversified skillset can offer you simple and realistic solutions to your needs. Please reach out to us to see how we can be of assistance. You would sure not regret it.</p>
                                <Link href="#">
                                    <a className="btn btn-primary">Contact Us</a>
                                </Link>
                            </div>
                        </div>

                        <div className="col-lg-6">
                        <div className="cta-repair-img">
                            <img src={require('../../static/images/technology.jpg')} alt="image" />
                        </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Cta;
