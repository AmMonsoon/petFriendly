import React from 'react';
import { useSelector } from 'react-redux';
import AddReview from './AddReview';
import EditReviewForm from './EditReviewForm';

const Review = () => {

    const reviews = useSelector(state => state.spots?.reviews)
    const user = useSelector(state => state.session.user)
    console.log('@@@@@@@@@@@@@',reviews)
    // const userReviewer = useSelector(state => state.user.id)
    // console.log('$$$$$$$$$', user)

return (
    <div>
       
            {reviews && Object.values(reviews)?.map((review) => (
                <div className="single-review-wrapper" key={review.id}> 
                   <h4>{review.user?.username}</h4>
                   <p>{review.review}</p>
                   {
                       user.id === review?.userId &&
                   <EditReviewForm oldReview={review} reviewId={review.id} />
                   }
                </div>
            ))}
            <AddReview />
            
        </div>
)

}

export default Review;