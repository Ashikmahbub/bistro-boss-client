import { useContext } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { Zoom } from "swiper/modules";
import { AuthContext } from "../../components/Provider/Authprovider";


const SignUp = () => {
    const {register,handleSubmit,watch,formState:{errors} } = useForm();
    const {createUser} = useContext(AuthContext);
    const onSubmit = data =>{
      createUser(data.email,data.password) 
      .then(result =>{
        const createdUser = result.user;
        console.log(createdUser);
      })


    }  
  return (

  

<div>
    <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Sign up now!</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
          </div>
          <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100 py-3 px-2">
            <form onSubmit={handleSubmit(onSubmit)} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  placeholder="name"
                  {...register('name',{required:true})}
                  name="name"
                  className="input input-bordered"
                  
                
                />
                {errors.name && <span className="text-red-700">Name field is required</span>}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  {...register('email',{required:true})}
                  placeholder="email"
                  className="input input-bordered"
                
                />
                {errors.email && <span className="text-red-700">Email field is required</span>}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  name="password"
                  {...register('password',{
                  required:true,
                  min:6 ,
                  maxLength:20,
                  pattern:/^(?=.*[a-z])(?=.*[A-Z])/
                
                  })}
                  placeholder="password"
                  className="input input-bordered"
                  />
                  {errors.password?.type === 'required' && <p className="text-red-600">Password is required</p>}
                  {errors.password?.type === 'minLength' && <p className="text-red-600">Password must be 6 charracters</p>}
                  {errors.password?.type === 'maxLength' && <p className="text-red-600">Password must be less than 20 charracters</p>}
                  {errors.password?.type === 'pattern' && <p className="text-red-600">Password must have one uppercase and one lowercase and one number</p>}

                
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                <input typeof="" className="btn btn-primary" type="submit" value="Sign Up" />
              </div>
            </form>
            <p>Already have an account ? <Link to={'/login'}>Login here</Link></p>
          </div>
        </div>
      </div>
    </div>
    

  );
};

export default SignUp;
