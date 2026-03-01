import { baseApi } from "@/redux/services/API";

const authApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    signup: builder.mutation({
      query: (user) => {
        return {
          url: "registerUser",
          method: "POST",
          body: user,
        };
      },
      invalidatesTags: ["Auth"],
    }),
    login: builder.mutation({
      query: (user) => {
        return {
          url: "login",
          method: "POST",
          body: user,
        };
      },
      invalidatesTags: ["Auth"],
    }),

    forgetPassword: builder.mutation({
      query: (emailData) => {
        return {
          url: "AdminEmail",
          method: "POST",
          body: emailData,
        };
      },
      invalidatesTags: ["Auth"],
    }),
    verifyOTP: builder.mutation({
      query: (user) => {
        return {
          url: "codeverify",
          method: "POST",
          body: user,
        };
      },
      invalidatesTags: ["Auth"],
    }),
    resetPassword: builder.mutation({
      query: (updatedData) => {
        return {
          url: `forgetPassword`,
          method: "POST",
          body: updatedData,
        };
      },
      invalidatesTags: ["Auth"],
    }),
  }),
});

export const {
  useLoginMutation,
  useForgetPasswordMutation,
  useResendOTPMutation,
  useResetPasswordMutation,
  useChangePasswordMutation,
  useSignupMutation,
  useVerifyOTPMutation
} = authApi;
