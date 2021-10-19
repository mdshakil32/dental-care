import React from 'react';
import "./Appoinment.css";

const Appoinment = () => {
    return (
        
        // appointment 
        <div className="appointment">
            <div className="container">
                <div className="row">
                    <div className="col-md-6  p-5 appoint-form my-5">
                        <h2 className="my-4">Make An Appointment</h2>
                    <form>
                    <div className="mb-3">
                        <input type="text" className="form-control" placeholder="Patients Name" required />
                    </div>

                    <div className="mb-3">
                        <input type="email" className="form-control" placeholder="Email" required />
                    </div>
                    <div className="mb-3">
                        <input type="text" className="form-control" placeholder="Phone" required />
                    </div>
                    <div className="mb-3">

                        <input type="date" className="form-control" placeholder="Date" required />
                    </div>
                    <div className="mb-3">
                        <input type="text" className="form-control" placeholder="Which Doctor?" required />
                    </div>
                    <input type="submit" className="btn btn-info w-100 fw-bold" />

                </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Appoinment;