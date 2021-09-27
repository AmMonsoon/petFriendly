import { useState } from "react"
import { useDispatch } from "react-redux"
import { useParams } from "react-router-dom"
import { editAReview } from "../store/spot";

function EditReviewForm({ oldReview, reviewId }) {
    const { spotId } = useParams();
    const dispatch = useDispatch();

    const [reviewBody, setReviewBody] = useState(oldReview.reviewBody)

    const submitEdit = async(e) => {
        console.log('$$$$$$$$$$$$$$$$$', reviewBody, reviewId, spotId)
        e.preventDefault();
        await dispatch(editAReview(reviewBody, reviewId, spotId))
     
    }

    return(
        <div>
            <textarea value={reviewBody} onChange={(e) => setReviewBody(e.target.value)} />
            <div className="edit-buttons">
                <button id='edit-submit-btn' onClick={submitEdit}>Edit</button>
                <button id='edit-cancel-btn'>Cancel</button>
            </div>
        </div>

    )
}

export default EditReviewForm