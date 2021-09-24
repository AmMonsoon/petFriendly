from app.models import db, User
from faker import Faker

faker = Faker()




# Adds a demo user, you can add other users here if you want
def seed_users():
    demo = User(
        username='Demo', email='demo@aa.io', password='password', firstName="Demo", lastName="User")
    marnie = User(
        username='marnie', email='marnie@aa.io', password='password', firstName="Marnarious", lastName="Marn")
    bobbie = User(
        username='bobbie', email='bobbie@aa.io', password='password',firstName="James", lastName="Chipson")

    db.session.add(demo)
    db.session.add(marnie)
    db.session.add(bobbie)

    db.session.commit()

    randomArr = [
    "https://images.unsplash.com/photo-1631160214841-92d2b6ce25f9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTYzMTgyMjg3NA&ixlib=rb-1.2.1&q=80&w=1080",
    "https://images.unsplash.com/photo-1629349997103-aeefaf30f2cf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTYzMTgyMjg3NA&ixlib=rb-1.2.1&q=80&w=1080",
    "https://images.unsplash.com/photo-1631339287639-e0af96360ce6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTYzMTgyMjg3NA&ixlib=rb-1.2.1&q=80&w=1080",
    "https://images.unsplash.com/photo-1631481784927-da978de9ddb7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTYzMTgyMjg3NA&ixlib=rb-1.2.1&q=80&w=1080",
    "https://images.unsplash.com/photo-1630370448234-abcd569512f9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTYzMTgyMjg3NA&ixlib=rb-1.2.1&q=80&w=1080",
    "https://images.unsplash.com/photo-1631168709859-6300e28409ba?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTYzMTgyMjg3NA&ixlib=rb-1.2.1&q=80&w=1080",
    "https://images.unsplash.com/photo-1630396427043-c0fe3fb0d228?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTYzMTgyMjg3NA&ixlib=rb-1.2.1&q=80&w=1080",
    "https://images.unsplash.com/photo-1605702098590-d552a98dc93d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTYzMTgyMjg3NA&ixlib=rb-1.2.1&q=80&w=1080",
    "https://images.unsplash.com/photo-1629203432180-71e9b18d855c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTYzMTgyMjg3NA&ixlib=rb-1.2.1&q=80&w=1080",
    "https://images.unsplash.com/photo-1631544114506-c252206abbc6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTYzMTgyMjg3NA&ixlib=rb-1.2.1&q=80&w=1080",
    "https://images.unsplash.com/photo-1631160214841-92d2b6ce25f9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTYzMTgyMjg3NQ&ixlib=rb-1.2.1&q=80&w=1080",
    "https://images.unsplash.com/photo-1629349997103-aeefaf30f2cf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTYzMTgyMjg3NQ&ixlib=rb-1.2.1&q=80&w=1080",
    "https://images.unsplash.com/photo-1631339287639-e0af96360ce6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTYzMTgyMjg3NQ&ixlib=rb-1.2.1&q=80&w=1080",
    "https://images.unsplash.com/photo-1631481784927-da978de9ddb7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTYzMTgyMjg3NQ&ixlib=rb-1.2.1&q=80&w=1080",
    "https://images.unsplash.com/photo-1630370448234-abcd569512f9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTYzMTgyMjg3NQ&ixlib=rb-1.2.1&q=80&w=1080",
    "https://images.unsplash.com/photo-1631168709859-6300e28409ba?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTYzMTgyMjg3NQ&ixlib=rb-1.2.1&q=80&w=1080",
    "https://images.unsplash.com/photo-1630396427043-c0fe3fb0d228?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTYzMTgyMjg3NQ&ixlib=rb-1.2.1&q=80&w=1080",
    "https://images.unsplash.com/photo-1605702098590-d552a98dc93d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTYzMTgyMjg3NQ&ixlib=rb-1.2.1&q=80&w=1080"
    ]

    for i in range (15):
        user = User(username = faker.simple_profile()['username'], firstName = faker.first_name(), lastName = faker.last_name(), email = faker.simple_profile()['mail'], password = faker.password() )
        db.session.add(user)
    db.session.commit()
# Uses a raw SQL query to TRUNCATE the users table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and RESET IDENTITY
# resets the auto incrementing primary key, CASCADE deletes any
# dependent entities
def undo_users():
    db.session.execute('TRUNCATE users RESTART IDENTITY CASCADE;')
    db.session.commit()
