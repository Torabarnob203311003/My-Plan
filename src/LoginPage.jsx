/* eslint-disable no-unused-vars */
// LoginPage.jsx
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { jwtDecode } from "jwt-decode";
import { useDispatch } from "react-redux";
import { useLoginMutation } from "./redux/features/auth/authApi";
import { storToken, storUserData } from "./redux/features/auth/authSlice";
import { toast } from "sonner";

// Redux

const LoginPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // RTK Query login API
  const [loginUser, { isLoading }] = useLoginMutation();

  // React Hook Form
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  // Handle API Login
  const onSubmit = async (data) => {
    try {
      const res = await loginUser(data);
      console.log(res);
      // If login failed
      if (res?.error && !res?.error?.data?.success) {
        return toast.error(res.error.data.message);
      }

      // If login successful
      if (res.data.success) {
        toast.success(res.data.message);

        reset({ email: "", password: "" });

        // Store token
        localStorage.setItem("accessToken", res.data.data.token);

        // Decode
        const decoded = jwtDecode(res.data.data.token);
        const { exp, iat, ...rest } = decoded;
        // Check admin role

        dispatch(storToken(res.data.data.token));
        dispatch(storUserData(rest));

        navigate("/");
      }
    } catch (err) {
      toast.error("Login Failed");
    }
  };

  return (
    <div className="min-h-screen flex flex-col justify-between items-center bg-gray-100">
      {/* Top wave */}
      <div className="w-full h-32 rounded-b-[50%_30%] bg-gradient-to-b from-[rgba(62,150,238,0.8918)] to-[rgba(39,99,159,0.98)]"></div>

      {/* Login Form */}
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
            type="password"
            placeholder="Password"
            {...register("password", { required: "Password is required" })}
            className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2E6AA7]"
          />
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
            {isLoading ? "Logging in..." : "Login"}
          </button>
        </form>

        <p className="mt-4 text-sm">
          Don’t have an account?{" "}
          <Link to="/signup" className="text-[#2E6AA7] hover:underline">
            Sign up here
          </Link>
        </p>
      </div>

      {/* Bottom wave */}
      <div className="w-full h-32 rounded-t-[50%_30%] bg-gradient-to-t from-[rgba(39,99,159,0.98)] to-[rgba(62,150,238,0.8918)]"></div>
    </div>
  );
};

export default LoginPage;
