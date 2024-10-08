import React, { useContext, useState } from 'react';
import { nameContext } from './ContextAPI';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import app from './firebase.config';

const LogIn = () => {
   // Context API 
  const AuthInfo = useContext(nameContext);


// Log In by email and password
  const [userLogIn, setUserLogIn] = useState(null);
  const [errorLogIn, setErrorLogIn] = useState(null);

  const handleLogIn = e =>{
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log('login', email, password)
    
    const auth = getAuth(app)
    signInWithEmailAndPassword(auth, email, password)
    .then(result => {
      const logId = result.user;
      setUserLogIn(logId)
      console.log(logId);
    })
    .catch(error=>{
      const errorAll = error.message;
      setErrorLogIn(errorAll);
    })
  }
    return (
        <div>
          
    <div className="hero bg-base-200 min-h-screen">
  <div className="hero-content flex-col ">
    <div className="text-center lg:text-left">
     
      <h1 className="text-5xl font-bold">Login now!</h1>
      
    </div>
    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
      <form className="card-body" onSubmit={handleLogIn}>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" name='email' placeholder="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" name='password' placeholder="password" className="input input-bordered" required />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary" >Login</button>
        </div>
     
      </form>
      <div>
       
      
      </div>
      </div>
    </div>
  </div>
 
</div>
       
    );
};

export default LogIn;