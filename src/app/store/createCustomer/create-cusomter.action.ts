import { createAction, props } from "@ngrx/store";
import { ICustomer, IResponse } from "../../interfaces/customer.interface";

const CREATE_CUSTOMER = 'createCustomer'
const CREATE_CUSTOMER_SUCESS = 'createCustomerSuccess'
const CREATE_CUSTOMER_FAIL = 'createCustomerFail'
const RESET = 'reset'

export const createCustomerAction = createAction(CREATE_CUSTOMER, props<{ customer: ICustomer }>())
export const createCustomerSucessAction = createAction(CREATE_CUSTOMER_SUCESS, props<{ response: IResponse }>())
export const createCustomerFailAction = createAction(CREATE_CUSTOMER_FAIL, props<{ response: IResponse }>())
export const resetAction = createAction(RESET)

export type CreateCustomerAction =
  | typeof createCustomerAction
  | typeof createCustomerSucessAction
  | typeof createCustomerFailAction
  | typeof resetAction