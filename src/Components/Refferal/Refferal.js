const discount = require("./coupon.PNG")

const Refferal = () => {
  return (
      <section className="relative max-w-screen-xl mx-auto py-4 my-12 px-4 md:px-8">
          <div className="absolute top-0 left-0 w-full h-full bg-white opacity-40"></div>
          <div className="relative z-10 gap-5 items-center lg:flex">
              <div className="flex-1 max-w-lg py-5 sm:mx-auto sm:text-center lg:max-w-max lg:text-left">
                  <h3 className="text-3xl text-gray-800 font-extrabold md:text-4xl">
                  Join our <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4F46E5] to-[#E114E5]">Referral program</span> today!
                  </h3>
                  
                  <a
                      className="mt-5 px-4 py-2 text-indigo-600 font-medium bg-indigo-50 rounded-full inline-flex items-center"
                      href="javascript:void()">
                      Login
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 ml-1 duration-150" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                      </svg>
                  </a>
                  <p className="text-gray-500 leading-relaxed mt-3">
                  Getting referral awards is simple! Share the love for our reliable appliance repair services with friends and family. When they schedule a repair with us, both you and your referral enjoy exclusive rewards as a token of our appreciation. It's a win-win! Just refer, and reap the benefits. Join our referral program today, and start earning for every successful referral!
                  </p>
                  <h3 className="text-3xl text-gray-800 font-extrabold md:text-4xl text-transparent bg-clip-text bg-gradient-to-r from-[#4F46E5] to-[#E114E5]">Your awards</h3> <span className="text-2xl text-gray-800 font-extrabold md:text-3xl">$25 coupon</span>
                  <h3 className="mt-2 text-3xl text-gray-800 font-extrabold md:text-4xl text-transparent bg-clip-text bg-gradient-to-r from-[#4F46E5] to-[#E114E5]">Referral awards</h3> <span className="text-2xl text-gray-800 font-extrabold md:text-3xl">10% discount for labor fee </span>
              </div>
              <div className="flex-1 mt-5 mx-auto sm:w-9/12 lg:mt-0 lg:w-auto">
                  <img 
                      src={discount} 
                      alt="discount-appliance-repair" 
                      className="w-full rounded-lg shadow-2xl hover:shadow-lg" 
                  />
              </div>
          </div>
      </section>
  )
}

export default Refferal;
