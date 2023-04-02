import { useDispatch } from "react-redux";
import { destroySpot } from "../store/spot";
// import bird from "../images/dorito.png"
import { useHistory } from "react-router";
import toonDog from '../images/toondog.png'

const DeleteSpotForm = ({onClose, spotId}) => {
    const dispatch = useDispatch()
    const history = useHistory()


    const deleteSpot = async(e) =>{
        e.preventDefault()
        await dispatch(destroySpot(spotId))
        history.push('/spots')
    }


    // const handleDelete = async(e) => {
    //     e.preventDefault();
    //     await dispatch(destroySpot(spotId))
    // }
    
    return(
    <div className='delete-confirm'>
        <div className='delete-modal-image'>
            <img  src={toonDog} alt=''/>
        </div>
        <h2>Are you sure?</h2>
        <div className='delete-modal-btn-container'>

        <button className='delete-modal-cancel-btn' onClick={onClose}>Cancel</button>
        <button className='delete-modal-confirm-btn' onClick={e => deleteSpot(e)}>Delete</button>
        </div>
    </div>
    )
}
export default DeleteSpotForm;