import { createAction, createReducer } from '@reduxjs/toolkit'

export const setLocalItems = createAction('SET_LOCAL_ITEMS');


export const localItemsReducer = createReducer(JSON.parse(localStorage.getItem('notLoggedCart')), {
    [setLocalItems]: (state, action) => action.payload,
});