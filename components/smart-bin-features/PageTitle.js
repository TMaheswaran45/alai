import React from 'react'
import ReactWOW from 'react-wow'
export default function PageTitle() {
    return (
        <div className="repair-main-banner">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-12">
                        <div className="repair-banner-image">
                            <ReactWOW delay='0.6s' animation='zoomIn'>
                                <img
                                    src={require('../../static/images/smartbin-banner.jpg')}
                                    className="wow zoomIn"
                                    data-wow-delay="0.6s"
                                    alt="image"
                                />
                            </ReactWOW>
                        </div>
                    </div>
                </div>
            </div>

            <div className="page-title-area">

                <div className="d-table">
                    <div className="d-table-cell">
                        <div className="row align-items-center"></div>
                        <div className="container">
                            <h2>Smart Bin</h2>
                        </div>
                    </div>
                </div>
            </div>
            <div className="shape1"><img src={require("../../static/images/shape1.png")} alt="shape" /></div>
            <div className="shape2 rotateme"><img src={require("../../static/images/shape2.svg")} alt="shape" /></div>
            <div className="shape3"><img src={require("../../static/images/shape3.svg")} alt="shape" /></div>
            <div className="shape4"><img src={require("../../static/images/shape4.svg")} alt="shape" /></div>
            <div className="shape5"><img src={require("../../static/images/shape5.png")} alt="shape" /></div>
            <div className="shape6 rotateme"><img src={require("../../static/images/shape4.svg")} alt="shape" /></div>
            <div className="shape7"><img src={require("../../static/images/shape4.svg")} alt="shape" /></div>
            <div className="shape8 rotateme"><img src={require("../../static/images/shape2.svg")} alt="shape" /></div>
        </div>
    )
}
