import React, { useEffect } from 'react';
import { useSelector,useDispatch } from 'react-redux';
import { useParams } from 'react-router';
import { getAllBookings } from '../store/spot';
import AddBooking from './AddBooking';

const Booking = () => {
    const dispatch = useDispatch()
    const {spotId} = useParams()
    const spots = useSelector(state => state.spots)
    const bookings = useSelector(state => state.spots?.bookings)
    const user = useSelector(state => state.session.user)
 
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