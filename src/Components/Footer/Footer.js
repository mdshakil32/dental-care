import React from 'react';
import { Link } from 'react-router-dom';
import "./Footer.css"

const Footer = () => {
    return (
        // footer 
        <footer>
            <div className="container py-5">
                <div className="row">
                    <div className="col-md-3">
                        <h5 className="text-info">Rola</h5>
                        <address>
                            Location: 35 West Dental Street <br />
                            Phone: +088 123 654 987 <br />
                            Email: info@rola.com
                        </address>
                        <div className="social-media fs-2 text-info">
                            <i className="fab fa-facebook-square m-1"></i>
                            <i className="fab fa-twitter-square m-1"></i>
                            <i className="fab fa-linkedin m-1"></i>
                            <i className="fab fa-instagram-square m-1"></i>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <h5 className="text-info">Useful Links</h5>
                        <ul className="list-unstyled lh-lg">
                            <li>About Us</li>
                            <li>Our Services</li>
                            <li>Appointment</li>
                            <li>Privacy Policy</li>
                            <li>Contact Us</li>
                        </ul>
                    </div>
                    <div className="col-md-3">
                        <h5 className="text-info">Our Services</h5>
                        <ul className="list-unstyled lh-lg">
                            <li>Cosmetic Dentistry</li>
                            <li>General Dentistry</li>
                            <li>Certified Dentist</li>
                            <li>New Technology</li>
                            <li>Accept Insurance</li>
                        </ul>
                    </div>
                    <div className="col-md-3">
                        <h5 className="text-info">Support</h5>
                        <ul className="list-unstyled lh-lg">
                            <li>Our Dentist</li>
                            <li>Testimonials</li>
                            <li>Terms of Services</li>
                            <li>Privacy Policy</li>
   
                        </ul>
                    </div>

                </div>
            </div>
        </footer>
    );
};

export default Footer;