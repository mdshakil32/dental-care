import React from 'react';
import "./OurFeatures.css";

const OurFeatures = () => {
    return (
        // Our Features
        <div className="container py-5">
            <div className="row">
                <div className="col-md-12 text-center">
                    <p className=" mt-5">
                        <span className="hash-tag"> <span className="text-info fw-bold"># </span> Our Features </span>
                    </p>
                    <h1 className="fw-normal my-5">Our Clients are Our Priority, We Offer <br /> <span className="fw-bold">Quality Dental Services of Specialists</span></h1>
                    <p>We have been providing high quality dental services since 1987. From prevention to emergencies to aesthetic care, <br /> discover the wide range of services we offer.</p>
                </div>

                <div className="col-md-3 my-3 text-center">
                   <div className="our-feature-item px-3 py-4">
                        <p className="our-feature-icons">
                                <i className="fas fa-hand-holding-medical"></i>
                        </p>
                        <h3>Accept Insurance</h3>
                   </div>
                </div>
                <div className="col-md-3 my-3 text-center">
                   <div className="our-feature-item px-3 py-4">
                        <p className="our-feature-icons">
                        <i className="fas fa-search-plus"></i>
                        </p>
                        <h3>New Technology</h3>
                   </div>
                </div>
                <div className="col-md-3 my-3 text-center">
                   <div className="our-feature-item px-3 py-4">
                        <p className="our-feature-icons">
                        <i className="fas fa-hospital-user"></i>
                        </p>
                        <h3>Certified Dentist</h3>
                   </div>
                </div>
                <div className="col-md-3 my-3 text-center">
                   <div className="our-feature-item px-3 py-4">
                        <p className="our-feature-icons">
                        <i className="fas fa-wheelchair"></i>
                        </p>
                        <h3>Accept Insurance</h3>
                   </div>
                </div>
            </div>
        </div>
    );
};

export default OurFeatures;