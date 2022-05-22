import { createAsyncThunk } from "@reduxjs/toolkit";
import request, { gql } from "graphql-request";

const apiUrl = import.meta.env.VITE_API_URL;

const getArtCollectionsLandingQuery = gql`
  query getArtCollections {
    getArtCollections {
      title
      author
      smallDescription
      bannerImage
      _id
    }
  }
`;

const getArtCollectionQuery = gql`
query getArtCollection($input: ArtCollectionInput){
  getArtCollection(input: $input){
    _id: $input._id
  }
}`;

const getLatestArtCollectionQuery = gql`
  query getLatestArtCollection {
    getLatestArtCollection {
      paintings {
        ... on Painting {
          imageUrl
        }
      }
      title
    }
  }
`;

export const getBannerLatestCollectionThunk = createAsyncThunk(
  "ArtCollection/getLatestArtCollection",
  async () => {
    const response = await request(apiUrl, getLatestArtCollectionQuery);
    return response.getLatestArtCollection;
  }
);

export const getArtCollectionsLandingThunk = createAsyncThunk(
  "ArtCollection/getArtCollections",
  async () => {
    const artCollections = await request(apiUrl, getArtCollectionsLandingQuery);
    return artCollections.getArtCollections;
  }
);

export const getArtCollectionThunk = createAsyncThunk(
  "ArtCollection/getArtCollection",
  async (artCollectionInput: any) => {
    const response = await request(apiUrl, getArtCollectionQuery, {
      input: { _id: artCollectionInput._id },
    });
    return response.getArtCollection;
  }
);
