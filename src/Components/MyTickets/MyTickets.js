import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./MyTickets.css";

const MyTickets = ({ user, myTickets, accounts }) => {
  const [filterDate, setfilterDate] = useState();
  const [list, setList] = useState("");

  const formatDate = (e) => {
    const rawDate = e.target.value;
    const formatedDate = rawDate.split("/").reverse().join("-");
    setfilterDate(formatedDate);
  };

  const filtering = () => {
    setList(myTickets);
  };

  const getFilter = () => {
    setList(myTickets.filter((e) => e.date === filterDate));
  };

  useEffect(() => {
    filtering();
  }, []);

  const account = accounts.filter((e) => e.email === user.email);

  const count_total = (x) => {
    let sum = 0;
    for (let i = 0; i < x.length; i++) {
      sum = sum + Math.floor(x[i].cost);
    }
    return sum;
  };

  return (
    <div className="my-tickets p-2">
      <h3 className="ml-2">
        There are {" "}
        {myTickets.filter((e) => e.user === user.email).length} appointment(s)
      </h3>
      <div className="mytickets-filter ml-2">
        <span>Filter by date: </span>
        <input type="date" value={filterDate} onChange={(e) => formatDate(e)} />
        <span className="clear-filter" onClick={filterDate && getFilter}>
          Filter
        </span>
        <span className="clear-filter" onClick={filtering}>
          Clear
        </span>
      </div>

      <div className="my-10">
      <Link to="/request"
              className="py-4 px-4 ml-2 text-center text-lg text-white bg-indigo-600 duration-150 hover:bg-indigo-500 active:bg-indigo-700 rounded-lg shadow-lg hover:shadow-none"
            >
              Book New Appointment
            </Link>
      </div>
      <ul className="grid md:grid-cols-3 justify-center">
        {list && list.length > 0 ? (
          list
            .filter((e) => e.user === user.email)
            .map((ticket) => (
              <li className="flex flex-col max-w-lg rounded-lg shadow-lg md:m-2">
                <div
                  className={
                    ticket.status === "Done"
                      ? "ticket-view bg-green-500 text-lg p-2 font-bold rounded-tl-lg rounded-tr-lg"
                      : "ticket-view bg-orange-500 text-lg p-2 font-bold rounded-tl-lg rounded-tr-lg"
                  }
                >
                  <p>{ticket.cat} repair</p>
                </div>
                {account.map((e) => (
                  <div className="p-2">
                    <p>
                      Name: {e.name}, {e.surname}
                    </p>
                    <p>Phone: {e.phone}</p>
                    <p>Email: {e.email}</p>
                  </div>
                ))}
                <div  className="p-2">
                <p>
                  Appointment on: {ticket.date} | {ticket.time}
                </p>
                <p>Address: {ticket.address}</p>
                <p>Address: {ticket.phone}</p>
                <div className="text-wrap">
                <p className="text-wrap">Details: {ticket.description}</p>
                </div>
                
                {ticket.status !== "New" ? (
                  <p className="text-green-500 font-extrabold">Status: Done</p>
                ) : (
                  <p className="text-orange-500 font-extrabold">
                    Status: Pending
                  </p>
                )}
                <p className="text-[10px]">
                  Appointment created date: {ticket.created}
                </p>
                </div>
              </li>
            ))
        ) : (
          <p>No appointments found</p>
        )}
      </ul>
    </div>
  );
};

export default MyTickets;
