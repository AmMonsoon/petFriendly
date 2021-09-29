import { useState } from "react"
import { useDispatch } from "react-redux"
import { useParams } from "react-router-dom"
import { editAReview } from "../store/spot";
// import { deleteAReview } from "../store/spot";
import './EditReviewForm.css'

function EditReviewForm({ oldReview, reviewId , hideEdit}) {
    const { spotId } = useParams();
    const dispatch = useDispatch();
    // const [showEdit, setShowEdit] = useState(false)
    const [reviewBody, setReviewBody] = useState(oldReview.review)

    const submitEdit = async(e) => {
        
        e.preventDefault();
        await dispatch(editAReview(reviewBody, reviewId, spotId))
        setReviewBody('')
        hideEdit(e)
     
    }
    

    return(
    <form>
        <div className='edit-review-form'>
            <textarea className='edit-review-textbox' value={reviewBody} onChange={(e) => setReviewBody(e.target.value)} />
            <div className="edit-buttons">
                <button id='edit-submit-btn' onClick={submitEdit}>Edit</button>
                <button id='edit-cancel-btn'>Cancel</button>
            </div>
        </div>
    </form>

    )
}

export default EditReviewForm