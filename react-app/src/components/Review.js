import React from 'react';
import { useSelector } from 'react-redux';



const Review = () => {

    const reviews = useSelector(state => state.spots?.reviews)
    // const userReviewer = useSelector(state => state.user.id)
    // console.log('$$$$$$$$$', user)

return (
    <div>
       
            {reviews && Object.values(reviews)?.map((review) => (
                <div className="single-review-wrapper" key={review.id}> 
                   <h4>{review.user.username}</h4>
                   <p>{review.review}</p>
                </div>
            ))}
        </div>
)

}

export default Review;