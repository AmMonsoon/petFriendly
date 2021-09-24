import React , { useEffect }from  'react'
import { useHistory, useParams} from 'react-router-dom'

import { fetchAllSpots } from '../store/spot'
import {useDispatch, useSelector} from 'react-redux'
import './Spot.css'

const Spot = () => {
    // const {spotId} = useParams()
    const history = useHistory()
    const dispatch = useDispatch()
    const user = useSelector(state => state.session.user)
    const spots = useSelector(state => Object.values(state.spots))
    

    useEffect(() => {
        // if(!spot){
        //     return;
        // }

        (async () => {
            await dispatch(fetchAllSpots(spots));
          })();
    },[dispatch])
   
const handleClick = (e) =>{

    history.push(`/spots/${e.target.id}`)
}


    return(
        <div className="spots-page-container">
            <div className='spots-wrapper'>
            {spots && spots?.map(spot =>               
                    <div className='spots-div' key={spot.id}  >
                        {/* <h4>{spot.name}</h4> */}
                        <img src={spot.image[0]?.imageUrl} onClick={handleClick} id={spot.id} alt=''  />        
                        {/* <h3>{spot.address}</h3> */}
                        
                        <p>{spot.city}, {spot.state}</p>
                        
                        {/* <p>{spot.country}</p> */}
                        {/* <p>{spot.price}</p>  */}
                                     
                    </div>
                
                )}
            </div>
        </div>
    )

}

export default Spot;