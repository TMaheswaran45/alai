import React, { Component } from 'react';
import Link from 'next/link';

class Cta extends Component {
    render() {
        return (
            <section className="repair-banner-content">
                <div className="container-flex bg-light p-5">
                    <div className="row align-items-center">
                        <div className="col-lg-12">
                            <div className="cta-repair-content">
                                <h3>Reach us to discover new possibilities</h3>
                                <p>The solutions we have developed till now are just the tip of the iceberg. The possibilities IoT offers are limitless. our team with a very diversified skillset can offer you simple and realistic solutions to your needs. Please reach out to us to see how we can be of assistance. You would sure not regret it.</p>
                                
                            </div>
                        </div>

                        <div className="col-lg-6">
                        <div>
                        <Link href="/contact?style=default">
                                    <a className="btn btn-primary">Contact Us</a>
                                </Link>
                            {/* <img src={require('../../static/images/meetus.jpg')}  /> */}
                        </div>
                        
                        </div>
                    </div>
              
                         </div>
            </section>
        );
    }
}

export default Cta;
