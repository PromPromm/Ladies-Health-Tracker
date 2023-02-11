import React from 'react'
import {Routes, Route} from 'react-router-dom';
import './App.css';
import SignIn from './components/signIn/signIn'
import SignUp from './components/signUp/signUp';
import Home from './pages/Home/home'

function App() {
  return (
    <div className = "App">
        <Routes>
          <Route path = "/" element = {<Home />} />
          <Route path = "/signIn" element = {<SignIn />} />
          <Route path = "/signUp" element = {<SignUp />} />
        </Routes>      
    </div>
  );
}

export default App;
