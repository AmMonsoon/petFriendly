import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { patchSpot } from '../store/spot';
import { useParams } from 'react-router-dom';
import { addImage } from '../store/spot';
function EditSpotForm({ oldPrice, hideEdit }) {
    const {spotId} = useParams();
    const dispatch = useDispatch()
    const [price, setPrice] = useState(oldPrice)
    const [imageUrlOne, setImageUrlOne] = useState('')
    const [imageUrlTwo, setImageUrlTwo] = useState('')
    const [imageUrlThree, setImageUrlThree] = useState('')
    const [imageUrlFour, setImageUrlFour] = useState('')
    const numImages = useSelector(state => state.spots.image.length )
    console.log('$^$^$^&$^&$^&$&^$&^$',numImages)
    const submitEdit = async (e) => {
        e.preventDefault()
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

    return (
        <div>
            
            <input  type='number' min="0.00" max='"1000.00"' step='any' value={price} onChange={(e) => setPrice(e.target.value)}/>
            {numImages < 5 && <input placeholder="Image URL" type="text" required value={imageUrlOne} onChange={((e) => setImageUrlOne(e.target.value))} />}
            {numImages < 4 && <input placeholder="Image URL" type="text" required value={imageUrlTwo} onChange={((e) => setImageUrlTwo(e.target.value))} />}
            {numImages < 3 && <input placeholder="Image URL" type="text" required value={imageUrlThree} onChange={((e) => setImageUrlThree(e.target.value))} />}
            {numImages < 2 && <input placeholder="Image URL" type="text" required value={imageUrlFour} onChange={((e) => setImageUrlFour(e.target.value))} />}

            <div className="edit-price-btn">
                <div className="edit-price-btn" onClick={(e) => submitEdit(e)}><i className="fas fa-sync-alt"></i></div>
                <div className="edit-price-btn" onClick={hideEdit}><i className="far fa-times-circle"></i></div>
            </div>

        </div>

    )
}

export default EditSpotForm
