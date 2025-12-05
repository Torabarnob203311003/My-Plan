import { baseApi } from "@/redux/services/API";

const authApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    createFinancialData: builder.mutation({
      query: (financeData) => {
        return {
          url: "/CreateFinancial",
          method: "POST",
          body: financeData,
        };
      },
      invalidatesTags: ["getUser"],
    }),
    createHomeData: builder.mutation({
      query: (info) => {
        return {
          url: "/CreateFinancial",
          method: "POST",
          body: info,
        };
      },
      invalidatesTags: ["getUser"],
    }),
    createMedicalData: builder.mutation({
      query: (medicalInfo) => {
        return {
          url: "/CreateFinancial",
          method: "POST",
          body: medicalInfo,
        };
      },
      invalidatesTags: ["getUser"],
    }),
    createSocialData: builder.mutation({
      query: (socialInfo) => {
        return {
          url: "/CreateFinancial",
          method: "POST",
          body: socialInfo,
        };
      },
      invalidatesTags: ["getUser"],
    }),
    createProfileData: builder.mutation({
      query: (profile) => {
        return {
          url: "/CreateFinancial",
          method: "POST",
          body: profile,
        };
      },
      invalidatesTags: ["getUser"],
    }),
  }),
});

export const {useCreateFinancialDataMutation,useCreateProfileDataMutation,useCreateSocialDataMutation ,useCreateHomeDataMutation,useCreateMedicalDataMutation} = authApi;
