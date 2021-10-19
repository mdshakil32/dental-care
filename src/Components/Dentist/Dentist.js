import React, { useEffect, useState } from 'react';
import "./Dentist.css";
import DisplayDentist from './DisplayDentist/DisplayDentist';

const Dentist = () => {
    const [allDentist,setAllDentist] = useState([]);

    useEffect(()=>{
        fetch("https://mdshakil32.github.io/dental_care/data.json")
        .then(res => res.json())
        .then(result => setAllDentist(result.dentist))      
    },[]);
    console.log(allDentist);

    return (
        <div className="dentist-wrapper py-5">
            <div className="container">
                <div className="row">
                    <div className="col-md-12 text-center">
                        <p className=" mt-5"><span className="hash-tag"> <span className="text-info fw-bold">#</span> OUR EXPERIENCED DENTIST</span></p>
                        <h2 className="fw-normal my-5" >Top Dentist For <span className="fw-bold">Specialized And Experienced</span> Dentist</h2>
                    </div>
                    
                    {
                        allDentist.map(dent => <DisplayDentist key={dent.id} dentist={dent}></DisplayDentist> )
                    }
                </div>
                
            </div>
        </div>
    );
};

export default Dentist;