import { createAction, createReducer } from '@reduxjs/toolkit'

export const toggleRefresh = createAction('TOGGLE_REFRESH');


export const refreshReducer = createReducer(true, {
    [toggleRefresh]: (state, action) => !state,
});