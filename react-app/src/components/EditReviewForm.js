import { useState } from "react"
import { useDispatch } from "react-redux"
import { useParams, useHistory } from "react-router-dom"
import { editAReview } from "../store/spot";

import './EditReviewForm.css'

function EditReviewForm({ oldReview, reviewId , hideEdit}) {
    const history = useHistory();
    const { spotId } = useParams();
    const dispatch = useDispatch();
    const [reviewBody, setReviewBody] = useState(oldReview.review)
    const [validationErrors, setValidationErrors] = useState([])
    const submitEdit = async(e) => {
        
        e.preventDefault();
        const errors = []
        if (!reviewBody.trim().length){
            errors.push('Please fill out this area')
        if(errors.length){
            setValidationErrors(errors)
        }
          }else{
              await dispatch(editAReview(reviewBody, reviewId, spotId))
              setReviewBody('')
              hideEdit(e)
          }
    }
    const handleCancel = async(e) => {
        e.preventDefault();
        window.location.reload()
        history.push(`/spots/${spotId}`)
    } 

    return(
    <form>
               <div className='form-errors'>
                {validationErrors.map((error, ind) => (
                <div key={ind}>{error}</div>
        ))}
                </div>  
        <div className='edit-review-form'>
            <textarea className='edit-review-textbox'  value={reviewBody} required onChange={(e) => setReviewBody(e.target.value)} />
            <div className="edit-buttons">
                <button id='edit-submit-btn' onClick={submitEdit}>Edit</button>
                <button id='edit-cancel-btn' type='click' onClick={handleCancel}>Cancel</button>
            </div>
        </div>
    </form>

    )
}

export default EditReviewForm