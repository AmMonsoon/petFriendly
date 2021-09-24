from app.models import db, Review
from faker import Faker 

faker = Faker()



def seed_reviews():

    for i in range (15):
        user_review = Review(userId = i + 1, spotId = i + 1, review = faker.sentence())
        db.session.add(user_review)
    db.session.commit()

def undo_reviews():
    db.session.execute('TRUNCATE reviews RESTART IDENTITY CASCADE;')
    db.session.commit()
