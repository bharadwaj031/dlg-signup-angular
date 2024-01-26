import { createReducer, on } from "@ngrx/store"
import { createCustomerAction, createCustomerFailAction, createCustomerSucessAction, resetAction } from "./create-cusomter.action"
import { IResponse } from "../../interfaces/customer.interface"

export const initialState: IResponse = {
   status: '',
   message: ''
}

export const createCustomerReducer = createReducer(
   initialState,
   on(createCustomerAction, (state) => state),
   on(createCustomerSucessAction, (_state, action) => action.response),
   on(createCustomerFailAction, (_state, action) => action.response),
   on(resetAction, (_state) => initialState),
)