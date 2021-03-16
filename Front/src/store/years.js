import { createAction, createReducer } from '@reduxjs/toolkit'

export const setYears = createAction('SET_YEARS')

export const yearsReducer = createReducer("", {
    [setYears]: (state, action) => action.payload,
})