import { createAsyncThunk } from "@reduxjs/toolkit";
import request, { gql } from "graphql-request";

const apiUrl = import.meta.env.VITE_API_URL;

const getAuthorsQuery = gql`
  query getAuthors {
    getAuthors {
      name
      textDescription
      paintings
      _id
    }
  }
`;

const getAuthorQuery = gql`
  query getAuthor($input: AuthorInput) {
    getAuthor(input: $input) {
      name
      textDescription
      paintings
      _id
    }
  }
`;

export const getAuthorsThunk = createAsyncThunk(
  "Authors/getAuthors",
  async () => {
    const response = await request(apiUrl, getAuthorsQuery);
    return response.getAuthors;
  }
);

export const getAuthorThunk = createAsyncThunk(
  "Authors/getAuthor",
  async (id) => {
    const response = await request(apiUrl, getAuthorQuery, {
      input: { _id: id },
    });
    return response.getAuthor;
  }
);
