import re
from flask import Blueprint, request
from app.models import Spot, db, Image, Review, Booking
from sqlalchemy import orm
from flask_login import current_user
from datetime import datetime
import random

spots_routes = Blueprint('spots',__name__)

@spots_routes.route('/')
def spots():
    spots = Spot.query.all()
  
    return {'spots': [spot.to_dict_spot() for spot in spots]}

@spots_routes.route('/<int:id>')
def spot(id):
    spot = Spot.query.get(id)
   
    
    return spot.to_dict_spot()

@spots_routes.route('/add', methods=['POST'])
def post_spot():
    data = request.json
    spot = Spot(
        userId=current_user.id,
        address=data['address'],
        city=data['city'],
        state=data['state'],
        country=data['country'],
        name=data['name'],
        price=data['price'],      
    )
    db.session.add(spot)
    db.session.commit()

    image = Image(
            spotId = spot.id,
            imageUrl= data['imageUrl']
        )

    
    db.session.add(image)
    db.session.commit()
   
    return spot.to_dict_spot()

@spots_routes.route('/<int:id>/images', methods=['POST'])
def post_image(id):
    data = request.json
    image = Image(
            spotId=id,
            imageUrl= data['imageUrl']
        )
    db.session.add(image)
    db.session.commit()
    update_spot = Spot.query.get(id)
    return update_spot.to_dict_spot()


@spots_routes.route('/<int:id>', methods=['PATCH'])
def update_spot(id):
    updated_spot = request.json['price']
    spot = Spot.query.options(orm.joinedload('user')).get(id)
    spot.price = updated_spot
    db.session.add(spot)
    db.session.commit()

    return spot.to_dict_spot()



@spots_routes.route('/<int:id>' , methods=['DELETE'])
def delete_spot(id):
    spot = Spot.query.get(id)
    db.session.delete(spot)
    db.session.commit()
    return "spot deleted"

#  REVIEW ROUTES
@spots_routes.route('/<int:id>/reviews')
def get_reviews(id):
    reviews = Review.query.filter(Review.spotId == id).all()
    
    return {'reviews': [review.review_to_dict_inc_user() for review in reviews]}


@spots_routes.route('/<int:id>/reviews/add', methods=['POST'])
def add_review(id):
    data = request.json

    review = Review(
        userId=current_user.id,
        spotId=id,
        review=data['review']
    )

    db.session.add(review)
    db.session.commit()
    
     
    return review.review_to_dict_inc_user()

@spots_routes.route('/<int:id>/reviews/<int:reviewId>', methods=['PATCH'])
def edit_review(id, reviewId):
    
    reviewToEdit = Review.query.get(reviewId)
    edittedReview = request.json['reviewBody']
    reviewToEdit.review = edittedReview
    print('^^^^^^^^^^^^',reviewToEdit)
    print('<<<<<<<<<<<<<',reviewId)
    # print('>>>>>>>>>>>>',reviewToEdit.reviewBody)

    db.session.add(reviewToEdit)
    db.session.commit()
   
    return reviewToEdit.review_to_dict_inc_user()

@spots_routes.route('/<int:id>/reviews/<int:reviewId>', methods=['DELETE'])
def delete_review(id, reviewId):
    reviewToDelete = Review.query.get(reviewId)
    db.session.delete(reviewToDelete)
    db.session.commit()
    return "YES, DELETED"
# BOOKING ROUTES

@spots_routes.route('/<int:id>/bookings')
def get_bookings(id):
    bookings = Booking.query.filter(Booking.spotId == id).all()
    return {'bookings': [booking.booking_to_dict_inc_user() for booking in bookings]}

@spots_routes.route('/<int:id>/bookings/add', methods=['POST'])
def add_booking(id):
    data = request.json

    booking = Booking(
        userId=current_user.id,
        spotId=id,
        startDate=data['startDate'],
        endDate=data['endDate']
    )

    db.session.add(booking)
    db.session.commit()
    
     
    return booking.book_to_dict_inc_user()

@spots_routes.route('/<int:id>/bookings/<int:bookingId>', methods=['PATCH'])
def edit_booking(id, bookingId):
    
    bookingToEdit = Review.query.get(bookingId)
    edittedBooking = request.json['reviewBody']
    bookingToEdit.booking = edittedBooking
    print('^^^^^^^^^^^^',bookingToEdit)
    print('<<<<<<<<<<<<<',bookingId)
    # print('>>>>>>>>>>>>',reviewToEdit.reviewBody)

    db.session.add(bookingToEdit)
    db.session.commit()
   
    return bookingToEdit.book_to_dict_inc_user()

@spots_routes.route('/<int:id>/bookings/<int:bookingId>', methods=['DELETE'])
def delete_booking(id, bookingId):
    bookingToDelete = Booking.query.get(bookingId)
    db.session.delete(bookingToDelete)
    db.session.commit()
    return "YES, DELETED"