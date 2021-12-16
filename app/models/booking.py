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

    def book_to_dict(self):
        return {
            'id': self.id,
            'userId': self.userId,
            'spotId': self.spotId,
            'startDate': self.startDate,
            'endDate': self.endDate
        }

    def booking_to_dict_inc_user(self):
        return {
            'id': self.id,
            'userId': self.userId,
            'spotId': self.spotId,
            'booking': {
            'startDate': self.startDate,
            'endDate': self.endDate,
            },
            'user': self.user.to_dict(),
    }