import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import EditReviewForm from './EditReviewForm';
import DeleteModal from './DeleteModal';
import './SingleReview.css'
const SingleReview = ({review}) => {
    const [showEdit, setShowEdit] = useState(false)
    const user = useSelector(state => state.session.user)



   
    const displayEdit = (e) => {
        e.preventDefault()
        setShowEdit(true)
    }

    const hideEdit = (e) => {
        e.preventDefault()
        setShowEdit(false)
    }
    
    if (showEdit){
            return <EditReviewForm oldReview={review} reviewId={review.id} hideEdit={hideEdit}/>
            }
    else{
        return(
            <>
            <div className='single-review-container'>
                <div className='user-name-single-review'>
                    <h4>{review.user.username}</h4>  
                </div>
                <div className='user-single-review'>
                    <span>{review.review}</span>
                </div>
            </div>
                <div className='single-review-page-btns'> 
                    {user.id === review?.userId && <div  onClick={displayEdit}><button className='toggle-edit-btn'>Edit</button></div>}
                    {user.id === review?.userId && <DeleteModal reviewId={review.id} spotId={review.spotId} />}
                </div>
            </>
            )}
    }
    


export default SingleReview;