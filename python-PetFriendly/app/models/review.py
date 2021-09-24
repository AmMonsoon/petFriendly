from .db import db

class Review(db.Model):
    __tablename__ = 'reviews'

    id = db.Column(db.Integer, primary_key=True)
    userId = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=False)
    spotId = db.Column(db.Integer, db.ForeignKey('spots.id'), nullable=False)
    review = db.Column(db.Text, nullable=False)
    
    
    user = db.relationship("User", back_populates="review")
    reviewer = db.relationship("Spot", back_populates="review")
    