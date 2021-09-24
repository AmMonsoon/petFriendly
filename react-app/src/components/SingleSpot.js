// import { fetchSpot } from '../store/spot'
import React,  { useEffect, useState }   from 'react';
import { useSelector , useDispatch} from 'react-redux';
import { useParams , useHistory} from 'react-router-dom';
import { fetchAllSpots, fetchSpot } from '../store/spot';
import { destroySpot } from '../store/spot';
import { patchSpot } from '../store/spot';
import EditSpotForm from './EditSpotForm';

const SingleSpot = () => {
    const {spotId} = useParams()
    const history = useHistory()
    const dispatch = useDispatch()
    const spot = useSelector(state => state.spots)
    const user = useSelector(state => state.session.user)
    const [showEdit, setShowEdit] = useState(false)
    
    


    useEffect( async () => {
       

        (async () => {
            await dispatch(fetchSpot(spotId));
          })();
    },[spotId,dispatch])

   

    const deleteSpot = async(e) =>{
        e.preventDefault()
        await dispatch(destroySpot(spotId))
        history.push('/spots')
    }



    let priceContent;
    const displayEdit = (e) => {
        e.preventDefault()
        setShowEdit(true)
    }

    const hideEdit = (e) => {
        e.preventDefault()
        setShowEdit(false)
    }
    if (showEdit){
        priceContent = <EditSpotForm oldPrice={spot.price} hideEdit={hideEdit}/>
        }
        else{
        priceContent = (
        <>  
    {/* <i className="fas fa-edit"></i> */}
        {user.id === spot?.userId && <div  onClick={displayEdit}><p>{spot.price}</p><button>Edit</button></div>}
         </>
        )}
    


        return(
            <div className='single-spot-container'>
                <div key={spot?.id}>
                    
                  { spot.image && spot.image.map(image =>   <img src={image?.imageUrl} alt='' /> )}      
                    <h3>{spot?.address}</h3>
                    <h4>{spot?.name}</h4>
                    <p>{spot?.city}</p>
                    <p>{spot?.state}</p>
                    <p>{spot?.country}</p>
                    {/* <p>{spot?.price}</p> */}
                   <div>{priceContent}</div>
                   
                    <div className="delete-spot">
                        {
                            user.id === spot?.userId &&  <button className="delete-spot-btn" onClick={e => deleteSpot(e)}>Delete Spot</button>
                        }
                        
                        </div>                                  
                </div>               
            </div>
        )
    // }
}

export default SingleSpot;