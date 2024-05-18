import { useContext } from 'react';
import { useEffect, useRef, useState } from 'react';
import { loadCaptchaEnginge, LoadCanvasTemplate, LoadCanvasTemplateNoReload, validateCaptcha } from 'react-simple-captcha';
import { AuthContext } from '../../components/Provider/Authprovider';
import { Link } from 'react-router-dom';
import { Helmet } from "react-helmet-async";

const Login = () => {
    const captchaRef = useRef(null);
    const [disabled,setDisabled] =useState(true);
    const {userSignIn} = useContext(AuthContext)

    useEffect(()=>{
      loadCaptchaEnginge(6);
    },[])
    const handleValidateCaptcha =()=>{
      const value = captchaRef.current.value;
      console.log(value);
      if (validateCaptcha(value)){
        setDisabled(false);
      }
      else{
        setDisabled(true);

      }
    }
    const handleLogin = event =>{
        event.preventDefault();
        const form =event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email,password);
        userSignIn(email,password)
        .then(result =>{
          const user = result.user;
          console.log(user);
        })
    }
    return (
     <>
        <title>Our Menu</title>
      
         <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Login now!</h1>
            
          </div>
          <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form onSubmit={handleLogin} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="email" name="email" placeholder="email" className="input input-bordered" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                <label className="label">
                  <LoadCanvasTemplate />
                </label>
                <input type="text"ref={captchaRef} name="captcha" placeholder="CAPTCHA" className="input input-bordered" required />
                <button onClick={handleValidateCaptcha}  className='btn btn-outline mt-5'>Validate</button>
              </div>
              <div className="form-control mt-6">
                 
                <input  className="btn btn-primary" disabled={disabled} type="submit" value="Login" />
              </div>
            </form>
            <p><small>New here ?<Link to='/signup'>Creat an account</Link></small> </p>
          </div>
        </div>
      </div>
    </div> 
     
     
     
     
     
     </>
    );
};

export default Login;