import { HttpErrorResponse } from "@angular/common/http"
import { parseErrorMessages } from "./parseErrorMessages.utils"

describe('ParseErrorMessages', () => {

    it('Test parseErrorMessages utils', () => {
        const error = {status: 400} as HttpErrorResponse
        expect(parseErrorMessages(error)).toEqual('Bad Request')
    })
    it('Test parseErrorMessages utils else case', () => {
        const error = {status: 406} as HttpErrorResponse
        expect(parseErrorMessages(error)).toEqual('Please Try Again Later')
    })
})