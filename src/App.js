import React from 'react'
import {Routes, Route} from 'react-router-dom';
import SignIn from './components/signIn/signIn'
import './App.css';
import SignUp from './components/signUp/signUp';

function App() {
  return (
    <div className = "App">
        <Routes>
        <Route path = "/" element = {<SignIn />} />
        <Route path = "/signIn" element = {<SignIn />} />
        <Route path = "/signUp" element = {<SignUp />} />
        </Routes>      
    </div>
  );
}

export default App;
