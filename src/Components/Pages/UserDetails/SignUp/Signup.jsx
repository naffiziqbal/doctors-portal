import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthProvider } from "../../../../USerContext/UserContext";
import { useForm } from "react-hook-form";

const Signup = () => {
  const { createUser } = useContext(AuthProvider);
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();
  const handleSignUp = (data) => {
    createUser(data.email, data.password)
      .then((result) => {
        const user = result.user;
      })
      .catch((err) => console.log(err));
  };
  return (
    <div className="flex items-center justify-center">
      <div className=" flex h-[800px] w-96 items-center justify-center flex-col shadow-lg">
        <h3 className="text-xl text-center">Sign Up</h3>
        <form onSubmit={handleSubmit(handleSignUp)}>
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

            <p className="text-red-600">
              {errors.email && errors.email.message}
            </p>
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
          </div>
          <p>
            Don't have an account? <Link to="/login">Log In </Link>
          </p>
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

export default Signup;
