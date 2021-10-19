import React, { useEffect, useState } from 'react';
import DisplayService from '../DisplayService/DisplayService';

const Services = () => {
    const [services,setServices] = useState([]);

    useEffect(()=>{
        fetch("https://mdshakil32.github.io/dental_care/data.json")
        .then(res => res.json())
        .then(result => setServices(result.services))      
    },[]);
    // console.log(services);


    return (
        // all services 
        <div className="services py-5">
            
            <div className="container">
            <p className="text-center mt-5"><span className="hash-tag"> <span className="text-info fw-bold">#</span> OUR DENTAL SERVICES</span></p>
            <h1 className="fw-normal text-center my-4">
                Enjoy Specialized Care Through <br /> Precision, Artistry, And Experience</h1>
                <div className="row">
                {
                    services.map(service => <DisplayService key={service.id} singleService={service} ></DisplayService> )
                }
                </div>
            </div>
            

        </div>
    );
};

export default Services;