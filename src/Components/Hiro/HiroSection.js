import React, {Suspense} from "react";
import "./Hiro.css";
import ScrollToTopButton from "../ScrollToTopButton/ScrollToTopButton";
import { Link } from "react-router-dom";
import LazyLoad from 'react-lazy-load';
import Online from "../Online/Online";
import Book from "../Book/Book";
import Refferal from "../Refferal/Refferal"
import Logo from "../Logo/Logo";
import Type from "../Type/Type";
import Calculate from "../Calculate/Calculate";
import Footer from "../Footer/Footer";

// const Online = React.lazy(() => import("../Online/Online.js"));
// const Book = React.lazy(() => import("../Book/Book.js"))
// const Refferal = React.lazy(() => import("../Firebase/Fire.js"));
// const Type = React.lazy(() => import("../Type/Type.js"));
// const Logo = React.lazy(() => import("../Logo/Logo.js"));
// const Calculate = React.lazy(() => import("../Calculate/Calculate.js"));
// const Footer = React.lazy(() => import("../Footer/Footer.js"));

const pic = require("./pic.webp");

const HiroSection = () => {
  return (
    <section className="py-2 md:py-22">
      
      <div className="max-w-screen-xl mx-auto text-gray-600 gap-x-12 items-center justify-between overflow-hidden md:flex md:px-4">
        <div className="flex-none mt-2 md:mt-0 md:max-w-xl">
        <LazyLoad  threshold={0.95} onContentVisible={() => {console.log('loaded!')}}>
          <img
            src={pic}
            className="shadow-md md:rounded-tr-lg md:rounded-lg"
            alt="appliance-repair"
          />
          </LazyLoad>
        </div>
        <div className="mt-2 flex-none space-y-5 px-4 sm:max-w-lg md:px-0 lg:max-w-xl">
          <h3 className="text-md text-indigo-600 font-medium">
            Professional Appliance Repair Services
          </h3>
          <h1 className="text-4xl text-gray-800 font-extrabold md:text-5xl">
            Need Urgent Repair Service?{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4F46E5] to-[#E114E5]">
            Are you located in Houston?
            </span>
          </h1>

          <p>
            We are Appliance Repair Specialists in your area. Schedule your
            service now and let our expert technicians bring your appliances
            back to life. Click below to book your appointment or contact us for
            immediate assistance.
          </p>
          <div className="items-center gap-x-3 space-y-3 sm:flex sm:space-y-0 text-lg font-bold">
            <a
              href="#booking"
              className="block py-2 px-4 text-center text-white bg-indigo-600 duration-150 hover:bg-indigo-500 active:bg-indigo-700 rounded-lg shadow-lg hover:shadow-none"
            >
              Urgent Appointment
            </a>
            <Link
              to="/login"
              className="flex items-center justify-center gap-x-2 py-2 px-4 text-gray-700 hover:text-gray-500 duration-150 active:bg-gray-100 border rounded-lg md:inline-flex"
            >
              Login now
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="w-5 h-5"
              >
                <path
                  fillRule="evenodd"
                  d="M2 10a.75.75 0 01.75-.75h12.59l-2.1-1.95a.75.75 0 111.02-1.1l3.5 3.25a.75.75 0 010 1.1l-3.5 3.25a.75.75 0 11-1.02-1.1l2.1-1.95H2.75A.75.75 0 012 10z"
                  clipRule="evenodd"
                />
              </svg>
            </Link>
          </div>
        </div>
      </div>
      <div className="mt-14 px-4 md:px-8">
      <Suspense fallback={<div>...Loading</div>}>
        <Type />
			  <Logo />
			  	
        <Book />
			  <Online />
        <Refferal />
        
        
        <Calculate />
        <Footer />
		</Suspense>
        
        <a href="https://api.whatsapp.com/send?phone=+13466290122">
          <ScrollToTopButton />
        </a>
      </div>
    </section>
  );
};

export default HiroSection;
