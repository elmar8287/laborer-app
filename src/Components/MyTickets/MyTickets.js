import React, {useState, useEffect} from 'react';
import "./MyTickets.css"

const MyTickets = ({user, myTickets, accounts}) => {
  const [filterDate, setfilterDate] = useState()
  const [list, setList] = useState("")

  const formatDate = (e) => {
    const rawDate = e.target.value
    const formatedDate =rawDate.split('/').reverse().join("-")
    setfilterDate(formatedDate)
  }

  const filtering= () => {
    setList(myTickets)
  }

  const getFilter = () => {
    setList(myTickets.filter(e => e.date===filterDate))
  }

  useEffect(()=> {
    filtering()
  }, [])
  
  const account = accounts.filter(e=>(e.email===user.email))

  
  return (
    <div  className="my-tickets">
      <h3>You have in total {myTickets.filter(e => e.user===user.email).length} requests</h3>
      <div className="mytickets-filter">
        <span>Filter by date: </span>
        <input type="date" value={filterDate} onChange={e => formatDate(e)} />
        <span className="clear-filter" onClick={filterDate && getFilter}>Filter</span>
        <span className="clear-filter" onClick={filtering}>Clear</span>
      </div>
      <div className='p-5 flex flex-rows justify-center'>
        <div className='bg-orange-500 p-2 rounded-lg mx-2 text-sm'>
          Pending
        </div>
        <div className='bg-green-500 p-2 rounded-lg mx-2 text-sm w-[80px]'>
          Done
        </div>
      </div>
      <ul>
      {list && list.length>0 ?
        list
        .filter(e => (e.user===user.email))
        .map(ticket=> (

          <li>
            <div className={
              ticket.status === "Done" ? "ticket-view bg-green-500" : "ticket-view bg-orange-500"
            }>
              <p>Need: {ticket.cat}</p>
              <p>Budget: {ticket.cost}$</p>
            </div>
            {
              account.map(e=> (
                <div>
                  <p>Name: {e.name}, {e.surname}</p>
                  <p>Phone: {e.phone}</p>
                  <p>Email: {e.email}</p>
                </div>
              ))
            }
                  
       
            
           
            <p>Requested for: {ticket.date} | {ticket.time}</p>
            <p>ZIP: {ticket.zip}</p>
            <p>Address: {ticket.address}</p>
            <p>Deadline: {ticket.deadline}</p>
            <p>Description: {ticket.description}</p>
            <p className='text-[8px]'>Request reated date: {ticket.created}</p>
          </li>
        ))
        :
        <p>No requests found</p>
      }
      </ul>
    </div>
  );
}

export default MyTickets;