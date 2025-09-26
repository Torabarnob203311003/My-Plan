// App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Form } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import LoginPage from './LoginPage';
import SignupPage from './SignupPage';

import Forms from './Forms';
import Layout from './Layout/Layout';

const App = () => {
  return (
    <Router>
      <Toaster position='top-right' /> {/* Add Toaster here */}
      <Routes>
        <Route path='/' element={<Layout/>} />
         <Route path='/login' element={<LoginPage/>} />
        <Route path='/signup' element={<SignupPage />} />
        <Route path='/signup/form' element={<Forms />} />
        <Route path='/Home' element={<Layout />} />
      </Routes>
    </Router>
  );
};

export default App;
