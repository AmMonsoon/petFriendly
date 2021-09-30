import {useState} from 'react'
import { Modal } from '../../context/Modal'
import LoginForm from './LoginForm'
import { useHistory } from 'react-router-dom'
import SignUpForm from './SignUpForm'
const LoginModal = ({username, firstName, lastName,email, password, protect=false, login=true}) => {
    const [showModal, setShowModal] = useState(protect)
    const [renderLogin, setRenderLogin] = useState(login)
    const history = useHistory()
    const closeHandle = e => {
        setShowModal(false)
        if(protect){
            history.goBack()
        }
    }


return(
    <>
       {!protect && <button className='login-modal-btn' onClick={e => setShowModal(true)}>{login ? 'Login' : 'Sign-up'}</button>}
        {showModal && (<Modal onClose={closeHandle}>
           { renderLogin ?
               <LoginForm setRenderLogin={setRenderLogin} email={email} password={password} onClose={e => setShowModal(false)} />
               :  <SignUpForm setRenderLogin={setRenderLogin} username={username} firstName={firstName} lastName={lastName} email={email} password={password} onClose={e => setShowModal(false)} />

               } 
        </Modal>)}
    </>
)

}

export default LoginModal;