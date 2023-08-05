import React from 'react';
import Login from './pages/loginSignup/Login';
import Signup from './pages/loginSignup/Signup';
import "bootstrap/dist/css/bootstrap.min.css"
import "fontawesome/"
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Accueil from './pages/accueil/Accueil';
import Hotel from './pages/hotel/Hotel'
import Chambres from './pages/chambres/Chambres'
import Reservation from './pages/resevation/Reservation';
import Payment from './pages/payment/Payment'

const App = () => {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Accueil/>}/>
        <Route path="/signin" element={<Login/>}/>
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/hotels" element={<Hotel/>}/>
        <Route path="/chambre" element={<Chambres/>}/>
        <Route path="/reservation" element={<Reservation/>}/>
        <Route path="/payment" element={<Payment/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;