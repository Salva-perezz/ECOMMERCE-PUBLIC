import { createAction, createReducer } from "@reduxjs/toolkit";

export const setLocalItems = createAction("SET_LOCAL_ITEMS");
export const addToLocalItems = createAction('ADD_TO_LOCAL_ITEMS');

export const localItemsReducer = createReducer(
  JSON.parse(localStorage.getItem("notLoggedCart")),
  {
    [setLocalItems]: (state, action) => action.payload,
    [addToLocalItems]: (state, action) => {
      let filteredState = state.filter(
        (cartItem) => cartItem.id !== action.payload.id
      );
      return [...filteredState, action.payload];
    },
    [removeFromLocalItems]: (state, action) =>
      state.filter((cartItem) => cartItem.id !== action.payload.id),
    [clearLocalItems]: (state, action) => [],
    [changeQuantityInLocalItems]: (state, action) => {
      state.map((cartItem) => {
        if (cartItem.productId !== action.payload.productId) return cartItem;
        else {
          cartItem.quantity = action.payload.quantity;
          return cartItem;
        }
      });
    },
  }
);
