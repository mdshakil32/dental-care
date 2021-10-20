import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Consult = () => {
    const [clicked,setClicked]=useState(false);
    const toggleClicked =(e)=>{
        setClicked(e.target.checked);
    }

    return (
        <div className="container py-5">
            <h1 className="fw-normal text-center mb-4">Fill In Your <span className="fw-bold">Information & We Will Be In Touch </span> <br /> As Soon As We Can</h1>
            
          {/* consult form  */}
            <form >
                <div className="row p-3">

                <div className="col-md-6 mb-3 ">
                    <input type="text" className="form-control p-3"  placeholder="Name*" />
                </div>
                <div className="col-md-6 mb-3">
                    <input type="email" className="form-control p-3" placeholder="Email*" />
                </div>
                <div className=" col-md-6 mb-3">
                    <input type="text" className="form-control p-3" placeholder="Phone*" />
                </div>

                <div className="col-md-6 mb-3 ">
                    <input type="text" className="form-control p-3" placeholder="Subject*" />
                </div>

                <div className="col-md-12 mb-3">
                    <textarea rows="5" className="form-control" placeholder="Your Message" />
                </div>

                

                <div className="col-md-12 mb-3 form-check">
                    <input onChange={toggleClicked} type="checkbox" className="form-check-input " id="exampleCheck1" />
                    <label className="form-check-label" htmlFor="exampleCheck1">
                        Accept <Link className="text-info" to="/">Terms Of Service</Link>  and <Link className="text-info" to="/"> Privacy Policy</Link>.</label>
                </div>



                <div className="col-md-4">
                    {
                        clicked? <button type="submit" className="btn btn-info text-white w-100 p-3"  >Send Message</button>:
                        <button type="submit" className="btn btn-secondary text-white w-100 p-3" disabled >Send Message</button>
                    }
                    
                </div>
                </div>
            </form>
 
        </div>
    );
};

export default Consult;