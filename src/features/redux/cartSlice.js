import { createEntityAdapter, createSelector } from "@reduxjs/toolkit";
import { apiSlice } from "./../api/apiSlice";
const cartAdapter = createEntityAdapter({
  selectId: (product) => product.id,
  sortComparer: (a, b) => a.id.localeCompare(b.id),
});

const initialState = cartAdapter.getInitialState();

export const cartSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getCart: builder.query({
      query: () => "/cart",
      transformResponse: (responseData) => {
        return cartAdapter.setAll(initialState, responseData);
      },
      transformErrorResponse: (responseData) => {
        console.log(responseData);
      },
      providesTags: (result, error, arg) => [{type: 'Cart', id: 'LIST'}]
    }),
    AddCart: builder.mutation({
      query: (product) => ({
        url: "/cart",
        method: "POST",
        body: product,
      }),
      transformResponse: (responseData) => {
        return cartAdapter.addOne(initialState, responseData);
      },
      transformErrorResponse: (responseData) => {
        console.log(responseData);
      },
      invalidatesTags: (result, error, todo) => [{type: 'Cart', id: 'LIST'}]
    }),
    updateCart: builder.mutation({
      query: (product) => ({
        url: `/cart/${product.id}`,
        method: "PUT",
        body: product,
      }),
      transformResponse: (responseData) => {
        return cartAdapter.updateOne(initialState, responseData);
      },
      transformErrorResponse: (responseData) => {
        console.log(responseData);
      },
      invalidatesTags: (result, error, todo) => [{type: 'Cart', id: 'LIST'}]
    }),
    deleteCart: builder.mutation({
      query: (product) => ({
        url: `/cart/${product.id}`,
        method: "DELETE",
        body: product,
      }),
      transformResponse: (responseData) => {
        return cartAdapter.removeOne(initialState, responseData);
      },
      transformErrorResponse: (responseData) => {
        console.log(responseData);
      },
      invalidatesTags: (result, error, todo) => [{type: 'Cart', id: 'LIST'}]
    }),
  }),
});

export const {
  useGetCartQuery,
  useAdddCartMutation,
  useUpdateCartMutation,
  useDeleteCartMutation,
} = cartSlice;

export const selectCartResult = cartSlice.endpoints.getCart.select();

const selectCartData = createSelector(
    selectCartResult,
  (result) => result.data
);

export const { selectAll: selectAllCart, selectById: selectCartById } =
cartAdapter.getSelectors(
    (state) => selectCartData(state) ?? initialState
  );
