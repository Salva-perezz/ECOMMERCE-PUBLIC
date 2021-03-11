import { configureStore } from "@reduxjs/toolkit"
import logger from "redux-logger"

import { currentUserReducer } from "./currentUser"
import { currentCartReducer } from "./currentCart"
import { currentCartItemsReducer } from "./currentCartItems"

const store = configureStore({
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }).concat(logger),
  reducer: {
    currentUser: currentUserReducer,
    currentCart: currentCartReducer,
    currentCartItems: currentCartItemsReducer,
  },
})

export default store