from app.models import Image,db
from faker import Faker

def seed_images():


    randomArr = [
            "https://media.istockphoto.com/photos/large-house-with-steep-roof-and-side-entry-three-car-garage-picture-id1272163106?b=1&k=20&m=1272163106&s=170667a&w=0&h=pTjbBRKTcnhs-oIGpuSB4TyAE5768gp0BefDXxyUNTU=",
            "https://media.istockphoto.com/photos/modern-custom-suburban-home-exterior-picture-id1255835529?b=1&k=20&m=1255835529&s=170667a&w=0&h=Z-RskiXf6fx_c0s64LAuCWhmS-cJ5Nli4p7lZtqa7R4=",
            "https://media.istockphoto.com/photos/colonial-style-house-picture-id1284097677?b=1&k=20&m=1284097677&s=170667a&w=0&h=1A7BkHG5OU4WCN7m22OOhvVmU21q4UsYVJPrS1kgcKI=",
            "https://media.istockphoto.com/photos/suburban-house-picture-id1269776313?b=1&k=20&m=1269776313&s=170667a&w=0&h=l51twHk4nPDByOemkf31YY4tRcKxLx3CGfS2K3ktWx0=",
            "https://media.istockphoto.com/photos/beautiful-new-home-with-big-front-porch-and-entry-picture-id1256023750?b=1&k=20&m=1256023750&s=170667a&w=0&h=i69IcyqD0A04NR3vqn5ZOSslf0LWU1E3lU8J7fxyQSg=",
            "https://images.unsplash.com/photo-1568605114967-8130f3a36994?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8aG91c2V8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
            "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8aG91c2V8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
            "https://images.unsplash.com/photo-1523217582562-09d0def993a6?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8aG91c2V8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
            "https://images.unsplash.com/photo-1575517111478-7f6afd0973db?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fGhvdXNlfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
            "https://images.unsplash.com/photo-1549517045-bc93de075e53?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fGhvdXNlfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
            "https://media.istockphoto.com/photos/close-up-of-small-blue-gray-mobile-home-with-a-front-and-side-porch-picture-id1297687835?b=1&k=20&m=1297687835&s=170667a&w=0&h=Kj4yvWxQxYo_fc9801IJZrHCAXa06LNsiRLjovVfoQQ=",
            "https://media.istockphoto.com/photos/close-up-of-small-blue-gray-mobile-home-with-a-front-and-side-porch-picture-id1297687835?b=1&k=20&m=1297687835&s=170667a&w=0&h=Kj4yvWxQxYo_fc9801IJZrHCAXa06LNsiRLjovVfoQQ=",
            "https://media.istockphoto.com/photos/beautiful-new-home-with-big-front-porch-and-entry-picture-id1256023753?b=1&k=20&m=1256023753&s=170667a&w=0&h=yG1-RfNWwACm6Ba54tVGWWm9rCoBKenUpOWvIjN98lg=",
            "https://media.istockphoto.com/photos/home-with-blue-siding-and-stone-faade-on-base-of-home-picture-id1272128530?b=1&k=20&m=1272128530&s=170667a&w=0&h=k9lT5-DEmkmehDb-EKRHoP1-op2DTgz4ibiWGXmj7h8=",
            "https://images.unsplash.com/photo-1472224371017-08207f84aaae?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTZ8fGhvbWV8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
            "https://images.unsplash.com/photo-1549517045-bc93de075e53?ixid=MnwxMjA3fDB8MHxzZWFyY2h8ODl8fGhvbWV8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
            "https://images.unsplash.com/photo-1605146769289-440113cc3d00?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTIxfHxob21lfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
            "https://images.unsplash.com/photo-1558036117-15d82a90b9b1?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTMxfHxob21lfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",

        ]
    for i in range (15):
        image = Image(spotId = i + 1, imageUrl = randomArr[i])
        db.session.add(image)
    db.session.commit()

def undo_images():
    db.session.execute('TRUNCATE images RESTART IDENTITY CASCADE;')
    db.session.commit() 
