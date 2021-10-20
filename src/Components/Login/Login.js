import React from 'react';
import { Link,useLocation,useHistory } from 'react-router-dom';
import useAuth from '../hooks/useAuth';
import "./Login.css";


const Login = () => {

    const {processLogin,loginWithGoogle,setIsLoading,setUser,handleEmailChnage,handlepasswordChnage}=useAuth();
    const location = useLocation();
    const history = useHistory();
    const redirect_uri = location.state?.from || "/home";
    console.log("came from",location.state?.from);

    const handleGoogleLogin =()=>{
        
        // google login 
        loginWithGoogle()
        .then(result => {
            history.push(redirect_uri);
            setUser(result.user);
        })
        .catch((error)=>{
            console.log(error.message)
            setIsLoading(false);
        } )
    }

    // pass loging 
    const handleLogin = (e) => {
        e.preventDefault();
        processLogin()
            // console.log(email,password)
            .then((result) => {
                history.push(redirect_uri)
            })
            
            .catch((error) => {
                console.log(error.message);
                setIsLoading(false)
            });

    }

    return (
        <div className="container py-5">
            <div className="row">
                <div className="col-md-4 mx-auto text-center">
                    <h2 className="py-4 text-success">Please Login</h2>
                <form >
                    <div className="mb-3">
                        <input onBlur={handleEmailChnage}  type="email" className="form-control" placeholder="Email" required />
                    </div>

                    <div className="mb-3">
                        <input onBlur={handlepasswordChnage} type="password" className="form-control" placeholder="Password" required />
                    </div>

                    <button onClick={handleLogin} type="submit" className="btn btn-success w-100 mx-auto mb-3">Login</button>
                </form>

                <Link to="/register" className="text-danger mt-5">Create Account</Link>

                <p className="mt-5"> Or login using </p>

                <div className="login-firebase">
                    <button onClick={handleGoogleLogin}> <img src="https://i.ibb.co/9s3gmxK/download.png" alt="" />  </button>
                </div>
                </div>
            </div>
        </div>
    );
};

export default Login;