import { createAction, createReducer } from '@reduxjs/toolkit'

export const setCountries = createAction('SET_COUNTRIES')

export const countriesReducer = createReducer([], {
    [setCountries]: (state, action) => action.payload,
})