import { createAction, createReducer } from "@reduxjs/toolkit"

export const addToStoreCart = createAction("ADD_TO_STORE_CART")
export const removeFromStoreCart = createAction(
  "REMOVE_FROM_STORE_FAVORITES"
)
export const clearStoreCart = createAction("CLEAR_STORE_CART")
export const loadStoreCart = createAction("LOAD_STORE_CART")

export const currentCartReducer = createReducer("loading", {
  [addToStoreCart]: (state, action) => [...state, action.payload],
  [removeFromStoreCart]: (state, action) =>
    state.filter((favorite) => favorite.apiId !== action.payload.apiId),
  [clearStoreCart]: (state, action) => [],
  [loadStoreCart]: (state, action) => action.payload,
})