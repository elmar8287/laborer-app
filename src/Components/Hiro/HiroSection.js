import "./Hiro.css"

const cupon = require("./cupon.PNG")

const HiroSection = () => {
  return (
      <section>
          <div className="max-w-screen-xl mx-auto px-4 pt-20 pb-12 gap-12 text-gray-600 md:px-8 md:bg-sky-100 md:rounded-lg">
              <div className="space-y-5 max-w-4xl mx-auto text-center">
                  <h2 className="text-4xl text-gray-800 font-extrabold mx-auto md:text-5xl">
                  Expert Appliance Repairs  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4F46E5] to-[#E114E5]">Precision and Reliability</span>
                  </h2>
                  <p className="max-w-2xl mx-auto">
                  Ready to experience hassle-free appliance repairs? Schedule your service now and let our expert technicians bring your appliances back to life. Click below to book your appointment or contact us for immediate assistance. 
                  </p>
                  <div className="items-center justify-center gap-x-3 space-y-3 sm:flex sm:space-y-0">
                      <a href="javascript:void(0)" className="block py-2 px-4 text-white font-medium bg-indigo-600 duration-150 hover:bg-indigo-500 active:bg-indigo-700 rounded-lg shadow-lg hover:shadow-none">
                          Book Appointment
                      </a>
                      <a href="javascript:void(0)" className="block py-2 px-4 text-gray-700 hover:text-gray-500 font-medium duration-150 active:bg-gray-100 border rounded-lg">
                          Login
                      </a>
                  </div>
              </div>
              {/* <div className="mt-14">
                  <img src={cupon} className="w-full md:h-auto max-w-xl mx-auto shadow-2xl rounded-lg border" alt="" />
              </div> */}
          </div>
      </section>
  )
}

export default HiroSection;