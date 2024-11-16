import React, { useContext, useState } from "react";
import { Helmet } from "react-helmet";
import { Link, Navigate, useLocation, useNavigate } from "react-router-dom";
import { authContex } from "../provider/AuthProvider";

const LogIn = () => {
  const { logIn, setUser } = useContext(authContex);
  const [error, seterror] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log("Form Data:", formData);
    logIn(formData.email, formData.password)
      .then((userCredential) => {
        const user = userCredential.user;
        setUser(user);
        navigate(location?.state ? location.state : "/");
      })
      .catch((error) => {
        console.error("error code", error.code);
        console.error("error message", error.message);
        seterror(true);
      });
  };

  return (
    <>
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
          <h2 className="text-2xl font-semibold text-center mb-6">
            Login your account
          </h2>

          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-700 mb-2">
                Email address
              </label>
              <input
                type="email"
                id="email"
                placeholder="Enter your email address"
                className="input input-bordered w-full"
                value={formData.email}
                onChange={handleChange}
              />
            </div>

            <div className="mb-6">
              <label htmlFor="password" className="block text-gray-700 mb-2">
                Password
              </label>
              <input
                type="password"
                id="password"
                placeholder="Enter your password"
                className="input input-bordered w-full"
                value={formData.password}
                onChange={handleChange}
              />
            </div>

            {/* Added Forgot Password link */}
            {error && (
              <div className="mb-4 text-right">
                <p className="text-red-600"> your email or password is wrong {" "} 
                <Link to="/auth/forgot-password" className="text-blue-500">
                  Forgot Password?
                </Link></p>
              </div>
            )}

            <button type="submit" className="btn btn-block btn-primary">
              Login
            </button>
          </form>

          <p className="text-center mt-4 text-gray-600">
            Don't Have An Account?{" "}
            <Link to="/auth/register" className="text-red-500">
              Register
            </Link>
          </p>
        </div>
      </div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>LogIn</title>
        <link rel="icon" type="image/svg+xml" href="/home.png" />
      </Helmet>
    </>
  );
};

export default LogIn;
