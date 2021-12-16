import React,{useState} from 'react';
import {  useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { addImage, addNewBooking } from '../store/spot';
import Booking from './Booking';

const AddBooking = () => {
    const dispatch = useDispatch()
    const [startDate, setStartDate] = useState(new Date())
    const [endDate, setEndDate] = useState(new Date())
    const [confirmation, setConfirmation] = useState('')
    const {spotId} = useParams()
    const spots = useSelector(state => state.spots)
    const user = useSelector(state => state.session.user)


    const handleSubmit = async(e) => {
        e.preventDefault()
        if(startDate > endDate){
            alert("Start date must be earlier than end date")
        }
        const booking = {
            userId : user.id,
            spotId,
            startDate,
            endDate
        }

        let newBooking = await dispatch(addNewBooking(booking, spotId))
        if(newBooking){
            alert("You're Booked")
        }
    }
    
    
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>Start Date: 
                <input className='date-picker' selected={startDate} onChange={date => setStartDate(date.target.value)} type='date' placeholder='Select dates' />
                </label>
                <label>End Date: 
                <input className='date-picker' selected={endDate} onChange={date => setEndDate(date.target.value)} type='date' placeholder='Select dates' />
                </label> 
                <button className='booking-btn' type='submit'>Book it</button>
            </form>
            <p>{confirmation}</p>
        </div>
)

}

export default AddBooking;