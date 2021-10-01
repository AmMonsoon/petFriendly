import { useDispatch, useSelector } from "react-redux"
import { useState } from "react"
import { addNewSpot } from "../store/spot"
import { useHistory } from "react-router-dom"
import './NewSpot.css'
import coolCat from '../images/coolcat.jpeg'

const CreateSpot = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    const sessionUser = useSelector(state => state.session.user);
    // const userId = useSelector(state => state.session.user.id)

    const [imageUrl, setImageUrl] = useState('');
    const [address, setAddress] = useState('');
    const [city, setCity] = useState('')
    const [state, setState] = useState('')
    const [country, setCountry] = useState('')
    const [name, setName] = useState('')
    const [price, setPrice] = useState('')
    const [validationErrors, setValidationErrors] = useState([])


const checkImage = async(url) => {
        return new Promise((resolve, reject) => {
            const image = new Image();
            image.onload = function() {
              if (this.width > 0) {
                resolve(true)
            }
        }
        image.onerror = function () {
            resolve(false)
        }
        image.src = url;
        })  
    }

const handleSubmit = async(e) => {
        e.preventDefault();
        const errors = [];
        let checkedImage = await checkImage(imageUrl)
        if(!checkedImage) errors.push("Please include a valid image URL")
        if (errors.length){
            setValidationErrors(errors)
        } else {
            const spot = {
                userId: sessionUser.id,
                // spotId,
                address,
                city,
                state,
                country,
                price,
                name,
                imageUrl
            }
                let createdSpot = await dispatch(addNewSpot(spot))
                if(createdSpot) {
                    history.push(`/spots/${createdSpot.id}`)
                }
        
            }
        }
    const handleCancel = async(e) => {
        e.preventDefault();
        history.push(`/spots`)
    } 
   return(
       <section className='add-spot-section'>
            <div className='form-errors'>
            {validationErrors.map((error, ind) => (
                <div key={ind}>{error}</div>
            ))}
            </div>
            <div className='form-container'>
            <div className='image-container'>
                <img src={coolCat} alt=''/>
            </div>
            <div className='add-spot-header'>
                <h2>Add a Spot</h2>
            </div>
                
           <form className='new-spot-form'
                 onSubmit={handleSubmit}>
                <input placeholder='name' type='text' required value={name} onChange={ e => setName(e.target.value)}/>
                <input placeholder='address' type='text' required value={address} onChange={ e => setAddress(e.target.value)}/>
                <input placeholder='city' type='text' required value={city} onChange={ e => setCity(e.target.value)}/>
                <input placeholder='state' type='text' required value={state} onChange={ e => setState(e.target.value)}/>
                <input placeholder='country' type='text' required value={country} onChange={ e => setCountry(e.target.value)}/>
                <input placeholder='price' type='text' required value={price} onChange={ e => setPrice(e.target.value)}/>
                <input placeholder="Image URL" type="text" required value={imageUrl} onChange={((e) => setImageUrl(e.target.value))} />
                <div className='new-spot-btns'> 
                <button className='add-spot-submit' type="submit">Submit</button>
                <button className='cancel-add' type='click' onClick={handleCancel}>Cancel</button>
                </div>
           </form>

            </div>
       </section>
   )
   }

export default CreateSpot;