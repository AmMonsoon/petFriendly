import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useParams, useHistory} from 'react-router-dom'
import { addNewReview } from '../store/spot'
import './AddReview.css'
const AddReview = () => {
    const {spotId} = useParams()
    const dispatch = useDispatch()
    const history = useHistory()
    const [reviewBody, setReviewBody] = useState('')

    const handleSubmit = async(e) => {
        e.preventDefault();
        const review = {
            review: reviewBody
        }

        if (reviewBody.length < 256) {
            setReviewBody('')
            let createdReview = await dispatch(addNewReview(review, spotId))
            if(createdReview) {
                history.push(`/spots/${spotId}`)
            }
        } else {
            alert("Please limit your review to 255 Characters")
        }
    }   
    return(
        <section>
            <h3>Post a Review </h3>
                <form onSubmit={handleSubmit}>
                    <textarea className='add-review-textbox' placeholder='Tell us about your stay!' type='text' required value={reviewBody} onChange={e => setReviewBody(e.target.value)}/>
                    <button className='add-review-submit' type='submit' disabled={!reviewBody.length}>Post</button>
                </form>
        </section>

    )
}

export default AddReview;