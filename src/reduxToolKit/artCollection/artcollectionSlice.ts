/* eslint-disable no-param-reassign */
import { createSlice } from "@reduxjs/toolkit";
import ArtCollectionStateInterface from "../../interfaces/ArtCollectionStateInterface";
import {
  getArtCollectionsLandingThunk,
  getArtCollectionThunk,
  getBannerLatestCollectionThunk,
} from "./artCollectionThunk";

const initialState: ArtCollectionStateInterface = {
  artCollections: [],
  isLoading: false,
  artCollection: {
    author: "none",
    bannerImage: "none",
    title: "none",
    description: "none",
    smallDescription: "none",
    paintings: [],
  },
  artCollectionHomePage: {
    paintings: [],
    title: "none",
  },
};
const artCollectionsSlice = createSlice({
  name: "ArtCollections",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getArtCollectionsLandingThunk.fulfilled, (state, action) => {
        state.artCollections = action.payload;
        state.isLoading = false;
      })
      .addCase(getArtCollectionsLandingThunk.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getArtCollectionThunk.fulfilled, (state, action) => {
        state.artCollection = action.payload;
        state.isLoading = false;
      })
      .addCase(getArtCollectionThunk.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getBannerLatestCollectionThunk.fulfilled, (state, action) => {
        state.artCollectionHomePage = action.payload;
        state.isLoading = false;
      })
      .addCase(getBannerLatestCollectionThunk.pending, (state) => {
        state.isLoading = true;
      });
  },
});

export default (artCollectionsSlice as any).reducer;
