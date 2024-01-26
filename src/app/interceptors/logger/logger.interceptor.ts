import { HttpInterceptorFn } from '@angular/common/http';
/**
 * @description Logger Interceptor to log on the Request/Response layer.
 * @param req 
 * @param next 
 * @returns 
 */
export const loggerInterceptor: HttpInterceptorFn = (req, next) => {
  // console.info('Request URL', req.url)
  
  /**
   * Extend this Interceptor to add during the API calls with JWT token login authentication and authorization.
   */
  // const {headers: {set}} = req
  // // const _authReq = req?.clone({
  // //   headers: set('Authorization', 'Bearer Token to be entered here')
  // // })

  return next(req);
};
