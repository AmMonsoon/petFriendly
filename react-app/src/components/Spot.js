import React , { useEffect }from  'react'
import { useHistory} from 'react-router-dom'

import { fetchAllSpots } from '../store/spot'
import {useDispatch, useSelector} from 'react-redux'
import './Spot.css'

const Spot = () => {
    
    const history = useHistory()
    const dispatch = useDispatch()
    const spots = useSelector(state => Object.values(state.spots))
    

    useEffect(() => {
       
        (async () => {
            await dispatch(fetchAllSpots());
          })();
    },[dispatch])
   
const handleClick = (e) =>{

    history.push(`/spots/${e.target.id}`)
}

    return(
        <div className="spots-page-container">
            <div className='spots-wrapper'>
            {spots && spots?.map((spot, i )=>               
                    <div className='spots-div' key={i}  >
                        
                      {spot?.image?.length && <img src={spot?.image[0]?.imageUrl} onClick={handleClick} id={spot.id} alt=''  /> }         
                       
                        
                        <p id='spot-location'>{spot.city}, {spot.state}</p>
                        <div id='spot-price' >
                        <p>{spot.price} / night</p> 
                        </div>
                       
                        
                    </div>
            )}
            </div>
        </div>
    )

}

export default Spot;