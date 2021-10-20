import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../hooks/useAuth';
import "./Register.css";

const Register = () => {
    // register 
    const { loginWithGoogle,setUser,handleNameChange, handleEmailChnage, handlepasswordChnage, registerNewUser, setUserName } = useAuth();
    // handleGoogleLogin
    const handleGoogleLogin =()=>{
        
        
        loginWithGoogle()
        .then(result => {
            // history.push(redirect_uri);
            setUser(result.user);
        })
        .catch((error)=>{
            console.log(error.message)
            // setIsLoading(false);
        } )
    }

    const handleCreateAccount = (e) => {
        e.preventDefault();    
            registerNewUser(e)
                .then((result) => {
                    setUserName()   
                    window.location.reload();              
                }) 
    }


    return (
        <div className="container py-5">
            <div className="row">
                <div className="col-md-4 mx-auto text-center">
                    <h2 className="py-4 text-danger">Create an account </h2>
                <form>

                    <div className="mb-3">
                        <input onBlur={handleNameChange} type="text" className="form-control" placeholder="Name" required />
                    </div>

                    <div className="mb-3">
                        <input onBlur={handleEmailChnage}  type="email" className="form-control" placeholder="Email" required />
                    </div>

                    <div className="mb-3">
                        <input onBlur={handlepasswordChnage} type="password" className="form-control" placeholder="Password" required />
                    </div>

                    <button onClick={handleCreateAccount} type="submit" className="btn btn-danger w-100 mx-auto " value="Register" > Register</button>
                </form>
                <p className="pt-3">Or login with</p>
                
                <div className="login-firebase">
                    <button onClick={handleGoogleLogin}> <img src="https://i.ibb.co/9s3gmxK/download.png" alt="" />  </button>
                </div>


                </div>
            </div>
        </div>
    );
};

export default Register;