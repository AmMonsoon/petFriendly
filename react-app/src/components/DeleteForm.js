import { useDispatch } from "react-redux";
import { deleteAReview } from "../store/spot";
import bird from "../images/dorito.png"

const DeleteForm = ({onClose, reviewId, spotId}) => {
    const dispatch = useDispatch()

    const handleDelete = async(e) => {
        e.preventDefault();
        await dispatch(deleteAReview(reviewId, spotId))
    }
    
    
    return(
    <div className='delete-confirm'>
        <div className='delete-modal-image'>
            <img  src={bird} alt=''/>
        </div>
        <h2>Are you sure?</h2>
        <div className='delete-modal-btn-container'>

        <button className='delete-modal-cancel-btn' onClick={onClose}>Cancel</button>
        <button className='delete-modal-confirm-btn' onClick={e => handleDelete(e)}>Delete</button>
        </div>
    </div>
    )

}

export default DeleteForm;