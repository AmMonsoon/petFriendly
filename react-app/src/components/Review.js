import React from 'react';
import {  useSelector } from 'react-redux';
// import { deleteAReview } from '../store/spot';
import AddReview from './AddReview';
// import EditReviewForm from './EditReviewForm';
// import { NavLink } from 'react-router-dom';
import SingleReview from './SingleReview'

const Review = () => {
    // const dispatch = useDispatch()
    const spots = useSelector(state => state.spots)
    const reviews = useSelector(state => state.spots?.reviews)
    const user = useSelector(state => state.session.user)
    // const review = useSelector(state => state.spots?.reviews?.id)
    // console.log('*&(*&(*&(*&(*&(*&(&',review)

    
    
    return (
        <div>
       
            {reviews && Object.values(reviews)?.map((review) => (
                <div className="single-review-wrapper" key={review.id}> 
                   <SingleReview review={review}/>
                </div>
            ))}
            {user.id !== spots.userId && <AddReview />}
            
        </div>
)

}

export default Review;