// import { fetchSpot } from '../store/spot'
import React from 'react';
import { useSelector , useDispatch} from 'react-redux';
import { useParams , useHistory} from 'react-router-dom';
import { destroySpot } from '../store/spot';
const SingleSpot = () => {
    const {spotId} = useParams()
    const history = useHistory()
    const dispatch = useDispatch()
    const spot = useSelector(state => state.spots[spotId])
    const user = useSelector(state => state.session.user)

    
    console.log(spot)
    // const dispatch = useDispatch()


    // useEffect(() => {
    //     if(!spotId){
    //         return;
    //     }

    //     (async () => {
    //         await dispatch(fetchSpot(spotId));
    //       })();
    // },[spotId,dispatch])

    // if(spot){

    const deleteSpot = async(e) =>{
   
            await dispatch(destroySpot(spotId))
            history.push('/spots')
    }

        return(
            <div className='single-spot-container'>
                <div key={spot?.id}>
                    {/* <p>{console.log(spot.image[0].imageUrl)} </p> */}
                    <img src={spot.image[0]?.imageUrl} alt='' />        
                    <h3>{spot?.address}</h3>
                    <h4>{spot?.name}</h4>
                    <p>{spot?.city}</p>
                    <p>{spot?.state}</p>
                    <p>{spot?.country}</p>
                    <p>{spot?.price}</p>
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