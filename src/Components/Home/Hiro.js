import React from 'react';
import HiroSection from '../Hiro/HiroSection';
const photo = require("./hiro.webp")
function Hiro({user}) {
  return (

    <>
    <HiroSection />
    {/* <section className="py-14">
            <div className="max-w-screen-xl mx-auto md:px-8">
                <div className="items-center gap-x-12 sm:px-4 md:px-0 lg:flex">
                    
                    <div className="max-w-xl px-4 space-y-3 mt-6 sm:px-0 md:mt-0 lg:max-w-2xl">
                        <h3 className="text-indigo-600 font-semibold text-[20px]">
                            New service!
                        </h3>
                        <p className="text-gray-800 text-3xl font-bold sm:text-4xl">
                            Calculate Estimate Repair Cost
                        </p>
                        <p className="mt-3 text-gray-600">
                        Curious about repair costs? Use our convenient online calculator to get a quick estimate for your appliance repair. Just input some basic details, and discover transparent pricing tailored to your needs. No surprises, just straightforward, reliable estimates. Take the first step towards a smoothly running home – calculate your repair cost now!
                        </p>
                        <button
    className="px-6 py-3.5 text-white text-xl bg-indigo-600 rounded-lg duration-150 hover:bg-indigo-700 active:shadow-lg"
>
    Calculate estimate cost
</button>
                    </div>
                    <div className="flex-1 sm:hidden lg:block">
                        <img src={photo} className="md:max-w-lg sm:rounded-lg" alt="" />
                    </div>
                </div>
                
            </div>
        </section> */}
        </>
  );
}

export default Hiro;