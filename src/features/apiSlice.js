import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const commentsApi = createApi({
  reducerPath: "commentsApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://jsonplaceholder.typicode.com/" }),
  endpoints: (builder) => ({
    getAllComments: builder.query({
      query: () => "comments",
    }),
  }),
});

export const { useGetAllCommentsQuery } = commentsApi;
