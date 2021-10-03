import React from 'react';
import {  useSelector } from 'react-redux';
import AddReview from './AddReview';
import SingleReview from './SingleReview'

const Review = () => {
   
    const spots = useSelector(state => state.spots)
    const reviews = useSelector(state => state.spots?.reviews)
    const user = useSelector(state => state.session.user)
 
    
    
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