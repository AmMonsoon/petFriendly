# PetFriendly
PetFriendly is way for users to find locations where they can bring their furry companions.
Users can sign up and express thoughts/interests on locations by leaving a review.
The PetFriendly live link can be found here: <a href='https://petfriendlyy.herokuapp.com/'>PetFriendly</a> !!!

## Technologies
* <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"><img src="https://img.shields.io/badge/-JavaScript-F7DF1E?logo=JavaScript&logoColor=333333" /></a>
* <a href="https://www.python.org/psf/"><img src="	https://img.shields.io/badge/Python-3776AB?style=for-the-badge&logo=python&logoColor=white" /></a>
* <a href="https://www.postgresql.org/"><img src="https://img.shields.io/badge/-PostgreSQL-336791?logo=PostgreSQL" /></a>
* <a href="https://reactjs.org/"><img src="https://img.shields.io/badge/react-%2320232a.svg?style=flat&logo=react&logoColor=%2361DAFB"></a>
* <a href="https://redux.js.org/"><img src="https://img.shields.io/badge/redux-%23593d88.svg?style=flat&logo=redux&logoColor=white"></a>
* <a href="https://developer.mozilla.org/en-US/docs/Web/CSS"><img src="https://img.shields.io/badge/-CSS3-1572B6?logo=CSS3" /></a>
* <a href="https://flask.palletsprojects.com/en/2.0.x/"><img src="https://img.shields.io/badge/Flask-000000?style=for-the-badge&logo=flask&logoColor=white" /></a>
## Features 
### Splash Page
![Splash Page](react-app/src/images/splashpage.jpg)

### Sign-up
![Sign Up](react-app/src/images/signup.jpg)

### Login
![Login](react-app/src/images/login.jpg)

### Spots
![Spots](react-app/src/images/spots.jpg)

### Post a Spot
![Post Spot](react-app/src/images/addspot.jpg)

### Edit a Spot
![Edit Spot](react-app/src/images/editspot.jpg)

### Delete a Spot
![Delete Spot](react-app/src/images/deletespot.jpg)

### Reviews
![Reviews](react-app/src/images/reviews.jpg)

### Post a Review
![PostReview](react-app/src/images/postreview.jpg)

### Edit a Review
![Edit Review](react-app/src/images/editreview.jpg)

### Delete a Review
![Delete Review](react-app/src/images/deletereview.jpg)


## Installation
To build/run project locally, please follow these steps:

1. Clone this repository
```javascript
git clone https://github.com/AmMonsoon/petFriendly.git
 ```

2. Install dependencies for `/app` and `/react-app`
for `/app`
```bash
pipenv install --dev -r dev-requirements.txt && pipenv install -r requirements.txt
```

for `/react-app`
```javascript
npm install
```


3. In the root directory create a `.env` based on `.env.example` with proper settings 
4. Setup your PostgresSQL user , password , database
5. Enable your virtual environment 
```python
pipenv shell
```

6. In your virtual environment, run your migrations and seeds 
```python
flask db upgrade
flask seed all
```

7. To start your backend make sure your in your virtual environment or run the command
```python 
pipenv run flask run
```


