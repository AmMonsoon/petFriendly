import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { patchSpot } from '../store/spot';
import { useParams } from 'react-router-dom';
import { addImage } from '../store/spot';
import './EditSpotForm.css'

function EditSpotForm({ oldPrice, hideEdit }) {
    const {spotId} = useParams();
    const dispatch = useDispatch()
    const [price, setPrice] = useState(oldPrice)
    const [imageUrlOne, setImageUrlOne] = useState('')
    const [imageUrlTwo, setImageUrlTwo] = useState('')
    const [imageUrlThree, setImageUrlThree] = useState('')
    const [imageUrlFour, setImageUrlFour] = useState('')
    const numImages = useSelector(state => state.spots.image.length )
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


    const submitEdit = async (e) => {
        e.preventDefault()
        const errors = []
        let checkedImageOne = await checkImage(imageUrlOne)
        let checkedImageTwo = await checkImage(imageUrlTwo)
        let checkedImageThree = await checkImage(imageUrlThree)
        let checkedImageFour = await checkImage(imageUrlFour)

        if(!checkedImageOne) errors.push("Please include a valid image URL")
        if(!checkedImageTwo) errors.push("Please include a valid image URL")
        if(!checkedImageThree) errors.push("Please include a valid image URL")
        if(!checkedImageFour) errors.push("Please include a valid image URL")

        if(!price) errors.push("Please enter a valid price")
        if(errors.length){
            setValidationErrors(errors)
        }else{

            await dispatch(patchSpot(price, spotId))
            if(imageUrlOne){
                await dispatch(addImage(spotId, imageUrlOne))
            }
            if(imageUrlTwo){
                await dispatch(addImage(spotId, imageUrlTwo))
            }
            if(imageUrlThree){
                await dispatch(addImage(spotId, imageUrlThree))
            }
            if(imageUrlFour){
                await dispatch(addImage(spotId, imageUrlFour))
            }
            hideEdit(e)
        }

    }
   

    return (
        <div className='edit-form-container'>
            <form className='edit-spot-form'>
            <div className='form-errors'>
            {validationErrors.map((error, ind) => (
                <div key={ind}>{error}</div>
            ))}
            </div>

            <input  type='number' min="0.00" max='"1000.00"' step='any' value={price} onChange={(e) => setPrice(e.target.value)}/>
            {numImages < 5 && <input placeholder="Image URL" type="text" required value={imageUrlOne} onChange={((e) => setImageUrlOne(e.target.value))} />}
            {numImages < 4 && <input placeholder="Image URL" type="text" required value={imageUrlTwo} onChange={((e) => setImageUrlTwo(e.target.value))} />}
            {numImages < 3 && <input placeholder="Image URL" type="text" required value={imageUrlThree} onChange={((e) => setImageUrlThree(e.target.value))} />}
            {numImages < 2 && <input placeholder="Image URL" type="text" required value={imageUrlFour} onChange={((e) => setImageUrlFour(e.target.value))} />}

            <div className="edit-btn">
                <div className="edit-submit-btn" onClick={(e) => submitEdit(e)}><button>Edit</button></div>
                <div className="edit-cancel-btn" onClick={hideEdit}><button>Cancel</button></div>
            </div>
            </form>

        </div>

    )
}

export default EditSpotForm
