const ref = require("./ref.webp")
const washer = require("./washer.webp")
const dishwasher = require("./dishwasher.webp")
const dryer = require("./dryer.webp")
const oven = require("./oven.webp")
const freez = require("./freez.webp")
const cook = require("./cook.webp")
const micro = require("./micro.webp")

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
          avatar: dishwasher,
          name: "Dishwasher Repair",
          title: "Estimated Labor Fee $140 - $180"
      },
      {
          avatar: dryer,
          name: "Dryer Repair",
          title: "Estimated Labor Fee $140 - $230"
      },
      {
          avatar: freez,
          name: "Freezer Repair",
          title: "Estimated Labor Fee $160 - $280"
      },
      {
          avatar: oven,
          name: "Oven Repair",
          title: "Estimated Labor Fee $180 - $320"
      },
      {
        avatar: micro,
        name: "Microwave Repair",
        title: "Estimated Labor Fee $140 - $180"
    },
    {
      avatar: cook,
      name: "Stove / Cooktop Repair",
      title: "Estimated Labor Fee $140 - $280"
  },
  ]

  return (
      <section className="py-14" id="type">
          <div className="max-w-screen-xl mx-auto px-4 md:px-8">
              <div className="max-w-xl mx-auto sm:text-center">
                  <h3 className="text-gray-800 text-3xl font-semibold sm:text-4xl">
                  What Appliances Do We Repair?
                  </h3>
                  <p className="text-gray-600 mt-3">
                  Our fees are around the average on market, but the main goal is to make our clients happy. The costs are mentioned without spareparts, which could be on-demand order. The service call also will not be charged.
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
                                            className="p-3 h-full object-cover object-center "
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
