// App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from './LoginPage';
import SignupPage from './SignupPage';
import Forms from './Forms';
import Layout from './Layout/Layout';
import AboutUs from './Layout/AboutUs';
import Home from './Layout/Home';
import TermsOfUse from './Layout/TermsOfUs';
import Reviews from './Layout/Reviews';
import Plans from './Layout/plans';
import FAQ from './Layout/FAQ';
import MessageCenterPage from './Layout/MessageCenterPage'
import CustomerServicePage from './Layout/CustomerServicePage'

const App = () => {
  return (
    <Router>
      <Routes>
        {/* Layout as parent route with nested children */}
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} /> {/* Default home at "/" */}
          <Route path='home' element={<Home />} /> {/* Also at "/home" */}
          <Route path='about' element={<AboutUs />} /> {/* AboutUs at "/about" */}
          <Route path='reviews' element={<Reviews />} /> {/* Reviews at "/reviews" */}
          <Route path='plans' element={<Plans />} /> {/* Pricing plans at "/plans" */}
          <Route path='terms' element={<TermsOfUse />} /> {/* Terms at "/terms" */}
          <Route path='customer-service' element={<CustomerServicePage/>} /> {/* Customer Service */}
      
          <Route path='message-center' element={<MessageCenterPage />} /> {/* Message Center */}
          <Route path='faq' element={<FAQ />} /> {/* FAQ */}
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