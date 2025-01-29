// src/redux/store.js
import { configureStore } from "@reduxjs/toolkit";
import candidateReducer from "./CandidateSlice"; // Make sure the path is correct

const store = configureStore({
  reducer: {
    candidate: candidateReducer,
  },
});

export default store;
