from app.models import Spot,db
from faker import Faker

faker = Faker()
def seed_spots():

    for i in range (15):
        spot = Spot(userId = i + 1,address = faker.street_address(), city = faker.city(), state = faker.state(), country = faker.current_country(), name = faker.name(), price = faker.pricetag())
        db.session.add(spot)
    db.session.commit()   

def undo_spots():
    db.session.execute('TRUNCATE spots RESTART IDENTITY CASCADE;')
    db.session.commit()