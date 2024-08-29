const review_1 = require("./review_1.PNG")
const review_2 = require("./review_2.PNG")
const nextdoor = require("./nextdoor.PNG")

const Review = () => {
  return (
      <div className="py-14">
          <div className="max-w-screen-xl mx-auto px-4 md:px-8">
              <div className="max-w-xl mx-auto text-center">
                  <h3 className="text-gray-800 text-3xl font-semibold sm:text-4xl">
                  See what others saying about us
                  </h3>
                  <p className="text-gray-600 mt-3">
                  We proud of each review and always try to get more!
                  </p>
              </div>
              <div className="mt-12 flex justify-center">
                  <ul className="inline-grid gap-x-10 gap-y-6 md:gap-x-4 md:grid-cols-3">

                      {/* LOGO 1 */}
                    <li>
                      <img src={review_1} alt="Loretta" className="w-70 shadow-xl p-2 rounded-lg" />
                    </li>

                      {/* LOGO 2 */}
                    <li>
                      <img src={review_2} alt="Robert"className="w-70 shadow-xl p-2 rounded-lg" />
                    </li>

                      {/* LOGO 3 */}
                    <li>
                    <img src={nextdoor} alt="Nextdoor" className="w-70 shadow-xl p-2 rounded-lg"/>
                    </li>
                  </ul>
              </div>
          </div>
      </div>
  )
}

export default Review;
