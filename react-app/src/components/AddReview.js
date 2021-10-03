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
    const [validationErrors, setValidationErrors] = useState([])

    const handleSubmit = async(e) => {
        e.preventDefault();
        const errors = [];
        if (!reviewBody.trim().length){
          errors.push('Please fill out this area')
        if(errors.length){
            setValidationErrors(errors)
        }
        }else{

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
    }   
    return(
        <section>
            <div className='post-review-display'>
               
            <h3>Post a Review </h3>
                <form onSubmit={handleSubmit}>
                <div className='form-errors'>
                {validationErrors.map((error, ind) => (
                <div key={ind}>{error}</div>
        ))}
                </div>  
                    <textarea className='add-review-textbox' pattern=".*\S+.*" placeholder='Tell us about your stay!' type='text' required value={reviewBody} onChange={e => setReviewBody(e.target.value)}/>
                </form>
                </div>
                    <button className='add-review-submit' type='submit' disabled={!reviewBody.trim().length}>Post</button>
        </section>

    )
}

export default AddReview;