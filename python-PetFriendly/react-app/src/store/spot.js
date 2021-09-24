const GET_SPOT = 'spots/GET_SPOT'
const ALL_SPOTS = 'spots/ALL_SPOTS'
const ADD_SPOT = 'spots/ADD_SPOT'
const DELETE_SPOT = 'images/DELETE_SPOT'


const getSpot = (spot) => ({
    type: GET_SPOT,
    spot,
})

const getAllSpots = (spots) => ({
    type: ALL_SPOTS,
    spots
})

const addSpot = (spot) => ({
    type: ADD_SPOT,
    spot
})

const deleteSpot = (spotId) => ({
    type: DELETE_SPOT,
    spotId
})

export const addNewSpot = (spotPayload) => async(dispatch) => {
    const res = await fetch('/api/spots/add', {
        method:"POST",
        headers: { "Content-Type" : "application/json" },
        body: JSON.stringify(spotPayload)
    })
    const spot = await res.json()
    if(res.ok){
        dispatch(addSpot(spot))
    }
    return spot
}

export const fetchAllSpots = () => async (dispatch) => {
    const res = await fetch(`/api/spots`)
    if (res.ok){
    const {spots} = await res.json()
    dispatch(getAllSpots(spots))
    return spots
    }
    return
}

export const fetchSpot = (spotId) => async (dispatch) => {
    const res = await fetch(`/api/spots/${spotId}`)
    if (res.ok){
    const spot = await res.json()
    dispatch(getSpot(spot))
    return spot
    }
    return
}
export const destroySpot = (spotId) => async(dispatch) => {
    await fetch(`/api/spots/${spotId}`,
    {
        method: 'DELETE'
    })
    dispatch(deleteSpot(spotId))
    return
}

const initialState = {}
const spotReducer = (state = initialState, action) => {
    let newState = {...state}
    switch (action.type) {
        case GET_SPOT:
            
            newState = action.spot
            return newState
        case ALL_SPOTS:
            
            action.spots.forEach(spot => {
                newState[spot.id] = spot
            })
            // newState = action.spots
            return newState
        case ADD_SPOT:
            newState[action.spot.id] = action.spot
            return newState
        case DELETE_SPOT:
                delete newState[action.spotId]
            return newState    
        default: return state
        }
            
}

export default spotReducer;


