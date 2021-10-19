import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import "./ServiceDetail.css";

const ServiceDetail = () => {
    const {serviceId}=useParams();
    const [services,setServices] = useState([]);

    useEffect(()=>{
        fetch("https://mdshakil32.github.io/dental_care/data.json")
        .then(res => res.json())
        .then(result => setServices(result.services))      
    },[]);

    const foundService = services.find(service => service.id === serviceId);

    let title;
    let img;
    let details;
    if(foundService){
        title=foundService.name;
        img=foundService.image;
        details=foundService.describe;
    }
    


    return (
        <div className="container">
            

            <div className="row">
                <div className="col-md-6 col-12">
                  <div className="p-5">
                    <img src={img} alt="" className="w-100 img-shadow  rounded" />
                  </div>
                </div>
                <div className="col-md-6">
                    <div className="py-5 px-3">
                        <h1 className="my-3">{title} </h1>
                        <p className="lh-lg">{details}</p>
                    </div>
                </div>
            </div>
            
        </div>
    );
};

export default ServiceDetail;