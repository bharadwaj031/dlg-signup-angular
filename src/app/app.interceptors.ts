import { errorInterceptor } from "./interceptors/error/error.interceptor";
import { loggerInterceptor } from "./interceptors/logger/logger.interceptor";

export const interceptors = [loggerInterceptor, errorInterceptor];
