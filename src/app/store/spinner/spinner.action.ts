import { createAction, props } from "@ngrx/store";

export const startSpinner = createAction('[Spinner] Start Spinner');
export const stopSpinner = createAction('[Spinner] Stop Spinner');