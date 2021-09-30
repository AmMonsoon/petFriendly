import {useState} from 'react'
import { Modal } from '../../context/Modal'
import LoginForm from './LoginForm'


const LoginModal = ({email, password}) => {
    const [showModal, setShowModal] = useState(false)



return(
    <>
        <button className='login-modal-btn' onClick={e => setShowModal(true)}>Login</button>
        {showModal && (<Modal onClose={e => setShowModal(false)}>
            <LoginForm email={email} password={password} onClose={e => setShowModal(false)} />
        </Modal>)}
    </>
)

}

export default LoginModal;