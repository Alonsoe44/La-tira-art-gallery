/* eslint-disable no-param-reassign */
import { createSlice } from "@reduxjs/toolkit";
import AuthorStateInterface from "../../interfaces/AuthorsStateInterface";
import { getAuthorsThunk, getAuthorThunk } from "./authorThunk";

const initialState: AuthorStateInterface = {
  authors: [],
  isLoading: false,
  author: {
    name: "none",
    textDescription: "none",
    paintings: [],
  },
};

const authorsSlice = createSlice({
  name: "Authors",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAuthorsThunk.fulfilled, (state, action) => {
        state.authors = action.payload;
        state.isLoading = false;
      })
      .addCase(getAuthorsThunk.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getAuthorThunk.fulfilled, (state, action) => {
        state.author = action.payload;
        state.isLoading = false;
      })
      .addCase(getAuthorThunk.pending, (state) => {
        state.isLoading = true;
      });
  },
});

export default (authorsSlice as any).reducer;
