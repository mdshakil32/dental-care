import React from 'react';
import { Link } from 'react-router-dom';
import "./DisplayDentist.css"

const DisplayDentist = ({dentist}) => {
    // props from dentist 
    const {name,image,section} = dentist;

    return (

        <div className="col-md-3 ">
            <div className="single-dentist my-4">
            <div>
                {/* dentist img  */}
                <img src={image} alt="" className="img-fluid" />
            </div>
            {/* dentist ddtail  */}
            <div className=" single-dentist-content p-3">
                <h3 className="">{name} </h3>
                <p className="text-info">{section}</p>
                <div className="social-media fs-2 ">
                    <Link to="/" className="text-info"><i className="fab fa-facebook-square m-1"></i></Link>
                    <Link to="/" className="text-info"><i className="fab fa-twitter-square m-1"></i></Link>
                    <Link to="/" className="text-info"><i className="fab fa-linkedin m-1"></i></Link>
                    <Link to="/" className="text-info"><i className="fab fa-instagram-square m-1"></i></Link>
                </div>
            </div>
            </div>
        </div>
    );
};

export default DisplayDentist;