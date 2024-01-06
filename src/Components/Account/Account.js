import React, {useState, useEffect} from 'react';
import firebase from 'firebase';
import moment from 'moment';
import {
  Link
} from 'react-router-dom';
import "./Account.css";

const Account = ({user, accounts}) => {
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [state, setState] = useState('');
  const [address, setAddress] = useState('');

  let datedate = moment().format('YYYY-MM-D');

  const db = firebase.firestore()
  const handleSubmit = (e) => {
    e.preventDefault();
    db.collection("Accounts").add({
      user: user.email,
      name: name,
      surname: surname,
      phone: phone,
      email: email,
      state: state,
      address: address,
      created: datedate,
      hasProfile: "1",
      role: "user"
    }).then((docRef) => {
      const docId = docRef.id;
    }).catch((err) => {
    });
    setName("")
    setSurname("")
    setPhone("")
    setEmail("")
    setState("")
    setAddress("")
  };

  const [saved, setSaved] = useState(false)
  const dataSaved = () => {
    setSaved(!saved)
  }

  let a = accounts.filter(e => e.hasProfile==="1").filter(e=> e.user===user.email)

  return (
    <div className="profile-info mb-10">
      <Link to="/request" className="nav-link">New Appointment</Link>
      <h2 className='text-orange-500 font-extrabold text-3xl pb-3'>Account details</h2>
      {
        saved ? <p className="success text-gra-700 bg-green-200 px-5">Well done! Let us start with the
        <Link to="/" className='text-orange-500 font-extrabold'> Home </Link>
        page</p> : !saved
      }
      {
        a.length === 0 && 
        <form className="ticket-form" onSubmit={handleSubmit}>
          <input type="text" required maxlength="50" placeholder="Name" value={name} onChange={(e)=> setName(e.target.value)} />
          <input type="text" required maxlength="50" placeholder="Surname" value={surname} onChange={(e)=> setSurname(e.target.value)} />
          <input type="phone" required maxlength="50" placeholder="Phone number" value={phone} onChange={(e)=> setPhone(e.target.value)} />
          <input type="email" required maxlength="50" placeholder="Email" value={email} onChange={(e)=> setEmail(e.target.value)} />
          <input type="text" required maxlength="50" placeholder="State" value={state} onChange={(e)=> setState(e.target.value)} />
          <input type="text" required maxlength="50" placeholder="Address" value={address} onChange={(e)=> setAddress(e.target.value)} />
          <button type="submit" onClick={dataSaved} className='bg-green-500 p-3'>Save</button>
        </form>
      }

      {accounts &&
        accounts
        .filter(e=> e.user===user.email)
        .map(e=> (
          <div className="profile-view">
            <h2>Login: <span className='font-extrabold'>{e.user}</span></h2>
            <p>Name: <span className='font-extrabold'>{e.name}</span></p>
            <p>Surname: <span className='font-extrabold'>{e.surname}</span></p>
            <p>Phone number: <span className='font-extrabold'>{e.phone}</span></p>
            <p>Email address: <span className='font-extrabold'>{e.email}</span></p>
            <p>State: <span className='font-extrabold'>{e.state}</span></p>
            <p>Address: <span className='font-extrabold'>{e.address}</span></p>
          </div>
        ))
      }

    </div>
  );
}

export default Account;