import { configureStore } from "@reduxjs/toolkit";
import siteSlice from "../features/siteSlice";

const storeClone = configureStore({
  reducer: siteSlice,
});

export default storeClone;
