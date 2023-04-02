const GET_SPOT = 'spots/GET_SPOT'
const ALL_SPOTS = 'spots/ALL_SPOTS'
const ADD_SPOT = 'spots/ADD_SPOT'
const DELETE_SPOT = 'spots/DELETE_SPOT'

const GET_REVIEWS = 'spots/GET_REVIEWS'
const ADD_REVIEW = 'spots/ADD_REVIEW'
const EDIT_REVIEW = 'spots/EDIT_ REVIEW'
const REMOVE_REVIEW = 'spots/REMOVE_REVIEW'

const GET_BOOKINGS = 'spots/GET_BOOKINGS'
const ADD_BOOKING ='spots/ADD_BOOKING'
const EDIT_BOOKING = 'spots/EDIT_BOOKING'

const getBookings = (bookings) => ({
    type: GET_BOOKINGS,
    data: bookings
})

const addBooking = (booking, spotId) => ({
    type: ADD_BOOKING,
    data: {
        booking,
        spotId
    }
})




const addReview = (review, spotId) => ({
    type: ADD_REVIEW,
    data: {
        review,
        spotId
    }
})

const editReview = (review) => ({
    type: EDIT_REVIEW,
        review
})

const deleteReview = (reviewId, spotId) => ({
    type: REMOVE_REVIEW,
    data: {
        reviewId,
        spotId
    }
})

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

const getReviews = (reviews) => ({
    type: GET_REVIEWS,
    data: reviews
})
//---------------------------BOOKINGS 
// export const getUserBookings = (userId) => async(dispatch) => {
//     const res = await fetch(`/api/users/${userId}`)
//     const bookings = await res.json()
//     dispatch(getBookings(bookings))
//     return bookings
// }

export const getAllBookings = (spotId) => async(dispatch) => {
    const res = await fetch(`/api/spots/${spotId}/bookings`)
    const bookings = await res.json()

    dispatch(getBookings(bookings))
    return bookings
}
export const addNewBooking = (booking, spotId) => async(dispatch) => {
    const res = await fetch(`/api/spots/${spotId}/bookings/add`, {
        method: "POST",
        headers: { "Content-Type":"application/json" },
        body: JSON.stringify(booking)
    })
    const newBooking = await res.json()
    if(res.ok) {
        dispatch(addBooking(newBooking, spotId))
       alert("You're Booked!")
    }
}


//----------------------------REVIEWS 
export const deleteAReview = (reviewId, spotId) => async(dispatch) => {
    const res = await fetch(`/api/spots/${spotId}/reviews/${reviewId}`, {
        method: "DELETE"
    })
    if(res.ok) {
        dispatch(deleteReview(reviewId, spotId))
    }
}


export const editAReview = (reviewBody, reviewId, spotId) => async(dispatch) => {
    const res = await fetch(`/api/spots/${spotId}/reviews/${reviewId}`, {
        method: "PATCH",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({reviewBody})
    })
    const edittedReview = await res.json()
    dispatch(editReview(edittedReview))
}

export const getAllReviews = (spotId) => async(dispatch) => {
    const res = await fetch(`/api/spots/${spotId}/reviews`)
    const reviews = await res.json()
    
    dispatch(getReviews(reviews))
    return reviews
}

export const addNewReview = (review, spotId) => async(dispatch) => {
    const res = await fetch(`/api/spots/${spotId}/reviews/add`, {
        method: "POST",
        headers: { "Content-Type":"application/json" },
        body: JSON.stringify(review)
    })
    const newReview = await res.json()
    dispatch(addReview(newReview, spotId))
}

//----------------------------SPOTS
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
    const res = await fetch(`/api/spots/`)
    if (res.ok){
    const {spots} = await res.json()
    dispatch(getAllSpots(spots))
    return spots
    }
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

export const patchSpot = (price, spotId) => async(dispatch) => {
    const res = await fetch(`/api/spots/${spotId}`,{
        method: 'PATCH',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({price})
    })
    if(res.ok){
        const spot = await res.json()
        dispatch(getSpot(spot))
        return spot
    }
}

export const addImage = (spotId , imageUrl) => async(dispatch)=>{
    const res = await fetch(`/api/spots/${spotId}/images`, {
        method: "POST",
        headers: { "Content-Type":"application/json" },
        body: JSON.stringify({imageUrl})
    })
    const newSpot = await res.json()
    dispatch(getSpot(newSpot))
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
            newState = {}          
            action.spots.forEach(spot => {
                newState[spot.id] = spot
            })
            return newState
        case ADD_SPOT:
            newState[action.spot.id] = action.spot
            return newState
        case DELETE_SPOT:
                delete newState[action.spotId]
            return newState
        case GET_REVIEWS:  
            newState.reviews = {}
            Object.values(action.data.reviews).forEach(review => {           
                newState.reviews[review.id] = review
            })
            return newState
        case ADD_REVIEW:
            newState.reviews[action.data.review.id] = action.data.review
            return newState
        case EDIT_REVIEW:
            newState.reviews[action.review.id] = action.review
            return newState
        case REMOVE_REVIEW:
            delete newState.reviews[action.data.reviewId]
            return newState
        case GET_BOOKINGS:
            newState.bookings = {}
            Object.values(action.data.bookings).forEach(booking => {           
                newState.bookings[booking.id] = booking
            })
            return newState
        case ADD_BOOKING:
            newState.bookings[action.data.booking.id] = action.data.booking
            return newState
        case EDIT_BOOKING:
            newState.bookings[action.booking.id] = action.booking
            return newState
        
        default: 
            return state
        }   
}

export default spotReducer;


