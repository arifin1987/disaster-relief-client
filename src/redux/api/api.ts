import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://disaster-relief-version-2.vercel.app/",
  }),
  tagTypes: ["donate"],

  endpoints: (builder) => ({
    getDonations: builder.query({
      query: () => ({
        url: "/donations",
        method: "GET",
      }),
      providesTags: ["donate"],
    }),
    addDonations: builder.mutation({
      query: (data) => ({
        url: "/donations",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["donate"],
    }),
    updateDonations: builder.mutation({
      query: (options) => ({
        url: `/donations/${options.id}`,
        method: "PUT",
        body: options.data,
      }),
      invalidatesTags: ["donate"],
    }),
    deleteDonations: builder.mutation({
      query: (id) => ({
        url: `/donations/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["donate"],
    }),
  }),
});

export const {
  useGetDonationsQuery,
  useAddDonationsMutation,
  useUpdateDonationsMutation,
  useDeleteDonationsMutation,
} = baseApi;
