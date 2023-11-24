import React, { useState, useEffect, useRef } from 'react';
import emailjs from 'emailjs-com';
import {
  Link
} from 'react-router-dom';
import firebase from 'firebase';
import moment from 'moment';
import "./Ticket.css"


const Ticket = ({user, myTickets, accounts}) => {
  
  const form = useRef();
  const [date, setDate] = useState('');
  const [cat, setCat] = useState('Not selected');
  const [time, setTime] = useState('');
  const [address, setAddress] = useState('');
  const [description, setDescription] = useState('');
  const [deadline, setDeadline] = useState('');
  const [cost, setCost] = useState('');
  const [zip, setZip] = useState("");
  const [lastAdded, setLastAdded] = useState("")
  const [showLast, setShowLast] = useState("")
  const [comment, setComment] = []

  let minDate = moment().format('YYYY-MM-D');
  let datedate = moment().format('YYYY-MM-D HH:mm:ss');

  const db = firebase.firestore()
  const handleSubmit = (e) => {
      e.preventDefault();
      emailjs.sendForm('service_8nvyhs3', 'template_7702li7', form.current, '2LQw5SzGq0vlOXeu8')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });

      db.collection("Tickets").add({
        user: user.email,
        date: date,
        time: time,
        cat: cat,
        address: address,
        description: description,
        deadline: deadline,
        cost: cost,
        zip: zip,
        created: datedate,
        status: "New",
        comment: comment,
        
      }).then((docRef) => {
        const docId = docRef.id;
        setLastAdded(docId)
      }).catch((err) => {
      });
      setDate("")
      setCat("")
      setTime("")
      setAddress("")
      setCreated(true)
      setDeadline("")
      setDescription("")
      setCost("")
      setZip()
 
  };

  const [modal, setModal] = useState(false)
  const modalHandle = () => {
    setModal(!modal)
  }

  const [created, setCreated] = useState(false);

  const [timeModal, setTimeModal] = useState(false);

  const timeModalHandle = () => {
    setTimeModal(!timeModal)
  }

  // let range = myTickets.filter(e=>e.date===date).map(e=>(e.time))
  // const [selectedTime, setSelectedTime] = useState("")
  // const saveTime = () => {
  //   if(!range.includes(selectedTime)) {
  //     range.push(selectedTime)
  //     console.log(range)
  //   }
  // }

  // const timeOptions = (e) => {
  //   setSelectedTime(e.target.value)
  // }

  // const [inLineCheking, setInLineChecking] = useState(false)

  // const inLineCheckingHandle = () => {
  //   if(myTickets.filter(e=>e.date===date)
  //   .filter(e=>e.user===user.email)
  //   .filter(e=>e.inLine==="1").length===1) {
  //     setInLineChecking(true)
  //   } else {
  //     setInLineChecking(false)
  //   }
  // }

  // useEffect(()=> {
  //   inLineCheckingHandle()
  // },[date])

  const profileData = accounts.filter(e => e.user === user.email)

  return (
    <div className="ticket">
      {
        profileData.length===0 ? 
        <div>
        <h2 className='text-orange-500 font-extrabold text-3xl'>Congratulations!</h2>
        <p>This is your first login! Before you start, we kindly ask you to fill the information in the 
          <Link to="/account" className='text-orange-500 font-extrabold'> Account</Link> section.
        </p> 
        </div>
        :
        <div>
        <h2 className='text-3xl font-extrabold'>Request form</h2>
        {created && 
          <div className="success-login">
            <h4>Request successfully created!</h4>
            
            <h3>{user.line}</h3>More detail in
        <Link to="/tickets" className="success-login-link">My requests</Link> section</div>}
        {
          created ? null :
          <form ref={form} className="ticket-form" onSubmit={handleSubmit}>
          <label className='text-sm font-semibold mt-4'>For which date do you need the labor service?</label>
          <input type="date" required min={minDate} placeholder="Select the date" value={date} onChange={(e)=> setDate(e.target.value)} name="date"/>
          <label className='text-sm font-semibold mt-4'>For which time?</label>
          <input type="time" required placeholder="Select the time" value={time} onChange={(e)=> setTime(e.target.value)} name="time"/>
          <label className='text-sm font-semibold mt-4'>Select the service type</label>
          <select required value={cat} onChange={(e)=> setCat(e.target.value)} name="category" className='py-3 pl-2' >
            <option>Appliance Repair</option>
            <option>Basic HVAC Maintenance</option>
            <option>Carpentry</option>
            <option>Deck and Fence Repair</option>
            <option>Drywall and Plaster Repair</option>
            <option>Electrical</option>
            <option>Emergency Repairs</option>
            <option>Flooring</option>
            <option>Furniture Assembly</option>
            <option>Gutter Repair and Cleaning</option>
            <option>Home Insulation</option>
            <option>Home Maintenance</option>
            <option>Home Safety</option>
            <option>Minor Landscaping</option>
            <option>Painting</option>
            <option>Plumbing</option>
            <option>Pressure Washing</option>
            <option>Small Plumbing and Electrical Jobs</option>
            <option>Tiling</option>
            <option>Window and Door Repair</option>
            <option>Other (please, mark in description)</option>
          </select>
          <label className='text-sm font-semibold mt-4'>ZIP code</label>
          <input type="text" maxlength="8" required placeholder="ZIP code" value={zip} onChange={(e)=> setZip(e.target.value)} name="zip"/>
          <label className='text-sm font-semibold mt-4'>Address line</label>
          <input type="text" maxlength="50" required placeholder="Address line" value={address} onChange={(e)=> setAddress(e.target.value)} name="address"/>
          <label className='text-sm font-semibold mt-4'>Please, mark the deadline</label>
          <input type="date" required min={minDate} placeholder="Deadline" value={deadline} onChange={(e)=> setDeadline(e.target.value)} name="deadline"/>
          <label className='text-sm font-semibold mt-4'>What is the maximum amount you are willing to pay?</label>
          <input type="number" required min="0" max="1000000" placeholder="$" value={cost} onChange={(e)=> setCost(e.target.value)} name="cost"/>
          <label className='text-sm font-semibold mt-4'>Please describe your needs in detail</label>
          <textarea maxlength="400" required placeholder="Detail information" value={description} onChange={(e)=> setDescription(e.target.value)} name="description" rows="4" className='block p-2.5 w-full text-md text-gray-900 bg-gray-150 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'></textarea>
          
          {/* <input type="hidden" value={profileData.vendor} name="clientVendor" />
          <input type="hidden" value={profileData.model} name="clientModel" />
          <input type="hidden" value={profileData.plate} name="clientPlate" />
          <input type="hidden" value={profileData.company} name="clientCompany" />
          <input type="hidden" value={profileData.phone} name="clientPhone" />
          <input type="hidden" value={user.line} name="lineNumber" />
          <input type="hidden" value={user.displayName} name="userName" />
          <input type="hidden" value={user.email} name="userMail" />
          <input type="number" min="0" maxlength="10" required placeholder="Odometer (km)" value={odo} onChange={(e)=> setOdo(e.target.value)} name="odometer" />
          <textarea name="message" type="text-area" maxlength="100" placeholder="Notes" value={note} onChange={(e)=> setNote(e.target.value)} /> */}
          <button className='mt-5 py-5 bg-green-700 text-gray-100 text-2xl hover:bg-green-500' type="submit">Submit</button>
        </form>
        }
        
  
        {/* {
            modal ?
            <div className="modal">
              <Queue inLineCheking={inLineCheking} date={date} user={user} close={modalHandle}/>
            </div>
            : null
          } */}
          </div>
      }

    </div>
  );
};

export default Ticket;
