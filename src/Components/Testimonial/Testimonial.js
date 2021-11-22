import React, { useEffect, useState } from 'react';
import DisplayTestimonial from './DisplayTestimonial/DisplayTestimonial';

const Testimonial = () => {
    const [testimonials,setTestimonials] = useState([]);

    useEffect(()=>{
        fetch("https://mdshakil32.github.io/dental-care-dataset/data.json")
        .then(res => res.json())
        .then(result => setTestimonials(result.review))      
    },[]);
    console.log(testimonials);

    return (
        // testimonial 
        <div>
            <div className="container my-5">
                <div className="row">

                <div className="col-md-12 text-center">
                        <p className=" mt-5"><span className="hash-tag"> <span className="text-info fw-bold">#</span> Testimonial</span></p>
                        <h2 className="fw-normal my-5" >Real Review From Our <span className="fw-bold"> Real Customer</span></h2>
                </div>
                {
                testimonials.map(testi => <DisplayTestimonial key={testi.id} singleTesti={testi}></DisplayTestimonial> )
                }

                </div>
            </div>
            
            
        </div>
    );
};

export default Testimonial;