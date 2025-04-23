const logo = require("../Navbar/alpha_logo.PNG");

export default () => {
  return (
    <section className="py-10 sm:py-14">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 md:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="p-6 sm:p-10 text-3xl sm:text-5xl font-bold text-green-600">
            Congratulations!
          </h2>
          <h2 className="p-2 sm:p-4 text-xl sm:text-2xl font-bold text-green-600">
            We will contact you in 5 min!
          </h2>
          <figure>
            <blockquote>
              <p className="text-gray-800 text-sm sm:text-base leading-relaxed">
                You have booked an appointment and we will contact you shortly. 
                You can also find out about the status of your application by calling the number:
              </p>
            </blockquote>
            <div className="p-6 sm:p-12">
              {/* Display the logo
              <img
                src={logo}
                alt="Company Logo"
                className="w-24 sm:w-32 h-auto mx-auto mb-4"
              /> */}
              <p className="text-2xl sm:text-3xl font-bold text-gray-900">
                281-769-2902
              </p>
            </div>
          </figure>
        </div>
      </div>
    </section>
  );
};
