// App.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import LoginPage from "./LoginPage";
import SignupPage from "./SignupPage";
import Forms from "./Forms";

import Layout from "./Layout/Layout";
import AboutUs from "./Layout/AboutUs";
import Home from "./Layout/Home";
import TermsOfUse from "./Layout/TermsOfUs";
import Reviews from "./Layout/Reviews";
import Plans from "./Layout/plans";
import FAQ from "./Layout/FAQ";
import MessageCenterPage from "./Layout/MessageCenterPage";
import CustomerServicePage from "./Layout/CustomerServicePage";
import PrivateRoute from "./Layout/PrivateRoute";
import AccountSummaryPage from "./Layout/AccountSummaryPage";
import GrantorSuggestionsPage from "./Layout/GrantorPage";

const App = () => {
  return (
    <Router>
      <Routes>
        {/* Public Routes */}
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />

        {/* Protected signup continuation */}
        <Route element={<PrivateRoute />}>
          <Route path="/signup/form" element={<Forms />} />
        </Route>
        <Route element={<PrivateRoute />}>
          <Route path="/update/social" element={<SocialInfoUpdatePage />} />
        </Route>
        <Route element={<PrivateRoute />}>
          <Route path="/update/home" element={<HomeInfoUpdatePage />} />
        </Route>
        <Route element={<PrivateRoute />}>
          <Route path="/update/financial" element={<FinancialUpdatePage />} />
        </Route>
        <Route element={<PrivateRoute />}>
          <Route path="/update/medical" element={<MedicalUpdatePage />} />
        </Route>
        <Route element={<PrivateRoute />}>
          <Route path="/update/profile" element={<ProfileUpdatePage />} />
        </Route>

        {/* Layout + Protected Nested Routes */}
        <Route element={<PrivateRoute />}>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="home" element={<Home />} />
            <Route path="about" element={<AboutUs />} />
            <Route path="reviews" element={<Reviews />} />
            <Route path="plans" element={<Plans />} />
            <Route path="terms" element={<TermsOfUse />} />
            <Route path="customer-service" element={<CustomerServicePage />} />
            <Route path="message-center" element={<MessageCenterPage />} />
            <Route path="faq" element={<FAQ />} />
            <Route path="account" element={<AccountSummaryPage />} />
            <Route path="grantor" element={<GrantorSuggestionsPage />} />
          </Route>
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
