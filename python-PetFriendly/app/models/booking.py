from .db import db

class Booking(db.Model):
    __tablename__ = 'bookings'

    id = db.Column(db.Integer, primary_key=True)
    userId = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=False)
    spotId = db.Column(db.Integer, db.ForeignKey('spots.id'), nullable=False)
    startDate = db.Column(db.DateTime(timezone=True), nullable = False)
    endDate = db.Column(db.DateTime(timezone=True), nullable = False)
    
    user = db.relationship("User", back_populates="booking")
    booker = db.relationship("Spot", back_populates="booking")