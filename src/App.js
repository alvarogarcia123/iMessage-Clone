import { Photo } from '@material-ui/icons';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import { logout, selectUser, login } from './features/userSlice';
import { auth } from './firebase';
import Imessage from "./Imessage";
import Login from './Login';

function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    auth.onAuthStateChanged(authUser =>  {
      if (authUser) {
        dispatch(
          login({
          uid: authUser.uid,
          photo: authUser.photoURL,
          email:authUser.displayName,
          displayName: authUser.displayName,
          })
        );
      } else {
        dispatch(logout())
      }
    })
    }, [])

  return (
    <div className="app">
      {user ? <Imessage /> : <Login />}

    </div>
  );
}

export default App;
