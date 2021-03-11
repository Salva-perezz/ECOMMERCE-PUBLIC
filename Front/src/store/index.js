import { configureStore } from "@reduxjs/toolkit"
import logger from "redux-logger"

import { currentUserReducer } from "./currentUser"
import { currentCartReducer } from "./currentCart"

const store = configureStore({
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }).concat(logger),
  reducer: {
    currentUser: currentUserReducer,
    currentCart: currentCartReducer,
  },
})

export default store