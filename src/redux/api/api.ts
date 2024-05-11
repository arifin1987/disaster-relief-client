import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5000/" }),
  tagTypes: ["donation"],

  endpoints: (builder) => ({
    getDonations: builder.query({
      query: () => ({
        url: "/donations",
        method: "GET",
      }),
      providesTags: ["donation"],
    }),
    addDonations: builder.mutation({
      query: (data) => ({
        url: "/donations",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["donation"],
    }),
    updateDonations: builder.mutation({
      query: (data) => ({
        url: `/donations/${data.id}`,
        method: "PUT",
        body: data,
      }),
      invalidatesTags: ["donation"],
    }),
    deleteDonations: builder.mutation({
      query: (id) => ({
        url: `/donations/${id}`,
        method: "Delete",
      }),
      invalidatesTags: ["donation"],
    }),
  }),
});

export const {
  useGetDonationsQuery,
  useAddDonationsMutation,
  useUpdateDonationsMutation,
  useDeleteDonationsMutation,
} = baseApi;
