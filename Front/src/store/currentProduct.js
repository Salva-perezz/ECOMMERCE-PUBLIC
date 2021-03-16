import { createAction, createReducer } from '@reduxjs/toolkit'

export const setCurrentProduct = createAction('SET_CURRENT_PRODUCT')

export const currentProductReducer = createReducer({}, {
    [setCurrentProduct]: (state, action) => action.payload,
})