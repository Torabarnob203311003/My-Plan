// App.jsx
import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import LoginPage from "./LoginPage";
import SignupPage from "./SignupPage";
import Forms from "./Forms";

import Layout from "./Layout/Layout";
import AboutUs from "./Layout/AboutUs";
import Home from "./Layout/Home";
import TermsOfUse from "./Layout/TermsOfUs";
import Reviews from "./Layout/Reviews";
import FAQ from "./Layout/FAQ";
import MessageCenterPage from "./Layout/MessageCenterPage";
import CustomerServicePage from "./Layout/CustomerServicePage";
import PrivateRoute from "./Layout/PrivateRoute";
import AccountSummaryPage from "./Layout/AccountSummaryPage";
import GrantorSuggestionsPage from "./Layout/GrantorPage";
import SocialInfoUpdatePage from "../src/updateFroms/SocialInfoUpdatePage";
import HomeInfoUpdatePage from "../src/updateFroms/HomeInfoUpdatePage";
import FinancialUpdatePage from "../src/updateFroms/FinancialUpdatePage";
import ProfileUpdatePage from "../src/updateFroms/ProfileUpdatePage";
import MedicalUpdatePage from "../src/updateFroms/MedicalUpdatePage";
import GrantorAccount from "./Layout/GrantorAccount";
import SubscriptionPage from "./Layout/plans";
import FeedbackModal from "./Layout/Feedback";
import ForgotPasswordPage from "./Layout/ForgotPasswordPage";
import VerifyOTPPage from "./Layout/VerifyOTPPage";
import ResetPasswordPage from "./Layout/ResetPasswordPage";
import LandingPage from "./Layout/LandingPage";

const App = () => {
  return (
    <Router>
      <FeedbackModal />
      <Routes>
        <Route path="/" element={<Navigate to="/app/home" replace />} />

        {/* Public Routes */}
        <Route path="/" element={<Layout />}>
          <Route path="landing" element={<LandingPage />} />
          <Route path="login" element={<LoginPage />} />
          <Route path="signup" element={<SignupPage />} />
          <Route path="forgot-password" element={<ForgotPasswordPage />} />
          <Route path="verify-otp" element={<VerifyOTPPage />} />
          <Route path="reset-password" element={<ResetPasswordPage />} />
        </Route>

        {/* Protected signup continuation */}
        <Route element={<PrivateRoute />}>
          <Route path="signup/form" element={<Forms />} />
        </Route>

        {/* Protected update routes */}
        <Route element={<PrivateRoute />}>
          <Route path="update/social" element={<SocialInfoUpdatePage />} />
          <Route path="update/home" element={<HomeInfoUpdatePage />} />
          <Route path="update/financial" element={<FinancialUpdatePage />} />
          <Route path="update/medical" element={<MedicalUpdatePage />} />
          <Route path="update/profile" element={<ProfileUpdatePage />} />
        </Route>

        {/* Protected App Routes */}
        <Route element={<PrivateRoute />}>
          <Route path="app" element={<Layout />}>
            <Route index element={<Navigate to="home" replace />} />
            <Route path="home" element={<Home />} />
            <Route path="about" element={<AboutUs />} />
            <Route path="reviews" element={<Reviews />} />
            <Route path="plans" element={<SubscriptionPage />} />
            <Route path="terms" element={<TermsOfUse />} />
            <Route path="customer-service" element={<CustomerServicePage />} />
            <Route path="message-center" element={<MessageCenterPage />} />
            <Route path="faq" element={<FAQ />} />
            <Route path="account" element={<AccountSummaryPage />} />
            <Route path="grantor" element={<GrantorSuggestionsPage />} />
            <Route path="grantor/:id" element={<GrantorAccount />} />
          </Route>
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
