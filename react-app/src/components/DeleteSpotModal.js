import {useState} from 'react'
import { Modal } from "../context/Modal"
import DeleteSpotForm from './DeleteSpotForm'


const DeleteSpotModal = ({ spotId}) => {
const [showModal, setShowModal] = useState(false)



return(
    <>
        <button className='single-spot-delete-btn' onClick={e => setShowModal(true)}>Delete</button>
        {showModal && (<Modal onClose={e => setShowModal(false)}>
            <DeleteSpotForm spotId={spotId} onClose={e => setShowModal(false)} />
        </Modal>)}
    </>
)

}

export default DeleteSpotModal;