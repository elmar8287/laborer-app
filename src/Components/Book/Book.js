import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { BsCheckCircleFill } from "react-icons/bs";

import "./Book.css";

const Book = (e) => {
    const [sent, Setsent] = useState(false)
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();
        Setsent(!sent)
    
        emailjs.sendForm('service_axr9o2n', 'template_ypmr5ss', form.current, 'dmKCr8p3g87ZauD3Z')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
      };

  return (
    
      <section className="py-14 max-w-screen-xl mx-auto ">
        
        <div className="relative overflow-hidden mx-4 px-4 py-14 rounded-2xl bg-blue-600 md:px-8 md:mx-8 shadow-2xl background">
        <div className="relative z-10 max-w-2xl mx-auto sm:text-center">
            <div className="space-y-3">

                <h3 className="text-3xl text-white font-bold">
                    Book online to Fix Your Appliance Today!
                </h3>
                <p className="text-blue-100 leading-relaxed">
                We carry out most of the work on the same day.
                </p>
            </div>
            {!sent ? 
            <div className="mt-6">
                <form
                ref={form} onSubmit={sendEmail}
                    className="shadow-2xl flex flex-col items-center justify-center bg-white rounded-lg p-1 sm:max-w-md sm:mx-auto">
                    <input
                        type="text"
                        placeholder="Enter your name"
                        className="text-gray-500 w-full p-2 border rounded-md outline-none"
                        required
                        name="name"
                    />
                    <input
                        type="phone"
                        placeholder="Enter your phone number"
                        className="text-gray-500 w-full p-2 mt-2 border rounded-md outline-none"
                        required
                        name="phone"
                    />
                    <input
                        type="text"
                        placeholder="Enter your full address"
                        className="text-gray-500 w-full p-2 mt-2 border rounded-md outline-none"
                        required
                        name="address"
                    />
                     <input
                        type="date"
                        placeholder="Enter appointment date"
                        className="text-gray-500 w-full p-2 mt-2 border rounded-md outline-none"
                        required
                        name="date"
                    />
                    <input
                        type="time"
                        placeholder="Enter appointment time"
                        className="text-gray-500 w-full p-2 mt-2 border rounded-md outline-none"
                        required
                        name="time"
                    />
                    <select
                        type="text"
                        placeholder="Enter appointment time"
                        className="text-gray-500 w-full p-2 mt-2 border rounded-md outline-none"
                        required
                        name="appliance"
                    >
                      <option hidden>Select Appliance type</option>
                      <option>Dishwasher</option>
                      <option>Dryer</option>
                      <option>Freezer</option>
                      <option>Microwave</option>
                      <option>Oven</option>
                      <option>Refrigerator</option>
                      <option>Stove / Cooktop</option>
                      <option>Washer</option>
                      <option>Other</option>
                      </select>
                      <textarea
                        type="textarea"
                        maxlength="400"
                        rows="4"
                        placeholder="Describe the issue detail"
                        className="text-gray-500 w-full p-2 mt-2 border rounded-md outline-none"
                        required
                        name="message"
                    />
                    <button
                    type="submit"
                    
                        className="p-2 px-3 rounded-lg font-bold text-lg mt-2 text-white bg-blue-600 hover:bg-blue-500 active:bg-blue-700 duration-150 outline-none shadow-md focus:shadow-none sm:px-4"
                    >Book Now</button>
                        
                    
                </form>
                
            </div>
            : 
            <div className='p-4 mt-3 bg-green-200 rounded-xl flex items-center justify-center text-center'>
                <BsCheckCircleFill  className='text-green-600 text-[50px] mr-4'/>
                <div>
                <h3 className='text-2xl text-gray-800 font-extrabold md:text-3xl'>Congratulation!</h3>
                <p>You have successfully booked your appointment.</p>
                </div>
            </div>
            
            }
        </div>
        <div className="absolute inset-0 w-full h-full" style={{ background: "linear-gradient(268.24deg, rgba(59, 130, 246, 0.76) 50%, rgba(59, 130, 246, 0.545528) 80.61%, rgba(55, 48, 163, 0) 117.35%)" }}></div>
    </div>
    
          
      </section>
  )
}

export default Book;
