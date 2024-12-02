import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const Landing = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="relative w-full h-screen bg-gradient-to-b from-teal-600 to-blue-900">
      {/* Hamburger Menu Button */}
      <div className="absolute top-0 left-0 p-6 lg:hidden z-50">
        <button
          onClick={toggleMenu}
          className="text-white focus:outline-none"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="absolute top-0 right-0 w-2/3 h-full bg-white lg:hidden z-50 shadow-lg">
          <div className="flex justify-end p-6">
            <button onClick={toggleMenu} className="text-teal-500">
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          <div className="flex flex-col items-center mt-10 space-y-6 relative">
            <Link
              to="/signup"
              className="px-6 py-3 bg-teal-500 text-white rounded-lg hover:bg-orange-400 transition duration-300 ease-in-out"
              onClick={toggleMenu}
            >
              Sign Up
            </Link>
            <Link
              to="/login"
              className="px-6 py-3 bg-teal-500 text-white rounded-lg hover:bg-orange-400 transition duration-300 ease-in-out"
              onClick={toggleMenu}
            >
              Login
            </Link>
          </div>
        </div>
      )}

      {/* Desktop Menu */}
      <div className="absolute top-0 right-0 p-6 hidden lg:flex lg:space-x-4 z-50">
        <Link
          to="/signup"
          className="px-6 py-3 bg-teal-500 text-white rounded-lg hover:bg-orange-400 transition duration-300 ease-in-out"
        >
          Sign Up
        </Link>
        <Link
          to="/login"
          className="px-6 py-3 bg-teal-500 text-white rounded-lg hover:bg-orange-400 transition duration-300 ease-in-out"
        >
          Login
        </Link>
      </div>

      {/* Logo and Company Review Section */}
      <div className="w-full bg-gradient-to-r from-blue-900 to-teal-700 py-16 px-6 flex flex-col items-center justify-center h-screen">
        <img
          src="/Logo.jpg" // Replace with your logo path
          alt="Company Logo"
          className="w-48 h-48 mb-6 rounded-full shadow-lg"
        />
        <p className="text-white text-lg max-w-3xl">
          <strong className="text-orange-400 text-xl">CERABEAM COMPANY</strong> is a leading provider of advanced lighting solutions,
          designed to enhance energy efficiency and sustainability across various industries.
          Our mission is to deliver cutting-edge, high-performance lighting systems that not
          only reduce energy consumption but also improve the functionality and aesthetic appeal
          of the environments we illuminate.
        </p>
      </div>

      {/* Carousel Section */}
      <div className="w-full bg-blue-900 flex justify-center px-4 items-center">
        <div className="w-full max-w-5xl h-full flex items-center justify-center overflow-hidden">
          <Carousel
            showArrows={true}
            autoPlay={true}
            infiniteLoop={true}
            showThumbs={false}
            showStatus={false}
            className="w-full h-full"
          >
            <div>
              <img
                src="/images.jpeg"
                alt="First Slide"
                className="w-full h-96 object-cover"
              />
            </div>
            <div>
              <img
                src="/images.jpeg"
                alt="Second Slide"
                className="w-full h-96 object-cover"
              />
            </div>
            <div>
              <img
                src="/images.jpeg"
                alt="Third Slide"
                className="w-full h-96 object-cover"
              />
            </div>
          </Carousel>
        </div>
      </div>

      {/* Company Overview Section */}
      <div className="w-full h-auto p-10 bg-white text-center">
        <h2 className="text-4xl font-extrabold text-teal-600 mb-6">
          About <span className="text-orange-500">CERABEAM COMPANY</span>
        </h2>
        <p className="text-lg text-gray-600 max-w-4xl mx-auto">
          We offer advanced lighting solutions tailored to meet energy efficiency and sustainability standards across industries.
          Our products combine performance with aesthetics, enhancing the environment while reducing energy consumption.
        </p>
        <p className="text-lg text-gray-600 max-w-4xl mx-auto mt-4">
          Committed to innovation and customer satisfaction, CERABEAM COMPANY provides cutting-edge solutions for industrial, commercial,
          and residential spaces. Join us in lighting the path to a sustainable future!
        </p>
        <p className="text-lg text-orange-500 font-semibold mt-8 animate-bounce">
          Join us in lighting the path to a brighter, more sustainable future!
        </p>
      </div>
    </div>
  );
};

export default Landing;
