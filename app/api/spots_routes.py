from flask import Blueprint, request
from app.models import Spot, db, Image, Review, User
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


@spots_routes.route('/<int:id>/reviews')
def get_reviews(id):
    reviews = Review.query.filter(Review.spotId == id).all()
    # reviewPayload = {}
    # for review in reviews:
    #     reviewUser = User.query.filter(User.id == review.userId).first()
    #     review.user = reviewUser.to_dict()
    #     reviewPayload[review.id] = review.review_to_dict_inc_user()
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
    
    reviewUser = User.query.filter(User.id == review.userId).first()
    review.user = reviewUser.to_dict()
    payload = review.review_to_dict_inc_user()
    return payload
    