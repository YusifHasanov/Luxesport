import { createEntityAdapter, createSelector } from "@reduxjs/toolkit";
import { apiSlice } from "./../api/apiSlice";
const sessionAdapter = createEntityAdapter({
  selectId: (product) => product.id,
  sortComparer: (a, b) => a.id.localeCompare(b.id),
});

const initialState = sessionAdapter.getInitialState();

export const sessionSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getSession: builder.query({
      query: () => "/session",
      transformResponse: (responseData) => {
        return sessionAdapter.setAll(initialState, responseData);
      },
      transformErrorResponse: (responseData) => {
        console.log(responseData);
      },
      providesTags: (result, error, arg) => [{type: 'Session', id: 'LIST'}]
    }),
    getSessionByUserId: builder.query({
      query: id => `/session/${id}`,
      transformResponse: (responseData) => sessionAdapter.setOne(initialState, responseData),
      providesTags: (result, error, arg) => [
          ...result.ids.map(id => ({ type: 'Post', id }))
      ]
  }),
    AddSession: builder.mutation({
      query: (product) => ({
        url: "/session",
        method: "POST",
        body: product,
      }),
      transformResponse: (responseData) => {
        return sessionAdapter.addOne(initialState, responseData);
      },
      transformErrorResponse: (responseData) => {
        console.log(responseData);
      },
      invalidatesTags: (result, error, todo) => [{type: 'Session', id: 'LIST'}]
    }),
    updateSession: builder.mutation({
      query: (product) => ({
        url: `/session/${product.id}`,
        method: "PUT",
        body: product,
      }),
      transformResponse: (responseData) => {
        return sessionAdapter.updateOne(initialState, responseData);
      },
      transformErrorResponse: (responseData) => {
        console.log(responseData);
      },
      invalidatesTags: (result, error, todo) => [{type: 'Session', id: 'LIST'}]
    }),
    deleteSession: builder.mutation({
      query: (product) => ({
        url: `/session/${product.id}`,
        method: "DELETE",
        body: product,
      }),
      transformResponse: (responseData) => {
        return sessionAdapter.removeOne(initialState, responseData);
      },
      transformErrorResponse: (responseData) => {
        console.log(responseData);
      },
      invalidatesTags: (result, error, todo) => [{type: 'Session', id: 'LIST'}]
    }),
  }),
});

export const {
  useGetSessionQuery,
  useGetSessionByUserIdQuery,
  useAdddSessionMutation,
  useUpdateSessionMutation,
  useDeleteSessionMutation,
} = sessionSlice;

export const selectCartResult = sessionSlice.endpoints.getSession.select();

const selectCartData = createSelector(
    selectCartResult,
  (result) => result.data
);

export const { selectAll: selectAllSession, selectById: selectSessionById } =
sessionAdapter.getSelectors(
    (state) => selectCartData(state) ?? initialState
  );
