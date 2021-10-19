import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../hooks/useAuth';
import './Header.css';

const Header = () => {
  const {user,logout} = useAuth();

  // nav bar 
    return (
<div className="container">

<nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    <Link to="/home" className="navbar-brand fw-bold fs-3 text-info" to="/">DentalCare</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">

        <li className="nav-item pt-2">
          <Link className="nav-link active" aria-current="page" to="/home">Home</Link>
        </li>
        
        <li className="nav-item pt-2">
          <Link className="nav-link" to="/services">Services</Link>
        </li>

        <li className="nav-item pt-2">
          <Link className="nav-link" to="/dentist">Dentist</Link>
        </li>
        

        <li className="nav-item pt-2">
          <Link className="nav-link" to="/testimonial">Testimonial</Link>
        </li>
        

        {/* <li className="nav-item pt-2">
          <Link className="nav-link" to="/login">Login</Link>
        </li> */}
        

        
        {user?.email? (<li className="nav-item pt-2">
          
          <button onClick={logout} className="nav-link logout-btn"> Logout <span className="fw-bold text-uppercase text-info">{user.displayName} </span> </button>
          </li>
        ): 
        (<li className="nav-item pt-2">
          <Link className="nav-link" to="/login">Login</Link>
        </li>)}

        <li className="nav-item">
          <Link className="nav-link" to="/appointment"><button className="btn btn-info text-white" type="submit">Book Appointment</button></Link>
        </li>
        
      </ul>
  
    </div>
  </div>
</nav>
</div>
    );
};

export default Header;