import { createAction, createReducer } from '@reduxjs/toolkit'

export const setTypes = createAction('SET_TYPES')

export const typesReducer = createReducer([], {
    [setTypes]: (state, action) => action.payload,
})