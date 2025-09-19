// App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import LoginPage from './LoginPage';
import SignupPage from './SignupPage';
import Home from './Home';

const App = () => {
  return (
    <Router>
      <Toaster position='top-right' /> {/* Add Toaster here */}
      <Routes>
        <Route path='/' element={<LoginPage />} />
        <Route path='/signup' element={<SignupPage />} />
        <Route path='/home' element={<Home />} />
      </Routes>
    </Router>
  );
};

export default App;
