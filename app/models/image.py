from .db import db


class Image(db.Model):
    __tablename__ = 'images'

    id = db.Column(db.Integer, primary_key=True)
    spotId = db.Column(db.Integer, db.ForeignKey('spots.id'), nullable=False)
    imageUrl = db.Column(db.TEXT, nullable = False)
    

    pic = db.relationship("Spot", back_populates="image")
 
    def image_to_dict(self):
        return {
            'id': self.id,
            'spotId': self.spotId ,
            'imageUrl': self.imageUrl,
        }