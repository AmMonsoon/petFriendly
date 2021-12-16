import React from 'react';
import { useSelector,useDispatch } from 'react-redux';
// import { useParams } from 'react-router';
// import { getUserBookings } from '../store/s';


const UserBooking = ({userId}) => {
    const dispatch = useDispatch()
    // const {userId} = useParams()
    // const bookings = useSelector(state => state.spots?.bookings)

    const bookings = useSelector(state => state.bookings)
 
    console.log('Bookings',bookings)
    

    // useEffect(() => async()=>{
    //     await dispatch(getUserBookings(userId));
    // },[dispatch,userId])
    

    return(
        <div>
            <div>

            {bookings && bookings.map((book) => {
                <p>{book.startDate}</p>
            })}
            </div>
        </div>
    )
}

export default UserBooking;