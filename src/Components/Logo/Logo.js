const bosch = require("./1.jpeg")
const samsung = require("./2.png")
const mille = require("./3.png")
const maytag = require("./4.jpeg")
const kitchen = require("./5.png")
const wir = require("./6.png")

const Logo = () => {
  return (
      <div className="py-14">
          <div className="max-w-screen-xl mx-auto px-4 md:px-8">
              <div className="max-w-xl mx-auto text-center">
                  <h3 className="text-gray-800 text-3xl font-semibold sm:text-4xl">
                  Appliance Brands We Fix
                  </h3>
                  <p className="text-gray-600 mt-3">
                  Leave your appliance worries to us! We repair most popular brands.
                  </p>
              </div>
              <div className="mt-12 flex justify-center">
                  <ul className="inline-grid grid-cols-2 gap-x-10 gap-y-6 md:gap-x-16 md:grid-cols-3">

                      {/* LOGO 1 */}
                    <li>
                      <img src={bosch} alt="bosch" className="w-40" />
                    </li>

                      {/* LOGO 2 */}
                    <li>
                      <img src={samsung} alt="samsung"className="w-40" />
                    </li>

                      {/* LOGO 3 */}
                    <li>
                    <img src={mille} alt="meile" className="w-40"/>
                    </li>

                      {/* LOGO 4 */}
                    <li>
                    <img src={maytag} alt="maytag"className="w-40" />
                    </li>

                      {/* LOGO 5 */}
                    <li>
                    <img src={kitchen} alt="kitchen"className="w-40" />
                    </li>

                      {/* LOGO 6 */}
                    <li>
                    <img src={wir} alt="wir" className="w-40"/>
                    </li>

    

                  </ul>
              </div>
          </div>
      </div>
  )
}

export default Logo;
