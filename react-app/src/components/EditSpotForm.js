import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { patchSpot } from '../store/spot';
import { useParams } from 'react-router-dom';

function EditSpotForm({ oldPrice, hideEdit }) {
    const {spotId} = useParams();
    const dispatch = useDispatch()
    const [price, setPrice] = useState(oldPrice)


    const submitEdit = async (e) => {
        e.preventDefault()
        await dispatch(patchSpot(price, spotId))
        hideEdit(e)
    }

    return (
        <div>
            <textarea value={price} onChange={(e) => setPrice(e.target.value)}/>
            <div className="edit-price-btn">
                <div className="edit-price-btn" onClick={(e) => submitEdit(e)}><i className="fas fa-sync-alt"></i></div>
                <div className="edit-price-btn" onClick={hideEdit}><i className="far fa-times-circle"></i></div>
            </div>

        </div>

    )
}

export default EditSpotForm
