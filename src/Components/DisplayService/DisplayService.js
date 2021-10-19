import React from 'react';
import { Link } from 'react-router-dom';
import "./DisplayService.css";

// Display Service 
const DisplayService = ({singleService}) => {
    const {id,image,name,describe,icon} = singleService;

    return (
        <div className="col-md-4 my-3">
            <div className="p-2 single-service">
                <div className="service-img">
                    <img src={image} alt="" className="img-fluid" />
                    
                </div>
                <div className="px-4">
                <p className="service-icon d-flex "> 
                    <i className={icon}></i> 
                </p>
                
                <h4 className="fw-bold">{name} </h4>
                <p>{describe.slice(0,150)}...</p>

                {/* dynamic btn  */}
                <Link to={`/serviceDetail/${id}`}> <button className="btn btn-outline-info">Show more</button> </Link>

                
                </div>
            </div>
        </div>
    );
};

export default DisplayService;