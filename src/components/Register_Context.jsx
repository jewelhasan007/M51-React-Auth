import { useContext } from "react";
import {nameContext} from "./ContextAPI";

const Register_Context = () => {

const {createUser} = useContext(nameContext);

const handleRegisterContext = e =>{
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    
    // create user in firebase
    createUser(email, password)
    .then(result => {
        console.log('result is', result.user)
    })
    .catch(error=>{
        console.log('error is', error.message);
    });
}

    return (
  
            <div className="hero bg-base-200 min-h-screen ">
  <div className="hero-content flex-col ">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold text-green-500">Register Page</h1>
     
    </div>
    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
      <form className="card-body" onSubmit={handleRegisterContext}>
        <div className="form-control ">
          <label className="label">
            <span className="label-text text-green-600">Email</span>
          </label>
          <input type="text" name="name" placeholder="Name" className="input input-bordered" required />
        </div>
        <div className="form-control ">
          <label className="label">
            <span className="label-text text-green-600">Email</span>
          </label>
          <input type="email" name="email" placeholder="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text text-green-600">Password</span>
          </label>
          <input type="password" name="password" placeholder="password" className="input input-bordered" required />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover text-green-600">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary hover:text-green-600">Login</button>
        </div>
      </form>
    </div>
  </div>
</div>

    );
};

export default Register_Context;