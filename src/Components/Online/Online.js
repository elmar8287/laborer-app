import {
    Link
  } from 'react-router-dom';

const discount = require("./disc.PNG")

const Online = () => {
  return (
      <section className="relative max-w-screen-xl mx-auto py-4 px-4 md:px-8">
          <div className="absolute top-0 left-0 w-full h-full bg-white opacity-40"></div>
          <div className="relative z-10 gap-5 items-center lg:flex">
              <div className="flex-1 max-w-lg py-5 sm:mx-auto sm:text-center lg:max-w-max lg:text-left">
                  <h3 className="text-3xl text-gray-800 font-extrabold md:text-4xl">
                  By Logging in, you will receive <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4F46E5] to-[#E114E5]">a 15% discount on your first diagnosis.</span>
                  </h3>
                  <Link to="/login" className="mt-5 px-4 py-2 text-indigo-600 font-medium bg-indigo-50 rounded-full inline-flex items-center"
                      >
                        Login
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 ml-1 duration-150" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                      </svg></Link>
                  {/* <a
                      className="mt-5 px-4 py-2 text-indigo-600 font-medium bg-indigo-50 rounded-full inline-flex items-center"
                      href="/login">
                      Login
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 ml-1 duration-150" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                      </svg>
                  </a> */}
                  <a
                      className="ml-2 mt-5 px-4 py-2 text-indigo-600 font-medium bg-indigo-50 rounded-full inline-flex items-center"
                      href="#referral">
                      Referral program
                  </a>
                  <p className="text-gray-500 leading-relaxed mt-3">
                  Service call - means coming to your address and making a full diagnosis of your appliance. We provide you with the issue reason and offer the repair. If you agree with the repair, then the labor fee will be charged, otherwise, you will pay only the service call fee.
                  </p>
              </div>
              <div className="flex-1 mt-5 mx-auto sm:w-9/12 lg:mt-0 lg:w-auto">
                  <img 
                      src={discount} 
                      alt="discount-appliance-repair" 
                      className="w-full rounded-full shadow-2xl hover:shadow-lg" 
                  />
              </div>
          </div>
      </section>
  )
}

export default Online;
