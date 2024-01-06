const Calculate = () => {
  return (
    <section className="py-28 relative bg-sky-800">
      <div className="relative z-10 max-w-screen-xl mx-auto px-4 md:text-center md:px-8">
        <div className="max-w-2xl md:mx-auto">
          <p className="text-white text-3xl font-semibold sm:text-4xl">
            Book your appliance repair today!
          </p>
          <p className="text-blue-100 mt-3">
            Our technicians are ready to start the repair process immediately as
            soon as you make an appointment.
          </p>
        </div>
        <div className="mt-4">
          <a
            href="#booking"
            className="inline-block py-3 px-6 text-xl text-gray-800 font-semibold bg-white duration-150 hover:bg-gray-100 active:bg-gray-200 rounded-full"
          >
            Book Online
          </a>
        </div>
      </div>
      <div
        className="absolute top-0 w-full h-full"
        style={{
          background:
            "linear-gradient(268.24deg, rgba(59, 130, 246, 0.76) 50%, rgba(59, 130, 246, 0.545528) 80.61%, rgba(55, 48, 163, 0) 117.35%)",
        }}
      ></div>
    </section>
  );
};

export default Calculate;
