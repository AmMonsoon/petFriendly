import React, { useState, useEffect } from 'react';
import { useParams, Link, useHistory} from 'react-router-dom';
import {useSelector, useDispatch} from 'react-redux'
import { deleteABooking } from '../store/session';

function User() {
  const [user, setUser] = useState({});
  const history = useHistory('')
  const { userId }  = useParams();
  const dispatch = useDispatch()
  const session = useSelector(state => state?.session.user)
  const bookings = useSelector(state => state?.session.user.booking)
  console.log(bookings)
  // const bookingId = useSelector(state => state?.session.user.booking).map(book => book.id)
  // console.log("BBOOOKINGSIDSSSSSS", bookingId)

 

  const handleDelete = async(e, deleteId) => {
    e.preventDefault();
    // console.log("CLICKED", deleteId)
   
      await dispatch(deleteABooking(userId, deleteId))
      history.push(`/users/${userId}`)
    }
    
    useEffect(() => {
      if (!userId) {
        return;
      }
      (async () => {
        const response = await fetch(`/api/users/${userId}`);
        const user = await response.json();
        setUser(user);
      })();
    }, [session, userId, bookings]);

  
  if (!user) {
    return null;
  }

  
  return (
    <>
      <ul>
        <li key={userId}>
          <strong>User Id</strong> {userId}
        </li>
        <li key={session.username}>
          <strong>Username</strong> {session.username}
        </li>
        <li key={session.email}>
          <strong>Email</strong> {session.email}
        </li>
        
      </ul>
      
    <p> My Bookings </p>
      <ul className='user-info'> 
        {bookings && bookings.map((book, i) => {
          let endDate = new Date(book.endDate).toISOString().slice(0, 10);
          let startDate = new Date(book.startDate).toISOString().slice(0, 10);
                  
          return <div key={book.id} className='booking-layout'><Link to={`/spots/${book.spotId}`}> <li key={i}>{ `Location Id : ${book.spotId} Start Date : ${startDate} End Date : ${endDate} Booking Number: ${book.id}`}
          </li></Link>
        <button className='cancel-btn' type='Submit' onClick={e => handleDelete(e, book.id)}>Cancel Reservation</button> 
        </div>
        })}
      </ul> 
    </>
  );
}

export default User;
