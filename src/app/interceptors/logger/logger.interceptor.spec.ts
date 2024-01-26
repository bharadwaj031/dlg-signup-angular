import { TestBed } from '@angular/core/testing';
import { HttpHandlerFn, HttpInterceptorFn, HttpRequest } from '@angular/common/http';

import { loggerInterceptor } from './logger.interceptor';
import { of } from 'rxjs';

describe('loggerInterceptor', () => {
  const interceptor: HttpInterceptorFn = (req, next) => 
    TestBed.runInInjectionContext(() => loggerInterceptor(req, next));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(interceptor).toBeTruthy();
  });
  it('should be intercept', (done) => {
    const mockReq = new HttpRequest('GET', '')
    const next = () => {
      handle: () => {
        return of({ status: 'OK' });
      }
    }
    interceptor(mockReq, next as unknown as HttpHandlerFn)
    done()
  });
});
