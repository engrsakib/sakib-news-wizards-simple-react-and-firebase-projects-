import React, { useContext, useState } from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { authContex } from '../provider/AuthProvider';

const Register = () => {
    const {createNewUser, user, setUser} = useContext(authContex);

     const [formData, setFormData] = useState({
       name: "",
       photoUrl: "",
       email: "",
       password: "",
       acceptTerms: false,
     });

     const handleChange = (e) => {
       const { name, value, type, checked } = e.target;
       setFormData((prevData) => ({
         ...prevData,
         [name]: type === "checkbox" ? checked : value,
       }));
     };
     const handleSubmit = (e) => {
       e.preventDefault();
       console.log("Form submitted:", formData.password);
       createNewUser(formData.email, formData.password)
       .then((userCredential) => {
            // Signed up
            const user = userCredential.user;
            setUser(user);
            // console.log(user);
            // ...
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;

            console.log("error code", errorCode);
            console.log("error Massage", errorMessage);
            // ..
          });
     };
    return (
      <>
        <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
          <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
            <h2 className="text-2xl font-semibold text-center mb-6">
              Register your account
            </h2>

            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label htmlFor="name" className="block text-gray-700 mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Enter your name"
                  className="input input-bordered w-full"
                  value={formData.name}
                  onChange={handleChange}
                />
              </div>

              <div className="mb-4">
                <label htmlFor="photoUrl" className="block text-gray-700 mb-2">
                  Photo URL
                </label>
                <input
                  type="url"
                  id="photoUrl"
                  name="photoUrl"
                  placeholder="Enter your photo URL"
                  className="input input-bordered w-full"
                  value={formData.photoUrl}
                  onChange={handleChange}
                />
              </div>

              <div className="mb-4">
                <label htmlFor="email" className="block text-gray-700 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Enter your email address"
                  className="input input-bordered w-full"
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>

              <div className="mb-4">
                <label htmlFor="password" className="block text-gray-700 mb-2">
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  placeholder="Enter your password"
                  className="input input-bordered w-full"
                  value={formData.password}
                  onChange={handleChange}
                />
              </div>

              <div className="mb-6 flex items-center">
                <input
                  type="checkbox"
                  id="acceptTerms"
                  name="acceptTerms"
                  className="checkbox"
                  checked={formData.acceptTerms}
                  onChange={handleChange}
                  required
                />
                <label htmlFor="acceptTerms" className="ml-2 text-gray-600">
                  Accept{" "}
                  <span className="text-gray-800 font-semibold">
                    Term & Conditions
                  </span>
                </label>
              </div>

              <button type="submit" className="btn btn-block btn-primary">
                Register
              </button>
            </form>
            <p className="mt-4 text-center text-gray-600">
              Already have an account?{" "}
              <Link to="/auth/login" className="text-orange-400 font-semibold">
                LogIn
              </Link>
            </p>
          </div>
        </div>
        <Helmet>
          <meta charSet="utf-8" />
          <title>Registern</title>
          <link rel="icon" type="image/svg+xml" href="/home.png" />
        </Helmet>
      </>
    );
};

export default Register;