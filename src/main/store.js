import { configureStore } from "@reduxjs/toolkit";
import reducer from "./Reducer";

export const store = configureStore({
  reducer: {
    main: reducer,
  },
});
