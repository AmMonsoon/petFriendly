from .db import db

class Spot(db.Model):
    __tablename__ = 'spots'

    id = db.Column(db.Integer, primary_key=True)
    userId = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=False)
    address = db.Column(db.Text, nullable=False) 
    city = db.Column(db.Text, nullable=False) 
    state = db.Column(db.Text, nullable=False) 
    country = db.Column(db.Text, nullable=False) 
    name = db.Column(db.Text, nullable=False) 
    price = db.Column(db.String, nullable=False)
    
    user = db.relationship("User", back_populates="spot")
    review = db.relationship("Review", cascade="all,delete", back_populates="reviewer" )
    image = db.relationship("Image", cascade="all,delete",back_populates="pic")
    booking = db.relationship("Booking",cascade="all,delete", back_populates= "booker")


    def to_dict_spot(self):
        return {
            'id': self.id,
            'userId': self.userId ,
            'address': self.address,
            'city': self.city,
            'state': self.state,
            'country': self.country,
            'name': self.name,
            'price': self.price,
            'image': [images.image_to_dict() for images in self.image]
        }

    def to_dict_inc_image(self):
        return {
        'id': self.id,
        'userId': self.userId,
        'address': self.address,
        'city': self.city,
        'state': self.state,
        'country': self.country,
        'name': self.name,
        'price': self.price,
        'image': self.image.image_to_dict()
        }