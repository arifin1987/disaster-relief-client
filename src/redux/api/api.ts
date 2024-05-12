import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://disaster-relief-server-navy.vercel.app/",
  }),
  tagTypes: ["donations"],

  endpoints: (builder) => ({
    getDonations: builder.query({
      query: () => ({
        url: "/donations",
        method: "GET",
      }),
      providesTags: ["donations"],
    }),
    addDonations: builder.mutation({
      query: (data) => ({
        url: "/donations",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["donations"],
    }),
    updateDonations: builder.mutation({
      query: (data) => ({
        url: `/donations/${data.id}`,
        method: "PUT",
        body: data,
      }),
      invalidatesTags: ["donations"],
    }),
    deleteDonations: builder.mutation({
      query: (id) => ({
        url: `/donations/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["donations"],
    }),
  }),
});

export const {
  useGetDonationsQuery,
  useAddDonationsMutation,
  useUpdateDonationsMutation,
  useDeleteDonationsMutation,
} = baseApi;
