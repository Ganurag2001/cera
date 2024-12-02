import React from "react";
import { Link } from "react-router-dom";

function Forgot() {
  return (
    <div className="flex h-screen">
      <div className="hidden w-1/2 bg-navy-900 md:block">
        <div className="h-full bg-navy-900 flex items-center justify-center">
          <img src="/forgotpass.png" alt="" /> {/* Add appropriate image */}
        </div>
      </div>
      <div className="w-full md:w-1/2 flex flex-col items-center justify-center bg-white p-6">
        <Link to="/">
          <img
            src="/Logo.jpg"
            alt="Company Logo"
            className="w-64 h-auto mb-6 rounded-full shadow-lg"
          />
        </Link>
        <div className="w-full max-w-md space-y-6 flex flex-col items-center">
          <h2 className="text-3xl font-bold text-center text-navy-900">
            Forgot Password
          </h2>
          <form className="space-y-4">
            <p className="text-center text-gray-600 mb-4">
              Enter your email address to receive a password reset link.
            </p>
            <input
              type="email"
              placeholder="Email"
              className="w-full p-3 border rounded-lg focus:outline-none focus:border-teal-400"
            />
            <button
              type="submit"
              className="w-full p-3 bg-teal-500 text-white rounded-lg hover:bg-orange-400"
            >
              Send Reset Link
            </button>
          </form>
          <p className="text-center mt-4 text-navy-900">
            Remembered your password?{" "}
            <Link to="/login" className="text-teal-500">
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Forgot;
