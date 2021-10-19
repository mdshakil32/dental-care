import React from 'react';
import './AboutOurHospital.css';

const AboutOurHospital = () => {
    return (
        // About Our Hospital
        <div className="py-5">
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                    <span className="hash-tag"> <span className="text-info fw-bold">#</span> About Our Hospital</span>
                    <h2 className="fw-normal mt-5">Enjoy Specialized <span className="fw-bold">Care Through</span> <span className="text-info">Precision Experience</span></h2>

                    <p className="lh-lg mt-4">We’ve served this richly diverse region as a community hospital for more than 60 years. And as the area has grown, so have we.<br /> 
                    But as Long Island doctors, nurses, and healthcare professionals, we’ve never outgrown our devotion to the health of the community we all call home.That commitment can be seen in the Knapp Cardiac Care Center, a new surgical pavilion, our level III trauma center.</p>

                    <div className="row">
                        <div className="col-md-6">
                        <ul className="list-unstyled ">
                            <li className="my-3">
                                <i className="fas fa-check-circle text-info fs-5 mt-1"></i> Complete Crown
                            </li>
                            <li className="my-3">
                                <i className="fas fa-check-circle text-info fs-5 mt-1"></i> Dental Implants
                            </li>
                            <li className="my-3">
                                <i className="fas fa-check-circle text-info fs-5 mt-1"></i> Dental X-Ray
                            </li>                           
                        </ul>
                        </div>

                        <div className="col-md-6">
                            <ul className="list-unstyled">
                            <li className="my-3">
                                <i className="fas fa-check-circle text-info fs-5 mt-1"></i> Cosmetic Filling
                            </li>
                            <li className="my-3">
                                <i className="fas fa-check-circle text-info fs-5 mt-1"></i> Teeth Whitening
                            </li>
                            <li className="my-3">
                                <i className="fas fa-check-circle text-info fs-5 mt-1"></i> Root Canal
                            </li>                           
                        </ul>
                        </div>
                        
                    </div>

                    <div className="row my-5">
                        <div className="col-lg-6 col-md-12 mt-3 d-flex">
                            <div >
                                <i className="fas fa-tooth fs-1 p-4  radius-50 text-info bg-shadow-1"></i>
                            </div>
                            <div className="ms-4 mt-1">
                                <h3>25 Years</h3>
                                <p>Dental Experienced</p>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-12 mt-3 d-flex">
                            <div >
                                <i className="fas fa-clinic-medical fs-2 p-4  radius-50 text-info bg-shadow-1"></i>
                            </div>
                            <div className="ms-4 mt-1">
                                <h3>6405+</h3>
                                <p>Dental Services</p>
                            </div>
                        </div>
                        
                    </div>
                    </div>

                    <div className="col-lg-6 col-md-12 about-hospital  ">
                        <div className="d-flex text-white bg-info about-img-content">
                            <div>
                            <i className="fas fa-user-md "></i>
                            </div>
                            <div className="ms-">
                                <h3>Certified Dentist</h3>
                                <p >We have top certified Doctors in our Institute</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutOurHospital;