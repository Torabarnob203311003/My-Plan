import { baseApi } from "@/redux/services/API";

const formsApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    createFinancialData: builder.mutation({
      query: (financeData) => {
        return {
          url: "/CreateFinancial",
          method: "POST",
          body: financeData,
        };
      },
      invalidatesTags: ["User"],
    }),
    updateFinancialData: builder.mutation({
      query: (financeData) => {
        return {
          url: "/UpdateFinancial",
          method: "POST",
          body: financeData,
        };
      },
      invalidatesTags: ["User"],
    }),
    getFinancial: builder.query({
      query: () => {
        return {
          url: "/GetFinancialData",
          method: "GET",
        };
      },
      providesTags: ["User"],
    }),

    createHomeData: builder.mutation({
      query: (homeInfo) => {
        return {
          url: "/CreateHomeAuto",
          method: "POST",
          body: homeInfo,
        };
      },
      invalidatesTags: ["User"],
    }),
    updateHomeData: builder.mutation({
      query: (homeData) => {
        return {
          url: "/UpdateHomeAuto",
          method: "POST",
          body: homeData,
        };
      },
      invalidatesTags: ["User"],
    }),
    getHome: builder.query({
      query: () => {
        return {
          url: "/GetHomeautoData",
          method: "GET",
        };
      },
      providesTags: ["User"],
    }),

    createMedicalData: builder.mutation({
      query: (medicalInfo) => {
        return {
          url: "/CreateMedical",
          method: "POST",
          body: medicalInfo,
        };
      },
      invalidatesTags: ["User"],
    }),
    updateMedicalData: builder.mutation({
      query: (medicalData) => {
        return {
          url: "/UpdateMedical",
          method: "POST",
          body: medicalData,
        };
      },
      invalidatesTags: ["User"],
    }),
    getMedical: builder.query({
      query: () => {
        return {
          url: "/GetMedicalData",
          method: "GET",
        };
      },
      providesTags: ["User"],
    }),

    createSocialData: builder.mutation({
      query: (socialInfo) => {
        return {
          url: "/CreateSocialInfo",
          method: "POST",
          body: socialInfo,
        };
      },
      invalidatesTags: ["User"],
    }),
    updateSocialData: builder.mutation({
      query: (socialData) => {
        return {
          url: "/UpdateSocialInfo",
          method: "POST",
          body: socialData,
        };
      },
      invalidatesTags: ["User"],
    }),
    getSocial: builder.query({
      query: () => {
        return {
          url: "/GetSocialData",
          method: "GET",
        };
      },
      providesTags: ["User"],
    }),

    createProfileData: builder.mutation({
      query: (profile) => {
        return {
          url: "/CreateFinancial",
          method: "POST",
          body: profile,
        };
      },
      invalidatesTags: ["User"],
    }),
    updateProfileData: builder.mutation({
      query: (profileData) => {
        return {
          url: "/ProfileUpdate",
          method: "PUT",
          body: profileData,
        };
      },
      invalidatesTags: ["User"],
    }),
    getProfile: builder.query({
      query: () => {
        return {
          url: "/ProfileDetails",
          method: "GET",
        };
      },
      providesTags: ["User"],
    }),
    getAll: builder.query({
      query: () => {
        return {
          url: `/alluser-data`,
          method: "GET",
        };
      },
      providesTags: ["User"],
    }),
  }),
});

export const {
  useCreateFinancialDataMutation,
  useCreateProfileDataMutation,
  useCreateSocialDataMutation,
  useCreateHomeDataMutation,
  useCreateMedicalDataMutation,
  useUpdateFinancialDataMutation,
  useGetFinancialQuery,
  useUpdateMedicalDataMutation,
  useUpdateHomeDataMutation,
  useGetHomeQuery,
  useGetSocialQuery,
  useUpdateSocialDataMutation,
  useGetProfileQuery,
  useUpdateProfileDataMutation,
  useGetMedicalQuery,
  useGetAllQuery,
} = formsApi;
