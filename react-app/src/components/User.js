import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import {useSelector} from 'react-redux'
// import Date

function User() {
  const [user, setUser] = useState({});
  const { userId }  = useParams();
  const session = useSelector(state => state?.session.user)
  const bookings = useSelector(state => state?.session.user.booking)
  console.log('^&^&^&^&^&^&^',bookings)
  useEffect(() => {
    if (!userId) {
      return;
    }
    (async () => {
      const response = await fetch(`/api/users/${userId}`);
      const user = await response.json();
      setUser(user);
    })();
  }, [userId]);
  
  if (!user) {
    return null;
  }

  
  return (
    <>
      <ul>
        <li>
          <strong>User Id</strong> {userId}
        </li>
        <li>
          <strong>Username</strong> {session.username}
        </li>
        <li>
          <strong>Email</strong> {session.email}
        </li>
      </ul>
      
    <p> My Bookings </p>
      <ul className='user-info'> 
        {bookings && bookings.map((book, i) => {
          let endDate = new Date(book.endDate).toISOString().slice(0, 10);
          let startDate = new Date(book.startDate).toISOString().slice(0, 10);
                  
          return <Link to={`/spots/${book.spotId}`}> <li key={i}>{ `Location Id : ${book.spotId} Start Date : ${startDate} End Date : ${endDate}`}
            
          </li></Link>
        })}
      </ul> 
    </>
  );
}

export default User;
