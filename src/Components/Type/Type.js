const ref = require("./ref.webp")
const washer = require("./washer.webp")

const Type = () => {

  const team = [
      {
          avatar: ref,
          name: "Refrigerator Repair",
          title: "Estimated Labor Fee $160 - $360"
      },
      {
          avatar: washer,
          name: "Washer Repair",
          title: "Estimated Labor Fee $150 - $270"
      },
      {
          avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
          name: "Brown Luis",
          title: "Full stack engineer"
      },
      {
          avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
          name: "Lysa sandiago",
          title: "Head of designers"
      },
      {
          avatar: "https://images.unsplash.com/photo-1463453091185-61582044d556?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
          name: "Daniel martin",
          title: "Product designer"
      },
      {
          avatar: "https://images.unsplash.com/photo-1540569014015-19a7be504e3a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80",
          name: "Vicky tanson",
          title: "Product manager"
      },
  ]

  return (
      <section className="py-14">
          <div className="max-w-screen-xl mx-auto px-4 md:px-8">
              <div className="max-w-xl mx-auto sm:text-center">
                  <h3 className="text-gray-800 text-3xl font-semibold sm:text-4xl">
                  What Appliances Do We Repair?
                  </h3>
                  <p className="text-gray-600 mt-3">
                  Our services cover a wide range of appliances, including refrigerators, washers, dryers, ovens, and more.
                  </p>
              </div>
              <div className="mt-12">
                    <ul className="grid gap-8 sm:grid-cols-2 md:grid-cols-4">
                      {
                          team.map((item, idx) => (
                              <li key={idx}>
                                  <div className="w-full h-60 sm:h-52 md:h-56 shadow-md rounded-xl flex py-3 justify-center">
                                        <img
                                            src={item.avatar}
                                            className=" h-full object-cover object-center "
                                            alt=""
                                        />
                                    </div>
                                    <div className="mt-4">
                                        <h4 className="text-lg text-gray-700 font-semibold">{item.name}</h4>
                                        <p className="text-indigo-600">{item.title}</p>
                                    </div>
                              </li>
                          ))
                      }
                  </ul>
              </div>
          </div>
      </section>
  )
}

export default Type;
