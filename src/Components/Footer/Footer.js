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
                            <Link to="/"><i className="fab fa-facebook-square m-1"></i></Link>
                            <Link to="/"><i className="fab fa-twitter-square m-1"></i></Link>
                            <Link to="/"><i className="fab fa-linkedin m-1"></i></Link>
                            <Link to="/"><i className="fab fa-instagram-square m-1"></i></Link>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <h5 className="text-info">Useful Links</h5>
                        <ul className="list-unstyled lh-lg">
                            <li><Link to="/">About Us</Link> </li>
                            <li><Link to="/">Our Services</Link></li>
                            <li><Link to="/">Appointment</Link></li>
                            <li><Link to="/">Privacy Policy</Link></li>
                            <li><Link to="/">Contact Us</Link></li>
                        </ul>
                    </div>
                    <div className="col-md-3">
                        <h5 className="text-info">Our Services</h5>
                        <ul className="list-unstyled lh-lg">
                            <li><Link to="/">Cosmetic Dentistry</Link></li>
                            <li><Link to="/">General Dentistry</Link></li>
                            <li><Link to="/">Certified Dentist</Link></li>
                            <li><Link to="/">New Technology</Link></li>
                            <li><Link to="/">Accept Insurance</Link></li>
                        </ul>
                    </div>
                    <div className="col-md-3">
                        <h5 className="text-info">Support</h5>
                        <ul className="list-unstyled lh-lg">
                            <li><Link to="/">Our Dentist</Link></li>
                            <li><Link to="/">Testimonials</Link></li>
                            <li><Link to="/">Terms of Services</Link></li>
                            <li><Link to="/">Privacy Policy</Link></li>
   
                        </ul>
                    </div>

                </div>
            </div>
        </footer>
    );
};

export default Footer;