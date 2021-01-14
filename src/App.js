import React, { Component } from 'react';
// import './App.css';
// import LoginButton from './components/loginButton';
// import Login from './components/loginPage';
// import LogoutButton from './components/logoutButton';
// import Profile from './components/profile';

// import './App.css';
import {BrowserRouter} from 'react-router-dom';
import Routes from './components/Routes';

function App() {
  return (  
    <BrowserRouter>
       <Routes />
    </BrowserRouter>
  );
}

export default App;

