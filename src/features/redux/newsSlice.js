import { createEntityAdapter, createSelector } from "@reduxjs/toolkit";
import { apiSlice } from "./../api/apiSlice";
const newsAdapter = createEntityAdapter({
  selectId: (category) => category.id,
  sortComparer: (a, b) => a.id.localeCompare(b.id),
});

const initialState = newsAdapter.getInitialState();

export const newsSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getNews: builder.query({
      query: () => "/news",
      transformResponse: (responseData) => {
        return newsAdapter.setAll(initialState, responseData);
      },
      transformErrorResponse: (responseData) => {
        console.log(responseData);
      },
      providesTags: (result, error, arg) => [{ type: "News", id: "LIST" }],
    }),
    addNews: builder.mutation({
      query: (category) => ({
        url: "/news",
        method: "POST",
        body: category,
      }),
      transformResponse: (responseData) => {
        return newsAdapter.addOne(initialState, responseData);
      },
      transformErrorResponse: (responseData) => {
        console.log(responseData);
      },
      invalidatesTags: (result, error, todo) => [
        { type: "News", id: "LIST" },
      ],
    }),
    updateNews: builder.mutation({
      query: (category) => ({
        url: `/news/${category.id}`,
        method: "PUT",
        body: category,
      }),
      transformResponse: (responseData) => {
        return newsAdapter.updateOne(initialState, responseData);
      },
      transformErrorResponse: (responseData) => {
        console.log(responseData);
      },
      invalidatesTags: (result, error, todo) => [
        { type: "News", id: "LIST" },
      ],
    }),
    deleteNews: builder.mutation({
      query: (category) => ({
        url: `/news/${category.id}`,
        method: "DELETE",
        body: category,
      }),
      transformResponse: (responseData) => {
        return newsAdapter.removeOne(initialState, responseData);
      },
      transformErrorResponse: (responseData) => {
        console.log(responseData);
      },
      invalidatesTags: (result, error, todo) => [
        { type: "News", id: "LIST" },
      ],
    }),
  }),
});

export const {
  useGetNewsQuery,
  useAddNewsMutation,
  useUpdateNewsMutation,
  useDeleteNewsMutation,
} = newsSlice;

export const selectNewsResult =
newsSlice.endpoints.getNews.select();

const selectNewsData = createSelector(
  selectNewsResult,
  (result) => result.data
);

export const {
  selectAll: selectAllNews,
  selectById: selectNewsById,
} = newsAdapter.getSelectors(
  (state) => selectNewsData(state) ?? initialState
);
