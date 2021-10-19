import React from 'react';
import './Banner.css';


const Banner = () => {
    return (
      // banner 
        <div>
            <div id="carouselExampleCaptions" className="carousel slide " data-bs-ride="carousel">
            <div className="carousel-indicators ">
              <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
              <button  type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>

            </div>
            <div className="carousel-inner "> 
            {/* banner fist slide  */}
              <div className="carousel-item active">
                <img src="https://i.ibb.co/qM2ZLFv/bg.jpg" className="d-block w-100" alt="dental banner" />
                <div className="carousel-caption d-none d-md-block text-dark text-start banner-content">
                  <span className="hash-tag"> <span className="text-info fw-bold">#</span> Keeping Teeth Cleaning</span>
                  <h1 className="fs-40 mt-3">The World Best <br /> <span className="text-info">Dental Specialist</span> <br /> Treatment</h1>
                  <p>We respect our patients more than anything. Your trust is everything to us. </p>
                  <button className="btn btn-outline-dark fw-bold p-2">Consult A Dentist</button>
                </div>
              </div>
              {/* banner second slide  */}
              <div className="carousel-item">
                <img src="https://i.ibb.co/yq5Q6VL/bg2.jpg" className="d-block w-100" alt="dental banner" />
                <div className="carousel-caption d-none d-md-block text-start text-dark banner-content">
                  <span className="hash-tag"> <span className="text-info fw-bold">#</span> Keeping Teeth Cleaning</span>
                  <h1 className="fs-40 mt-3">The World Best <br /> <span className="text-info">Dental Specialist</span> <br /> Treatment</h1>
                  <p>We respect our patients more than anything. Your trust is everything to us. </p>
                  <button className="btn btn-outline-dark fw-bold p-2">Consult A Dentist</button>
                </div>
              </div>
              
            </div>
</div>
 </div>
    );
};

export default Banner;