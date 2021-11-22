import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import DisplayService from '../DisplayService/DisplayService';
import "./ServiceForHome.css"

const ServiceForHome = () => {
    const [services,setServices] = useState([]);

    useEffect(()=>{
        fetch("https://mdshakil32.github.io/dental-care-dataset/data.json")
        .then(res => res.json())
        .then(result => setServices(result.services))      
    },[]);
    console.log(services);

    return (
        <div className="service-for-home py-5">
            
            <div className="container">
            <p className="text-center mt-5"><span className="hash-tag"> <span className="text-info fw-bold">#</span> OUR DENTAL SERVICES</span></p>
            <h2 className="fw-normal text-center my-4">
                Enjoy Specialized <span className="fw-bold">Care Through</span> <br /> Precision, Artistry, And Experience</h2>
                <div className="row">
                {
                    services.slice(0,6).map(service => <DisplayService key={service.id} singleService={service} ></DisplayService> )
                }
                </div>
            
            <Link to="./services"><button className="btn btn-info my-4 px-5">View all</button></Link>
            </div>
            

        </div>
    );
};

export default ServiceForHome;