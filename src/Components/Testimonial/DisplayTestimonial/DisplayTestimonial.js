import React from 'react';
import "./DisplayTestimonial.css";

const DisplayTestimonial = ({singleTesti}) => {
    const {name,image,comment,job} = singleTesti;
    console.log("DisplayTestimonial:",singleTesti);
    return (
        <div className=" col-md-4 ">
            <div className="single-testimony my-5 mx-3 p-4">
                <p>{comment}</p>
                <div className="row">
                    <div className="col-lg-6 col-md-12 ">
                        <img src={image} alt="" className="" />
                    </div>
                    <div className="col-lg-6 col-md-12 mt-2">
                        <h6>{name} </h6>
                        <p>{job} </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DisplayTestimonial;