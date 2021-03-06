import React, { useState, useEffect } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { useDispatch , useSelector} from 'react-redux';
// import LoginForm from './components/auth/LoginForm';
// import SignUpForm from './components/auth/SignUpForm';
import NavBar from './components/NavBar';
import ProtectedRoute from './components/auth/ProtectedRoute';
import UsersList from './components/UsersList';
import User from './components/User';
import { authenticate } from './store/session';
import Spot from './components/Spot';
import CreateSpot from './components/NewSpot';
import SingleSpot from './components/SingleSpot';
import Home from './components/Home';
function App() {
  const [loaded, setLoaded] = useState(false);
  const dispatch = useDispatch();
  const currentUser = useSelector(state => state.session.user)
  
  useEffect(() => {
    (async() => {
      await dispatch(authenticate());
      setLoaded(true);
    })();
  }, [dispatch]);

  if (!loaded) {
    return null;
  }

  return (
    <BrowserRouter>
      {/* <NavBar /> */}
        <NavBar userId={currentUser?.id}/>
    <div className='page-container'>
      <Switch>
        {/* <Route path='/login' exact={true}>
        <NavBar userId={currentUser?.id}/>

          <LoginForm />
        </Route> */}
        {/* <Route path='/sign-up' exact={true}>
        <NavBar userId={currentUser?.id}/>
          <SignUpForm />

        </Route> */}
        <ProtectedRoute path='/users' exact={true} >

          <UsersList/>
        </ProtectedRoute>
        <ProtectedRoute path='/users/:userId' exact={true} >
        {/* <NavBar userId={currentUser?.id}/> */}

          <User />
        </ProtectedRoute>
        <Route path='/' exact={true} >
        {/* <NavBar userId={currentUser?.id}/> */}
          
          <Home />
        </Route>
        <ProtectedRoute path='/spots' exact={true}>
          {/* <NavBar userId={currentUser?.id}/> */}
          <Spot />
        </ProtectedRoute>
        <ProtectedRoute path='/spots/add' exact={true}>
          {/* <NavBar userId={currentUser?.id}/> */}
          <CreateSpot />
        </ProtectedRoute>
        <ProtectedRoute path='/spots/:spotId' exact={true}>
        {/* <NavBar userId={currentUser?.id}/> */}
          <SingleSpot />
        </ProtectedRoute>
        <ProtectedRoute path='/spots/:spotId/reviews' exact={true}>
        {/* <NavBar userId={currentUser?.id}/> */}
          <SingleSpot />
        </ProtectedRoute>
      </Switch>
    </div>
    </BrowserRouter>
  );
}

export default App;
