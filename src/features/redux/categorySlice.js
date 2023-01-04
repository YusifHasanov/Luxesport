import { createEntityAdapter, createSelector } from "@reduxjs/toolkit";
import { apiSlice } from "./../api/apiSlice";
const categoryAdapter = createEntityAdapter({
  selectId: (category) => category.id,
  sortComparer: (a, b) => a.id.localeCompare(b.id),
});

const initialState = categoryAdapter.getInitialState();

export const categorySlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getCategories: builder.query({
      query: () => "/categories",
      transformResponse: (responseData) => {
        return categoryAdapter.setAll(initialState, responseData);
      },
      transformErrorResponse: (responseData) => {
        console.log(responseData);
      },
      providesTags: (result, error, arg) => [{type: 'Category', id: 'LIST'}]
    }),
    addCategory: builder.mutation({
      query: (category) => ({
        url: "/categories",
        method: "POST",
        body: category,
      }),
      transformResponse: (responseData) => {
        return categoryAdapter.addOne(initialState, responseData);
      },
      transformErrorResponse: (responseData) => {
        console.log(responseData);
      },
      invalidatesTags: (result, error, todo) => [{type: 'Category', id: 'LIST'}]
    }),
    updateCategory: builder.mutation({
      query: (category) => ({
        url: `/categories/${category.id}`,
        method: "PUT",
        body: category,
      }),
      transformResponse: (responseData) => {
        return categoryAdapter.updateOne(initialState, responseData);
      },
      transformErrorResponse: (responseData) => {
        console.log(responseData);
      },
      invalidatesTags: (result, error, todo) => [{type: 'Category', id: 'LIST'}]
    }),
    deleteCategory: builder.mutation({
      query: (category) => ({
        url: `/categories/${category.id}`,
        method: "DELETE",
        body: category,
      }),
      transformResponse: (responseData) => {
        return categoryAdapter.removeOne(initialState, responseData);
      },
      transformErrorResponse: (responseData) => {
        console.log(responseData);
      },
      invalidatesTags: (result, error, todo) => [{type: 'Category', id: 'LIST'}]
    }),
  }),
});

export const {
  useGetCategoriesQuery,
  useAdddCategoryMutation,
  useUpdateCategoryMutation,
  useDeleteCategoryMutation,
} = categorySlice;

export const selectCategoryResult = categorySlice.endpoints.getCategories.select();

const selectCategoryData = createSelector(
    selectCategoryResult,
  (result) => result.data
);

export const { selectAll: selectAllCategories, selectById: selectCategoryById } =
categoryAdapter.getSelectors(
    (state) => selectCategoryData(state) ?? initialState
  );
