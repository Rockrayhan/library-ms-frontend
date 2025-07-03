import type { IBook } from "@/types";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://assignment-3-library.vercel.app/api" }),
  tagTypes: ["book", "borrow"],
  endpoints: (builder) => ({

    // get all books
    getBooks: builder.query<{ data: IBook[] }, void>({
      query: () => "/books",
      providesTags: ["book"],
    }),

    // get single book
    getBookById: builder.query<{ data: IBook }, string>({
      query: (id) => `/books/${id}`,
    }),

    // POST book
    createBook: builder.mutation({
      query: (bookData) => ({
        url: "/books",
        method: "POST",
        body: bookData,
      }),
      invalidatesTags: ["book"],
    }),

    // update book
    updateBook: builder.mutation({
      query: ({ id, data }) => ({
        url: `/books/${id}`,
        method: "PATCH",
        body: data,
      }),
      invalidatesTags: ["book"],
    }),

    // delete book
    deleteBook: builder.mutation({
      query: (id) => ({
        url: `/books/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["book"],
    }),

    // borrow single book
    borrowBook: builder.mutation({
      query: (borrowData) => ({
        url: "/borrow",
        method: "POST",
        body: borrowData, // should include { book, quantity, dueDate }
      }),
      invalidatesTags: ["book"],
    }),

getBorrowedBooksSummary: builder.query({
  query: () => "/borrow",
  providesTags: ["borrow"],
}),


    
  }),
});

export const {
  useGetBooksQuery,
  useCreateBookMutation,
  useUpdateBookMutation,
  useDeleteBookMutation,
  useGetBookByIdQuery,
  useBorrowBookMutation,
  useGetBorrowedBooksSummaryQuery,
} = baseApi;
