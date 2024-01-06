import React, { useState, useRef } from "react";
import emailjs from "emailjs-com";
import { Link } from "react-router-dom";
import firebase from "firebase";
import moment from "moment";
import "./Ticket.css";
import { BsCheckCircleFill } from "react-icons/bs";

const Ticket = ({ user, myTickets, accounts }) => {
  
  const [date, setDate] = useState("");
  const [phone, setPhone] = useState("");
  const [cat, setCat] = useState("Not selected");
  const [time, setTime] = useState("");
  const [address, setAddress] = useState("");
  const [description, setDescription] = useState("");
  const [lastAdded, setLastAdded] = useState("");
  const [showLast, setShowLast] = useState("");
  const [comment, setComment] = ["No comments"];

  let minDate = moment().format("YYYY-MM-D");
  let datedate = moment().format("YYYY-MM-D HH:mm:ss");

  const form = useRef();
    const sendEmail = () => {
    
        emailjs.sendForm('service_axr9o2n', 'template_ypmr5ss', form.current, 'dmKCr8p3g87ZauD3Z')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
      };

  const db = firebase.firestore();
  const handleSubmit = (e) => {

    db.collection("Tickets")
      .add({
        user: user.email,
        phone: phone,
        date: date,
        time: time,
        cat: cat,
        address: address,
        description: description,
        created: datedate,
        status: "New",
        comment: comment,
      })
      .then((docRef) => {
        const docId = docRef.id;
        setLastAdded(docId);
      })
      .catch((err) => {});
    setPhone("");
    setDate("");
    setCat("");
    setTime("");
    setAddress("");
    setCreated(true);
    setDescription("");
    
  };

  const [modal, setModal] = useState(false);
  const modalHandle = () => {
    setModal(!modal);
  };

  const [created, setCreated] = useState(false);

  const [timeModal, setTimeModal] = useState(false);

  const timeModalHandle = () => {
    setTimeModal(!timeModal);
  };

  const profileData = accounts.filter((e) => e.user === user.email);

  return (
    <div className="ticket  bg-blue-200">
      {profileData.length === 0 ? (
        <div>
          <h2 className="text-orange-500 font-extrabold text-3xl">
            Congratulations!
          </h2>
          <p>
            This is your first login! Before you start, we kindly ask you to
            fill the information in the
            <Link to="/account" className="text-orange-500 font-extrabold">
              {" "}
              Account
            </Link>{" "}
            section.
          </p>
        </div>
      ) : (
        <div>
          <h2 className="text-3xl font-extrabold">Appointment form</h2>
          {created && (
             <div className='p-4 mt-3 bg-green-200 rounded-xl flex items-center justify-center text-center'>
             <BsCheckCircleFill  className='text-green-600 text-[50px] mr-4'/>
             <div>
             <h3 className='text-2xl text-gray-800 font-extrabold md:text-3xl'>Congratulation!</h3>
             <p>You have successfully booked your appointment.</p>
             <p>Go to view <Link to="/tickets" className="font-bold underline text-blue-800">All Appointments</Link></p>
             </div>
         </div>
          )}
          {created ? null : (
            <form ref={form} className="ticket-form" onSubmit={()=> {handleSubmit(); sendEmail()}}>
              <label className="text-sm font-semibold mt-4">
                Appointment date?
              </label>
              <input
                type="date"
                required
                min={minDate}
                placeholder="Select the date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                name="date"
              />
              <label className="text-sm font-semibold mt-4">
                For which time?
              </label>
              <input
                type="time"
                required
                placeholder="Select the time"
                value={time}
                onChange={(e) => setTime(e.target.value)}
                name="time"
              />
              <label className="text-sm font-semibold mt-4">
                Select the appliance type
              </label>
              <select
                required
                value={cat}
                onChange={(e) => setCat(e.target.value)}
                name="appliance"
                className="py-3 pl-2"
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
                <option>Other (please, mark in description)</option>
              </select>
              <label className="text-sm font-semibold mt-4">Full address</label>
              <input
                type="text"
                maxlength="50"
                required
                placeholder="Full address"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                name="address"
              />
              <label className="text-sm font-semibold mt-4">Contact phone number</label>
              <input
                type="phone"
                maxlength="50"
                required
                placeholder="Phone number"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                name="phone"
              />
             <label className="text-sm font-semibold mt-4">
                Please describe the issue in detail
              </label>
              <textarea
                maxlength="400"
                required
                placeholder="Detail information"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                name="message"
                rows="4"
                className="block p-2.5 w-full text-md text-gray-900 bg-gray-150 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              ></textarea>
              <button
                className="mt-5 py-5 bg-blue-700 text-gray-100 text-2xl hover:bg-blue-500"
                type="submit"
              >
                Submit
              </button>
            </form>
          )}
        </div>
      )}
    </div>
  );
};

export default Ticket;
