import { createReducer, on } from "@ngrx/store"
import { SpinnerState } from "./spinner.model"
import { startSpinner, stopSpinner } from "./spinner.action"

const inititalState: SpinnerState ={
    isLoading: false
}

export const spinnerReducer = createReducer(
    inititalState,
    on(startSpinner, state => ({...state, isLoading: true})),
    on(stopSpinner, state => ({...state, isLoading: false}))
    )