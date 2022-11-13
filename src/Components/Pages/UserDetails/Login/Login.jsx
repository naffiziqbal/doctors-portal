import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  const handleSubmit = () => {};
  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left"></div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form className="card-body" onSubmit={handleSubmit}>
              <h3 className="text-xl text-center">Login</h3>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="email"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="password"
                  className="input input-bordered"
                />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary" type="submit">Login</button>
              </div>
              <p>New To Doctors Portal ? <Link to={'/signup'} className ="text-blue-500"> Create new account</Link></p>
            </form>
            <p className="text-center">Or</p>
            <hr />
            <div className="text-center p-3 form-control">
              <button className="btn btn-primary">Continue With Google</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
