import { useEffect, useRef, useState } from 'react';
import { loadCaptchaEnginge, LoadCanvasTemplate, LoadCanvasTemplateNoReload, validateCaptcha } from 'react-simple-captcha';

const Login = () => {
    const captchaRef = useRef(null);
    const [disabled,setDisabled] =useState(true);

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
    }
    return (
        <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col md:flex-row-reverse">
          <div className="text-center md:w-1/2 lg:text-left">
            <h1 className="text-5xl font-bold">Login now!</h1>
            <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
          </div>
          <div className="card md:w-1/2w-full max-w-sm shadow-2xl bg-base-100">
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
          </div>
        </div>
      </div>
    );
};

export default Login;