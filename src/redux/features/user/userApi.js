import { baseApi } from "@/redux/services/API";

const userApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getProxy: builder.query({
      query: (userId) => {
        return {
          url: "getAllProxyset/" + userId,
          method: "GET",
        };
      },
      providesTags: ["User"],
    }),

    getUser: builder.query({
      query: (id) => {
        return {
          url: `search`,
          method: "GET",
          params: { searchTerm: id },
        };
      },
      providesTags: ["User"],
    }),
    getUserGrantors: builder.query({
      query: () => {
        return {
          url: `my-proxy-users/`,
          method: "GET",
        };
      },
      providesTags: ["User"],
    }),
    getUserGrantorData: builder.query({
      query: (id) => {
        return {
          url: `proxyset-call-api/${id}`,
          method: "GET",
        };
      },
      providesTags: ["User"],
    }),

    setProxy: builder.mutation({
      query: (id) => {
        return {
          url: `proxyset/${id}`,
          method: "POST",
        };
      },
      invalidatesTags: ["User"],
    }),

    blockUser: builder.mutation({
      query: (id) => {
        return {
          url: `users/block/${id}`,
          method: "DELETE",
        };
      },
      invalidatesTags: ["User"],
    }),

    getAllUsers: builder.query({
      query: (query) => {
        return {
          url: "users",
          method: "GET",
          params: query,
        };
      },
      providesTags: ["User"],
    }),

    getPlans: builder.query({
      query: () => {
        return {
          url: "packages",
          method: "GET",
        };
      },
    }),
    createCheckoutSession: builder.mutation({
      query: (id) => {
        return {
          url: `create-checkout-session/${id}`,
          method: "POST",
        };
      },
    }),

    sendMessage: builder.mutation({
      query: (body) => {
        return {
          url: `create-report`,
          method: "POST",
          body,
        };
      },
    }),


    sendReview: builder.mutation({
      query: (body) => {
        return {
          url: `create-review`,
          method: "POST",
          body,
        };
      },
    }),


    updateUser: builder.mutation({
      query: (data) => {
        return {
          url: `ProfileUpdate`,
          method: "PUT",
          body: data,
        };
      },
      invalidatesTags: ["User"],
    }),


  }),
});

export const {
  useCreateCheckoutSessionMutation,
  useGetPlansQuery,

  useSendMessageMutation,
  useSendReviewMutation,

  useGetProxyQuery,
  useGetAllUsersQuery,
  useBlockUserMutation,
  useSetProxyMutation,
  useGetUserQuery,
  useGetAdminStatsQuery,
  useGetUserGrantorsQuery,
  useGetUserGrantorDataQuery,
  useUpdateUserMutation,
} = userApi;
