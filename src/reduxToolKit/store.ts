import { configureStore } from "@reduxjs/toolkit";
import artCollectionsReducer from "./artCollection/artcollectionSlice";
import authorsReducer from "./author/authorsSlice";

const store = configureStore({
  reducer: {
    artCollections: artCollectionsReducer,
    authors: authorsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
