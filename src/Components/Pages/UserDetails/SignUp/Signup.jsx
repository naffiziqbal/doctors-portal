import React, { useContext } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { AuthProvider } from "../../../../USerContext/UserContext";
import { useForm } from "react-hook-form";

const Signup = () => {
  const { createUser, updateUserInfo, loginWithGoogle } =
    useContext(AuthProvider);
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();

  const handleSignUp = (data) => {

    createUser(data.email, data.password, data.photoURL)
      .then((result) => {
        const user = result.user;
        handleUserInfo({
          displayName: data.name,
          email: data.email,
          photoURL: data.photoURL,
        });
        //Show Photo URL
      })
      .catch((err) => console.log(err));
    saveUserToDB(data.email, data.name, data.photoURL);
  };
  const handleUserInfo = (displayName, photoURL) => {
    updateUserInfo(displayName, photoURL);
  };
  const saveUserToDB = (email, displayName, photoURL) => {
    const user = { email, displayName, photoURL };
    fetch(`http://localhost:5000/users`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        getToken(email);
        if (data.acknowledged) {
        }
      })
      .catch((err) => console.log(err));
  };
  const getToken = (email) => {
    fetch(`http://localhost:5000/jwt?email=${email}`)
      .then((res) => res.json())
      .then((data) => {

        if (data.accessToken) {
          localStorage.setItem("accessToken", data.accessToken);
          navigate("/");
        }
      });
  };
  const handleGoogleLogIn = () => {
    loginWithGoogle()
    .then((result) => {
      const user = result.user;
      getToken(user.email)
      navigate('/')
    })
    .catch(err=> console.log(err))
  };
  return (
    <div className="flex items-center justify-center">
      <div className=" flex h-[800px] w-96 items-center justify-center flex-col shadow-lg">
        <h3 className="text-xl text-center">Sign Up</h3>
        <form onSubmit={handleSubmit(handleSignUp)}>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              type="name"
              className="input input-bordered w-full max-w-xs"
              {...register("name")}
            />
          </div>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Profile Url</span>
            </label>
            <input
              type="url"
              className="input input-bordered w-full max-w-xs"
              {...register("photoURL")}
            />
          </div>
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
          <button className="btn btn-primary" onClick={handleGoogleLogIn}>
            Continue With Google
          </button>
        </div>
      </div>
    </div>
  );
};

export default Signup;
