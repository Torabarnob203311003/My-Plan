// App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import LoginPage from './LoginPage';
import SignupPage from './SignupPage';
import Forms from './Forms';
import Layout from './Layout/Layout';
import AboutUs from './Layout/AboutUs';
import Home from './Layout/Home';
import TermsOfUse from './Layout/TermsOfUs';
import Reviews from './Layout/Reviews';

const App = () => {
  return (
    <Router>
      <Toaster position='top-right' />
      <Routes>
        {/* Layout as parent route with nested children */}
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} /> {/* Default home at "/" */}
          <Route path='home' element={<Home />} /> {/* Also at "/home" */}
          <Route path='about' element={<AboutUs />}
          
           /> {/* AboutUs at "/about" */}

             <Route path='reviews' element={<Reviews />} /> AboutUs at "/about"
           
           <Route path='terms' element={<TermsOfUse />} /> {/* Inside the Layout parent route */}
        </Route>
        
        {/* Standalone routes outside Layout (no navbar/footer) */}
        <Route path='/login' element={<LoginPage />} />
        <Route path='/signup' element={<SignupPage />} />
        <Route path='/signup/form' element={<Forms />} />
      </Routes>
    </Router>
  );
};

export default App;