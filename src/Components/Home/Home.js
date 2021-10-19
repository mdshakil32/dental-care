import React from 'react';
import Banner from '../Banner/Banner';
import ServiceForHome from '../ServiceForHome/ServiceForHome';
import AboutOurHospital from './AboutOurHospital/AboutOurHospital';
import ContactUs from './ContactUs/ContactUs';
import './Home.css';
import OurFeatures from './OurFeatures/OurFeatures';

const Home = () => {
    
    return (
        // home 
        <div>
            <Banner></Banner>
            <AboutOurHospital></AboutOurHospital>
            <ServiceForHome></ServiceForHome>
            <OurFeatures></OurFeatures>
            <ContactUs></ContactUs>
        </div>
    );
};

export default Home;