import "./Hiro.css";
import Logo from "../Logo/Logo";
import Calculate from "../Calculate/Calculate";
import Type from "../Type/Type";
import Online from "../Online/Online";
import Book from "../Book/Book";
import Refferal from "../Refferal/Refferal";
import Footer from "../Footer/Footer";
import ScrollToTopButton from "../ScrollToTopButton/ScrollToTopButton";
import { Link } from "react-router-dom";
import Banner from "../Banner/Banner";

const pic = require("./pic.PNG");

const HiroSection = () => {
  return (
    <section className="py-2 md:py-22">
      <Banner />
      <div className="max-w-screen-xl mx-auto text-gray-600 gap-x-12 items-center justify-between overflow-hidden md:flex md:px-4">
        <div className="flex-none mt-2 md:mt-0 md:max-w-xl">
          <img
            src={pic}
            className=" md:rounded-tl-[108px]"
            alt="appliance-repair"
          />
        </div>
        <div className="mt-2 flex-none space-y-5 px-4 sm:max-w-lg md:px-0 lg:max-w-xl">
          <h1 className="text-sm text-indigo-600 font-medium">
            Over 200 successful clients
          </h1>
          <h2 className="text-4xl text-gray-800 font-extrabold md:text-5xl">
            Expert Appliance Repairs in Houston{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4F46E5] to-[#E114E5]">
              Precision and Reliability
            </span>
          </h2>

          <p>
            Ready to experience hassle-free appliance repairs? Schedule your
            service now and let our expert technicians bring your appliances
            back to life. Click below to book your appointment or contact us for
            immediate assistance.
          </p>
          <div className="items-center gap-x-3 space-y-3 sm:flex sm:space-y-0 text-lg font-bold">
            <a
              href="#booking"
              className="block py-2 px-4 text-center text-white bg-indigo-600 duration-150 hover:bg-indigo-500 active:bg-indigo-700 rounded-lg shadow-lg hover:shadow-none"
            >
              Book Appointment
            </a>
            <Link
              to="/login"
              className="flex items-center justify-center gap-x-2 py-2 px-4 text-gray-700 hover:text-gray-500 duration-150 active:bg-gray-100 border rounded-lg md:inline-flex"
            >
              Login
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
        <Online />
        <Book />
        <Refferal />
        <Type />
        <Logo />
        <Calculate />

        <Footer />
        <a href="https://api.whatsapp.com/send?phone=+13466290122">
          <ScrollToTopButton />
        </a>
      </div>
    </section>
  );
};

export default HiroSection;
