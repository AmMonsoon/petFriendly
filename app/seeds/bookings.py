from app.models import db, Booking
from faker import Faker

faker = Faker()

def seed_bookings():

    for i in range (15):
        booking = Booking(userId = i + 1, spotId = i + 1, startDate = faker.date(), endDate = faker.date_between(start_date='-30y',end_date='today'))
        db.session.add(booking)
    db.session.commit()


def undo_bookings():
    db.session.execute('TRUNCATE bookings RESTART IDENTITY CASCADE;')
    db.session.commit()