import React, { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthProvider } from "../../../../USerContext/UserContext";
import { useForm } from "react-hook-form";

const Login = () => {
  const { loginUser } = useContext(AuthProvider);
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate()
  const location = useLocation();
  const from = location.state?.from?.pathname || '/'

  const handleLogIn = (data) => {
    loginUser(data.email, data.password)
      .then((result) => {
        const user = result.user;
        navigate(from, {replace : true})

      })
      .catch((err) => console.log(err));
    console.log(data);
  };
  // const onSubmit = values => console.log(values);

  return (
    <div className="flex items-center justify-center">
      <div className=" flex h-[800px] w-96 items-center justify-center flex-col shadow-lg">
        <h3 className="text-xl text-center">Login</h3>
        <form onSubmit={handleSubmit(handleLogIn)}>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              className="input input-bordered w-full max-w-xs"
              {...register("email", {
                required: "Email is Required",
              })}
            />
            
            <p className="text-red-600">{errors.email && errors.email.message}</p>
          </div>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Password</span>
            </label>

            <input
              type="password"
              className="input input-bordered w-full max-w-xs"
              {...register("password")}
            />
            <label className="label">
              <span className="label-text">Forget password?</span>
            </label>
          </div>
          <p>Don't have an account? <Link to='/signup'>Sign Up </Link></p>
          <input type="submit" className="btn btn-primary mt-5 w-full" />
        </form>
        <p className="text-center">Or</p>
        <hr />
        <div className="text-center p-3 form-control">
          <button className="btn btn-primary">Continue With Google</button>
        </div>
      </div>
    </div>
  );
};

export default Login;
