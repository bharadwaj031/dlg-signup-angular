/**
 * @description This is global constants file to maintain all Magic Strings
 */

export const API = {
    SIGNUP: '93545520-0b7f-4dc2-ae19-02582d1ad2a8'
}

export const SPINNER_THEME = {
    color: 'accent',
    mode: 'indeterminate'
}

export const VALIDATORS = {
    REQUIRED : 'required',
    EMAIL: 'email',
    MIN_LENGTH: 'minlength',
    MAX_LENGHT: 'maxlength',
    PATTERN: 'pattern'
}

export const Errors: Record<number, string> = {
    400: 'Bad Request',
    401: 'Unauthorised',
    403: 'Forbidden',
    404: 'Not Found',
    500: 'Internal Server Error',
  }

export const SUBMIT = 'submit'
export const CUSTOMER = 'customer'