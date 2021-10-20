import React from 'react';
import "./ContactUs.css";

const ContactUs = () => {
    return (
        // Contact Us
        <div className="container text-center py-5">
            <p>
                <span className="hash-tag"> <span className="text-info fw-bold">#</span> OUR CONTACT INFORMATION</span>
            </p>
            <h2 className="fw-normal my-5">Contact Us Now By Phone Number or Email Address</h2>
            <div className="row">

                <div className="col-md-3">
                    <div className="contact-card">
                        <p className="contact-card-icon mx-auto"><i className="fas fa-map-marker-alt"></i></p>
                        <p className="fw-bold">Our Location</p>
                        <p>35 West Dental Street Nyz California 1004</p>
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="contact-card">
                        <p className="contact-card-icon mx-auto"><i className="far fa-envelope"></i></p>
                        <p className="fw-bold">Email Address:</p>
                        <p>contactinfo@rola.com <br /> support@rola.com</p>
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="contact-card">
                        <p className="contact-card-icon mx-auto"><i className="fas fa-phone-volume"></i></p>
                        <p className="fw-bold">Phone Number:</p>
                        <p>+088 123 654 987 <br /> +088 123 654 612</p>
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="contact-card">
                        <p className="contact-card-icon mx-auto"><i className="far fa-clock"></i></p>
                        <p className="fw-bold">Open Hour:</p>
                        <p>09:00 AM to 18:00 PM <br /> Sunday to Thursday</p>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default ContactUs;