import {useState} from 'react'
import { Modal } from '../../context/Modal'
// import LoginForm from './LoginForm'
import SignUpForm from './SignUpForm'

const SignUpModal = ({email, password, firstName, lastName, username}) => {
    const [showModal, setShowModal] = useState(false)



return(
    <>
        <button className='login-modal-btn' onClick={e => setShowModal(true)}>Sign up</button>
        {showModal && (<Modal onClose={e => setShowModal(false)}>
            <SignUpForm username={username} firstName={firstName} lastName={lastName} email={email} password={password} onClose={e => setShowModal(false)} />
        </Modal>)}
    </>
)

}

export default SignUpModal;