import { HttpErrorResponse } from "@angular/common/http"
import { Errors } from "../constants/constants"

export const parseErrorMessages = (error: HttpErrorResponse): string => {
    if (Errors[error.status]) {
        return Errors[error.status]
    }
    return `Please Try Again Later`
}
