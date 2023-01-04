import { createEntityAdapter, createSelector } from "@reduxjs/toolkit";
import { apiSlice } from "./../api/apiSlice";
const productAdapter = createEntityAdapter({
  selectId: (product) => product.id,
  sortComparer: (a, b) => a.id.localeCompare(b.id),
});

const initialState = productAdapter.getInitialState();

export const productSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: () => "/products",
      transformResponse: (responseData) => {
        return productAdapter.setAll(initialState, responseData);
      },
      transformErrorResponse: (responseData) => {
        console.log(responseData);
      },
      providesTags: (result, error, arg) => [{type: 'Product', id: 'LIST'}]
    }),
    AddProduct: builder.mutation({
      query: (product) => ({
        url: "/products",
        method: "POST",
        body: product,
      }),
      transformResponse: (responseData) => {
        return productAdapter.addOne(initialState, responseData);
      },
      transformErrorResponse: (responseData) => {
        console.log(responseData);
      },
      invalidatesTags: (result, error, todo) => [{type: 'Product', id: 'LIST'}]
    }),
    updateProduct: builder.mutation({
      query: (product) => ({
        url: `/products/${product.id}`,
        method: "PUT",
        body: product,
      }),
      transformResponse: (responseData) => {
        return productAdapter.updateOne(initialState, responseData);
      },
      transformErrorResponse: (responseData) => {
        console.log(responseData);
      },
      invalidatesTags: (result, error, todo) => [{type: 'Product', id: 'LIST'}]
    }),
    deleteProduct: builder.mutation({
      query: (product) => ({
        url: `/products/${product.id}`,
        method: "DELETE",
        body: product,
      }),
      transformResponse: (responseData) => {
        return productAdapter.removeOne(initialState, responseData);
      },
      transformErrorResponse: (responseData) => {
        console.log(responseData);
      },
      invalidatesTags: (result, error, todo) => [{type: 'Product', id: 'LIST'}]
    }),
  }),
});

export const {
  useGetProductsQuery,
  useAdddProductMutation,
  useUpdateProductMutation,
  useDeleteProductMutation,
} = productSlice;

export const selectProductResult = productSlice.endpoints.getProducts.select();

const selectProductsData = createSelector(
  selectProductResult,
  (result) => result.data
);

export const { selectAll: selectAllProducts, selectById: selectProductById } =
  productAdapter.getSelectors(
    (state) => selectProductsData(state) ?? initialState
  );
