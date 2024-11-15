import React from 'react';
import { Link } from 'react-router-dom';

const LogIn = () => {
    return (
      <>
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
          <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
            <h2 className="text-2xl font-semibold text-center mb-6">
              Login your account
            </h2>

            <form>
              <div className="mb-4">
                <label htmlFor="email" className="block text-gray-700 mb-2">
                  Email address
                </label>
                <input
                  type="email"
                  id="email"
                  placeholder="Enter your email address"
                  className="input input-bordered w-full"
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
                />
              </div>

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
      </>
    );
};

export default LogIn;