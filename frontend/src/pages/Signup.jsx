import React, { useState } from "react";
import { Link } from "react-router-dom";

function Signup() {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData);
    try {
      const response = await fetch("/URL", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Signup failed");
      }

      console.log("Signup successful");
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className="flex h-screen">
      <div className="hidden w-1/2 bg-navy-900 md:block">
        <div className="h-full bg-navy-900 flex items-center justify-center">
          <img src="/signup.svg" alt="" />
        </div>
      </div>
      <div className="w-full md:w-1/2 flex flex-col items-center justify-center bg-white p-6 overflow-auto">
        <Link to="/">
          <img
            src="/Logo.jpg"
            alt="Company Logo"
            className="w-64 h-auto mb-6 rounded-full shadow-lg"
          />
        </Link>
        <div className="w-full max-w-md space-y-6 flex flex-col items-center">
          <h2 className="text-3xl font-bold text-center text-navy-900">
            Sign Up
          </h2>
          <form className="space-y-4" onSubmit={handleSubmit}>
            <input
              type="text"
              name="username"
              value={formData.username}
              onChange={handleChange}
              placeholder="Username"
              className="w-full p-3 border rounded-lg focus:outline-none focus:border-teal-400"
            />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email"
              className="w-full p-3 border rounded-lg focus:outline-none focus:border-teal-400"
            />
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Password"
              className="w-full p-3 border rounded-lg focus:outline-none focus:border-teal-400"
            />
            <button
              type="submit"
              className="w-full p-3 bg-teal-500 text-white rounded-lg hover:bg-orange-400"
            >
              Sign Up
            </button>
          </form>
          <div className="text-center mt-4">
            <p className="text-navy-900">Or Continue with:</p>
            <div className="flex justify-center space-x-4 mt-2">
              <button className="flex flex-row border border-slate-200 rounded-lg hover:border-teal-500 p-3">
                <img
                  className="w-6 h-6"
                  src="https://www.svgrepo.com/show/475656/google-color.svg"
                  loading="lazy"
                  alt="google logo"
                />
                <span className="text-teal-500">Google</span>
              </button>
            </div>
          </div>
          <p className="text-center text-navy-900 mt-4 mb-6">
            Already have an account?{" "}
            <Link to="/login" className="text-teal-500">
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Signup;
