import { useContext } from "react";
import { nameContext } from "./ContextAPI";
import { useNavigate } from "react-router-dom";

const LogIn_Context = () => {
  const {logUser} = useContext(nameContext)
  const navigate = useNavigate();


  const handleLogIn = e =>{
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    // to go to in home page
    

    // // login from firebase
    logUser(email, password)
    .then(result =>{
      const id = result.user;
      console.log(id)
      // input field reset call in login page
      e.target.reset();
      navigate("/");

    })
    .catch(error =>{
      console.log('error', error)
    })
  }

    return (

            <div className="hero bg-base-200 min-h-screen">
  <div className="hero-content flex-col ">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold">Login Page</h1>
    
    </div>
    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
      <form className="card-body" onSubmit={handleLogIn}>
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
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
     
        <div className="form-control mt-6">
          <button className="btn btn-sm">Login</button>
        </div>
      </form>
    </div>
  </div>
</div>

    );
};

export default LogIn_Context;