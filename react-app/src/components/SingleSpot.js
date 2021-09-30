// import { fetchSpot } from '../store/spot'
import React,  { useEffect, useState }   from 'react';
import { useSelector , useDispatch} from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchSpot } from '../store/spot';
// import { destroySpot } from '../store/spot';

// import { patchSpot } from '../store/spot';
import EditSpotForm from './EditSpotForm';
import Review from './Review';
import { getAllReviews } from '../store/spot';
// import EditReviewForm from './EditReviewForm';
import DeleteSpotModal from './DeleteSpotModal';
import "./SingleSpot.css"

const SingleSpot = () => {
    const {spotId} = useParams()
    // const history = useHistory()
    const dispatch = useDispatch()
    const spot = useSelector(state => state.spots)
    const user = useSelector(state => state.session.user)
    const [showEdit, setShowEdit] = useState(false)
    
    const spotImages = {...spot.image}
     delete spotImages['0']
    
    


    useEffect(() => {
       

        (async () => {

            await dispatch(fetchSpot(spotId));
            await dispatch(getAllReviews(spotId))

          })();
    },[spotId,dispatch])



    // const deleteSpot = async(e) =>{
    //     e.preventDefault()
    //     await dispatch(destroySpot(spotId))
    //     history.push('/spots')
    // }



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
    
        {user.id === spot?.userId && <div  onClick={displayEdit}><i id='edit-spot' className='fas fa-pencil-alt fa-lg'> </i></div>}
         </>
        )}
    


        return(
            <div className='single-spot-container'>
                <div className='single-spots-display' key={spot?.id}>
                    
                    <div className='photo-display-container'>
                         <img className='big-photo' src={spot?.image?.[0].imageUrl} alt='' key={spot?.id}/> 
                        <div className='photo-thumbnail-container'>
                            {spotImages && Object.values(spotImages).map(image => 
                                
                                    <img className='photo' key={image?.id} src={`${image.imageUrl}`} alt=''/>
                              
                                
                                )}
                           
                        </div>

                    </div>
                    <div className='spots-info'>
                    <h3>{spot?.address}</h3>
                    <p>{spot?.city}</p>
                    <p>{spot?.state}</p>
                    <p>{spot?.country}</p>
                    <h4>{spot?.name}</h4>
                    {!showEdit && <p>{spot?.price} / night</p>}
                   <div>{priceContent}</div>
                   </div>     
                   <div>
                       <Review />
                       
                   </div>
                    <div className="delete-spot">
                    {user.id === spot?.userId && <DeleteSpotModal  spotId={spotId} />}

                        {/* {
                            user.id === spot?.userId &&  <button className="delete-spot-btn" onClick={e => deleteSpot(e)}>Remove Listing</button>
                        } */}
                        
                        </div>                                  
                </div>               
            </div>
        )
    // }
}

export default SingleSpot;