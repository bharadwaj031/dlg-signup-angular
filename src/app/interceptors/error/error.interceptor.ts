import { HttpErrorResponse, HttpInterceptorFn } from '@angular/common/http';
import { catchError, retry, throwError } from 'rxjs';
import { parseErrorMessages } from '../../utils/parseErrorMessages.utils';


/**
 * @description Error Interceptor to filter error handlin on the Response layer. There would be retry of once before throwing error.
 * @param req 
 * @param next 
 * @returns 
 */
export const errorInterceptor: HttpInterceptorFn = (req, next) => {
  return next(req).pipe(
    retry(1),
    catchError((error: HttpErrorResponse) => {
      const errorMsg = `${parseErrorMessages(error)} while calling ${req.url}`;
      return throwError(() => errorMsg)
    })
  )
};
