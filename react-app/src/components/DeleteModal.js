import {useState} from 'react'
import { Modal } from "../context/Modal"
import DeleteForm from './DeleteForm'
import './DeleteModal.css'

const DeleteModal = ({reviewId, spotId}) => {
const [showModal, setShowModal] = useState(false)



return(
    <>
        <button className='single-review-delete-btn' onClick={e => setShowModal(true)}>Delete</button>
        {showModal && (<Modal onClose={e => setShowModal(false)}>
            <DeleteForm reviewId={reviewId} spotId={spotId} onClose={e => setShowModal(false)} />
        </Modal>)}
    </>
)

}

export default DeleteModal;