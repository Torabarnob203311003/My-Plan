/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { jwtDecode } from "jwt-decode";
import { useDispatch } from "react-redux";
import { toast } from "sonner";

// API
import { useSignupMutation } from "@/redux/features/auth/authApi";

// Redux
import { storToken, storUserData } from "@/redux/features/auth/authSlice";
import { Eye, EyeClosed } from "lucide-react";

const SignupPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // RTK Query Signup API
  const [signupUser, { isLoading }] = useSignupMutation();

  const [showPassword, setShowPassword] = useState(false);

  // React Hook Form
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  // Submit Handler
  const onSubmit = async (data) => {
    try {
      const res = await signupUser(data);

      // Signup failed
      if (res?.error && !res?.error?.data?.success) {
        return toast.error(res.error.data.message);
      }
      console.log(res.data);
      if (res.data.success) {
        // Store token
        localStorage.setItem("accessToken", res.data.data.token);

        // Decode
        const decoded = jwtDecode(res.data.data.token);
        const { exp, iat, ...rest } = decoded;

        // Check admin role
        console.log(res);
        dispatch(storToken(res.data.data.token));
        dispatch(storUserData(rest));
        reset({ email: "", phoneNumber: "", password: "" });
        toast.success(res.data.message);
        navigate("/signup/form");
      }
      // Signup success
    } catch (err) {
      console.log(err);
      toast.error("Signup Failed");
    }
  };

  return (
    <div className="min-h-screen flex flex-col justify-between items-center bg-gray-100">
      {/* Top wave */}
      <div className="w-full h-32 rounded-b-[50%_30%] bg-gradient-to-b from-[rgba(62,150,238,0.8918)] to-[rgba(39,99,159,0.98)]"></div>

      {/* Signup Form */}
      <div className="bg-white shadow-lg rounded-xl p-8 w-96 max-w-[90%] text-center">
        <h1 className="text-3xl font-bold text-blue-600 mb-6">Planeer</h1>

        <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
          <input
            type="email"
            placeholder="Email"
            {...register("email", { required: "Email is required" })}
            className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2E6AA7]"
          />
          {errors.email && (
            <p className="text-red-500 text-sm text-left">
              {errors.email.message}
            </p>
          )}

          <input
            type="tel"
            placeholder="Phone"
            {...register("phoneNumber", {
              required: "Phone number is required",
            })}
            className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2E6AA7]"
          />
          {errors.phoneNumber && (
            <p className="text-red-500 text-sm text-left">
              {errors.phoneNumber.message}
            </p>
          )}

          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              {...register("password", { required: "Password is required" })}
              className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2E6AA7]"
            />
            <button
              type="button"
              onClick={() => setShowPassword((prev) => !prev)}
              className="absolute right-2 top-1/2 -translate-y-1/2 text-sm text-gray-600 hover:text-gray-900 focus:outline-none"
              aria-label={showPassword ? "Hide password" : "Show password"}
            >
              {!showPassword ? <Eye></Eye> : <EyeClosed></EyeClosed>}
            </button>
          </div>
          {errors.password && (
            <p className="text-red-500 text-sm text-left">
              {errors.password.message}
            </p>
          )}

          <button
            type="submit"
            disabled={isLoading}
            className="w-full bg-[#2E6AA7] text-white py-3 rounded-lg hover:opacity-90 transition disabled:opacity-50"
          >
            {isLoading ? "Signing up..." : "Signup"}
          </button>
        </form>

        <p className="mt-4 text-sm">
          Already a Member?{" "}
          <Link to="/login" className="text-[#2E6AA7] hover:underline">
            Login here
          </Link>
        </p>
      </div>

      {/* Bottom wave */}
      <div className="w-full h-32 rounded-t-[50%_30%] bg-gradient-to-t from-[rgba(39,99,159,0.98)] to-[rgba(62,150,238,0.8918)]"></div>
    </div>
  );
};

export default SignupPage;
