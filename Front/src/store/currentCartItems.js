import { createAction, createReducer } from "@reduxjs/toolkit"

export const addToStoreCart = createAction("ADD_TO_STORE_CART")
export const removeFromStoreCart = createAction(
  "REMOVE_FROM_STORE_FAVORITES"
)
export const clearStoreCart = createAction("CLEAR_STORE_CART")

export const currentCartItemsReducer = createReducer([], {
  [addToStoreCart]: (state, action) => [...state, action.payload],
  [removeFromStoreCart]: (state, action) =>
    state.filter((favorite) => favorite.apiId !== action.payload.apiId),
  [clearStoreCart]: (state, action) => [],
})