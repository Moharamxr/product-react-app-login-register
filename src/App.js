import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import Navbar from "./Component/nav-bar/nav";
import Card from "./Component/cards/cards";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; 
import Login from './Component/Auth/login/Login'
import Register from './Component/Auth/register/Register';
const App = () => {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Card />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
