import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router';
import { getAllBookings } from '../store/spot';
import AddBooking from './AddBooking';

const Booking = () => {
    const dispatch = useDispatch()
    const {spotId} = useParams()
    
 
   useEffect(() => async()=>{
       await dispatch(getAllBookings(spotId));
   },[dispatch,spotId])
    

    return (
        <div>
           <AddBooking />  
        </div>
)

}

export default Booking;