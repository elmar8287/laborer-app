const logo = require("../Navbar/alpha_logo.PNG")

export default () => {
    return (
        <section className="py-14">
            <div className="max-w-screen-xl mx-auto px-4 md:px-8">
                <div className="max-w-3xl mx-auto text-center">
                    <h2 className="p-10 text-4xl sm:text-6xl font-bold mx-auto text-green-600">Congratulations!</h2>
                    <figure>
                        <blockquote>
                            <p className="text-gray-800 text-md">
                            You have booked an appointment and we will contact you shortly. You can also find out about the status of your application by calling the number
                            </p>
                        </blockquote>
                        <div className="p-12">
                        <p src={logo} className="text-4xl font-bold mx-auto">346-268-5088</p>
                    </div>
                    </figure>
                </div>
            </div>
        </section>
    )
}
