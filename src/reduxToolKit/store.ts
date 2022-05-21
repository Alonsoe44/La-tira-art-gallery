import { configureStore } from "@reduxjs/toolkit";
import artCollectionsReducer from "./artCollection/artcollectionSlice";

const store = configureStore({
  reducer: {
    artCollections: artCollectionsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
